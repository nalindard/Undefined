<script setup>
import ui from '@str/ui_store/uiAPI.js'
</script>

<template>
    <transition name="switch" mode="out-in" appear>
        <div class="transition-all duration-200" :class="ui.page_gap ? 'h-96 min-h-[24rem] ' : 'hidden'"></div>
    </transition>
</template>

<style scoped>
.switch-enter-from {
    opacity: 0;
    transform: scale(0);
}

.switch-leave-to {
    opacity: 0;
    transition: all 1s ease;
    transform: scale(0);
}

.switch-enter-active {
    transition: all 0.5s ease;
}

.switch-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
}
</style>