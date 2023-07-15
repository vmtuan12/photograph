<script setup>
const props = defineProps(['content', 'isSmallBar']);
</script>

<template>
    <div class="flex items-center w-full">
        <div class="peer flex flex-wrap relative w-full">
            <slot></slot>
        </div>
        <span v-show="isSmallBar" class="max-sm:hidden peer-hover:visible invisible absolute text-center border-2 border-solid ml-14 border-[#39c0c8] shadow bg-white rounded px-1 text-[#39c0c8] font-semibold text-sm z-[1]">
            {{ content }}
        </span>
    </div>
</template>