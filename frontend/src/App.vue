<script setup>
import x_mode, { desktopMod } from '../config.mjs'

import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
// import { themeChange } from 'theme-change'

import Page from '@cmp/app_components/Page.vue'
import NavBar from '@cmp/app_components/NavBar.vue'
import TitleBar from '@cmp/app_components/TitleBar.vue';
import SplashScreen from '@cmp/app_components/SplashScreen.vue';
import { getMemory } from '@utl/sessionStorage'

// const showTitleBar = ref(false)
const splash_ = ref(x_mode)

// onMounted(() => {
//   themeChange(false)  
// })

onBeforeMount(() =>
{
    // console.log(`Before app mount ------------------------------------------💙▶️`);
    document.documentElement.dataset.theme = getMemory('theme') || ''
})

function continueApp()
{
    splash_.value = false
    desktopMod && window.runtime?.WindowMaximise()
    desktopMod && window.runtime?.WindowSetMinSize(700, 400)
    // desktopMod && window.runtime?.WindowSetAlwaysOnTop(true)
}

</script>

<template>
    <main class="flex h-screen w-screen overflow-hidden relative">

        <!-- BACKDROP -->
        <div class="absolute top-0 left-0 w-screen h-screen bg bg-base-300 -z-50"></div>

        <!-- Title-bar -->
        <div class="absolute top-0 left-0 h-10 right-0 bg-base-300 bg-opacity-50 flex justify-between transition-all duration-500"
            :class="x_mode ? '' : 'hidden', splash_ ? 'opacity-0' : ''">
            <TitleBar />
        </div>

        <!-- Navbar -->
        <div class="w-16 absolute bottom-0 transition-all duration-500 bg-base-300 bg-opacity-50 z-40"
            :class="x_mode ? 'top-10' : 'top-0', splash_ ? 'opacity-0' : ''">
            <NavBar />
        </div>

        <!-- Screens -->
        <div class="absolute left-16 bottom-0 right-0 transition-all duration-500"
            :class="x_mode ? 'top-10' : 'top-0', splash_ ? 'opacity-0' : ''">

            <Page>
                <!-- <RouterView /> -->
                <router-view v-slot="{ Component }">
                    <transition name="route" mode="out-in">
                        <!-- <RouterView /> -->
                        <component :is="Component"></component>
                    </transition>
                </router-view>
            </Page>
        </div>

        <!-- Frozen -->
        <div class="w-80 aspect-square rounded-full blur-3xl absolute bg-base-300 x" :style="`top: ${y}px; left: ${x}px;`">
        </div>

        <!-- Splash screen -->
        <!-- <SplashScreen v-show="x_mode" class="absolute top-0 left-0 z-[100]" @continue="splash_ = false" /> -->
        <SplashScreen v-show="x_mode" class="absolute top-0 left-0 z-[100]" @continue="continueApp" />
    </main>
</template>

<style>
.x {
    transform: translate(-50%, -50%);
    z-index: -27;
    --tw-bg-opacity: 0.4;
    /* background-color: hsl(var(--p) / var(--tw-bg-opacity)); */
    background: radial-gradient(hsl(var(--p) / var(--tw-bg-opacity)), rgba(0, 0, 0, 0));
}

/* route transitions */
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>
