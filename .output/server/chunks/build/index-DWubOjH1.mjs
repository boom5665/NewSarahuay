import { f as defineStore } from './server.mjs';

const useMainStore = defineStore("main", {
  state: () => ({
    resultLayout: "desktop",
    loadCounter: 0
  }),
  actions: {
    setResultLayout(val) {
      this.resultLayout = val;
    },
    loaderAction(action) {
      if (action) this.loadCounter += 1;
      else this.loadCounter -= 1;
    }
  }
});

export { useMainStore as u };
//# sourceMappingURL=index-DWubOjH1.mjs.map
