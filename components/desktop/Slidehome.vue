<template>
  <div>
    <div>


      <div class="imgcard">

        <div class="content-left">
          <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true"
            :autoplay="{ delay: 5000, pauseOnMouseEnter: true }" :pagination="{ clickable: true }">
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

                    <div class="news-text">



                      <span class="category">{{ item.category }}</span>

                      <h2 class="title">
                        {{ item.title }}
                      </h2>

                      <div class="subtitle">
                        {{ item.subtitle }}
                      </div>

                      <div class="subtitle-in">
                        {{ item.subin }}
                      </div>

                    </div>


                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
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


setTimeout(() => {
  loading.value = false;
}, 1200);
</script>
<style scoped lang="scss">
.imgcard {
  display: grid;
  grid-template-columns: 100% 1fr;

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
    border-radius: 1rem;
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
    padding: 0.5rem 2rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;


  }

  .news-text {
    text-align: center;
    margin-top: 4rem;
  }

  .category {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    animation: heroSlideIn-f2b3f371 0.8s ease-out;
    text-align: center;
    margin-top: 1rem;
  }

  .title {
    font-size: 3.4375rem;
    font-weight: 700;
    color: #F6AE1D;
    animation: heroSlideIn-f2b3f371 0.8s ease-out;
  }

  .subtitle {
    color: white;
    font-size: 2.125rem;
    animation: heroSlideIn-f2b3f371 0.8s ease-out 0.1s both;
    text-align: center;
    margin-top: 1rem;
  }

  .subtitle-in {
    color: white;
    font-size: 1.5rem;
    animation: heroSlideIn-f2b3f371 0.8s ease-out 0.1s both;
    text-align: center;
    margin-top: 1rem;
  }
}


:deep(.swiper-pagination-horizontal) {
  bottom: 0.5rem;
  top: var(--swiper-pagination-top, auto);
  width: 100%;
  text-align: center;

}

:deep(.swiper-pagination-bullet) {
  background: white !important;
  opacity: 1;
  width: 1rem;
  height: 1rem;
  margin: 0 1.125rem !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #FFC143 !important;
  width: 3.125rem;
  height: 1rem;
  border-radius: var(--radius-md, 8px);
}

.clock {
  width: 1rem;
  height: 1rem;
  transform: translate(0px, .1875rem);
  margin-right: 0.2rem;
}
</style>
