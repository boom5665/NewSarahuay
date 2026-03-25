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
        <span>รางวัลละ 6,000,000 บาท</span>
        <div class="number-main">{{ lottoResult.reward1 }}</div>
      </div>

      <!-- other reward -->
      <div class="reward-row">
        <div class="reward-col">
          <div class="label">เลขหน้า 3 ตัว</div>
          <span>2 รางวัลๆ ละ 4,000 บาท</span>
          <div class="d-calss">
            <div class="number" v-for="(num, i) in lottoResult.front3" :key="i">
              {{ num }}
            </div>
          </div>
        </div>

        <div class="reward-col">
          <div class="label">เลขท้าย 3 ตัว</div>
          <span>2 รางวัลๆ ละ 4,000 บาท</span>
          <div class="d-calss">
            <div class="number" v-for="(num, i) in lottoResult.back3" :key="i">
              {{ num }}
            </div>
          </div>
        </div>

        <div class="reward-col">
          <div class="label">เลขท้าย 2 ตัว</div>
          <span>รางวัลละ 2,000 บาท</span>
          <div class="d-calss">
            <div class="number big">{{ lottoResult.back2 }}</div>
          </div>
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
  font: var(--HeadContent);
  text-align: center;
  // background: var(--Linear, linear-gradient(0deg, #8aa8b5 -28.6%, #fff 80.43%));
  // background-clip: text;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}

.lotto-box {
  width: 100%;
  background: #fff;
  border-radius: 0.75rem;
  padding: 1rem 0rem 0rem 0rem;
}

.lotto-date {
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  font: var(--FieldValue);
  margin-bottom: 0.625rem;
}

.reward-one {
  text-align: center;
  margin-bottom: 0.5rem;

  .number-main {
    font: var(--ResultNumberPrimary);
  }
}

.reward-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 ช่อง */
  gap: 10px;
}

/* ตัวล่าง */
.reward-row > :nth-child(3) {
  grid-column: 1 / span 2; /* กิน 2 ช่อง */
  justify-self: center; /* จัดกลาง */
}

.reward-col {
  text-align: center;

  .number {
    font: var(--ResultNumberSecondary);
  }

  .big {
    font-size: 2.5rem;
  }
}

.more {
  text-align: center;
  padding: 0.625rem;
  margin-top: 1rem;
  background: var(--color-black-0, #fff);
  color: #000;
  font: var(--ButtonMain);
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--color-black-200, #eee);
  margin: 0.5rem;
}
.d-calss {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.label {
  font: var(--PageTitle);
  color: var(--Green-Main-Green-500, #008f6c);
}
</style>
