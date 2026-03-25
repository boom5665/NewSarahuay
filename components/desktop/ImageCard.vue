<template>
  <div class="imgcard" >
    <div class="imgcard-card">
      <div class="imgcard-inner-card">
        <div class="imgcard-inner-card-img">
          <img :src="obj.imgSrc" />
        </div>

        <div class="imgcard-inner-card-title">
          <div class="group-text">
            <span class="sub-title">{{ obj.subtitle }}</span>
          </div>
        </div>
      </div>

      <!-- date -->
      <div class="date">
        {{ obj.date }} <span class="taxt">{{ obj.taxt }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  obj: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.button.imgcard {
  margin: 0.375rem;
}
</style>
