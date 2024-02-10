import { PhoneHand } from "../../../assets/img"

export default function SliceOne(){

    return(
        <div className="slOne">
            <div className="headText">
                <span className="text-blue-500">Buy crypto</span>
                <span className="max-w-[206px] ">Buy BTC, ETH, and other crypto easily via bank transfer.</span>
            </div>
            <div className="w-36 h-40"/>
            <img src={PhoneHand} className="w-36 absolute bottom-0 right-1" />
        </div>
    )
}