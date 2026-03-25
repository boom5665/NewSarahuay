<template>
  <div class="home-content">
    <div class="home-box">
      <div class="">
        <Slidehome :mainNews="mainNews" :sideNews="sideNews" />
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
import Slidehome from "~/components/mobile/Slidehome.vue";
import ImageCard from "~/components/mobile/ImageCard.vue";
import ResultBox from "~/components/mobile/ResultBox.vue";
import ResultLotto from "~/components/mobile/ResultLotto.vue";
import ResultHoro from "~/components/mobile/ResultHoro.vue";
import ResultAi from "~/components/mobile/ResultAi.vue";

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
const { $axios } = useNuxtApp();

const fetchData = async () => {
  try {
    const res = await $axios.get("/fe/home_lottery_list_file");
    console.log(res);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  // fetchData()
});
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
  max-width: 650px;
  width: 100%;
  padding: 0.5rem;
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
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-direction: column;
}
</style>
