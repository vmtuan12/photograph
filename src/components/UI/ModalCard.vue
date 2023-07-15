<script setup>
const emits = defineEmits(['exitModal']);
</script>

<template>
    <div class="bg-white p-2">
        <div class="w-full flex items-center justify-end">
            <svg @click="$emit('exitModal')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 cursor-pointer text-[#f34971] hover:text-[#f34971] active:text-[#ee1346]">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
            </svg>
        </div>
        <slot name="title"></slot>
        <slot name="body"></slot>
    </div>
</template>