<script setup>
import FullscreenIcon from '@icn/title_bar_icons/FullscreenIcon.vue'
import CloeFullscreenIcon from '@icn/title_bar_icons/CloeFullscreenIcon.vue'
import MinimizeIcon from '@icn/title_bar_icons/MinimizeIcon.vue'
import ExitIcon from '@icn/title_bar_icons/ExitIcon.vue'
import { desktopMod } from '../../../config.mjs'

const router = useRouter()

const reloadIcon = ref(null)
const d = ref()
const fullScreen = ref(true)
onMounted(() =>
{
    setInterval(() =>
    {
        let x = new Date()
        d.value = x.toLocaleTimeString()
    }, 1000);

    fullScreen.value = desktopMod && window.runtime?.WindowIsMaximised() ? true : false
})

function reload()
{
    console.log(`reloading`);
    router.push({ name: 'home' })
    // desktopMod && window.runtime?.WindowReloadApp()
    desktopMod ? window.runtime?.WindowReloadApp() : location.reload()
}

function cls()
{
    desktopMod && window.runtime?.Quit()
}

function minimiz()
{
    desktopMod && window.runtime?.WindowMinimise()
}

function toggle_max()
{
    desktopMod && window.runtime?.WindowToggleMaximise()
    fullScreen.value = !fullScreen.value
}



</script>

<template>
    <div class="w-full h-full min-h-6 flex justify-between items-center px-2 text-base-100" style="--wails-draggable:drag">
        <!-- Start section -->
        <span class="w-1/4 pl-[0.7rem]">
            <!-- <h5>{{ d }}</h5> -->
            <h5 class="text-xs">UNDEFIEND</h5>
            <!-- <i class="ri-refresh-line"></i> -->
        </span>

        <!-- Title section -->
        <span class="flex-grow text-center uppercase">
            <!-- <h2>Point of no return</h2> -->
        </span>

        <!-- Edge Section -->
        <span class="h-full flex justify-end items-center w-1/4">
            <button v-if="desktopMod" @click="reload" class="px-2 scale-90 h-full grid place-items-center">
                <i class="ri-refresh-line text-base-100 fa-lg"></i>
            </button>
            <button @click="minimiz" class="px-2 scale-90 h-full grid place-items-center">
                <MinimizeIcon />
            </button>
            <button @click="toggle_max" class="px-2 scale-90 h-full grid place-items-center">
                <FullscreenIcon class="swap-off" v-if="fullScreen" />
                <CloeFullscreenIcon class="swap-on" v-else />
            </button>
            <button @click="cls" class="px-2 scale-90 h-full grid place-items-center">
                <ExitIcon />
            </button>
        </span>
    </div>
</template>