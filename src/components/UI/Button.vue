<script setup>
import { ref } from "vue";

const props = defineProps(['bgColor', 'borderRadius', 'fontWeight', 'padding', 'fontSize']);
const emit = defineEmits(['click']);

const round = ref({
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xxl: 'rounded-2xl',
    xxxl: 'rounded-3xl',
    full: 'rounded-full'
})

const colors = ref({
    primary: 'bg-[#52a1f5] hover:bg-[#3d96f5] active:bg-[#2d8ef7] text-white',
    success: 'bg-[#39c0c8] hover:bg-[#2eccd4] active:bg-[#23d0d9] text-white',
    danger: 'bg-[#f34971] hover:bg-[#ff3564] active:bg-[#f71b4e] text-white',
    neon: 'bg-[#6c47ff] hover:bg-[#5e36ff] active:bg-[#5f37ff] text-white',
    orange: 'bg-[#f96300] hover:bg-[#ff781d] active:bg-[#fe7113] text-white'
});

const weight = ref({
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
});

const fontsize = ref({
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
    xxxl: 'text-3xl',
    xxxxl: 'text-4xl',
});
</script>

<template>
    <button
        @click="$emit('click')"
        class="font-semibold text-white transition-all duration-200 ease-in-out flex items-center gap-1 hover:[transform:translateY(-2px)]"
        :class="colors[bgColor] !== undefined ? colors[bgColor] : colors['primary'],
                round[borderRadius] !== undefined ? round[borderRadius] : round['md'], 
                weight[fontWeight] !== undefined ? weight[fontWeight] : weight['normal'], 
                padding !== undefined ? padding : 'px-3 py-2',
                fontsize[fontSize] !== undefined ? fontsize[fontSize] : fontsize['base']"
    >
        <slot></slot>
    </button>
</template>