@echo off
cd /d D:\workspace-dev\github\Portifolio_2.0\projeto
ng build --base-href /Portifolio_2.0/

cd dist\projeto\browser
rmdir /s /q .git
git init
git checkout -b gh-pages
git remote add origin https://github.com/andreluislima/Portifolio_2.0.git
git add .
git commit -m "Deploy automático"
git push origin gh-pages --force
