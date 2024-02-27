# vue3_one

### 创建工程

1. 使用vite构建工具，与webpack比较：
  - webpack：entry  route   module  boundle   server-ready
  - vite：server-ready   entry  route   module
  - webpack是开始就处理所有的route和module
  - vite轻量热重载，先开始，在看route和module加载（类似懒加载）

2. 创建命令：npm create vue@latest
  - 安装报错 [ 'create-vue@lastest' ] 失败，错误代码：1，需要切换node16版本
  
3. vscode安装插件：Vue Language Features、Typescript Vue Plugin

4. env.d.ts不能删除，需要安装依赖后才能有效，配置的是常用的文件后缀

### 组合式api

1. vue2
   - 使用的Options配置式的api风格，比如数据在data、方法在methods
   - 学习vue2就是学习data、methods等等这些配置项
   - 每次维护一个功能点，假如功能点要改数据、方法、监听，就要分别插入到data、methods、watch，写代码时感觉比较分散

2. vue3
   - 使用的是Composition组合式的api风格   
   - 把相同功能点都放到一起，集中之后是通过函数来管理功能里边的数据、方法、监听，不需要再分别取不同的data、methods、watch里边去找功能修改

### 02_setup基本使用

1. setup是vue3的一个新配置项，是一个函数，组合式的api都写在setup里

2. 执行时机：vue2第一个声明周期钩子是beforeCreate，setup比beforeCreate执行时机更早

3. data的数据直接声明，直接声明的数据非响应式数据

4. methods的方法直接声明为函数，函数内部this为undefined，vue3已经弱化this

5. 返回值return：所有声明的变量和函数，如果在view用到的变量和方法都需要return出去，也可以返回一个渲染函数(直接忽略模板里的html内容)，但是使用场景较少

6. setup和原来的options api 不冲突，setup是最早的声明周期，所以其他options api是可以通过this获取到setup返回的数据的

7. 如果view中使用了setup没有return的数据，控制台会警告

### 03_setup语法糖

1. 可以单独声明一个script标签内部写setup`<script setup lang="ts"></script>`

2. 原来的script标签内部就只export了一个name属性，如果只为了写一个name没必要单独export，通过vite-plugin-vue-setup-extend插件可以在script写name属性，在vite.config.ts中调用
****
### 04_ref

1. ref基本类型数据、对象类型的响应式数据
2. ref调用后返回一个refImpl对象，修改数据是修改refImpl对象的value属性

### 05_ref和reactive

1. 对象类型的响应式数据可以使用ref和reactive

2. reactive调用后返回一个Proxy对象，修改时候直接修改属性值就可以

3. ref定义响应式对象，value的值其实也是一个proxy对象，所以ref传入对象时，同样是用reactive实现的

4. ref和reactive对比
  - reactive：重新分配一个新对象会失去响应式，新对象重新调用reactive也不行，不能重新赋值，只能修改属性，如果要覆盖数据，需要用`Object.assign()`
  - ref：可以给value重新赋值一个新对象，ref只是改了value属性，并没有修改变量本身，ref如果重新赋值也会失去响应式数据
  - 总结：基本类型直接用ref，如果需要响应式对象，对象层级不深，ref和reactive都可以，如果是复杂的对象建议用reactive

### 06_toRefs和toRef

1. 正常从响应式对象解构出的变量，不是响应式的，需要调用toRefs解构

2. 解构出的数据是一个ObjectRefImpl对象，也就是通过toRefs把对象中的所有数据变为RefImpl类型的对象，所以修改的时候要修改结构出对象的value属性

3. 实际解构出的数据依然关联原对象，模板的view部分依然可以写object.key，也可以直接写key

4. 与toRefs区别是，toRefs是把所有数据改为RefTmpl数据，toRef只能修改传入的数据


### 07_computed

1. 从vue引入computed函数，调用使用方式与vue2相同

2. computed函数调用后返回一个ComputedRefImpl类型的数据

### 08_watch_ref定义的数据

1. 从vue引入watch函数

2. 只能监听四种数据：ref定义的基本类型数据、ref定义的对象类型数据、reactive定义的对象类型数据、getter函数

3. watch调用后返回一个函数，调用后可以停止监听

