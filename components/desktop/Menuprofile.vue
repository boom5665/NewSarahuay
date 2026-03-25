<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>
    <div class="grid-box">
      <div class="section">
        <div class="section-title">บัญชี</div>

        <div class="form-grid">
          <div class="input-group">
            <label>ชื่อบัญชี</label>
            <input type="text" value="Sarahuay01" />
          </div>

          <div class="input-group">
            <label>รหัสผ่าน</label>
            <input type="password" value="********" />
          </div>

          <div class="input-group full">
            <label>วันก่อตั้งบัญชี</label>
            <input type="text" placeholder="วว/ดด/ปปปป" />
          </div>
        </div>
      </div>

      <!-- ข้อมูลส่วนบุคคล -->
      <div class="section">
        <div class="section-title">ข้อมูลส่วนบุคคล</div>

        <div class="form-grid">
          <div class="input-group">
            <label>ชื่อ</label>
            <input type="text" placeholder="สาระดี" />
          </div>

          <div class="input-group">
            <label>นามสกุล</label>
            <input type="text" placeholder="สาระดี" />
          </div>

          <div class="input-group">
            <label>เพศ</label>
            <select>
              <option>ชาย</option>
              <option>หญิง</option>
            </select>
          </div>

          <div class="input-group">
            <label>วัน/เดือน/ปีเกิด</label>
            <input type="date" />
          </div>
        </div>
      </div>

      <!-- ติดต่อ -->
      <div class="section full">
        <div class="section-title">ติดต่อ</div>

        <div class="form-grid">
          <div class="input-group">
            <label>เบอร์โทรศัพท์</label>
            <input type="text" placeholder="000-000-0000" />
          </div>

          <div class="input-group">
            <label>อีเมล</label>
            <input type="email" placeholder="email@email.com" />
          </div>
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
  background: #fff;
  border-radius: 8px;
  padding: 16px;
}

.section.full {
  grid-column: span 2;
}

.section-title {
  font-weight: 600;
  margin-bottom: 12px;
}

/* form grid */

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group.full {
  grid-column: span 2;
}

label {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

input,
select {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
}

</style>
