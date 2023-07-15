<script setup>
import Container from "../components/UI/Container.vue"
import { ref } from 'vue';
import pic_t1 from "../assets/t1/t1.jpg"
import pic_t2_1 from "../assets/t2/t2_img_1.jpg"
import pic_t2_2 from "../assets/t2/t2_img_2.jpg"
import vid_t2 from "../assets/t2/t2_vid.mp4"
import pic_t3_1 from "../assets/t3/t3_img_1.jpg"
import pic_t3_2 from "../assets/t3/t3_img_2.jpg"
import pic_t3_3 from "../assets/t3/t3_img_3.jpg"
import pic_t3_4 from "../assets/t3/t3_img_4.jpg"
import pic_t3_5 from "../assets/t3/t3_img_5.jpg"
import vid_t3 from "../assets/t3/t3_vid.mp4"
import pic_t4 from "../assets/t4/t4_img_1.jpg"
import pic_t5_1 from "../assets/t5/t5_img_1.jpg"
import pic_t5_2 from "../assets/t5/t5_img_2.jpg"
import pic_t5_3 from "../assets/t5/t5_img_3.jpg"
import pic_t5_4 from "../assets/t5/t5_img_4.jpg"
import vid_t5_1 from "../assets/t5/t5_vid_1.mp4"
import vid_t5_2 from "../assets/t5/t5_vid_2.mp4"
import pic_t6_1 from "../assets/t6/t6_img_1.jpg"
import pic_t6_2 from "../assets/t6/t6_img_2.jpg"
import pic_t6_3 from "../assets/t6/t6_img_3.jpg"
import pic_t6_4 from "../assets/t6/t6_img_4.jpg"
import vid_t6_1 from "../assets/t6/t6_vid_1.mp4"
import vid_t6_2 from "../assets/t6/t6_vid_2.mp4"
import pic_t7_1 from "../assets/t7/t7_img_1.jpg"
import pic_t7_2 from "../assets/t7/t7_img_2.jpg"
import pic_t7_3 from "../assets/t7/t7_img_3.jpg"
import pic_t7_4 from "../assets/t7/t7_img_4.jpg"
import pic_t7_5 from "../assets/t7/t7_img_5.jpg"
import pic_t7_6 from "../assets/t7/t7_img_6.jpg"
import pic_t7_7 from "../assets/t7/t7_img_7.jpg"

const emits = defineEmits(['click'])

const data = ref(null);


</script>

<template>
    <!-- <button @click="$emit('click')">
        123
    </button> -->
    <p class="text-xl font-semibold sticky top-20 z-50 mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow">Tháng 1</p>
    <Container>
        <img :src="pic_t1" class="rounded-3xl transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 2</p>
    <div class="grid grid-cols-3 grid-rows-[repeat(x,max-content),1fr] gap-10">
        <Container>
            <img :src="pic_t2_1" class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls autoplay class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t2" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t2_2" class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 3</p>
    <div class="space-y-4">
        <Container>
            <img :src="pic_t3_3" class="rounded-3xl transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <div class="grid grid-cols-5 grid-rows-[repeat(x,max-content),1fr] gap-4">
            <Container>
                <img :src="pic_t3_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
            <Container>
                <img :src="pic_t3_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
            <Container>
                <video controls autoplay class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                    <source :src="vid_t3" type="video/mp4"/>
                </video>
            </Container>
            <Container>
                <img :src="pic_t3_4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
            <Container>
                <img :src="pic_t3_5" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
        </div>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 4</p>
    <Container>
        <img :src="pic_t4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 5</p>
    <div class="grid grid-cols-3 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4">
        <Container>
            <img :src="pic_t5_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls autoplay class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t5_2" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t5_3" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    <div class="grid grid-cols-3 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4">
        <Container>
            <img :src="pic_t5_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls autoplay class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t5_1" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t5_4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    
    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 6</p>
    <Container>
        <img :src="pic_t6_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>
    <div class="grid grid-cols-3 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <img :src="pic_t6_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t6_3" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t6_4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    <div class="grid grid-cols-2 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <video controls autoplay class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t6_1" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <video controls autoplay class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t6_2" type="video/mp4"/>
            </video>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 7</p>
    <Container>
        <img :src="pic_t7_7" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>
    <div class="grid grid-cols-2 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <img :src="pic_t7_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t7_3" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    <div class="grid grid-cols-2 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <img :src="pic_t7_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t7_4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    <div class="grid grid-cols-2 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <img :src="pic_t7_5" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t7_6" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
</template>

<style scoped>
      
</style>