import sys
import cv2
import pytesseract
from googletrans import Translator

img = cv2.imread(sys.argv[1])
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
txt = pytesseract.image_to_string(img)
lang = sys.argv[2]
translator = Translator()

if lang == '':
    print(translator.translate(txt, 'en').text)
else:
    if lang == 'chinese':
        print(translator.translate(txt, 'zh-cn').text)
    elif lang =='english':
        print(translator.translate(txt, 'en').text)