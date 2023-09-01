import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL

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

const fetchFromAPI = async (url, params) =>
{
    const options = {
        params: params,
        headers: {},
    }

    try
    {
        // console.log(url, '💙💙💙💙💙💙💙💙💙💙💙💙')
        const { data } = await axios.get(`${baseUrl}${url}`)
        // console.log(`Making a request...!`);
        // console.log('🚀 ~ file: fetchFrom.js:31 ~ fetchFromAPI ~ data:', data)
        return data
    } catch (error)
    {
        return error
    }
}

export default fetchFromAPI
