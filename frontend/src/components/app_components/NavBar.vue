<script setup>
import { storeToRefs } from 'pinia'
import useUiStore from '@str/ui_store/uiStore'
import NavBarBtn from '@cmp/NavBarBtn.vue'

const ui = useUiStore()
const { pages } = storeToRefs(ui)
const { searchToogle } = ui
</script>

<template>
    <nav class="flex flex-col items-center h-full">
        <NavBarBtn :data="{ tooltip: 'search', icon: 'ri-search-line' }" @clk="searchToogle" />
        <NavBarBtn v-for="(page, index) in pages" :data="page" :index="index"/>
    </nav>
</template>