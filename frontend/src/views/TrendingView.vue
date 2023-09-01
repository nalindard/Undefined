<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'
import TrendingVideo from '../components/TrendingVideo.vue';

const videoStore = useVideoStore()
const { trendingList } = storeToRefs(videoStore)
const { getTrendings } = videoStore

onMounted(() => {
    console.log(`Mounted Player`)
    getTrendings()
})
</script>

<template>
    <div class="overflow-y-scroll w-full h-full">
        <div class="h-96"></div>
        <h2 class="title text-cyan-400 sticky top-0 shadow-sm py-7 backdrop-blur-xl z-[2] px-2">Trending</h2>
        <!-- {{ trendingList }} -->
        <div class="grid grid-cols-4 justify-items-center content-center w-full px-2 pt-4">
            <TrendingVideo v-for="video in trendingList" :data="video" :show-profile-pic="true"/>
        </div>
    </div>
</template>
