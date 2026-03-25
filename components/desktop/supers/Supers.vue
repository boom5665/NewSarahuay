<template>
  <div class="home-content">
    <div class="home-box">
      <div class="tab-menu">
        <div
          class="tab"
          :class="{ active: tab === 'fortune' }"
          @click="tab = 'fortune'"
        >
          <img src="/assets/icons/fi_145802.svg" />
          ดูดวง
        </div>
        <div
          class="tab"
          :class="{ active: tab === 'tarot' }"
          @click="tab = 'tarot'"
        >
          <img src="/assets/icons/fi_145802.svg" />
          ไพ่ยิปซี
        </div>
      </div>

      <div v-if="tab === 'fortune' && !showResult">
        <div class="fortune-box">
          <div class="section-title">
            ทำนายดวงของคุณช่วงนี้
            <div class="sub-title">เลือกหมวดที่ต้องการดู</div>
          </div>
          <div class="fortune-type">
            <div
              class="type-card"
              :class="{ active: fortuneType === 'daily' }"
              @click="fortuneType = 'daily'"
            >
              <img src="/assets/icons/fi_145802.svg" />
              รายวัน
            </div>

            <div
              class="type-card"
              :class="{ active: fortuneType === 'weekly' }"
              @click="fortuneType = 'weekly'"
            >
              <img src="/assets/icons/fi_145802.svg" />
              รายสัปดาห์
            </div>

            <div
              class="type-card"
              :class="{ active: fortuneType === 'monthly' }"
              @click="fortuneType = 'monthly'"
            >
              <img src="/assets/icons/fi_145802.svg" />
              รายเดือน
            </div>
          </div>
          <div class="form-grid">
            <template v-if="fortuneType === 'daily'">
              <div class="input-group">
                <label>ชื่อ</label>
                <input type="text" placeholder="สมชาย" />
              </div>

              <div class="input-group">
                <label>สกุล</label>
                <input type="text" placeholder="มิตร" />
              </div>

              <div class="input-group">
                <label>วันเดือนปีเกิด</label>
                <input type="date" />
              </div>

              <div class="input-group">
                <label>เวลาที่เกิด</label>
                <div class="time-row">
                  <input type="number" placeholder="12" />
                  <span>:</span>
                  <input type="number" placeholder="00" />
                </div>
              </div>
            </template>

            <!-- รายสัปดาห์ -->
            <template v-if="fortuneType === 'weekly'">
              <div class="input-group">
                <label>ชื่อ</label>
                <input type="text" placeholder="สมชาย" />
              </div>

              <div class="input-group">
                <label>วันเดือนปีเกิด</label>
                <input type="date" />
              </div>
            </template>
            <template v-if="fortuneType === 'monthly'">
              <div class="input-group">
                <label>ชื่อ</label>
                <input type="text" placeholder="สมชาย" />
              </div>

              <div class="input-group">
                <label>เดือนที่ต้องการดู</label>
                <input type="month" />
              </div>
            </template>
          </div>
          <div class="note">
            *เวลาที่เกิด หากไม่ทราบให้เลือกเวลาประมาณใกล้เคียงที่สุด
          </div>
          <button class="submit-btn" @click="predict">ทำนาย</button>
        </div>
      </div>
      <div v-if="tab === 'fortune' && showResult" class="result-page">
        <div class="result-box">
          <div class="back-btn" @click="goBack">← ย้อนกลับ</div>

          <div class="result-header">
            ชื่อ-สกุล : สมชาย มีทรัพย์
            <br />
            เกิดวันที่ 20 พฤศจิกายน 2533 เวลา 09:00
          </div>

          <div class="result-content">
            <h3>คำทำนายดวง</h3>

            <p>
              ไพ่ที่คุณได้คือ ไพ่ฤาษี เป็นไพ่แห่งสติปัญญา
              ช่วงนี้เหมาะกับการวางแผนชีวิตและใช้เหตุผล
            </p>

            <h3>คำแนะนำการดำเนินชีวิต</h3>

            <p>ช่วงนี้ควรใช้ความรอบคอบและอย่าตัดสินใจเร็วเกินไป</p>
          </div>
        </div>
      </div>

      <div v-if="tab === 'tarot'">
        <Tarot />
      </div>
      <div class="news-section">
        <div class="news-header">
          <div>ข่าวหวยใหม่วันนี้</div>
          <div class="view-all">ดูทั้งหมด</div>
        </div>
        <div class="home-item">
          <ImageCard
            v-for="imgcard in imgcardData"
            :key="imgcard.id"
            :icon="'flags/pingpong6.svg'"
            :obj="imgcard"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ImageCard from "~/components/desktop/ImageCard.vue";
import Tarot from "~/components/desktop/Tarot.vue";
const imgcardData = ref([
  {
    id: 1,
    imgSrc: "https://picsum.photos/350/180?random=1",
    subtitle:
      "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรงราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแ",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/350/180?random=2",
    subtitle:
      "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรง",
    date: "21 ก.ย. 67",
    taxt: "ดูดวง"
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/350/180?random=3",
    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    date: "21 ก.ย. 67",
    taxt: "ข่าวหวย"
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/350/180?random=4",
    subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
    date: "21 ก.ย. 67",
    taxt: "ไพ่ยิปซี"
  }
]);

const tab = ref("fortune");
const fortuneType = ref("daily");

const showResult = ref(false);

const predict = () => {
  showResult.value = true;
};

const goBack = () => {
  showResult.value = false;
};
</script>
<style scoped lang="scss">
.home-box {
  max-width: 1080px;
  width: 100%;
}
.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0rem;
}
.tab-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ddd;
  padding: 0.4rem;
  border-radius: 1.875rem;
  margin: 1rem 0;
}

.tab {
  text-align: center;
  padding: 0.6rem;
  border-radius: 1.875rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.tab.active {
  background: black;
  color: white;
}
.fortune-box {
  background: #efefef;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
.section-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.sub-title {
  font-size: 0.8rem;
  color: #666;
}
.fortune-type {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
.type-card {
  background: #ddd;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 1.5rem;
  }
}

.type-card.active {
  background: #bfbfbf;
  border: 0.0625rem solid #999;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group label {
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}
.input-group input {
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ddd;
}
.time-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.note {
  font-size: 0.75rem;
  margin: 0.75rem 0;
  color: #666;
}
.submit-btn {
  width: 15.625rem;
  background: black;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 0.4rem;
  display: block;
  margin: auto;
}
.news-section {
  margin-top: 1.5rem;
}
.news-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.predict-btn {
  margin-top: 1rem;
  background: black;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
}

.result-page {
  margin-top: 1rem;
}

.back-btn {
  cursor: pointer;
  margin-bottom: 10px;
}

.result-box {
  background: #eee;
  padding: 1rem;
  border-radius: 8px;
}

.result-header {
  background: white;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.result-content {
  background: white;
  padding: 15px;
  border-radius: 6px;
}
</style>
