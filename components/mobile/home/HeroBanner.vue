<template>
  <div class="hero-banner">
    <Slidehome :mainNews="mainNews" :sideNews="sideNews" />
  
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Slidehome from "~/components/mobile/Slidehome.vue";


const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 1200)

const mainNews = {
  title:
    'เลขเด็ด สถิติหวย',
  category: "รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้",
  image: "/bga.png",
  subtitle: "เลขมาแรงจากงวดที่กำลังมา",
  subin: "ครบจบในที่เดียว"
};

const sideNews = [
  {
    id: 2,
    title:
      'เลขเด็ด สถิติหวย',
    category: "รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้",
    image: "/bga.png",
    subtitle: "เลขมาแรงจากงวดที่กำลังมา",
    subin: "ครบจบในที่เดียว"
  },
  {
    id: 3,
    title:
      'เลขเด็ด สถิติหวย',
    category: "รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้",
    image: "/bga.png",
    subtitle: "เลขมาแรงจากงวดที่กำลังมา",
    subin: "ครบจบในที่เดียว"
  },
  {
    id: 4,
    title:
      'เลขเด็ด สถิติหวย',
    category: "รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้",
    image: "/bga.png",
    subtitle: "เลขมาแรงจากงวดที่กำลังมา",
    subin: "ครบจบในที่เดียว"
  },
  {
    id: 5,
    title:
      'เลขเด็ด สถิติหวย',
    category: "รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้",
    image: "/bga.png",
    subtitle: "เลขมาแรงจากงวดที่กำลังมา",
    subin: "ครบจบในที่เดียว"
  }
];
</script>
<style scoped lang="scss">
@keyframes heroSlideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes imageFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) rotateY(-20deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotateY(0);
  }
}

@keyframes shadowFloat {

  0%,
  100% {
    box-shadow: 0 20px 60px rgba(255, 179, 0, 0.2);
  }

  50% {
    box-shadow: 0 30px 80px rgba(255, 179, 0, 0.4);
  }
}

.hero-banner {
  width: 100%;

  box-shadow: 0 24px 70px rgba(15, 38, 33, 0.18);
  border: 1px solid #31304C;
  border-radius: var(--radius-lg, 16px);
}



</style>
