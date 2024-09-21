
from PIL import Image
import os

def updownsplit(output_folder, img_fullname):
    _, filename = os.path.split(img_fullname)
    name, ext = os.path.splitext(filename)
    i = int(name.split("_")[-1])
    image = Image.open(img_fullname)
    width, height = image.size
    image.crop((0, 0, width, height//2)).save(os.path.join(output_folder, f"{i*2-1:03d}{ext}"))
    if i > 1:
        image.crop((0, height//2, width, height)).rotate(180).save(os.path.join(output_folder, f"{i*2:03d}{ext}"))
    else:
        image.crop((0, height//2, width, height)).save(os.path.join(output_folder, f"{i*2:03d}{ext}"))


def leftrightsplit(output_folder, img_fullname):
    _, filename = os.path.split(img_fullname)
    name, ext = os.path.splitext(filename)
    i = int(name.split("_")[-1])
    image = Image.open(img_fullname)
    width, height = image.size
    image.crop((0, 0, width//2, height)).save(os.path.join(output_folder, f"{i*2-1:03d}{ext}"))
    image.crop((width//2, 0, width, height)).save(os.path.join(output_folder, f"{i*2:03d}{ext}"))


img_path = r"C:\Users\wangh\Downloads\K75_Images"
output_path = r"C:\Users\wangh\Downloads\K75_Split"
for parent, folders, files in os.walk(img_path):
    for f in files:
        img = os.path.join(parent, f)
        image = Image.open(os.path.join(parent, f))
        rate = image.size[0]/image.size[1]
        _, folder = os.path.split(parent)
        output_folder = os.path.join(output_path, folder)
        img_fullname = os.path.join(parent, f)
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        if rate > 1:
            leftrightsplit(output_folder, img_fullname)
        else:
            updownsplit(output_folder, img_fullname)

