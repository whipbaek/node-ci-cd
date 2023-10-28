#!/bin/sh
git pull origin main
npm install
npm run build
pm2 restart ecosystem.config.js
