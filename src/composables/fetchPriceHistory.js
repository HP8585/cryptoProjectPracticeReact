import axios from "axios";
import { addPrices } from "../stateSlices/crypto/history";

export default async function fetchPriceHistory(uuid, dispatch){
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h'
        },
        headers: {
          'X-RapidAPI-Key': '669a4ceefemsh2c3cf6ca2a3f1b9p1d1318jsn1389b04911b4',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
    try{
        const res = await axios.request(options);
        dispatch(addPrices(res.data?.data?.history));
        console.log(res.data?.data?.history);
    }catch(e){
        console.log('faced err', e);
    }
}