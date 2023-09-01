<script setup>
import { useDraggable } from '@vueuse/core'

import useUiStore from '@str/ui_store/uiStore'
import { storeToRefs } from 'pinia'
import SearchFeed from '@cmp/search_components/SearchFeed.vue'

const VideoDetails = defineAsyncComponent(() => import('@cmp/VideoDetails.vue'))
const CommentsFeed = defineAsyncComponent(() => import('@cmp/CommentsFeed.vue'))
const RecommendedFeed = defineAsyncComponent(() => import('@cmp/RecommendedFeed.vue'))
const PlayerContainer = defineAsyncComponent(() => import('@cmp/PlayerContainer.vue'))

const player = ref()
const drawerBtn = ref()

const ui = useUiStore()
const { loadPlayer, searchDraw } = storeToRefs(ui)

const showVideoData = ref(false)

watch(
    () => searchDraw.value,
    () => drawerBtn.value.click()
)


const { x, y, style } = useDraggable(player, {
    initialValue: { x: 40, y: 40 },
})

</script>

<template>
    <keep-alive>
        <div
            class="w-full h-full  relative flex justify-center items-center drawer drawer-end duration-75 bg-black bg-opacity-40">
            <slot></slot>

            <!-- This is invisible & watcher makes click() event on this to get it work -->
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle absolute -z-50 opacity-0" ref="drawerBtn" />

            <div class="drawer-content absolute -z-50 opacity-0">
                <label for="my-drawer-4" class="drawer-button btn btn-primary absolute -z-50 opacity-0">Open drawer</label>
            </div>


            <!-- Player section -->
            <div ref="player" v-show="loadPlayer" class=" min-w-[400px] absolute flex justify-between bottom-0 right-2 transition-all 
                duration-500 overflow-hidden bg-black bg-opacity-70 backdrop-blur-md z-[5]"
                :class="showVideoData ? 'w-full h-full right-0 left-0 px-4 pt-4' : 'h-auto w-auto max-w-lg'">

                <!-- :style="style" style="position: fixed" -->

                <div class="relative h-full overflow-y-scroll" :class="showVideoData ? 'w-8/12' : 'w-full'">
                    <div class="sticky top-0 z-10 bg-black rounded">
                        <PlayerContainer @showDetails="showVideoData = !showVideoData" @hidePlayer="loadPlayer = false" />
                    </div>

                    <VideoDetails v-if="showVideoData" />
                    <CommentsFeed v-if="showVideoData" />
                </div>

                <div class="w-4/12 pl-12" v-show="showVideoData">
                    <keep-alive>
                        <RecommendedFeed :type="'related'" :displayInLine="false" />
                    </keep-alive>
                </div>
            </div>

            <!-- Search Feed -->
            <SearchFeed class="z-50" />
        </div>
    </keep-alive>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 8px;
    display: none;
}

.bg {
    background-color: #003235;
    opacity: 0.5;
    background: repeating-linear-gradient(45deg, #0b9ea5, #0c8d94 2px, #003235 2px, #003235 10px);
}

.bg-2 {
    background-color: #003235;
    opacity: 0.5;
    background-size: 4px 4px;
    background-image: repeating-linear-gradient(45deg, #1af2ff 0, #1af2ff 0.4px, #003235 0, #003235 50%);
}
</style>