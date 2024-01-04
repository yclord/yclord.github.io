---
title: 拼音（Pinyin）
home: false
index: false
icon: list-check
date: 2024-01-02
---

## 构建拼音代码
``` python
a = "ai ei ui ao ou iu ie üe er an en in un ün ang eng ing ong"
a = "b p m f d t n l g k h j q x zh ch sh r z c s w y"
a = "a o e i u ü"

from functools import reduce
def get(w):
    id = w.replace("ü", 'v')
    onclick = [
        f"document.getElementById('{id}').style.backgroundColor = 'orange';",
        f"let audio = new Audio('/data/pinyin/{id}.mp3');",
        "audio.addEventListener('ended', function(){document.getElementById('" + id + "').style.backgroundColor = 'gray';});",
        f"audio.play()"
    ]
    style = "margin:0px 2px;width: 30px;float:left;background-color:gray;padding:1px;text-align: center;"
    onclick = reduce(lambda a, b: f"{a}{b}", onclick)
    return f"""<div id="{id}" style="{style}" onclick="{onclick}">{w}</div>"""


for i in a.split(" "):
    print(get(i))

```


## 参考资料
[汉语拼音](http://yunmu.hanyupinyin.cn/)
