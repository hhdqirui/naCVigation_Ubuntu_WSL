# naCVigation

## Proposed Level of Achievement
Apollo 11

## About
There are two versions of our project. Each of them has its own strengths and short-comings.   

Version 1: https://nacvigation.azurewebsites.net  
Version 2: ec2-54-254-182-176.ap-southeast-1.compute.amazonaws.com:3000   

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
|"chinese"       | the text input field will be filled with the word "chinese" and the text will be translated to Chinese|
|"english"       | the text input field will be filled with the word "english" and the text will be translated to English|
|"upload"        | open the file dialog (need to click the webpage first. Anywhere would be fine)            |
|"go"            | submit the image                 |
|"capture"       | capture the image                |


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
3. Download Tesseract-OCR from https://github.com/UB-Mannheim/tesseract/wiki. Know the path to `tesseract.exe`. Then add `pytesseract.pytesseract.tesseract_cmd = '{path to tesseract.exe}\\tesseract.exe'` to `line 5` of `main.py` ({path to tesseract.exe} is the path to tesseract.exe in Tesseract-OCR that is downloaded) 
4. In terminal, run  
`pip install opencv-python pytesseract googletrans`
7. To start the server, run  
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
6. In terminal run    
`pip3 install opencv pytesseract googletrans`
7. To start the server, run  
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

![Image](https://drive.google.com/open?id=1A17D9IejHANmGrqYLBMWvcKaKoaB3uXJ)

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

## Tech Stack 
1. Node.js
2.	Python3
3.	OpenCV
4.	Tesseract-OCR
5.	HTML/CSS
6.	JavaScript
7. googletrans

