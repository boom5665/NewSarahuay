// stores/counter.ts
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    resultLayout: 'desktop',
    loadCounter: 0,
  }),
  actions: {
    setResultLayout(val: string) {
      this.resultLayout = val;
    },
    loaderAction(action: Boolean) {
      if (action) this.loadCounter += 1;
      else this.loadCounter -= 1;
    },
  }
})
