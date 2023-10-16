#!/bin/sh

sh clean.sh

echo "Install dependencies...."
yarn install --frozen-lockfile

echo "Bulding application...!"
yarn build
