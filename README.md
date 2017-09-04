# 动态组件做单页应用（无路由）

### 文件目录
├─app
│  ├─modules  <!--EntryComponent.ts文件是动态加载组件的数组-->
│  │  ├─common
│  │  │  ├─header  <!--头部-->
│  │  │  └─navigation-menu  <!--左侧导航栏-->
│  │  ├─order-manage  <!--订单管理模块-->
│  │  │  └─vo
│  │  └─warehouse-manage  <!--出入库管理模块-->
│  │      ├─page
│  │      │  ├─warehouse-abnormal
│  │      │  │  └─vo
│  │      │  ├─warehouse-area-adjustment
│  │      │  │  └─vo
│  │      │  ├─warehouse-check
│  │      │  │  └─vo
│  │      │  ├─warehouse-entry-manage
│  │      │  │  └─vo
│  │      │  ├─warehouse-info
│  │      │  │  └─vo
│  │      │  └─warehouse-leave-manage
│  │      │      └─vo
│  │      └─vo
│  └─shared
│      └─services
│           tabView-response.service.ts  <!--tab自适应宽度-->
│           tabview.service.ts  <!--返回页面所需页面数据-->
            └─ui
               └─tabview  <!--动态组件加载器核心代码-->
                    tab-item.ts  <!--页面组件构造类-->  
                    tab-panel.ts  <!--处理动态组件加载器-->  
                    tab.directive.ts  <!--一个辅助指令来在模板中标记出有效的插入点-->  
                    TabConfig.ts  <!--公共接口TabConfig-->  
                    tabview.html
                    tabview.scss
                    tabview.ts  <!--tabview的一些用户方法实现-->  
├─assets
│  ├─css
│  │  ├─components
│  │  │  └─modal
│  │  ├─helpers
│  │  └─layout
│  ├─font-awesome-4.7.0
│  │  ├─css
│  │  ├─fonts
│  │  ├─less
│  │  └─scss
│  ├─images
│  │  └─common
│  ├─mock-data  <!--内含左侧菜单所有页面的路径信息-->
│  └─scripts
│      ├─fancybox
│      │  └─helpers
│      └─jquery
├─config
└─environments

### 相关文章学习

[动态组件加载器](https://angular.cn/guide/dynamic-component-loader#动态组件加载器)
[Angular 4.x 动态创建组件](https://segmentfault.com/a/1190000009175508)


