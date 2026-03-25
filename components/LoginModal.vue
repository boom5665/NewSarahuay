<template>
  <div>
    <Button :classList="'primary'" :text="'เข้าสู่ระบบ'" @click="showModalLogin = true" :icon="'svg/arrow.svg'" />

    <vue-final-modal v-model="showModalLogin" classes="modal-container">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-header-title">Login</div>
          <div class="modal-header-sub-title">เข้าสู่ระบบสมาชิก</div>
          <div class="modal-header-close" @click="showModalLogin = false">
            <img :src="$getIcon('svg/close.svg', 'svg')">
          </div>
        </div>
        <div class="modal-body">
          <InputValue 
            @updateData="inputUsername = $event "
            :type="'text'"
            :inputID="'username'" 
            :label="'Username / ID'" 
            :placeholder="'กรุณากรอก ยูสเซอร์เนม'"
            :icon="'svg/user.svg'"
          />
          <InputValue 
            @updateData="inputPassword = $event "
            :type="'password'"
            :inputID="'password'" 
            :label="'Password'" 
            :placeholder="'รหัสผ่าน'"
            :icon="'svg/key.svg'"
          />
          <div class="register">มีไอดีแล้วหรือยัง? ถ้ายังคลิก <NuxtLink to="#" @click="handleClick('register')">สมัครสมาชิก</NuxtLink></div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <CheckboxValue 
              @updateData="rememberMe = $event "
              :inputID="'remember_me'" 
              :label="'จดจำฉัน'" 
            />
            <Button :classList="'primary submit'" :text="'เข้าสู่ระบบ'" @click="loginAction()" />
          </div>
        </div>
      </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModalRegister" classes="modal-container">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-header-title">Register</div>
          <div class="modal-header-sub-title">ระบบสมัครสมาชิก</div>
          <div class="modal-header-close" @click="showModalRegister = false">
            <img :src="$getIcon('svg/close.svg', 'svg')">
          </div>
        </div>
        <div class="modal-body">
          <InputValue 
            @updateData="inputUsername = $event "
            :type="'text'"
            :inputID="'username'" 
            :label="'Username / ID'" 
            :placeholder="'กรุณากรอก ยูสเซอร์เนม'"
            :icon="'svg/user.svg'"
          />
          <InputValue 
            @updateData="inputPassword = $event "
            :type="'password'"
            :inputID="'password'" 
            :label="'Password'" 
            :placeholder="'รหัสผ่าน'"
            :icon="'svg/key.svg'"
          />
          <InputValue 
            @updateData="inputConfirmPassword = $event "
            :type="'password'"
            :inputID="'cpassword'" 
            :label="'Confirm Password'" 
            :placeholder="'โปรดยืนยันรหัสผ่านอีกครั้ง'"
            :icon="'svg/key.svg'"
          />
          <div class="register">มีไอดีแล้ว? <NuxtLink to="#" @click="handleClick('login')">เข้าสู่ระบบ</NuxtLink></div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <CheckboxValue 
              @updateData="ageConfirm = $event "
              :inputID="'ageconfirm'" 
              :label="'ฉันอายุ 18 ปีขึ้นไป'" 
            />
            <Button :classList="'primary submit'" :text="'เข้าสู่ระบบ'" @click="loginAction()" />
          </div>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>
    

<script>
  export default {
    data() {
      return {
        showModalLogin: false,
        showModalRegister: false,
        inputUsername: '',
        inputPassword: '',
        inputConfirmPassword: '',
        rememberMe: false,
        ageConfirm: false,
      }
    },
    watch: {
    },
    mounted() {
    },
    methods: {
      updateModalVisibility(val) {
        this.showModalLogin = val
      },
      loginAction() {
        alert('Login Successful');
        this.showModalLogin = false;
      },
      handleClick(action) {
        if(action == 'register') {
          this.showModalLogin = false;
          this.showModalRegister = true;
        } else {
          this.showModalLogin = true;
          this.showModalRegister = false;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .register {
    margin: 0.5rem 0 1.5rem;
    .router-link-active {
      margin-left: 0.5rem;
    }
  }
  .button.submit {
    min-width: 18.75rem;
    padding: 0.875rem 1.5rem;
    margin: 0.5rem auto 0;
  }
</style>