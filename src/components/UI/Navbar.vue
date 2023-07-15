<script setup>
import NavbarButton from './NavbarComponent/NavbarButton.vue';

const emit = defineEmits(['handleBarSize']);
const props = defineProps(['smallbar']);
</script>

<template>
    <div 
        id="sidebar" 
        class="max-h-screen sticky top-0 bg-[#52a1f5] sm:border-l-8 border-solid border-[#52a1f5] transition-all duration-500 overflow-hidden" 
        :class="smallbar ? 'w-16 max-sm:w-0' : 'w-60 max-sm:w-full'"
    >
        <div class="w-full flex justify-end p-4">
            <svg 
                @click="$emit('handleBarSize')" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                class="w-6 h-6 relative z-10 cursor-pointer text-white transition-transform duration-1000 ease-in-out"
                :class="smallbar ? '[transform:rotateY(180deg)]' : ''"
            >
                <path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
        </div>
        <ul 
            class="relative top-0 left-0 w-full flex flex-col"
        >
            <NavbarButton to="/" content="Nhà">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </NavbarButton>

        </ul>
    </div>
</template>

<style scoped>
    ::-webkit-scrollbar {
        display: none;
    }
</style>