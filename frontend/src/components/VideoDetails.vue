<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';

const videoStore = useVideoStore()
const { currentVideo, getVidId, stream } = storeToRefs(videoStore)
const { setStream } = videoStore

onMounted(() =>
{
    console.log(`Video details field Mounted - 🚞🌋`);
    if (stream.value === null) setStream(getVidId.value)
    console.log("🚀 ~ file: VideoDetails.vue:13 ~ getVidId:", getVidId.value)
})

</script>

<template>
    <div class="w-full py-2 flex flex-col">
        <!-- Title -->
        <h2 class="text-xl font-semibold py-2">{{ stream?.title || 'loading...' }}</h2>

        <!-- Channel && video status -->
        <div class="flex bg-cyan-900 bg-opacity-25 justify-between items-center">
            <div class="flex gap-2">
                <!-- Channel Cover -->
                <div class="w-1/5 p-2">
                    <img :src="stream?.uploaderAvatar || '#'"
                        alt="channel-cover" loading="lazy" class="rounded-full w-full">
                </div>

                <!-- The Rest -->
                <div class="w-full text-sm flex items-center">
                    <!-- Name && Verification Status -->
                    <span>
                        <h2 class="text-xl text-cyan-100 font-bold"> {{ stream?.uploader || 'loading...'}}<i class="fa-solid fa-xs 🔒 mx-2"
                                :class="true ? 'fa-certificate' : ''"></i></h2>
                        <h4 class="text-cyan-400 my-2">{{ stream?.uploaderSubscriberCount || 'xxxx' }}subscribers</h4>
                        <!-- <h4 class="text-cyan-400 my-2">{{ stream?.views || 'xxxx' }}views</h4> -->
                    </span>

                    <!-- Subscribers Amount -->
                    <button class="btn btn-sm bg-cyan-200 rounded-full px-4 text-cyan-700 my-2"
                        v-wave>SUBSCRIBE</button>
                </div>
            </div>

            <span class="gap-2 text-cyan-400">
                <span class="join">
                    <button class="btn bg-cyan-700 bg-opacity-25 border-cyan-400 join-item"><i class="ri-thumb-up-line"></i>{{ stream?.likes || '' }} LIKES</button>
                    <button class="btn bg-cyan-700 bg-opacity-25 border-cyan-400 join-item"><i class="ri-thumb-down-line"></i>{{ stream?.dislikes || '' }} DISLIKES</button>
                </span>
                <button class="btn bg-cyan-700 bg-opacity-25 border-cyan-400 ml-1"><i class="ri-share-forward-line"></i>SHARE</button>
                <button class="btn bg-cyan-700 bg-opacity-25 border-cyan-400 ml-1"><i class="ri-save-line"></i>SAVE</button>
            </span>
        </div>

        <!-- Description -->
        <div class="collapse text-cyan-50">
        <input type="checkbox" />
            <!-- Data -->
            <span class="flex w-full justify-between items-center bg-cyan-700 bg-opacity-50 py-2 text-cyan-100 my-2 collapse-title">
                <h2>{{ stream?.views || 'xxxx' }}views</h2>
                <h2>{{ stream?.uploadDate }}</h2>
                <h2>{{ stream?.category }}</h2>
            </span>
            <!-- Tags -->
            <span class="w-full  my-2">
                <p class="rounded border border-cyan-400 p-2">
                    {{ stream?.tags }}
                </p>
            </span>
            <!-- Description -->
            <article class="bg-cyan-950 bg-opacity-40 text-sm collapse-content">
                    {{ stream?.description || 'No Description found' }}
            </article>

        </div>
    </div>
</template>