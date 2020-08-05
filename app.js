var PORT = process.env.PORT || 3000;

var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");
var urlencodedParser = bodyParser.urlencoded({extended: false});
var gtts = require("gtts");
const { render } = require("ejs");
var spawn = require("child_process").spawn;

// init app
var app = express();

// create a variables
var imgName = "";
var imgDiretory = "./public/upload/";
var audioDiretory = "./public/audio/";

// set storage engine
var storage = multer.diskStorage({
    destination: "./public/upload/",
    filename: function(req, file, cb){
        imgName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        console.log("img name: " + imgName);
        cb(null, imgName);
    }
});

//init upload
var upload = multer({
    storage: storage
}).single("img");

app.set("view engine", "ejs");

app.use(express.static("./public"));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index", {qs: req.query});
});

function langCode(lan){
    lan = lan.toLowerCase();
    if(lan == 'chinese'){
        return 'zh-cn';
    }
    else if(lan == 'english'){
        return 'en';
    }
    else if(lan == 'hindi'){
        return 'hi';
    }
    else if(lan == 'tamil'){
        return 'ta';
    }
    else if(lan == 'japanese'){
        return 'ja';
    }
    else if(lan == 'korean'){
        return 'ko'
    }
    else{
        return 'en';
    }
}

app.post("/upload", urlencodedParser, (req, res) => {
    console.log("in post upload: " + req.body);
    upload(req, res, (err) => {
        if(err){
            res.render("index", {
                qs: req.query,
                msg: err
            });
        }
        else{
            console.log("in else");
            console.log(req.body);
            console.log(req.file);
            
            if(req.file == undefined){
				res.render("index", {
                    qs: req.query,
					msg: "Error: No File Found"
				});
			}
			else{
                // child process here

                var img_dir_and_name = imgDiretory + imgName;
                console.log(img_dir_and_name);

                // spawn child process
                var process = spawn("python3", ["./main.py", img_dir_and_name, req.body.lang]);
                var dataToSend;
                process.stdout.on("data", function(data){
                    console.log("child process");

                    //get the data(extracted text of the image) from running the python script
                    dataToSend = data.toString();
                    console.log("====================\nextracted text:\n" + dataToSend + "====================");

                    // create speech audio using gtts and save under ./public/audio
                    var destLang = langCode(req.body.lang);
                    
                    var speech = new gtts(dataToSend, destLang);
                    var audio_dir_and_name = `./public/audio/${imgName}.mp3`;

                    console.log("before save");
                    speech.save(audio_dir_and_name, function(err, result){
                        console.log('saving');
                        if(err){
                            console.log('gtts error: ' + err);
                        }
                        else{
                            // render
                            console.log('render');
	        			    res.render("index", {
                                qs: req.query,
		        			    msg: "File uploaded!",
                                file: `upload/${req.file.filename}`,
                                txt: dataToSend,
                                audio_dir_and_name: `audio/${imgName}.mp3`
                            });
                            console.log('gtts success!!!!!!');
                        }
                    });
                    console.log('after save');
                });
                
                // print error from child process if any
                process.stderr.on("data", function(data){
                    console.error(`child stderr: ${data}`);
                });

                
			}
        }
    });
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`));