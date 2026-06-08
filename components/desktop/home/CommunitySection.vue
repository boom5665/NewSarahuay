<template>
  <div class="lucky-news-card">
    <img src="/lotto/aura.png" class="aura-img" alt="">
    <div class="card-head">
      <div class="card-head-two">
        <div class="card-title"><span class="ic"><img src="/icon/yippeesee.png" alt=""></span> ไพ่ยิปซีประจำวัน</div>

      </div>
      <div class="see-all">
        <span style="margin-right: 5px;">ไพ่อื่น ๆ</span> <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13"
          viewBox="0 0 7 13" fill="none">
          <path d="M0.75 0.750546L5.45003 6.0306L0.75 11.3105" stroke="#FFDE6E" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="tarot-inner">
      <div class="tarot-img">
        <img :src="tarot.image">
      </div>

      <div class="tarot-name">
        {{ tarot.title }}
      </div>

      <div class="tarot-desc">
        {{ tarot.description }}
      </div>

      <button class="btn-gold">
        เปิดไพ่ดูดวงส่วนตัว
      </button>

    </div>
  </div>
</template>
<script setup>
const tarot = ref({
  title: "The Sun",
  image: "/lotto/card.png",
  description:
    "วันนี้เป็นวันแห่งความสำเร็จ มีอุปสรรคน้อย เข้าบ้าน สิ่งที่คิดประสบความสำเร็จ ความรักสดใส ทางงานก้าวหน้า การเงินมีความคล่องตัว เหมาะแก่การเริ่มต้น"
});
</script>
<style scoped lang="scss">
.lucky-news-card {
  background-image: url("/lotto/BG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 1.25rem; // 20px
  padding: 1rem;
  color: white;

  border: 0.0625rem solid rgba(111, 60, 255, 0.2);

  position: relative;
  overflow: hidden;
}

.tarot-card {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(25rem 18.75rem at 50% 30%,
      rgba(124, 77, 255, 0.3),
      transparent 70%),
    linear-gradient(160deg, #241a52, #120e2c);

  border: 0.0625rem solid rgba(124, 77, 255, 0.25);
  border-radius: 1.125rem; // 18px
}

.tarot-stars {
  position: absolute;
  inset: 0;

  background-image:
    radial-gradient(0.08125rem 0.08125rem at 20% 25%, #fff, transparent),
    radial-gradient(0.08125rem 0.08125rem at 75% 35%, #fff, transparent),
    radial-gradient(0.0625rem 0.0625rem at 50% 60%, #fff, transparent),
    radial-gradient(0.0875rem 0.0875rem at 85% 70%, #fff, transparent),
    radial-gradient(0.0625rem 0.0625rem at 30% 80%, #fff, transparent);

  opacity: 0.45;
  pointer-events: none;
}

.tarot-inner {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tarot-img img {
  width: 12.5rem; // 200px
  height: 17.125rem; // 274px

}

.tarot-name {
  font-size: 1.375rem; // 22px
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.625rem; // 10px
}

.tarot-desc {
  max-width: 25rem; // 400px
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 1rem; // 16px
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  background: #F6AE1D;
  cursor: pointer;
  font-weight: 600;
}

.aura-img {
  position: absolute;
  left: 50%;
  top: 37%;
  width: 77.3125rem;
  height: 68.6875rem; // 1099px
  animation: rotateAura 20s linear infinite;
}

@keyframes rotateAura {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>