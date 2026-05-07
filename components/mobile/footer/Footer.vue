<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Column 1 -->
      <div class="footer-col">
        <h3>{{ about.title }}</h3>
      </div>

      <!-- Column 2 -->
      <div class="footer-col middle">
        <div class="row" v-for="item in menuGroup" :key="item.title">
          <h4>{{ item.title }}</h4>
          <ul>
            <li v-for="link in item.links" :key="link">
              {{ link }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Column 3 -->
      <div class="footer-col">
        <p v-for="item in contact.info" :key="item">
          {{ item }}
        </p>
      </div>

      <div class="footer-col dark">
        <p v-for="item in date.info" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const about = ref({
  title: "เนื้อหาที่น่าสนใจ",
  description:
    "เว็บไซต์ตัวอย่างสำหรับแสดง Footer สามารถใส่ข้อมูลบริษัทหรือคำอธิบายเว็บไซต์ได้ที่นี่"
});

const menuGroup = ref([
  {
    title: "หน้าแรก",
    links: ["วิเคราะห์ AI"]
  },
  {
    title: "ข่าวทั้งหมด",
    links: ["ดูดวงรายวัน"]
  },
  {
    title: "ตรวจผลหวย",
    links: ["ไพ่ยิปซี"]
  }
]);

const contact = ref({
  //   title: "ติดต่อเรา",
  info: ["Copyright © 2021 | สาระหวย", "1.2.32-20220916"]
});
const date = ref({
  //   title: "ติดต่อเรา",
  info: ["วันจันทร์ที่ 2 กันยายน 2567 เวลา 12:52  น."]
});
</script>

<style scoped>
.footer {
  background: #1e1e1e;
  color: white;
  padding-top: 1rem ;
}

.footer-container {
  max-width: 1440px;
  margin: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}

.footer-col {
  flex: 1;
  display: flex;
}

.middle {
  flex: 1;
  display: flex;
  gap: 20px;
}

.row ul {
  list-style: none;
  padding: 0;
}

.row li {
  margin: 6px 0;
}
.dark{
        width: 100%;
      background: var(--primary-color-500);
    display: flex;
    justify-content: center;
    color: var(--white);
    padding: 5px;
}
</style>
