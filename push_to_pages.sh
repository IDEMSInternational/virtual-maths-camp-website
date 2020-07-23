git clone https://github.com/IDEMSInternational/virtual-maths-camp-gh-pages.git
rm -rf ./virtual-maths-camp-gh-pages/docs/*
cp ./dist ./virtual-maths-camp-gh-pages/docs
cd ./virtual-maths-camp-gh-pages
git add .
git commit -m "Automated commit"
git push