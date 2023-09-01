import { trendingList, history, likes, currentVideo, comments, stream } from './state'

export const getVidId = computed(() => currentVideo.value.split('=')[1])

export const getComments = computed(() => comments.value?.comments)

export const getRecommended = computed(() => stream.value?.relatedStreams)

export const getRelated = computed(() => stream.value?.relatedStreams)

export const getVideoFiles = computed(() =>
{
    if (stream.value?.videoStreams === undefined) return ['loading']
    return stream.value?.videoStreams.filter(v => v.mimeType === "video/webm")
})

export const getAudioFiles = computed(() =>
{
    if (stream.value?.audioStreams === undefined) return ['loading']
    return stream.value?.audioStreams.filter(a => a.mimeType === "audio/webm")
})