// const video = details.value.data.strYoutube.split("=")[1]

const embedlink = (link) =>
{
    const id = link.split('=')[1]
    return `https://www.youtube.com/embed/${id}`
}

// const embeddedVideo = `https://www.youtube.com/embed/${video}`

export default embedlink
