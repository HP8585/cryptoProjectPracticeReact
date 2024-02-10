import axios from "axios";
import { getCoin } from "../stateSlices/crypto/coinInfo";


export default async function fetchCoin(uuid, dispatch ){
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
        params: {
          referenceCurrencyUuid: uuid,
          timePeriod: '24h'
        },
        headers: {
          'X-RapidAPI-Key': '669a4ceefemsh2c3cf6ca2a3f1b9p1d1318jsn1389b04911b4',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
    try{
        const response = await axios.request(options);
        console.log(response.data);
        dispatch(getCoin(response.data))
    }catch(e){
        console.log(e);
    } 
}