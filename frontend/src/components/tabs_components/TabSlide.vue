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
        <div v-if="content==='videos' || null" class="grid grid-cols-5 justify-items-center content-center">
            <TrendingVideo :data="vid" v-for="vid in data" :show-profile-pic="false"/>
        </div>
        <div v-else>
            {{ data || 'No data yet !' }}
        </div>
    </div>
</template>