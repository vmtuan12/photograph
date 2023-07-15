<script setup>
import { ref, computed, onMounted } from "vue";

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
    'autocomplete'
]);
const emit = defineEmits(['update:modelValue', 'focusout']);

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
    danger: 'border-[#f34971] focus:shadow-sm focus:shadow-[#f34971]/70'
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

const defaultIconColor = computed(() => {
    if (props.borderColor ===  'blue') {
        return 'text-[#52a1f5]'
    } else if (props.borderColor ===  'success') {
        return 'text-[#39c0c8]'
    } else if (props.borderColor === 'danger') {
        return 'text-[#f34971]'
    } else {
        return 'text-[#1d1d1d]'
    }
});

const main = ref();
onMounted(() => {
    console.log(main.value.children[1]);
});

</script>

<template>
    <div 
        class="flex items-center px-3 py-2 space-x-2 border-solid font-medium"
        :class="borderStyle"
        ref="main"
    >
        <div class="border-r border-solid border-gray-400 pr-1.5" :class="defaultIconColor">
            <slot></slot>
        </div>
        <input
            :autocomplete="autocomplete"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder" 
            :type="type"
            @focusout="$emit('focusout')"
            class="placeholder:text-gray-500 w-full"
        />
    </div>
</template>

<style scoped>
    textarea:focus, input:focus{
        outline: none;
    }

    input[type=file]::file-selector-button {
        display: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
</style>