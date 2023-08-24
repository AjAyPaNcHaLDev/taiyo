import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DashItems = () => {
  const { data } = useQuery<any>(['covid-19/all'], async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    return res.data; // Return the 'data' property from the response
  });

  // Check if data is available before rendering
  if (!data) {
    return <div>Loading...</div>;
  }

  const propertiesToDisplay = Object.keys(data);

  return (
    <>
      {propertiesToDisplay.map((property, index) => (
        <div
          key={index}
          className="p-5 w-min flex flex-col bg-white shadow-sm rounded-md justify-center text-center"
        >
          <h3 className="capitalize w-25">
            {property.replace(/([A-Z])/g, " $1")}
          </h3>
          <h1 className="font-extrabold">{data[property]}</h1>
        </div>
      ))}
    </>
  );
};

export default DashItems;
