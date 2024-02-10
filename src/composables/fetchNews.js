import axios from "axios"

export default async function fetchNews(set){
    try{
        const response = axios.get('https://gnews.io/api/v4/top-headlines?token=c22ce7fdc97e44c2404ac3fa59f87bff&topic=bitcoin&lang=en&max=6');

            set((await response).data)

        console.log((await response).data);
    }catch(e){

    }
}