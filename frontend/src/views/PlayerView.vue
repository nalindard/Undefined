<script setup>
import useUiStore from '@str/ui_store/uiStore'
import { storeToRefs } from 'pinia'

const ui = useUiStore()
const { playerView } = storeToRefs(ui)
// const {playerToogle} = ui
const emit = defineEmits(['visibilityToggle'])

watch(
    () => playerView.value,
    () => {
        if (playerView.value) {
            emit('visibilityToggle')
        }
    }
)

// import useVideoStore from '@str/video_store'

</script>

<template>
    <h2 class="title">Player</h2>
    <div>
        <button class="p-7 bg-blue-700" @click="emit('visibilityToggle')">
            CLICK ME
        </button>
    </div>
</template>
