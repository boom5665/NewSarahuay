<template>
  <div class="home-content">
    <div class="home-box">
      <div class="text-toplotto">
        <span> <NuxtLink to="/" class="link">หน้าแรก</NuxtLink> </span> /
        <span>ข่าวสารหวย</span>
      </div>
      <div class="article-page">
        <!-- Title -->
        <div class="article-header">
          <h1 class="title">
            โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67
            ลุ้นโชคได้ที่ไทยรัฐทีวี-ไทยรัฐออนไลน์
          </h1>

          <div class="meta">
            <span class="category">ข่าวหวย</span>
            <span class="date">21 กันยายน 67</span>

            <div class="social">
              <div class="icon fb">f</div>
              <div class="icon line">L</div>
              <div class="icon link">⛓</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="article-image">
          <img src="https://picsum.photos/900/450" />
        </div>

        <!-- Content -->
        <div class="article-content">
          <p>
            โค้งสุดท้ายข่าว "หวยไทยรัฐ" อย่าลืมส่อง "เลขดัง" กับ "เลขเด็ดงวดนี้" ก่อนการออกรางวัล "สลากกินแบ่ง" งวดวันที่ 16
            ก.ย. 2567 ว่าที่เศรษฐีเตรียมลุ้นชัดๆ
            งวดนี้ใครจะโชคดีถูกหวยรางวัลใหญ่ วันที่ 16 กันยายน 2567
            ผู้สื่อข่าวรายงานว่า วันนี้จะมีการออกรางวัลสลากกินแบ่งรัฐบาล
            หรือลอตเตอรี่ งวดประจำวันที่ 16 ก.ย. 2567
            โดยงวดนี้กองสลากได้ออกรางวัลลอตเตอรี่ ณ สนามบินน้ำ จ.นนทบุรี
            ขณะที่ตามแผงขายลอตเตอรี่ พบว่าส่วนใหญ่ประชาชนจะซื้อลอตเตอรี่รวมชุด 2
            ใบ เพื่อลุ้นโชคใหญ่ 12 ล้าน
            ซึ่งขณะนี้ตามแผงค้าลอตเตอรี่ในพื้นที่หัวเมืองใหญ่ๆ และกรุงเทพมหานคร
            ยังคงมีตัวเลขให้เลือกจำนวนมาก ด้านนางสาวพรรณี ปู่ลู่เงิน
            แม่ค้าขายหวยย่านถนนเชียงใหม่-ลำพูน อ.สารภี จ.เชียงใหม่ เปิดเผยว่า
            เลขเด็ดงวดนี้ที่มาแรงคือ เลขเครื่องบินตกที่ อ.จอมทอง จ.เชียงใหม่
            ประกอบด้วย AT-6TH ตัวเลขเครื่องบิน 41107 วันเวลาตก 10.40 น.
            โดยเลขที่น่าสนใจ ได้แก่ 20, 02, 41, 10, 07, 40, 29, 107, 110, 411,
            147, 047, 220, 299, 040 ผู้สื่อข่าวรายงาน 10 เลขขายดี งวด 1
            กุมภาพันธ์ 69 ประกอบด้วย 85, 53, 76, 08, 63, 18, 87, 56, 83, 96, 10
            เลขเด็ด งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 14, 17, 69, 93, 28, 25, 18,
            03, 37, 78 10 เลขดัง งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 96, 56, 41, 38,
            82, 97, 95, 91, 98, 36 10 เลขขายยาก งวด 1 กุมภาพันธ์ 69 ประกอบด้วย
            55, 33, 66, 77, 30, 06, 40, 01, 80, 43.
          </p>
        </div>

        <!-- Lotto Box -->
        <div class="lotto-box">
          <div class="lotto-title">เลขเด็ดงวดนี้มาแล้ว</div>

          <div class="lotto-list">
            <div class="item">
              <span class="label">แนวทางเลข:</span>
              <span class="number">5 - 4 - 6 - 2</span>
            </div>

            <div class="item">
              <span class="label">เลข 3 ตัว:</span>
              <span class="number">546 - 462</span>
            </div>

            <div class="item">
              <span class="label">เลข 2 ตัว:</span>
              <span class="number">54 - 56 - 52 - 46 - 42 - 62</span>
            </div>

            <div class="item">
              <span class="label">เลข 4 ตัว:</span>
              <span class="number">5462</span>
            </div>
          </div>

          <button class="ai-btn">วิเคราะห์เลขเด็ดด้วย AI</button>

          <p class="note">
            อย่างไรก็ตาม แนวทางดังกล่าว “โปรดใช้วิจารณญาณในการวิเคราะห์”
          </p>
        </div>
      </div>

      <div class="meta-all">
        <span class="category">ข่าวหวย</span>
        <span class="date">21 กันยายน 67</span>

        <div class="social">
          <div class="">ดูทั้งหมด</div>
        </div>
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
</template>

<script setup>
import { ref, computed } from "vue";
import ImageCard from "~/components/desktop/ImageCard.vue";
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
</script>

<style scoped lang="scss">
.article-page {
  margin: auto;
  margin-top: 0.5rem;
}

/* header */

.title {
  font-size: 1.25rem;
  font-weight: 700;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: #000;
}
.meta-all {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: #000;
}
.social {
  margin-left: auto;
  display: flex;
  gap: 8px;
}

.icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* image */

.article-image img {
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
}

/* content */

.article-content {
  line-height: 1.8;
  font-size: 16px;
}

.article-content p {
  margin-bottom: 16px;
}

/* lotto box */

.lotto-box {
  margin-top: 30px;
  background: #f3f3f3;
  padding: 1rem 0.5rem;
  border-radius: 10px;
}

.lotto-title {
  font-weight: 700;
  margin-bottom: 10px;
}

.lotto-list .item {
  margin-bottom: 6px;
}

.number {
  font-weight: 600;
}

.ai-btn {
  margin-top: 0.75rem;
  background: black;
  color: white;
  padding: 0.625rem 0.875rem;
  border-radius: 6px;
  width: 20.4375rem;
}

.note {
  margin-top: 0.625rem;
  font-size: 1rem;
  color: #000;
}
.text-toplotto {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  // margin-top: 1rem;
}

.home-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.home-content {
  display: flex;
  justify-content: center;
}
.home-box {
  max-width: 650px;
  width: 100%;
  padding: 1rem;
}
.home-item {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem 0px;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
