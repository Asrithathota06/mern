import { useState } from "react";
import { getWeather } from "./services/weatherService";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [data, setData] = useState([]);

  const fetchData=async()=>{
    const res=await getWeather(city);
    setData(res.list.slice(0,8));
  }

  const chartData={
    labels:data.map((d)=>d.dt_txt), 
    datasets: [
      {
        label: "Temp (Celsius)",
        data: data.map((d) => d.main.temp),
        borderColor: "blue",
    },
  ],
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchData}>Get Weather</button>
      {data.length>0 && <Line data={chartData} />}
    </div>
  );
}

export default App;