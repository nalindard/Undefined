<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';

const videoStore = useVideoStore()
const { stream, getVidId, getVideoFiles, getAudioFiles } = storeToRefs(videoStore)
const { setStream } = videoStore

onMounted(() => {
    console.log(`Master Player Mounted - 🚞🌋`);
    if (stream.value === null) setStream(getVidId.value)

    // video_player.value.addEventListener('progress', () =>
    // {
    //     loading.value = true
    //     setTimeout(() =>
    //     {
    //         loading.value = false
    //     }, 500)
    // })
    video_player.value.addEventListener("waiting", () => {
        waiting.value = true
    });
    audio_player.value.addEventListener("waiting", () => {
        waiting.value = true
    });
})

const dev_mod = ref(false)

const video_player = ref()
const audio_player = ref()
const v_quality = ref('144p')
const a_quality = ref('33 kbps')
const speed = ref(1)
const playing = ref(false)
const loading = ref(false)
const waiting = ref()
const current_time = ref()
const speed_range = [0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00]
let src_loaded = false

const vid_quality_range = computed(() => {
    return getVideoFiles.value?.map(q => q.quality)
})
const aud_quality_range = computed(() => {
    return getAudioFiles.value?.map(q => q.quality)
})

const f = (x) => {
    // if (x === 'q') console.log(v_quality.value.value);
    // if (x === 'q') console.log(a_quality.value.value);
    // if (x === 's') console.log(speed.value.value);
}


const set_sources = () => {
    video_player.value.src = getVideoFiles.value?.filter(vid => vid.quality === v_quality.value)[0].url
    audio_player.value.src = getAudioFiles.value?.filter(aud => aud.quality === a_quality.value)[0].url
    src_loaded = true
}

const play_or_pause = () => {
    if (!src_loaded) {
        set_sources()
    }
    if (!playing.value) {
        video_player.value.play()
        audio_player.value.play()
        playing.value = true
    } else {
        video_player.value.pause()
        audio_player.value.pause()
        playing.value = false
    }
}



</script>

