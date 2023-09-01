<script setup>
// const MasterPlayer = defineAsyncComponent(() => import('@cmp/MasterPlayer.vue'))


const input = ref('')
const p = ref()

setTimeout(() =>
{
  input.value = 'Set time out fired - 🔥'
}, 27);
</script>

<template>
  <div class="relative w-full h-full grid place-items-center">
    <h1 class="title">This is an about page</h1>
    <input class="input" type="text" v-model="input" />
    <p>{{ input }}</p>

    <div class="absolute inset-0 w-1/2 hidden">
      <!-- <MasterPlayer /> -->
    </div>

  </div>
</template>

