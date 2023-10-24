#!/bin/sh

echo "START | Clean up RA-Boilerplate project..."

folder_path="./build"

if [ -d "$folder_path" ]; then
    echo "Folder existed!!"
else
  rm -rf build/*
fi

echo "Removed build"

echo "DONE | Clean up RA-Boilerplate project..."
