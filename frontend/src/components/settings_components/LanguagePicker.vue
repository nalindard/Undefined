<script setup>
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';
</script>

<template>
    <div class="group collapse rounded-none">
        <input type="checkbox" class="peer" />

        <!-- <h2 class="text-2xl collapse-title group-hover:bg-primary group-hover:bg-opacity-50 duration-200 py-4 pl-0"> -->
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- Change your Language -->
        <!-- </h2> -->
        <SubSettingTitile>
            Change your Language
        </SubSettingTitile>

        <div class="collapse-content text-2">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">Red pill</span>
                    <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
                </label>
            </div>
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">Blue pill</span>
                    <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
                </label>
            </div>
        </div>
    </div>
</template>