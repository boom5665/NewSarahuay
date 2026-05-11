<template>
  <div class="lotto-check">
    <div class="lotto-box">

      <div class="text-top"><img src="/frame/Starblue.png" alt="" />วิเคราะห์ด้วย AI<img src="/frame/Starblue.png"
          alt="" /></div>

      <div class="pd-box">
        <div class="box-img">
          <div class="item" v-for="item in menuList" :key="item.id" :class="{ active: activeMenu === item.id }"
            @click="activeMenu = item.id">
            <div class="icon">
              <img :src="item.img" />
            </div>

            <div class="text">
              {{ item.title }}
            </div>
          </div>
        </div>

      </div>
      <div class="row-input">
        <label><img src="/icon/number.png" alt=""> วิเคราะห์เลขที่มี</label>
        <input type="text" placeholder="กรอกเลขหวย ใบที่ 1" />
      </div>
      <div class="more"><img src="/icon/starleft.svg" alt="" /> วิเคราะห์ด้วย AI</div>
    </div>
  </div>
</template>

<script setup>
import gridnumber from "/icon/number.png";
import gridcall from "/icon/call.png";
import griddream from "/icon/dream.png";
import gridbirthday from "/icon/birthday.png";
const activeMenu = ref(1)
const menuList = [
  { id: 1, title: "วิเคราะห์เลขที่มี", img: gridnumber },
  { id: 2, title: "เลขจากเบอร์โทร", img: gridcall },
  { id: 3, title: "เลขจากความฝัน", img: griddream },
  { id: 4, title: "เลขจากวันเกิด", img: gridbirthday },

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
  background:
    linear-gradient(180deg, #0F1C50 0%, #0F1C50 100%),
    url('/frame/bgai.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.pd-box {
  width: 100%;
}

.box-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 1.3rem 0.5rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  height: 2.875rem;
  padding: 0.875rem 1rem;
  background: var(--AI-defaul, #020B32);
  color: var(--white);
  font: var(--ButtonContentPC);
  cursor: pointer;
  transition: 0.25s;
}

.item.active {
  background: url('/frame/activeai.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
}

.icon {
  width: 1rem;
  height: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}



.more {
    font: var(--ButtonMainPC);
    text-align: center;
    padding: 0.75rem 0.5rem;
    color: var(--white);
    border-radius: var(--radius-md, 8px);
    background: var(--AI-active, #2E4CC4);
    margin: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    height: 3rem;
    align-items: center;

}

.text-top {
  text-align: center;
  font: var(--HeadContentPC);
  color: var(--head-content, #8DFFFF);
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'dlig' on, 'hlig' on;
  /* Inner Shadow */
  text-shadow: 0 0 10px rgba(49, 119, 255, 0.70), 0 0 10px rgba(49, 119, 255, 0.50);

  display: flex;
  align-items: center;
  // gap: 0.3rem;
  justify-content: center;
}

label {
font: var(--FieldLabelPC);
    margin-bottom: 0.5rem;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.row-input {
  display: flex;
  flex-direction: column;

  margin-bottom: .5rem;
  padding: 0 0.5rem;

  input {
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    padding: 0 0.75rem;
    font: var(--FieldValue);
  }
}
</style>
