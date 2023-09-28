<template>
    <transition name="switch" mode="out-in" appear>
        <!-- <slot> -->
        <h2 class="title bg-base-300 hover:bg-opacity-20 duration-200 sticky top-0 py-7 backdrop-blur-xl z-[2] px-2" v-wave>
            <slot>Page Title</slot>
        </h2>
        <!-- </slot> -->
    </transition>
</template>

<style scoped>
/* switch transitions */
.switch-enter-from {
    opacity: 0;
    /* transform: scale(0.6) translateX(1000px); */
    transform: translateX(127px);
}

.switch-leave-to {
    opacity: 0;
    transition: all 1s ease;
    transform: translateX(1000px);
}

.switch-enter-active {
    transition: all 0.5s ease;
}

.switch-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
}


/* list transitions */
.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}

/* .list-enter-to {
    opacity: 1;
    transform: scale(1);
  } */
.list-enter-active {
    transition: all 0.4s ease;
}

/* .list-leave-from {
    opacity: 1;
    transform: scale(1);
  } */
.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}

.list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
    /* for move transition after item leaves */
}

.list-move {
    transition: all 0.3s ease;
}
</style>