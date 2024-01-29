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






响应式数据

ref和reactive

ref：可以基本类型数据、对象类型的响应式数据
import { ref } from 'vue'
let name = ref('xxxxx')
返回一个refImpl对象，修改时候是修改name.value   模板里不需要加.value

用ref定义响应式对象，value的值其实是一个proxy对象，所以ref传入对象时，同样是用reactive实现的


reactive: 只能定义对象类型的响应式数据
新案例
一辆xxxx车  价值xxx万
按钮  修改车的价格

数据：
let car = { brand: 'xxxx', price: 100 }

方法：递增金额10

游戏列表渲染展示周，增加方法修改数组内的数据


reactive: 使用
import { reactive } from 'vue'
let car = reactive({ brand: 'xxxx', price: 100 })

返回一个Proxy对象，修改时候直接修改属性值就可以



ref和reactive对比

车的案例加求和案例  按钮点我+1
车的数据用reactive   求和数据用ref

reactive 重新分配一个新对象会失去响应式，新对象重新调用reactive也不行，不能重新赋值，只能修改属性，如果要覆盖数据，需要用Object.assign()

ref 可以给value重新赋值一个新对象，ref只是改了value属性，并没有修改变量本身，ref如果重新赋值也会失去响应式数据

总结：
基本类型直接用ref，如果需要响应式对象，对象层级不深 ref和reactive都可以    如果是复杂的对象建议用reactive



toRefs toRef

toRefs

案例，
定义一个 人的信息，对象  姓名   年龄
按钮：修改名字加~   修改年龄

正常从响应式对象解构出的变量，不是响应式的
使用 let {name, age} = toRefs(person)  才能结构出响应式数据吗，修改的时候name.value = xxxxxx    
解构出的数据是一个ObjectRefImpl对象，也就是通过toRefs把对象中的所有数据变为RefImpl数据
实际结构出的数据修改后，person的属性也会修改，依然关联原对象，所以代码逻辑里修改的时候可以直接修改结构之后的，模板的view部分依然可以写person.name



toRef

toRefs是把所有数据改为RefTmpl数据，toRef只能修改传入的数据
let name = toRef(person, 'age')

其他地方与toRefs一致



