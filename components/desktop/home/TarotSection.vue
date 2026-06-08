<template>
  <div class="lucky-news-card">
    <div class="card card-pad">
      <div class="card-head">
        <div class="card-head-two">
          <div class="card-title"><span class="ic"><img src="/icon/hot5.png" alt=""></span> เลขเด่นวันนี้</div>

        </div>

      </div>
      <div class="lotto-grid">

        <div v-for="lotto in lottos" :key="lotto.name" class="zod" :style="{
          backgroundImage: `url(${lotto.bg})`
        }">
          <div class="zod-name">
            <span class="zod-name-text"> {{ lotto.name }}</span>
          </div>
          <div class="zod-orb">
            <img :src="lotto.img">
          </div>
          <div class="zod-desc">
            <span class="zod-name-text"> {{ lotto.desc }}</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const lottos = [
  {
    name: "ราศีเมษ",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/fun.png",
  },
  {
    name: "ราศีพฤษภ",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/car.png",
  },
  {
    name: "ราศีเมถุน",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/fish.png",
  },
  {
    name: "ราศีกรกฎ",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/snack.png",
  },
  {
    name: "ราศีสิงห์",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/pilot.png",
  },
  {
    name: "ราศีกันย์",
    desc: "64 64 64",
    bg: "/lotto/lottobg.png",
    img: "/lotto/ghost.png",
  },
];
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

.lotto-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.zod {
  width: 9.7rem;
  height: 12.875rem;
  display: flex;
  flex-direction: column;
  padding: 0.75rem; // 12px
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  border: none;
  justify-content: center;
}

.zod-orb {
  margin: 0 auto;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 6.25rem;
    height:  6.25rem;
    object-fit: contain;
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
  height: 2.5625rem; // 41px
  color: #fff;
  text-align: center;

  border: 0.0625rem solid rgba(113, 106, 217, 0);

  background: linear-gradient(
    270deg,
    rgba(113, 106, 217, 0) 0%,
    rgba(113, 106, 217, 0.5) 30%,
    rgba(113, 106, 217, 0.5) 70%,
    rgba(113, 106, 217, 0) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
}

.zod-name-text {
  background: linear-gradient(
    180deg,
    #fff 50%,
    #cacaca 68.33%,
    #fff 83.33%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  filter: drop-shadow(0 0.4375rem 0.125rem rgba(0, 0, 0, 0.35)); // 7px 2px
}

.zod-desc {
  font-size: 1.25rem;
  font-weight: 700;
  height: 2.5625rem; // 41px
  color: var(--white);
  text-align: center;
  margin-bottom: 0.125rem; // 2px

  border: 0.0625rem solid rgba(217, 170, 106, 0);

  background: linear-gradient(
    270deg,
    rgba(217, 170, 106, 0) 0%,
    rgba(217, 170, 106, 0.5) 30%,
    rgba(217, 170, 106, 0.5) 70%,
    rgba(217, 170, 106, 0) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
}

.off {
  color: #3a3850;
}
</style>