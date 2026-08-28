// src/features/basket/pages/AddLocation.jsx
import styled from "styled-components";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocIcon from "../Icons/LocationIcon";

// رفع مشکل آیکون‌های Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  margin-bottom: 8px;
  border-bottom: 1px solid var(--color-neutral-800);
`;

const Subtitle = styled.p`
  color: var(--color-neutral-800);
  margin-bottom: 24px;
`;

const FormBox = styled.div`
  width: 100%;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
    @media (max-width : 490px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  margin: 16px;
  font-size: var(--font-body-md);
  @media (max-width : 490px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  background: white;
    @media (max-width : 490px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const MapBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e3df;
  z-index: 1;
`;

const ConfirmButton = styled.button`
  width: 100%;
  max-width: 300px;
  margin-top: 24px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-lg);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width : 786px) {
    width : 8em ;
  }
`;

// کامپوننت داخلی برای کلیک روی نقشه و دریافت آدرس
function ClickHandler({ setPosition, setAddress }) {
  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);

      try {
        // دریافت آدرس فارسی
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2&accept-language=fa`,
          {
            headers: {
              'User-Agent': 'MyFitLandApp/1.0 (my-email@example.com)'
            }
          }
        );
        const data = await response.json();
        setAddress(data.display_name || "آدرس نامشخص");
      } catch (error) {
        setAddress("آدرس نامشخص");
      }
    },
  });
  return null;
}

function AddLocation() {
  // مختصات پیش‌فرض (تهران)
  const [position, setPosition] = useState([35.7219, 51.3347]);
  const [address, setAddress] = useState("آدرس خود را روی نقشه انتخاب کنید");

  return (
    <LocationContainer>
      <Title>آدرس ارسال</Title>
      <Subtitle>آدرس‌ی شما ثبت نشده است.</Subtitle>

      <FormBox>
        <InputGroup>
          <Select defaultValue="">
            <option value="" disabled>استان</option>
            <option>تهران</option>
            <option>اصفهان</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>شهر</option>
            <option>تهران</option>
          </Select>
        </InputGroup>
        <Input placeholder="خیابان" />
        <Input placeholder="کوچه" />
        <Input placeholder="کد پستی" />
      </FormBox>

      {/* نقشه واقعی */}
      <MapBox>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickHandler setPosition={setPosition} setAddress={setAddress} />
          {position && (
            <Marker position={position}>
              <Popup>{address}</Popup>
            </Marker>
          )}
        </MapContainer>
      </MapBox>

      {/* نمایش آدرس دریافتی */}
      <p style={{ marginTop: "8px", color: "var(--color-base-secondary)", fontWeight: "bold" }}>
        {address}
      </p>

      <ConfirmButton>
        ثبت آدرس <LocIcon />
      </ConfirmButton>
    </LocationContainer>
  );
}
export default AddLocation;