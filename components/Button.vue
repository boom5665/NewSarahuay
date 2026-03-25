<template>
    <div class="button" :class="classList">
        <img v-if="icon" :src="$getIcon(icon, 'svg')">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        classList: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            imageSrc: null
        }
    },
    mounted() {
    },
}
</script>