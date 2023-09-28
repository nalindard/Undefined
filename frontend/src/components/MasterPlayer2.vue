<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia';
import PlayButtonIcon from '@icn/player_icons/PlayButtonIcon.vue';
import PauseButtonIcon from '@icn/player_icons/PauseButtonIcon.vue';
import PreviousButtonIcon from '@icn/player_icons/PreviousButtonIcon.vue';
import NextButtonIcon from '@icn/player_icons/NextButtonIcon.vue';
import MasterPlayerOptions from '@cmp/MasterPlayerOptions.vue';
import secondsToTime from '@utl/timeConveter.js'


const videoStore = useVideoStore()
const { stream, getVidId, getVideoFiles, getAudioFiles, getMediaLength, mediaLength } = storeToRefs(videoStore)
const { setStream } = videoStore

const emits = defineEmits(['terminate'])

const dev_mod = ref(!true)

const video_player = ref()
const audio_player = ref()


// const v_quality = ref('144p')
// const a_quality = ref('33 kbps')
const v_quality = ref()
const a_quality = ref()
// const v_quality = ref(getVideoFiles.value?.map(vid => vid.quality).pop())
// const a_quality = ref(getAudioFiles.value?.map(aud => aud.quality).pop())
const speed = ref(1)
const playing = ref(false)
const loading = ref(false)
const waiting = ref()
const current_time = ref(0)
const speed_range = [0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00]
let src_loaded = false

const vid_quality_range = computed(() =>
{
    return getVideoFiles.value?.map(q => q.quality)
})
const aud_quality_range = computed(() =>
{
    return getAudioFiles.value?.map(q => q.quality)
})

// -------------------------------------------------------
onMounted(() =>
{
    console.log(`Master Player Mounted - 🚞🌋`);
    if (stream.value === null) setStream(getVidId.value)

    // v_quality.value = getVideoFiles.value?.map(vid => vid.quality).pop()
    // a_quality.value = getAudioFiles.value?.map(aud => aud.quality).pop()

    setTimeout(() =>
    {
        setQuality
        console.log(v_quality.value);
        console.log(a_quality.value);
    });


    // setSources()

    // audio_player.value.addEventListener("waiting", () => {
    //     console.log(`audio data loading`);
    //     // pausePlayers();
    //     // waiting.value = true
    // });

    // video_player.value.addEventListener("waiting", () => {
    //     console.log(`video data loading`);
    //     // pausePlayers();
    //     // waiting.value = true
    // });

    // audio_player.value.addEventListener("loadeddata", () => {
    //     console.log(`audio data loaded`);
    //     // playPlayers();
    //     // waiting.value = false
    // });

    // video_player.value.addEventListener("loadeddata", () => {
    //     console.log(`video data loaded`);
    //     // playPlayers();
    //     // waiting.value = false
    // });


    // ---------------------------------------------------

    // Add event listeners to the audio and video players
    // audio_player.value.addEventListener("play", function () {
    //     playPlayers();
    // });

    // audio_player.value.addEventListener("pause", function () {
    //     pausePlayers();
    // });

    audio_player.value.addEventListener("seeking", function ()
    {
        seeking = true;
    });

    audio_player.value.addEventListener("seeked", function ()
    {
        seeking = false;
        // syncPlayers();
    });

    // ------------------------------------------------------

    // video_player.value.addEventListener("play", function () {
    //     playPlayers();
    // });

    // video_player.value.addEventListener("pause", function () {
    //     pausePlayers();
    // });

    video_player.value.addEventListener("seeking", function ()
    {
        seeking = true;
    });

    video_player.value.addEventListener("seeked", function ()
    {
        seeking = false;
        // syncPlayers();
    });

    // ---------------------------------------------------

    // Add a timer to periodically sync and check the loading status of the players
    // setInterval(syncPlayers, 5000); // in milliseconds
    // setInterval(logLoading, 1000); // in milliseconds
})

const setQuality = () =>
{
    v_quality.value = getVideoFiles.value?.map(vid => vid.quality).pop()
    a_quality.value = getAudioFiles.value?.map(aud => aud.quality).pop()
}

const setSources = () =>
{
    video_player.value.src = getVideoFiles.value?.filter(vid => vid.quality === v_quality.value)[0]?.url
    audio_player.value.src = getAudioFiles.value?.filter(aud => aud.quality === a_quality.value)[0]?.url
    src_loaded = true

    audio_player.value.load();
    video_player.value.load();
}

const play_or_pause = () =>
{
    if (!src_loaded)
    {
        setSources()
    }
    if (playing.value)
    {
        pausePlayers()
    } else
    {
        playPlayers()
    }
}

