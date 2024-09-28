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

src_path = os.path.join(os.path.split(__file__)[0], "../src")
dst_path = os.path.join(os.path.split(__file__)[0], "..")

for parent, folders, files in os.walk(src_path):
    for f in filter(lambda x: x.lower().endswith(".txt"), files):
        fname = os.path.splitext(f)[0]
        seq = (fname if len(fname) >= 3 else "0"+fname)
        output_md = os.path.join(dst_path, seq + ".md")
        if not os.path.exists(output_md):
            with open(os.path.join(parent, f), 'r', encoding='utf-8') as fr:
                ret = fr.read()
            lines = ret.split("\n")
            md_content = f"""---
title: {seq} {lines[0]}
index: true
date: 2024-09-19
---
""" + """
<style>
  ruby {
    font-size: 30pt;
  }
</style>
"""
            for line in lines:
                md_content += htmlPinyin(line.strip()) + "\n\n"
            with open(output_md, "w", encoding="utf-8") as fw:
                fw.write(md_content)



