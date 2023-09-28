<script setup>
const props = defineProps({
    data: Object,
    index: Number,
    active_tab: String,
})
const emit = defineEmits(['clk'])
</script>

<template>
    <RouterLink :to="{ name: data?.name || '' }">
        <div class="h-12 w-12 rounded-lg flex justify-center items-center hover:shadow hover:shadow-primary-focus transition-all duration-200 tooltip tooltip-right uppercase text-2xl my-1 z-10 
        " :class="active_tab === data?.name ? 'text-primary' : 'text-base-content'" :data-tip="data?.tooltip"
            @click="emit('clk', data?.name || 'home')" v-wave>
            <!-- <i :class="data?.icon" class="fa-lg"></i> -->
            <i :class="data?.icon" class=""></i>
            <!-- {{ data.name }} -->
        </div>
    </RouterLink>
    <div v-if="index === 3" class="flex-grow"></div>
</template>