4. ref 定义的对象类型数据，监听时需要深度监听

### 09_watch_reactive定义的数据

1. reactive 定义的对象类型的监听时，默认开启了深度监听，并且不能关闭

### 10_watch_只监听单独属性

1. 监听基本类型属性需要一个getter函数（一个函数返回一个值，就是getter函数）

2. 监听对象类型的属性，可以直接监听，不需要getter函数，但是只能监听对象内部属性的变化，对象整体修改监听不到（对象的内存指向变了，就监听不到了）

3. 如果监听对象类型的属性本身，依然需要用getter函数，配合深度监听配置，既可以监听属性本身，也可以监听对象内部属性（只用getter就只是监听对象的内存指向，深度监听开启对内部属性的监听）

### 11_watch_只监听单独属性

1. 多个数据监听用数组存放所有需要监听的数据，数组内部的元素可以是ref定义的数据、reactive定义的数据、getter函数

### 12_watchEffect

1. 从vue对象引入watchEffect函数

2. watch只能监听指定的数据，watchEffect不需要指定，只要写在watchEffect内的响应式数据都会被监听

### 13_ref属性

1. 如果绑定到dom元素上，ref的value属性就是dom元素本身

2. 如果绑定到组件，ref的value就是组件的实例对象

3. 如果父组件要访问子组件的属性，需要在子组件中调用defineExpose函数抛出属性，defineExpose也是从vue引入的

### 14_ts定义接口

1. 新增types目录定义数据类型，使用 interface 定义接口，接口用于限制对象的属性，接口也可以作为泛型定义给数组内的元素

2. vscode的Vetur插件启用的话，可能会导致"@/types"有错误

### 15_props

1. 子组件调用 defineProps 接口父组件的传参，**define开头的方法可以不用引入**

2. defineProps传参是一个数组，数组的元素就是接收的参数名，参数接收后可以直接在模板中渲染，如果接收的参数没有传就是undefined

3. defineProps调用后返回一个Proxy对象，保存所有接收的参数

4. defineProps可以通过ts定义接收的数据类型、设定是否必传、通过引用withDefaults设定默认值，设定的默认值如果是复杂类型则需要一个函数return默认数据

### 16_生命周期函数

1. 组件创建钩子：不需要写beforeCreate和created，setup内部的代码就是组件的创建

2. 组件挂载钩子：从vue引入onBeforeMount、onMounted

3. 组件更新钩子：从vue引入onBeforeUpdate、onUpdated

4. 组件卸载钩子（原来的销毁）：从vue引入onBeforeUnmount、onUnmount

5. 只有子组件挂载后，父组件才会进行挂载，所以App是最后才挂载完成的

### 17_hooks

1. hooks本质就是一个js或者ts文件，把一个功能的数据和方法写到一起，也就是Composition组合式的api风格

2. hooks里边可以写生命周期函数，基本上setup里能写的这里都可以写

3. hooks通常命名以use开头，每个功能抛出一个函数，函数return需要暴露的数据和方法

路由篇
App
路由测试页面
导航区
首页   新闻    关于   href="#"   class="active"
展示区
以后可能要展示各种组件

css直接复制

npm i vue-router

创建router目录  index.ts 从vue-router引入createRouter
const router = createRouter({
  routes: [
    {
      path: '路径',
      component: 组件
    }
  ]
})

创建components  存放组件  About   Home    News

配置路由环境
main.ts引入router
app.use(router)


App
从vue-router 引入 RouterView 标签，放到展示区
引入RouterLink标签  替换原来的a标签  配置to属性  active-class



路由器工作模式
history模式 url更加美观，但是项目上线后需要服务器配置，面对客户的项目用的比较多
history  createWebHistory
hash模式  兼容性好，不需要服务端处理路径，但是不美观SEO优化比较差，后台管理项目用的比较多
history  createWebHasHistory


to的对象写法
to="{
  path: '/home',
}"


routes数组增加name属性，起个名字，RouterLink跳转的时候  to="{name:  'shouye'}"




嵌套路由
新闻路由组件，列表改为动态遍历出列表数据，id  title  content

创建新闻详情组件detail，展示id title content
routes数组  新闻增加children   子集路由不用写斜杠



