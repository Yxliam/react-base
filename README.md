##### 这个是react的基础架构 
搭配了react react-redux react-router react-loadable redux-thunk redux redux-immutable

使用官方脚手架 create-react-app创建，使用npm run eject 暴露webpack配置文件

#####别名设置：
webpack.config.dev.js webpack.config.prod.js修改了别名 alias配置如下

    alias: {
        '@':path.join(__dirname, '..', 'src'),
        'pages':path.join(__dirname, '..', 'src/pages'),
        'store':path.join(__dirname, '..', 'src/store'),
        'util':path.join(__dirname, '..', 'src/util'),
        'components':path.join(__dirname, '..', 'src/components'),
        'static':path.join(__dirname, '..', 'src/static'),
     },

这样就可以在项目中直接使用别名了比如：import { action  } from 'store/home'

##### scss配置
安装 node-sass 然后配置webpack

##### 项目目录结构 主要介绍src目录
    src
        -components       //组件
        -pages            //页面级别
        -static           //静态资源
        -store            // redux 处理配置
            -home         //home模块
             index.js     //暴露home模块的action reducer types 
             action.js    //action
             reducer.js   //reducer
             types.js     //类型 
            index.js      //向外暴露store
            reducer.js    //把所有的reducer整合向外暴露
        -util             //工具
        App.js            //App
        index.js          //入口文件
        routes.js         //路由配置






