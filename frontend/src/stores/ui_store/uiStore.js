import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useUiStore = defineStore('ui', () =>
{
    const pages = ref([
        // { name: 'home', icon: 'fa-solid fa-house' },
        { name: 'home', tooltip: 'home', icon: 'ri-home-3-line' },
        // { name: 'trending', icon: 'fa-solid fa-fire' },
        { name: 'trending', tooltip: 'trending', icon: 'ri-fire-line' },
        // { name: 'channel', icon: 'fa-solid fa-play' },
        { name: 'channel', tooltip: 'channel', icon: 'ri-tv-2-line' },
        // { name: 'player', icon: 'fa-solid fa-circle-play' },  // Moving to a new position,
        // { name: 'zenzone', icon: 'fa-solid fa-leaf' },
        // { name: 'zenzone', icon: 'fa-solid fa-heart' },
        { name: 'zenzone', tooltip: 'zenzone', icon: 'ri-pulse-line' },
        // { name: 'user', icon: 'fa-solid fa-user' },
        { name: 'user', tooltip: 'user', icon: 'ri-user-4-line' },
        // { name: 'about', icon: 'fa-solid fa-gear' },
        // { name: 'about', tooltip: 'about', icon: 'ri-settings-line' },
        { name: 'settings', tooltip: 'settings', icon: 'ri-settings-line' },
    ])

    const searchDraw = ref(false)
    const playerView = ref(false)
    const loadPlayer = ref(false)

    const searchToogle = () => (searchDraw.value = !searchDraw.value)
    const playerToogle = (val) => (playerView.value = val)

    return { pages, searchDraw, playerView, loadPlayer, searchToogle, playerToogle }
})

export default useUiStore

// const store = reactive({
//     // state,
//     count: 0,

//     // actions,
//     increment(){
//         this.count++
//     }
// })

// export default store