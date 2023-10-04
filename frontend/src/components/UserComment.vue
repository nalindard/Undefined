<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="chat chat-start mb-4 text-2">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img :src="data?.thumbnail || '#'" alt="commenter-avatar" loading="lazy" />
            </div>
        </div>
        <div class="chat-header">
            {{ data?.author || 'Obi-Wan Kenobi' }}
            <i v-show="data?.verified" class="ri-verified-badge-line"></i>
            <time class="text-xs">{{ data?.commentedTime || 'no time' }}</time>
        </div>
        <div class="chat-bubble line-clamp-3">{{ data?.commentText || '' }}</div>
        <div class="chat-footer pt-2 flex relative w-full">
            <span class="pr-4">
                <i class="ri-thumb-up-line"> <strong class="px-2">{{ data?.likeCount || '0' }}</strong></i>
            </span>
            <span v-show="data?.replyCount !== -1" class="px-7">
                {{ data?.replyCount }} REPLYS
            </span>
            <span v-show="data?.hearted" class="px-7 absolute right-0 scale-125">
                <i class="ri-heart-fill text-primary"> CREATOR LIKED</i>
            </span>

        </div>
    </div>
    <!-- <div class="chat chat-end">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="chat-header">
            Anakin
            <time class="text-xs">12:46</time>
        </div>
        <div class="chat-bubble">I hate you!</div>
        <div class="chat-footer">
            Seen at 12:46
        </div>
    </div> -->
</template>