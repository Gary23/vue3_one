import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'
interface LoveTalkInter {
  id: string
  content: string
}
type LoveTalkList = Array<LoveTalkInter>

// let loveTalkList = reactive<LoveTalkList>([])
export const useLoveTalkStore = defineStore('loveTalk', {
  state() {
    return {
      loveTalkList: <LoveTalkList>[]
    }
  },
  actions: {
    getLoveTalk() {
      axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
        this.loveTalkList.push({
          id: nanoid(),
          content: res.data.content
        })
      })
    }
  }
})