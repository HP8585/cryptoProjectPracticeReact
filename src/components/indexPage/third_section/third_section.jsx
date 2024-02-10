import { SliceOne, SliceTwo, SliceThree, SliceFour } from "./index"
import "../../../assets/css/indexPage/third.css";
import intersectionObserver from "../../../composables/observer";
import { useRef } from "react";
import { useEffect } from "react";

export function ThirdSection(){
    const TSRef = useRef(null);

    useEffect(()=>{
        intersectionObserver(TSRef.current)
    }, [])
    return(
        <div className="py-44 w-fit mx-auto TSContainer" ref={TSRef}>
            <h1 className="text-5xl font-semibold mb-12 text-center">Your crypto journey starts here</h1>
            <br />
            <div className="flex flex-col lg:flex-row gap-4">
                
            <div className="one_two">
                <SliceOne/>
                <SliceTwo/>
            </div>

            <div className="flex flex-col gap-4">
                <SliceThree/>
                <SliceFour/>
            </div>
            </div>
        </div>
    )
}