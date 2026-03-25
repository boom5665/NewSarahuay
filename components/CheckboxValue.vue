<template>
  <div class="checkbox-group">
    <input
        :id="inputID"
        type="checkbox"
        v-model="dataValue" 
        @change="$emit('updateData', $event.target.checked)"
        class="checkbox-input"
    />
    <label :for="inputID" class="checkbox-label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: {
        inputID: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: false
        }
  },
    data() {
        return {
            helper: '',
            showPassword: false,
            dataValue: false
        }
    }
}
</script>