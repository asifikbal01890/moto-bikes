import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {

    const containerStyle = {
        width: '1200px',
        height: '400px',
      };
      
      const center = {
        lat: 40.7128, // Replace with your desired latitude
        lng: -74.0060, // Replace with your desired longitude
      };

    return (
        <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers or other components here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    );
}