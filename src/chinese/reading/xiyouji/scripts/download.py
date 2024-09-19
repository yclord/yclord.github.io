import os
from bs4 import BeautifulSoup
import requests as req

path = os.path.join(os.path.split(__file__)[0], "../src")
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