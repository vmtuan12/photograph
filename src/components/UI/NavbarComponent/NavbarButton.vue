<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps(['content', 'to', 'smallbar']);

const route = useRoute()

const routeMatched = computed(() => {
    if(route.fullPath === props.to) {
        return true
    } else {
        return false
    }
});
</script>

<template>
    <div 
        class="relative w-[200%] rounded-l-full group px-2"
        :class="routeMatched ? 'bg-[#f5f7fb] text-[#FF78C4]' : 'hover:bg-[#f5f7fb] hover:text-[#FF78C4] text-white'"
    >
        <RouterLink 
            :to="props.to"
            class="relative cursor-pointer flex items-center before:z-[-1] after:z[-1] group-hover:before:content-[''] group-hover:before:absolute group-hover:before:right-1/2 group-hover:before:w-[64px] group-hover:before:h-[64px] group-hover:before:-top-[64px] group-hover:before:rounded-full group-hover:before:shadow-[43px_40px_0_10px] group-hover:before:shadow-[#f5f7fb] group-hover:before:bg-transparent group-hover:after:content-[''] group-hover:after:absolute group-hover:after:right-1/2 group-hover:after:w-[64px] group-hover:after:h-[64px] group-hover:after:-bottom-[64px] group-hover:after:rounded-full group-hover:after:shadow-[43px_-40px_0_10px] group-hover:after:shadow-[#f5f7fb] group-hover:after:bg-transparent"
            :class="routeMatched ? 'before:absolute before:right-1/2 before:w-[64px] before:h-[64px] before:-top-[64px] before:rounded-full before:shadow-[43px_40px_0_10px] before:shadow-[#f5f7fb] before:bg-transparent after:absolute after:right-1/2 after:w-[64px] after:h-[64px] after:-bottom-[64px] after:rounded-full after:shadow-[43px_-40px_0_10px] after:shadow-[#f5f7fb] after:bg-transparent' : ''"
        >
            <div class="flex items-center justify-center min-w-[40px] h-10 relative z-[5]">

                <slot></slot>
            </div>
            <p class="font-bold text-base ml-2 relative py-4 mt-0.5">{{ content }}</p>
        </RouterLink>
    </div>
</template>