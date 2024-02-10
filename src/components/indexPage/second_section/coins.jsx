import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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
    sparkline: [
      "42815.78457248762",
      "42873.084386373026",
      "42933.67408212567",
      "43096.07544345032",
      "43256.84541879258",
      "43192.208812391844",
      "43156.40668597532",
      "43185.537043530654",
      "43170.31027573594",
      "43174.46179223516",
      "43173.428702105164",
      "43138.116466846244",
      "43103.268775953366",
      "43133.23302726868",
      "43066.59171588709",
      "42944.38560921531",
      "42870.50577355441",
      "42972.27069591985",
      "42954.03467204535",
      "42948.45465991688",
      "42937.85472336173",
      "43030.5841594596",
      "43084.50874761254",
      "42930.51210278065",
    ],
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
    sparkline: [
      "2325.674421552544",
      "2332.5350489763673",
      "2339.1069733857407",
      "2339.2122177301308",
      "2349.357919040493",
      "2353.7725346817256",
      "2355.55272885631",
      "2369.139315529198",
      "2383.5563561178633",
      "2381.896085515941",
      "2381.027342080829",
      "2376.928619104499",
      "2379.7607969999012",
      "2382.700067450763",
      "2377.5292657819095",
      "2371.09600961051",
      "2363.134921896734",
      "2363.8572012766926",
      "2363.1958109880547",
      "2363.2647856225863",
      "2361.4391158061726",
      "2367.5786936837308",
      "2367.9497216469736",
      "2359.257397715094",
    ],
    lowVolume: false,
    coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
    "24hVolume": "8207061394",
    btcPrice: "0.05506705114938209",
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
    sparkline: [
      "0.9999112568051909",
      "0.9997443414462751",
      "0.999700877869388",
      "0.9997926465391455",
      "0.9997994802663147",
      "0.9998251404305873",
      "0.9997496665061931",
      "0.9997928109286883",
      "0.9999397670843575",
      "0.9999584693018339",
      "0.9999986992535048",
      "1.0001950302137448",
      "0.9998890819364509",
      "0.9998965708706703",
      "1.000163248485425",
      "1.0001137787759757",
      "0.9998158151553965",
      "0.9997509479015162",
      "0.9998916340885021",
      "0.9999106188110958",
      "0.9999115386027005",
      "0.9996603843420441",
      "0.9999328303982138",
      "0.9997841413401993",
    ],
    lowVolume: false,
    coinrankingUrl: "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
    "24hVolume": "111270493786",
    btcPrice: "0.000023306385331285",
  },
];

export default function Coins() {
    const coins= useSelector(state=> state.list.coins);
    const navigateTo = useNavigate();
  return (
    <div>
      <ul className="coinsList">
        {coins.map((item, index) => {
          return (
            <li key={index}>
              <img src={item?.iconUrl} className="max-w-10 max-h-12 hidden lg:block" />
              <div className="name_symbol">
                <span className="name">{item?.name}</span>
                <span className="symbol">{item?.symbol}</span>
              </div>

             <div className="flex flex-col items-end">
             <span className="price">
                $
                {Number(item?.price).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>

              <span
                  className={
                    item?.change >= 0
                      ? "text-green-500 change2"
                      : "text-red-600 change2"
                  }
                >
                  {item?.change >= 0 ? `+${item?.change}` : `${item?.change}`}%
                </span>
             </div>

              <div>
                <span
                  className={
                    item?.change >= 0
                      ? "text-green-500 change"
                      : "text-red-600 change"
                  }
                >
                  {item?.change >= 0 ? `+${item?.change}` : `${item?.change}`}%
                </span>
                <span className="marketCap">
                  ${Number(item?.marketCap).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <button className="more" onClick={()=> navigateTo(`/coin/${ item.uuid }`)}>More</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
