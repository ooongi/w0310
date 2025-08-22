#!/bin/bash

echo "=============================="
echo "1️⃣ 기존 node_modules 및 package-lock.json 삭제"
echo "=============================="
rm -rf node_modules
rm -f package-lock.json

echo "=============================="
echo "2️⃣ npm 캐시 검증"
echo "=============================="
npm cache verify

echo "=============================="
echo "3️⃣ 패키지 재설치"
echo "=============================="
npm install

echo "=============================="
echo "4️⃣ 프로젝트 실행"
echo "=============================="
npm start