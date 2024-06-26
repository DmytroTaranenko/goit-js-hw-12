import axios from "axios";



const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '44483341-a81d0a92f1c16412fe8933c44'


const pixabayAPI = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '44483341 - a81d0a92f1c16412fe8933c44'
    }

})

    export async function getImages(userInput, currentPage) {
        const params = new URLSearchParams({
        key: API_KEY,
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,
        })
        
        

        try {
            const response = await pixabayAPI.get('', {params})
            const result = response.data
            return result
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
        
    