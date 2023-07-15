<script setup>
import { ref } from 'vue';

const popupShowed = ref(false);
</script>

<template>
    <div class="relative flex flex-col items-end">
        <svg @click="popupShowed = !popupShowed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 cursor-pointer">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        <Transition name="bounce">
            <div v-if="popupShowed" class="bg-white flex flex-col space-y-3 text-[#1d1d1d] p-3 rounded-lg absolute z-10 w-fit mt-12 mr-1 shadow-md">
                <RouterLink to="/profile" @click="popupShowed = false">
                    <div class="flex items-center cursor-pointer space-x-2 transition-colors duration-200 ease-in-out hover:text-[#52a1f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <p class="font-medium">Profile</p>
                    </div>
                </RouterLink>
                <RouterLink to="/auth/login">
                    <div class="flex items-center cursor-pointer space-x-2 transition-colors duration-200 ease-in-out hover:text-[#52a1f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <p class="font-medium whitespace-nowrap">Sign out</p>
                    </div>
                </RouterLink>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
}
</style>