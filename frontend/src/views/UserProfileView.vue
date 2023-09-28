<script setup>
import VerticalScroller from '@cmp/VerticalScroller.vue';
import ChannelPreview from '@cmp/ChannelPreview.vue';
import PageGap from '@cmp/app_components/PageGap.vue';
// import TrendingVideo from '../components/TrendingVideo.vue';
import PageTitle from '@cmp/PageTitle.vue';
import {
    checkMemory,
    getMemory,
} from '@utl/sessionStorage'

const subs = ref([])

onMounted(() => {
    if (checkMemory('subbedChannelsList') && getMemory('subbedChannelsList')?.length > 0) {
        subs.value = getMemory('subbedChannelsList')
    } else {
        subs.value = [ {name: ''},{name: ''},{name: ''},{name: ''},{name: ''},{name: ''},{name: ''},{name: ''},]
    }
})

</script>

<template>
    <div class="w-full h-full overflow-scroll overflow-x-hidden">
        <PageGap />

        <!-- <h2 class="title">User</h2> -->
        <PageTitle>
            User
        </PageTitle>
        <div class="flex w-full justify-between">
            <!-- <h2
                class="title w-full text-primary bg-base-300 hover:bg-opacity-20 duration-200 sticky top-0 py-7 backdrop-blur-xl z-[2] px-2">
                User</h2> -->
            <div class="avatar placeholder hidden">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                    <span class="text-3xl">K</span>
                </div>
            </div>
        </div>

        <div class="pt-20"></div>

        <!-- Sign-in warning ! -->
        <transition name="switch_" mode="out-in" appear class="hidden">
            <div class="px-4 w-1/2">
                <div class="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Warning: Backend isn't configured yet ! See anyway ?</span>
                </div>
            </div>
        </transition>


        <!-- ----------Likes---------- -->
        <!-- ----------Bookmarks---------- -->
        <!-- ----------Playlists---------- -->
        <!-- ----------History---------- -->
        <div class="pt-7 pl-4">
            <!-- {{ subs }} -->
            <div>
                <VerticalScroller :title="'subscribes'" :show-title="true">
                    <!-- <ChannelPreview :channel="{}" v-for="x in Array.from(Array(20).keys())" /> -->
                    <transition-group name="list" appear>
                        <ChannelPreview :channel="c" v-for="c in subs" :key="c?.name" />
                    </transition-group>
                </VerticalScroller>
            </div>
            <div>
                <VerticalScroller :title="'likes'" :show-title="true">
                    <!-- <TrendingVideo v-for="x in Array.from(Array(20).keys())" :data="video" :shimmer="true" :show-profile-pic="true"/> -->
                </VerticalScroller>
            </div>
            <div>
                <VerticalScroller :title="'history'" :show-title="true"></VerticalScroller>
            </div>
        </div>
    </div>
</template>

<style scoped>
.switch_-enter-from {
    opacity: 0;
    /* animation-delay: 1s; */
    transform: scale(0);
    /* transform: translateX(127px); */
}

.switch_-enter-active {
    transition: all 0.4s linear;
}
</style>