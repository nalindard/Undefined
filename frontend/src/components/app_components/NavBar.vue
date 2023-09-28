<script setup>
import { storeToRefs } from 'pinia'
import useUiStore from '@str/ui_store/uiStore'
import NavBarBtn from '@cmp/NavBarBtn.vue'


const ui = useUiStore()
const { pages } = storeToRefs(ui)
const { searchToogle } = ui

const route = useRoute();

const active_tab = ref('home')

const setActiveTab = (x) =>
{
    // console.log(`changed${x}`);
    active_tab.value = x
}

watch(
    () => route.fullPath,
    async () =>
    {
        // console.log("route fullPath updated", route.fullPath);
        active_tab.value = window.location.href.split('/').pop() || 'home'
    }
)

// onMounted(() => {
// })

</script>

<template>
    <nav class="flex flex-col items-center h-full">
        <NavBarBtn :data="{ tooltip: 'search', icon: 'ri-search-line' }" :active_tab="active_tab" @clk="searchToogle" />
        <NavBarBtn v-for="(page, index) in pages" :data="page" :active_tab="active_tab" :index="index"
            @clk="setActiveTab" />
    </nav>
</template>