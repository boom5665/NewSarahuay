<template>
  <div class="lottery-list">

    <div v-for="item in lotteries" :key="item.name" class="lottery-card"
      :style="{ backgroundImage: `url(${item.bg})` }">
      <div class="overlay"></div>

      <div class="left">
        <img :src="item.logo" :alt="item.name" class="logo" />

        <div class="info">
          <div class="name">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="timer">
        <span><img src="/icon/Clockw.png" alt=""></span>
        <span class="day">{{ item.day }}</span>
        <span class="minus">{{ item.time }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
const lotteries = [
  {
    name: "สลากกินแบ่งฯ",
    logo: "/icon/thai.png",
    bg: "/icon/bthai.png",
    day: "15 วัน",
    time: "01:57:34",
  },
  {
    name: "หวยลาว",
    logo: "/icon/laos.png",
    bg: "/icon/bloas.png",
    day: "",
    time: "01:57:34",
  },
];
</script>

<style scoped lang="scss">
.lottery-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  border-radius: 20px;
  padding: 1rem;
  color: white;
  border: 1px solid rgba(111, 60, 255, 0.2);

}

.lottery-card {
  position: relative;

  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-radius: .3125rem;
  overflow: hidden;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, .1);

}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
      rgba(0, 0, 0, .35),
      rgba(0, 0, 0, .15));
}

.left,
.timer {
  position: relative;
  z-index: 2;

}

.left {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.logo {
  width: 38px;
  height: 39px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: contain;
  background: #fff;
}

.name {
  font-size: 1.375rem;
  font-weight: 600;
}

.timer {
  display: flex;
  align-items: center;
  gap: 6px;

  background: rgba(0, 0, 0, .55);

  padding: 6px 8px;

  border-radius: 8px;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
}

.day {
  background: linear-gradient(180deg, #F9F7AC 41.67%, #FBCA32 57.14%, #F5C32C 72.92%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.minus {
  background: linear-gradient(180deg, #FFF 50%, #CACACA 68.33%, #FFF 83.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>