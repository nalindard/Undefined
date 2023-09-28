<script setup>
const props = defineProps({
    vid_quality_range: Array,
    aud_quality_range: Array,
    speed_range: Array
})
</script>

<template>
    <!-- <ul class="menu menu-horizontal bg-base-200 bg-opacity-40 rounded-box absolute bottom-0 right-0 z-50"> -->
    <ul class="menu menu-horizontal bg-base-300 bg-opacity-50 rounded-box z-50">

        <li class="dropdown dropdown-hover dropdown-top dropdown-end w-32">
            <label tabindex="0">Video</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-200 bg-opacity-50 rounded-box ">
                <li v-for="q in vid_quality_range" class="w-32">
                    <label class="label cursor-pointer w-32 flex">
                        <div class="label-text flex-grow">{{ q }}</div>
                        <input type="radio" name="video_quality" class="radio radio-primary " />
                    </label>
                </li>
            </ul>
        </li>

        <li class="dropdown dropdown-hover dropdown-top dropdown-end w-32">
            <label tabindex="1">Audio</label>
            <ul tabindex="1" class="dropdown-content z-[1] menu shadow bg-base-200 bg-opacity-50 rounded-box ">
                <li v-for="q in aud_quality_range" class="w-32">
                    <label class="label cursor-pointer w-32 flex">
                        <div class="label-text flex-grow">{{ q }}</div>
                        <input type="radio" name="audio_quality" class="radio radio-primary " />
                    </label>
                </li>
            </ul>
        </li>

        <li class="dropdown dropdown-hover dropdown-top dropdown-end w-32">
            <label tabindex="2">Speed</label>
            <ul tabindex="2" class="dropdown-content z-[1] menu shadow bg-base-200 bg-opacity-50 rounded-box ">
                <li v-for="s in speed_range" class="w-32">
                    <label class="label cursor-pointer w-32 flex">
                        <div class="label-text flex-grow">{{ s }}</div>
                        <input type="radio" name="playback_speed" class="radio radio-primary " />
                    </label>
                </li>
            </ul>
        </li>

    </ul>
</template>