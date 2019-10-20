#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'update notes'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:dangosky/notes.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:DangoSky/DangoSky.github.io.git master

cd -

