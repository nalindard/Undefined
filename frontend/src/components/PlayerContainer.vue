<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';


import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
// import MasterPlayer from './MasterPlayer.vue';
// import MasterPlayer2 from './MasterPlayer2.vue';
const MasterPlayer2 = defineAsyncComponent(() => import('@cmp/MasterPlayer2.vue'))

const zero_yt = true

const videoStore = useVideoStore()
const { currentVideo, getVidId } = storeToRefs(videoStore)

const props = defineProps({
    vid: String
})

const emits = defineEmits(['showDetails', 'hidePlayer'])

const playerSmall = ref(false)


onMounted(() =>
{
    console.log(`Player Initialisizing......!`)
    console.log(`current video: ${currentVideo.value}`);
    emits('showDetails')
})

watch(() => currentVideo.value, () => console.log(`Player accepted new video`))

</script>

<template>
    <div class="min-w-[300px] aspect-video relative transition-all duration-200 mx-auto group"
        :class="playerSmall ? 'max-w-[600px] aspect-auto w-full' : ''">

        <!-- Buttons overlayer -->
        <div class="absolute top-0 left-0 flex justify- p-1 z-[60] opacity-0 group-hover:opacity-100 duration-200">
            <span>
                <button class="aspect-square w-7 bg-base-100  bg-opacity-25 rounded-full mr-1"
                    @click="emits('showDetails')">
                    <i
                        class="ri-arrow-left-up-line fa-lg duration-200 text-base-100 text-opacity-50 hover:text-primary"></i>
                </button>
                <button class="aspect-square w-7 bg-base-100  bg-opacity-25 rounded-full"
                    @click="playerSmall = !playerSmall">
                    <i
                        class="ri-contract-left-right-line duration-200 fa-lg text-base-100 text-opacity-50 hover:text-primary"></i>
                </button>
            </span>
            <!-- <button class="aspect-square w-7 bg-base-200 bg-opacity-50 rounded-full" @click="emits('hidePlayer')">
                <i class="ri-close-line fa-lg text-base-100 text-opacity-50 hover:text-primary"></i>
            </button> -->
        </div>

        <LiteYouTubeEmbed v-if="!zero_yt" :id="getVidId || currentVideo"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)" />

        <!-- <MasterPlayer /> -->
        <MasterPlayer2 v-if="currentVideo" @terminate="emits('hidePlayer')" />
    </div>
</template>