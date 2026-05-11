<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <div class="text-top"><img src="/frame/Star.png" alt="" />เช็คดวง<img src="/frame/Star.png" alt="" /></div>
      <div class="pd-box">
        <div class="tatort-horo"><img src="/frame/magic-ball.png" alt="" />ดูดวง</div>
        <div class="box-img">
          <div class="horo-boxd"><img class="date-img" src="/frame/daily.png" alt="" />รายวัน</div>
          <div class="horo-boxd"><img class="date-img" src="/frame/dailys.png" alt="" />รายวัน</div>
          <div class="horo-boxd"><img class="date-img" src="/frame/dailysd.png" alt="" />รายวัน</div>
        </div>
        <div class="tatort-horo"><img src="/frame/tarot.png" alt="" />ดูไพ่ยิปซี</div>
        <div class="box-img">
          <div class="horo-boxd"><img class="date-img" src="/frame/daily.png" alt="" />รายวัน</div>
          <div class="horo-boxd"><img class="date-img" src="/frame/dailys.png" alt="" />รายวัน</div>
          <div class="horo-boxd"><img class="date-img" src="/frame/dailysd.png" alt="" />รายวัน</div>
        </div>
      </div>

      <NuxtLink to="lotto" class="abox">
        <span class="bt-next">ดูดวงเพิ่มเติม </span>
      </NuxtLink>
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
  font: var(--HeadContentPC);
  font-weight: 700;
  background: var(--Linear, linear-gradient(0deg, #8AA8B5 -28.6%, #FFF 80.43%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
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
  background:
    linear-gradient(180deg, #483397 0%, #483397 100%),
    url('/frame/bghoro.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.pd-box {
  padding: 0rem 0.5rem;

  .box-img {
    padding: 0.5rem 0 1rem 0rem;
    gap: 0.5rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.horo-boxd {
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(---stoke, #6349C7);
  background: var(---default, #211456);
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 0rem;
  flex-direction: column;
  padding-bottom: 0.5rem;
}

.date-img {
  width: 3.125rem;
  height: 3.125rem;
  padding: .5rem;
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

.bt-next {
  font: var(--ButtonMain);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  cursor: pointer;
  justify-content: center;
  width: max-content;
  border-radius: var(--radius-full, 999px);
  border: 1px solid var(--color-black-0, #FFF);
  padding: var(--space-sm, 8px) var(--space-lg, 24px);
  height: 3rem;
}
.abox{
  display: flex;
    justify-content: center;
    padding-bottom: 1rem;
}
.tatort-horo {
  color: var(---yellow, #FFD9A5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
