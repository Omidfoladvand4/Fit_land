import styled from "styled-components";
import LocIcon from "../Icons/LocationIcon";

const LocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin: 16px 0;
`;
const Title = styled.h2`
  font-size: var(--font-body-lg);
  color: var(--color-base-secondary);
  margin-bottom: 8px;
`;
const Subtitle = styled.p`
  color: var(--color-neutral-800);
  margin-bottom: 24px;
`;
const FormBox = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
`;
const InputGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  font-size: var(--font-body-md);
`;
const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  background: white;
`;
const MapBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e3df;
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
`;

function AddLocation() {
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
        <img
          src="https://via.placeholder.com/800x300?text=Map"
          alt="نقشه"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </MapBox>
      <ConfirmButton>
        ثبت آدرس <LocIcon />
      </ConfirmButton>
    </LocationContainer>
  );
}
export default AddLocation;
