---
title: 语文（Chinese）
index: false
navbar: false
article: false
date: 2024-01-02
---

## python 判断是否为汉字
``` python
for i in "aaa海洋":
    a = '\u0e00'<=i<='\u9fa5'
    print(i, a)
```
## python 汉字转拼音
**Sample**
``` python
>>> from pypinyin import pinyin, lazy_pinyin, Style
>>> pinyin('中心')
[['zhōng'], ['xīn']]
>>> pinyin('中心', heteronym=True)  # make use of heteronym mode
[['zhōng', 'zhòng'], ['xīn']]
>>> pinyin('中心', style=Style.FIRST_LETTER)  # set the pinyin style
[['z'], ['x']]
>>> pinyin('中心', style=Style.TONE2, heteronym=True)
[['zho1ng', 'zho4ng'], ['xi1n']]
>>> pinyin('中心', style=Style.TONE3, heteronym=True)
[['zhong1', 'zhong4'], ['xin1']]
>>> pinyin('中心', style=Style.BOPOMOFO)  # zhuyin mode
[['ㄓㄨㄥ'], ['ㄒㄧㄣ']]
>>> lazy_pinyin('中心')  # don't include tone information or heteronyms
['zhong', 'xin']
```

## python 给汉字加上拼音
``` python
words = "尽其所有力量做最后一搏"
pinyin = "jìn qí suǒ yǒu lì liàng zuò zuì hòu yī bó".split(' ')
ret = ""
for i in range(len(words)):
  ret = f"{ret}<ruby>{words[i]}<rt>{pinyin[i]}</rt></ruby>"

print(ret)
```

## 综合
``` python
from pypinyin import pinyin, lazy_pinyin, Style

def isChinese(word):
    if not '，。？！：；、）（“”…《 》【】——·'.__contains__(word):
        return '\u0e00'<=word<='\u9fa5'
    return False


def htmlPinyin(words):
    ret = ""
    offset = 0
    pinyins = pinyin(words)
    print(pinyins)
    pinyinc = 0
    nonPinyinContinue = True
    for i in range(len(words)):
        if isChinese(words[i]):
            nonPinyinContinue = False
            ret = f"{ret}<ruby>{words[i]}<rt>{pinyins[i-offset + pinyinc][0]}</rt></ruby>"
        else:
            offset += 1
            ret += words[i]
            if not nonPinyinContinue:
               pinyinc += 1 
            nonPinyinContinue = True
    return ret

htmlPinyin("尽其所有力量，-)dfe做最，=后一搏")
```

## 转语音
``` python
!pip install pyttsx3
import pyttsx3
pyttsx3.speak("Hello world")
pyttsx3.speak("你好")
```



## 汉语加拼音（文件）
``` python
import os
import sys

from pypinyin import pinyin, lazy_pinyin, Style

def isChinese(word):
    if not '，。？！：；、）（“”…《 》【】——·'.__contains__(word):
        return '\u0e00'<=word<='\u9fa5'
    return False


def htmlPinyin(words):
    ret = ""
    offset = 0
    pinyins = pinyin(words)
    pinyinc = 0
    nonPinyinContinue = True
    for i in range(len(words)):
        if isChinese(words[i]):
            nonPinyinContinue = False
            ret = f"{ret}<ruby>{words[i]}<rt>{pinyins[i-offset + pinyinc][0]}</rt></ruby>"
        else:
            offset += 1
            ret += words[i]
            if not nonPinyinContinue:
               pinyinc += 1 
            nonPinyinContinue = True
    return ret

if len(sys.argv) > 1:
    if os.path.exists(sys.argv[1]):
        ret = None
        with open(sys.argv[1], 'r', encoding='utf-8') as fr:
            ret = fr.read()
        if ret:
            with open(sys.argv[1] + ".html", 'w', encoding='utf-8') as fw:
                fw.write(htmlPinyin(ret))
        else:
            print(sys.argv[1], "内容为空")
    else:
        print(sys.argv[1], "不存在")
```

## References
[pypinyin](https://github.com/mozillazg/python-pinyin/blob/master/README_en.rst)