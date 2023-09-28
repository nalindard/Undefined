<script setup>
import VerticalScroller from '@cmp/VerticalScroller.vue';
import ThemePreview from '@cmp/settings_components/ThemePreview.vue';
import ui from '@str/ui_store/uiAPI.js'
import { setMemory } from '@utl/sessionStorage'
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';

// onMounted(() => {
//   console.log(document.documentElement);  
// })

function changeTheme({ theme })
{
    // console.log(theme);
    document.documentElement.dataset.theme = theme
    setMemory('theme', theme)
}

</script>

<template>
    <div class="pt-2 group">
        <!-- <h2 class="text-2xl py-4"> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- Change your theme -->
        <!-- </h2> -->

        <SubSettingTitile>
            Change your theme
        </SubSettingTitile>

        <VerticalScroller class="pl-2">
            <transition-group name="list" appear>
                <ThemePreview v-for="t in ui.themes" :theme="t" @change="changeTheme" :key="t?.name" />
            </transition-group>
        </VerticalScroller>
    </div>
</template>