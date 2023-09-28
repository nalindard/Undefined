<script setup>
import { serverCount } from '@cns/endPoints';
import { setMemory } from '@utl/sessionStorage'
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';

function changeServer(num)
{
    console.log(num);
    setMemory('server', num)
}
</script>

<template>
    <div class="group collapse rounded-none">
        <input type="checkbox" class="peer" />

        <!-- <h2 class="text-2xl collapse-title group-hover:bg-primary group-hover:bg-opacity-50 duration-200 py-4 pl-0"> -->
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- Change the server in a case -->
        <!-- </h2> -->

        <SubSettingTitile>
            Change the server in a case
        </SubSettingTitile>

        <div class="collapse-content grid grid-cols-6">
            <label v-for="s in serverCount"
                class="flex justify-evenly items-center hover:bg-primary hover:bg-opacity-50 duration-200 mt-2">
                <input type="radio" name="server" class="radio radio-primary radio-xs" :checked="s === 1"
                    @click="changeServer(s)" />
                server - 0{{ s }}
            </label>
        </div>
    </div>
</template>