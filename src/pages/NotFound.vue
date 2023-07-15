<script setup>
import { RouterLink } from 'vue-router';
import img from '../assets/notfound.svg'
import Button from '../components/UI/Button.vue'
</script>

<template>
    <div class="w-full h-screen bg-gradient-to-tr from-[#52a1f5] to-[#39c0c8] flex items-center justify-center">
        <div class="bg-white w-full sm:w-4/5 md:w-2/3 xl:w-1/2 h-2/3 max-w-5xl sm:rounded-2xl flex flex-col items-center justify-center space-y-3 pt-5">
            <img :src="img" class="h-[15rem]"/>
            <p class="text-[#52a1f5] font-bold text-4xl">Whoops!</p>
            <p class="text-xl text-gray-500">Could not find the page you are looking for!</p>
            <RouterLink to="/">
                <Button border-radius="xl" padding="px-6 py-2">
                    Back to home
                </Button>
            </RouterLink>
        </div>
    </div>
</template>