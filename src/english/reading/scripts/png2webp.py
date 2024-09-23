import os
import webp
from PIL import Image
path = r"F:\01.workspace\27.blog\blog-son\reading"
path = r"F:\01.workspace\27.blog\blog-son\reading\Level-K"
import sys
sys.path.append(os.path.split(__file__)[0])
from thread_util import thread_util

def png2webp(png_file, webp_file, del_png=True, overwrite=False):
    if (os.path.exists(webp_file) and overwrite) or not os.path.exists(webp_file):
        image = Image.open(png_file)
        webp.save_image(image, webp_file, quality=80)

    if del_png:
        os.remove(png_file)

thread_obj = thread_util(30)

for parent, folder, files in os.walk(path):
    for f in filter(lambda x: x.endswith(".png"), files):
        thread_obj.process(png2webp, (
            os.path.join(parent, f),
            os.path.join(parent, f[:-3]+"webp")
            ), os.path.join(parent, f))
    print(parent)
thread_obj.wait()