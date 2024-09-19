---
title: 西游记
home: false
index: false
icon: list-check
navbar: true
---


https://xiyouji.5000yan.com/19830.html

``` python
from bs4 import BeautifulSoup
import requests as req

path = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\chinese\reading\xiyouji\src"
for page in range(19830, 19930, 1):
    url = f"https://xiyouji.5000yan.com/{page}.html"
    resp = req.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')
    main_body = soup.select_one(".grap")
    lines = main_body.text.split("\n")
    
    content = soup.select_one("h5.lh-base").text + \
        "\n" + \
        "\n".join(
            list(
                filter(lambda x: len(x.strip()) > 0, 
                    map(lambda x: x.replace("\t", ""), lines)
                )
            )
        )
    with open(os.path.join(path, f"{page-19830+1:02d}.txt"), "w", encoding="utf-8") as fw:
        fw.write(content)
```