<template>
  <transition name="slide">
    <div class="menubar" :class="{ 'menubar-active': showMenu }" >
      <img class="circle" src="/assets/svg/close.svg" @click="toggleMenu" />
      <Menu :classList="'menulist'" :icon="'home.svg'" :text="'หน้าแรก'" @click.native="handleMenuClick('home')" />
      <Menu :classList="'menulist'" :icon="'spin.svg'" :text="'หวยยอดนิยม'" @click.native="handleMenuClick('lottery')" />
      <Menu :classList="'menulist'" :icon="'live.svg'" :text="'ถ่ายทอดสดหวยออนไลน์'" @click.native="handleMenuClick('live')" />
      <Menu :classList="'menulist'" :icon="'announce.svg'" :text="'โปรโมชั่น'" @click.native="handleMenuClick('promotion')" />
      <Menu :classList="'menulist'" :icon="'contract.svg'" :text="'ติดต่อเรา'" @click.native="handleMenuClick('contact')" />
      <Menu :classList="'menulist'" :icon="'logout.svg'" :text="'ออกจากระบบ'" @click.native="handleMenuClick('logout')" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showMenu: Boolean
  },
  methods: {
    toggleMenu() {
      this.$emit('close');
    },
    handleMenuClick(route) {
      this.$emit('close');
    }
  }
};
</script>

<style>
.circle {
  filter: var(--icon-primary);
}
</style>
