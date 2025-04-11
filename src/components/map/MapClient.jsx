import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslations } from "next-intl";

export default function MapClient({ position, name }) {
  const mapIcon = new L.Icon({
    iconUrl: "/icons/google-maps-marker.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
  const t = useTranslations("Cities");

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={mapIcon}>
        <Popup>{t("MonumentMapPopUp", { monument: name })}</Popup>
      </Marker>
    </MapContainer>
  );
}
