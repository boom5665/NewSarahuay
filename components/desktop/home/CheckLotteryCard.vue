<template>
  <div class="lucky-news-card">

    <div style="display:flex;flex-direction:column;gap:18px">
      <div class="card card-pad">
        <div class="card-head">
          <div class="card-title"><span class="ic"><img src="/icon/yipeeee.png" alt=""></span> ตรวจหวยที่นี่</div>
        </div>
        <div class="check-input">
          <input type="text" placeholder="กรอกเลข 6 หลัก" maxlength="6">
          <button class="btn-gold">ตรวจผลหวย</button>
        </div>
        <div class="selects" style="margin-top:14px">
          <div>
            <div class="field-label">รูปแบบหวย</div>
            <div class="sel"><select>
                <option>หวยไทย</option>
                <option>หวยลาว</option>
                <option>หวยฮานอย</option>
              </select></div>
          </div>
          <div>
            <div class="field-label">เลือกงวดประจำวันที่</div>
            <div class="sel"><select>
                <option>16 พ.ค. 2567</option>
                <option>1 พ.ค. 2567</option>
                <option>16 เม.ย. 2567</option>
              </select></div>
          </div>
        </div>
        <button class="btn-ghost">ผลหวยย้อนหลัง</button>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.lucky-news-card {
  background: var(--bg-content, linear-gradient(293deg, #120E29 2.26%, #212D4B 109.49%));
  border-radius: 20px;
  padding: 1rem;
  color: white;
  border: 1px solid rgba(111, 60, 255, 0.2);
}

.field-label {
  font-size: 1rem;
  color: var(--white);
  margin: 12px 0 6px
}

.check-input {
  display: flex;

}

.check-input input {
  flex: 1;
  background: #0e0e20;
  border: 1px solid var(--line-strong);
  border-radius: 10px 0px 0px 10px;
  padding: 0 14px;
  height: 2.75rem;
  color: var(--muted-2);
  outline: none;
  font-family: var(--head);
  font-size: 1rem;
  letter-spacing: 3px;
}

.check-input input::placeholder {
  color: var(--muted-2);
  letter-spacing: 0;
  font-weight: 400
}

.btn-gold {
  background: linear-gradient(145deg, var(--gold), var(--gold-2));
  color: #1a1206;
  font-weight: 700;
  border-radius: 0px 10px 10px 0px;
  padding: 0 1rem;
  height: 2.6875rem;
  white-space: nowrap;
  transition: .15s;
  border: 1px solid var(--line-strong);
  font-size: 1rem;
}

.btn-gold:hover {
  transform: translateY(-1px)
}

.btn-gold.full {
  width: 100%;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px
}

.selects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  color: var(--white);
}

.sel {
  position: relative
}

.sel select {
  width: 100%;
  appearance: none;
  background: #0e0e20;
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  padding: 0 32px 0 12px;
  height: 2.75rem;
  font-family: inherit;
  font-size: 1rem;
  color: #FFDE6E;
  outline: none;
  cursor: pointer;
}

.sel::after {
  content: "▾";
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
  font-size: 20px
}

.btn-ghost {
  width: 100%;
  margin-top: 12px;
  border: none;
  border-radius: .5rem;
  background: #F6AE1D;
  border-radius: 10px;
  height: 2.75rem;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  transition: .15s;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
}

.btn-ghost:hover {
  color: var(--text);
  border-color: var(--gold);
}
</style>
