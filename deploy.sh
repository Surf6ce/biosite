#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# pushing to the correct repository and branch using master instead of main
git push -f git@github.com:Surf6ce/biosite.git master:gh-pages

cd - 