<template>
    <div class="w-full relative bg-cyan-950 min-w-[400px] aspect-video">

        <!-- Players -->
        <div class="absolute w-full h-full aspect-video top-0 right-0">
            <!-- Video player -->
            <video ref="video_player" class="w-full max-w-4xl">
                <!-- <source :src="v?.url" type="video/webm" v-for="v in getVideoFiles"> -->
                <!-- <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"> -->
            </video>

            <!-- Audio player -->
            <audio ref="audio_player">
                <!-- <source :src="a?.url" type="audio/webm" v-for="a in getAudioFiles"> -->
                <!-- <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg"> -->
            </audio>
        </div>

        <!-- Over-layers -->
        <div class="w-full h-full z-50 scale-150 grid place-items-center" v-show="loading">
            <span class="loading loading-ring loading-lg scale-150"></span>
        </div>

        <!-- Controllers -->
        <div class="w-full h-full absolute top-0 right-0 flex items-end z-20"
            :class="dev_mod ? '' : 'group transition-all duration-200'">
            <!-- {{ quality_range }} -->
            <div class="w-full backdrop-blur bg-cyan-900 bg-opacity-25 rounded flex justify-between flex-col gap-2 p-2"
                :class="dev_mod ? '' : 'opacity-0  group-hover:opacity-100 duration-300 group-hover:translate-y-0 translate-y-full'">

                <!-- Menus -->
                <div class="w-full relative">
                    <p><kbd class="kbd kbd-sm">▶️playing:</kbd> {{ playing }}</p>
                    <p><kbd class="kbd kbd-sm">▶️video:</kbd> {{ v_quality }}</p>
                    <p><kbd class="kbd kbd-sm">▶️audio:</kbd> {{ a_quality }}</p>
                    <p><kbd class="kbd kbd-sm">▶️speed:</kbd> {{ speed }}</p>
                    <p><kbd class="kbd kbd-sm">current_time:</kbd> {{ current_time }}</p>
                </div>

                <!-- Time-line -->
                <div class="w-full">
                    <input type="range" min="0" max="100" value="40" class="range range-xs range-info w-full" />
                </div>

                <!-- Button-field -->
                <div class="w-full flex justify-between items-center ">
                    <!-- Left-side -->
                    <span class="h-10 w-1/3 flex">
                        <!-- Previous button -->
                        <button>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="36" height="36"><path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path></svg> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="100%"
                                height="100%">
                                <path d="M8 12L14 6V18L8 12Z"></path>
                            </svg>
                        </button>

                        <!-- Play/Pause button 😑 -->
                        <button @click="play_or_pause" class="h-10 w-10">
                            <label class="swap swap-rotate">
                                <!-- <input type="checkbox" /> -->
                                <i class="swap-on">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="100%"
                                        height="100%">
                                        <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
                                    </svg>
                                </i>
                                <i class="swap-off">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="100%"
                                        height="100%">
                                        <path
                                            d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z">
                                        </path>
                                    </svg>
                                </i>
                            </label>
                        </button>

                        <!-- Next button -->
                        <button>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="36" height="36"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" width="100%"
                                height="100%">
                                <path d="M16 12L10 18V6L16 12Z"></path>
                            </svg>
                        </button>

                        <!-- Auto enque -->
                        <button class="grid place-items-center">
                            <input type="checkbox" class="toggle toggle-sm toggle-info" checked />
                        </button>
                    </span>

                    <!-- Right-side -->
                    <span class="w-2/3 h-full flex items-center ">
                        <!-- Volume -->
                        <span class="flex gap-4 flex-grow justify-center">
                            <!-- <i class="ri-volume-up-fill h-full"></i> -->
                            <input type="range" min="0" max="10" value="7" class="range range-info range-xs" />
                        </span>

                        <select v-model="v_quality"
                            class="select select-accent bg-opacity-10 outline-none border-0 select-xs focus:outline-none"
                            @change="f('q')">
                            <option class="bg-cyan-900 " v-for="q in vid_quality_range" :value="q">{{ q }}</option>
                        </select>
                        <select v-model="a_quality"
                            class="select select-accent bg-opacity-10 outline-none border-0 select-xs focus:outline-none"
                            @change="f('q')">
                            <option class="bg-cyan-900" v-for="q in aud_quality_range" :value="q">{{ q }}</option>
                        </select>
                        <select v-model="speed"
                            class="select select-accent bg-opacity-10 outline-none border-0 select-xs focus:outline-none"
                            @change="">
                            <option class="bg-cyan-900" v-for="s in speed_range" :value="s">{{ s }}</option>
                        </select>
                    </span>
                </div>
            </div>
        </div>


    </div>
</template>

<!-- 8888888888888888888888888888888888888888888 -->
<!-- 
    <audio id="audio" controls>
        <source src="track.mp3" type="audio/mpeg">
    </audio>
    <video id="video" controls muted>
        <source src="track.mp4" type="video/mp4">
    </video>
    <script>
    // Get the audio and video elements by their IDs
    var audio = document.getElementById("audio");
    var video = document.getElementById("video");
    
    // Add event listeners to both elements
    audio.addEventListener("play", function ()
    {
        // When the audio element is played, play the video element as well
        video.play();
    });
    audio.addEventListener("pause", function ()
    {
        // When the audio element is paused, pause the video element as well
        video.pause();
    });
    audio.addEventListener("seeking", function ()
    {
        // When the audio element is seeking, seek the video element to the same time
        video.currentTime = audio.currentTime;
    });
    video.addEventListener("play", function ()
    {
        // When the video element is played, play the audio element as well
        audio.play();
    });
    video.addEventListener("pause", function ()
    {
        // When the video element is paused, pause the audio element as well
        audio.pause();
    });
    video.addEventListener("seeking", function ()
    {
        // When the video element is seeking, seek the audio element to the same time
        audio.currentTime = video.currentTime;
    });
    </script>

-->