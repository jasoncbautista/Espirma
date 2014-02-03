#!/usr/bin/python

## Very simple python program to get stats for a given fileo


import sys

import os
# TODO: return if sys len <= 1

fileName = sys.argv[1]

print fileName





loc = os.popen("./findLinesInFile.sh " + fileName).read()

print loc
