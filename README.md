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

