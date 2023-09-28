import { getMemory } from '@utl/sessionStorage'


export const serverCount = 2


const apiEndPoints = {
    trending: `trending?region=${getMemory('country') || 'LK'}`,
    // streams: '/streams/:videoId',
    streams: (id) => `streams/${id}`,
    // comments: '/comments/:videoId',
    comments: (videoId) => `comments/${videoId}`,
    commentsNextPage: '/nextpage/comments/:videoId',
    // channelByID: '/channel/:channelId',
    channelByID: (id) => `channel/${id}`,
    // channelByName: '/c/:name',
    channelByName: (name) => `c/${name}`,
    playList: '/playlists/:playlistId',
    playListNextPage: '/nextpage/playlists/:playlistId',
    suggestions: (val) => `suggestions?query=${val}`,
    search: (q, f) =>
    {
        const sq = q.replace(/\s/g, "+")
        return `search?q=${sq}&filter=${f}`
    },
    feed: (channels) =>
    {
        // https://pipedapi.kavin.rocks/feed/unauthenticated?channels=UCVNKhUY0DtYhpC7FIHrPBiQ%2CUCX1VsfjqUoH5pXyk_Ds4vjA
        return `feed/unauthenticated?channels=${channels}`
    }
}

export default apiEndPoints
