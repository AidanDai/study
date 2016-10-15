#!/bin/bash

#Author: Aidan

while :
do
  echo -n "input a number between 1 to 5:"
  read num
  case $num in
    1|2|3|4|5) echo "your nmuber is $num!";;
    *) echo "you do not select number between 1 to 5, game is over!"
      break;;
  esac
done
