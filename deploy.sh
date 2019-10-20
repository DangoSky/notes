#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 提交到历史区，$1 为运行 sh 时的第一个参数
git add -A
git commit -m 'update notes'

# 提交到 master 分支
git push origin master

# 将 dist 文件提交到 gh-pages 分支
git subtree push --prefix dist origin gh-pages

# 退出命令
exit 0



# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:dangosky>/<notes>.git master:gh-pages
