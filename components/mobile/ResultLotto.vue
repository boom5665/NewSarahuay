<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <div class="text-top">ตรวจผลหวย</div>
      <div class="row-select">
        <div class="field">
          <label>รูปแบบหวย</label>
          <select v-model="form.type">
            <option
              v-for="item in lottoType"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
        </div>

        <div class="field">
          <label>เลือกงวดประจำวันที่</label>
          <select v-model="form.date">
            <option
              v-for="item in lottoDate"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
        </div>
      </div>

      <!-- inputs -->
      <div class="row-input">
        <input
          type="text"
          v-model="form.number1"
          placeholder="กรอกเลขหวย ใบที่ 1"
        />

        <input
          type="text"
          v-model="form.number2"
          placeholder="กรอกเลขหวย ใบที่ 2"
        />
      </div>

      <!-- button -->
      <button class="btn-check" @click="checkLotto">🔍 ตรวจผลรางวัล</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const lottoType = [
  { label: "🇹🇭 หวยไทย", value: "thai" },
  { label: "🇱🇦 หวยลาว", value: "lao" }
];

const lottoDate = [
  { label: "16 พฤศจิกายน 2568", value: "2025-11-16" },
  { label: "1 พฤศจิกายน 2568", value: "2025-11-01" }
];

const form = reactive({
  type: "thai",
  date: "2025-11-16",
  number1: "",
  number2: ""
});

const checkLotto = () => {
  console.log("ตรวจหวย", form);
};
</script>

<style scoped lang="scss">
.lotto-check {
  display: flex;
  justify-content: center;
  width: 100%;
}

.text-top {
  text-align: center;
  font: var(--HeadContent);
  margin-bottom: 1rem;
}

.lotto-box {
  width: 100%;
  background: #f3f3f3;
  border-radius: 0.75rem;
  padding: .5rem;
}

.row-select {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-direction: column;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
    font: var(--FieldLabel);
    margin-bottom: 0.25rem;
  }

  select {
    height: 2.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    padding: 0 0.5rem;
  }
}

.row-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  input {
    height: 2.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    padding: 0 0.75rem;
  }
}

.btn-check {
  width: 100%;
  height: 3rem;
 background: var(--Green-Main-Green-500, #008F6C);
  color: white;
  border-radius: 0.5rem;
  font: var(--ButtonMain);
  cursor: pointer;
  border: none;
 
}
</style>
