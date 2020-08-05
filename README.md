# naCVigation

## Proposed Level of Achievement
Apollo 11

## About
There are two versions of our project. Each of them has its own strengths and short-comings.   

Version 1: https://nacvigation.azurewebsites.net  
Version 2: ec2-54-254-182-176.ap-southeast-1.compute.amazonaws.com:3000     

Version 2 github repository:   
Windows version: https://github.com/hhdqirui/naCVgation  
Linux (Ubuntu) version: https://github.com/hhdqirui/naCVigation_Ubuntu_WSL

Both versions can use a webcam to capture image on the spot and then download the image which users can use for text extraction in this website. Both versions also have voice control mechanism which is friendly for visually impaired people, allowing users to use its functionalities without the need to click different buttons. but the voice control mechanism of the two version is used under different conditions.

For version 1, users can directly use voice control on the website. However, the text extraction from images is not so accurate as compared to version 2.    

Version 2 has a much better performance in terms of text extraction from images as comapred to version 1. However, as we do not have a domain and SSL certificate, we are not able to set up "https" for version 1 website. Therefore, the browser would not grant access to webcam and micphone and voice control cannot be used by users. As such, it is recommended to run version 2 locally so that users can use voice control in this website.

## Usage
### version 1
1. In the center, there is a section labelled "voice control". Click the part of this section that is on the right. Voice control mechanism will start. There is a list of voice control command below.
2. Submit the picture and it will direct to another page where the extracted text is dispalyed and an audio of the extracted text will be played.

#### voice control command

|command         | action taken by the website      |
|----------------|----------------------------------|
|"stop recording"| stop recording your voice        |
|"reset input"   | reset the input in the field     |
|"yes"           | submit the file (need to click the webpage first. Anywhere would be fine)                      |
|"go"            | choose the file                  |
|"hi"            | capture the image                |
|"hey"           | choose the translate file        |
|"no"            | submit the translate file        |
|"hello"         | go back to the previous page     |

### version 2
1. Click the "choose file" button to choose the image file you want to extract text from.
2. In the text input box, type in the language you want to translate the text from the image to. You can also leave it blank.
Default language is "English"
3. Click the submit button and it will direct to another page where the extracted text is dispalyed and an audio of the extracted text will be played.
4. This website also have voice control mechanism. You can use different voice command to achieve the steps above.

#### voice control command

|command         | action taken by the website      |
|----------------|----------------------------------|
|"upload"        | open the file dialog (need to click the webpage first. Anywhere would be fine)            |
|"go"            | submit the image                 |
|"capture"       | capture the image                |
|"{name of the language}" e.g. "chinese"|fill the text input field with the name of the language  i.e. set the destination language of translation|
|"help"          |paly the audio form of voice command instructions|


## To run version 2 website locally
There are two version of version 2 website. One for Windows (preferably Windows 10) and one for Linux (preferably Ubuntu).
### For Windows
#### prerequisite
1. Node.js and npm
2. python
#### procedure
1. Clone this repository https://github.com/hhdqirui/naCVgation
2. In terminal, run  
 `npm install`  
  If not successful, run  
   `npm install express ejs multer gtts body-parser iconv-lite`.
3. In terminal, run  
`pip install opencv-python pytesseract googletrans`
4. To start the server, run  
`node app.js`  
then open a browser and go to http://localhost:3000/   

### For Linux
#### prerequiste
1. Node.js and npm
2. python3

#### procedure
1. Clone this repository https://github.com/hhdqirui/naCVigation_Ubuntu_WSL
2. In terminal, run  
 `npm install`  
  If not successful, run  
   `npm install express ejs multer gtts body-parser`.
3. In terminal, run  
`sudo apt install python3-opencv`  
then run  
`sudo apt install tesseract-ocr`  
`sudo apt install libtesseract-dev`
4. In terminal run    
`pip3 install opencv-python pytesseract googletrans`
5. To start the server, run  
`node app.js`  
then open a browser and go to http://localhost:3000/

## Motivation

To help those visually impaired people to easily access information as they rely mainly on their hearing to obtain information especially when braille is not available. 

Moreover, sometimes textual information is stored inside pictures and thus this information is not easily accessible, so we want to extract out the important information from the pictures and make it accessible for the visually impaired people as well as the non-visually impaired people for their own purposes.

## Aim

We wish to develop a tool using image recognition and text-to-speech tools to help the visually impaired people in their daily life. For the non-visually impaired people, this tool can help in extraction of text from images and make this process more convenient.

## User Stories 

1.	As the user, this application “speaks out” what is written or printed on a picture without me having to look at the picture or poster to know what is written or printed on them.
2.	As the user, this application can help me extract text from the pictures efficiently which can then be stored or be used for other purposes, without me having to type out the whole text.
3.	As the user, the application can translate the text in different languages which allow me to use that in different context. 
4.	As a visually impaired user, the application has a voice control mechanism that allows me to control what functions to use using voice without the need to physically pick the function.

## How are we different from other platforms?

1.	Some translation apps, such as Youdao Dictionary and PowerWord, may have similar functions. For example, they have the options to take pictures or upload photos so as to translate the words in the pictures or photos from one language to another. However, they do not have the option of speaking out as well as lack the voice control mechanism, which is not user-friendly to visually impaired people.
2.	Some websites, such as Baidu may have the ability to extract the text from the photos, but they do not have the features of translating the text and speaking out the text all together.

