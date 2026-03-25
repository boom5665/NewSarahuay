<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>

    <div class="grid-box">
      <div class="section-title">ประวัติการใช้งาน AI</div>
      <div class="section">
        <div class="activity">
          <div
            v-for="(group, index) in activityList"
            :key="index"
            class="date-group"
          >
            <!-- วันที่ -->
            <div class="date">{{ group.date }}</div>

            <!-- รายการ -->
            <div
              v-for="(item, i) in group.items"
              :key="i"
              class="activity-item"
            >
              <div class="icon">✉️</div>

              <div class="content">
                <div class="text">{{ item.text }}</div>
                <div class="time">{{ item.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const activityList = [
  {
    date: "16 กุมภาพันธ์ 2026",
    items: [
      {
        text: "อ่านข่าว ส่องเลขเด็ด 'แม่ปั้นก้อน' งวด 1 มี.ค. 69 มาแล้ว คอหวยจับตา 3 ตัวบน 2 ตัวล่างแรง...",
        time: "13:25"
      },
      {
        text: "อ่านข่าว ส่องเลขเด็ด 'แม่ปั้นก้อน' งวด 1 มี.ค. 69 มาแล้ว คอหวยจับตา 3 ตัวบน 2 ตัวล่างแรง...",
        time: "13:25"
      }
    ]
  },
  {
    date: "15 กุมภาพันธ์ 2026",
    items: [
      {
        text: "อ่านข่าว ส่องเลขเด็ด 'แม่ปั้นก้อน' งวด 1 มี.ค. 69 มาแล้ว คอหวยจับตา 3 ตัวบน 2 ตัวล่างแรง...",
        time: "13:25"
      }
    ]
  }
  ,
   {
    date: "23 กุมภาพันธ์ 2026",
    items: [
      {
        text: "อ่านข่าว ส่องเลขเด็ด 'แม่ปั้นก้อน' งวด 1 มี.ค. 69 มาแล้ว คอหวยจับตา 3 ตัวบน 2 ตัวล่างแรง...",
        time: "13:25"
      }
    ]
  }
];
</script>

<style lang="scss" scoped>
.menu-right {
  border-radius: 0.5rem;
  background: #e0e0e0;
}
.grid-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  background: #d2d2d2;
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
.date-group {
  margin-bottom: 16px;
}
.date {
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}
.activity-item {
  display: flex;
  gap: 10px;
  padding: 8px 0;
}
.icon {
  width: 24px;
  height: 24px;
  background: #e8edf5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.content {
  flex: 1;
}
.text {
  font-size: 14px;
  color: #333;
}
.time {
  font-size: 12px;
  color: #999;
}
</style>
