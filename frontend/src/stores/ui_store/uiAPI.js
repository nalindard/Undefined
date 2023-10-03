const ui = reactive({
    // state,
    page_gap: false,
    themes: [
        { name: 'light', theme: 'light' },
        { name: 'dark', theme: 'dark' },
        { name: 'forest', theme: 'forest' },
        { name: 'black', theme: 'black' },
        { name: 'cyberpunk', theme: 'cyberpunk' },
        { name: 'retro', theme: 'retro' },
        { name: 'coffee', theme: 'coffee' },
        { name: 'autumn', theme: 'autumn' },

    ],

    // actions,
    toggle_page_gap()
    {
        this.page_gap = !this.page_gap
    }
})

export default ui