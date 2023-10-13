import os
import json
import math

# 目标文件夹路径
folder_path = './photo'

# 获取文件名列表
file_names = os.listdir(folder_path)

# 生成JSON数据
json_data = []
cycle_count = 18  # 一个周期内数据

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
output_file = 'photo.json'
with open(output_file, 'w') as json_file:
    json.dump(json_data, json_file, indent=2)

print(f"Generated {len(json_data)} entries and saved/overwritten to {output_file}")
