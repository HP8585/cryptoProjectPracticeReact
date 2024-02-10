const coinss = [
    {
      uuid: "Qwsogvtv82FCd",
      symbol: "BTC",
      name: "Bitcoin",
      color: "#f7931A",
      iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
      marketCap: "842489447151",
      price: "42938.1503058286",
      listedAt: 1330214400,
      tier: 1,
      change: "0.39",
      rank: 1,
      lowVolume: false,
      coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
      "24hVolume": "22941460123",
      btcPrice: "1",
    },
    {
      uuid: "razxDUgYGNAdQ",
      symbol: "ETH",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "288614179131",
      price: "2364.47731915092",
      listedAt: 1438905600,
      tier: 1,
      change: "1.82",
      rank: 2,
      lowVolume: false,
      coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
      "24hVolume": "8207061394",
      btcPrice: "0.05506705114938209",
    },
    {
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        marketCap: "842489447151",
        price: "42938.1503058286",
        listedAt: 1330214400,
        tier: 1,
        change: "-0.39",
        rank: 1,
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "24hVolume": "22941460123",
        btcPrice: "1",
      },
    {
      uuid: "HIVsRcGKkPFtW",
      symbol: "USDT",
      name: "Tether USD",
      color: "#22a079",
      iconUrl: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
      marketCap: "96251913039",
      price: "1.0007330764402722",
      listedAt: 1420761600,
      tier: 1,
      change: "0.05",
      rank: 3,
      lowVolume: false,
      coinrankingUrl: "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
      "24hVolume": "111270493786",
      btcPrice: "0.000023306385331285",
    },
    {
        uuid: "razxDUgYGNAdQ",
        symbol: "ETH",
        name: "Ethereum",
        color: "#3C3C3D",
        iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        marketCap: "288614179131",
        price: "2364.47731915092",
        listedAt: 1438905600,
        tier: 1,
        change: "-1.82",
        rank: 2,
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
        "24hVolume": "8207061394",
        btcPrice: "0.05506705114938209",
      }
  ];


export default function SliceTwo(){

    return(
        <div className="slTwo">
          <div className="headText">
            <span className="alert">Price Alerts</span>
            <span className="notify">Be notified on BTC, ETH, XRP prices, and more.</span>
          </div>
          
          <ul>
            { coinss.map((item, idx)=>{
                return <li key={idx}>
                    <div className="name_icon">
                        <div className="flex flex-col">
                           <span>{ item.name }</span>
                           <span>{ item.symbol }</span> 
                        </div>
                        <img src={ item.iconUrl } className="max-w-6" />
                    </div>

                    <div className="price_change">
                        <span className="price">${ Number(item.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }</span>
                        <span className={ item.change >= 0 ? "text-green-500" : "text-red-600" }>
                            { item.change >= 0 ? <i className="fa fa-caret-up"/> : <i className="fa fa-caret-down"/> }
                            { item.change }%</span>
                    </div>
                </li>
            }) }
          </ul>
        </div>
    )
}