<template>
    <div style="display: flex;">
        <div class="custom-input-gruop" v-if="type == 'text'" :class="inputStatus">
            <label :for="inputID" class="label">{{ label }}</label>
            <img class="icon" v-if="icon" :src="$getIcon(icon, 'svg')">
            <input 
                autocomplete="false"
                :id="inputID" 
                type="text" 
                v-model="dataValue" 
                @input="updateValue" 
                :placeholder="placeholder" 
                :class="{hasIcon : icon}"
            >
            <label v-if="helperText != ''" class="helper" :for="inputID">{{ helperText }}</label>
        </div>
        <div class="custom-input-gruop" v-if="type == 'password'" :class="inputStatus">
            <label :for="inputID" class="label">{{ label }}</label>
            <img class="icon" v-if="icon" :src="$getIcon(icon, 'svg')">
            <input 
                autocomplete="false"
                :id="inputID" 
                type="text" 
                v-model="dataValue" 
                @input="updateValue" 
                :placeholder="placeholder"
                class="password"
                :class="{hasIcon : icon, showPass: !showPassword}"
            >
            <img 
                class="icon eyes" 
                :src="showPassword ? $getIcon('svg/hidepass.svg', 'svg') : $getIcon('svg/showpass.svg', 'svg')" 
                @click="showPassword = !showPassword"
            >
            <label v-if="helperText != ''" class="helper" :for="inputID">{{ helperText }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        icon: {
            type: String,
            required: false,
        },
        inputID: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        inputStatus: {
            type: String,
            required: false,
            default: ''
        },
        helperText: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            showPassword: false,
            dataValue: ''
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('updateData', event.target.value)
        }
    }
}
</script>