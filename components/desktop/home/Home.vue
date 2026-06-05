<template>
  <div class="home-page">
    <div class="home-layout">
      <HeroBanner class="hero" />
      <LuckyNewsCard class="lucky" />
      <div class="right-column">
        <CheckLotteryCard />
        <LottoResultCard />
      </div>
      <div class="mini-grid horo">
        <HoroscopeCard title="ทำนายดวง" />
        <HoroscopeCard title="ทำนายฝัน" />
        <HoroscopeCard title="ไพ่ยิปซี" />
        <HoroscopeCard title="ดวงรายวัน" />
      </div>
    </div>

    <div class="container-grid">
      <ResultTable />
      <NewsSection />
    </div>

    <div class="left-content">
      <LuckyNumberCard />
      <TarotSection />
      <CommunitySection />
    </div>
  </div>
</template>

<script setup>
import HeroBanner from '~/components/desktop/home/HeroBanner.vue'
import LottoResultCard from '~/components/desktop/home/LottoResultCard.vue'
import LuckyNumberCard from '~/components/desktop/home/LuckyNumberCard.vue'
import HoroscopeCard from '~/components/desktop/home/HoroscopeCard.vue'
import NewsSection from '~/components/desktop/home/NewsSection.vue'
import ResultTable from '~/components/desktop/home/ResultTable.vue'
import TarotSection from '~/components/desktop/home/TarotSection.vue'
import CommunitySection from '~/components/desktop/home/CommunitySection.vue'
import CheckLotteryCard from '~/components/desktop/home/CheckLotteryCard.vue'
import LuckyNewsCard from '~/components/desktop/home/LuckyNewsCard.vue'
</script>

<style scoped lang="scss">
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes glow {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(255, 200, 87, 0.2), inset 0 0 20px rgba(147, 51, 234, 0.1);
  }

  50% {
    box-shadow: 0 0 40px rgba(255, 200, 87, 0.4), inset 0 0 30px rgba(147, 51, 234, 0.2);
  }
}

.home-page {
  min-height: 100vh;
  max-width: 101.25rem;
  margin: 0 auto;
  position: relative;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    right: 0;
    height: 320px;
   
    pointer-events: none;
    z-index: 0;
  }
}

.page-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
  padding: 4px 2px 0;
  position: relative;
  z-index: 1;

  h1 {
    color: #17332c;
    font-size: clamp(28px, 3vw, 44px);
    font-weight: 800;
    line-height: 1.15;
    max-width: 780px;
  }
}

.eyebrow {
  color: #008f6c;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0;
  margin-bottom: 6px;
}

.intro-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  button {
    height: 44px;
    border: 0;
    border-radius: 8px;
    padding: 0 18px;
    background: #008f6c;
    color: #fff;
    cursor: pointer;
    font-weight: 800;
    box-shadow: 0 12px 30px rgba(0, 143, 108, 0.18);
  }

  .ghost {
    background: rgba(255, 255, 255, 0.72);
    color: #17332c;
    border: 1px solid rgba(0, 143, 108, 0.22);
    box-shadow: none;
  }
}



.top-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* MAIN */
.container-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr);
  gap: 16px;
  position: relative;
  z-index: 1;
  margin-top: 16px;
  margin-bottom: 1rem;
}

.top-section {
  display: grid;
  grid-template-columns: minmax(0, 1.85fr) minmax(320px, 0.9fr);
  gap: 16px;
  position: relative;
}

.left-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr) minmax(320px, 1fr);
  gap: 16px;
  margin-bottom: 1rem;
  >* {
    border-radius: 8px;
    border: 1px solid rgba(0, 143, 108, 0.12);
    box-shadow: 0 18px 50px rgba(22, 45, 40, 0.08);
    overflow: hidden;

    &:hover {
      border-color: rgba(0, 143, 108, 0.28);
      transition: all 0.3s ease;
    }
  }
  
}

.right-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideInRight 0.8s ease-out 0.4s both;

  >* {
    border-radius: 8px;
    border: 1px solid rgba(0, 143, 108, 0.12);
    box-shadow: 0 18px 50px rgba(22, 45, 40, 0.08);
    overflow: hidden;

    &:hover {
      border-color: rgba(0, 143, 108, 0.28);
      transition: all 0.3s ease;
    }
  }
}

/* MINI */
.mini-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  >* {
    animation: fadeInUp 0.6s ease-out both;

    &:nth-child(1) {
      animation-delay: 0.5s;
    }

    &:nth-child(2) {
      animation-delay: 0.6s;
    }

    &:nth-child(3) {
      animation-delay: 0.7s;
    }

    &:nth-child(4) {
      animation-delay: 0.8s;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 34px rgba(0, 143, 108, 0.16);
      transition: all 0.3s ease;
    }
  }
}

.home-layout {
  display: grid;
  grid-template-columns: 45rem 25.9375rem 28.125rem;
  grid-template-areas:
    "hero lucky right"
    "horo horo right";
  gap: 20px;
}

.hero {
  grid-area: hero;
}

.lucky {
  grid-area: lucky;
}

.right-column {
  grid-area: right;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.horo {
  grid-area: horo;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
</style>
