
git add .
git commit -m "update"
git push


git config --global --unset http.proxy

GIT_USER=richardgong1987 USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
