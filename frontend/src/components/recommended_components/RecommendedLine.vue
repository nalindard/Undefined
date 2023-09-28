<script setup>
// import VerticalScroller from '@cmp/VerticalScroller.vue';

const tags = ref([
    'Tron',
    'Lofi',
    'Synthwave',
    'Retro',
    'Future',
    'Horizon',
    'Neon',
    'Cyberpunk',
    'Edge-runnner',
    'Reflections',
])
</script>

<template>
    <div class="rounded-xl px-4 py-2 text-base-content bg-base-300">
        <!-- RECOMMENDED LIST LINE HERE---- -->
        <slot></slot>
        <!-- <VerticalScroller> -->
        <p class="line-clamp-1">
            <kbd v-for="t in tags" class="kbd bg-base-200 px-1 mr-2">{{ t }}</kbd>
        </p>
        <!-- </VerticalScroller> -->
    </div>
</template>