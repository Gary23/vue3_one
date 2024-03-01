<template>
  <div class="detail">
    <h3>useRoute接收参数</h3>
    <div>
      <span>id：{{ query.id }}</span>
    </div>
    <div>
      <span>标题：{{ query.title }}</span>
    </div>
    <div>
      <span>内容：{{ query.content }}</span>
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
// 从vue-router引入useRoute，调用后返回一个Proxy对象，包含路径、传参等信息，query的传参方式用query字段接收
import { useRoute } from 'vue-router'
import { toRefs } from 'vue';
const route = useRoute()
// const { query } = toRefs(route)
const { query } = toRefs(route)

defineProps(['id', 'title', 'content'])

</script>
<style>

</style>