<template>
  <div>


    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
      <Mobilehome />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper">
      <Desktophome />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import Desktophome from "~/components/desktop/home/Home.vue";
import Mobilehome from "~/components/mobile/home/Home.vue";

const mainStore = useMainStore();

const resultLayout = computed(() => mainStore.resultLayout);

const pageSeo = ref({
  home: {
    title: "หน้าแรก Sarahuay",
    description: "เช็กผลหวยล่าสุด พร้อมสถิติย้อนหลัง",
  },
});

useSeoMeta({
  title: pageSeo.value.home.title,

  description: pageSeo.value.home.description,

  ogTitle: pageSeo.value.home.title,

  ogDescription: pageSeo.value.home.description,

  twitterTitle: pageSeo.value.home.title,

  twitterDescription: pageSeo.value.home.description,
});

// mock config
const seoConfig = {
  schema: {
    newsArticle: true,
  },
};

// schema
if (seoConfig.schema.newsArticle) {
  useHead({
    script: [
      {
        type: "application/ld+json",

        children: JSON.stringify({
          "@context": "https://schema.org",

          "@type": "NewsArticle",

          headline: pageSeo.value.home.title,

          description: pageSeo.value.home.description,

          datePublished: "2026-05-12",

          author: {
            "@type": "Organization",

            name: "Sarahuay Homepage",
          },
        }),
      },
    ],
  });
}
const route = useRoute();
// const canonical = {
//   enable: true,
//   autoGenerate: true,
//   url: "",
// };

// const canonicalUrl =
//   canonical.autoGenerate
//     ? `https://sarahuay.com${route.path}`
//     : canonical.url;

// if (canonical.enable) {
//   useHead({
//     link: [
//       {
//         rel: "canonical",

//         href: canonicalUrl,
//       },
//     ],
//   });
// }
</script>
<style lang="scss" scoped>
.homecont {
  max-width: 1080px;
}
</style>
