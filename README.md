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

### 18_路由

1. 安装vue-router
2. route是路由，router是路由器，router是用来管理route的
3. 根组件引入RouterView和RouterLink
   - RouterView是路由视图
   - RouterLink是路由导航链接，RouterLink的to属性配置跳转地址、active-class属性配置激活类名
4. 路由表文件
   - 引入createRouter
   - 用该方法创建路由表，路由表传参routes属性，值为一个数组，
   - 数组元素为对象包含路由信息name-路由名称、paht-路由地址、component-路由组件，最后将路由表导出
5. 路由表工作模式配置
   - 在调用createRouter时传参history属性配置路由模式
   - history模式引入createWebHistory函数
   - hash模式引入createWebHasHistory函数
   - 将路由模式函数的返回值赋值给history属性
6. 在项目初始化main.ts文件导入路由表，createApp的实例对象调用use方法使用路由表
7. 路由的历史记录有两个动作，push和replace，RouterLink标签上加上replace属性就是replace模式了
8. 重定向路由表，一进入页面的路由是`/`，可以配置`path: '/'`的路由，`redirect: '/home'`

### 19_query路由传参

1. 传参
   - 如果to属性值是字符串则直接拼接在url之后（?key=value&key=value）
   - 如果to属性是对象则写到query属性上（query: { key: value }）
2. 接收
   - 从vue-router引入useRoute函数，调用后返回一个Proxy对象，包含路径、传参等信息，query的传参方式用query字段接收
   - useRoute函数返回的对象如果结构获取query对象需要使用toRefs函数，否则会失去响应式
3. props配置
   - 在路由表增加props属性，值是一个函数，接收route函数，函数return的对象就是给组件的传参
   - 组件内通过defineProps的方式接收

### 20_params路由传参

1. 传参
   - 如果to属性值是字符串直接拼接在url之后（/xxx/xxx）
   - 如果to属性是对象则写到params属性上（params: { key: value }）
   - params的传参方式需要在路由表占位，path属性后拼接key（path: '/xxxxx/:key/:key'）
   - 路由表占位的key后面加?，表示这个参数非必要（path: '/xxxxx/:key?/:key'）
2. 接收
   - 从vue-router引入useRoute，调用后返回一个Proxy对象，传参在params属性上，使用方式与query相同
3. props配置
   - 在路由表增加props属性，值为true
   - 组件内通过defineProps的方式接收

### 21_编程式导航

1. 开发中大部分场景的路由跳转RouterLink标签满足不了，需要使用编程式路由跳转
2. 引入并调用useRouter hook，返回一个路由器，路由器的push方法可以跳转路由，传参与to属性相同

### 22_pinia

1. pinia和vuex一样，是一个集中式状态管理工具
2. 安装pinia，在main.ts引入createPinia，调用并创建一个pinia，`App.use(pinia)`
3. pinia代码结构
   - 创建store目录，存放pinia的代码，创建ts文件，命名方式通常是use开头，store结尾
   - 从pinis引入defineStore，`export const useCountStore = defineStore('name', {})`
   - defineStore的第一个参数是当前pinia的名字，第二个参数传参state、actions、getters
   - state用于存储数据，是一个函数，return的对象中存放数据
   - action用于存储函数，是一个对象，用于响应组件中的动作，处理state的数据，函数通过this访问state
   - getter类似于computed，是一个对象，对象内的函数对state数据进行加工，函数接收state对象参数
4. 在组件中使用pinia
   - 在需要使用的组件引入该useXxxxStore，调用后返回一个proxy的响应式store对象
   - 如果要解构赋值需要从pinia引入storeToRefs，不能用toRefs
   - 组件中可以直接修改state的数据，`xxxStore.xxxx = xxx`，如果有多个值要改可以调用store对象的$patch批量修改，传入一个对象
   - 组件中getter的使用与state相同
   - 订阅$subscribe和watch类似，可以监视pinia数据修改，`xxxStore.\$subscribe((mutate, state) => {})`，mutate参数是本次修改的信息，state参数是修改后的数据

### 23_store组合式写法

1. 配置state、action、getter是选项式写法，组合式写法是更符合vue3的Composition风格

2. defineStore第二个参数传函数，写法与setup一致

3. state就是setup的变量，actions就是setup的方法，getter就是computed，最后都return出去

### 24_组件通信

1. props
   - 子组件接收父组件传参：子组件defineProps接收父组件传参
   - 父组件接收子组件传参：父组件定义函数把函数传给子组件，子组件defineProps接收后，调用并传参给父组件
   - 尽量避免多层嵌套的组件用props传递

2. custom events
   - 自定义事件，专门用于子组件回传给父组件
   - 子组件给父组件传参，父组件给子组件传一个自定义事件的函数，子组件声明emit变量调用defineEmits接收事件，通过调用`emit('自定义事件名', 传参)`，把子组件的传参传给父组件

3. mitt
   - 需要单独安装mitt，代码通常是放到utils目录下的emitter.vue文件
   - emitter.vue文件引入mitt，调用后得到一个emitter对象并export暴露出去，emitter的on方法能绑定事件、emit方法可以触发事件，off方法可以解绑事件，all方法是解绑所有事件
   - 接收数据：提前绑好事件（订阅消息）
   - 发送数据：在合适的时间触发事件（发布消息）
   - 可以实现任意组件通信，没有父子组件的概念
   - 如果在组件中绑定事件，在onUnmounted钩子中最好进行解绑

