import styled from 'styled-components'
import CloseIcon from '../../shared/header/images/icons/CloseIcon'
const CartItem = styled.div`
    width: 100%;
    display: flex;
    height: 280px;
    gap: 16px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--color-neutral-800);
   position: relative;
`
const ImageBoxItem = styled.div`
    width: 40%;
    position: relative;
`
const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Discount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    background-color: var(--color-base-primary);
    position :absolute ;
    top: 0;
    right: 0;
    border-bottom-left-radius: 25%;
    color: var(--color-base-background);
    font-weight: 600;
`
const ItemInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
    position: relative;
    h1 , h2{
        display: block;
    }
`
const ItemName = styled.h1`
    
    font-size: var(--font-body-xxl);
`
const ItemCategory = styled.h2`
        font-size: var(--font-body-large);
        color: var(--color-neutral-800);
`
const Price = styled.div`
           font-size: var(--font-body-xl);
        color: var(--color-base-secondary);
        font-weight: bolder;
`
const Oldprice = styled.div`
         font-size: var(--font-body-xl);
        color: var(--color-neutral-800);
        font-weight: 500;
        text-decoration: line-through;
`
const Size = styled.div`
     color: var(--color-base-secondary);
     font-weight: 700;
     font-size: var(--font-body-large);
`
const ColorBox = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const ColorName = styled.div`
    color: var(--color-neutral-800);
`
const Color = styled.div`
    width : 40px;
    height: 40px;
    border-radius: 50%;
     background-color: ${({ $bgColor }) => $bgColor || "var(--color-neutral-300)"};
`

const Buttons = styled.div`
   width: 150px;
   position :absolute ;
   bottom: 14px;
   left: 12px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   color: var(--color-neutral-800);
   border: 1px solid var(--color-neutral-800);
`
const Count = styled.div`
   font-size: var(--font-body-xl);
    
`
const Btn = styled.div`
    cursor: pointer;
     font-size: var(--font-body-xxxl);
`
const DeleteIcon = styled.div`
    position: absolute;
    top: 7px;
    left: 8px;
    cursor: pointer;
`
function BasketItem({item}) {
  return (
    <CartItem>
            <ImageBoxItem > 
                <ImageItem src= {item.image}/>
                {item.hasDiscount && (

                <Discount >%{item.discount}</Discount>
                )}
            </ImageBoxItem>
            <ItemInfo>  
                <ItemName>{item.title}</ItemName>
                <ItemCategory>{item.category}</ItemCategory>
                <Price>{item.price}تومان</Price>
                {item.hasDiscount && (
                    <Oldprice>{item.originalPrice}</Oldprice>

                )}
                <Size>سایز :  {item.sizes[0]}</Size>
             <ColorBox>
              <ColorName> رنگ : {item.colors[0].name}</ColorName>
             <Color $bgColor = {item.colors[0].hex}></Color>
             </ColorBox>
             <Buttons >
               <Btn >-</Btn>
               <Count >1</Count>
               <Btn >+</Btn>
            </Buttons>
            </ItemInfo>
            <DeleteIcon ><CloseIcon /></DeleteIcon>
    </CartItem>
  )
}

export default BasketItem