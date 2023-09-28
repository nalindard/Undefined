<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'

const videoStore = useVideoStore()
const { searchString } = storeToRefs(videoStore)

const emit = defineEmits(['valueChange', 'getAction'])
const input = ref('')

onMounted(() =>
{
    watch(
        () => searchString.value,
        () => (input.value = searchString.value)
    )
})
</script>

<template>
    <form @submit.prevent="emit('getAction', input)">
        <label
            class="relative block rounded border border-primary shadow-sm focus-within:border-primary-focus focus-within:ring-1 focus-within:ring-primary-focus overflow-hidden">
            <input type="text"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 input input-bordered w-full max-w-xs pl-32 focus:pl-7"
                placeholder="search" v-model="input" @input="emit('valueChange', input)" />

            <button type="submit" class="absolute aspect-square h-4/5 top-1 right-1 bg-base-200 rounded-full">
                <i class="fa fa-search"></i>
            </button>

            <span
                class="pointer-events-none absolute start-2.5 -translate-y-1/2 bg-base-200 py-1 px-4 rounded transition-all peer-placeholder-shown:top-1/2 top-1/2 peer-focus:top-1/2 peer-focus:-translate-x-full peer-focus:border border-primary peer-placeholder-shown:border-primary-focus overflow-hidden">
                Search
            </span>
        </label>
    </form>
</template>
