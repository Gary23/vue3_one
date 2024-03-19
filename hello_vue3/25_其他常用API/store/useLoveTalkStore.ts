import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'
import { reactive } from 'vue'

interface LoveTalkInter {
  id: string
  content: string
}
type LoveTalkList = Array<LoveTalkInter>

// let loveTalkList = reactive<LoveTalkList>([])
export const useLoveTalkStore = defineStore('loveTalk', function() {
  const loveTalkList = reactive<LoveTalkList>([])
  function getLoveTalk() {
    axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
      loveTalkList.push({
        id: nanoid(),
        content: res.data.content
      })
    })
  }
  return {
    loveTalkList,
    getLoveTalk
  }
})