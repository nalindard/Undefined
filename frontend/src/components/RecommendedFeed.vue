<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
// import TrendingVideo from './.vue';
const TrendingVideo = defineAsyncComponent(()=> import('@cmp/TrendingVideo.vue'))


const videoStore = useVideoStore()
const { getRecommended, getRelated } = storeToRefs(videoStore)
const { setComments } = videoStore

const vidlist = ref()

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
    <div class="min-h-12 h-full w-full grid place-items-center relative" :class="displayInLine ? 'grid-cols-5 overflow-y-scroll' : 'grid-cols-1 overflow-x-scroll'">
        <!-- {{ vidlist }} -->
        <h2 class="text-xl mb-4 w-full sticky top-0 z-10 bg-cyan-800 rounded py-2 pl-4">Discover more here...</h2>

        <hr>

        <TrendingVideo v-for="vid in vidlist" :data="vid" :showProfilePic="true"/>
    </div>
</template>