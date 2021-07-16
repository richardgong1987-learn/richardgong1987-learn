
git add .
git commit -m "update"
git push


export GIT_USER=richardgong1987

export DEPLOYMENT_BRANCH=gh-pages


export CURRENT_BRANCH=main


git config --global --unset http.proxy

DEPLOYMENT_BRANCH=gh-pages

yarn deploy

