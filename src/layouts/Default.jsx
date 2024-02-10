import "../assets/css/default_layout/main.css";
import { useSelector, useDispatch } from "react-redux";
import ProductsModal from "../components/modals/header/ProductsModal";
import CompanyModal from "../components/modals/header/CompanyModal";
import { modalHover, modalUnhover } from "../stateSlices/header/header";
import _ from "lodash";
import { useState } from "react";




export default function DefaultLayout({ children }) {
  const productsMo = useSelector((state) => state.header.productsModal);
  const [productsMo2, setProductsMo2] = useState(false);
  const companyMo = useSelector((state) => state.header.companyModal);
  const [ companyMo2, setCompanyMo2] = useState(false);


  const dispatch = useDispatch();
  const debouncedModalHover = _.debounce((modal) => dispatch(modalHover(modal)), 100);
  const debouncedModalUnhover = _.debounce((modal) => dispatch(modalUnhover(modal)), 100);

  return (
    <div className="w-screen h-screen">
      <header>
        <div className="Hcontainer">
          <div className="logoContainer">
            <span className="logo">CryptoLand</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png"
              alt=""
            />
          </div>
          <ul>
            <li className="rewards">
              Rewards+
              <span className="new">NEW</span>
            </li>
            <li>Prices</li>
            <li
              onMouseOver={() => debouncedModalHover("productsModal")}
              onMouseLeave={() => debouncedModalUnhover("productsModal")}
            >
              Products <i className="fa fa-chevron-down" />
            </li>
            {(productsMo || productsMo2) && (
              <ProductsModal setProductsMo2={setProductsMo2} />
            )}
            <li
            onMouseOver={() => debouncedModalHover("companyModal")}
            onMouseLeave={() => debouncedModalUnhover("companyModal")}
            >
              Company <i className="fa fa-chevron-down" />
            </li>
            {(companyMo || companyMo2) && (
              <CompanyModal setCompanyMo2={setCompanyMo2} />
            )}
          </ul>
          <div className="SL">
            {/* <div>Sign up</div> */}
            <div className=" login">Login <i className="fa fa-user"/></div>
          </div>
        </div>
      </header>

      <main className="px-6">{children}</main>

    
    </div>
  );
}
