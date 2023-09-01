<script setup>
import SearchBar from '@cmp/search_components/SearchBar.vue'
import RecommendedLine from '@cmp/RecommendedLine.vue'
import fetchFromAPI from '@/utils/fetchFrom.js'
import SearchedVideo from '@cmp/search_components/SearchedVideo.vue'
import SearchedChannel from '@cmp/search_components/SearchedChannel.vue'

import useVideoStore from '@str/video_store'
// import { storeToRefs } from 'pinia'

import apiEndPoints from '@/constants/endpoints.js'

const videoStore = useVideoStore()
const {setSearchString} = videoStore

const searchSuggestions = ref(['1', '2', '3', '4'])
const filter = ref('all')
const searchResults = ref({})
const showSuggestions = ref(false)

const channels = computed(()=>{
    return searchResults.value.items?.filter(x => x.type === 'channel')
})
const videos = computed(()=>{
    return searchResults.value.items?.filter(x => x.type === 'stream')
})

const search = async (input) => {
    // console.log(input)
    // searchSuggestions.value = await fetchFromAPI(`suggestions?query=${input}`)
    searchSuggestions.value = await fetchFromAPI(apiEndPoints.suggestions(input))
    showSuggestions.value = true
}

const huntResults = async (input) => {
    console.log(`Hunting for the: ${input}`);
    showSuggestions.value = false
    searchResults.value = await fetchFromAPI(apiEndPoints.search(input, filter.value))
    
// https://pipedapi.kavin.rocks/search?q=lion+kolla&filter=all
// https://pipedapi.kavin.rocks/search?q=lion+kolla+live&filter=all
// https://pipedapi.kavin.rocks/search?q=lion+kolla+live&filter=videos
// https://pipedapi.kavin.rocks/search?q=lion+kolla+live&filter=channels
// https://pipedapi.kavin.rocks/search?q=lion+kolla+live&filter=playlists
}

watch(()=>searchSuggestions.value, ()=> {
    if(searchSuggestions.value?.code == 'ERR_BAD_REQUEST') showSuggestions.value =false
})

// https://pipedapi.kavin.rocks/suggestions?query=lion
</script>

<template>
    <div class="drawer-side max-h-screen overflow-hidden duration-75">
        <label for="my-drawer-4" class="drawer-overlay" v-wave></label>
        <div
            class="p-4 w-[50vw] h-full overflow-hidden bg-cyan-600 bg-opacity-20 backdrop-blur-lg border-l-4 border-l-cyan-500 shadow-cyan-300 pt-7">
            <!-- Sidebar content here -->

            <SearchBar @valueChange="search" @getAction="huntResults"/>

            <!-- Filters feed -->
            <div class="flex justify-between py-4">
                <label v-wave class="label px-8"><input @click="filter = 'all'; console.log('all')" type="radio" name="search-filter-choice" class="radio radio-accent mr-4" checked>All</label>
                <label v-wave class="label px-8"><input @click="filter = 'videos'; console.log('videos')" type="radio" name="search-filter-choice" class="radio radio-accent mr-4">Videos</label>
                <label v-wave class="label px-8"><input @click="filter = 'channels'; console.log('channels')" type="radio" name="search-filter-choice" class="radio radio-accent mr-4">Channels</label>
                <label v-wave class="label px-8"><input @click="filter = 'playlist'; console.log('playlist')" type="radio" name="search-filter-choice" class="radio radio-accent mr-4">Playlist</label>
            </div>


            <!-- SEARCH SUGGESTIONS -->
            <ul class="menu bg-cyan-700 bg-opacity-40 rounded-box w-full overflow-hidden transition-all duration-500" :class="showSuggestions ? '': 'h-0 w-0 p-0'">
                <li v-for="s in searchSuggestions" class="w-full">
                    <a @click="setSearchString(s)">{{ s }}</a>
                </li>
            </ul>

            <!-- RECCOMNDED TAGS BY ME -->
            <RecommendedLine>
                <!-- <h2> HERE FOR YAAH---- </h2> -->
            </RecommendedLine>

            <!-- RESULTS -->
            <div class="w-full h-full overflow-scroll pb-40" @click="showSuggestions = false">
                <!-- <h2 class="text-xl text-emerald-400 p-7">
                    RESULTS
                    {{ searchResults }}
                </h2> -->
                <div class="text-red-500 font-bold text-2xl">
                    <!-- Channels {{ channels }}  -->
                    <!-- <div>
                        <img src="" alt="channel-image">
                        <h4>name: {{  }}<i class="varified">😀</i></h4>
                        <p>Description: {{  }}</p>
                        <h5>Subscribers: {{  }}</h5>
                        <h5>Videos: {{  }}</h5>
                    </div> -->
                    <SearchedChannel v-for="channel in channels" :data="channel"/>
                </div>

                <hr class="w-full border-t-4 my-7 border-t-cyan-400 border-double rounded-full">

                <div class="text-emerald-500 font-bold text-2xl">
                    <!-- Videos {{ videos }}  -->
                    <!-- <div>
                        <img src="" alt="video-thumbnail">
                        <h2>Title: {{  }}</h2>
                        <h3>Uploader: {{  }} <i class="varified">😀</i></h3>
                        <img src="" alt="channel-image">
                        <h4>Upload At: {{  }}</h4>
                        <p>Description: {{  }}</p>
                        <h4>Duration: {{  }}</h4>
                        <h4>Views: {{  }}</h4>
                    </div> -->
                    <SearchedVideo v-for="video in videos" :data="video"/>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- { "url": "/channel/UCChwR7eLKtbl1KyI7VFASzQ", "type": "channel", "name": "Fe4RLess", "thumbnail": "https://pipedproxy.kavin.rocks/ytc/AOPolaTHHC2f-nOfgg3Shdb7L2-C5d-2tNeUCtYpI7Gwvw=s88-c-k-c0x00ffffff-no-rw-mo?host=yt3.googleusercontent.com", "description": "subscribe for funny moments and cool snipes :)", "subscribers": 9850000, "videos": -1, "verified": true } -->

<!-- { "url": "/watch?v=60E4wNzEyis", "type": "stream", "title": "AIMBOT 3.0", "thumbnail": "https://pipedproxy.kavin.rocks/vi/60E4wNzEyis/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACfSrKviPKn1xN4MWQwqxv_O--sw&host=i.ytimg.com", "uploaderName": "Fe4RLess", "uploaderUrl": "/channel/UCChwR7eLKtbl1KyI7VFASzQ", "uploaderAvatar": "https://pipedproxy.kavin.rocks/ytc/AOPolaTHHC2f-nOfgg3Shdb7L2-C5d-2tNeUCtYpI7Gwvw=s68-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com", "uploadedDate": "2 years ago", "shortDescription": "dmkhvnejkhf23i4hi4hr49 ^ that was me just spamming my keyboard cause i didn't know what to write. it wasnt a code or anything ...", "duration": 617, "views": 54450180, "uploaded": 1628139600000, "uploaderVerified": true, "isShort": false }, -->