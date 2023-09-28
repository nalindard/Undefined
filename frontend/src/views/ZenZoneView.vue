<script setup>
import InfiniteScroller from '../components/InfiniteScroller.vue';
import PageTitle from '@cmp/PageTitle.vue';


const list = [
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { name: "Low Fidelity music", link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
]
</script>

<template>
    <div class="flex flex-wrap w-full h-full items-center">
        <!-- <div class="w-full">
            <h2 class="title text-primary wanna_say_hi">Zen Zone...!</h2>
        </div> -->
        <PageTitle class="w-full">
            <!-- Zen Zone -->
            Zen Mode
        </PageTitle>

        <div class="flex w-full h-2/4 px-7">
            <!-- Player -->
            <div
                class="grid min-h-12 flex-grow bg-base-200 bg-opacity-25 border border-primary rounded-box place-items-center gap-7">

                <label class="swap swap-rotate aspect-square text-base-100 hover:text-primary duration-200 rounded-full" v-wave>
                    <input type="checkbox" />
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240"
                        height="240">
                        <path
                            d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.52407 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.27240C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z">
                        </path>
                    </svg>
                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240"
                        height="240">
                        <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
                    </svg>
                </label>
            </div>

            <!-- Divider -->
            <div class="divider divider-horizontal border-primary"></div>

            <!-- Album -->
            <div
                class="grid min-h-12 flex-grow bg-base-300 bg-opacity-25 border border-primary rounded-box place-items-center px-7">
                <div v-for="(l, id) in list" class="bg-base-200 bg-opacity-20 w-full px-4 py-2 rounded border border-primary" v-wave>
                    {{ l }} {{ id }}
                </div>
                <!-- <InfiniteScroller> -->
                <!-- </InfiniteScroller> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.💙{
    /* transform: rotateY(20deg); */
    /* transform: rotatex(180deg) translatey(15px); */
    perspective: 10px;
    transform-style: preserve-3d;
    -webkit-box-reflect: below -72px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,0.4));
    /* transform: rotateX(180deg) translateY(10px); mask-image: linear-gradient(transparent 50%, white 90%); filter: blur(5px) brightness(1.5);  */
}
.wanna_say_hi {
    animation: just_lovely 0.02s linear alternate;
}
@keyframes just_lovely{
    0%{
        color: rgb(82, 255, 255);
    }
    100%{
        color: rgb(0, 255, 176);
        transform: translateX(10px);
    }
}
</style>