#!/bin/bash

#Author: Aidan

a=10

echo -e "value of a is $a"

DATE=`date`

echo "Date is $DATE"

USERS=`who | wc -l`

echo "Logged in user are $USERS"

UP=`date ; uptime`

echo "Uptime is $UP"

echo "----------------------------------------------"

echo "${var:-"variable is not set"}"
echo "1 - value of var is ${var}"

echo "${var:="variable is not set"}"
echo "2 - value of var is ${var}"

unset var
echo ${var:+"this is default value"}
echo "3 - value of var is $var "

var="prefix"
echo ${var:+"this is default value"}
echo "4 - value of var is $var"

unset var
echo ${var:?"print this message"}
echo "5 - value of var is ${var}"


