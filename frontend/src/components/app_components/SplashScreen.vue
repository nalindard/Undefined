<script setup>
import ContinueIcon from '@icn/ContinueIcon.vue'
const emits = defineEmits(['continue'])
const self = ref()
const btn = ref()
const name = null
const proceed = () => {
    btn.value.style.scale = '250%'
    btn.value.style.opacity = '00'
    self.value.classList.add('bye')
    setTimeout(() => self.value.classList.add('hidden'), 500)
    emits('continue')
}
</script>

<template>
    <div ref="self" class="w-full h-full  grid place-items-center duration-500 ease-linear bg-black bg-opacity-70">
        <div class=" flex flex-col justify-center items-center">
            <!-- Logo -->
            <div>
                <h2 class="uppercase">{{ name || 'undifiend' }}</h2>
            </div>

            <!-- Continue -->
            <button ref="btn" @click="proceed"
                class="uppercase text-4xl rounded-full  overflow-hidden transition-all duration-500 hover:opacity-100 hover:scale-105 p-7 border-4 mt-16 border-cyan-400 opacity-40  shadow-2xl shadow-cyan-400">
                <ContinueIcon class="" />
            </button>
        </div>
    </div>
</template>

<style scoped>
h2 {
    user-select: none;
    font-weight: 900;
    font-size: 72px;
    background: -webkit-linear-gradient(left, #00c2c9, #004e4e);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 1px 1px 1px blue;
}

h2 {
    transition: 400ms;

    font-size: 5em;
    background: linear-gradient(to right, rgb(71, 218, 255), rgb(21, 234, 191));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: -12px 7px 0px rgba(0, 0, 0, 0.25);
    text-shadow: -17px 10px 4px rgba(0, 0, 0, 0.25);
}

h2:hover {
    text-shadow: -22px 10px 12px rgba(0, 0, 0, 0.25);
    scale: 101%;
    /* transform: translateX(7px); */
}

button {
    box-shadow: 0px 0px 50px 1px cyan;
}

.bye {
    animation: fade 500ms linear !important;
}

@keyframes fade {
    from{opacity: 1;}
    to{opacity: 0;}
}
</style>