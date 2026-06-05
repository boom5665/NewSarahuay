<template>
  <article class="horo-card" :style="cardStyle">
    <div class="overlay"></div>

    <div class="content">
      <div class="horo-title">
        {{ card.title }}
      </div>

      <div class="horo-desc">
        {{ card.description }}
      </div>

      <div class="btt">
        {{ card.button }}
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
});

const cardMap = {
  "ทำนายดวง": {
    bg: "/icon/horo-1.png",
    title: "ทำนายดวง",
    description: "ดูดวง 12 ราศี",
    button: "ดูดวงของคุณ",
  },

  "ทำนายฝัน": {
    bg: "/icon/horo-2.png",
    title: "ทำนายฝัน",
    description: "ฝันแบบไหนมีเลขอะไรบ้าง",
    button: "ทำนายความฝัน",
  },

  "ไพ่ยิปซี": {
    bg: "/icon/horo-3.png",
    title: "ไพ่ยิปซี",
    description: "ดูดวงไพ่ยิปซี",
    button: "เปิดไพ่ยิปซี",
  },

  "ดวงรายวัน": {
    bg: "/icon/horo-4.png",
    title: "ดวงรายวัน",
    description: "ดวงประจำวันจากข้อมูล",
    button: "ดูดวงวันนี้",
  },
};

const card = computed(() => {
  return cardMap[props.title] || cardMap["ทำนายดวง"];
});

const cardStyle = computed(() => ({
  backgroundImage: `url(${card.value.bg})`,
}));
</script>

<style scoped lang="scss">
.horo-card {
  padding: 1rem;
  border-radius: .3125rem;
  overflow: hidden;
  background-image: url("/icon/horoscope-bg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
}

.card-head,
.horo-title {
  position: relative;
  z-index: 1;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.icon-wrap {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--soft);
  border: 1px solid rgba(255, 255, 255, 0.7);

  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
  }
}

.card-badge {

  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 10px;
  color: var(--accent);
  background: #fff;
  border: 1px solid rgba(0, 143, 108, 0.1);
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
}

.horo-title {
  background: linear-gradient(180deg, #F9F7AC 41.67%, #FFDD72 57.14%, #F5C32C 72.92%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}

.horo-desc {
  margin-bottom: 0.5rem;
  color: white;
  position: relative;
  z-index: 1;
  font-size: 1rem;

}

.btt {
  border-radius: 8px;
  background: #F6AE1D;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: max-content;
  padding: 8px 1.5625rem;
}

@media (max-width: 1180px) {
  .horo-card {
    min-height: 176px;
  }
}
</style>
