import { defineStore } from 'pinia'

import * as state from './state'
import * as getters from './getters'
import * as actions from './actions'

const useUserStore = defineStore('user', () =>
{
    return {
        ...state,
        ...getters,
        ...actions
    }
})

export default useUserStore
