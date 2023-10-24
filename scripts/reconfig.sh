#!/bin/sh

github_link=$1

echo "START | Re-config git remote project..."

git remote remove origin

echo "Removed remote git!"

git remote add origin $github_link

echo "Add success git remote!!"

git remote -v

echo "DONE | FINISH re-config!!!"
