import { useEffect, useRef } from "react";
import "../../assets/css/indexPage/first.css";
import * as Images from "../../assets/img";
import intersectionObserver from "../../composables/observer";


export default function FirstSection() {
    const phoneRef = useRef(null)
    useEffect(()=>{
        intersectionObserver(phoneRef.current)
    }, [])
  return (
    <div className="FSContainer">
      <h1>Europe’s Premier <br /> Crypto Trading Platform</h1>
      <span className="Buy">Buy Bitcoin, Ethereum, and 250+ cryptocurrencies with EUR</span>
      <ul>
        {new Array(3).fill(0).map((item, index) => {
          return (
            <li key={index}>
              <i className="fa fa-check" />
              <span
              className="assurances"
                dangerouslySetInnerHTML={{
                  __html:
                    index === 0
                      ? "<span>Transfer EUR</span> via SEPA and Apple/Google Pay*"
                      : index === 1
                      ? "Leader in <span>regulatory compliance</span> and <span>security certifications</span>"
                      : "Trusted by <span>over 80 million users</span> worldwide",
                }}
              />
            </li>
          );
        })}
        <small>*Dependent on jurisdiction.</small>
      </ul>

        <button
        className="download"
        >Download App
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10.38 4.74a.75.75 0 01.75-.75h1.827a.75.75 0 010 1.5H11.13a.75.75 0 01-.75-.75zM10.38 7.478a.75.75 0 01.75-.75h1.827a.75.75 0 010 1.5H11.13a.75.75 0 01-.75-.75z" fill="currentColor"></path><path clipRule="evenodd" d="M11.13 1.25a.75.75 0 01.75.75v2.648a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM1.25 11.13a.75.75 0 01.75-.75h1.826a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75zM5.815 12.043a.75.75 0 01.75-.75h5.478a.75.75 0 110 1.5H6.565a.75.75 0 01-.75-.75zM10.38 22.087a.75.75 0 01.75-.75h1.827a.75.75 0 010 1.5H11.13a.75.75 0 01-.75-.75z" fill="currentColor"></path><path clipRule="evenodd" d="M12.043 11.567a.75.75 0 01.75.75v2.466a.75.75 0 01-1.5 0v-2.466a.75.75 0 01.75-.75zM14.783 14.946a.75.75 0 01.75.75v2.739a.75.75 0 01-1.5 0v-2.74a.75.75 0 01.75-.75zM22.087 18.598a.75.75 0 01.75.75v2.739a.75.75 0 01-1.5 0v-2.74a.75.75 0 01.75-.75zM11.13 17.685a.75.75 0 01.75.75v3.652a.75.75 0 11-1.5 0v-3.652a.75.75 0 01.75-.75zM16.609 19.51a.75.75 0 01.75.75v1.827a.75.75 0 11-1.5 0V20.26a.75.75 0 01.75-.75zM22.087 14.672a.75.75 0 01.75.75V16.7a.75.75 0 01-1.5 0v-1.278a.75.75 0 01.75-.75zM3.826 10.38a.75.75 0 01.75.75v1.826a.75.75 0 01-1.5 0V11.13a.75.75 0 01.75-.75zM6.565 10.38a.75.75 0 01.75.75v.913a.75.75 0 01-1.5 0v-.913a.75.75 0 01.75-.75zM15.859 11.13a.75.75 0 01.75-.75h3.287a.75.75 0 01.75.75v1.826a.75.75 0 01-1.5 0V11.88h-2.537a.75.75 0 01-.75-.75z" fill="currentColor"></path><path  clipRule="evenodd" d="M14.033 15.696a.75.75 0 01.75-.75h3.652a.75.75 0 01.75.75v1.37a.75.75 0 01-1.5 0v-.62h-2.902a.75.75 0 01-.75-.75zM19.146 12.957a.75.75 0 01.75-.75h2.19a.75.75 0 010 1.5h-2.19a.75.75 0 01-.75-.75zM18.598 22.087a.75.75 0 01.75-.75h2.739a.75.75 0 010 1.5h-2.74a.75.75 0 01-.75-.75zM15.859 3c0-.966.783-1.75 1.75-1.75h3.478c.966 0 1.75.784 1.75 1.75v3.478a1.75 1.75 0 01-1.75 1.75h-3.478a1.75 1.75 0 01-1.75-1.75V3zm1.75-.25a.25.25 0 00-.25.25v3.478c0 .138.112.25.25.25h3.478a.25.25 0 00.25-.25V3a.25.25 0 00-.25-.25h-3.478zM1.25 3c0-.966.784-1.75 1.75-1.75h3.478c.967 0 1.75.784 1.75 1.75v3.478a1.75 1.75 0 01-1.75 1.75H3a1.75 1.75 0 01-1.75-1.75V3zM3 2.75a.25.25 0 00-.25.25v3.478c0 .138.112.25.25.25h3.478a.25.25 0 00.25-.25V3a.25.25 0 00-.25-.25H3zM1.25 17.609c0-.967.784-1.75 1.75-1.75h3.478c.967 0 1.75.783 1.75 1.75v3.478a1.75 1.75 0 01-1.75 1.75H3a1.75 1.75 0 01-1.75-1.75V17.61zm1.75-.25a.25.25 0 00-.25.25v3.478c0 .138.112.25.25.25h3.478a.25.25 0 00.25-.25V17.61a.25.25 0 00-.25-.25H3z" fill="currentColor"></path></svg>
        </button>

        <div className="phoneContainer" ref={phoneRef}>
            <div className="abstract"/>
        <img
        
        src={Images.Phone} className="phoneHero" />
        </div>
    </div>
  );
}

