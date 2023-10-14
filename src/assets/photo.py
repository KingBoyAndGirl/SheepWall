import shutil

from PIL import Image
import os
import json
import math


def compress_images(input_folder, output_folder, target_size=800, min_quality=60, max_quality=95, step=1):
    """
    根据文件大小动态调整压缩质量，将图片压缩到目标大小范围内。

    参数:
    input_folder (str): 包含需要压缩的图片的文件夹路径。
    output_folder (str): 压缩后的图片保存到的文件夹路径。
    target_size (int): 压缩后的目标大小（以字节为单位），默认为 1024KB（1MB）。
    min_quality (int): 压缩的最低质量，1 表示最低质量。
    max_quality (int): 压缩的最高质量，95 表示最高质量。
    step (int): 质量递减的步长，即每次降低多少质量。

    返回:
    None
    """
    # 获取输入文件夹中的所有图片文件
    image_files = [f for f in os.listdir(input_folder) if f.lower().endswith((".jpg", ".jpeg", ".png", ".gif", ".bmp"))]

    # 创建输出文件夹
    os.makedirs(output_folder, exist_ok=True)

    # 遍历所有图片文件
    for image_file in image_files:
        input_path = os.path.join(input_folder, image_file)
        output_path = os.path.join(output_folder, image_file)

        # 获取文件大小
        file_size = os.path.getsize(input_path)

        if file_size <= target_size:
            # 文件小于等于目标大小，保留原始文件
            shutil.copy(input_path, output_path)
        else:
            # 文件大小大于目标大小，进行动态质量调整
            quality = max_quality
            img = Image.open(input_path)

            while file_size > target_size and quality >= min_quality:
                img.save(output_path, "JPEG", quality=quality)
                file_size = os.path.getsize(output_path)
                quality -= step

            print("压缩完成：" + output_path)

def generate_json_files(input_folders, output_files, cycle_count, folders_to_compress=None,
                        compressed_output_folders=None):
    for i in range(len(input_folders)):
        folder_path = input_folders[i]
        output_file = output_files[i]

        # 判断是否需要压缩
        compress = folders_to_compress and folder_path in folders_to_compress

        if compress:
            compressed_folder_path = compressed_output_folders[i] if compressed_output_folders else os.path.join(
                folder_path, "compressed")
            os.makedirs(compressed_folder_path, exist_ok=True)
            compress_images(folder_path, compressed_folder_path)

        # 生成JSON数据
        json_data = []

        # 计算y的周期数，向上取整
        file_names = os.listdir(compressed_folder_path if compress else folder_path)
        y_cycles = math.ceil(len(file_names) / cycle_count)

        x = 0
        cycle = 0
        for file_name in file_names:
            json_data.append({
                "src": file_name,
                "x": x,
                "y": cycle + 1
            })
            x += 1
            if x % cycle_count == 0:
                x = 0
                cycle += 1

        # 覆盖重写JSON数据到文件
        with open(output_file, 'w') as json_file:
            json.dump(json_data, json_file, indent=2)

        print(f"Generated {len(json_data)} entries and saved/overwritten to {output_file}")


# 使用函数，传入多个目录和对应的输出文件
input_folders = ['D:/code/SheepWall/src/assets/photo', 'D:/code/SheepWall/src/assets/home/compressed']
output_files = ['D:/code/SheepWall/src/assets/photo.json', 'D:/code/SheepWall/src/assets/home.json']
cycle_count = 18

# 指定哪些文件夹需要压缩
folders_to_compress = ['D:/code/SheepWall/src/assets/home']

# 指定压缩后的文件输出目录
compressed_output_folders = ['D:/code/SheepWall/src/assets/photo/compressed',
                             'D:/code/SheepWall/src/assets/home/compressed']

# 调用函数并传入参数，根据需要压缩图片
generate_json_files(input_folders, output_files, cycle_count, folders_to_compress, compressed_output_folders)

print("所有工作完成")
