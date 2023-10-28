#!/bin/sh
git pull origin main
npm install
pm2 dist/main.js