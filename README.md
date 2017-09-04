# MyProject（我的工程）

### 目录结构(cmd tree命令生成)

```html
        ├─e2e
        └─src
        ├─app   
        │  ├─component  <!--公共组件-->
        │  ├─modules    <!--模块-->
        │  │  └─common    <!--公共模块eg：头部-->
        │  └─shared    <!--公共弹框公共服务等-->
        ├─assets    <!--静态资源-->
        │  ├─css
        │  ├─font-awesome-4.7.0
        │  │  ├─css
        │  │  ├─fonts
        │  │  ├─less
        │  │  └─scss
        │  ├─icon    <!--图标资源-->
        │  ├─images    <!--图片资源-->
        │  ├─mock-data    <!--前端模拟数据-->
        │  └─scripts    <!--第三方库-->
        │      ├─fancybox
        │      │  └─helpers
        │      └─jquery
        ├─config
        └─environments
```


### 基于ng种子文件，样式选用scss

+ `ng new my-project -style=scss`

[ng配置scss](http://blog.csdn.net/zhaoruda/article/details/72989762)

### 项目依赖配置新增start命令、aot编译命令 、ng依赖包的升级命令

"start": "ng lint && ng serve --port 4200",

"build-aot": "node --max_old_space_size=2192 node_modules/@angular/cli/bin/ng build --aot --prod",
"aot": "ng build --aot --prod",

"update": "npm install @angular/animations @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router @angular/compiler-cli"

### angular-cli.json手动导入常用的第三方库及样式

+ 步骤1：npm i lodash@latest --save
+ 步骤2：angular-cli.json手动导入
+ 步骤3：在typings.d.ts文件中全局声明所用到的变量，如JQ：'$'


### 更改编码约定tslint，提高代码质量

### 通过npm-check把项目文件依赖全面升级

npm-check为升级依赖方便的插件
+ `npm i -g npm-check`
+ `npm-check -u`

[npm-check](https://github.com/dylang/npm-check)

### 新增栅格样式grid.scss

### 相关文章学习

[初识Angular-cli[官方脚手架]及脱坑要点](http://blog.csdn.net/crper/article/details/62884688)

+ e2e	ng e2e	跑自动化测试-自己写测试测试用例
+ test	ng test	跑单元测试 – 自己写
+ lint	ng lint	调用tslint跑整个项目，可以收获一堆警告和错误，–force –fix –format可以帮助格式和修复部分问题

![生成的目录树小解释](http://img.blog.csdn.net/20170317113912130?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY3JwZXI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 



