import { Card} from 'flowbite-react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const CovidCards = () => {
    const { data } = useQuery<any>(['covid-19/countries'], async () => {
        const res = await axios.get("https://disease.sh/v3/covid-19/countries");
        return res.data; // Return the 'data' property from the response
      });
    
      // Check if data is available before rendering
      if (!data) {
        return <div>Loading...</div>;
      }
     
        return (
         <>
         {
            data.map((data:any,key:number)=> <Card key={key}> 
            <h3><b>{data.country}</b></h3>
            <div className="flex flex-col items-center pb-10">

            <img src={data.countryInfo.flag} alt={data.country} />
            </div> 
            Cases: {data.cases}<br />
            Deaths: {data.deaths}<br />
            Recovered: {data.recovered}<br />
            Active: {data.active} 
            </Card>)
         }
         </>
        );
};



export default CovidCards;
