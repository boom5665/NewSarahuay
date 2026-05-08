<template>
  <div class="lotto-check">
    <div class="lotto-box">
      <div class="bg-col">
        <div class="text-top"><img src="/frame/Star.png" alt="" />ตรวจผลหวย<img src="/frame/Star.png" alt="" /></div>
      </div>

      <div class="row-select">
        <div class="row-input">
          <div class="field-top">
            <label>รูปแบบหวย</label>
            <select v-model="form.type">
              <option v-for="item in lottoType" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
          </div>
          <div class="field">
            <label>งวดวันที่</label>
            <select v-model="form.date">
              <option v-for="item in lottoDate" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
          </div>
          <input type="text" v-model="form.number1" placeholder="กรอกเลขหวย ใบที่ 1" />

          <input type="text" v-model="form.number2" placeholder="กรอกเลขหวย ใบที่ 2" />
        </div>
        <!-- button -->
        <button class="btn-check" @click="checkLotto"><img src="/icon/search.svg" alt="" />  ตรวจผลรางวัล</button>
      </div>



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



.lotto-box {
  width: 100%;
  background: var(--white);
  border-radius: 0.75rem;
  // padding: 1.5rem;
}

.bg-col {
  background:
    linear-gradient(180deg, #04BAFC 0%, #0D1737 100%),
    url('/frame/checklotto.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  margin-bottom: 1rem;
  height: 4.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.row-select {
  gap: 1rem;
  padding: 1rem;
  padding-top: 0;
}

.field-top {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: .5rem;

  label {
    font:var(--FieldLabelPC);
    margin-bottom: 0.5rem;
  }

  select {
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    padding: 0 0.5rem;
  }
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
  font:var(--FieldLabelPC);
    margin-bottom: 0.5rem;
  }

  select {
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    padding: 0 0.5rem;
  }
}

.row-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: .5rem;

  input {
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    padding: 0 0.75rem;
  }
}

.btn-check {
width: 100%;
    height: 3rem;
    background: var(--Green-Main-Green-500, #008F6C);
    border: none;
    color: var(--white);
    border-radius: 0.5rem;
    font: var(--ButtonMainPC);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}
</style>
