<script setup>
import ui from '@str/ui_store/uiAPI.js'
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';
</script>

<template>
    <div class="w-full text-2xl hover:bg-primary hover:bg-opacity-50">
        <label class="w-full flex justify-between items-center">
            <!-- <i class="ri-arrow-right-s-line"></i> -->
            <!-- <h2>
            <i class="ri-list-settings-line"></i>
                Show page top space ?
            </h2> -->
            <SubSettingTitile>
                Show page top space ?
            </SubSettingTitile>
            <input type="checkbox" class="toggle toggle-primary toggle-lg mr-2" :checked="ui.page_gap"
                @click="ui.toggle_page_gap()" />
        </label>
    </div>
</template>