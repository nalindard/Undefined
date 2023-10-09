<script setup>
import useUserStore from '@str/user_store'
import { storeToRefs } from 'pinia';
// import { useElementVisibility } from '@vueuse/core'
import { vElementVisibility } from '@vueuse/components'

// const btn = ref(null)
const key = ref(1)

const props = defineProps({
    name: String,
    id: String,
    subs: Number,
    thumbnail: String,
    verified: Boolean,
})

const userStore = useUserStore()
// const { getSublist } = storeToRefs(userStore)
const { subscribe, unsubscribe, getSublist } = userStore

const hasSubscribed = ref(false)


onMounted(() =>
{
    //   hasSubscribed.value = getSublist.value.includes(props?.id) ? true : false
    hasSubscribed.value = getSublist().includes(props?.id) ? true : false
})

const subAction = () =>
{
    hasSubscribed.value = !hasSubscribed.value

    // console.log('SUB LIST', getSublist.value);
    console.log('SUB LIST', getSublist());

    // if (getSublist.value.map(c => c.id).includes(props?.id)) {
    // if (getSublist.value.includes(props?.id)) {
    if (getSublist().includes(props?.id))
    {
        unsubscribe(props?.id)
    } else
    {
        subscribe({
            name: props?.name,
            id: props?.id,
            subs: props?.subs,
            thumbnail: props?.thumbnail,
            verified: props?.verified,
        })
    }
}

function onElementVisibility() {
    key.value = key.value++
}

</script>

<template>
    <!-- <div ref="btn" v-element-visibility="onElementVisibility"> -->
    <div v-element-visibility="onElementVisibility">
        <button 
            :key="key"
            class="rounded-full px-12 text-base-200 hover:text-primary hover:border hover:border-primary-focus my-2 uppercase"
            :class="hasSubscribed ? 'text-2 border border-base-content bg-base-300 btn' : 'btn bg-base-content'"
            @click="subAction" v-wave>
                {{ hasSubscribed ? 'UNSUBSCRIBE' : 'SUBSCRIBE' }}
        </button>
    </div>
</template>