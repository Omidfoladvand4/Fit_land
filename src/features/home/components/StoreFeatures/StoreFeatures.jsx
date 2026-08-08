import styled from 'styled-components';
import StoreFeaturesIcon1 from  '../StoreFeatures/Icons/StoreFeaturesIcon1.png'
import StoreFeaturesIcon2 from  '../StoreFeatures/Icons/StoreFeaturesIcon2.png'
import StoreFeaturesIcon3 from  '../StoreFeatures/Icons/StoreFeaturesIcon3.png'

const FeaturesContainer = styled.div`
    background: var(--color-info-200);
    padding: 32px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    margin :var(--global-margin-small) 0;
    @media (max-width : 490px) {
         flex-direction: column;
         margin:  0;
    }
`
const Description = styled.div`
    width: 25%;
    color: var(--color-base-secondary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-body-large);
       @media (max-width : 490px) {
        width: 100%;
    font-size: var(--font-body-large);
    text-align: center;

    }
`
const FeaturesList = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
       @media (max-width : 490px) {
         width: 100%;
    }
`
const FeatureItem = styled.div`
    width: 30%;
    height: 150px;
    padding: 18px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: var(--color-base-background);
    border: 1px solid var(--color-base-secondary);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-16px);
        box-shadow: 1px 8px 0px  var(--color-base-secondary);
    }
    @media (max-width : 490px) {
         text-align: center;
         padding: 0;
         height: 130px;
    }

`
const Icon = styled.img`
    object-fit: cover;
`
const Text = styled.div`
    text-align: center;
    width: 70%;
    font-weight: var(--font-weight-bold);
    color: var(--color-base-secondary);



`

const StoreFeatures = () => {
  return (
    <FeaturesContainer>
    
      <FeaturesList>
        <FeatureItem>
          <Icon src={StoreFeaturesIcon1}/>
          <Text>پرداخت درب منزل</Text>
        </FeatureItem>
        <FeatureItem>
          <Icon src={StoreFeaturesIcon2}/>
          <Text>پرداخت قسطی</Text>
        </FeatureItem>
        <FeatureItem>
          <Icon src={StoreFeaturesIcon3}/>
          <Text>ارسال سریع</Text>
        </FeatureItem>
      </FeaturesList>

        <Description>
        با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی
      </Description>
    </FeaturesContainer>
  );
};

export default StoreFeatures;