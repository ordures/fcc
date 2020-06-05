## @ordures/fcc

脚手架目录生成工具

### Install

`> npm install -g @ordures/fcc`

### Usage

```
> fcc source|s <sourcePath>

> fcc target|t <targetPath>

> fcc module|m <moduleName>
```

### Example

`> fcc s ~/Desktop/test`
> 自定义模板文件目录路径，自定义成功后可删除模板文件，如不设置则按内置默认目录样式生成文件

`> fcc t ./src/modules`
> 自定义生成目录所在路径，如不设置则默认在当前所处路径中生成

`> fcc m TestFcc`
> 在自定义路径（默认路径为./）中生成 TestFcc 模块

### github

https://github.com/ordures/fcc

### issue

https://github.com/ordures/fcc/issues
