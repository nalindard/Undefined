<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
import TabsViwer from '@cmp/tabs_components/TabsViwer.vue';

const videoStore = useVideoStore()
const { currentChannel } = storeToRefs(videoStore)
</script>

<template>
        <div class="w-full h-full overflow-y-scroll overflow-hidden relative">
                <!-- Banner section -->
                <div class="w-full min-h-[25%] overflow-hidden bg-cyan-950 banner-container ">
                        <img class="w-full banner-image" :src="currentChannel?.bannerUrl || '#'" alt="channel-banner" loading="lazy">
                </div>

                <!-- Status section -->
                <div class="w-full h-1/4 sticky top-0 flex status p-2 z-[2] backdrop-blur-xl">
                        <span class="w-1/5">
                                <img :src="currentChannel?.avatarUrl || '#'" alt="channel-cover" class="h-full aspect-square border-[8px] border-cyan-400 rounded-full">
                        </span>
                        <span class="w-4/5 text-sm">
                                <!-- Name && Verification Status -->
                                <h2 class="text-4xl text-cyan-100 font-bold"> {{ currentChannel?.name || 'No name yet' }}
                                        <i class="fa-solid fa-xs 🔒" :class="currentChannel?.verified ? 'fa-certificate fa-spin text-cyan-400' : ''"></i>
                                </h2>

                                <!-- Subscribers Amount -->
                                <h4 class="text-cyan-400 my-2"> {{ currentChannel?.subscriberCount || 'wait'}} subscribers</h4>
                                <p class="text-xs text-cyan-400 line-clamp-2">{{ currentChannel?.description || 'wait' }}</p>

                                <button class="btn bg-cyan-200 rounded-full px-12 text-cyan-700 my-2" v-wave>SUBSCRIBE</button>
                        </span>
                </div>

                <!-- Content section -->
                <div class="w-full overflow-hidden">

                        <!-- Tabs -->
                        <!-- <TabsViwer >
                                <template #tab-names>
                                        
                                </template>
                                <template #tab-contents>
                                </template>
                        </TabsViwer> -->
                        <TabsViwer v-if="currentChannel !== ''" :slides="{
                                home: currentChannel?.relatedStreams || [],
                                // ...arrayToObject(currentChannel?.tabs)
                                shorts: currentChannel?.tabs[0] || {},
                                livestreams: currentChannel?.tabs[1] || {},
                                playlists: currentChannel?.tabs[2] || {},
                                channels: currentChannel?.tabs[3] || {},
                        }"/>

                        <p>
                                <!-- {{ currentChannel || 'wait' }} -->
                        </p>
                </div>
        </div>
</template>

<style scoped>
.banner-container {
        transform-style: preserve-3d;
        perspective: 10px;
}

.banner-image {
        transform: translateZ(-10px) scale(2);
}

.x {
        /* background-color: ; */
        background-color: rgb(0, 0, 0);
}

.status {
        background: linear-gradient(to bottom, rgba(0, 145, 255, 0.159), black);
        background: linear-gradient(to bottom, rgba(0, 204, 255, 0.429), rgba(0, 0, 0, 0.462));
}
</style>