
from pdf2image import convert_from_path
from PIL import Image
import os
import sys
import webp
sys.path.append(os.path.split(__file__)[0])
from thread_util import thread_util
#import os

def updownsplit(output_folder, image, i, ext=".png"):
   width, height = image.size

   webp.save_image(image.crop((0, 0, width, height//2)), os.path.join(output_folder, f"{i*2+1:03d}.webp"), quality=80)
   if i > 1:
       webp.save_image(image.crop((0, height//2, width, height)).rotate(180), os.path.join(output_folder, f"{i*2+2:03d}.webp"), quality=80)
   else:
       webp.save_image(image.crop((0, height//2, width, height)), os.path.join(output_folder, f"{i*2+2:03d}.webp"), quality=80)


def leftrightsplit(output_folder, image, i, ext=".png"):
   width, height = image.size
   webp.save_image(image.crop((0, 0, width//2, height)), os.path.join(output_folder, f"{i*2+1:03d}.webp"), quality=80)
   webp.save_image(image.crop((width//2, 0, width, height)), os.path.join(output_folder, f"{i*2+2:03d}.webp"), quality=80)


def save_imgs(output_folder, imgs):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    # Save images to the output folder
    for i, image in enumerate(imgs):
        image_path = os.path.join(output_folder, f'page_{i+1}.png')
        image.save(image_path, 'PNG')

# pdf2image require poppler, please download from 
# https://github.com/oschwartz10612/poppler-windows/releases/
def pdf_to_images(pdf_path, output_folder=None):
    # Convert PDF pages to images
    images = convert_from_path(pdf_path)
    #if None is output_folder:
    #    save_imgs(output_folder, images)
    
    for i, image in enumerate(images):
        rate = image.size[0]/image.size[1]
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        if rate > 1:
            leftrightsplit(output_folder, image, i)
        else:
            updownsplit(output_folder, image, i)

path = r"E:\BaiduNetdiskDownload\RAZ 2000册"
output_base = r"F:\01.workspace\27.blog\blog-son\yclord.github.io\src\.vuepress\public\data\english\reading"

def get_level_name(fullname):
    path, _ = os.path.split(fullname)
    path, name = os.path.split(path)
    path, level = os.path.split(path)
    return ("Level-"+level.strip()[0], name)

def process(fullname):
    book_level, book_name = get_level_name(fullname)
    print("Level: ", book_level, "Book Name: ", book_name)
    output_path = os.path.join(output_base, book_level, book_name)
    if os.path.exists(output_path):
        for i in range(1, 100):
            if not os.path.exists(output_path + "-" + str(i)):
                output_path += "-" + str(i)
                break
    pdf_to_images(fullname, output_path)

thread_obj = thread_util(30)
for parent, folders, files in os.walk(path):
    for pdf in filter(lambda x: x.endswith("_clr.pdf"), files):
        thread_obj.process(process, (os.path.join(parent, pdf),), os.path.join(parent, pdf))

thread_obj.wait()
