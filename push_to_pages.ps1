if ( -not (Test-Path -Path './virtual-maths-camp-gh-pages' -PathType Container) ) {
    git clone https://github.com/IDEMSInternational/virtual-maths-camp-gh-pages.git
}

cd ./virtual-maths-camp-gh-pages
if (Test-Path -Path './docs' -PathType Container) {
    Remove-Item -Recurse -Force docs
}
mkdir docs
Copy-Item -Path "../dist/virtual-maths-camp-ui/*" -Destination "./docs" -Recurse
cd ../
git config user.name idems-bot1
git config user.email git.bot@idems.international
git add .
git commit -m "Update with latest angular build"
git status