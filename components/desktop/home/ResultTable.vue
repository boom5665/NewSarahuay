<template>
  <div class="result-table">
    <div class="card card-pad">
      <div class="cardtop">
        <div class="card-head">
          <div class="card-head-two">
            <div class="card-title"><span class="ic"><img src="/icon/hot1.png" alt=""></span> ผลหวยล่าสุด</div>
          </div>
           <div class="see-all">
         <span style="margin-right: 5px;">ดูทั้งหมด</span>  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
            <path d="M0.75 0.750546L5.45003 6.0306L0.75 11.3105" stroke="#FFDE6E" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        </div>
        <div class="draw-date">งวดวันที่ 16 พฤษภาคม 2569</div>
        <div class="prize-grid">
          <div class="prize first">
            <div class="prize-l st"><span class="st"><img src="/icon/Cup.png" class="icon" alt=""></span> รางวัลที่ 1
              <span class="st"><img src="/icon/Cup.png" class="icon" alt=""></span>
            </div>
            <div class="prize-n "> <span class="horo-title">123456</span></div>
          </div>
          <div class="prize first">
            <div class="prize-l"> เลขหน้า 3 ตัว </div>
            <div class="prize-n">123 456</div>
          </div>
          <div class="prize first">
            <div class="prize-l"> เลขท้าย 3 ตัว </div>
            <div class="prize-n">123 456</div>
          </div>
          <div class="prize first">
            <div class="prize-l"> เลขท้าย 2 ตัว </div>
            <div class="prize-n font-two">22</div>
          </div>
        </div>
      </div>

      <div>
        <div class="sub-head">
          <div class="card-head">
            <div class="card-head-two">
              <div class="card-title"><span class="ic"><img src="/icon/hot2.png" alt=""></span> สถิติหวยน่าสนใจ
              </div>
            </div>

          </div>
        </div>
        <div class="stat-grid">
          <div class="stat-box">
            <div class="stat-t">เลขออกบ่อย</div>
            <div class="stat-d">ออกบ่อยที่สุด 10 งวด</div>
            <div class="stat-nums">
              <span>12</span><span>34</span><span>47</span><span>56</span><span>78</span><span>27</span>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-t">เลขหายไปนาน</div>
            <div class="stat-d">ไม่ออกนานที่สุด 30 งวด</div>
            <div class="stat-nums">
              <span>12</span><span>34</span><span>47</span><span>56</span><span>78</span><span>27</span>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-t">เลขท้าย 2 ตัว</div>
            <div class="stat-d">มาแรงล่าสุด 10 งวด</div>
            <div class="stat-nums">
              <span>12</span><span>34</span><span>47</span><span>56</span><span>78</span><span>27</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.result-table {
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  border-radius: 1.25rem; // 20px
  padding: 1.25rem;
  color: white;
  border: 0.0625rem solid rgba(59, 130, 246, 0.2);
  overflow: hidden;
}

.draw-date {
  background: #0e0e20;
  border: 0.0625rem solid var(--line);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-family: var(--head);
  font-weight: 500;
  color: #FFDE6E;
  margin-bottom: 0.875rem;
  text-align: left;
}

.cardtop {
  border-radius: 1rem; // 16px
  border: 0.0625rem solid #3C4765;
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  padding: 1rem;
}

.prize-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr .8fr;
  gap: 0.75rem;
}

.prize {
  padding: 0.75rem;
  text-align: center;
  border-radius: 0.5rem; // 8px
  border: 0.0625rem solid #3D382D;
  background: linear-gradient(270deg, #1C1525 0%, #312A24 50%, #1C1525 100%);
}

.prize-l {
  font-size: 1rem;
  color: white;
  margin-bottom: 0.5rem; // 8px
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem; // 5px
}

.horo-title {
  background: linear-gradient(180deg, #F9F7AC 41.67%, #FFDD72 57.14%, #F5C32C 72.92%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
}

.st {
  color: var(--gold);
  font-size: 1rem;
  font-weight: 800;
}

.prize-n {
  font-family: var(--head);
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.125rem; // 2px
}

.prize.first .prize-n {
  color: var(--white);
  background: #473A2A;
  border-radius: 0.5rem; // 8px
  height: 3.375rem;
  display: flex;
  border: 0.0625rem solid rgba(241, 196, 85, 0.2);
  align-items: center;
  justify-content: center;
}

.sub-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--head);
  font-weight: 600;
  font-size: 0.9375rem;
  margin: 1rem 0 0;
}

.sub-head .ic {
  color: var(--gold);
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.stat-box {
  padding: 0.8125rem 0.625rem; // 13px 10px
  border-radius: 0.5rem; // 8px
  border: 0.0625rem solid #49455C;
  background: #282536;
}

.stat-t {
  text-align: center;
  font: var(--PageTitlePC);
  margin-bottom: 0.125rem; // 2px
  color: #FFDE6E;
}

.stat-d {
  text-align: center;
  font: var(--TimeCardPC);
  color: var(--white);
  margin-bottom: 0.625rem;
}

.stat-nums {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4375rem; // 7px
}

.stat-nums span {
  border-radius: 0.25rem; // 4px
  background: #151425;
  text-align: center;
  padding: 0.625rem 0;
  font-family: var(--head);
  font-weight: 700;
  font-size: 1rem;
  color: #FFDE6E;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.font-two {
  font-size: 2.5rem;
}
</style>