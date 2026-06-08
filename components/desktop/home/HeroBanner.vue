<template>
  <div class="hero-banner">

    <div class="hero-content">

      <div>

        <div class="title-top">
          รวมทุกเรื่องที่นักเสี่ยงโชคต้องรู้
        </div>
        <div class="title">
          เลขเด็ด สถิติหวย
        </div>

        <div class="subtitle">
          ดูดวง ทำนายฝัน ไพ่ยิปซี

        </div>
        <div class="subtitle-in">
          ครบจบในที่เดียว
        </div>
        <div class="button-group">
          <button>แม่นยำ</button>
          <button>อัพเดตทุกวัน</button>
          <button>ใช้งานฟรี</button>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
@keyframes heroSlideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes imageFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) rotateY(-20deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotateY(0);
  }
}

@keyframes shadowFloat {

  0%,
  100% {
    box-shadow: 0 20px 60px rgba(255, 179, 0, 0.2);
  }

  50% {
    box-shadow: 0 30px 80px rgba(255, 179, 0, 0.4);
  }
}

.hero-banner {
  width: 100%;
  background-image: url("/bga.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 2.5rem;
  // border: 1px solid rgba(255, 255, 255, 0.72);
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(15, 38, 33, 0.18);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0)),
      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 80px);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: 24px;
    bottom: 22px;
    width: 118px;
    height: 118px;
    border: 1px solid rgba(255, 213, 74, 0.42);
    border-radius: 50%;
    pointer-events: none;
  }
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  position: relative;
  z-index: 1;
}

.tagline {
  width: max-content;
  color: #17332c;
  background: #ffd54a;
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 14px;
  animation: heroSlideIn 0.7s ease-out both;
}

.title {
  font-size: 3.4375rem;
  font-weight: 700;
  color: #F6AE1D;
  animation: heroSlideIn-f2b3f371 0.8s ease-out;
  line-height: 1.2;
margin-top: 1rem;
}

.subtitle {
  color: white;
  font-size: 2.125rem;
  animation: heroSlideIn 0.8s ease-out 0.1s both;
  text-align: center;
  margin-top: 1rem;
}

.subtitle-in {
  color: white;
  font-size: 1.5rem;
  animation: heroSlideIn 0.8s ease-out 0.1s both;
  text-align: center;
  margin-top: 1rem;
}

.button-group {
    display: flex;
    gap: 2.5rem;
    margin-top: 2.75rem;
    animation: heroSlideIn-f2b3f371 0.8s ease-out 0.2s both;
  
}

.button-group button {
  background: transparent;
  color: #FFDE6E;
  border: none;
  padding: .75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  font-size: 1rem;

}

.hero-image {
  width: 18.75rem;
  height: 18.75rem;
  object-fit: contain;
  animation: imageFadeIn 1s ease-out;
  filter: drop-shadow(0 20px 50px rgba(255, 212, 74, 0.3));
}

.title-top {
  color: white;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 400;
}
</style>
