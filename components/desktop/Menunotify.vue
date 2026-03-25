<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>

    <div class="grid-box">
      <div class="section">
        <div class="section-title">ตั้งค่าการแจ้งเตือนทั่วไป</div>

        <div class="notify-box">
          <label class="toggle-item">
            <input type="checkbox" checked />
            <span class="toggle"></span>
            รับข้อมูลเกี่ยวกับข้อเสนอพิเศษผ่าน SMS
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            รับการแจ้งเตือนภายใน สระ.หวย
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            ข่าวสารเกี่ยวกับข่าวใหม่
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            ข่าวสารเกี่ยวกับเลขหวยมาแรง
          </label>
        </div>
      </div>

      <!-- แจ้งเตือน AI -->
      <div class="section">
        <div class="section-title">ตั้งค่าการแจ้งเตือนวิเคราะห์ AI</div>

        <div class="notify-box">
          <label class="toggle-item">
            <input type="checkbox" checked />
            <span class="toggle"></span>
            รับข้อมูลเกี่ยวกับข้อเสนอพิเศษผ่าน SMS
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            การแจ้งเตือนการวิเคราะห์
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            การแจ้งเตือนทันทีทุกงวด
          </label>

          <label class="toggle-item">
            <input type="checkbox" />
            <span class="toggle"></span>
            ข่าวเลขเด่นใหม่จากการวิเคราะห์
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

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

.notify-box {
  background: #f3f3f3;
  padding: 12px;
  border-radius: 8px;
}
.section-title {
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
/* toggle */

.toggle-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
}

.toggle-item input {
  display: none;
}

.toggle {
  width: 36px;
  height: 20px;
  background: #ccc;
  border-radius: 20px;
  position: relative;
}

.toggle::after {
  content: "";
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: 0.2s;
}

.toggle-item input:checked + .toggle {
  background: black;
}

.toggle-item input:checked + .toggle::after {
  transform: translateX(16px);
}

</style>
