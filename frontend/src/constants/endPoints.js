const apiEndPoints = {
    trending: 'trending?region=LK',
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
}

export default apiEndPoints
