#!/bin/bash

#Author: Aidan

echo "File Name: $0"
echo "First Parameter: $1"
echo "Second Parameter: $2"
echo "Parameter Count: $#"
echo "Parameters: $*"
echo "Parameters: $@"
echo "Last: $?"
echo "pid: $$"

echo "----------------------------"

echo "\$*="$*
echo "\"\$*\"=""$*"

echo "\$@="$@
echo "\"\$@\"=""$@"

echo "print each parma from \$*"
for var in $*
do
  echo "$var"
done

echo "print each param from \$@"
for var in $@
do
  echo "$var"
done

echo "print each param from \"\$*\""
for var in "$*"
do
  echo "$var"
done

echo "print each param from \"\$@\""
for var in "$@"
do
  echo "$var"
done
