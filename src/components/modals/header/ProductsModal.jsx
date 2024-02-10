import "../../../assets/css/modals/productsModal.css";

const getStarted = {
  buy_and_sell: [
    {
      title: "App",
      caption: "Buy Bitcoin, Ethereum, and 250+ cryptocurrencies",
    },
    {
      title: "CryptoLand.com NFT",
      caption: "Own the culture you love",
    },
  ],

  spend: [
    {
      title: "Metal visa cards",
      caption: "Up to 5% back on all spending",
    },
    {
      title: "CryptoLand.com Pay",
      caption: "Spend your crypto anywhere",
    },
  ],

  grow: [
    {
      title: "Rewards+",
      caption: "Make every trade more rewarding",
    },
    {
      title: "CryptoLand Earn",
      caption: "Get the most out of your assets",
    },
    {
      title: "On-chain Staking",
      caption: "Generate passive income",
    },
  ],
};

export default function ProductsModal({ setProductsMo2 }) {
  return (
    <div
      className="PMContainer"
      onMouseOver={() => setProductsMo2(true)}
      onMouseLeave={() => setProductsMo2(false)}
    >
        <div className="flex items-start gap-10">
        {Object.keys(getStarted).map((category, index) => {
        return (
         
            
            <ul key={index}>
              <h1 className="categoryName">{category == 'buy_and_sell' ? 'Buy and sell' : category}</h1>
              {getStarted[category].map((item, idx) => {
                return (
                  <li>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </li>
                );
              })}
            </ul>
          
        );
      })}
        </div>
    </div>
  );
}
