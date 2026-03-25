<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <div class="Avatar-img">
        <img src="/assets/icons/Avatar.svg" alt="" />
      </div>
      <div class="text-top">วิเคราะห์ด้วย AI</div>

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

      <div class="more">ดูผลหวยเพิ่มเติม</div>
    </div>
  </div>
</template>

<script setup>
import gridIcon from "@/assets/icons/Grid.png";
const menuList = [
  { id: 1, title: "วิเคราะห์เลขที่มี", img: gridIcon },
  { id: 2, title: "เลขจากเบอร์โทร", img: gridIcon },
  { id: 3, title: "เลขจากความฝัน", img: gridIcon },
  { id: 4, title: "เลขจากวันเกิด", img: gridIcon },
  { id: 5, title: "เลขเด่นวันนี้", img: gridIcon },
  { id: 6, title: "เลขมาแรง", img: gridIcon }
];
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
}

.lotto-box {
  width: 100%;
  background: #f3f3f3;
  border-radius: 0.75rem;
  padding: 1rem 0rem 0rem 0rem;
}

.Avatar-img {
  text-align: center;
}
.pd-box {
  width: 100%;
}
.box-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  padding: 1.4063rem 1rem;
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
.icon {
  width: 1.5rem;
  height: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.text {
  font-size: 0.875rem;
  font-weight: 500;
}
.more {
  text-align: center;
  padding: 0.625rem;
  margin-top: 0.5rem;
  background: #e5e5e5;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
}
</style>
