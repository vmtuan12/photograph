<script setup>
import { ref, computed } from "vue";

const props = defineProps([
    'placeholder', 
    'type', 
    'modelValue', 
    'borderRadius', 
    'borderColor',
    'borderWeight',
    'underlineColor',
    'underlineWeight',
    'noBorder',
    'error',
]);
const emit = defineEmits(['update:modelValue']);

const round = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
}

const border = {
    thin: 'border',
    medium: 'border-2',
}

const borderColor = {
    default: 'border-[#1d1d1d] focus:shadow-sm focus:shadow-[#1d1d1d]/70',
    blue: 'border-[#52a1f5] focus:shadow-sm focus:shadow-[#52a1f5]/70',
    success: 'border-[#39c0c8] focus:shadow-sm focus:shadow-[#39c0c8]/70',
    danger: 'border-[#f34971]'
}

const underline = {
    thin: 'border-b',
    medium: 'border-b-2',
}

const underlineColor = {
    default: 'border-[#1d1d1d]',
    blue: 'border-[#52a1f5]',
    success: 'border-[#39c0c8]'
}

const borderStyle = computed(() => {
    if(props.noBorder == true) {
        const underlineColorValue = underlineColor[props.underlineColor] !== undefined ? underlineColor[props.underlineColor] : underlineColor['default']
        const underlineWeightValue = underline[props.underlineWeight] !== undefined ? underline[props.underlineWeight] : underline['thin']
        return (underlineColorValue + ' ' + underlineWeightValue)
    } else {
        const borderRoundValue = round[props.borderRadius] !== undefined ? round[props.borderRadius] : round['md']
        const borderColorValue = borderColor[props.borderColor] !== undefined ? (props.error ? borderColor['danger'] : borderColor[props.borderColor]) : (props.error ? borderColor['danger'] : borderColor['default'])
        const borderWeightValue = border[props.borderWeight] !== undefined ? border[props.borderWeight] : border['medium']
        return (borderColorValue + ' ' + borderRoundValue + ' ' + borderWeightValue)
    }
});
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder" 
        :type="type"
        class="border-solid p-2.5 font-medium placeholder:text-gray-500"
        :class="borderStyle"
    />
</template>

<style scoped>
    textarea:focus, input:focus{
        outline: none;
    }

    input[type=file]::file-selector-button {
        display: none;
    }
</style>