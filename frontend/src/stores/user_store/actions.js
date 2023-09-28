import { userName, subbedChannelsList, likedVideoList, bookmarkedList, num } from './state'
import { setMemory, checkMemory, getMemory, } from '../../utils/sessionStorage'

import useVideoStore from '@str/video_store'
import { storeToRefs } from 'pinia'



export const subscribe = (channel) =>
{
    // name // id // subs // thumb // veri // url ??    
    if (alreadySubed(channel.id))
    {
        console.log(`Already have subbed 😉`);
        return
    }
    // alreadySubed()

    const videoStore = useVideoStore()
    const { feed } = storeToRefs(videoStore)
    feed.value = []

    console.log('🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋 suning');
    if (checkMemory('subbedChannelsList'))
    {
        setMemory('subbedChannelsList', [channel, ...getMemory('subbedChannelsList')])
    } else
    {
        setMemory('subbedChannelsList', [channel])
    }
}

export const unsubscribe = (channel) =>
{

    console.log('unsubbing', channel, getMemory('subbedChannelsList').filter(c => c?.id !== channel));

    if (checkMemory('subbedChannelsList'))
    {
        setMemory('subbedChannelsList', getMemory('subbedChannelsList').filter(c => c?.id !== channel))
    } else
    {
        // setMemory('subbedChannelsList', [channel])
        return
    }
}


const alreadySubed = id =>
{
    if (checkMemory('subbedChannelsList'))
    {
        return getMemory('subbedChannelsList').map(c => c.id).includes(id)
        // return true
    } else
    {
        return false
    }
}

export const likeVideo = (video) => { }
export const dislikeVideo = (video) => { }

export const addBookmark = () => { }
export const removeBookmark = () => { }

// {
//     url: '/channel/UCbE41lHHC_yrxLKZBaVF-og',
//     type: 'channel',
//     name: 'Lionloves Kol',
//     thumbnail:
//         'https://pipedproxy.kavin.rocks/ytc/AOPolaSChexcj9YCR5nvtg4UPM6OVyWVKAERzGMxyg=s88-c-k-c0x00ffffff-no-rw-mo?host=yt3.googleusercontent.com',
//     description:
//         "i'm lion! well, that's not my real name. but i like that name & really think it would make for an awesome name.. so on youtube, i'm ...",
//     subscribers: -1,
//     videos: -1,
//     verified: false,
// },