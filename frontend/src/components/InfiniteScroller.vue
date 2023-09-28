<script setup>
import { useInfiniteScroll } from '@vueuse/core'

const el = ref(null)
const data = ref([1, 2, 3, 4, 5, 6])

useInfiniteScroll(
    el,
    () =>
    {
        console.log(`load more data 💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙 !`);
        data.value.push(...data.value)
    },
    { distance: 10 }
)
</script>

<template>
    <div ref="el" class="w-full h-full bg-red-700 overflow-y-scroll">
        <slot>
            <div v-for="item in data">
                {{ item }}
            </div>
        </slot>
        <!-- <slot ref=""></slot> -->
    </div>
</template>