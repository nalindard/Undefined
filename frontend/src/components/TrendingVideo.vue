<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'

import secondsToTime from '@utl/timeConveter.js'
import easyNumber from '@utl/viewsConverter.js'

const videoStore = useVideoStore()
const { mediaLength } = storeToRefs(videoStore)
const { setCurrentVideo } = videoStore

const props = defineProps({
    data: Object,
    showProfilePic: Boolean,
    shimmer: Boolean,
})

const proceed = () =>
{
    setCurrentVideo(props.data?.url || '')
    console.log(`Video length: ${props.data?.duration}`);
    mediaLength.value = props.data?.duration
}

const h = ref(false)
</script>

<template>
    <div class="mb-7 w-[92%] max-w-sm transition-all duration-200 bg-base-300 bg-opacity-50 rounded-md"
        :class="shimmer ? 'opacity-20' : ''" v-wave>
        <div class="relative rounded overflow-hidden" :class="shimmer ? 'shimmer' : ''">
            <div v-if="shimmer" class="aspect-video w-full shimmer absolute"></div>
            <img :src="data?.thumbnail || '#'" class="aspect-video w-full hover:cursor-pointer" alt="video-thumbnail"
                loading="lazy" @click="proceed" />
            <!-- loading="lazy" @click="setCurrentVideo(data?.url || '')" /> -->
            <h6 class="bg-base-300 text-base-content font-bold text-xs absolute right-1 bottom-1 p-1 px-2
             backdrop-blur rounded-sm" :class="shimmer ? 'shimmer' : ''">{{ secondsToTime(data?.duration) }}</h6>
        </div>


        <div class="flex mt-2">
            <!-- {{ data }} -->
            <!-- Channel -->
            <span v-show="showProfilePic || shimmer">
                <div v-show="shimmer" class="aspect-square w-12 rounded-full shimmer bg-bas"></div>
                <img v-show="!shimmer" :src="data?.uploaderAvatar"
                    class="aspect-square w-12 rounded-full hover:cursor-pointer p-1" alt="creator avatar" loading="lazy"
                    @click="proceed" onerror="this.style.display='none'" />
                <!-- @click="setCurrentVideo(data?.url || '')" onerror="this.style.display='none'" /> -->
            </span>

            <!-- Rest of details -->
            <span class="w-full text-sm text-gray-400 px-2 pb-2">
                <h2 class="line-clamp-2 font-semibold text-gray-50 mb-1" :class="shimmer ? 'shimmer' : ''">{{ data?.title ||
                    'title' }}</h2>
                <h4 :class="shimmer ? 'shimmer' : ''" @mouseover="h = true">{{ data?.uploaderName || 'creator' }} <i
                        class="fa-solid fa-xs 🔒"
                        :class="data?.uploaderVerified ? 'fa-certificate' : '', h ? 'fa-spin' : ''"></i></h4>
                <!-- {{ embedLink(data?.url || '') }} -->

                <span class="w-full flex gap-2 text-xs mt-1">
                    <h4 :class="shimmer ? 'shimmer' : ''">{{ easyNumber(data?.views) || '8888' }} views</h4>
                    <h4 :class="shimmer ? 'shimmer' : ''">{{ data?.uploadedDate }}</h4>
                </span>
            </span>
        </div>
    </div>
</template>


<style scoped>
.🔒:hover {
    background-color: red;
}

.shimmer {
    /* background-color: rgb(41, 20, 20);
    color: rgb(41, 20, 20); */
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2) / var(--tw-bg-opacity));
    color: hsl(var(--b2) / var(--tw-bg-opacity));
}
</style>