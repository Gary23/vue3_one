<template>
  <div class="detail">
    <h3>useRoute接收参数</h3>
    <div>
      <span>id：{{ params.id }}</span>
    </div>
    <div>
      <span>标题：{{ params.title }}</span>
    </div>
    <div>
      <span>内容：{{ params.content }}</span>
    </div>
    <hr>
    <h3>props接收参数</h3>
    <div>
      <span>id：{{ id }}</span>
    </div>
    <div>
      <span>标题：{{ title }}</span>
    </div>
    <div>
      <span>内容：{{ content }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup name="Detail">
// 从vue-router引入useRoute，调用后返回一个Proxy对象，包含路径、传参等信息，params的传参方式用params字段接收
import { useRoute } from 'vue-router'
import { toRefs } from 'vue';
const route = useRoute()
console.log('route-------------', route)
const { params } = toRefs(route)

defineProps(['id', 'title', 'content'])

</script>
<style>

</style>