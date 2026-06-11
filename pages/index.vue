<template>
  <main class="index-page">
    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper mobile-layout">
      <Mobilehome />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper desktop-layout">
      <Desktophome />
    </div>
  </main>
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


// mock config จาก BO
const seoConfig = {
  schema: {
    newsArticle: {
      enable: true,

      publisherName: "Sarahuay Homepage",

      publisherLogo:
        "https://sarahuay.com/logo.png",

      authorName: "Admin",
    },
  },
};

// Schema
if (seoConfig.schema.newsArticle.enable) {
  useHead({
    script: [
      {
        type: "application/ld+json",

        children: JSON.stringify({
          "@context": "https://schema.org",

          "@type": "NewsArticle",

          headline: pageSeo.value.home.title,

          description:
            pageSeo.value.home.description,

          datePublished: "2026-05-12",

          dateModified: "2026-05-12",

          author: {
            "@type": "Person",

            name:
              seoConfig.schema.newsArticle
                .authorName,
          },

          publisher: {
            "@type": "Organization",

            name:
              seoConfig.schema.newsArticle
                .publisherName,

            logo: {
              "@type": "ImageObject",

              url:
                seoConfig.schema.newsArticle
                  .publisherLogo,
            },
          },
        }),
      },
    ],
  });
}
const route = useRoute();
const canonical = {
  enable: true,
  autoGenerate: true,
  url: "",
};

const canonicalUrl =
  canonical.autoGenerate
    ? `https://sarahuay.com${route.path}`
    : canonical.url;

if (canonical.enable) {
  useHead({
    link: [
      {
        rel: "canonical",

        href: canonicalUrl,
      },
    ],
  });
}
</script>
<style lang="scss" scoped>


.layout-wrapper {
  width: 100%;
}

.desktop-layout {
  padding-top: 1rem;
}




</style>
