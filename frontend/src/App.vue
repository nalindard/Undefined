<script setup>
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()

import Page from '@cmp/app_components/Page.vue'
import NavBar from '@cmp/app_components/NavBar.vue'
import TitleBar from '@cmp/app_components/TitleBar.vue';
import SplashScreen from '@cmp/app_components/SplashScreen.vue';

const showTitleBar = ref(false)
const splash_ = ref(true)
</script>

<template>
    <main class="flex h-screen w-screen overflow-hidden relative">

        <!-- Calculator -->
        <div class="absolute top-0 left-0 h-10 right-0 bg-cyan-900 bg-opacity-25 flex justify-between transition-all duration-500"
            :class="showTitleBar ? 'hidden' : '', splash_ ? 'opacity-0' : ''">
            <TitleBar />
        </div>

        <!-- Navbar -->
        <div class="w-16 absolute top-10 bottom-0 transition-all duration-500 bg-cyan-900 bg-opacity-25" :class="splash_ ? 'opacity-0' : ''">
            <NavBar />
        </div>

        <!-- Screens -->
        <div class="absolute left-16 bottom-0 right-0 border-l border-cyan-700 transition-all duration-500"
            :class="showTitleBar ? 'top-0' : 'top-10', splash_ ? 'opacity-0' : ''">
            <Page>
                <RouterView />
            </Page>
        </div>

        <!-- Frozen -->
        <div class="w-80 aspect-square rounded-full blur-3xl absolute bg-emerald-500 x"
            :style="`top: ${y}px; left: ${x}px;`"></div>

        <!-- Splash screen -->
        <SplashScreen class="absolute top-0 left-0 z-[100]" @continue="splash_ = false" />
    </main>
</template>

<style>
.x {
    transform: translate(-50%, -50%);
    z-index: -27;
    background: radial-gradient(rgba(0, 255, 255, 0.52), rgba(0, 0, 0, 0));
}
</style>
