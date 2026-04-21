import axios from "axios";

const API_KEY="86583a4fa46e0c89d17d27cd117ff9d7";

export const getWeather=async(city)=>{
    const res=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};
