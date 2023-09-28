<script setup>
import secondsToTime from '@utl/timeConveter.js'
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'

// import embedLink from '@/utils/ytEmbedLink.js'

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
    mediaLength.value = props.data?.duration
}

</script>

<template>
    <div class="mb-2 w-[92%] max-w-sm rounded-md flex" v-wave>

        <div class="relative rounded overflow-hidden w-2/5" :class="shimmer ? 'shimmer' : ''">
            <div v-if="shimmer" class="aspect-video w-full shimmer absolute"></div>
            <img :src="data?.thumbnail || '#'" class="aspect-video w-full hover:cursor-pointer" alt="video-thumbnail"
                loading="lazy" @click="proceed" />
            <!-- alt="video-thumbnail" loading="lazy" @click="setCurrentVideo(data?.url || '')"/> -->

            <!-- Duration -->
            <h6 class="text-cyan-100 font-light text-xs absolute right-1 bottom-1 p-1
             bg-base-300 rounded-sm" :class="shimmer ? 'shimmer' : ''">{{ secondsToTime(data?.duration) }}</h6>
        </div>


        <div class="flex w-3/5 flex-col text-xs text-slate-400 px-2 pb-2">
            <h2 class="line-clamp-1 font-medium text-cyan-50 mb-1" :class="shimmer ? 'shimmer' : ''">{{ data?.title ||
                'title'
            }}</h2>
            <h4 :class="shimmer ? 'shimmer' : ''">{{ data?.uploaderName || 'creator' }} <i class="fa-solid fa-xs 🔒"
                    :class="data?.uploaderVerified ? 'fa-certificate' : ''"></i></h4>
            <!-- {{ embedLink(data?.url || '') }} -->

            <span class="w-full flex gap-2 text-xs mt-1">
                <h4 :class="shimmer ? 'shimmer' : ''">{{ data?.views || '8888' }} views</h4>
                <h4 :class="shimmer ? 'shimmer' : ''">{{ data?.uploadedDate }}</h4>
            </span>
        </div>
    </div>
</template>


<style scoped>
.🔒:hover {
    background-color: red;
}

.shimmer {
    background-color: rgb(20, 35, 41);
    color: rgb(20, 35, 41);
    border-radius: 0.5rem;
}
</style>