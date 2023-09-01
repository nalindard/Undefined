<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';


import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import MasterPlayer from './MasterPlayer.vue';

const zero_yt = true

const videoStore = useVideoStore()
const {currentVideo, getVidId} = storeToRefs(videoStore)

const props = defineProps({
    vid:String
})

const emits = defineEmits(['showDetails','hidePlayer'])

const playerSmall = ref(false)


onMounted(()=> {
    console.log(`Player Initialisizing......!`)
    console.log(`current video: ${currentVideo.value}`);
})

watch(()=>currentVideo.value, ()=>console.log(`Player accepted new video`))

</script>

<template>
    <div
        class="min-w-[300px] aspect-video bg-cyan-800 relative transition-all duration-200 mx-auto"
        :class="playerSmall ? 'max-w-[600px] aspect-auto w-full': ''"
        >

        <!-- Buttons overlayer -->
        <div class="absolute top-0 w-full left-0 flex">
            <button class="px-2 border border-cyan-200 opacity-50 text-cyan-200 bg-cyan-700 rounded-full z-[60]" @click="emits('showDetails')">BACKDROP</button>
            <button class="px-2 border border-cyan-200 opacity-50 text-cyan-200 bg-cyan-700 rounded-full z-[60]" @click="emits('hidePlayer')">CLOSE</button>
            <button class="px-2 border border-cyan-200 opacity-50 text-cyan-200 bg-cyan-700 rounded-full z-[60]" @click="playerSmall = !playerSmall">NEXTBTN</button>
        </div>
        
        <LiteYouTubeEmbed v-if="!zero_yt"
            :id="getVidId || currentVideo"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)" />

        <MasterPlayer />
    </div>
</template>