<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
import SubscribeButtonVue from '@cmp/SubscribeButton.vue';

const videoStore = useVideoStore()
const { currentVideo, getVidId, stream, currentChannel } = storeToRefs(videoStore)
const { setStream } = videoStore

onMounted(() =>
{
    // console.log(`Video details field Mounted - 🚞🌋`);
    if (stream.value === null) setStream(getVidId.value)
    // console.log("🚀 ~ file: VideoDetails.vue:13 ~ getVidId:", getVidId.value)
})

</script>

<template>
    <div class="w-full p-2 flex flex-col text-base-100">
        <!-- Title -->
        <h2 class="text-xl font-semibold py-2">{{ stream?.title || 'loading...' }}</h2>

        <!-- Channel && video status -->
        <div class="flex  justify-between items-center">
            <div class="flex flex-grow gap-2">
                <!-- Channel Cover -->
                <div class="w-1/5 pr-4">
                    <img :src="stream?.uploaderAvatar || '#'" alt="channel-cover" loading="lazy"
                        class="rounded-full w-full">
                </div>

                <!-- The Rest -->
                <div class="w-full text-sm flex items-center text-2">
                    <!-- Name && Verification Status -->
                    <span class="pr-2">
                        <h2 class="text-lg text-base-100 font-bold"> {{ stream?.uploader || 'loading...' }}<i
                                class="fa-solid fa-xs 🔒 mx-2" :class="true ? 'fa-certificate' : ''"></i></h2>
                        <h4 class="my-2">{{ stream?.uploaderSubscriberCount || 'xxxx' }}subscribers</h4>
                        <!-- <h4 class="text-cyan-400 my-2">{{ stream?.views || 'xxxx' }}views</h4> -->
                    </span>

                    <!-- Subscribers Amount -->
                    <!-- <button class="btn btn-sm rounded-full px-4 text-base-100 my-2" v-wave>SUBSCRIBE</button> -->
                    <SubscribeButtonVue :key="currentChannel?.id" :name="currentChannel?.name" :id="currentChannel?.id"
                        :subs="currentChannel?.subscriberCount" :thumbnail="currentChannel?.avatarUrl"
                        :verified="currentChannel?.verified" />
                </div>
            </div>

            <span class="gap-2 text-2">
                <span class="join">
                    <button class="btn bg-opacity-50 hover:border hover:border-primary hover:text-primary join-item text-2"><i
                            class="ri-thumb-up-line"></i>{{ stream?.likes || '' }}</button>
                    <button class="btn bg-opacity-50 hover:border hover:border-primary hover:text-primary join-item text-2"><i
                            class="ri-thumb-down-line"></i>{{ stream?.dislikes || '' }}</button>
                </span>
                <button class="btn bg-opacity-50 hover:border hover:border-primary hover:text-primary ml-1 text-2"><i
                        class="ri-share-forward-line"></i>SHARE</button>
                <button class="btn bg-opacity-50 hover:border hover:border-primary hover:text-primary ml-1 text-2"><i
                        class="ri-save-line"></i>SAVE</button>
            </span>
        </div>

        <!-- Description -->
        <div class="collapse rounded-lg">
            <input type="checkbox" />
            <!-- Data -->
            <span
                class="flex w-full justify-between items-center py-2  my-2 collapse-title bg-base-200 bg-opacity-50 rounded-lg">
                <h2>{{ stream?.views || 'xxxx' }}views</h2>
                <h2>{{ stream?.uploadDate }}</h2>
                <h2>{{ stream?.category }}</h2>
            </span>
            <!-- Description -->
            <article class="text-xs bg-base-200 bg-opacity-50 collapse-content pt-2 text-2">
                {{ stream?.description || 'No Description found' }}
                <!-- Tags -->
                <span class="w-full bg-base-200 bg-opacity-50 my-2 rounded-none">
                    <p class="bg-base-300 bg-opacity-50 mt-2 p-2">
                        {{ stream?.tags }}
                    </p>
                </span>
            </article>
        </div>
    </div>
</template>