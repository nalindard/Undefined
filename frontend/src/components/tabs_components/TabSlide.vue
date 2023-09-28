<script setup>
import TrendingVideo from '@cmp/TrendingVideo.vue';

const props = defineProps({
    data: Object,
    content: String
})
</script>

<template>
    <div class="w-full min-h-64 overflow-y-scroll">
        <!-- {{ data || 'Nothing yet' }}      -->
        <div v-if="content === 'videos' || null" class="">
            <transition-group tag="ul" name="list" appear
                class="w-full grid  2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:sm:grid-cols-3 place-items-center px-2 pt-4">
                <TrendingVideo :data="vid" v-for="vid in data" :show-profile-pic="false" :key="vid?.url" />
                <!-- <TrendingVideo v-for="x in feed" :data="x" :showProfilePic="true" :key="x?.url"/> -->
            </transition-group>
        </div>
        <div v-else class="w-full h-full min-h-[27vh] grid place-items-center">
            <!-- {{ data || 'No data yet !' }} -->
            <span class="loading loading-bars loading-lg scale-150 text-primary"></span>
        </div>
    </div>
</template>