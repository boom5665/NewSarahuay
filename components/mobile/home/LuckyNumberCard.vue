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
const zodiacs = [
  {
    name: "ราศีเมษ",
    desc: "การเงินดี",
    bg: "/zodiac/aries.png",
    r: 4,
  },
  {
    name: "ราศีพฤษภ",
    desc: "โชคลาภเด่น",
    bg: "/zodiac/taurus.png",
    r: 5,
  },
  {
    name: "ราศีเมถุน",
    desc: "มีเกณฑ์เดินทาง",
    bg: "/zodiac/gemini.png",
    r: 3,
  },
  {
    name: "ราศีกรกฎ",
    desc: "อารมณ์แปรปรวน",
    bg: "/zodiac/cancer.png",
    r: 4,
  },
  {
    name: "ราศีสิงห์",
    desc: "งานโดดเด่น",
    bg: "/zodiac/leo.png",
    r: 5,
  },
  {
    name: "ราศีกันย์",
    desc: "ระวังการใช้จ่าย",
    bg: "/zodiac/virgo.png",
    r: 3,
  },
  {
    name: "ราศีตุลย์",
    desc: "คนช่วยเหลือ",
    bg: "/zodiac/libra.png",
    r: 4,
  },
  {
    name: "ราศีพิจิก",
    desc: "ระวังคำพูด",
    bg: "/zodiac/scorpio.png",
    r: 3,
  },
  {
    name: "ราศีธนู",
    desc: "การเงินคล่อง",
    bg: "/zodiac/sagittarius.png",
    r: 4,
  },
  {
    name: "ราศีมังกร",
    desc: "ความรักสดใส",
    bg: "/zodiac/capricorn.png",
    r: 5,
  },
  {
    name: "ราศีกุมภ์",
    desc: "มีโชคทางลับ",
    bg: "/zodiac/aquarius.png",
    r: 4,
  },
  {
    name: "ราศีมีน",
    desc: "รายได้เพิ่มขึ้น",
    bg: "/zodiac/pisces.png",
    r: 3,
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