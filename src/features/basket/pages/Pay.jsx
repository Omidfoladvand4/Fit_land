// src/features/basket/pages/Pay.jsx
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;
  margin: 16px 0;
`;
const Title = styled.h2`
  font-size: var(--font-body-lg);
  color: var(--color-base-secondary);
`;
const Box = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 20px;
  background: white;
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
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $selected }) =>
    $selected ? "var(--color-info-100)" : "white"};
  border-color: ${({ $selected }) =>
    $selected ? "var(--color-base-primary)" : "var(--color-neutral-300)"};
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
`;

const MapWrapper = styled.div`
  flex: 1;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-300);
  background: #f4f4f4;
`;

const TimeSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-base-secondary);
`;
const TimeButton = styled.button`
  background: var(--color-base-primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

function Pay() {
  const { items } = useOutletContext();

  // آدرس انتخابی (این آدرس باید از مرحله قبل ذخیره شده باشد)
  // اگر آدرس هنوز ذخیره نشده، از آدرس پیش‌فرض استفاده می‌کنیم
  const selectedAddress = "بجنورد، میدان شهید بهشتی، خیابان ۱۷ شهریور، کوچه عزیز معرف پلاک ۱۳";
  
  // مختصات آدرس انتخابی (پیش‌فرض: بجنورد)
  const selectedPosition = [37.5485, 57.3235];

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
            <span>💳</span> تو بانک
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
          <AddressText>
            {selectedAddress}
          </AddressText>

          {/* فقط نمایش نقشه */}
          <MapWrapper>
            <MapContainer
              center={selectedPosition}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
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