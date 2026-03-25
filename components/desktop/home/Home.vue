<template>
  <div class="home-content">
    <div class="home-box">
      <div class="">
        <Slidehome :mainNews="mainNews" :sideNews="sideNews" />
      </div>
      <div class="home-item">
        <ImageCard
          v-for="imgcard in imgcardData"
          :key="imgcard.id"
          :icon="'flags/pingpong6.svg'"
          :obj="imgcard"
        />
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
    imgSrc: "https://picsum.photos/350/180?random=1",
    subtitle:
      "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรงราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแ",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/350/180?random=2",
    subtitle:
      "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรง",
    date: "21 ก.ย. 67",
    taxt: "ดูดวง"
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/350/180?random=3",
    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/350/180?random=4",

    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    date: "21 ก.ย. 67",
    taxt: "ไพ่ยิปซี"
  }
]);

const mainNews = {
  title:
    'โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67',
  category: "ข่าวหวย",
  image: "https://picsum.photos/800/400"
};

const sideNews = [
  {
    title:
      "รวยแล้วเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
    image: "https://picsum.photos/500/400",
    time: "16 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    title:
      "เลขเด็ดงวดนี้มาแรงเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
    image: "https://picsum.photos/600/400",
    time: "10 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    title: "เลขเด็ดงวดนี้มาแรง",
    image: "https://picsum.photos/700/400",
    time: "10 ชั่วโมงก่อน",
    category: "ข่าวหวย"
  },
  {
    title: "เลขเด็ดงวดนี้มาแรง",
    image: "https://picsum.photos/900/400",
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
</style>
