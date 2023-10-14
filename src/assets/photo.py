import os
import json
import math

def generate_json_files(input_folders, output_files, cycle_count):
    for i in range(len(input_folders)):
        folder_path = input_folders[i]
        output_file = output_files[i]

        # 获取文件名列表
        file_names = os.listdir(folder_path)

        # 生成JSON数据
        json_data = []

        # 计算y的周期数，向上取整
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
            if x % (cycle_count) == 0:
                x = 0
                cycle += 1

        # 覆盖重写JSON数据到文件
        with open(output_file, 'w') as json_file:
            json.dump(json_data, json_file, indent=2)

        print(f"Generated {len(json_data)} entries and saved/overwritten to {output_file}")

# 使用函数，传入多个目录和对应的输出文件
input_folders = ['D:/code/SheepWall/src/assets/photo', 'D:/code/SheepWall/src/assets/home']
output_files = ['D:/code/SheepWall/src/assets/photo.json', 'D:/code/SheepWall/src/assets/home.json']
cycle_count = 18
generate_json_files(input_folders, output_files, cycle_count)
