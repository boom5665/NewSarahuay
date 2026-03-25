import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  let i18n = nuxtApp.vueApp.config.globalProperties.$t;
  
  
  const axiosInstance = axios.create({
    baseURL: config.public.baseURL, // ใส่ base URL ของคุณที่นี่
  });

  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // ทำบางอย่างก่อน request ถูกส่ง
      // คุณสามารถเพิ่ม headers หรือ config อื่น ๆ ได้ที่นี่
      // config.headers['Authorization'] = 'Bearer YOUR_TOKEN'
      const token = useCookie('token').value; // ใช้ Cookie ชื่อ 'token'
      // เพิ่ม Bearer Token ลงใน Header ถ้ามี Token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // เปิด Loader action
      nuxtApp.$mainStore.loaderAction(true);
      return config;
    },
    (error) => {
      // ทำบางอย่างกับ request error
      nuxtApp.$mainStore.loaderAction(false);
      let data = error.response.data;
      console.log('Request Error : ',data);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // ทำบางอย่างกับ response data
      // console.log('Response Interceptor', response)

      // ปิด Loader action
      nuxtApp.$mainStore.loaderAction(false);
      return response.data;
    },
    (error) => {
      // ทำบางอย่างกับ response error
      let data = error.response.data;
      switch (data.code) {
        // case 40301:
        //   nuxtApp.$alertModalToggle("error", i18n("fail"), i18n("err_40301"));
        //   break;
        default:
          console.log(nuxtApp);
          nuxtApp.$alertModalToggle(
            "error",
            i18n("fail"),
            i18n("err_other", { a: data.code })
          );
          break;
      }
      
      nuxtApp.$mainStore.loaderAction(false);
      return Promise.reject(error);
    }
  );

  nuxtApp.provide("axios", axiosInstance);
});
