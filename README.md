# vue3_one
vue3练习

创建工程

vue-cli (看课件)


vite

与webpack比较   
webpack：entry  route   module  boundle   server-ready

vite：server-ready   entry  route   module

webpack是开始就处理所有的route和module
vite轻量热重载，先开始，在看route和module加载（类似懒加载）

创建
npm create vue@lastest

创建项目配置  hello_vue3、TS、 


插件：Vue Language Features     Typescript Vue Plugin

目录：
env.d.ts  不能删除，需要安装依赖后才能有效，配置的是常用的文件后缀


src

main.ts
  从vue引入createApp
  引入App根组件
  createApp(App).mount('#app')




person组件
姓名、年龄、联系方式  绑定数据data  name  age  tel
修改姓名 click changeName   修改年龄 click changeAge   查看联系方式 click showTel

vue2中使用的Options配置式的api风格  数据在data 方法在methods
学习vue2就是学习data、methods等等这些配置项
每次维护一个功能点，假如功能点要改数据、方法、监听，就要分别插入到data、methods、watch，写代码时感觉比较分散

vue3使用的是Composition组合式的api风格   
把相同功能点都放到一起，集中之后是通过函数来管理功能里边的数据、方法、监听，不需要再分别取不同的data、methods、watch里边去找功能修改






setup

1. setup是vue3的一个新配置项，是一个函数，组合式的api都写在setup里

2. 执行时机：vue2第一个声明周期钩子是beforeCreate，setup比beforeCreate执行时机更早

3. data的数据直接声明，直接声明的数据非响应式数据

4. methods的方法直接声明为函数，函数内部this为undefined，vue3已经弱化this

5. return：所有声明的变量和函数，如果在view用到的变量和方法都需要return出去，也可以返回一个渲染函数(直接忽略模板里的html内容)，但是使用场景较少

```js
export default {
  setup() {
    // 写data数据，非响应式数据
    let name = 'xxxx'   // 赋值姓名、年龄、联系方式

    // 写methods方法  changeName   changeAge   showTel
    function changeName() {
      // this.name = ''    // 报错，setup里this是undefined
    }
    function changeAge() {}
    function showTel() {}

    return { name, changeName, changeAge, showTel }   //  view里需要用到的数据  都需要return

    // return () => 'ZZZZZ.......'   // 返回一个函数，整个页面渲染的就是 ZZZZZ.......   
  }
}
```
