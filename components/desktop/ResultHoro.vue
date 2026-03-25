<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <div class="text-top">เช็กดวง</div>
      <div class="text-under-top">เลือกหมวดทำนายดวงชะตา</div>
      <div class="pd-box">
        <div>ดูดวง</div>
        <div class="box-img">
          <div><img src="/assets/icons/Com.png" alt="" /></div>
          <div><img src="/assets/icons/Com.png" alt="" /></div>
          <div><img src="/assets/icons/Com.png" alt="" /></div>
        </div>
        <div>ดูไพ่ยิปซี</div>
        <div class="box-img">
          <div><img src="/assets/icons/Com.png" alt="" /></div>
          <div><img src="/assets/icons/Com.png" alt="" /></div>
          <div><img src="/assets/icons/Com.png" alt="" /></div>
        </div>
      </div>

      <div class="more">ดูผลหวยเพิ่มเติม</div>
    </div>
  </div>
</template>

<script setup></script>

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
.text-under-top {
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}
.lotto-box {
  width: 100%;
  background: #f3f3f3;
  border-radius: 0.75rem;
  padding: 1rem 0rem 0rem 0rem;
}
.pd-box {
  padding: 0rem 1rem;
  .box-img {
    padding: 0.5rem 0 0.5rem 0rem;
    display: flex;
    gap: 1rem;
  }
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
