from pypinyin import pinyin, lazy_pinyin, Style
import datetime
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

#htmlPinyin("尽其所有力量，-)dfe做最，=后一搏")


date = datetime.datetime(2024,1,4)
with open('idiom.txt', 'r', encoding="utf-8") as fr:
    line = fr.readline()
    i = 0
    while len(line ) > 0:
        i += 1
        ret = []
        while len(line) > 1:
            ret.append(line)
            line = fr.readline()
        line = fr.readline()
        
        cn_idiom = ret[1][:-1]
        cn_meaning = ret[3][:-1]
        cn_usuage = ret[7][:-1]
        en_idiom = ret[0][:-1].lower().capitalize()
        en_meaning = ret[-1][:-1]
        fname = date.strftime("%Y-%m-%d")
        md = f"""---
title: {cn_idiom.split(' ')[0]}
index: true
icon: circle-dot
author: Haiyue
date: {fname}
---
<span style="font-size:30px;font-weight:bold;">{htmlPinyin(cn_idiom.split(' ')[0])}</span>


::: tabs 
@tab 中文
**释义：** <span style="font-size:30px">{htmlPinyin(cn_meaning)}</span>

**用法：** <span style="font-size:30px">{htmlPinyin(cn_usuage)}</span>


@tab English
{en_idiom}

**How to use the metaphor:** {en_meaning}
:::
"""
        with open(f"{fname}_{cn_idiom.split(' ')[0]}.md", "w", encoding="utf-8") as fw:
            fw.write(md)
        date += datetime.timedelta(days=1)