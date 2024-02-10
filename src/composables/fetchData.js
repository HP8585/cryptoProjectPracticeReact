import axios from "axios";
import { useDispatch } from "react-redux";
import { pushCoins } from "../stateSlices/crypto/listSlice";


async function fetchData(dispatch){
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h'
      },
      headers: {
        'X-RapidAPI-Key': '669a4ceefemsh2c3cf6ca2a3f1b9p1d1318jsn1389b04911b4',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
     
      dispatch(pushCoins(response.data.data.coins))
      console.log(response.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  export{
    fetchData
  }

  //'https://coinranking1.p.rapidapi.com/coins'