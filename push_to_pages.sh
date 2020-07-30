lastCommitMessage=$(git log -1 --pretty=%B)
currentBranch=$(git rev-parse --abbrev-ref HEAD)
if [ currentBranch = "master" ]; then
  if [ -d "./virtual-maths-camp-gh-pages" ]; then
    git clone https://github.com/IDEMSInternational/virtual-maths-camp-gh-pages.git
  fi
  cd ./virtual-maths-camp-gh-pages
  git pull
  if [ -d "./docs" ]; then
      rm -rf docs
  fi
  mkdir docs
  cp -r ../dist/virtual-maths-camp-ui/* ./docs
  git add .
  newCommitMessage="NG BUILD: $lastCommitMessage"
  git commit -m $newCommitMessage
  git push
  cd ../
else
  echo "Not on master branch, not pushing to Github pages"
fi