#!/bin/bash

#Author: Aidan

str='this is string'
name="Aidan"
greet="hello ${name}"
echo $greet

echo ${#greet}

echo ${greet:0:5}

echo `expr index "$greet" Aidan`
