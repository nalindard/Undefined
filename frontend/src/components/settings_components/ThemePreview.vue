<script setup>
const props = defineProps({
    theme: Object
})
const emits = defineEmits(['change'])
</script>

<template>
    <div v-wave @click="emits('change', { theme: theme?.theme })"
        class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent min-w-[200px] mx-2 hover:scale-110 duration-200"
        :data-set-theme="theme?.theme || 'dark'" data-act-class="!outline-base-content">
        <div :data-theme="theme?.theme || 'dark'" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
            <div class="grid grid-cols-5 grid-rows-3">
                <div class="bg-base-300 col-start-1 row-span-2 row-start-1"></div>
                <div class="bg-base-100 col-start-1 row-start-3"></div>
                <div class="bg-base-200 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                    <div class="font-bold text-base-100">{{ theme?.name || 'dark' }}</div>
                    <div class="flex flex-wrap gap-1" data-svelte-h="svelte-1kw79c2">
                        <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                            <div class="text-primary-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                            <div class="text-secondary-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                            <div class="text-accent-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                            <div class="text-neutral-content text-sm font-bold">A</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>