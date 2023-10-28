#!/bin/sh
git pull origin main
npm install
pm2 restart dist/main.js --watch