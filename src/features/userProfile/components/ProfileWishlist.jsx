import styled from 'styled-components';
import ProductCard from '../../products/components/ProductCard/ProductCard'
import EmptyMessage from './EmptyMessage';
const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
    animation: animate  0.4s ease;
  @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
    100%{
   opacity: 1;
    }
  }
`;

const WishlistItem = styled.div`
  background: var(--color-neutral-100);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;


const RemoveButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 4px 12px;
  background: none;
  border: 1px solid var(--color-error-800);
  border-radius: 6px;
  color: var(--color-error-800);
  cursor: pointer;
  font-size: var(--font-body-xxl);
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-error-800);
    color: white;
  }
`;


function ProfileWishlist({ items }) {
  if (items.length === 0) {
    return <EmptyMessage text = 'هیچ محصولی در علاقه مندی وجود ندارد' />
  }

  return (
    <WishlistContainer>
      {items.map((item) => (
        <WishlistItem key={item.id}>
          <ProductCard 
            key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          originalPrice={item.originalPrice}
          rating={item.rating}
          colors={item.colors}
          sizes={item.sizes}
          />
          <RemoveButton>حذف</RemoveButton>
        </WishlistItem>
      ))}
    </WishlistContainer>
  );
}

export default ProfileWishlist;