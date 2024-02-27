import {
  reactive
} from 'vue'
import axios from 'axios'

export default function() {
  let dogList = reactive([])

  // 随机生成狗的链接：https://dog.ceo/api/breed/pembroke/images/random
  function getDog() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
      dogList.push(res.data.message)
    })
  }
  return { dogList, getDog }
}