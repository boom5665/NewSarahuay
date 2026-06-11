// plugins/axios.ts
import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: config.public.baseURL as string,
  });

  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
      const token = useCookie<string | null>("token").value;

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      nuxtApp.$mainStore.loaderAction(true);

      return config;
    },
    (error: AxiosError) => {
      nuxtApp.$mainStore.loaderAction(false);

      console.log("Request Error:", error);

      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      nuxtApp.$mainStore.loaderAction(false);

      return response.data;
    },
    (error: AxiosError<any>) => {
      nuxtApp.$mainStore.loaderAction(false);

      const data = error.response?.data || {};

      console.log("ERROR CODE =", error.code);
      console.log("ERROR MESSAGE =", error.message);
      console.log("ERROR REQUEST =", error.request);
      console.log("ERROR RESPONSE =", error.response);

      const t =
        nuxtApp.$i18n?.t ||
        ((key: string) => {
          return key;
        });

      nuxtApp.$alertModalToggle(
        "error",
        t("fail"),
        t("err_other", {
          a: data.code || error.code || "UNKNOWN",
        })
      );

      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});