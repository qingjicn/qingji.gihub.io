---
title: Hexo 使用
date: 2019-10-30 22:21:53
tags: 
- hexo
- 指南 
---
#### 链接 GitHub
- 输入
```
	git config --global user.name "name" 
	git config --global user.email "2223333@gmail.com"
```
<!--more -->
- 然后生成密钥 SSH key
```
	ssh-keygen -t rsa -C "2223333@gmail.com"
```
-  打开 github，在头像下面点击 settings，再点击 SSH and GPG keys，新建一个 SSH，名字随便。

- git bash 中输入
```
	cat ~/.ssh/id_rsa.pub
```
- 将输出的内容复制到框中，点击确定保存。
- 输入 ssh -T git@github.com，如果出现你的用户名，那就成功了。

####  使用 Hexo

- 首先在博客根目录下右键打开 git bash，安装一个扩展 npm i hexo-deployer-git
- 然后输入
	```
		hexo new post "article title"
		hexo new post "Hexo 使用"
	```
- 然后打开 blog\source_posts 的目录，可以发现下面多了一个文件夹和一个 .md 文件，一个用来存放你的图片等数据，另一个就是你的文章文件啦
- 编写完 markdown 文件后，根目录下输入 hexo g 生成静态网页，然后输入 hexo s 可以本地预览效果，最后输入hexo d上传到 github 上。这时打开你的 github.io 主页就能看到发布的文章啦。
- hexo clean && hexo g && hexo s
[文章标签]
- title: 文章标题
- catalog: 是否显示段落目录
- date: 文章日期
- subtitle: 子标题
- header-img: 顶部背景图片
- top: 是否置顶
- tags: 标签
- categories: 分类
[创建菜单]
	hexo new page "tags"
	hexo new page "archives"
	hexo new page "search"
	hexo new page "commonweal"