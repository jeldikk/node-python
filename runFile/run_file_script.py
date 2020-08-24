import yaml
import sys

config = None

with open("run_file_yaml.yaml",'r') as fh:
    config = yaml.load(fh,Loader=yaml.FullLoader)


# with open("run_file_output.txt","w+") as ofh:
#     for key in config.keys():
#         ofh.write(key)
#         ofh.write("\n")

print(type(config))
print(config.keys())
print("this is another string")
print([1,2,3,4,5])