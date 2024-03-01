<template>
  <div class="detail">
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

const params = defineProps(['id', 'title', 'content'])

console.log(params);

</script>
<style>

</style>