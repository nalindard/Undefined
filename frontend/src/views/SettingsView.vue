<script setup>
// import VerticalScroller from '@cmp/VerticalScroller.vue';
import PageGap from '@cmp/app_components/PageGap.vue';
// import ThemePreview from '../components/ThemePreview.vue';
// import ui from '@str/ui_store/uiAPI.js'
import ThemePicker from '@cmp/settings_components/ThemePicker.vue';
import CountryPicker from '@cmp/settings_components/CountryPicker.vue';
import ServerPicker from '@cmp/settings_components/ServerPicker.vue';
import LanguagePicker from '@cmp/settings_components/LanguagePicker.vue';
import AboutSection from '@cmp/settings_components/AboutSection.vue';
import UserDataManager from '@cmp/settings_components/UserDataManager.vue';
import PageTitle from '@cmp/PageTitle.vue';
import PlayerPreference from '@cmp/settings_components/PlayerPreference.vue';
import PageSpaceManager from '@cmp/settings_components/PageSpaceManager.vue';


function set() {
  console.log('set');
  console.log(document.documentElement);
}

</script>

<template>
  <div class="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden">
    <PageGap />

    <!-- <div class=" pl-2">
      <h2 class="title" @click="set">Settings</h2>
    </div> -->
    <PageTitle>
      Settings
    </PageTitle>


    <div class="w-full">
      <!-- Theme -->
      <!-- <div class="my-7 pl-2"> -->
      <ThemePicker />
      <!-- </div> -->

      <!-- Page top space ? -->
      <PageSpaceManager />


      <!-- Country -->
      <!-- <div class="my-7 pl-2"> -->
      <CountryPicker />
      <!-- </div> -->

      <!-- Language -->
      <!-- <div class="my-7 pl-2"> -->
      <LanguagePicker />
      <!-- </div> -->

      <!-- Server -->
      <!-- <div class="my-7 pl-2"> -->
      <ServerPicker />
      <!-- </div> -->

      <!-- Player preference -->
      <!-- <div class="my-7 pl-2"> -->
      <PlayerPreference />
      <!-- </div> -->

      <!-- <div class="my-7 pl-2"> -->
      <UserDataManager />
      <!-- </div> -->
    </div>

    <!-- Divider -->
    <div class="divider mb-20"></div>
    <!-- <PageGap /> -->
    <AboutSection />
  </div>
</template>
