<script setup>
import FullscreenIcon from '@icn/title_bar_icons/FullscreenIcon.vue'
import CloeFullscreenIcon from '@icn/title_bar_icons/CloeFullscreenIcon.vue'
import MinimizeIcon from '@icn/title_bar_icons/MinimizeIcon.vue'
import ExitIcon from '@icn/title_bar_icons/ExitIcon.vue'


const d = ref()
const fullScreen = ref(true)
onMounted(() => {
    setInterval(() => {
        let x = new Date()
        d.value = x.toLocaleTimeString()
    }, 1000);
})

function cls(){
  window.runtime.Quit()
}

function minimiz(){
  window.runtime.WindowMinimise()
}

function toggle_max(){
  window.runtime.WindowToggleMaximise()  
  fullScreen.value=!fullScreen.value
}


</script>

<template>
    <div class="w-full h-full min-h-6 flex justify-between items-center px-2" style="--wails-draggable:drag">
        <!-- Start section -->
        <span class="w-1/4">
            <h5>{{ d }}</h5>
        </span>

        <!-- Title section -->
        <span class="flex-grow text-center uppercase">
            <h2>Point of no return</h2>
        </span>

        <!-- Edge Section -->
        <span class="h-full flex justify-end items-center w-1/4">
            <button @click="minimiz" class="px-2 scale-90 h-full grid place-items-center">
                <MinimizeIcon />
            </button>
            <button @click="toggle_max" class="px-2 scale-90 h-full grid place-items-center">
                <FullscreenIcon class="swap-off" v-if="fullScreen"/>
                <CloeFullscreenIcon class="swap-on" v-else/>
            </button>
            <button @click="cls" class="px-2 scale-90 h-full grid place-items-center">
                <ExitIcon />
            </button>
        </span>
    </div>
</template>