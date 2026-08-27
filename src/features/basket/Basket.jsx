import styled from "styled-components"
import BasketItem from "./components/BasketItem"
import { products } from '../products/data/products'
import BasketSteps from "./components/BasketSteps"
const BsketContainer = styled.div`
    width: 90%;
    margin:  0 auto;
    padding: 32px 0;
    position: relative;
`
const BsketItems = styled.div`
width: 807px;
display: flex; 
align-items: center;
gap: 12px;
flex-direction: column;
`
function Basket() {
  return (
    <BsketContainer>
        <BasketSteps />
        <BsketItems>
                <BasketItem item={products[0]}/>
                <BasketItem item={products[5]}/>
                <BasketItem item={products[2]}/>
                <BasketItem item={products[3]}/>
        </BsketItems>
    </BsketContainer>
  )
}

export default Basket