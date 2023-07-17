<script setup>
import Container from '../components/UI/Container.vue'
import mt from '../assets/profile/mt.jpg'
import hp from '../assets/profile/hp.jpg'
import comic1 from '../assets/profile/comic1.jpg'
import comic2 from '../assets/profile/comic2.jpg'
import comic3 from '../assets/profile/comic3.jpg'
import comic4 from '../assets/profile/comic4.jpg'
</script>

<template>
    <div class="grid grid-cols-3 max-[970px]:grid-cols-1 grid-rows-[repeat(x,max-content),1fr] gap-10 max-[970px]:gap-0 mb-6">
        <div class="bg-white shadow p-6 rounded-3xl space-y-3 flex flex-col items-center w-full slide-fade">
            <img :src="mt" class="w-32 lg:w-40 rounded-full shadow-md" />
            <p class="text-xl font-semibold text-center">Vũ Minh Tuấn</p>
            <div>
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#f34971]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                    </svg>
                    <p class="font-semibold mt-0.5">28/12/2003</p>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center relative p-10 text-[#f34971] zoom">
            <p class="text-lg font-bold">20/01/2023</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-32 h-32 pop">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </div>
        <div class="bg-white shadow p-6 rounded-3xl space-y-3 flex flex-col items-center w-full slide-fade">
            <img :src="hp" class="w-32 lg:w-40 rounded-full shadow-md" />
            <p class="text-xl font-semibold text-center">Trần Hà Phương</p>
            <div>
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#f34971]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                    </svg>
                    <p class="font-semibold mt-0.5">08/10/2003</p>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 grid-rows-[repeat(x,max-content),1fr]">
        <Container>
            <img :src="comic1" class="rounded-3xl w-full shadow transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[2px_3px_8px_0px] rotate"/>
        </Container>
        <Container>
            <img :src="comic2" class="rounded-3xl w-full shadow transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[2px_3px_8px_0px] rotate"/>
        </Container>
        <Container>
            <img :src="comic3" class="rounded-3xl w-full shadow transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[2px_3px_8px_0px] rotate"/>
        </Container>
        <Container>
            <img :src="comic4" class="rounded-3xl w-full shadow transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[2px_3px_8px_0px] rotate"/>
        </Container>
    </div>

    <p class="mt-4 font-semibold">Anh yêu em rất nhiều.</p>
</template>

<style scoped>
.slide-fade {
    animation: slide 1s ease-in-out;
    transition: all;
}

@keyframes slide {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.zoom {
    animation: zoom 1s ease-in-out;
}

.pop {
    animation: pop 1s infinite ease-in-out;
    animation-delay: 0.5s;
}

.rotate {
    animation: rotate 1s ease-in-out;
}

@keyframes zoom {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes pop {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
}

@keyframes rotate {
    from {
        opacity: 0;
        transform: rotateY(180deg);
    }
    to {
        opacity: 1;
        transform: rotateY(0deg);
    }
}
</style>