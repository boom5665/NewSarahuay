<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>
    <div class="package">
      <div class="title">แพ็กเกจ & เครดิต</div>

      <div class="package-grid">
        <div
          v-for="pkg in packages.filter((p) => p.name === 'ฟรี')"
          :key="pkg.name"
          class="card free"
        >
          <div class="card-title card-title-free">{{ pkg.name }}</div>
          <div class="card-desc card-desc-free">{{ pkg.desc }}</div>
        </div>

        <div
          v-for="pkg in packages.filter((p) => p.name !== 'ฟรี')"
          :key="pkg.name"
          class="card"
          :class="{ active: selectedPackage === pkg.name }"
          @click="selectedPackage = pkg.name"
        >
          <div v-if="pkg.badge" class="badge">{{ pkg.badge }}</div>

          <div class="card-title">{{ pkg.name }}</div>
          <div class="card-desc">{{ pkg.desc }}</div>

          <button class="btn">สมัคร {{ pkg.price }} บาท</button>
        </div>
      </div>

      <div class="member-link">ยกเลิกสมาชิก</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const selectedPackage = ref(null);
const packages = [
  { name: "ฟรี", desc: "ใช้ฟรี 3 ครั้ง/วัน", price: 0 },
  { name: "ทั่วไป", desc: "100 เครดิต/เดือน", price: 99, badge: "ทั่วไป" },
  { name: "โปร", desc: "1000 เครดิต/เดือน", price: 499, badge: "โปร" },
  {
    name: "พรีเมี่ยม",
    desc: "ไม่จำกัด + วิเคราะห์ลึก",
    price: 699,
    badge: "ยอดนิยม"
  }
];
</script>

<style lang="scss" scoped>
.menu-right {
  border-radius: 0.5rem;
  background: #e0e0e0;
}
.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background: #000000;
  padding: 1rem;
}
.menutop {
  padding-bottom: 0.9063rem;
  padding-top: 0.9063rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    border-radius: 0.5rem;
    background: #fff;
    padding: 0.25rem 1rem;
  }
}
.section {
  background: white;
  border-radius: 8px;
  padding: 16px;
}
.package {
  background: #f3f3f3;
  padding: 16px;
  border-radius: 10px;
}

.title {
  font-weight: 600;
  margin-bottom: 12px;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

/* CARD */

.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #ddd;
  position: relative;
  border: 2px solid transparent;
}

.card.free {
  background: #d7d7d7;
}

.card.active {
  border: 2px solid #000;
}

.card-title {
  font-weight: 600;
  margin-bottom: .375rem;
}
.card-title-free {
  margin-top: 1.3rem;
  text-align: center;
}
.card-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}
.card-desc-free {
  text-align: center;
}
/* BUTTON */

.btn {
  width: 100%;
  background: #000;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

/* BADGE */

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  background: #eee;
  padding: 3px 6px;
  border-radius: 4px;
}

/* LINK */

.member-link {
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
}
</style>
