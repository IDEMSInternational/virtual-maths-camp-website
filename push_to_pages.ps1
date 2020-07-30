$lastCommitMessage = git log -1 --pretty=%B
$currentBranch = git rev-parse --abbrev-ref HEAD
if ( $currentBranch -eq "master" ) {
    if ( -not (Test-Path -Path './virtual-maths-camp-gh-pages' -PathType Container) ) {
    git clone https://github.com/IDEMSInternational/virtual-maths-camp-gh-pages.git
    }
    cd ./virtual-maths-camp-gh-pages
    git pull
    if (Test-Path -Path './docs' -PathType Container) {
        Remove-Item -Recurse -Force docs
    }
    mkdir docs
    Copy-Item -Path "../dist/virtual-maths-camp-ui/*" -Destination "./docs" -Recurse
    git add .
    $newCommitMessage = "NG BUILD: " + $lastCommitMessage
    git commit -m $newCommitMessage
    git push
    cd ../
} else {
    echo "Not on master branch, not pushing to Github pages"
}