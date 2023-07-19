<script setup>
import { RouterLink } from 'vue-router';
import img from '../assets/not_found.svg'
import Button from '../components/UI/Button.vue'
</script>

<template>
    <div class="w-full h-screen bg-gradient-to-tr from-[#52a1f5] to-[#39c0c8] flex items-center justify-center">
        <div class="bg-white w-full sm:w-4/5 md:w-2/3 xl:w-1/2 h-2/3 max-w-5xl sm:rounded-2xl flex flex-col items-center justify-center space-y-3 pt-5">
            <img :src="img" class="h-[15rem] max-sm:h-[12rem]"/>
            <p class="text-[#52a1f5] font-bold text-4xl">Whoops!</p>
            <p class="text-xl text-gray-500 font-medium max-sm:text-sm text-center">Không có link này đâu. Ở đây chỉ có kỉ niệm của Tuấn với Phương thôi.</p>
            <RouterLink to="/">
                <Button border-radius="xl" padding="px-6 py-2">
                    Về nhà nào
                </Button>
            </RouterLink>
        </div>
    </div>
</template>