import axios from 'axios'
import { getMemory, checkMemory } from '@utl/sessionStorage'
const baseUrl = import.meta.env.VITE_API_BASE_URL
const baseUrl_2 = import.meta.env.VITE_API_BASE_URL_2

// const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'Key': baseUrl,
//     'Host': '',
//   },
// };

// const obj = {rating: 'g'}

// axios.defaults.params['rating'] = 'g'

let server = baseUrl

function configureServer()
{
    if (checkMemory('server'))
    {
        switch (getMemory('server'))
        {
            case 1:
                server = baseUrl
                break;
            case 2:
                server = baseUrl_2
                break;
            default:
                server = baseUrl
                break;
        }
    }
}

const fetchFromAPI = async (url, params) =>
{

    configureServer()

    const options = {
        params: params,
        headers: {},
    }

    try
    {
        const { data } = await axios.get(`${server}${url}`)
        return data
    } catch (error)
    {
        // return error
        console.log(error);
        return []
    }
}

export default fetchFromAPI
