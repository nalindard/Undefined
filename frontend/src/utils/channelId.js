const channelId = (link) =>
{
    console.log('🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋');
    let id = 'UCX1VsfjqUoH5pXyk_Ds4vjA'
    if (typeof link === "string" && link.length > 0)
    {
        id = link.split('v=')[1]

    }
    return id
}

export default channelId