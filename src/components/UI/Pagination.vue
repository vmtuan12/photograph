<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps(['totalPage', 'currentPage'])
const emits = defineEmits(['navigate'])

let screenWidth = ref(window.innerWidth)

const handleScreenResizing = () => {
    screenWidth.value = window.innerWidth
}

onMounted(() => {
    nextTick(() => {
        window.addEventListener('resize', handleScreenResizing)
    })
})


const numberOfDisplayedPage = computed(() => {
    if (screenWidth.value <= 640) {
        return 3
    } else if (screenWidth.value <= 768) {
        return 5
    } else if (screenWidth.value <= 1024) {
        return 7
    } else {
        return 10
    }
})

const pageArray = computed(() => {
    const firstIndex = Math.floor((props.currentPage - 1)/numberOfDisplayedPage.value)*numberOfDisplayedPage.value + 1
    let lastIndex = firstIndex + numberOfDisplayedPage.value - 1
    if(lastIndex > props.totalPage) {
        lastIndex = props.totalPage
    }
    const result = []
    for(let i = firstIndex; i <= lastIndex; i++) {
        result.push(i)
    }
    return result
})

const changePage = (page) => {
    if(1 <= page && page <= props.totalPage) {
        emits('navigate', page)
    }
};

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleScreenResizing)
});
</script>

<template>
    <div class="flex items-center space-x-2">
        <svg @click="changePage(currentPage - 1)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-200 hover:text-white hover:bg-[#52a1f5] p-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <div class="flex items-center space-x-2">
            <button
                v-if="pageArray[0] !== 1"
                class="py-1 px-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:text-[#52a1f5]" 
                @click="changePage(1)"
            >
                1
            </button>
            <p v-if="pageArray[0] !== 1" class="font-semibold px-1">...</p>
            <button 
                v-for="index in pageArray" 
                class="py-1 px-3 rounded-md font-semibold" 
                :class="currentPage === index ? 'transition-all duration-300 ease-in-out bg-[#52a1f5] text-white shadow-md shadow-[#52a1f5]' : ' hover:text-[#52a1f5]'"
                @click="changePage(index)"
            >
                {{ index }}
            </button>
            <p v-if="pageArray[pageArray.length - 1] !== totalPage" class="font-semibold px-1">...</p>
            <button
                v-if="pageArray[pageArray.length - 1] !== totalPage"
                class="py-1 px-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:text-[#52a1f5]" 
                @click="changePage(totalPage)"
            >
                {{ totalPage }}
            </button>
        </div>
        <svg @click="changePage(currentPage + 1)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-200 hover:text-white hover:bg-[#52a1f5] p-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
</template>