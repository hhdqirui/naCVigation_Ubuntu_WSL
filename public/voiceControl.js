var speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const destlang = document.getElementById("destlang");
recognition.continuous = true;
recognition.start();
recognition.addEventListener("start", () => {
    console.log("voice recognition start");
    destlang.focus();
});

function performClick(elemId) {
    var elem = document.getElementById(elemId);
    if(elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
        console.log("click");
    }
}

recognition.onresult = function(event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        document.getElementById("destlang").click();
    	if (event.results[i].isFinal) {
            var transcript = event.results[i][0].transcript.toLowerCase().trim()
    
            if (transcript == "chinese" || transcript == "english") {
                destlang.value = transcript;
            }
            else if (transcript == "upload" || transcript == "wupload") {
                document.getElementById("click").click();
            }
            else if (transcript == "go") {
                document.getElementById("submit").click();
            }
            else if(transcript == "capture"){
                document.getElementById("capture").click();
            }
			console.log(event);
    		console.log(`You said : ${event.results[i][0].transcript}`);
		}
		else{
			console.log("result is not final");
		}
    }
};

// video capture
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

var handleSuccess = function(stream) {
	// Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

captureButton.addEventListener('click', function() {
	var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    const myCanvas = document.querySelector("#snapshot");
    const dataURI = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=dataURI;
});

// submitCapBtn.addEventListener('click', () => {
//     var canvas = document.getElementById("snapshot");
//     var snapshotCanvas = canvas.toDataURL("image/png");
//     exports.snapshotCanvas = snapshotCanvas;
// });

navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);

// exports.snapshotCanvas = snapshotCanvas;
// exports.boolCapture = boolCapture;
// var a = 1;
// exports.a =a;