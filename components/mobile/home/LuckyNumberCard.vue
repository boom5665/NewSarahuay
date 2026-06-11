<template>
  <div class="lucky-news-card">
    <div class="card card-pad">
      <div class="card-head">
        <div class="card-head-two">
          <div class="card-title"><span class="ic"><img src="/icon/hot4.png" alt=""></span> ดวงวันนี้</div>
          <span class="card-sub">ดูดวงรายวัน 12 ราศี</span>
        </div>
        <div class="see-all">
          <span style="margin-right: 5px;">ดูดวงเพิ่มเติม</span> <svg xmlns="http://www.w3.org/2000/svg" width="7"
            height="13" viewBox="0 0 7 13" fill="none">
            <path d="M0.75 0.750546L5.45003 6.0306L0.75 11.3105" stroke="#FFDE6E" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="zodiac-grid">

        <div v-for="zodiac in zodiacs" :key="zodiac.name" class="zod" :style="{
          backgroundImage: `url(${zodiac.bg})`
        }">
          <div class="zod-name">
            {{ zodiac.name }}
          </div>

          <div class="zod-desc">
            {{ zodiac.desc }}
          </div>

          <div class="stars-rate">
            <img v-for="star in zodiac.r" :key="'active-' + star" src="/icon/star.png" class="star">
            <img v-for="star in (5 - zodiac.r)" :key="'off-' + star" src="/icon/starlbac.png" class="star">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const zodiacs = ref([]);

const zodiacMap = {
  Aries: {
    name: "ราศีเมษ",
    bg: "/zodiac/aries.png",
  },
  Taurus: {
    name: "ราศีพฤษภ",
    bg: "/zodiac/taurus.png",
  },
  Gemini: {
    name: "ราศีเมถุน",
    bg: "/zodiac/gemini.png",
  },
  Cancer: {
    name: "ราศีกรกฎ",
    bg: "/zodiac/cancer.png",
  },
  Leo: {
    name: "ราศีสิงห์",
    bg: "/zodiac/leo.png",
  },
  Virgo: {
    name: "ราศีกันย์",
    bg: "/zodiac/virgo.png",
  },
  Libra: {
    name: "ราศีตุลย์",
    bg: "/zodiac/libra.png",
  },
  Scorpio: {
    name: "ราศีพิจิก",
    bg: "/zodiac/scorpio.png",
  },
  Sagittarius: {
    name: "ราศีธนู",
    bg: "/zodiac/sagittarius.png",
  },
  Capricorn: {
    name: "ราศีมังกร",
    bg: "/zodiac/capricorn.png",
  },
  Aquarius: {
    name: "ราศีกุมภ์",
    bg: "/zodiac/aquarius.png",
  },
  Pisces: {
    name: "ราศีมีน",
    bg: "/zodiac/pisces.png",
  },
};
const { $axios } = useNuxtApp();
const getDailyFortune = async () => {
  try {
    const res = await $axios.get("/api/fortunes/daily");

    zodiacs.value = res.data.map((item) => ({
      name: zodiacMap[item.zodiac]?.name || item.zodiac,
      desc: item.fortune,
      bg: zodiacMap[item.zodiac]?.bg || "",
      r: item.rate,
    }));

    console.log(zodiacs.value);
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  getDailyFortune();
});
</script>

<style scoped lang="scss">
.lucky-news-card {
  border: 0.0625rem solid #3C4765;
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  border: 0.0625rem solid rgba(59, 130, 246, 0.2);
  overflow: hidden;
}

.sub-title {
  font-size: 0.6875rem; // 11px
  color: var(--muted);
  font-weight: 400;
}

.zodiac-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  justify-items: center;
}

.zod {
  width: 7.375rem;
  height: 8.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem; // 8px

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  border: none;
}

.zod-name,
.zod-desc,
.stars-rate {
  position: relative;
  z-index: 2;
}

.zod-orb {
  width: 4.375rem; // 70px
  height: 4.375rem; // 70px

  margin: 0 auto 0.625rem; // 10px

  border-radius: 50%;
  overflow: hidden;

  border: 0.125rem solid rgba(255, 255, 255, 0.1); // 2px

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.stars-rate {
  display: flex;
  justify-content: center;
  gap: 0.1875rem; // 3px
}

.star {
  width: 0.75rem; // 12px
  height: 0.75rem; // 12px
  object-fit: contain;
}

.zod-name {
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  text-align: center;
}

.zod-desc {
  font-size: 0.875rem;
  color: var(--white);
  text-align: center;
}
</style>