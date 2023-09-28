<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
// import TrendingVideo from './.vue';
// const TrendingVideo = defineAsyncComponent(()=> import('@cmp/TrendingVideo.vue'))
const RecommendedVideo = defineAsyncComponent(() => import('@cmp/recommended_components/RecommendedVideo.vue'))


const videoStore = useVideoStore()
const { getRecommended, getRelated } = storeToRefs(videoStore)
const { setComments } = videoStore

const vidlist = ref()
const showTitle = false

const props = defineProps({
    type: String,
    displayInLine: Boolean
})

watch(() => getRecommended.value, () =>
{


    // onMounted(() =>
    // {
    console.log(`Fixing rexxomend system`);
    if (props.type === 'related')
    {
        vidlist.value = getRelated.value
    } else if (props.type === 'recommended')
    {
        vidlist.value = getRecommended.value
    } else
    {
        console.log(`Error !`);
    }
    // })
})

</script>

<template>
    <div class="min-h-12 h-full w-full grid place-items-center relative"
        :class="displayInLine ? 'grid-cols-5 overflow-y-scroll' : 'grid-cols-1 overflow-x-scroll'">
        <!-- {{ vidlist }} -->
        <h2 v-show="showTitle" class="text-xl mb-4 w-full sticky top-0 z-10 rounded py-2 pl-4">Discover more here...</h2>

        <hr>

        <RecommendedVideo v-for="vid in vidlist" :data="vid" :showProfilePic="true" />
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 8px;
    transition: all;
    transition-duration: 1s;
}

::-webkit-scrollbar-track {
    /* opacity: 0; */
    width: 8px;
    background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: rgba(142, 0, 0, 0.7);
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2) / var(--tw-bg-opacity));
    opacity: 0.5;
    border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
    opacity: 1;
    background-color: rgba(224, 0, 0, 0.8);
    --tw-bg-opacity: 1;
    background-color: hsl(var(--pf) / var(--tw-bg-opacity));
}

::-webkit-scrollbar-button {
    display: none;
    visibility: hidden;
    opacity: 0;
}
</style>