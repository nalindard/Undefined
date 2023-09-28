import
{
    trendingList,
    stream,
    history,
    likes,
    currentVideo,
    searchString,
    currentChannel,
    comments,
    feed,
    mediaLength
} from './state'
import fetchFromAPI from '../../utils/fetchFrom'
import apiEndPoints from '../../constants/endPoints'
import
{
    checkLocalStorage,
    getLocalStorage,
    setToLocalStorage,
    checkMemory,
    getMemory,
} from '../../utils/sessionStorage'
import feedString from '@utl/feedString'

import useUiStore from '@str/ui_store/uiStore'
import { storeToRefs } from 'pinia'
// import { async } from '@vimeo/player'


export const updateFeed = async () =>
{
    // if((checkMemory('subbedChannelsList') && (getMemory('subbedChannelsList')?.length === 0)) && (feed.value.length === 0))
    // if(feed.value.length < 1 && (checkMemory('subbedChannelsList') && getMemory('subbedChannelsList')?.length < 1))
    if (feed.value.length < 1 && (checkMemory('subbedChannelsList') && getMemory('subbedChannelsList')?.length > 0))
    {
        console.log(`Updating feed`);
        const data = await fetchFromAPI(apiEndPoints.feed(feedString()))
        feed.value = data
        // console.log("🚀 ~ file: actions.js:37 ~ data:", data)
    }
    else
    {
        console.log(`Returning the feed -------------------------------------------------------------------------------->`);
        // feed.value = [1,2,3,4,5,6,7]
        return
    }
}


export const getTrendings = async () => 
{
    if (trendingList.value.length === 0) 
    {
        if (!checkLocalStorage('trending'))
        {
            const data = await fetchFromAPI(apiEndPoints.trending)
            trendingList.value = data
            setToLocalStorage("trending", data)
        }
        else
        {
            trendingList.value = getLocalStorage("trending")
        }
    }
}

export const setCurrentVideo = (vid) => 
{
    currentVideo.value = vid
    // console.log(`Video changed to: ${currentVideo.value}`);
    const ui = useUiStore()
    const { loadPlayer } = storeToRefs(ui)
    loadPlayer.value = true
    // console.log("🚀 Changing player visibility-⚠️⚠️⚠️:", true)
    stream.value = null
    comments.value = null
}

export const setSearchString = (val) =>
{
    searchString.value = val
}

export const setCurrentChannel = async (cnl, idOrName) => 
{
    console.log(`Setting channel to: ${cnl}`);

    if (idOrName === 'id')
    {
        const data = await fetchFromAPI(apiEndPoints.channelByID(cnl))
        // console.log("🚀 ~ file: actions.js:46 ~ data:", data)
        currentChannel.value = data
    } else if (idOrName === 'name')
    {
        const data = await fetchFromAPI(apiEndPoints.channelByName(cnl))
        currentChannel.value = data
    } else
    {
        console.error(`Error:`);
    }

    // currentChannel.value = cnl
}

export const setStream = async (id) =>
{
    // console.log(`Setting up a new stream for: ${id}`);
    if (id)
    {
        const data = await fetchFromAPI(apiEndPoints.streams(id))
        stream.value = data
        // console.log("🚀 ~ file: actions.js:64 ~ setStream ~ data:", data)
    }
}

export const setComments = async (id) => 
{
    if (comments.value === null)
    {
        // console.log(`Getting new comments`);
        const data = await fetchFromAPI(apiEndPoints.comments(id))
        comments.value = data
    } else
    {
        // console.log(`Adding next comments`);
        const data = await fetchFromAPI(apiEndPoints.commentsNextPage(id))
        comments.value = [...comments.value, data]
    }
}


export const setMediaLength = (dur) =>
{
    mediaLength.value = dur
}

// https://pipedapi.kavin.rocks/feed/unauthenticated?channels=UCVNKhUY0DtYhpC7FIHrPBiQ
// %2CUCX1VsfjqUoH5pXyk_Ds4vjA

// https://pipedapi.kavin.rocks/feed/unauthenticated?channels=UCVNKhUY0DtYhpC7FIHrPBiQ
// %UCX1VsfjqUoH5pXyk_Ds4vjA

// https://pipedapi.kavin.rocks/feed/unauthenticated?channels=UCVNKhUY0DtYhpC7FIHrPBiQ
// %2CUCX1VsfjqUoH5pXyk_Ds4vjA
// %2CUCsBjURrPoezykLs9EqgamOA