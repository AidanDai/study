#!/bin/bash

#Author: Aidan

var=`expr 2 + 2`
echo "total value: $var"

a=10
b=20
var=`expr $a + $b`
echo "a + b: $var"

var=`expr $a - $b`
echo "a - b: $var"

var=`expr $a \* $b`
echo "a * b: $var"

var=`expr $a / $b`
echo "a / b: $var"

if [ $a == $b ]
then
  echo "a is equal to b!"
fi

if [ $a != $b ]
then
  echo "a is not equal to b!"
fi

echo "---------------------------------------------"

if [ $a -eq $b ]
then
  echo "$a -eq $b : a is equal to b."
else
  echo "$a -eq $b : a is not equal to b."
fi

firstName="Aidan"
LastName="Dai"

file="/home/aidan/shell-learn/s_001_hello.sh"
echo $file
