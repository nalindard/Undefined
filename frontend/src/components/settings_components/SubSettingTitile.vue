<template>
    <!-- <h2 class="text-2xl py-4 group-hover:bg-primary group-hover:bg-opacity-50"> -->
    <h2 class="text-2xl collapse-title group-hover:bg-primary group-hover:bg-opacity-50 duration-200 py-4 pl-2" v-wave>
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- <i class="ri-settings-2-line"></i> -->
        <i class="ri-settings-line"></i>
        <!-- <i class="ri-settings-fill"></i> -->
        <slot>
            Sub setting title
        </slot>
    </h2>
    <!-- <h2 class="text-2xl collapse-title group-hover:bg-primary group-hover:bg-opacity-50 duration-200 py-4 pl-0">
            <i class="ri-list-settings-line"></i>
            Change your Language
        </h2> -->
</template>