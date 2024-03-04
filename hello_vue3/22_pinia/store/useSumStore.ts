import { defineStore } from "pinia";

export const useSumStore = defineStore('sum', {
  state() {
    return {
      sum: 0
    }
  },
  actions: {
    add(value: string|number) {
      if (this.sum < 100) {
        this.sum+=Number(value)
      }
    },
    minus(value: string|number) {
      if (this.sum > 0) {
        this.sum-=Number(value)
      }
    }
  },
  getters: {
    formatSum(state) {
      return `￥${state.sum}`
    }
  }
})