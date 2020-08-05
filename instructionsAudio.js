var gtts = require("gtts");
const t = "voice command instructions: number 1, command to open file dialog to select image is: upload. number 2, command to submit the selected image is: go. number 3, command to capture the image using the in-built webcam is: capture. number 4, command to select the destination language for translation is the name of the language, for example, chinese, english "
var speech = new gtts(t);
speech.save('./public/instructions.mp3');