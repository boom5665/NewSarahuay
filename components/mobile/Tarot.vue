<template>
  <div>
    <div class="tarot-page"  v-if="!showResult">
      <div class="tarot-title">
        ดูดวงไพ่ยิปซี
        <div class="sub">เลือกสำรับที่ต้องการดู</div>
      </div>

      <div class="tarot-typemb">
        <div
          v-for="item in tarotMenu"
          :key="item.key"
          class="type-card"
          :class="{ active: tarotType === item.key }"
          @click="tarotType = item.key"
        >
          <img src="/assets/icons/fi_145802.svg" />
          <span>{{ item.label }}</span>
        </div>
      </div>
      <div class="tarot-result">
        <div class="result-title">
          {{ currentContent.title }}
        </div>

        <div class="result-sub">
          {{ currentContent.sub }}
        </div>

        <!-- card preview -->
        <div class="card-preview">
          <div class="card-slot"  @click="predict"></div>
        </div>

        <!-- buttons -->
        <div class="draw-action">
          <button class="btn">สับไพ่</button>
          <button class="btn">จั่วไพ่</button>
        </div>
      </div>
    </div>

    <div class="result-page"  v-if="showResult">
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const tarotType = ref("daily");

const tarotMenu = [
  { key: "daily", label: "รายวัน" },
  { key: "monthly", label: "รายเดือน" },
  { key: "work", label: "การงาน" },
  { key: "money", label: "การเงิน" },
  { key: "love", label: "ความรัก" },
  { key: "luck", label: "โชคลาภ" },
  { key: "health", label: "สุขภาพ" },
  { key: "study", label: "การเรียน" }
];

const tarotContent = {
  daily: {
    title: "ดูดวงไพ่ยิปซี รายวัน",
    sub: 'เลือกไพ่ 1 ใบ เพื่อเปิดคำทำนาย "ทำนองของดวง"'
  },
  monthly: {
    title: "ดูดวงไพ่ยิปซี รายเดือน",
    sub: "ดูแนวโน้มชีวิตของคุณในเดือนนี้"
  },
  work: {
    title: "ดูดวงการงาน",
    sub: "ไพ่จะบอกทิศทางเรื่องงานของคุณ"
  },
  money: {
    title: "ดูดวงการเงิน",
    sub: "แนวโน้มรายรับรายจ่าย"
  },
  love: {
    title: "ดูดวงความรัก",
    sub: "สถานะความสัมพันธ์ของคุณ"
  },
  luck: {
    title: "ดูดวงโชคลาภ",
    sub: "โอกาสและดวงเสี่ยงโชค"
  },
  health: {
    title: "ดูดวงสุขภาพ",
    sub: "แนวโน้มสุขภาพช่วงนี้"
  },
  study: {
    title: "ดูดวงการเรียน",
    sub: "แนวโน้มด้านการศึกษา"
  }
};

const currentContent = computed(() => tarotContent[tarotType.value]);
const showResult = ref(false);

const predict = () => {
  showResult.value = true;
};

const goBack = () => {
  showResult.value = false;
};
</script>

<style scoped lang="scss">
.tarot-page {
  background: #efefef;
  padding: 1.5rem;
  border-radius: 0.6rem;
}

/* title */

.tarot-title {
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.sub {
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.2rem;
}

/* grid card */

.tarot-typemb {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
}

/* card */

.type-card {
  background: #ddd;
  border-radius: 0.5rem;
  padding: 0.6rem;
  text-align: center;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-size: 0.8rem;
}

.type-card img {
  width: 28px;
  height: 28px;
  opacity: 0.7;
}

/* active */

.type-card.active {
  background: #cfcfcf;
  border: 1px solid #888;
}

.tarot-result {
  margin-top: 1rem;
  text-align: center;
}

.result-title {
  font-weight: 700;
}

.result-sub {
  font-size: 0.8rem;
  color: #666;
}

.card-preview {
  background: #cfcfcf;
  height: 120px;
  border-radius: 0.5rem;
  margin: 0.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.card-slot {
  width: 70px;
  height: 100px;
  border: 2px dashed #999;
  border-radius: 0.4rem;
}

.draw-action {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.btn {
  background: black;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
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
  padding: 0.5rem;
  border-radius: .5rem;
}

.result-header {
  background: white;
  padding: .5rem;
  border-radius: .375rem;
  margin-bottom: .625rem;
}

.result-content {
  background: white;
  padding: .5rem;
  border-radius: .375rem;
}
</style>
