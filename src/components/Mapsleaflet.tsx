import { MapContainer, TileLayer ,Marker ,Popup} from "react-leaflet";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

  const Map: React.FC = () => {
  const { data } = useQuery<any>(['covid-19/covid-19/countries'], async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries");
    return res.data; // Return the 'data' property from the response
  });

  if (!data) {
    return <div>Loading...</div>;
  }

const countriesData=data;

  return (
    <MapContainer center={{ lat: 48.71291, lng: 44.52693 }} zoom={6} style={{height:"100vh",width:"100vh"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

  {
  countriesData.map((country:any) => (
        <Marker
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>))
  }
    </MapContainer>
  );
};
export default Map
