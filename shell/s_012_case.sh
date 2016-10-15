#!/bin/bash

#Author: Aidan

#echo "please input a number between 1 to 4!"
#printf 'your number is:'
#read num
#case $num in
#  1) echo "you select 1.";;
#  2) echo "you select 2.";;
#  3) echo "you select 3.";;
#  4) echo "you select 4.";;
#  *) echo "you do not select a number between 1 to 4";;
#esac

option="${1}"

case ${option} in
  -f) FILE="${2}"
    echo "file name is $FILE";;
  -d) DIR="${2}"
    echo "directory name is $DIR";;
  *)
    echo "`basename ${0}`: usage: [-f file] | [-d directory]"
    exit 1 # command to come out of the program with status 1
    ;;
esac
