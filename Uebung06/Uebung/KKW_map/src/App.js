import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup, useMap , Circle, CircleMarker} from 'react-leaflet'


function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

var Koord = [
  [46.968872773, 7.268042402],
  [47.36607556, 7.966750757],
  [47.552019433, 8.228391684],
  [47.601455367, 8.182823992]
];

return (
  <MapContainer center={[47, 8]} zoom={8} scrollWheelZoom={true}>
  <TileLayer url="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
      attribution='&copy; swisstopo'
  />

  <Marker position={Koord[0]}>
    <Popup>
      Mühleberg<br/>Noch keine Kernschmelze
    </Popup>
  </Marker>

  <Marker position={Koord[1]}>
    <Popup>
      Gösgen<br/>Noch keine Kernschmelze
    </Popup>
  </Marker>

  <Marker position={Koord[2]}>
    <Popup>
      Beznau<br/>Noch keine Kernschmelze
    </Popup>
  </Marker>

  <Marker position={Koord[3]}>
    <Popup>
      Leibstadt<br/>Noch keine Kernschmelze
    </Popup>
  </Marker>

<Circle center={Koord[0]} radius={50000} pathOptions={{ color: 'green' }}></Circle>
<Circle center={Koord[1]} radius={50000} pathOptions={{ color: 'red' }}></Circle>
<Circle center={Koord[2]} radius={50000} pathOptions={{ color: 'blue' }}></Circle>
<Circle center={Koord[3]} radius={50000} pathOptions={{ color: 'magenta' }}></Circle>

</MapContainer>
  );
}

export default App;