4. v-model
   - v-model的底层就是一个value值配合input事件，比如：`@input="username = $event.target.value"`
   - 对于input输入框的组件，父组件传入`:value="username" @update:value="username = $event"` 和 `v-model:value="username"` 是一样的，$event是自定义组件传回的参数，只有原生事件，$event才是事件对象
   - input输入框的组件中，defineProps接收value，绑定到input的value属性，defineEmits抛出update:value事件，在input输入框的@input事件中调用`emit('update:value', $event.target.value)`

5. $attrs
   - 父、子、孙结构关系的组件，父给孙组件传参使用
   - 父组件给子组件传参，子组件只要没在defineProps接收的传参，就会放到$attrs对象中，子组件只要把$attrs传给孙组件就可以，孙组件直接用defineProps接收$attrs中的属性
   - 孙组件修改父组件的数据，从父组件传一个函数，通过attrs传输到孙组件，孙组件调用修改父组件的数据

6. $refs和$parent
   - $refs可以获取到子组件的实例对象，可以直接改实例对象的数据，但是子组件需要把允许修改的数据用defineExpose抛出
   - $parent，子组件中$parent可以拿到父组件的实例对象，父组件也需要使用defineExpose把数据交给外部

7. provide和inject   
   - 父传给孙组件，完全不需要修改子组件
   - 父组件从vue引入provide，调用provide向后代组件注入数据：provide(数据的名字，数据的值)
   - 孙组件，从vue引入inject，声明数据接收inject的返回值：inject(数据的名字, 数据的默认值)

9. slot默认插槽
   - 子组件用slot标签，接收父组件中写在子组件开始闭合标签间的数据
   - 子组件的slot标签内可以写默认内容

10. 具名插槽
    - 子组件的slot增加name属性，父组件里写v-slot属性（简写#name），名称要和子组件的slot的name一致
    - 默认插槽的name是default，所以具名插槽要避免使用default

11. 作用域插槽
    - 场景：父组件的插槽结构，需要用子组件的数据
    - 子组件可以通过slot给父组件传参，在slot标签增加一个或多个传参项传递参数
    - 父组件接受：v-slot="a"  a就是子组件传递的所有传参，通常是写在template标签上，配合具名插槽的写法v-slot:name="a"

### 25_其他常用API

1. shallowRef 
   - 浅层次ref，不监听对象的属性，只监听简单类型数据和对象类型的引用改变
   - 场景：比ref效率高，如果对象数据量很多，shallowRef不会对内部属性进行监听，只关注对象本身的修改

2. shallowReactive
   - 浅层次reactive，只监听对象内的简单类型属性值的修改，对象类型的属性值不监听

3. readonly
   - readonly定义一个只读数据，只能传入一个响应式数据
   - 场景：保护数据，很重要的数据，如果别的功能也要使用，可以用readonly复制一份，在其他功能里只能使用不能修改原数据

4. shallowReadonly
   - 简单类型的响应式数据和readonly一样
   - 对象类型的响应式数据，只处理浅层次只读，复杂类型的数据，属性值是简单类型的属性可以只读，属性值是复杂类型的数据可以修改内部的属性没有只读属性

5. toRaw
   - 通过toRaw可以把一个响应式数据恢复为原始的对象数据
   - 场景：数据要在别的组件使用，但是不希望被别的组件修改，或者传给非vue组件的函数或功能，可以抛出一个原始对象数据

6. markRow
   - 标记一个对象，使其永远不会变为响应式数据
   - 场景：避免把一些非响应式的数据误写为响应式数据，比如mock数据

7. customRef 
   - 自定义ref数据
   - 场景：响应式数据如果修改后还需要处理再渲染，可以用customRef
   - 使用：customRef调用后返回的数据直接渲染使用，customRef传入一个回调函数，回调函数需要return一个对象，对象要有get和set方法，变量被读取时调用get，变量被修改时调用set
   - 数据操作：customRef调用前先定义一个初始值；get方法需要有返回值才能渲染到页面，可以直接返回初始值；set方法会收到一个value，是变量修改后的值，value处理后赋值给之前定义的初始值
   - customRef回调函数接收两个参数track和trigger，track：在get中调用，让vue对这个数据进行持续关注，一旦变化就去更新；trigger：在set中调用，通知vue数据变化了
   - 自定义ref通常封装为hooks，

### 26_vue3新组件

1. Teleport组件
   - Teleport组件内部的元素可以挂载到指定的dom元素上，设置to属性，属性值是选择器字符串，
   - 最常用于Modal弹窗元素指定挂载到body元素上

2. Suspense组件
   - 用于嵌套异步组件，如果子组件依赖于await的异步，就可以用Suspense嵌套，起到了async的作用，如果不使用Suspense嵌套子组件不会渲染，控制台会提醒说需要用异步组件
   - Suspense可以传入两个插槽default和fallback，default是异步任务完成后渲染，fallback是异步任务未完成时候就默认渲染的
   - 使用场景就是子组件的setup需要用await异步调用

### 27_全局API转译到应用对象

1. app.components
   - main.ts文件，`app.component('组件名', 组件)`，就可以把这个组件定义为全局组件，可以在项目中随意使用了
2. app.config
   - main.ts文件，在app.config.globalPerperties上定义数据和vue2中在vue.prototype定义数据是一样的，都可以全局使用
3. app.directive
   - main.ts文件自定义全局指令，接收两个参数，element和binding，element是元素本身，binding是指令相关数据
4. app.mount
   - 在main文件默认就会调用，挂载全局组件
5. app.unmount
   - 卸载全局组件
6. app.use
   - 在vue上注册组件，和vue2的vue.use相同


### 28_vue3的非兼容性改变

在官网找到从vue2迁移，意思是在vue3中改变了写法不能按照vue2写法的一些改变

也就是vue3中不能兼容vue2的部分
































































































































