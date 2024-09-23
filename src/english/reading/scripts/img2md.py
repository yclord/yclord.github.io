import os
from PIL import Image
from datetime import datetime
import webp

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
        pages.append(f"![]({relative_path}/{name}/{file})")
    pages = "\n\n---\n\n".join(pages)
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
        _, ext = os.path.splitext(files[0])
        pages.append(f"""
<div style="display:flex">
<div style="flex:1">

![]({relative_path}/{name}/{i*2+1:03d}{ext})
</div>
<div style="flex:1">

![]({relative_path}/{name}/{i*2+2:03d}{ext})
</div>
</div>
""")
    pages = "\n---\n".join(pages)
    return f"""{header} 
@slidestart
{pages}
@slideend"""

img_path = r"F:\01.workspace\27.blog\blog-son\reading\english"
img_path = r"F:\01.workspace\27.blog\blog-son\reading\Level-K"
md_folder = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\english\reading"



def get_md_content(parent, files):
    if len(files) > 1:
        if files[0].endswith(".webp"):
            image = webp.load_image(os.path.join(parent, files[0]), 'RGBA')
        else:
            image = Image.open(os.path.join(parent, files[0]))
        #image = Image.open(os.path.join(parent, files[0]))
        rate = image.size[0]/image.size[1]
        book_level, book_name = get_level_name(parent)
        base_url = "https://raw.githubusercontent.com/yclord/reading/refs/heads/master/english"
        if rate < 1:
            content = double_pages(parent, files, f"{base_url}/{book_level}")
            pass
        else:
            content = single_img_pages(parent, files, f"{base_url}/{book_level}")
        return content

def get_level_name(parent):
    path, book_name = os.path.split(parent)
    path, book_level = os.path.split(path)
    return (book_level, book_name)

def write_readme(fullname, name):
    with open(fullname, "w") as fw:
        fw.write(f"""---
title: {name}
index: false
navbar: true
icon: list-check
article: false
date: {datetime.now().strftime("%Y-%m-%d")}
---
""")

for parent, folders, files in os.walk(img_path):
    _, name = os.path.split(parent)
    if len(files) > 1:
        content = get_md_content(parent, files)
        if content is not None:
            book_level, book_name = get_level_name(parent)
            if not os.path.exists(os.path.join(md_folder, book_level)):
                os.makedirs(os.path.join(md_folder, book_level))
                write_readme(os.path.join(md_folder, book_level, "README.md"), book_level)
            with open(os.path.join(md_folder, book_level, name.replace(" ", "")+".md"), "w") as fw:
                fw.write(content)