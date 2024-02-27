<template>
  <div>
    <div>
      {{ sum }}
      <div>
        <button @click="sumAdd">点我+1</button>
      </div>
    </div>
    <div>
      <div v-for="(item, index) in dogList" :key="index">
        <img :src="item" alt="">
      </div>
      <button @click="getDog">增加一张</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="Person">
// 两个不同功能封装为两个hook，
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'
// hook文件暴露数据和方法
const { sum, sumAdd } = useSum()
const { dogList, getDog } = useDog()

</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
