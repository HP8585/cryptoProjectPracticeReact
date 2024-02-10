import "../../../assets/css/indexPage/second.css"
import Coins from "./coins";
import { fetchData } from "../../../composables/fetchData";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import intersectionObserver from "../../../composables/observer";



export default function SecondSection(){
    const dispatch = useDispatch()
    const containerRef = useRef(null)

    useEffect(()=>{
        fetchData(dispatch)
       intersectionObserver(containerRef.current);
       
    }, [])

    return(
        <div className="SSContainer">
            <div  ref={containerRef} className="fake">
            <div className="headText">
            <span>CRYPTO.COM PRICE</span>
            <h1>Buy Bitcoin, Ethereum, and 250+ cyrptocurrencies</h1>
        </div>
        <button className="checkB">
        Check crypto prices 
        <svg width="1em" height="1em" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.773 4c.385 0 .698.307.698.686v13.943h17.907c.385 0 .697.307.697.685a.692.692 0 01-.697.686H2.773a.692.692 0 01-.698-.686V4.686c0-.379.313-.686.698-.686z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.315 6.273a.677.677 0 01.037.969l-5.92 6.27a.704.704 0 01-1.057-.04l-2.049-2.532-3.676 3.633a.706.706 0 01-.986.003.677.677 0 01-.003-.97l4.228-4.18a.704.704 0 011.041.057l2.032 2.51 5.367-5.684a.706.706 0 01.986-.036z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.69 6.776c0-.38.313-.686.698-.686h2.537c.386 0 .698.307.698.686V9.91a.692.692 0 01-.698.686.692.692 0 01-.697-.686V7.461h-1.84a.692.692 0 01-.697-.685z" fill="currentColor"></path></svg>
        </button>
        <Coins/>
            </div>
        </div>
    )
};