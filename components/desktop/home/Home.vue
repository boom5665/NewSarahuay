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


.home-page {
  width: 100%;
  max-width: 1620px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;

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
 
  
}

.right-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideInRight 0.8s ease-out 0.4s both;

}

/* MINI */
.mini-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

}

.home-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.3fr) minmax(0, 1.3fr);
  gap: 1rem;

  grid-template-areas:
    "hero lucky right"
    "horo horo right";
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
  gap: 1rem;
}

.horo {
  grid-area: horo;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
</style>
