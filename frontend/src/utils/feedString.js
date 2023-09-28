import { getMemory } from '@utl/sessionStorage'

const feedString = () =>
{
    return getMemory('subbedChannelsList').map(c => c.id).join('%2C')
}

export default feedString