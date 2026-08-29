import styled from "styled-components";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocIcon from "../Icons/LocationIcon";
import { Link } from "react-router-dom";

let DefaultIcon = L.divIcon({
  className: "custom-div-icon",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FA541C" stroke="none">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="#FFFFFF" stroke="none"></circle>
    </svg>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
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
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  margin: 16px;
  font-size: var(--font-body-md);
  @media (max-width: 490px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  background: var(--color-base-background);
  @media (max-width: 490px) {
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
  background: var(--color-base-background);
  z-index: 1;
`;

const ConfirmButton = styled(Link)`
  width: 100%;
  max-width: 300px;
  margin-top: 24px;
  background: var(--color-base-primary);
  color: var(--color-base-background);

  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 786px) {
    width: 10em;
  }
`;

function ClickHandler({ setPosition, setAddress }) {
  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2&accept-language=fa`,
          {
            headers: {
              "User-Agent": "MyFitLandApp/1.0 (my-email@example.com)",
            },
          },
        );
        const data = await response.json();
        setAddress(data.display_name || "آدرس نامشخص");
      } catch (error) {
        setAddress(error, "آدرس نامشخص");
      }
    },
  });
  return null;
}

function AddLocation() {
  // Defulat loc (tehran)
  const [position, setPosition] = useState([35.7219, 51.3347]);
  const [address, setAddress] = useState("آدرس خود را روی نقشه انتخاب کنید");

  return (
    <LocationContainer>
      <Title>آدرس ارسال</Title>
      <Subtitle>آدرس‌ی شما ثبت نشده است.</Subtitle>

      <FormBox>
        <InputGroup>
          <Select defaultValue="">
            <option value="" disabled>
              استان
            </option>
            <option>تهران</option>
            <option>اصفهان</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>
              شهر
            </option>
            <option>تهران</option>
          </Select>
        </InputGroup>
        <Input placeholder="خیابان" />
        <Input placeholder="کوچه" />
        <Input placeholder="کد پستی" />
      </FormBox>

      <MapBox>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}>
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

      <p
        style={{
          marginTop: "8px",
          color: "var(--color-base-secondary)",
          fontWeight: "bold",
        }}>
        {address}
      </p>

      <ConfirmButton to="/Basket/Pay">
        ثبت آدرس <LocIcon />
      </ConfirmButton>
    </LocationContainer>
  );
}
export default AddLocation;
