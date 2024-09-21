import os
from PIL import Image
from datetime import datetime
img_path = r"C:\workspace\personal\yclord.github.io\src\.vuepress\public\data\english\reading\Level-K"


def single_img_pages(parent, files, relative_path="/data/english/reading/Level-K"):
    _, name = os.path.split(parent)
    header = f"""---
title: {name}
index: true
icon: circle-dot
author: Haiyue
layout: Slide
date: {datetime.now().strftime("%Y-%m-%d")}
---
"""
    name = name.replace(" ", "%20")
    pages = []
    for file in files:
        pages.append(f"![]({relative_path}/{name}/{file}")
    pages = "\n---\n".join(pages)
    return f"""{header} 
@slidestart
{pages}
@slideend"""

def double_pages(parent, files, relative_path="/data/english/reading/Level-K"):
    _, name = os.path.split(parent)
    header = f"""---
title: {name}
index: true
icon: circle-dot
author: Haiyue
layout: Slide
date: {datetime.now().strftime("%Y-%m-%d")}
---
"""
    name = name.replace(" ", "%20")
    pages = []
    for i in range(int(len(files)/2)):
        pages.append(f"""
<div style="display:flex">
<div style="flex:1">

![]({relative_path}/{name}/{i*2+1:03d}.png)
</div>
<div style="flex:1">

![]({relative_path}/{name}/{i*2+2:03d}.png)
</div>
</div>
""")
    pages = "\n---\n".join(pages)
    return f"""{header} 
@slidestart
{pages}
@slideend"""

md_folder = r"C:\workspace\personal\yclord.github.io\src\english\reading\K"
for parent, folders, files in os.walk(img_path):
    _, name = os.path.split(parent)
    if len(files) > 1:
        image = Image.open(os.path.join(parent, files[0]))
        rate = image.size[0]/image.size[1]
        if rate < 1:
            content = double_pages(parent, files)
        else:
            content = single_img_pages(parent, files)
        with open(os.path.join(md_folder, name.replace(" ", "")+".md"), "w") as fw:
            fw.write(content)