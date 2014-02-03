#!/usr/bin/python

## Very simple python program to get stats for a given fileo


import sys

import os
# TODO: return if sys len <= 1

fileName = sys.argv[1]









loc = os.popen("./findLinesInFile.sh " + fileName).read()
commentCount= os.popen("node getCommentCount.js " + fileName).read()
actualCodeCount =  int(loc) - int(commentCount)


commentDesnity=    float(commentCount) / float(loc)


print "{ "
print "'fileName': '"
print fileName
print "'"
print ", 'loc': "
print loc

print ", 'actualLines': "

print actualCodeCount
print ", 'commentCount': "
print commentCount

print ", 'commentDesnity': "

print commentDesnity

print "} "


