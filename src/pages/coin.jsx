import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchCoin from "../composables/fetchCoin";
import fetchPriceHistory from "../composables/fetchPriceHistory";
import "../assets/css/coinPage/coinPage.css";
import LineChart from "../components/LineChart";
import NewsSwiper from "../components/coinPage/swiper";
import DefaultLayout from "../layouts/Default";


export default function CoinPage(){
    const coin = useSelector(state=> state.coinInfo.coin)
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
    fetchCoin(id, dispatch)
    fetchPriceHistory(id, dispatch)
    }, [])

    const formatNumber = (number)=>{
        return Number(number).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
    return(
   <DefaultLayout>
         <div className="coinPageContainer">
            {
                !coin ? <span>Loading...</span>
                :
                (<>
            <div className="name_symbol">
                <img src={coin.data?.coin?.iconUrl} className="max-w-10" />
                <div>
                    <span className="name">{ coin.data?.coin?.name }</span>
                    <span className="symbol">{ coin.data?.coin?.symbol }</span>
                </div>
                </div>
                <div className="chartC">
                <LineChart/>
                <p>{ coin.data.coin.description }</p>
                </div>
              
              <div className="mt-8 flex flex-row gap-72 font-semibold text-lg mx-auto w-fit">
              <div className="supply flex flex-col gap-2">
                    <span>24h volume: { formatNumber(coin?.data?.coin?.["24hVolume"]) }</span>
                    <span>Total supply: { formatNumber(coin.data.coin.supply.supplyAt) }</span>
                    <span>Circulating supply: { formatNumber(coin.data.coin.supply.circulating) }</span>
                    <span>BTC price: { formatNumber(coin.data.coin.btcPrice )}</span>
                    <span>Number of markets: { coin.data.coin?.numberOfMarkets }</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Rank: { coin.data.coin?.rank }</span>
                    <span>Max supply: { formatNumber(coin.data?.coin?.supply.max) }</span>
                    <span>Market cap: { coin.data.coin.marketCap }</span>
                    <span>Highest Price Ever: ${ Number(coin.data.coin?.allTimeHigh.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }</span>
                    <span>Number of exchanges: { coin.data.coin?.numberOfExchanges }</span>
                </div>
              </div>
                </>)
            }
             <NewsSwiper/>
        </div>
   </DefaultLayout>
    )
}
