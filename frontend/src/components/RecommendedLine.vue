<script setup>
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
    'Topless womens'
])
</script>

<template>
    <div class="bg-cyan-700 rounded-xl px-4 py-2 text-cyan-100">
        <!-- RECOMMENDED LIST LINE HERE---- -->
        <slot></slot>
        <p class="line-clamp-1">
            <kbd v-for="t in tags" class="kbd bg-opacity-25 bg-cyan-400 px-1 mr-2 border border-cyan-400">{{ t }}</kbd>
        </p>
    </div>
</template>