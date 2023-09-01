<script setup>
const props = defineProps({
    data: Object,
    index: Number,
})
const emit = defineEmits(['clk'])
</script>

<template>
    <RouterLink :to="{ name: data?.name || '' }">
        <div class="h-12 w-12  rounded-lg border-b border-l border-cyan-700 flex justify-center items-center text-cyan-200 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500 transition-all duration-200 tooltip tooltip-right uppercase text-2xl my-1 z-10 bg-cyan-800 bg-opacity-25"
            :data-tip="data?.tooltip" @click="emit('clk')" v-wave>
            <!-- <i :class="data?.icon" class="fa-lg"></i> -->
            <i :class="data?.icon" class=""></i>
            <!-- {{ data.name }} -->
        </div>
    </RouterLink>
    <div v-if="index === 3" class="flex-grow"></div>
</template>
