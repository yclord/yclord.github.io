from pdf2image import convert_from_path
from PIL import Image
import os

def pdf_to_images(pdf_path, output_folder):
    print(pdf_path)
    print(output_folder)
    # Convert PDF pages to images
    images = convert_from_path(pdf_path)
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    # Save images to the output folder
    for i, image in enumerate(images):
        image_path = os.path.join(output_folder, f'page_{i+1}.png')
        image.save(image_path, 'PNG')
        print(f'Saved {image_path}')

path = r"C:\Users\wangh\Downloads\K 75"
output_base = r"C:\Users\wangh\Downloads\K75_Images"
for parent, folders, files in os.walk(path):
    for pdf in filter(lambda x: x.endswith("_clr.pdf"), files):
        _, folder = os.path.split(parent)
        output_folder = os.path.join(output_base, folder)
        pdf_to_images(os.path.join(parent, pdf), output_folder)



