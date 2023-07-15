<script setup>
import { ref } from 'vue';

const props = defineProps(['statistic', 'category', 'color']);

const colorArray = ref({
    primary: 'text-[#52a1f5]',
    success: 'text-[#39c0c8]',
    danger: 'text-[#f34971]',
    neon: 'text-[#6c47ff]',
    orange: 'text-[#f96300]',
    amber: 'text-[#f5c900]',
    coral: 'text-[#ff9382]',
});
</script>

<template>
    <div class="bg-white w-full py-7 px-8 max-md:px-6">
        <div class="w-full flex items-center mb-2">
            <slot></slot>
        </div>
        <p 
            class="font-semibold text-4xl"
            :class="colorArray[color] !== undefined ? colorArray[color] : colorArray['primary']"
        >
            {{ statistic }}
        </p>
        <p class="text-gray-600 font-medium">{{ category }}</p>
    </div>
</template>