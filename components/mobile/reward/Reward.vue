<template>
  <div class="home-content">
    <div class="home-box">
      <div class="lotto-layout">
        <div class="lotto-check">
          <div class="check-title">ตรวจผลหวย</div>
          <div class="box-text">รูปแบบหวย</div>
          <select v-model="lottoType">
            <option value="thai">หวยไทย</option>
          </select>

          <div class="box-right">
            <div class="box-text">เลือกงวดประจำวันที่</div>
            <select v-model="selectedDate">
              <option value="2025-01-16">16 พฤศจิกายน 2567</option>
            </select>
            <input v-model="number1" placeholder="กรอกเลขของคุณ ใบที่ 1" />

            <input v-model="number2" placeholder="กรอกเลขของคุณ ใบที่ 2" />

            <input v-model="number3" placeholder="กรอกเลขของคุณ ใบที่ 3" />
          </div>

          <button class="check-btn">🔍 ตรวจผลรางวัล</button>
        </div>
        <div>
          <div class="lotto-result">
            <div class="result-header">
              <div>
                <div class="title">ผลสลากกินแบ่งรัฐบาล</div>
                <div class="date">งวดวันที่ {{ lottoResult.date }}</div>
              </div>
              <div class="result-header-right">
                <div class="text-box">
                  <img class="" src="/assets/icons/fi_145802.svg" alt="" />
                </div>
                <div class="text-box">
                  <img class="" src="/assets/icons/fi_145802.svg" alt="" />
                </div>
                <div class="text-box">
                  <img class="" src="/assets/icons/fi_145802.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="prize-block">
              <div class="prize-title">
                <div>รางวัลที่ 1</div>
                <div class="text-under">รางวัลละ 6,000,000 บาท</div>
              </div>
              <div class="big-number">{{ lottoResult.prize1 }}</div>
            </div>
            <div class="prize-row">
              <div class="prize-item">
                <div>เลขหน้า 3 ตัว</div>
                <div class="text-under">2 รางวัลๆ ละ 4,000 บาท</div>
                <div class="big-number">{{ lottoResult.front3.join(" ") }}</div>
              </div>
              <div class="prize-item">
                <div>เลขท้าย 3 ตัว</div>
                <div class="text-under">2 รางวัลๆ ละ 4,000 บาท</div>
                <div class="big-number">{{ lottoResult.back3.join(" ") }}</div>
              </div>
            </div>
            <div class="prize-item">
              <div>เลขท้าย 2 ตัว</div>
              <div class="text-under">2 รางวัลๆ ละ 2,000 บาท</div>
              <div class="big-number">{{ lottoResult.last2 }}</div>
            </div>

            <div class="prize-block">
              <div class="prize-title">
                รางวัลข้างเคียงรางวัลที่ 1
                <div class="text-under">2 รางวัลๆ ละ 100,000 บาท</div>
              </div>
              <div class="big-number">
                {{ lottoResult.near1.join(" ") }}
              </div>
            </div>
          </div>
          <div class="lotto-result">
            <div class="prize-block">
              <div class="prize-title">รางวัลที่ 2</div>
              <div class="text-under">5 รางวัลๆ ละ 200,000 บาท</div>
              <div class="grid-number">
                <span v-for="(num, index) in lottoResult.prize2" :key="index">
                  {{ num }}
                </span>
              </div>
            </div>

            <div class="prize-block">
              <div class="prize-title">รางวัลที่ 3</div>
              <div class="text-under">10 รางวัลๆ ละ 200,000 บาท</div>
              <div class="grid-number">
                <span v-for="(num, index) in lottoResult.prize3" :key="index">
                  {{ num }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const lottoType = ref("thai");
const selectedDate = ref("");

const number1 = ref("");
const number2 = ref("");
const number3 = ref("");

const lottoResult = ref({
  date: "17 มกราคม 2569",

  prize1: "000000",

  front3: ["000"],
  back3: ["000"],
  last2: "00",

  near1: ["000", "000"],

  prize2: ["000000", "000000", "000000", "000000", "000000"],

  prize3: [
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000"
  ]
});
</script>
<style scoped lang="scss">
.home-box {
  max-width: 650px;
  width: 100%;
  margin: auto;
}

.lotto-layout {
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
}

/* LEFT RESULT */

.lotto-result {
  background: #efefef;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.result-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.625rem;
  border-radius: 0.5rem;
  background: #e0e0e0;
  padding: 0.5rem;
  align-items: flex-start;
}
.result-header-right {
  display: flex;
  gap: 0.3rem;
  align-items: flex-end;
}
.text-box {
  background: white;
  padding: 4px;
  border-radius: 50%;
  display: flex;
}
.title {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
}

.date {
  font-size: 0.875rem;
  color: #000;
}

/* prize block */

.prize-block {
  text-align: center;
  margin: 12px 0;
}

.prize-title {
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
}
.text-under {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
}
.big-number {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.25rem;
}

/* row */

.prize-row {
  display: flex;
  justify-content: space-between;
  margin: 0.875rem 0;
}

.prize-item {
  text-align: center;
  flex: 1;
}

.prize-item div:first-child {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}

.number {
  font-size: 1.375rem;
  font-weight: 700;
}

.grid-number {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.375rem;
}

.grid-number span {
  width: calc(33.33% - 0.5rem);
  text-align: center;
}

.grid-number span {
  font-size: 1rem;
  font-weight: 600;
}

/* RIGHT CHECK */

.lotto-check {
  background: #efefef;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: max-content;
}

.check-title {
  font-weight: 700;
  margin-bottom: 0.625rem;
}

.lotto-check select,
.lotto-check input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  font-size: 0.8125rem;
}

.check-btn {
  width: 100%;
  background: black;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-top: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.check-btn:hover {
  opacity: 0.9;
}
.box-right {
  border-radius: var(--radius-md, 8px);
  background: #fff;
  padding: 1rem;
}
.box-text {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
</style>
