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
import { ref, onMounted, onUnmounted } from "vue";

const { $axios } = useNuxtApp();

const lotteries = ref([]);

const lottoMap = {
  thailotto: {
    name: "สลากกินแบ่งฯ",
    logo: "/icon/thai.png",
    bg: "/icon/bthai.png",
  },
  laoslotto: {
    name: "หวยลาว",
    logo: "/icon/laos.png",
    bg: "/icon/bloas.png",
  },
  hanoylotto: {
    name: "หวยฮานอย",
    logo: "/icon/hanoy.png",
    bg: "/icon/bhanoy.png",
  },
};

let interval = null;

const getCountdown = (dateTime) => {
  const target = new Date(dateTime);
  const now = new Date();

  const diff = target - now;

  if (diff <= 0) {
    return {
      day: "0 วัน",
      time: "00:00:00",
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return {
    day: `${days} วัน`,
    time: `${String(hours).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`,
  };
};

const updateCountdowns = () => {
  lotteries.value = lotteries.value.map((item) => {
    const countdown = getCountdown(item.result_date_time);

    return {
      ...item,
      day: countdown.day,
      time: countdown.time,
    };
  });
};

const getLotteryCountdown = async () => {
  try {
    const res = await $axios.get("/api/lottery/schedules");

    lotteries.value = res.data
      .filter(item => item.lotto_type !== "hanoylotto")
      .map(item => ({
        lotto_type: item.lotto_type,
        name: lottoMap[item.lotto_type]?.name || item.lotto_type,
        logo: lottoMap[item.lotto_type]?.logo || "",
        bg: lottoMap[item.lotto_type]?.bg || "",
        result_date_time: item.result_date_time,
        day: "",
        time: "",
      }));

    updateCountdowns();

    interval = setInterval(() => {
      updateCountdowns();
    }, 1000);

  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  getLotteryCountdown();
});

onUnmounted(() => {
  clearInterval(interval);
});
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

  height: 5.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .875rem;
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
  width: 3.125rem;
  height: 3.125rem;
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
  gap: .375rem;

  background: rgba(0, 0, 0, .55);

  padding: .375rem .5rem;

  border-radius: .5rem;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  img {
    width: 1.6875rem;
    height: 1.6875rem;
  }
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