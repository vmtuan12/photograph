<script setup>

</script>

<template>
    <div class="w-full h-screen bg-[url('/src/assets/login_bg.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
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
</style>