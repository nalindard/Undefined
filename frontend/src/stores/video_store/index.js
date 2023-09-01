import { defineStore } from 'pinia'

import * as state from './state'
import * as getters from './getters'
import * as actions from './actions'

const useVideoStore = defineStore('video', () =>
{
    return {
        ...state,
        ...getters,
        ...actions
    }
})

export default useVideoStore
