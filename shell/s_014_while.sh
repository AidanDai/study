#!/bin/bash

#Author: Aidan

#COUNT=0
#while [ $COUNT -lt 5 ]
#do
#  COUNT=`expr $COUNT + 1`
#  echo $COUNT
#done

echo 'type <CTRL-D> to terminate'
echo -n "enter your most liked color:"
while read FILE
do
  echo "Yeah! great color the $FILE"
done
