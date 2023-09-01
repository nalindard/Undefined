<script setup>
import useVideoStore from '@str/video_store'

const videoStore = useVideoStore()
const { setCurrentVideo } = videoStore

const props = defineProps({
    data: Object
})

const procceedToPlay = (link) =>
{
    console.log('ppppppppppp' + link + typeof link);
    if (typeof link === "string" && link.length > 0) {   
        const id = link.split('v=')[1]
        console.log(`Vid settled💚 for ${id}`);
        setCurrentVideo(id)
    }
}
const h = ref(false)
</script>

<template>
    <!-- <button></button> -->
    <div class="bg-black bg-opacity-25 rounded overflow-hidden my-7 flex text-cyan-300 font-normal" @click="procceedToPlay(data?.url)" v-wave>
        <!-- {{ data || 'not passed' }} -->
        <!-- Thumbnail & - -->
        <div class="w-1/3 aspect-video relative text-slate-400">
            <img :src="data?.thumbnail || '#'" alt="video-thumbnail" class="w-full aspect-video" loading="lazy">
            <h4 class="text-xs bg-cyan-950 p-1 px-2 absolute right-0 bottom-0 w-max">{{ data?.duration || '88:88:88' }}</h4>
        </div>

        <!-- Rest is here -->
        <div class="w-2/3 pl-4 py-1 text-slate-400">
            <!-- Title -->
            <h2 class="line-clamp-1 text-cyan-100 text-base font-semibold pb-1">{{ data?.title || 'title' }}</h2>

            <!-- Views --> <!-- Uploaded -->
            <h5 class="text-xs"> {{ data?.views || '8888' }} views <kbd class="bg-black px-2 bg-opacity-40 kbd-sm">{{ data?.uploadedDate }}</kbd> </h5>

            <!-- Uploader -->
            <!-- Uploader Avatar -->
            <!-- Uploader varified -->
            <span class="flex items-center gap-2 text-xs my-2">
                <img :src="data?.uploaderAvatar || '#'" alt="channel-cover-image" loading="lazy" class="rounded-full aspect-square w-8">
                <h4 class="font-bold text-sm" @mouseover="h = true">{{ data?.uploaderName || 'creator' }} <i class="fa-solid fa-xs 🔒"
                        :class="data?.uploaderVerified ? 'fa-certificate' : '', h ? 'fa-spin' : ''"></i></h4>

            </span>
            <!-- Short description -->
            <p class="text-xs">{{ data?.shortDescription }}</p>
        </div>
    </div>
</template>