<script setup>
import useVideoStore from '@str/video_store'
// import { storeToRefs } from 'pinia'

// import embedLink from '@/utils/ytEmbedLink.js'

const videoStore = useVideoStore()
const { setCurrentVideo } = videoStore

const props = defineProps({
    data: Object,
    showProfilePic: Boolean,
    shimmer: Boolean
})

const h = ref(false)
</script>

<template>
    <div
        class="mb-7 w-[92%] max-w-sm hover:shadow-xl hover:shadow-cyan-950 transition-all duration-200 bg-black bg-opacity-50 rounded-md" v-wave>
        <div class="relative rounded overflow-hidden" :class="shimmer? 'shimmer':''">
            <div v-if="shimmer" class="aspect-video w-full shimmer absolute"></div>
            <img :src="data?.thumbnail || '#'" class="aspect-video w-full hover:cursor-pointer"
                alt="video-thumbnail" loading="lazy" @click="setCurrentVideo(data?.url || '')" />
            <h6 class="text-cyan-100 font-bold text-xs absolute right-1 bottom-1 p-1 px-4
             backdrop-blur rounded-sm" :class="shimmer? 'shimmer':''">{{ data?.duration }} secs</h6>
        </div>


        <div class="flex mt-2">
            <!-- {{ data }} -->
            <!-- Channel -->
            <span v-show="showProfilePic || shimmer">
                <div v-show="shimmer" class="aspect-square w-12 rounded-full shimmer"></div>
                <img v-show="!shimmer" :src="data?.uploaderAvatar" class="aspect-square w-12 rounded-full hover:cursor-pointer p-1"
                    alt="creator avatar" loading="lazy" @click="setCurrentVideo(data?.url || '')" onerror="this.style.display='none'"/>
            </span>

            <!-- Rest of details -->
            <span class="w-full text-sm text-slate-400 px-2 pb-2">
                <h2 class="line-clamp-2 font-semibold text-cyan-50 mb-1" :class="shimmer? 'shimmer':''">{{ data?.title || 'title' }}</h2>
                <h4 :class="shimmer? 'shimmer':''" @mouseover="h = true">{{ data?.uploaderName || 'creator' }} <i class="fa-solid fa-xs 🔒"
                        :class="data?.uploaderVerified ? 'fa-certificate' : '', h ? 'fa-spin' : ''"></i></h4>
                <!-- {{ embedLink(data?.url || '') }} -->

                <span class="w-full flex gap-2 text-xs mt-1">
                    <h4 :class="shimmer? 'shimmer':''">{{ data?.views || '8888' }} views</h4>
                    <h4 :class="shimmer? 'shimmer':''">{{ data?.uploadedDate }} 2020.20.20</h4>
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
    background-color: rgb(20, 35, 41);
    color: rgb(20, 35, 41);
    border-radius: 0.5rem;
}
</style>