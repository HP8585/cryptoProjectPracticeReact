import { Coins } from "../../../assets/img";

export default function SliceOne() {
  return (
    <div className="slFour">
      <div>
        <span className="on">On-chain Staking</span>
        <p className="generate">Generate passive income by helping to secure blockchains.</p>
      </div>
      <img src={Coins} className="w-56" />
    </div>
  );
}
