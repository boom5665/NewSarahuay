export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    port: 5012, // เปลี่ยน 3001 เป็น port ที่คุณต้องการ
  },
  app: {
    head: {
      title: "Sarahuay",
      htmlAttrs: {
        lang: "th",
        translate: "no",
      },
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Sarahuay เว็บข่าวหวย ผลหวย และเลขเด็ด",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/icon_tab.png" }],
    },
  },
  plugins: [
    { src: "~/plugins/pinia.js", mode: "client" },
    { src: "~/plugins/axios.js", mode: "client" },
    { src: "~/plugins/vue-final-modal.js", mode: "client" },
    { src: "~/plugins/methods.js", mode: "client" },
  ],
  modules: ["@pinia/nuxt"],

  css: ["@/assets/scss/main.scss"],
  runtimeConfig: {
    // ตัวแปรที่เข้าถึงได้ในฝั่งไคลเอนต์
    public: {
      // baseURL: process.env.API_BASE_URL
    },
  },
  alias: {
    // 'vue': 'vue/dist/vue.esm-bundler.js'  // เพิ่มการตั้งค่านี้เพื่อใช้ full build ของ Vue
  },
});
