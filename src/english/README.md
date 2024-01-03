---
title: 英文（English）
index: false
navbar: true
date: 2024-01-03
---

## python 判断是否为汉字
``` python
for i in "aaa海洋":
    a = '\u0e00'<=i<='\u9fa5'
    print(i, a)
```
## python 汉字转拼音
[pypinyin](https://github.com/mozillazg/python-pinyin/blob/master/README_en.rst)
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
    return '\u0e00'<=word<='\u9fa5'

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