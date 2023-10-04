<script setup>
const props = defineProps({
    name: String
})
</script>

<template>
    <div class="px-7 py-2 uppercase text-xl text-base-100 tabs transition-all duration-200" v-wave>
        {{ name || 'nothing yet' }}
    </div>
</template>