<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <!-- date -->
      <div class="bg-col">
        <h3>
          <div class="box-top"><img src="/frame/Avatar.png" alt=""> <span class="text-top">ผลสลากกินแบ่งรัฐบาล</span>
          </div>
        </h3>
        <div class="lotto-date">
          <span>ผลสลากฯ {{ lottoResult.date }}</span>

        </div>
      </div>


      <!-- reward 1 -->
      <div class="reward-one">
        <div class="label">รางวัลที่ 1</div>
        <div class="">รางวัลละ 6,000,000 บาท</div>
        <div class="number-main">{{ lottoResult.reward1 }}</div>
      </div>

      <!-- other reward -->
      <div class="reward-row">
        <div class="reward-col">
          <div class="label">เลขหน้า 3 ตัว</div>
          <div class="">2 รางวัลๆ ละ 4,000 บาท</div>
          <div class="d-flex-box">
            <div class="number" v-for="(num, i) in lottoResult.front3" :key="i">
              {{ num }}
            </div>
          </div>

        </div>

        <div class="reward-col">
          <div class="label">เลขท้าย 3 ตัว</div>
          <div class="">2 รางวัลๆ ละ 4,000 บาท</div>
          <div class="d-flex-box">
            <div class="number" v-for="(num, i) in lottoResult.back3" :key="i">
              {{ num }}
            </div>
          </div>
        </div>


      </div>
      <div>
        <div class="reward-col">
          <div class="label">เลขท้าย 2 ตัว</div>
          <div class="">รางวัลละ 2,000 บาท</div>
          <div class="number big">{{ lottoResult.back2 }}</div>
        </div>
      </div>
      <NuxtLink to="lotto">
        <span class="bt-next">ดูเพิ่มเติม <img src="/assets/svg/right.svg" alt="" /></span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const lottoResult = ref({
  date: "17 มกราคม 2569",
  reward1: "952500",
  front3: ["022", "351"],
  back3: ["169", "456"],
  back2: "00"
});
</script>

<style scoped lang="scss">
.lotto-check {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.box-top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0px 0.2rem 0px;
  gap: 0.5rem;

  img {
    width: 2rem;
    height:  2rem;
  }
}

.bg-col {
  background:
    linear-gradient(180deg, #04BAFC 0%, #0D1737 100%),
    url('/frame/framlotto.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-blend-mode: overlay;

  border-radius: 0.5rem 0.5rem 0rem 0rem;
  height: 4.6875rem;
  margin-bottom: 0.5rem;
}

.text-top {
  text-align: center;
  font: var(--HeadContentPC);
  font-weight: 700;

  background: var(--Linear, linear-gradient(0deg, #8AA8B5 -28.6%, #FFF 80.43%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.lotto-box {
  width: 100%;
  background: var(--white);
  border-radius: 0.75rem;
}

.lotto-date {
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  font: var(--FieldValuePC);
  margin-bottom: 0.625rem;
  color: var(--white);
  padding-bottom: 0.5rem;
}

.reward-one {
  text-align: center;
  margin-bottom: 1rem;

  .number-main {
    font: var(--ResultNumberPrimaryPC);
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: var(--Green-Main-Green-500, #008F6C);
  }
}

.reward-row {
  display: flex;
  justify-content: space-between;
  padding: 0rem 1.5rem;
}

.reward-col {
  text-align: center;

  .number {
    font-size: 2rem;
    font-weight: 700;
  }

  .big {
    font-size: 3rem;
  }
}

.more {
  text-align: center;
  padding: 0.625rem;
  margin-top: 1rem;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
}

.label {
  color: var(--Green-Main-Green-500, #008F6C);
  font: var(--PageTitle);
}

.d-flex-box {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.bt-next {
  font: var(--ButtonMain);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--Green-Main-Green-500, #008F6C);
  padding: 1.6875rem;
  cursor: pointer;
  justify-content: center;
}
</style>
