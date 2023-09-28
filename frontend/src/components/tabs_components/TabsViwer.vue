<script setup>
import TabHeader from '@cmp/tabs_components/TabHeader.vue';
import TabSlide from '@cmp/tabs_components/TabSlide.vue';

const props = defineProps({
    slides: Object
})

const visibleSlide = ref('home')

</script>

<template>
    <div class="w-full flex flex-col overflow-hidden">
        <!-- {{ slides }} -->
        <!-- Headers -->
        <div class="w-full flex tabs tabs-boxed bg-base-300 rounded-none">
            <!-- <slot name="tab-names">
                Fallbacked here !
            </slot> -->
            <TabHeader :name="key" @click="visibleSlide = key" v-for="(value, key) in slides"
                :class="visibleSlide === key ? 'tab-active' : ''" />
        </div>

        <!-- <hr class="w-full border-t-8 border-cyan-400 my-2"> -->

        <!-- Slides -->
        <div class="w-full flex gap-2 pt-2">
            <!-- <slot name="tab-contents">
                Fallbacked here !
            </slot> -->
            <TabSlide :data="value" :content="key === 'home' ? 'videos' : 'none'" v-for="(value, key) in slides"
                v-show="visibleSlide === key" />
        </div>
    </div>
</template>