import React, { useEffect } from "react";
import DefaultLayout from "../layouts/Default";
import { FirstSection, SecondSection, ThirdSection } from "../components/indexPage";
import { useNavigation } from "react-router-dom"; 

function App() {
  return (
    <>
    {  useNavigation().state === "loading" ? <h1>Loading...</h1> : 
      <DefaultLayout>
        <FirstSection />
        <SecondSection/>
        <ThirdSection/>
      </DefaultLayout>
}
    </>
  );
}

export default App;
