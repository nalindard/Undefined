<script setup>
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';
</script>

<template>
    <div class="w-full collapse rounded-none group ">
        <input type="checkbox" class="peer" />
        <!-- <h2 class="text-2xl collapse-title group-hover:bg-primary group-hover:bg-opacity-50 duration-200 py-4 pl-0"> -->
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- Change player options -->
        <!-- </h2> -->

        <SubSettingTitile>
            Change player options
        </SubSettingTitile>


        <div class="w-full collapse-content p-0">

            <!-- Default Video format -->
            <div class="collapse collapse-arrow bg-base-200 bg-opacity-50 rounded-none hover:bg-opacity-100">
                <input type="radio" name="player-preferences" />
                <div class="collapse-title text-xl font-medium">
                    Default video format
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <!-- Default video quality -->
            <div class="collapse collapse-arrow bg-base-200 bg-opacity-50 rounded-none hover:bg-opacity-100">
                <input type="radio" name="player-preferences" />
                <div class="collapse-title text-xl font-medium">
                    Default video quality
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>


            <!-- ---------------------------------------------------------------------------------------- -->


            <!-- Default audio quality -->
            <div class="collapse collapse-arrow bg-base-200 bg-opacity-50 rounded-none hover:bg-opacity-100">
                <input type="radio" name="player-preferences" />
                <div class="collapse-title text-xl font-medium">
                    Default audio quality
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <!-- Audio codec -->
            <div class="collapse collapse-arrow bg-base-200 bg-opacity-50 rounded-none hover:bg-opacity-100">
                <input type="radio" name="player-preferences" />
                <div class="collapse-title text-xl font-medium">
                    Default audio codec
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Audio quality -->
<!-- Video quality -->
<!-- Video format -->
<!-- Video codec  -->