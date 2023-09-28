<script setup>
import countrieslist from '@cns/countries/counytriesList.js'
import { setMemory } from '@utl/sessionStorage'
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';

const country = ref('Singapore')

function changeCountry({ code, name })
{
    console.log(code, name);
    country.value = name
    setMemory('country', code)
    // location.reload()
}
</script>

<template>
    <div class="hidden">
        <h2 class="text-2xl">Change your Country</h2>
        <!-- <p class="line-clamp-1">{{ countrieslist }}</p> -->
        <!-- <p class="line-clamp-1" v-for="c in countrieslist">{{ c.name }}</p> -->
        <label v-for="c in countrieslist">{{ c.name }}
            <input type="radio" name="country" class="radio radio-accent" />
        </label>
    </div>

    <div class="collapse group rounded-none">
        <input type="checkbox" class="peer" />
        <!-- <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
        </div> -->
        <!-- <h2 class="text-2xl collapse-title p-0 py-4 group-hover:bg-primary group-hover:bg-opacity-50 duration-200 "> -->
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- Change your Country -->
        <!-- <strong class="float-right rounded-full font-extrabold text-lg px-4 bg-primary bg-opacity-25 group-hover:bg-base-300 mr-2">{{ country }}</strong> -->
        <!-- </h2> -->
        <SubSettingTitile>
            Change your Country
            <strong
                class="float-right rounded-full font-extrabold text-lg px-4 bg-primary bg-opacity-25 group-hover:bg-base-300 mr-2">{{
                    country }}</strong>
        </SubSettingTitile>

        <div class="collapse-content peer-checked:text-secondary-content grid grid-cols-8">
            <label v-for="c in countrieslist" class="line-clamp-1 p-1 mt-1 hover:bg-primary" @click.self="changeCountry(c)">
                <input type="radio" name="country" class="radio radio-xs radio-primary hover:bg-base-content" />
                {{ c.name }}
            </label>
        </div>
    </div>
</template>