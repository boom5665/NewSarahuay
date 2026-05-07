<template>
  <div class="imgcard">
    <div class="imgcard-card">
      <div class="imgcard-inner-card">

        <div class="imgcard-inner-card-img">
          <img :src="obj.imgSrc" />
        </div>

        <div class="imgcard-inner-card-title">
          <div class="group-text">

            <div v-if="loading" class="sk-line w40"></div>

            <span v-else class="sub-title">
              {{ obj.subtitle }}
            </span>

          </div>
        </div>
      </div>

      <!-- date -->
      <div class="date">

        <div v-if="loading" class="sk-line w20"></div>

        <span v-else>
          <span>
            <img class="clock" src="/icon/clock.svg" alt="">
            {{ obj.date }}
          </span>

          <span class="taxt">
            {{ obj.taxt }}
          </span>
        </span>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  obj: {
    type: Object,
    default: () => ({})
  },

  loading: {
    type: Boolean,
    default: false
  }
})
</script>