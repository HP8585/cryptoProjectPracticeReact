import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";


const formatDate = (date)=>{
    const milliseconds = date * 1000;
    const short = new Intl.DateTimeFormat("en-us", {
        dateStyle: 'short',
        timeStyle: 'short'
    }).format(new Date(milliseconds));
    return short
}


const LineChart = () => {
  const dataArr = useSelector(state=> state.PH.history)
  const [data, setData] = useState(null)
  const data2 = {
    labels: ['jan', 'feb', 'asd', 'khg', '321', 'o', 'j', '87'],
    datasets: [
      {
        label: 'price', 
        backgroundColor: "#2563eb", 
        borderColor: "#2563eb", 
        data: [10, 4 , 20, 4, 87, 65, 44, 90]
      },
    ],
  };
 useEffect(()=>{
  console.log('shaaash', dataArr);
  setData( {
    labels: dataArr.map(obj=> formatDate(obj?.timestamp)),
    // labels: ['jan', 'feb', 'asd', 'khg', '321', 'o', 'j', '87'],
    datasets: [
      {
        label: 'price', 
        backgroundColor: "#2563eb", 
        borderColor: "#2563eb", 
        data: dataArr.map(obj=> parseFloat(obj?.price))
        // data: [10, 4 , 20, 4, 87, 65, 44, 90]
      },
    ],
  })
  //  data = {
  //   labels: dataArr.map(obj=> formatDate(obj?.timestamp)),
  //   // labels: ['jan', 'feb', 'asd', 'khg', '321', 'o', 'j', '87'],
  //   datasets: [
  //     {
  //       label: 'price', 
  //       backgroundColor: "#2563eb", 
  //       borderColor: "#2563eb", 
  //       data: dataArr.map(obj=> parseFloat(obj?.price))
  //       // data: [10, 4 , 20, 4, 87, 65, 44, 90]
  //     },
  //   ],
  // };
 }, [dataArr])
  return (
    <div className="max-w-[70em] max-h-[30em] mx-auto">
      <Line data={data ? data : data2} className="w-[100em]"/> 
    </div>
  );
};

export default LineChart; 
