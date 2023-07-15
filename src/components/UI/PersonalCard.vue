<script setup>
import img from '../../assets/person.svg'

const props = defineProps(['name', 'region']);
</script>

<template>
    <div class="w-full bg-white flex items-center space-x-2">
        <img :src="img" class="w-14"/>
        <div>
            <p class="font-bold">{{ name }}</p>
            <p class="">{{ region }}</p>
        </div>
    </div>
</template>