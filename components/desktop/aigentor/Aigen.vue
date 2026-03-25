<template>
  <div class="home-content">
    <div class="home-box">
      <div class="ai-page">
        <div class="ai-header">
          <div class="ai-icon">
            <div class="icon">
              <img src="/assets/icons/Avatar.svg" />
            </div>
          </div>
          <div class="ai-title">การวิเคราะห์เลขจากจำนวนด้วย AI</div>
          <div class="ai-subtitle">“โปรดใช้วิจารณญาณในการวิเคราะห์”</div>
        </div>
        <div class="ai-box">
          <div class="ai-con">
            <div class="ai-text">เลขที่ถูกเพิ่มจากข่าว</div>
            <div class="input-group">
              <input
                v-model="numbers"
                type="text"
                placeholder="เช่น 48, 19, 07, 462, 5462"
              />

              <div class="edit-icon">✏️</div>
            </div>

            <button class="ai-btn" @click="analyzeNumber">
              ✨ วิเคราะห์ตัวเลขด้วย AI
            </button>
          </div>
        </div>
      </div>
      <div class="ai-page">
        <div class="ai-header">
          <div class="ai-icon">
            <div class="icon">
              <img src="/assets/icons/Avatar.svg" />
            </div>
          </div>
          <div class="ai-title">การวิเคราะห์เลขด้วย AI</div>
          <div class="ai-subtitle">“โปรดใช้วิจารณญาณในการวิเคราะห์”</div>
        </div>
        <div class="ai-box">
          <div class="ai-con">
            <div class="pd-box">
              <div class="box-img">
                <div class="item" v-for="item in menuList" :key="item.id">
                  <div class="icon">
                    <img :src="item.img" />
                  </div>
                  <div class="text">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="ai-text">วิเคราะห์เลขที่มี</div>
            <div class="input-group">
              <input
                v-model="numbers"
                type="text"
                placeholder="เช่น 48, 19, 07, 462, 5462"
              />

              <div class="edit-icon">✏️</div>
            </div>

            <button class="ai-btn" @click="analyzeNumber">
              ✨ วิเคราะห์เลขที่มี
            </button>
          </div>
        </div>
      </div>
      <div class="ai-result">
        <div class="ai-re-box">
          <div class="result-title">✨ ผลการวิเคราะห์เลขหวยไทย</div>
          <div class="number-grid">
            <div
              v-for="item in resultNumbers"
              :key="item.number"
              class="number-card"
            >
              <div class="num">{{ item.number }}</div>
              <div class="line"></div>
              <div class="percent">({{ item.percent }}%)</div>
            </div>
          </div>
          <div class="note">*โปรดใช้วิจารณญาณในการวิเคราะห์*</div>
        </div>

        <div class="analysis-box">
          <div class="section-title">ผลวิเคราะห์ตัวเลข</div>
          <ul>
            <li v-for="(text, index) in analysisText" :key="index">
              {{ text }}
            </li>
          </ul>
        </div>
        <div class="near-box">
          <div class="section-title">เลขใกล้เคียง</div>
          <div class="near-number">
            {{ nearNumbers.join(", ") }}
          </div>
        </div>
        <div class="btn-group">
          <button class="save-btn">💾 บันทึกตัวเลข</button>
          <button class="retry-btn">🔁 วิเคราะห์เลขอื่น</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import gridIcon from "@/assets/icons/Grid.png";
const menuList = [
  { id: 1, title: "วิเคราะห์เลขที่มี", img: gridIcon },
  { id: 2, title: "เลขจากเบอร์โทร", img: gridIcon },
  { id: 3, title: "เลขจากความฝัน", img: gridIcon },
  { id: 4, title: "เลขจากวันเกิด", img: gridIcon },
  { id: 5, title: "เลขเด่นวันนี้", img: gridIcon },
  { id: 6, title: "เลขมาแรง", img: gridIcon }
];

const resultNumbers = ref([
  { number: "4", percent: 18 },
  { number: "19", percent: 54 },
  { number: "07", percent: 31 },
  { number: "462", percent: 26 },
  { number: "5462", percent: 26 }
]);

const analysisText = ref([
  "4 : พบรูปแบบเลขเด่น + คู่เลขซ้ำเด่น",
  "19 : กลุ่มเลขบวก 4 จาก 15 งวดล่าสุด",
  "07 : เรียงกับตัวเด่นเป็นช่วงที่มีโอกาส",
  "462 : ในช่วง 5 เดือนที่ผ่านมา ออก 4 งวด",
  "5462 : ในช่วง 5 เดือนที่ผ่านมา ออก 4 งวด"
]);

const nearNumbers = ref(["7", "27", "01", "452", "5453"]);
</script>

<style scoped lang="scss">
.home-box {
  max-width: 1080px;
  width: 100%;
}
.article-page {
  margin: auto;
  margin-top: 1rem;
}

.ai-page {
  margin: auto;
  padding: 1rem 0rem;
}

.ai-header {
  text-align: center;
  margin-bottom: 20px;
}

.ai-title {
  font-weight: 700;
  margin-top: 0.5rem;
  font-size: 1.375rem;
}

.ai-subtitle {
  font-size: 0.8125rem;
  color: #000;
  margin-top: 0.5rem;
}

.ai-box {
  background: #f2f2f2;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
}
.ai-con {
  max-width: 37.5rem;
  width: 600px;
}
.ai-btn {
  width: 100%;
  margin-top: 12px;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 6px;
}
.ai-text {
  color: #757575;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.input-group {
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 10px 35px 10px 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.edit-icon {
  position: absolute;
  right: 10px;
  top: 8px;
}

.pd-box {
  width: 100%;
}
.box-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  padding: 1rem 0rem;
}
.item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #2e6e70;
  border-radius: 0.5rem;
  height: 3.25rem;
  padding: 0.875rem 1rem;
}

.ai-result {
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  border-radius: var(--radius-md, 8px);
  background: #eee;
  margin-bottom: 1rem;
}
.ai-re-box {
  border: 1px solid #bdbdbd;
  background: #fff;
  padding: 1rem;
  border-radius:.5rem;
  margin-bottom: 1rem;
}
.result-title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}
.number-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 0.375rem;
}

.number-card {
  background: #2e6e70;
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
}

.num {
  font-size: 1.25rem;
  font-weight: 700;
}
.line {
  width: 100%;
  height: 0.125rem;
  background: #bdbdbd;
  margin: 0.5rem 0rem;
}
.percent {
  font-size: 0.75rem;
  color: #000;
}

.note {
  text-align: center;
  font-size: 0.75rem;
  margin-top: 1rem;
}

.section-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.analysis-box{
  margin-bottom: 1rem;
}
.analysis-box ul {
  padding-left: 1.125rem;
}

.analysis-box li {
  margin-bottom: 0.375rem;
}
.near-number {
  margin-top: 0.25rem;
}
.btn-group {
  margin-top: 1.25rem;
}
.save-btn {
  width: 100%;
  background: black;
  color: white;
  padding: 0.625rem;
  border-radius: 0.375rem;
  margin-bottom: 0.625rem;
}
.retry-btn {
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid #ccc;
}
</style>
