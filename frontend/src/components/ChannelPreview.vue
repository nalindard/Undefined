<script setup>
import easyNumber from '@utl/viewsConverter.js'

const props = defineProps({
    channel: Object
})
</script>

<template>
    <div class="w-36 mx-2 cursor-pointer flex flex-col items-center justify-center">
        <!-- Cover image -->
        <div class="w-28 aspect-square rounded-full overflow-hidden bg-base-200 bg-opacity-50">
            <img :src="channel?.thumbnail || '#'" alt="channel-cover"
                class="text-opacity-0 text-base-200 w-full aspect-square">
        </div>
        <!-- Rest of Data -->
        <div class="pt-4 text-center text-sm">
            <h3
                class="bg-base-200 bg-opacity-50 text-2 mb-2 rounded-full p-1 px-2 text-center line-clamp-1 min-w-[72px]">
                {{ channel?.name || '' }}<i class="fa-solid fa-xs pl-2"
                    :class="channel?.verified ? 'fa-certificate' : ''"></i></h3>
            <h5 class="bg-base-200 bg-opacity-50 text-2 mb-2 rounded-full min-w-[72px]">
                {{ easyNumber(channel?.subs) || '' }}
            </h5>
        </div>
    </div>
</template>