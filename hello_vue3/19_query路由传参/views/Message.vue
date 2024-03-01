<template>
  <div class="message">
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- query的方式传参 -->
        <RouterLink :to="{ 
          name: 'Detail',
          query: {
            title: item.title,
            id: item.id,
            content: item.content
          }
        }">{{ item.title }}</RouterLink>
      </li>
    </ul>
    <div class="message-content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup name="Message">
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
let messageList = reactive([
  { id: 'dasjhauisdhuiw992', title: '消息1', content: '消息1的内容' },
  { id: 'opqojnmfinf8333a', title: '消息2', content: '消息2的内容' },
  { id: '90890udh89ashfh3', title: '消息3', content: '消息3的内容' },
  { id: 'sdikj9e3u89f3fx23', title: '消息4', content: '消息4的内容' }
])
</script>
<style>
.message {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.message ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.message li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.message-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>