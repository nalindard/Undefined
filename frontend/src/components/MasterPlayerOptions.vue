<script setup>
</script>

<template>
    <ul class="menu menu-horizontal bg-cyan-900 bg-opacity-40 rounded-box absolute bottom-0 right-0 z-50">

        <li class="dropdown dropdown-bottom">
            <label tabindex="0">Video</label>
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-cyan-900 bg-opacity-50 rounded-box ">
                <li v-for="q in vid_quality_range">
                    <label class="label cursor-pointer"><span class="label-text">{{ q }}</span>
                        <input type="radio" name="video_quality" class="radio radio-info " />
                    </label>
                </li>
            </ul>
        </li>

        <li class="dropdown dropdown-bottom">
            <label tabindex="0">Audio</label>
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-cyan-900 bg-opacity-50 rounded-box ">
                <li v-for="q in aud_quality_range">
                    <label class="label cursor-pointer"><span class="label-text">{{ q }}</span>
                        <input type="radio" name="audio_quality" class="radio radio-info " />
                    </label>
                </li>
            </ul>
        </li>

        <li class="dropdown dropdown-bottom">
            <label tabindex="0">Speed</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-cyan-900 bg-opacity-50 rounded-box ">
                <li v-for="s in speed_range">
                    <label class="label cursor-pointer"><span class="label-text">{{ s }}</span>
                        <input type="radio" name="playback_speed" class="radio radio-info " />
                    </label>
                </li>
            </ul>
        </li>

    </ul>
</template>