#!/bin/sh
git pull origin main
npm install
pm2 restart ecosystem.config.js