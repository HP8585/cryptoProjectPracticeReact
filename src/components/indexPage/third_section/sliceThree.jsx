import { PhoneCalendar } from "../../../assets/img";

export default function SliceThree(){

    return(
        <div className="slThree">
            <div className="headText">
                <span className="recur">Recurring Buy</span>
                <span className="grow">Grow your portfolio automatically with daily, weekly, or monthly trades.</span>
            </div>
            <div className="h-[24em]"/>
            <img src={ PhoneCalendar } className="max-w-[22em] absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
    )
}