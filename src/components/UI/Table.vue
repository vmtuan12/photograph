<script setup>
import { onUnmounted, ref } from 'vue';

/**
 * header is an array, each element is an object with 4 params
 * content: String
 * colWidth: String with format 'min-w-[Apx(or Arem)]' with A is a number (e.g. 'min-w-[4rem]')
 * align: String ('text-center', 'text-justify', 'text-left', 'text-right')
 * key: String, this is used to map the key and get data from the data prop
 * e.g. props.data = [{e: '123'}], then key is 'e'
 */

 /**
  * data is an array, each element is an object with params matched with keys in header
  * value of each key can be any type
  */

  /**
   * max-height is an String with format 'max-h-[Apx(or Arem)]' with A is a number (e.g. 'max-h-[10rem]')
   */
const props = defineProps([
    'header',
    'data', 
    'maxHeight',
    'name',
    'rowMinHeight'
]);



const table = ref()
const scrollPosition = ref(0)

const handleScroll = () => {
    scrollPosition.value = table.value.scrollTop
}

window.addEventListener('scroll', handleScroll)

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
});
</script>

<template>
    <div class="flex flex-col space-y-4 align-middle w-full">
        <div class="flex items-center justify-between">
            <p class="text-xl font-bold text-[#52a1f5]">{{ name }}</p>
            
        </div>
        <div 
            @scroll="handleScroll"
            ref="table" 
            class="w-full overflow-y-scroll rounded-[0.25rem] bg-white"
            :class="maxHeight"
        >
            <table class="w-full">
                <thead 
                    class="sticky w-full top-0 z-0 font-semibold text-lg rounded-3xl transition-all ease-in-out duration-300"
                    :class="scrollPosition > 0 ? 'text-white bg-[#52a1f5]' : 'bg-white text-[#52a1f5] border-b-[3px] border-[#f5f7fb] border-solid'"
                >
                    <th v-for="item in header" :key="item.key" :class="`${item.align} ${item.colWidth}`">
                        {{ item.content }}
                    </th>
                    <th class="w-fit text-center">
                        <slot name="action-header"></slot>
                    </th>
                </thead>
                <tbody class="text-base font-medium">
                    <tr v-for="row in data" :key="row" class="hover:bg-[#52a1f5]/30 duration-300 ease-in-out transition-colors border-b-[3px] border-[#f5f7fb] border-solid last:border-none">
                        <td v-for="col in header" :key="col.key" :class="`${col.align} ${rowMinHeight}`">
                            {{ row[col.key] }}
                        </td>
                        <td class="flex items-center justify-center">
                            <slot name="action"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
table th:first-child{
    border-radius:4px 0 0 4px;
}

table th:last-child{
    border-radius:0 4px 4px 0;
}

table td, th {
    padding: 0.425rem 0.75rem;
}
</style>