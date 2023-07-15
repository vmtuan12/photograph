<script setup>
const props = defineProps(['condition'])
const emits = defineEmits(['exitModal']);
</script>

<template>
    <Transition name="fade">
        <div v-if="condition" class="bg-black/20 top-0 left-0 w-full h-full fixed z-50 flex items-center justify-center backdrop-blur" @click.self="$emit('exitModal')">
            <slot>

            </slot> 
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>