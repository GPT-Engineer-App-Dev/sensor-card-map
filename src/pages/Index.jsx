import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Custom pin icon
const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconRetinaUrl: require('../assets/pin-icon.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

const Index = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Generate 10 random markers for buildings in Oslo
    const osloCenter = { lat: 59.9139, lng: 10.7522 };
    const randomMarkers = Array.from({ length: 10 }).map(() => ({
      position: {
        lat: osloCenter.lat + (Math.random() - 0.5) * 0.1,
        lng: osloCenter.lng + (Math.random() - 0.5) * 0.1,
      },
      data: 'Proptech sensor data placeholder',
    }));
    setMarkers(randomMarkers);
  }, []);

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={pinIcon}>
            <Popup>{marker.data}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Index;