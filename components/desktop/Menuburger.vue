<template>
  <div class="sidebar">
    <div class="menu-group">
      <div class="menu-title">การตั้งค่าบัญชี </div>
      <div class="menu-group-rof">
        <div
          class="menu-item"
          :class="{ active: modelValue === 'account' }"
          @click="$emit('update:modelValue', 'account')"
        >
          บัญชี
        </div>

        <div
          class="menu-item"
          :class="{ active: modelValue === 'security' }"
          @click="$emit('update:modelValue', 'security')"
        >
          ความปลอดภัย
        </div>
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-title">การตั้งค่าทั่วไป</div>
      <div class="menu-group-rof">
        <div
          class="menu-item"
          :class="{ active: modelValue === 'notify' }"
          @click="$emit('update:modelValue', 'notify')"
        >
          การแจ้งเตือน
        </div>

        <label class="menu-toggle">
          <span>โหมดมืด</span>

          <input
            type="checkbox"
            :checked="darkMode"
            @change="$emit('update:darkMode', $event.target.checked)"
          />

          <span class="toggle"></span>
        </label>

        <div
          class="menu-item"
          :class="{ active: modelValue === 'activity' }"
          @click="$emit('update:modelValue', 'activity')"
        >
          บันทึกกิจกรรม
        </div>
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-title">การตั้งค่า AI</div>
      <div class="menu-group-rof">
        <div
          class="menu-item"
          :class="{ active: modelValue === 'ai-stock' }"
          @click="$emit('update:modelValue', 'ai-stock')"
        >
          AI วิเคราะห์หุ้น
        </div>

        <div
          class="menu-item"
          :class="{ active: modelValue === 'package' }"
          @click="$emit('update:modelValue', 'package')"
        >
          แพ็กเกจ & เครดิต
        </div>

        <div
          class="menu-item"
          :class="{ active: modelValue === 'ai-history' }"
          @click="$emit('update:modelValue', 'ai-history')"
        >
          ประวัติการใช้งาน AI
        </div>
      </div>
    </div>

    <div class="menu-group logout">
      <div class="menu-group-rof">
        <div class="menu-item">ออกจากระบบ</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  darkMode: Boolean
});
defineEmits(["update:modelValue", "update:darkMode"]);
</script>

<style lang="scss" scoped>
.sidebar {
  background: #eee;
  border-radius: 10px;
  padding: 12px;
}

.menu-group {
  margin-bottom: 16px;
  .menu-group-rof {
    border-radius: var(--radius-md, 8px);
    background: #fff;
    padding: 0.5rem;
  }
}

.menu-title {
  font-size: 13px;
  color: #888;
  margin-bottom: 6px;
}

.menu-item {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.menu-item:hover {
  background: #e6e6e6;
}

.menu-item.active {
  background: #dedede;
  font-weight: 600;
}

.logout .menu-item {
  color: #c33;
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.75rem;
  cursor: pointer;
}

.menu-toggle input {
  display: none;
}

.toggle {
  width: 38px;
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

.menu-toggle input:checked + .toggle {
  background: #000;
}

.menu-toggle input:checked + .toggle::after {
  transform: translateX(18px);
}
</style>
