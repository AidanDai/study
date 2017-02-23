#!/bin/bash

#Author: Aidan

for loop in 1 2 3 4 5 6 7 8 9 10
do
  echo "the value is: $loop"
done

for FILE in $HOME/.bash*
do
  echo $FILE
done

array=(0 1 2 3 4 5 6 7 8 9 10)
for val in ${array[*]}
do
  echo $val
done
