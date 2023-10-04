<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'
import TrendingVideo from '@cmp/TrendingVideo.vue';
// import VerticalScroller from '@cmp/VerticalScroller.vue';
import PageGap from '@cmp/app_components/PageGap.vue';
import PageTitle from '@cmp/PageTitle.vue';
import { desktopMod } from '../../config.mjs'

const videoStore = useVideoStore()
const { feed } = storeToRefs(videoStore)
const { updateFeed } = videoStore

const badNetwork = ref(false)


onMounted(() => {
    try {
        updateFeed()
    } catch (error) {
        console.log(error);
    }

    setTimeout(() => {
        badNetwork.value = feed.value?.length < 1 ? true : false
    }, 10000);

    // ------------------------RELOAD APP------------------------
    // WindowReloadApp()
})

</script>

<template>
    <main class="w-full h-full overflow-y-scroll overflow-x-hidden">
        <!-- <div class="h-96"></div> -->
        <PageGap />
        <!-- <h2
            class="title text-primary bg-base-300 hover:bg-opacity-20 duration-200 sticky top-0 py-7 backdrop-blur-xl z-[2] px-2">
            Your feed
        </h2> -->

        <PageTitle>
            Your feed
        </PageTitle>

        <h2 v-show="badNetwork" class="text-4xl font-semibold text-primary-focus pl-4 my-12">
            No connection ?
        </h2>
        <!-- <div>
            <VerticalScroller :show-title="true"></VerticalScroller>
        </div> -->

        <!-- <keep-alive> -->
            <div class="w-full">
                <h4 v-show="feed.length < 1" class="text-xl pl-4">Sub some channels to have a feed !</h4>
                <transition-group tag="div" name="list" appear class="w-full grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:sm:grid-cols-3 justify-items-center px-2 pt-4">
                    <TrendingVideo v-show="feed.length < 1" v-for="x in Array.from(Array(16).keys())" :shimmer="true" :key="Math.random()"/>
                    <TrendingVideo v-for="x in feed" :data="x" :showProfilePic="true" :key="Math.random()"/>
                </transition-group>
            </div>
        <!-- </keep-alive> -->

        <!-- <div>{{ feed }}</div> -->
    </main>
</template>

<style>
* {
    user-select: none;
}

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
}

</style>