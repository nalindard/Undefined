<script setup>
import { useInfiniteScroll } from '@vueuse/core'
// import { onMounted } from 'vue';

import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
// import UserComment from './UserComment.vue';
const UserComment = defineAsyncComponent(()=> import('@cmp/UserComment.vue'))

const videoStore = useVideoStore()
const { getVidId, comments, getComments } = storeToRefs(videoStore)
const { setComments } = videoStore


const el = ref(null)
const data = ref([1, 2, 3, 4, 5, 6])
const a = [1,2,3,4,5,6,7,8,9,10]
const cmts = ref([])

onMounted(() =>{
    if(comments.value === null){ setComments(getVidId.value)} else {cmts.value = getComments.value}
    console.log("🚀 ~ file: CommentsFeed.vue:19 ~ onMounted ~ value:", getVidId.value, comments.value)
})

watch(()=>getComments.value, ()=> cmts.value = getComments.value)

// onMounted(() =>
// {
    // useInfiniteScroll(
    //     el,
    //     () =>
    //     {
    //         // load more
    //         data.value.push(...a)
    //     },
    //     { distance: 10 }
    // )
// })

</script>

<template>
    <!-- {{ comments?.value || `loading comments...!` }} -->
    <!-- {{ getComments?.value || `loading comments...!` }} -->
    <div class="w-full h-full overflow-scroll">
        <!-- {{ cmts }} -->
        <!-- <span class="my-7 bg-emerald-700" > -->
            <!-- {{ cmt }} -->
            <UserComment v-for="cmt in cmts" :data="cmt"/>
        <!-- </span> -->
    </div>
    <!-- <div ref="el" class="overflow-scroll h-full">
        {{ comments?.value || 'loading' }}
        <div v-for="item in data">
            {{ item }}
        </div>
        <div v-for="x in comments?.value">
            {{ x }}
        </div>
    </div> -->
</template>