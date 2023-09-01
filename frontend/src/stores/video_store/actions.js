import
{
    trendingList,
    stream,
    history,
    likes,
    currentVideo,
    searchString,
    currentChannel,
    comments
} from './state'
import fetchFromAPI from '../../utils/fetchFrom'
import apiEndPoints from '../../constants/endPoints'
import
{
    checkLocalStorage,
    getLocalStorage,
    setToLocalStorage,
} from '../../utils/sessionStorage'


import useUiStore from '@str/ui_store/uiStore'
import { storeToRefs } from 'pinia'
// import { async } from '@vimeo/player'




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
    console.log(`Video changed to: ${currentVideo.value}`);
    const ui = useUiStore()
    const { loadPlayer } = storeToRefs(ui)
    loadPlayer.value = true
    console.log("🚀 Changing player visibility-⚠️⚠️⚠️:", true)
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
        console.log("🚀 ~ file: actions.js:46 ~ data:", data)
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
    console.log(`Setting up a new stream for: ${id}`);
    const data = await fetchFromAPI(apiEndPoints.streams(id))
    stream.value = data
    console.log("🚀 ~ file: actions.js:64 ~ setStream ~ data:", data)
}

export const setComments = async (id) => 
{
    if (comments.value === null)
    {
        console.log(`Getting new comments`);
        const data = await fetchFromAPI(apiEndPoints.comments(id))
        comments.value = data
    } else
    {
        console.log(`Adding next comments`);
        const data = await fetchFromAPI(apiEndPoints.commentsNextPage(id))
        comments.value = [...comments.value, data]
    }
}