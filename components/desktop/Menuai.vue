<template>
  <div class="menu-right">
    <div class="menutop">{{ $t('Memberlevel') }} <span>{{ $t('pro') }}</span></div>

    <div class="grid-box">
      <div class="chat-header">
        <div class="title">ดูดวงกับ AI</div>
        <div class="subtitle">
          ถามเรื่องความรัก การงาน การเงิน หรือโชคลาภ ให้ฟีดและดวงจากคุณ
        </div>
      </div>
      <div class="section">
        <div class="chat-body">
          <div class="message ai">
            <div class="bubble">
              <b>ดูดวงกับ AI</b>
              <p>
                สวัสดีครับ ผมคือ ดูดวงกับ AI 🔮 ยินดีที่ได้ให้ทำนายดวงชะตาให้คุณ
                วันนี้คุณมีเรื่องอะไรอยากถามบ้างครับ
              </p>
            </div>
          </div>

          <div class="message user">
            <div class="bubble">สุขภาพช่วงนี้เป็นยังไงบ้าง?</div>
          </div>
        </div>
        <div>
          <div class="quick-menu">
            <button>การงาน</button>
            <button>การเงิน</button>
            <button>สุขภาพ</button>
            <button>ความรัก</button>
          </div>
          <div class="chat-input">
            <input type="text" placeholder="พิมพ์ข้อความ" />
            <button>✉</button>
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
  grid-template-columns: 1fr;

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

.ai-chat {
  background: #f3f3f3;
  border-radius: 10px;
  padding: 16px;
}

/* HEADER */

.chat-header {
  text-align: center;
  margin-bottom: 0.5rem;
}

.title {
  font-weight: 700;
  font-size: 18px;
}

.subtitle {
  font-size: 13px;
  color: #777;
}

/* BODY */

.chat-body {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* MESSAGE */

.message {
  display: flex;
}

.message.ai {
  justify-content: flex-start;
}

.message.user {
  justify-content: flex-end;
}

.bubble {
  background: #e5e5e5;
  padding: 10px 14px;
  border-radius: 12px;
  max-width: 60%;
  font-size: 14px;
}

.message.user .bubble {
  background: #6b6b6b;
  color: white;
}

/* QUICK MENU */

.quick-menu {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.quick-menu button {
  background: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
}

/* INPUT */

.chat-input {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.chat-input input {
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 6px;
}

.chat-input button {
  background: #ddd;
  border: none;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
