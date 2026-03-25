// stores/counter.ts
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alertShow: false,
    alertStatus: '',
    alertTitle: '',
    alertDesc: ''
  }),
  actions: {
    setAlertShow(val: boolean) {
      this.alertShow = val;
    },
    setAlertStatus(val: string) {
      this.alertStatus = val;
    },
    setAlertTitle(val: string) {
      this.alertTitle = val;
    },
    setAlertDesc(val: string) {
      this.alertDesc = val;
    },
  }
})
