<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IconInput from '../components/UI/IconInput.vue';

const router = useRouter()

const email = ref(null);
const password = ref(null)
const wrongEmail = ref(false)
const wrongPassword = ref(false)

const signIn = () => {
    router.push('/auth/login')
};

</script>

<template>
    <div class="rounded-3xl w-4/5 max-[480px]:w-full shadow-md flex max-md:flex-col max-w-5xl overflow-hidden relative max-md:bg-gradient-to-tr max-md:from-[#52a1f5] max-md:to-[#39c0c8]">
        <div class="text-center max-md:hidden space-y-3 bg-gradient-to-tr from-[#52a1f5] to-[#39c0c8] text-white py-12 px-10 w-2/5 flex flex-col items-center justify-center">
            <p class="font-bold text-3xl">Welcome to MTHP</p>
            <p class="font-light">Fill in your information and have an amazing ride with us</p>
            <RouterLink to="/auth/login">
                <button class="rounded-full font-medium transition-all duration-300 ease-in-out px-5 py-2 border-2 border-solid border-white hover:px-7 hover:tracking-wider">
                    Sign in
                </button>
            </RouterLink>
        </div>
        <div class="py-4 text-center text-white font-bold text-2xl md:hidden">
            Welcome
        </div>
        <form class="px-20 rounded-tr-[3rem] max-md:px-16 max-sm:px-10 max-[480px]:px-4 py-12 max-md:py-6 space-y-4 bg-white w-3/5 max-md:w-full flex flex-col items-center">
            <p class="text-3xl max-md:text-2xl text-[#39c0c8] font-bold text-center">Register</p>
            <div class="w-full">
                <p class="font-bold text-[#1d1d1d] text-sm">Username</p>
                <IconInput border-color="success" type="text" placeholder="Enter your username...">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </IconInput>
            </div>
            <div class="w-full">
                <p class="font-bold text-[#1d1d1d] text-sm">Email</p>
                <IconInput border-color="success" type="email" placeholder="Enter your email...">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </IconInput>
            </div>
            <div class="w-full">
                <p class="font-bold text-[#1d1d1d] text-sm">Password</p>
                <IconInput border-color="success" autocomplete="on" type="password" placeholder="Enter your password...">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </IconInput>
            </div>
            <div class="w-full">
                <p class="font-bold text-[#1d1d1d] text-sm">Confirm password</p>
                <IconInput border-color="success" autocomplete="on" type="password" placeholder="Confirm your password...">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </IconInput>
            </div>
            <button 
                @click.prevent="signIn"
                class="relative max-md:w-full max-md:rounded-lg w-fit group font-semibold text-white flex justify-center items-center bg-[#39c0c8] overflow-hidden px-10 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#2eccd4] active:bg-[#23d0d9]"
            >
                <p class="transition-transform duration-300 ease-in-out md:group-hover:-translate-x-28">Sign up</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6 ml-1 absolute transition-transform duration-300 ease-in-out translate-x-28 group-hover:translate-x-0 max-md:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </button>
            <p class="md:hidden">
                Familiar with us?
                <RouterLink to="/auth/login">
                    <span class="underline underline-offset-2 text-[#52a1f5] cursor-pointer">Sign in</span>
                </RouterLink>
            </p>
        </form>
    </div>
</template>