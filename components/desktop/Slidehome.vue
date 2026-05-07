<template>
  <div>
    <div>
      <!-- header -->
      <div class="d-justi header">
        <h2>
          <div class="text-top">{{ $t("Latestnews") }}</div>
        </h2>
        <div>{{ today }}</div>
      </div>

      <div class="imgcard">

        <div class="content-left">
          <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true"
            :autoplay="{ delay: 200000000, pauseOnMouseEnter: true }" :pagination="{ clickable: true }">
            <SwiperSlide v-for="(item, index) in newsList" :key="item.id || index">
              <NuxtLink :to="`/detailsnew/${item.id}`">
                <div class="main-news">
                  <div class="news-image">
                    <div class="img-wrapper">
                      <img class="img-new" v-lazy="item.image" />
                      <div class="img-overlay"></div>
                    </div>
                  </div>

                  <div class="news-info">
                    <span class="category">{{ item.category }}</span>

                    <div v-if="loading">
                      <div class="sk-line w40"></div>
                    </div>

                    <div v-else>
                      <h2 class="title">
                        {{ item.title }}
                      </h2>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="content-right">
          <NuxtLink v-for="(item, index) in sideNews" :key="item.id || index" :to="`/detailsnew/${item.id}`">
            <div class="side-item">
              <div class="thumb">
                <img class="img" :src="item.image" />
              </div>

              <div class="text">
                <div v-if="loading">
                  <div class="sk-line w40"></div>
                </div>

                <div v-else class="side-title">
                  {{ item.title }}
                </div>

                <div class="d-justi">
                  <div v-if="loading" class="sk-line w20"></div>
                  <span v-else class="time"> <span><img class="clock" src="/icon/clock.svg" alt=""></span>{{ item.time
                  }}</span>

                  <div v-if="loading" class="sk-line w20"></div>
                  <span v-else class="time-col"> {{ item.category }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const loading = ref(true);

const props = defineProps({
  mainNews: {
    type: Object,
    default: null
  },
  sideNews: {
    type: Array,
    default: () => []
  }
});

const newsList = computed(() => {
  const main = props.mainNews ? [props.mainNews] : [];
  const side = props.sideNews ?? [];

  return [...main, ...side]
    .filter(Boolean)
    .map((item, index) => ({
      id: item?.id ?? `${index}`, // 👈 กัน undefined
      ...item
    }));
});

const today = new Date().toLocaleDateString("th-TH");

setTimeout(() => {
  loading.value = false;
}, 1200);
</script>
<style scoped lang="scss">
.imgcard {
  display: grid;
  grid-template-columns: 700px 1fr;
  gap: 16px;
  margin-top: 1rem;
}

.header {
  grid-column: 1 / -1;
}

.content-left {
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .main-news {
    display: flex;
    flex-direction: column;
  }

  .news-image {
    width: 100%;
    height: 23.6rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .img-new {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0) 32.62%,
        #000 97.57%);
    pointer-events: none;
  }

  .news-info {
    padding: 1.5rem 1rem;
    margin-bottom: 0rem;
    position: absolute;
    bottom: 0;
    width: 40rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

  }

  .category {
    font-size: 0.875rem;
    color: white;
    margin-bottom: 4px;
  }

  .title {
    font: var(--HeroHeadCardPC);
    color: #ffff;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
    max-height: 2.6em;
  }
}

.content-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.side-item {
  display: flex;
  gap: 1rem;
  height: 5.16rem;
}

.thumb {
  width: 8.125rem;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.side-title {
  font: var(--HeadCardPC);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.time {
  display: inline-block;
  min-height: 14px;
  font: var(--TimeCardPC);
}

.time-col {
  display: inline-block;
  min-height: 14px;
  font: var(--TimeCardPC);
  color: #008f6c;
}

/* util */
.d-justi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-top {
  font-size: 1.375rem;
  font-weight: 700;
}

.addtext {
  text-align: center;
  padding: 0.625rem;
  background: var(--color-black-0, #fff);
  color: #000;
  font: var(--ButtonMainPC);
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--color-black-200, #eee);
}

:deep(.swiper-pagination-horizontal) {
  bottom: 0.5rem;
  top: var(--swiper-pagination-top, auto);
  left: 15px;
  width: 100%;
  text-align: justify;
}

:deep(.swiper-pagination-bullet) {
  background: #ccc !important;
  opacity: 1;
  width: 0.5rem;
  height: 0.5rem;
}

:deep(.swiper-pagination-bullet-active) {
  background: #008f6c !important;
  width: 1.125rem;
  height: 0.5rem;
  border-radius: var(--radius-md, 8px);
}

.clock {
  width: 1rem;
  height: 1rem;
  transform: translate(0px, .1875rem);
  margin-right: 0.2rem;
}
</style>
