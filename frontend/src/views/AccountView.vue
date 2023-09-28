<script setup>
const signUp = ref(true)

const proceed = () => {
    signUp.value = !signUp.value
}

</script>

<template>
    <div id="main"
        class="h-screen w-screen overflow-hidden bg-primary text-center text-base-100 flex justify-start items-center">
        <!-- Backdrop -->
        <div id="anime"
            class="absolute top-[30%] right-[40%] h-56 w-56 rounded-md border-8 border-primary z-0 bg-base-300 bg-opacity-25 backdrop-blur-sm hidden lg:block">
        </div>

        <!-- Content -->
        <transition appear name="slipe">
            <div
                class="backdrop-blur-sm bg-base-300 bg-opacity-25 border-r border-primary shadow-sm shadow-orange-50 flex justify-center items-center flex-col h-full w-full sm:w-8/12 lg:w-5/12 py-7 z-20">
                <h2 class="text-3xl lg:text-4xl uppercase font-semibold pb-7 underline underline-offset-8">User profile page
                </h2>
                <form class="flex flex-col w-11/12 sm:w-9/12 lg:w-8/12" @submit.prevent="proceed">
                    <label class="w-full flex flex-col items-start px-2 sm:px-3 md:px-5 lg:px-7" v-if="signUp">Name:
                        <input
                            class="w-full appearance-none ring-primary-focus rounded-full px-4 py-1 bg-opacity-40 bg-base-200 border border-primary my-2"
                            type="text" placeholder="Name..."></label>
                    <label class="w-full flex flex-col items-start px-2 sm:px-3 md:px-5 lg:px-7">Email:
                        <input
                            class="w-full appearance-none ring-primary-focus rounded-full px-4 py-1 bg-opacity-40 bg-base-200 border border-primary my-2"
                            type="email" placeholder="Email..."></label>
                    <label class="w-full flex flex-col items-start px-2 sm:px-3 md:px-5 lg:px-7">Password:
                        <input
                            class="w-full appearance-none ring-primary-focus rounded-full px-4 py-1 bg-opacity-40 bg-base-200 border border-primary my-2"
                            type="password" placeholder="Password..."></label>
                    <label class="w-full flex flex-col items-start px-2 sm:px-3 md:px-5 lg:px-7" v-if="signUp">Confirm
                        Password:
                        <input
                            class="w-full appearance-none ring-primary-focus rounded-full px-4 py-1 bg-opacity-40 bg-base-200 border border-primary my-2"
                            type="password" placeholder="Password..."></label>
                    <button
                        class="bg-primary hover:bg-primary-focus transition-colors bg-opacity-70 rounded-full py-2 px-7 mx-auto text-xl font-semibold justify-self-start"
                        type="submit">SUBMIT</button>
                </form>

                <!-- Loggin or Signup -->
                <span class="w-6/12 mt-7 border rounded-full flex overflow-hidden">
                    <button :class="!signUp ? '' : 'bg-primary'"
                        class="flex-grow py-2 bg-base-200 bg-opacity-50 transition-colors"
                        @click="signUp = false">LOGIN</button>
                    <button :class="signUp ? '' : 'bg-primary'"
                        class="flex-grow py-2 bg-base-200 bg-opacity-50 transition-colors"
                        @click="signUp = true">SIGNUP</button>
                </span>
            </div>
        </transition>

        <!-- Image credit -->
        <span class="fixed bottom-2 md:bottom-4 right-2 md:right-4 text-xs scale-75 md:scale-90 lg:scale-100">
            Photo by <a
                href="https://unsplash.com/@averieclaire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">averie
                woodard</a> on <a
                href="https://unsplash.com/photos/th3rQu0K3aM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </span>
    </div>
</template>

<style lang="css" scoped>
#main {
    /* background-image: url('@/assets/images/lost2.jpg'); */
    background-image: url('https://unsplash.com/photos/th3rQu0K3aM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5NzMxOTgz&force=true');
    background-size: cover;
    background-position: center;
}

#anime {
    animation: spin 1.5s ease-in-out infinite;
    /* box-shadow: inset 8px 0px 0px 0px rgb(255, 111, 0); */
    z-index: 10;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.slipe-enter-from {
    opacity: 0;
    transform: scale(0.9);
    text-align: center;
}

.slipe-enter-active {
    transition: all 1.2s ease;
}
</style>