<template>
  <transition name="modal-fade">
    <div class="modal-container" @click.self="close()" :class="$mainStore.resultLayout != 'mobile' ? 'success-modal' : 'mobile-success-modal'">
      <transition name="modal-slide-up">
        <div class="modal-content" v-show="this.$alertStore.alertShow">
          <div>
            <img v-if="this.$alertStore.alertStatus == 'success'" src="/assets/svg/success.svg">
            <img v-if="this.$alertStore.alertStatus == 'error'" src="/assets/svg/fail.svg">
            <img v-if="this.$alertStore.alertStatus == 'info'" src="/assets/svg/info.svg">
            <img v-if="this.$alertStore.alertStatus == 'warn'" src="/assets/svg/warn.svg">
            <div class="title">{{ this.$alertStore.alertTitle }}</div>
            <div class="betsuccess-des" v-html="this.$alertStore.alertDesc"></div>
            <div class="btn confirm" :class="this.$alertStore.alertStatus" @click="close()">ตกลง</div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {},
  watch: {},

  methods: {
    close() {
      this.$alertStore.setAlertShow(false);
      this.$alertStore.setAlertStatus('');
      this.$alertStore.setAlertTitle('');
      this.$alertStore.setAlertDesc('');
    }
  },
};
</script>

<style>
</style>