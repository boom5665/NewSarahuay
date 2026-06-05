<template>
  <div class="home-content">
    <div class="home-box">
      <section class="mobile-hero">
        <div class="hero-label">Sarahuay Today</div>
        <h1>เช็กผลหวย เลขเด็ด และข่าวใหม่</h1>
        <p>รวมข้อมูลประจำวันให้อ่านง่ายบนมือถือ</p>
      </section>

      <div class="section-shell">
        <Slidehome :mainNews="mainNews" :sideNews="sideNews" />
      </div>
  
      <div class="quick-grid">
        <ResultBox />
        <ResultLotto />
      </div>
      <div class="quick-grid">
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
  background:
    linear-gradient(180deg, #fff8e8 0%, #f3fbf6 52%, #eef7f2 100%);
  min-height: 100vh;
}
.home-box {
  max-width: 650px;
  width: 100%;
  padding: 0.75rem;
}

.mobile-hero {
  min-height: 13.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.45rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  color: #fff;
  background:
    linear-gradient(180deg, rgba(15, 38, 33, 0.12) 0%, rgba(15, 38, 33, 0.92) 100%),
    url("https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=900&q=80");
  background-position: center;
  background-size: cover;
  box-shadow: 0 1rem 2rem rgba(15, 38, 33, 0.16);

  h1 {
    font-size: 1.65rem;
    line-height: 1.2;
    font-weight: 800;
  }

  p {
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.5;
  }
}

.hero-label {
  width: max-content;
  padding: 0.35rem 0.65rem;
  border-radius: 0.5rem;
  background: #ffd54a;
  color: #17332c;
  font-size: 0.8rem;
  font-weight: 800;
}

.section-shell {
  :deep(.imgcard) {
    border: 1px solid rgba(0, 143, 108, 0.12);
    box-shadow: 0 0.75rem 1.75rem rgba(22, 45, 40, 0.08);
  }
}
.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0px;
}
.quick-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 0.5rem;

  :deep(> *) {
    border-radius: 0.5rem;
    box-shadow: 0 0.75rem 1.75rem rgba(22, 45, 40, 0.08);
  }
}

@media (min-width: 560px) {
  .quick-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
