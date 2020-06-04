## Forchange-fcc

针对@forchange/cc脚手架的目录生成工具

### Install

`> npm install -g forchange-fcc`

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
> 自定义生成目录所在路径，如不设置则默认在当前项目下的src/modules中

`> fcc m TestFcc`
> 在自定义路径（默认为./src/modules）中生成TestFcc模块


