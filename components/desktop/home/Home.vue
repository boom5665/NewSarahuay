<template>
  <div class="home-content">
    <div class="home-box">
      <div class="home-incontent">
        <div class="">
          <Slidehome :mainNews="mainNews" :sideNews="sideNews" />
        </div>
        <div class="home-item">
          <NuxtLink v-for="imgcard in imgcardData" :key="imgcard.id" :to="`/detailsnew/${imgcard.id}`"
            class="news-link">
            <ImageCard :obj="imgcard" :loading="loading" />
          </NuxtLink>
        </div>
        <div class="imgcard">
          <NuxtLink to="lotto">
            <span class="bt-next">ดูเพิ่มเติม <img src="/assets/svg/right.svg" alt="" /></span>
          </NuxtLink>
        </div>
      </div>

      <div class="d-flex">
        <ResultBox />
        <ResultLotto />
      </div>
      <div class="d-flex">
        <ResultHoro />
        <ResultAi />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Slidehome from "~/components/desktop/Slidehome.vue";
import ImageCard from "~/components/desktop/ImageCard.vue";
import ResultBox from "~/components/desktop/ResultBox.vue";
import ResultLotto from "~/components/desktop/ResultLotto.vue";
import ResultHoro from "~/components/desktop/ResultHoro.vue";
import ResultAi from "~/components/desktop/ResultAi.vue";


const imgcardData = ref([
  {
    id: 1,
    imgSrc: "/HightlightNews.png",
    subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  },
  {
    id: 2,
    imgSrc: "/HightlightNews.png",
    subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรงรวม 100 แคปชั่นทองแพงรวม 100 แคปชั่นทองแพง",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  }
  ,
  {
    id: 3,
    imgSrc: "/HightlightNews.png",
    subtitle: "รวม 100 แคปชั่นทองแพง",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  }
  ,
  {
    id: 4,
    imgSrc: "/HightlightNews.png",
    subtitle: "รวม 100 แคปชั่นทองแพง",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  }
])
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 1200)

const mainNews = {
  title:
    'โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67',
  category: "ข่าวหวย",
  image: "/HightlightNews.png"

};

const sideNews = [
  {
    id: 2,
    title:
      "รวยแล้วเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
    image: "/HightlightNews.png",
    time: "16 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    id: 3,
    title:
      "เลขเด็ดงวดนี้มาแรงเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
    image: "/HightlightNews.png",
    time: "10 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    id: 4,
    title: "เลขเด็ดงวดนี้มาแรง",
    image: "/HightlightNews.png",
    time: "10 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    id: 5,
    title: "เลขเด็ดงวดนี้มาแรง",
    image: "/HightlightNews.png",
    time: "10 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  }
];
</script>

<style scoped lang="scss">
.button {
  min-width: 14.438rem;
  height: 3rem;
}

.home-content {
  display: flex;
  justify-content: center;
}

.home-box {
  max-width: 1080px;
  width: 100%;
}

.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0px;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.home-incontent {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.bt-next {
  font: var(--ButtonMain);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--Green-Main-Green-500, #008F6C);
  padding: .8125rem;
  cursor: pointer;
}
</style>