## Program flow

![Image](https://github.com/hhdqirui/naCVigation_Ubuntu_WSL/blob/master/public/programFlow2.png)

## Features and Timeline

The Application would be able to extract text in pictures or photos and then convert the extracted text to audio which can be heard by visually impaired people. As such, visually impaired people would be able to know the information printed in the pictures or the photos, thus aiding in their daily navigation.

Additionally, for non-visually impaired people, this application can also make extraction of text from pictures or posters more conveniently. Users can use this application to access the text in the pictures or poster without having to personally type out and duplicate the text in the pictures or posters.

Moreover, we add the features of translating the extracted text in different languages so that users with different needs can use them. For example, those who are in a foreign language society or those who are learning multiple languages may find it helpful.

Last but not least, we include the voice control mechanism for visually impaired people to choose what functions or languages they want to use, instead of using fingers and eyes to choose the function or languages.

In conclusion, we hope to build an integrated platform that allows users to use various functions and languages to support their needs.



## Features to be completed by the mid of June: 

The design should be able to analyse images and extract text from the images

## Features to be completed by July: 

The design should be able to convert the extracted text into audio automatically right after the extraction of text from the image is done

## Features to be completed by the mid of July: 
Corporate this developed tool into a website and test it with sufficient data to make sure it works

## User Acceptance Test
We have gathered a group of volunteers to test our website. For each user, we put the users into two scenarios, one in which the user was not blindfolded and in the other scenario, the user was blindfolded in order to simulate a situation where the user is a visually-impaired person. Under these two scenarios, users were asked to use the websites and their feedback was recorded.  
  
### Feedback records:
|Tester’s background|Good Points|Areas of improvement|
|-------------------|-----------|--------------------|
|University student who is wearing spectacles  with 600 degrees|It is easy and simple to use. The UI looks very succinct and easy to control. The voice mechanism is great and it can truly understand my instructions.|The control words are quite hard to remember and if possible, can try to use words that have similar meaning to the functions.|
|University student who is wearing spectacles with 400 degrees|It is generally ready to use and the select and translate file is quite responsive.|Sometimes the voice mechanism may not be able to detect my commands and I need to restate my command. Can have more translation languages.|
|University student who is not wearing spectacles (no. 1)|The result of the extraction is generally good. It is easy to use.|Maybe Version 2 can have a better UI. Include instruction on the website so no need to refer to README for instruction to use the website.|
|University student who is not wearing spectacles (no. 2)|It is easy to use. The extraction is generally accurate. It is good when using on a smartphone as it can take pictures directly on the phone and use it|The style of the button can be better and make the button bigger as it is not easy  to click on the smartphone.|
|Middle age working adult (no. 1)|It is good to use and the translation is roughly correct.|The voice command words are not easy to remember. Can improve on supporting more translation language.|
|Middle age working adult (no. 2)|It is easy to use and the extraction is quite accurate.|When using the website on a smartphone, the button is still a bit small and the text label of the button is not clear. The voice command words can be more relevant to the instructions.|

### Improvement Based on Feedback
We have summarized the feedback gathered. According to these feedback, we made adjustments and improved on our current project.  

|Areas of improvement|Improvement|
|--------------------|-----------|
|Style of the buttons on the website|We have re-styled our buttons to make it larger and to make the text labels of the buttons are also visible.|
|Include instructions on the website(voice command word hard to remember)|We have included instructions in textual form and audio form on the website. The audio of instructions can also be played using voice command.|
|Translation languages|We have included more languages for destination languages of translation.|
|Control words have no meaning to the command we want to use|We have adjusted and improved on the relevance of voice control words in our version 2 website. During our self-testing, we have tried to use the words that are more relevant to the control action. However, due to the difference in the accent, the more relevant words tend to be more complicated and hard to detect. We are aware of our limitations on natural language processing knowledge and due to our current pool of knowledge, we are unable to detect the more complicated words accurately, so we have to sacrifice the convenience for the ready-to-use functions. However, in future when we are equipped with the relevant knowledge, we can definitely replace the words with the more meaningful words.|
|Sometimes voice cannot be detected|We have re-written the code on voice recognition to make it more suitable for discreet word detection. Voice command not being detected might be due to the browser the use is using. It is recommended to use Chrome and Firefox for this website. This may also be due to the fact that the surrounding is noisy or there are other sounds present that might affect the voice detection. It is good to choose a place that is relatively quiet.|
|Extraction process may be slow sometimes.|Due to the limitation in the processing power of the free online server we are using, the translation may take some time for complicated images.We can increase the processing power of the website so that we can be faster in detecting, extracting and translating the more complicated words when we are equipped with a greater budget in the future.|

## Supported Language for Audio Conversion
- Chinese
- English
- Hindi
- Tamil
- Japanese
- Korean

## Supported Language for translation
https://py-googletrans.readthedocs.io/en/latest/#googletrans-languages


## Tech Stack 
1. Node.js
2.	Python3
3.	OpenCV
4.	Tesseract-OCR
5.	HTML/CSS
6.	JavaScript
7. googletrans

