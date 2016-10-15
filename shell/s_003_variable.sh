#!/bin/bash

#Author: Aidan

name="Aidan"
age="23"
job="Front-end Egnierr"

echo "my name is ${name}, ${age}, and my job is ${job}."

readonly name

name="WQ"

unset name

echo ${name}
