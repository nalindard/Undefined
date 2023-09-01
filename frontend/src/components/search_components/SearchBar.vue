<script setup>
import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'

const videoStore = useVideoStore()
const { searchString } = storeToRefs(videoStore)

const emit = defineEmits(['valueChange','getAction'])
const input = ref('')

onMounted(() => {
    watch(
        () => searchString.value,
        () => (input.value = searchString.value)
    )
})
</script>

<template>
    <form @submit.prevent="emit('getAction',input)">
        <label
            class="relative block rounded-xl border border-cyan-500 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 focus-within:ring-cyan-600 overflow-hidden">
            <input
                type="text"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 input input-bordered w-full max-w-xs pl-32 focus:pl-7"
                placeholder="search"
                v-model="input"
                @input="emit('valueChange', input)" />

                <button type="submit" class="absolute aspect-square h-4/5 top-1 right-1 bg-cyan-700 bg-opacity-25 rounded-full">
                    <i class="fa fa-search"></i>
                </button>

            <span
                class="pointer-events-none absolute start-2.5 -translate-y-1/2 bg-cyan-700 py-1 px-4 rounded-full transition-all peer-placeholder-shown:top-1/2 top-1/2 peer-focus:top-1/2 peer-focus:-translate-x-full peer-focus:border text-cyan-200 peer-placeholder-shown:border-cyan-600 overflow-hidden">
                Search
            </span>
        </label>
    </form>
</template>
