<template>
  <div class="message">
    <ul>
      <li>Message</li>
      <li>Message</li>
      <li>Message</li>
      <li>Message</li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="Message">

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