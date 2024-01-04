---
title: Reading
index: false
icon: list-check
navbar: true
article: false
date: 2024-01-04
---
**Please select stories from the <span style="color:orange">left pane</span>.**




``` python
from PIL import Image
import os
def updownsplit(prefix, fullname):
    ppath, filename = os.path.split(fullname)
    name, ext = os.path.splitext(filename)
    image = Image.open(fullname)
    i = int(name.split("_")[-1])
    image = Image.open(fullname)
    width, height = image.size
    print(name, ext)
    print(os.path.join(prefix, f"{i*2:03d}{ext}"))
    image.crop((0, 0, width, height//2)).save(os.path.join(prefix, f"{i*2-1:03d}{ext}"))
    
    if i > 1:
        image.crop((0, height//2, width, height)).rotate(180).save(os.path.join(prefix, f"{i*2:03d}{ext}"))
    else:
        image.crop((0, height//2, width, height)).save(os.path.join(prefix, f"{i*2:03d}{ext}"))

def leftrightsplit(prefix, fullname):
    ppath, filename = os.path.split(fullname)
    name, ext = os.path.splitext(filename)
    image = Image.open(fullname)
    i = int(name.split("_")[-1])
    image = Image.open(fullname)
    width, height = image.size
    print(name, ext)
    print(os.path.join(prefix, f"{i*2:03d}{ext}"))
    image.crop((0, 0, width//2, height)).save(os.path.join(prefix, f"{i*2-1:03d}{ext}"))
    image.crop((width//2, 0, width, height)).save(os.path.join(prefix, f"{i*2:03d}{ext}"))

imgs = [
    "raz_lk10_allaboutkites_clr-p_页面_1.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_2.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_3.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_4.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_5.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_6.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_7.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_8.jpg",
    "raz_lk10_allaboutkites_clr-p_页面_9.jpg",
]

prefix = r"E:\BaiduNetdiskDownload\RAZ 2000册\K 75\All About Kites\half"


for i in imgs:
    updownsplit(prefix, i)
```