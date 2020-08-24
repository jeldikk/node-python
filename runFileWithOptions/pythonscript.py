import argparse
import time

import champakraja # this module is installed only in virtualenv
# import jigeluraja

parser = argparse.ArgumentParser(description="This is a test python script to test with nodejs")

parser.add_argument("-f",action="store",type=int,dest="from_val",help="starting from integer")
parser.add_argument("-t",action="store",type=int,dest="to_val",help="end to integer")
parser.add_argument("-i",action="store",type=int,dest="incr",help="increment from to end")

results = parser.parse_args()

for val in range(results.from_val,results.to_val,results.incr):
    time.sleep(0.01)
    print(val)
