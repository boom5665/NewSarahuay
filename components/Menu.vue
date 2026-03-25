<template>
    <div class="barmenu" :class="classList">
        <img v-if="imageSrc" :src="imageSrc">
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
        if (this.icon) this.getIcon();
    },
    methods: {
        getIcon() {
            try {
                const images = import.meta.glob('@/assets/icons/*.svg', { eager: true })
                const imagePath = `/assets/icons/${this.icon}`;
                if (images[imagePath]) {
                    this.imageSrc = images[imagePath].default
                } else {
                console.error(`Image not found: ${this.icon}`)
                }
            } catch (e) {
                console.error(`Error loading image: ${this.icon}`, e)
            }
        }
    }
}
</script>