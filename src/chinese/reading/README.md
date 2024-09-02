---
title: 阅读（Reading）
home: false
index: false
icon: list-check
navbar: true
---


从左侧边栏选择相关内容


## Common Function
``` python
import os
import sys

from pypinyin import pinyin, lazy_pinyin, Style

def isChinese(word):
    if not '，。？！：；、）（“”…《 》【】——·'.__contains__(word):
        return '\u0e00'<=word<='\u9fa5'
    return False


def get_pinyin_html(words, pinyins):
    if len(words) != len(pinyins):
        print(words)
        print(pinyins)
        raise "Length is not equals"
    ret = ""
    for i in range(len(words)):
        ret = f"{ret}<ruby>{words[i]}<rt>{pinyins[i][0]}</rt></ruby>"
    return ret

def htmlPinyin(words):
    ret = ""
    offset = 0
    text = ""
    for word in words:
        if isChinese(word):
            text = f"{text}{word}"
        else:
            #process pinyin
            text_pinyin = pinyin(text)
            if len(text) > 0:
                ret = f"{ret}{get_pinyin_html(text, text_pinyin)}{word}"
            else:
                ret = f"{ret}{word}"
            #initialize text
            text = ""
    return ret
```


### Scripts
``` python
def create_pinyin(file):
    if os.path.exists(file):
        ret = None
        with open(file, 'r', encoding='utf-8') as fr:
            ret = fr.read()
        lines = ret.split("\n")
        with open(file + ".html", 'w', encoding='utf-8') as fw:
            for line in lines:
                fw.write(htmlPinyin(line))
                fw.write("\n")
    else:
        print(sys.argv[1], "不存在")

file = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\chinese\reading\xiyouji\src\01.txt"
file = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\chinese\reading\xiyouji\src\02.txt"
file = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\chinese\reading\xiyouji\src\03.txt"

create_pinyin(file)
```