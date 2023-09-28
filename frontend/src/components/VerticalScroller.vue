<script setup>
const props = defineProps({
    title: String,
    showTitle: Boolean,
})

const main = ref()
const bar = ref()

const x_s = () =>
{
    main.value.style.fontSize = '6rem'
    bar.value.style.scale = '100%'
}
const x_o = () =>
{
    main.value.style.fontSize = '1.76rem'
    bar.value.style.scale = '112%'
}
const x_e = () =>
{
    main.value.style.fontSize = '2.25rem'
    bar.value.style.scale = '100%'
}
</script>

<template>
    <div class="w-full h-full overflow-y-scroll overflow-x-hidden">
        <h2 v-show="showTitle" ref="main" class="text-4xl pb-7 font-bold transition-all duration-700 text-base-100">
            {{ title || 'undefined !' }}
        </h2>
        <div v-dragscroll ref="bar" v-on:dragscrollstart="x_s" v-on:dragscrollmove="x_o" v-on:dragscrollend="x_e"
            class="w-full mb-7 py-4 bg-base-300 bg-opacity-40 overflow-hidden cursor-move rounded-lg flex justify-start items-center  transition-all duration-700">

            <slot>
                <div class="aspect-video h-32 bg-base-200 bg-opacity-25 mx-2 cursor-auto rounded"
                    v-for="x in Array.from(Array(8).keys())"></div>
            </slot>

        </div>
    </div>
</template>