# rebase和merge的区别

合并git merge，与git rebase的区别是：
- git merge会生成一个新的节点，并将之前的提交分开显示；
- git rebase操作不会生成新的节点，而是将两个分支融合成一个线性的提交。

## 示意图
```
初始状态：
       D---E test
     /
A---B---C---F master
```

```
git merge结果如下：
      D--------E
     /          \
A---B---C---F----G   test, master
```

```
git rebase结果如下：
A---B---D---E---C'---F'   test, master
```

## 各自的优缺点

- marge 特点：自动创建一个新的commit。如果合并的时候遇到冲突，仅需要修改后重新commit。
  - 优点：记录了真实的commit情况，包括每个分支的详情。
  - 缺点：因为每次merge会自动产生一个merge commit，所以在使用一些git 的GUI tools，特别是commit比较频繁时，看到分支很杂乱。（可以通过 `git log --graph` 查看分支合并图）

- rebase 特点：会合并之前的commit历史
  - 优点：得到更简洁的项目历史，去掉了merge commit。
  - 缺点：如果合并出现代码问题不容易定位，因为re-write了history。

## 合并时如果出现冲突需要按照如下步骤解决

- 修改冲突部分
- git add
- git rebase --continue（如果第三步无效可以执行 git rebase --skip）

