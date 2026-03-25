<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>

    <div class="grid-box">
      <!-- SECURITY -->
      <div class="section">
        <div class="section-title">ความปลอดภัย</div>

        <div class="security-grid">
          <div class="security-card">
            <div class="icon"></div>
            <div class="title">เปลี่ยนรหัสผ่าน</div>
            <div class="desc">เปลี่ยนรหัสผ่านทุกเดือน</div>
          </div>

          <div class="security-card">
            <div class="icon"></div>
            <div class="title">เชื่อมโยงกับโทรศัพท์</div>
            <div class="desc">ช่วยกู้คืนบัญชีของคุณ</div>
          </div>

          <div class="security-card">
            <div class="icon"></div>
            <div class="title">อีเมล</div>
            <div class="desc">ช่วยในการกู้คืนบัญชีของคุณ</div>
          </div>

          <div class="security-card">
            <div class="icon"></div>
            <div class="title">การยืนยันตัวตนแบบ 2 ขั้นตอน</div>
            <button class="btn-enable">เปิดการใช้งาน</button>
          </div>
        </div>
      </div>

      <!-- SESSION -->
      <div class="section">
        <div class="section-header">
          <div>
            <div class="section-title">เซสชั่นเข้าใช้งานล่าสุด</div>
            <div class="sub">เซสชั่นใช้งานอยู่ (6)</div>
          </div>

          <button class="logout-all">ออกจากระบบทั้งหมด</button>
        </div>

        <div class="session-list">
          <div class="session-item" v-for="i in 6" :key="i">
            <div class="icon"></div>

            <div class="session-info">
              <div class="device">AndroidOS thailand Bangkok</div>
              <div class="detail">
                01/10/2025 (12:31) NewAndroid 000.000.000.000
              </div>
            </div>

            <div class="close">✕</div>
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
  background: white;
  border-radius: 8px;
  padding: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub {
  font-size: 12px;
  color: #888;
}

/* security */

.security-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.security-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.security-card .icon {
  width: 40px;
  height: 40px;
  background: #ddd;
  margin: auto;
  margin-bottom: 8px;
}

.security-card .title {
  font-weight: 600;
}

.security-card .desc {
  font-size: 12px;
  color: #777;
}

.btn-enable {
  margin-top: 8px;
  background: black;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
}

/* session */

.session-list {
  display: flex;
  margin-top: 0.75rem;
  border-radius: 0.5rem;
  background: #eee;
  padding: 1rem;
  gap: 1rem;
  flex-direction: column;
}

.session-item {
  display: flex;
  align-items: center;

  border-radius: 0.375remp;
}

.session-item:hover {
  background: #f5f5f5;
}

.session-info {
  flex: 1;
}

.device {
  font-weight: 500;
}

.detail {
  font-size: 12px;
  color: #777;
}

.close {
  cursor: pointer;
}

.logout-all {
  background: black;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
}
</style>
