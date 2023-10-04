<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'
import TrendingVideo from '@cmp/TrendingVideo.vue';
import PageGap from '@cmp/app_components/PageGap.vue';
import PageTitle from '@cmp/PageTitle.vue';

const videoStore = useVideoStore()
const { trendingList } = storeToRefs(videoStore)
const { getTrendings } = videoStore

onMounted(() => {
    getTrendings()
})
</script>

<template>
    <div class="overflow-y-scroll overflow-x-hidden w-full h-full">
        <!-- <div class="h-96"></div> -->
        <PageGap />

        <PageTitle>
            Trending
        </PageTitle>
        <!-- <h2 class="title text-primary bg-base-300 hover:bg-opacity-20 duration-200 sticky top-0 py-7 backdrop-blur-xl z-[2] px-2">Trending</h2> -->

        <!-- {{ trendingList }} -->
        <!-- <div class="grid grid-cols-4 justify-items-center content-center w-full px-2 pt-4">
        </div> -->
        <div class="w-full">
            <!-- <TrendingVideo v-if="feed.length < 1" v-for="x in Array.from(Array(16).keys())" :shimmer="true" /> -->
            <transition-group tag="div" name="list" appear
                class="w-full grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:sm:grid-cols-3 justify-items-center px-2 pt-4">
                <!-- <TrendingVideo v-for="x in feed" :data="x" :showProfilePic="true" :key="x?.url" /> -->
                <TrendingVideo v-for="video in trendingList" :data="video" :show-profile-pic="true" :key="video?.url"/>
            </transition-group>
        </div>
    </div>
</template>
