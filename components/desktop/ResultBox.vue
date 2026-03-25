<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <!-- date -->
      <div class="text-top">ตรวจสลากกินแบ่งรัฐบาล</div>
      <div class="lotto-date">
        <span>ผลสลากฯ {{ lottoResult.date }}</span>
        <span class="arrow">›</span>
      </div>

      <!-- reward 1 -->
      <div class="reward-one">
        <div class="label">รางวัลที่ 1</div>
        <div class="number-main">{{ lottoResult.reward1 }}</div>
      </div>

      <!-- other reward -->
      <div class="reward-row">
        <div class="reward-col">
          <div class="label">เลขหน้า 3 ตัว</div>
          <div class="number" v-for="(num, i) in lottoResult.front3" :key="i">
            {{ num }}
          </div>
        </div>

        <div class="reward-col">
          <div class="label">เลขท้าย 3 ตัว</div>
          <div class="number" v-for="(num, i) in lottoResult.back3" :key="i">
            {{ num }}
          </div>
        </div>

        <div class="reward-col">
          <div class="label">เลขท้าย 2 ตัว</div>
          <div class="number big">{{ lottoResult.back2 }}</div>
        </div>
      </div>

      <div class="more">ดูผลหวยเพิ่มเติม</div>
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

.text-top {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.lotto-box {
  width: 100%;
  background: #f3f3f3;
  border-radius: 0.75rem;
  padding: 1rem 0rem 0rem 0rem;
}

.lotto-date {
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
}

.reward-one {
  text-align: center;
  margin-bottom: 1.25rem;

  .number-main {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
  }
}

.reward-row {
  display: flex;
  justify-content: space-between;
  padding: 0rem 3.5rem;
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
  background: #e5e5e5;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
}
</style>
