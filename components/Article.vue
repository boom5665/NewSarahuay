<template>
    <div class="article">
        <div class="article-card" :class="size" :style="`background-image: url('${this.obj.imgSrc}')`">
            <div class="article-inner-card">
                <div class="article-inner-card-title">
                    <img v-if="icon" :src="$getIcon(icon, 'flags')">
                    <div class="title">{{ obj.title }}</div>
                </div>
                <Button :classList="'secondary'" :text="btnText" @click="showAlert()" />
            </div>
        </div>
    </div>

</template>

<script>

export default {
    props: {
        obj: {
            type: Object,
            required: true,
            default: {}
        },
        btnText: {
            type: String,
            required: false,
            default: 'อ่าน'
        },
        size: {
            type: String,
            required: false,
        },
        textAlert: {
            type: String,
            required: false,
            default: "Default text alert",
        },
        icon: {
            type: String,
            required: false
        },
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        showAlert(message = this.textAlert) {
            console.log(message);
            
            this.$alertModalToggle("error", this.$t("fail"), message);
        },
    }
}
</script>

<style scoped lang="scss">
.button {
    min-width: 14.438rem;
    height: 3rem;
}
</style>


   <!-- <Article
      :size="'big'"
      :key="article.id"
      :obj="article"
      v-for="article in articalData"
    /> -->