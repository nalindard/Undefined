<script setup>
import TrendingVideo from '@cmp/TrendingVideo.vue';

const main = ref()
const bar = ref()

const x_s = () => {
    main.value.style.fontSize = '6rem'
    bar.value.style.scale = '100%'
}
const x_o = () => {
    main.value.style.fontSize = '3rem'
    bar.value.style.scale = '112%'
}
const x_e = () => {
    main.value.style.fontSize = '6rem'
    bar.value.style.scale = '100%'
}
</script>

<template>
    <main class="w-full h-full px-4 pt-80 overflow-y-scroll overflow-x-hidden">
        <h2 ref="main" class="text-8xl pb-7 font-bold transition-all duration-700">Welcome Home...!</h2>
        <div v-dragscroll ref="bar" v-on:dragscrollstart="x_s" v-on:dragscrollmove="x_o" v-on:dragscrollend="x_e"
            class="w-full mb-7 p-7 bg-black bg-opacity-40 overflow-hidden cursor-move rounded-lg flex justify-center items-center  transition-all duration-700">
            <div class="aspect-video h-52 bg-slate-600 mx-7 cursor-auto" v-for="x in Array.from(Array(16).keys())"></div>
        </div>
        <div class="w-full  grid grid-cols-4 place-items-center">
            <TrendingVideo v-for="x in Array.from(Array(16).keys())" :shimmer="true" />
        </div>
    </main>
</template>

<style>
h1 {
    font-size: 72px;
    background: linear-gradient(to right, rgb(127, 229, 255), rgb(0, 174, 227));
    /* background: linear-gradient(to right, rgb(243, 168, 82), rgb(0, 0, 0)); */
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: -12px 7px 0px rgba(0, 0, 0, 0.25);
    text-shadow: -12px 7px 8px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-corner {
    display: none;
}

::-webkit-scrollbar-track {
    display: none;
    /* position: absolute; */
    /* background: red; */
}</style>