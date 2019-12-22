#!/usr/bin/env sh

var1=`date`

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m "update notes on $var1"
git push origin master

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'notes.dangosky.com' > CNAME

git init
git add -A
git commit -m 'deploy notes on $var1'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/DangoSky/notes.git master:gh-pages

cd -
