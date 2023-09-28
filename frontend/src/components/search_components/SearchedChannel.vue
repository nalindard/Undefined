<script setup>
import useVideoStore from '@str/video_store'
import SubscribeButtonVue from '@cmp/SubscribeButton.vue';
import channelId from '@utl/channelId.js';

const videoStore = useVideoStore()
const { setCurrentChannel } = videoStore

const props = defineProps({
    data: Object
})

const router = useRouter()

const makeToChannel = () => 
{
    const cnlId = props.data?.url.split('/').pop()
    setCurrentChannel(cnlId, 'id')
    router.push({ name: 'channel' })

}

</script>

<template>
    <div class="bg-base-200 bg-opacity-75 my-4 py-2 rounded-lg flex gap-2" v-wave @click="makeToChannel">
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
            <h4 class="text-base-content my-2">{{ data?.subscribers }} subscribers</h4>

            <p class="text-xs text-base-content line-clamp-4">{{ data?.description }}</p>

            <!-- <button class="btn bg-base-100 rounded-full px-12 text-base-300 hover:text-primary my-2" v-wave>SUBSCRIBE</button> -->

            <!-- Currently subscribe button not nahave as I want, so it's not clickeble here. -->
            <!-- After fix, these two divs should be removed -->
            <!-- Absolute div is on top of sub button to make it not clickeble here, easy 😉 -->
            <div class="relative">
                <div class="absolute w-full h-full"></div>

                <SubscribeButtonVue :name="data?.name" :id="data?.url.split('/').pop()" :subs="data?.subscribers"
                    :thumbnail="data?.thumbnail" :verified="data?.verified" />
            </div>
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