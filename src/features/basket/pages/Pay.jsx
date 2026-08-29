import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;
  margin: 16px 0;
`;
const Title = styled.h2`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
`;
const Box = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 20px;
  background: var(--color-base-background);
`;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const MethodRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-neutral-500);
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $selected }) =>
    $selected ? "var(--color-info-200)" : "var(--color-base-background)"};
  border-color: ${({ $selected }) =>
    $selected ? "var(--color-base-primary)" : "var(--color-neutral-500)"};
`;
const MethodLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: var(--color-base-secondary);
`;
const AddressBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  color: var(--color-base-secondary);
  font-size: var(--font-body-md);
  line-height: 1.8;
`;
const AddressText = styled.div`
  flex: 1;
  font-size: var(--font-body-large);
`;

const MapWrapper = styled.div`
  flex: 1;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-500);
  background: var(--color-base-background);
`;

const TimeSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-base-secondary);
`;
const TimeButton = styled.button`
  background: var(--color-base-primary);
  color: var(--color-base-background);

  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

function Pay() {
  const { items } = useOutletContext();

  const selectedAddress =
    "تهران، میدان انقلاب، خیابان انقلاب، ابتدای خیابان کارگر شمالی، پلاک ۱۲";
  //  centeral theran location
  const selectedPosition = [35.6997, 51.338];

  if (!items || items.length === 0) {
    return <div>سبد خرید شما خالی است.</div>;
  }

  return (
    <PaymentContainer>
      <Title>انتخاب نحوه پرداخت</Title>
      <PaymentMethod>
        <MethodRow $selected>
          <MethodLabel>
            <span>🏦</span> بانک مسکن
          </MethodLabel>
          <input type="radio" checked readOnly />
        </MethodRow>
        <MethodRow>
          <MethodLabel>
            <span>💳</span> بانک شهر
          </MethodLabel>
          <input type="radio" />
        </MethodRow>
      </PaymentMethod>

      <Box>
        <Title style={{ marginBottom: "16px" }}>خلاصه محصولات</Title>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
              borderBottom: "1px solid #eee",
              paddingBottom: "8px",
            }}>
            <div>
              <strong>{item.title}</strong>
              <div>سایز: {item.sizes[0]}</div>
            </div>
            <div>{item.price.toLocaleString()} تومان</div>
          </div>
        ))}
      </Box>

      <Box>
        <Title style={{ marginBottom: "16px" }}>آدرس انتخابی شما</Title>
        <AddressBox>
          <AddressText>{selectedAddress}</AddressText>
          {/* just for show map */}
          <MapWrapper>
            <MapContainer
              center={selectedPosition}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={selectedPosition}>
                <Popup>{selectedAddress}</Popup>
              </Marker>
            </MapContainer>
          </MapWrapper>
        </AddressBox>
      </Box>

      <Box>
        <TimeSelection>
          <Title>زمان ارسال انتخابی شما</Title>
          <TimeButton>فردا</TimeButton>
        </TimeSelection>
      </Box>
    </PaymentContainer>
  );
}
export default Pay;
