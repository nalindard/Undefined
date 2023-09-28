import { userName, subbedChannelsList, likedVideoList, bookmarkedList, num } from './state'
import
{
    setMemory,
    checkMemory,
    getMemory,
} from '@utl/sessionStorage'

// export const getSublist = () => {  }

// export const getSublist = computed(() => {

//     console.log(`Getters -> sublist`);
//     if (checkMemory('subbedChannelsList')) {
//         return getMemory('subbedChannelsList').map(c => c.id)
//     } else {
//         return [num.value]
//     }
// })

// export const getFeed = computed(() => {
//     if (checkMemory('subbedChannelsList')) {
//         return getMemory('subbedChannelsList')
//     } else {
//         return [num.value]
//     }
// })
export const getSublist = () =>
{

    console.log(`Getters -> sublist`);
    if (checkMemory('subbedChannelsList'))
    {
        return getMemory('subbedChannelsList').map(c => c.id)
    } else
    {
        return []
    }
}

export const getFeed = () =>
{
    if (checkMemory('subbedChannelsList'))
    {
        return getMemory('subbedChannelsList')
    } else
    {
        return []
    }
}


// export const getSublist = computed({
//     get() {
//         console.log(`Getters -> sublist`);
//         if (checkMemory('subbedChannelsList')) {
//             return [...getMemory('subbedChannelsList').map(c => c.id), num.value]
//         } else {
//             return [num.value]
//         }
//     },
//     set() {
//         num.value = num.value++
//     }
// })


// export const getFeed = computed({
//     get() {
//         if (checkMemory('subbedChannelsList')) {
//             return [...getMemory('subbedChannelsList'), num.value]
//         } else {
//             return [num.value]
//         }
//     },
//     set() {
//         num.value = num.value++
//     }
// })