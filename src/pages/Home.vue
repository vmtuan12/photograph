<script setup>
import Container from "../components/UI/Container.vue"
import Modal from "../components/UI/Modal.vue"
import { ref, onMounted } from 'vue';
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
import pic_t4_1 from "../assets/t4/t4_img_1.jpg"
import pic_t4_2 from "../assets/t4/t4_img_2.jpg"
import vid_t4 from "../assets/t4/t4_vid.mp4"
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
import pic_t7_8 from "../assets/t7/t7_img_8.jpg"
import mthp from '../assets/profile/mthp.jpg'
import mthp_paint from '../assets/profile/mthp_paint.jpg'
import vcl from '../assets/profile/vcl.jpg'

const props = defineProps(['scrollPosition']);
const emits = defineEmits(['click']);

const t1 = ref(null);
const t2 = ref(null);
const t3 = ref(null);
const t4 = ref(null);
const t5 = ref(null);
const t6 = ref(null);
const t7 = ref(null);

const moveTo = (value) => {
    emits('click', value)
};

const modalOpened = ref(false);
const yes = ref(false)
const yesClicked = () => {
    modalOpened.value = true
    yes.value = true
}
const noClicked = () => {
    modalOpened.value = true
    yes.value = false
};

</script>

<template>
    <div class="fixed z-10 right-[38px] top-20 bg-white px-5 py-1 text-lg shadow-md font-semibold rounded-3xl flex items-center space-x-2 text-[#52a1f5] max-md:hidden">
        <p @click="moveTo(t1.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            1
        </p>
        <p @click="moveTo(t2.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            2
        </p>
        <p @click="moveTo(t3.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            3
        </p>
        <p @click="moveTo(t4.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            4
        </p>
        <p @click="moveTo(t5.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            5
        </p>
        <p @click="moveTo(t6.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            6
        </p>
        <p @click="moveTo(t7.offsetTop)" class="rounded-xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#52a1f5] hover:text-white hover:shadow-md hover:shadow-[#52a1f5]">
            7
        </p>
    </div>

    <div class="mt-16 font-bold text-gray-600 mb-8 space-x-2">
        <p class="inline">Nơi cất giữ kỉ niệm của Minh Tuấn và Hà Phương</p>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline text-[#f96300]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        </span>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-50 mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow">Tháng 1</p>
    <div ref="t1" class="relative"></div>
    <Container>
        <img :src="pic_t1" class="rounded-3xl transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 2</p>
    <div ref="t2" class="relative"></div>
    <div class="grid grid-cols-3 max-[480px]:grid-cols-1 grid-rows-[repeat(x,max-content),1fr] gap-10">
        <Container>
            <img :src="pic_t2_1" class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t2" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t2_2" class="rounded-3xl max-h-[700px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 3</p>
    <div ref="t3" class="relative"></div>
    <div class="space-y-4">
        <Container>
            <img :src="pic_t3_3" class="rounded-3xl transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <div class="grid grid-cols-5 max-md:grid-cols-2 grid-rows-[repeat(x,max-content),1fr] gap-4">
            <Container>
                <img :src="pic_t3_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
            <Container>
                <img :src="pic_t3_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
            </Container>
            <Container class="max-md:hidden">
                <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
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
        <Container class="min-[768.1px]:hidden">
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t3" type="video/mp4"/>
            </video>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 4</p>
    <div ref="t4" class="relative"></div>
    <Container>
        <img :src="pic_t4_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>
    <div class="grid grid-cols-2 max-md:grid-cols-1 max-[480px]:grid-cols-1 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t4" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t4_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 5</p>
    <div ref="t5" class="relative"></div>
    <div class="grid grid-cols-3 max-[480px]:grid-cols-1 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4">
        <Container>
            <img :src="pic_t5_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t5_2" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t5_3" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    <div class="grid grid-cols-3 max-[480px]:grid-cols-1 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4">
        <Container>
            <img :src="pic_t5_1" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t5_1" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <img :src="pic_t5_4" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
    </div>
    
    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 6</p>
    <div ref="t6" class="relative"></div>
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
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t6_1" type="video/mp4"/>
            </video>
        </Container>
        <Container>
            <video controls class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]">
                <source :src="vid_t6_2" type="video/mp4"/>
            </video>
        </Container>
    </div>

    <p class="text-xl font-semibold sticky top-20 z-[60] mb-4 bg-[#52a1f5] text-white w-fit px-4 py-2 rounded-3xl shadow mt-10">Tháng 7</p>
    <div ref="t7" class="relative"></div>
    <Container>
        <img :src="pic_t7_7" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
    </Container>
    <div class="grid grid-cols-3 grid-rows-[repeat(x,max-content),1fr] gap-4 mb-4 mt-4">
        <Container>
            <img :src="pic_t7_2" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
        </Container>
        <Container>
            <img :src="pic_t7_8" class="rounded-3xl max-h-[500px] transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-[5px_5px_10px_0px]"/>
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
    
    <div class="flex flex-col items-center mt-6">
        <p class="font-bold text-center text-gray-700">Tới đây hết r, để tương lai thêm tiếp nhé</p>
        <img :src="mthp" class="w-60 rounded-full shadow-lg"/>
    </div>

    <div class="flex items-center space-x-2 justify-center w-full mt-10">
        <p class="text-xl font-semibold text-gray-700">
            Hà Phương có lời nào muốn nói với Minh Tuấn không 😏
        </p>
    </div>
    <div class="w-full flex justify-evenly font-semibold text-lg">
        <p @click="yesClicked" class="cursor-pointer text-[#39c0c8] py-1 px-3 rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-[#39c0c8] hover:scale-110">Có</p>
        <p @click="noClicked" class="cursor-pointer text-[#f34971] py-1 px-3 rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-[#f34971] hover:scale-110">Không</p>
    </div>

    <div @click="moveTo(0)" class="fixed cursor-pointer z-[1] bottom-6 right-6 p-2 bg-[#52a1f5] rounded-full animate-bounce shadow-lg shadow-[#52a1f5]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-white rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
    </div>

    <Modal :condition="modalOpened" @exitModal="modalOpened = false">
        <div class="rounded-3xl bg-white flex justify-center items-center">
            <div class="text-2xl font-semibold text-[#39c0c8] p-4 flex flex-col items-center space-y-4" v-if="yes">
                <img :src="vcl" class="w-96 rounded-3xl"/>
                <p>Nói trực tiếp đi em</p>
            </div>
            <div class="text-2xl font-semibold text-[#f34971] p-4 text-center" v-else>
                <img :src="mthp_paint" />
                <p>Anh thì muốn nói anh yêu em rất nhiều</p>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
      
</style>