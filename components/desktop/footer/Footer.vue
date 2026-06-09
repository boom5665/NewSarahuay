<template>
  <footer class="footer">

    <!-- Top -->
    <div class="footer-top">
      <div class="footer-logo">
        <img src="/logo.png" alt="">
      </div>

      <div class="footer-desc">
        รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้
      </div>
      <div class="footer-descinfo">
        เลขเด็ด หวยดัง สถิติหวย ตรวจหวย วิเคราะห์หวย AI ข่าวหวย อัปเตตครบ จบในที่เดียว
      </div>
      <div class="feature-grid">
        <div v-for="item in features" :key="item.title" class="feature-item">
          <img :src="item.icon" alt="">
          <div>
            <div class="footer-desc">{{ item.title }}</div>
            <div class="footer-descinfo">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle -->
    <div class="footer-middle">

      <div class="security-box">
        <img src="/footer/ChatGPT.png">
        <div>
          <div class="desc">มั่นใจ ปลอดภัย 100%</div>
          <div class="footer-descinfo">
            ระบบเข้ารหัสข้อมูลปลอดภัยทุกการใช้งาน
          </div>
        </div>
      </div>

      <div class="payment-box">
        <div class="desc">รองรับการชำระเงิน</div>

        <div class="banks">
          <img v-for="bank in banks" :key="bank" :src="bank">
        </div>
      </div>

      <div class="social-box">
        <div class="desc">ติดตามเรา</div>

        <div class="socials">
          <img v-for="social in socials" :key="social" :src="social">
        </div>
      </div>

    </div>

    <!-- Banner -->
    <div class="footer-banner">

      <div class="banner-left">
        <img src="/footer/banner-footer.png">
      </div>

      <div class="banner-right">

        <div v-for="item in stats" :key="item.title" class="stat-item">
          <img :src="item.icon" :class="item.class">
          <div class="desc">
            {{ item.title }}
          </div>

          <div class="footer-descinfo">
            {{ item.desc }}
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom -->
    <div class="footer-bottom">

      <div class="update-time">
        อัปเดตล่าสุด 2 กันยายน 2567 เวลา 12:52 น.
      </div>

      <div class="footer-links">
        <a v-for="item in menus" :key="item">
          {{ item }}
        </a>
      </div>

    </div>

  </footer>
</template>

<script setup>
const features = [
  {
    icon: "/footer/f1.png",
    title: "อัปเดตทุกวัน",
    desc: "ข้อมูลหวยอัปเดตไว ทันก่อนใคร",
  },
  {
    icon: "/footer/f2.png",
    title: "เชื่อถือได้",
    desc: "ข้อมูลถูกต้องจากแหล่งที่เชื่อถือได้",
  },
  {
    icon: "/footer/f3.png",
    title: "ครบจบในที่เดียว",
    desc: "เลขเด็ด สถิติ หวยดัง วิเคราะห์ AI",
  },
  {
    icon: "/footer/f4.png",
    title: "ปลอดภัย 100%",
    desc: "ระบบปกป้องข้อมูลผู้ใช้งาน",
  },
];

const banks = [
  "/footer/scb.png",
  "/footer/kbank.png",
  "/footer/krungthai.png",
  "/footer/bbl.png",
  "/footer/ttb.png",
  "/footer/promptpay.png",
];

const socials = [
  "/footer/facebook.png",
  "/footer/line.png",
  "/footer/tiktok.png",
  "/footer/x.png",
  "/footer/instagram.png",
];

const stats = [
  {
    icon: "/footer/update.png",
    title: "อัปเดตทุกวัน 24 ชั่วโมง",
    desc: "ไม่พลาดทุกข้อมูล",
    class: "icon-update"
  },
  {
    icon: "/footer/user.png",
    title: "ผู้ใช้งานจริงจำนวนมาก",
    desc: "ผู้คนไว้วางใจ",
    class: "icon-user"
  },
  {
    icon: "/footer/security.png",
    title: "ข้อมูลถูกต้อง 100%",
    desc: "จากแหล่งที่เชื่อถือได้",
    class: "icon-security"
  },
  {
    icon: "/footer/service.png",
    title: "บริการรวดเร็ว",
    desc: "พร้อมช่วยเหลือตลอดเวลา",
    class: "icon-service"
  },
];

const menus = [
  "สลากกินแบ่งรัฐบาล",
  "หวยรัฐบาลไทย",
  "หวยไทย",
  "หวยลาว",
  "วิเคราะห์หวยด้วย AI",
  "เลขเด็ดจากความฝัน",
  "ผลหวยย้อนหลัง",
  "ข่าวหวย",
  "ตรวจหวย",
  "สถิติหวย",
  "เลขเด็ด",
  "ดูดวงไพ่ยิปซี",
  "ดูดวงไพ่ยิปซี",
  "ดูดวงไพ่ยิปซี",
  "ดูดวงไพ่ยิปซี",
];
</script>

<style scoped lang="scss">
.footer {
  max-width: 101.25rem;
  width: 100%;
  margin: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-desc {
  color: #FFDE6E;
  font: var(--PageTitlePC);
}

.desc {
  color: #FFDE6E;
  font: var(--HeroHeadCardPC);
  margin-bottom: .5rem;
}

.footer-descinfo {
  color: #FFFFFF;
  font: var(--FieldValuePC);
  text-align: left;
  max-width: 37.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.footer-middle {
  border: 1px solid #6575A0;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: #171949;
  color: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.footer-middle {
  display: grid;
  grid-template-columns: 1.52fr 2fr 1fr;
  // gap: 1rem;
}

.footer-middle>* {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 7.875rem;
    height: 6.25rem;
  }
}

.footer-middle>*:not(:last-child)::after {
  content: "";
  position: absolute;
  // top: 10%;
  right: 4rem;
  width: .125rem;
  height: 100%;
  background: #6575A0;
}



.payment-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex-direction: column;

  .banks {
    display: flex;
    gap: 0.5rem;

    img {
      width: 5.375rem;
      height: 3.625rem;
    }
  }
}

.social-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex-direction: column;

  .socials {
    display: flex;
    gap: 1.4rem;

    img {
      width: 3.125rem;
      height: 3.125rem;
    }
  }
}

.footer-banner {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
}

.banner-left {
  img {
    width: 45rem;
    height: 12.5rem;
  }
}

.banner-right {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #6575A0;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: #171949;
  color: white;

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-update {
    width: 8.75rem;
    height: 5.9375rem;
  }

  .icon-user {
    width: 7rem;
    height: 5.9375rem;
  }

  .icon-security {
    width: 8.75rem;
    height: 5.9375rem;
  }

  .icon-service {
    width: 5.9375rem;
    height: 5.9375rem;
  }
}

.footer-bottom {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    gap: 1rem;
}

.update-time {
  color: #FFFFFF;
  font: var(--FieldValuePC);
  padding-right: 1rem;
  border-right: 2px solid #6575A0;
}

.footer-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: #FFFFFF;
    font: var(--FieldValuePC);
  }
}
</style>