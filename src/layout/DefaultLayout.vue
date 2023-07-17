<script setup>
import { computed, onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/UI/Navbar.vue';
import ProfileDropdown from '../components/UI/ProfileDropdown.vue'

const smallBar = ref(false)
const route = useRoute()

const main = ref()
const scrollPosition = ref(0)

const handleScroll = () => {
    scrollPosition.value = main.value.scrollTop
}

window.addEventListener('scroll', handleScroll)

const moveTo = (value) => {
    console.log(value);
    main.value.scrollTop = value
}

onBeforeMount(() => {
    if(window.innerWidth <= 640) {
        smallBar.value = true
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

watch(() => route.fullPath, () => {
    main.value.scrollTop = 0
});

</script>

<template>
    <div class="flex w-full h-full relative">
        <Navbar @handle-bar-size="smallBar = !smallBar" :smallbar="smallBar" />
        <div 
            ref="main"
            id="main"
            class="relative z-0 min-h-screen transition-all duration-500 ease-in-out  sm:px-4 pb-4 overflow-x-hidden max-h-screen"
            :class="smallBar ? 'px-2 sm:px-8 w-[calc(100%-64px)] max-sm:w-full' : 'w-0 sm:px-8 sm:w-[calc(100%-240px)]'"
            @scroll="handleScroll"
        >
            <div 
                class="sticky z-30 w-full top-0 flex items-center justify-between py-3 rounded-b-3xl transition-all duration-500 ease-in-out"
                :class="scrollPosition > 0 ? 'bg-[#52a1f5] text-white px-5' : 'text-[#52a1f5]'"
            >
                <p class="text-xl font-bold">Tuấn và Phương</p>
                <ProfileDropdown />
            </div>
            <svg 
                @click="smallBar = !smallBar"
                v-if="smallBar"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                stroke-width="2" stroke="currentColor" 
                class="w-8 h-8 fixed top-52 z-[1] rounded-r-lg shadow-md p-1.5 text-white bg-[#52a1f5] cursor-pointer sm:hidden"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
            <router-view @click="moveTo" :scroll-position="scrollPosition">
            </router-view>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#main {
    scroll-behavior: smooth;
}
</style>