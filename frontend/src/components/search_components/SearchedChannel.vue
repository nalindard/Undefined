<script setup>
import useVideoStore from '@str/video_store'

const videoStore = useVideoStore()
const { setCurrentChannel } = videoStore

const props = defineProps({
    data: Object
})

const router = useRouter()

const makeToChannel = () => 
{
    const cnlId = props.data?.url.split('/').pop()
    console.log("🚀 ~ file: SearchedChannel.vue:14 ~ cnlId:", cnlId)
    setCurrentChannel(cnlId, 'id')
    router.push({name: 'channel'})

}

</script>

<template>
    <div class="bg-cyan-900 my-4 flex gap-2" v-wave @click="makeToChannel">
        <!-- {{ data || 'not passed' }} -->

        <!-- Channel Cover -->
        <div class="w-1/5 p-2">
            <img :src="data?.thumbnail" alt="channel-cover" loading="lazy" class="rounded-full w-full">
        </div>

        <!-- The Rest -->
        <div class="w-4/5 text-sm">
            <!-- Name && Verification Status -->
            <h2 class="text-4xl text-cyan-100 font-bold">{{ data?.name || 'loading...' }} <i class="fa-solid fa-xs 🔒"
                    :class="data?.uploaderVerified ? 'fa-certificate' : ''"></i></h2>

            <!-- Subscribers Amount -->
            <h4 class="text-cyan-400 my-2">{{ data?.subscribers }} subscribers</h4>

            <p class="text-xs text-cyan-400 line-clamp-4">{{ data?.description }}</p>

            <button class="btn bg-cyan-200 rounded-full px-12 text-cyan-700 my-2" v-wave>SUBSCRIBE</button>
        </div>
    </div>
</template>


<!-- 
    { "url": "/channel/UC5OrDvL9DscpcAstz7JnQGA", 
      "type": "channel", 
      "name": "Michael Jackson", 
      "thumbnail": "https://pipedproxy.kavin.rocks/DYNuiKlx93gnqckBObvCa_HSW8iR-XQNqND9OAVBgrTKEnxtVZaGQ_WYfH3DA6nmeCmhraRC=s88-c-k-c0x00ffffff-no-rw-mo?host=yt3.googleusercontent.com", 
      "description": "The Official YouTube Channel of The King of Pop - Michael Jackson. For more info, visit www.michaeljackson.com.", 
      "subscribers": 28500000, 
      "videos": -1, 
      "verified": true }
 -->