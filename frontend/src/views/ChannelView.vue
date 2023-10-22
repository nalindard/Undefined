<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
import TabsViwer from '@cmp/tabs_components/TabsViwer.vue';
import SubscribeButtonVue from '@cmp/SubscribeButton.vue';
// import { useElementVisibility } from '@vueuse/core'

// const s_btn = ref(null) 


const videoStore = useVideoStore()
const { currentChannel } = storeToRefs(videoStore)
</script>

<template>
        <div class="w-full h-full">
        <div v-show="currentChannel.length < 1" class="w-full h-full overflow-y-scroll overflow-hidden grid place-items-center">
                <!-- <h2 class="title">No channels yet !</h2> -->
                <span class="loading loading-bars loading-lg scale-150 text-primary"></span>
        </div>
        <div v-show="currentChannel.length != 0" class="w-full h-full overflow-y-scroll overflow-hidden relative">
                <!-- Banner section -->
                <div class="w-full min-h-[25%] overflow-hidden banner-container ">
                        <img class="w-full banner-image" :src="currentChannel?.bannerUrl || '#'" alt="channel-banner" loading="lazy">
                </div>

                <!-- Status section -->
                <transition name="switch" mode="out-in" appear>
                        <div class="w-full h-1/4 flex status p-2 z-[2] backdrop-blur-xl text-2">
                                <span class="w-1/5">
                                        <img :src="currentChannel?.avatarUrl || '#'" alt="channel-cover" class="h-full aspect-square border-[8px] hover:border-primary duration-200 rounded-full">
                                </span>
                                <span class="w-4/5 text-sm">
                                        <!-- Name && Verification Status -->
                                        <h2 class="text-4xl text-base-100 font-bold"> {{ currentChannel?.name || 'No name yet' }}
                                                <i class="fa-solid fa-xs 🔒" :class="currentChannel?.verified ? 'fa-certificate fa-spin text-primary' : ''"></i>
                                        </h2>
                                        
                                        <!-- Subscribers Amount -->
                                        <h4 class="text-2 my-2"> {{ currentChannel?.subscriberCount || 'wait'}} subscribers</h4>
                                        <p class="text-xs text-2 line-clamp-2">{{ currentChannel?.description || 'wait' }}</p>
                                        
                                        <!-- <button class="btn bg-2 rounded-full px-12 text-base-200 hover:text-primary hover:border hover:border-primary-focus my-2" v-wave>SUBSCRIBE</button> -->
                                        <SubscribeButtonVue 
                                                :name="currentChannel?.name"
                                                :id="currentChannel?.id"
                                                :subs="currentChannel?.subscriberCount"
                                                :thumbnail="currentChannel?.avatarUrl"
                                                :verified="currentChannel?.verified"
                                                :key="currentChannel?.id"
                                        />
                                </span>
                        </div>
                </transition>

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
        background: linear-gradient(to bottom, rgba(189, 189, 189, 0.159), black);
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.429), rgba(0, 0, 0, 0.462));
}
</style>