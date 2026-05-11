<template>
  <div>
    <div class="">
      <!-- header -->
      <div class="imgcard">
        <div class="d-justi header">
          <div class="text-top">
            <h1>ข่าวใหม่วันนี้</h1>
          </div>
          <div class="text-top-date">{{ today }}</div>
        </div>
        <div class="content-left">
          <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true"
            :autoplay="{ delay: 20000, pauseOnMouseEnter: true }" :pagination="{ clickable: true }">
            <SwiperSlide v-for="(item, index) in newsList" :key="index">
              <div class="main-news">
                <div class="news-image">
                  <img class="img-new" :src="item.image || 'https://via.placeholder.com/300x200'" />
                </div>

                <div class="news-info">
                  <span class="category">{{ item.category }}</span>

                  <h2 class="title">
                    {{ item.title }}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="content-right">
          <div class="side-item" v-for="(item, index) in sideNews" :key="index">
            <div class="thumb">
              <img class="img" :src="item.image || 'https://via.placeholder.com/150x100'" />
            </div>

            <div class="text">
              <div class="side-title">
                {{ item.title }}
              </div>

              <div class="d-justi">
                <span class="time">{{ item.time }}</span>
                <span class="time-col">{{ item.category }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="d-center">
          <div class="addtext">ดูเพิ่มเติม</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const props = defineProps({
  mainNews: {
    type: Object,
    required: true
  },
  sideNews: {
    type: Array,
    default: () => []
  }
});

// รวม data
const newsList = computed(() => {
  return props.mainNews ? [props.mainNews, ...props.sideNews] : props.sideNews;
});

// วันที่
const today = new Date().toLocaleDateString("th-TH");
</script>
<style scoped lang="scss">
.imgcard {
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  flex-direction: column;
  margin-bottom: 0.5rem;
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
    height: 12rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .img-new {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .news-info {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .category {
    font-size: 0.875rem;
    color: black;
    margin-bottom: 4px;
  }

  .title {
    font: var(--HeroHeadCard);
    color: #4a7766;
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
}

.side-item {
  display: flex;
  gap: 1rem;
  height: 5.5rem;
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
  font: var(--HeadCard);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.time {
  font: var(--TimeCard);
}

.time-col {
  font: var(--TimeCard);
  color: #008f6c;
}

/* util */
.d-justi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-top {
  // font: var(--PageTitle);
}

.text-top-date {
  font-size: .875rem;
}

.addtext {
  text-align: center;
  padding: 0.625rem 1.5rem;
  color:  #008F6C;
  font: var(--ButtonMain);
  border-radius: var(--radius-full, 999px);
  border: 1px solid var(--color-Green-Deep-Teal-500, #008F6C);
  width: max-content;
}

:deep(.swiper-pagination-horizontal) {
  bottom: 0.0625rem;
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
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

.d-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