const playPlayers = () =>
{
    try
    {
        video_player.value.play()
        audio_player.value.play()
        playing.value = true
    } catch (error)
    {
        console.log(error);
    }
}
const pausePlayers = () =>
{
    try
    {
        video_player.value.pause()
        audio_player.value.pause()
        playing.value = false
    } catch (error)
    {
        console.log(error);
    }
}


const terminatePlayer = () =>
{
    pausePlayers()

    video_player.value.removeAttribute('src');
    audio_player.value.removeAttribute('src');

    audio_player.value.load();
    video_player.value.load();
    emits('terminate')
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// Define a flag to indicate if the user is seeking
let seeking = false;

// Define a function to synchronize the players
// function syncPlayers() {
//     if (seeking) return;

//     let audioTime = audio_player.value?.currentTime || 0;
//     let videoTime = video_player.value?.currentTime || 0;

//     // Calculate the difference between the two times
//     let diff = Math.abs(audioTime - videoTime);

//     const threshold = 0.1;
//     if (diff > threshold) {
//         if (audioTime > videoTime) {
//             video_player.value?.currentTime = audioTime;
//         } else {
//             audio_player.value?.currentTime = videoTime;
//         }
//     }
// }

// // Define a function to set the sources of the audio and video players
// function setSources(audioSrc, videoSrc) {
//     // Set the source attributes of the audio and video elements
//     audio_player.value.setAttribute("src", audioSrc);
//     video_player.value.setAttribute("src", videoSrc);

//     // Load the new sources
//     audio_player.value.load();
//     video_player.value.load();
// }

// Define a function to seek both players to a given time
function seekPlayers(time)
{
    audio_player.value.currentTime = time;
    video_player.value.currentTime = time;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
</script>

<template>
    <div class="w-full relative c-bg-3 min-w-[400px] aspect-video group overflow-hidden">

        <!-- Players -->
        <div class="absolute w-full h-full aspect-video top-0 right-0">
            <!-- Video player -->
            <video ref="video_player" class="w-full max-w-5xl"></video>

            <!-- Audio player -->
            <audio ref="audio_player"></audio>
        </div>

        <!-- Over-layers -->
        <div class="w-full h-5/6 flex flex-wrap justify-end items-center relative z-50" v-show="!loading">
            <!-- Terminate player -->
            <button @click="terminatePlayer"
                class="aspect-square w-7 bg-base-100 hover:bg-red-700 z-[60] bg-opacity-25 m-1 rounded-full self-start absolute opacity-0 group-hover:opacity-100 duration-200">
                <i class="ri-close-line fa-lg"></i>
            </button>

            <!-- Loading animation -->
            <div class="w-full grid place-items-center mt-20">
                <span class="loading loading-ring loading-lg self-center scale-150"></span>
            </div>

            <!--  -->
            <!-- <div class="bottom-2 right-2 absolute hidden">
                <MasterPlayerOptions :vid_quality_range="vid_quality_range" :aud_quality_range="aud_quality_range"
                    :speed_range="speed_range" />
            </div> -->
        </div>

        <!-- Controllers -->
        <div class="w-full h-full absolute top-0 right-0 flex items-end z-20"
            :class="dev_mod ? '' : ' transition-all duration-200'">
            <!-- {{ quality_range }} -->
            <div class="w-full bg-base-100 bg-opacity-20 rounded flex justify-between flex-col gap-2 p-2"
                :class="dev_mod ? '' : 'opacity-0  group-hover:opacity-100 duration-300 group-hover:translate-y-0 translate-y-full'">

                <!-- Menus -->
                <div class="w-full relative" v-if="dev_mod">
                    <p><kbd class="kbd kbd-sm">▶️playing:</kbd> {{ playing }}</p>
                    <!-- <p><kbd class="kbd kbd-sm">▶️video:</kbd> {{ v_quality }}</p> -->
                    <!-- <p><kbd class="kbd kbd-sm">▶️audio:</kbd> {{ a_quality }}</p> -->
                    <p><kbd class="kbd kbd-sm">▶️audio:</kbd> {{ getAudioFiles?.map(aud => aud.quality).pop() }}</p>
                    <p><kbd class="kbd kbd-sm">▶️video:</kbd> {{ getVideoFiles?.map(vid => vid.quality).pop() }}</p>
                    <p><kbd class="kbd kbd-sm">▶️speed:</kbd> {{ speed }}</p>
                    <p><kbd class="kbd kbd-sm">current_time:</kbd> {{ current_time }}</p>
                </div>

                <!-- Time-line -->
                <div class="w-full">
                    <input type="range" min="0" max="100" value="0" class="range_ w-full" />
                </div>

                <!-- Button-field -->
                <div class="w-full flex justify-between items-center">

                    <!-- Left-side -->
                    <span class="h-10 flex">
                        <!-- Previous button -->
                        <button>
                            <PreviousButtonIcon />
                        </button>

                        <!-- Play/Pause button 😑 -->
                        <button @click="play_or_pause" class="h-10 w-10">
                            <!-- <button @click="playPlayers" class="h-10 w-10"> -->
                            <PlayButtonIcon v-if="playing" />
                            <PauseButtonIcon v-else />
                        </button>

                        <!-- Next button -->
                        <button>
                            <NextButtonIcon />
                        </button>

                        <!-- Auto enque -->
                        <!-- <button class="grid place-items-center">
                            <input type="checkbox" class="toggle toggle-sm toggle-info" checked />
                        </button> -->

                        <!-- Volume -->
                        <span class="flex gap-4 flex-grow justify-center items-center group ml-4">
                            <i class="ri-volume-up-fill fa-lg text-base-100"></i>
                            <!-- <i class="ri-disc-line fa-lg text-base-100"></i> -->
                            <input type="range" min="0" max="10" value="10"
                                class="range_ range_2 hidden group-hover:block w-12" />
                        </span>

                        <!-- Time -->
                        <span class="grid place-items-center px-4">
                            <!-- <h5 class="text-xs text-base-100">00.00/01.20.27</h5> -->
                            <!-- <h5 class="text-xs text-base-100">{{ secondsToTime(current_time) }} {{ secondsToTime(getMediaLength) }}</h5> -->
                            <h5 class="text-xs text-base-100">{{ secondsToTime(current_time) }} {{
                                secondsToTime(mediaLength) }}</h5>
                        </span>
                    </span>

                    <!-- Right-side -->
                    <span class="h-full flex items-center ">
                        <span class="rounded overflow-hidden">
                            <select v-model="v_quality"
                                class="select  rounded-none bg-opacity-10 outline-none border-0 select-xs focus:outline-none">
                                <option class="bg-base-300" v-for="q in vid_quality_range" :value="q">{{ q }}</option>
                            </select>
                            <select v-model="a_quality"
                                class="select  rounded-none bg-opacity-10 outline-none border-0 select-xs focus:outline-none">
                                <option class="bg-base-300" v-for="q in aud_quality_range" :value="q" selected>{{ q }}
                                </option>
                            </select>
                            <select v-model="speed"
                                class="select  rounded-none bg-opacity-10 outline-none border-0 select-xs focus:outline-none">
                                <option class="bg-base-300" v-for="s in speed_range" :value="s">{{ s }}</option>
                            </select>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.range_ {
    -webkit-appearance: none;
    appearance: none;
    /* width:400px; */
    height: 2.7px;
    border-radius: 00px;
    /* border-color: red; */
    background: hsl(var(--b1));
    accent-color: hsl(var(--b1));
    outline: none;
}

.range_2 {
    background: hsl(var(--b1));
    accent-color: hsl(var(--b1));
    height: 1px;
}

.range_ ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: green;
}

.range_::-webkit-slider-runnable-track {
    -webkit-appearance: none;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    width: 5rem;
    /*background: #5c6664;
   background-image: none;
   flex: 1;
   padding: 0 .5em;
   color:#fff;
   cursor:pointer;
   font-family: 'Open Sans', sans-serif; */
    font-size: .9rem;
}

select::-ms-expand {
    display: none;
}
</style>

<!-- // Define a function to log 'loading' when any of the players is waiting
// function logLoading() {
//     if (audio_player.value?.readyState < 4 || video_player.value?.readyState < 4) {
//         console.log("loading");
//     }
// }

// // Add event listeners to the audio and video players
// audio_player.value.addEventListener("play", function () {
//     // When the audio player plays, play the video player as well
//     playPlayers();
// });

// audio_player.value.addEventListener("pause", function () {
//     // When the audio player pauses, pause the video player as well
//     pausePlayers();
// });

// audio_player.value.addEventListener("seeking", function () {
//     // When the audio player seeks, set the seeking flag to true
//     seeking = true;
// });

// audio_player.value.addEventListener("seeked", function () {
//     // When the audio player finishes seeking, set the seeking flag to false and sync the players
//     seeking = false;
//     syncPlayers();
// });

// video_player.value.addEventListener("play", function () {
//     // When the video player plays, play the audio player as well
//     playPlayers();
// });

// video_player.value.addEventListener("pause", function () {
//     // When the video player pauses, pause the audio player as well
//     pausePlayers();
// });

// video_player.value.addEventListener("seeking", function () {
//     // When the video player seeks, set the seeking flag to true
//     seeking = true;
// });

// video_player.value.addEventListener("seeked", function () {
//     // When the video player finishes seeking, set the seeking flag to false and sync the players
//     seeking = false;
//     syncPlayers();
// });

// // Add a timer to periodically sync and check the loading status of the players
// setInterval(syncPlayers, 100); // in milliseconds
// setInterval(logLoading, 1000); // in milliseconds

// Set some sample sources for testing purposes
// setSources("audio.mp3", "video.mp4"); -->