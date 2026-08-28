import{a as e,f as t,h as n,i as r,p as i,t as a,u as o}from"./index-OylXGWMp.js";import{t as s}from"./products-qadMkMRk.js";import{t as c}from"./StoreFeatures-DesmHa12.js";var l=n(t(),1),u=e=>{let[t,n]=(0,l.useState)(null),[r,i]=(0,l.useState)(!0),[a,o]=(0,l.useState)(null),[c,u]=(0,l.useState)([]);return(0,l.useEffect)(()=>{e?(async()=>{try{i(!0),setTimeout(()=>{let t=s.find(t=>t.id===Number(e));if(t){n(t),o(null);let e=s.filter(e=>e.category===t.category&&e.id!==t.id).slice(0,4);u(e)}else n(null),u([]),o(`محصول مورد نظر یافت نشد`);i(!1)},600)}catch(e){o(e,`خطا در دریافت اطلاعات محصول`),i(!1)}})():(i(!1),o(`شناسه محصول نامعتبر است`))},[e]),{product:t,loading:r,error:a,relatedProduct:c,addToCart:(e,n,r)=>(console.log(`محصول ${t?.title} با تعداد ${e} و سایز ${n} به سبد خرید اضافه شد`),!0),addToWishlist:()=>(console.log(`محصول ${t?.title} به علاقه‌مندی‌ها اضافه شد`),!0)}},d=i(),f=`https://picsum.photos/seed/fallback/600/600`,p=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,m=r.div`
  width: 100%;
  height: 380px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`,h=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0;
  flex-wrap: nowrap; 
  max-width: 100%; 

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-neutral-300);
  }

  @media (max-width: 768px) {
    gap: 8px; 
  }
`,g=r.div`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-800)`};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-base-primary);
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 85px; 
    height: 85px;
    border-radius: 10px;
    margin-left: -50px;
  }
`,_=r.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 120px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid var(--color-neutral-800);
  background: var(--color-neutral-500);
  color: var(--color-base-secondary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0; 
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-base-primary);
    color: var(--color-base-primary);
    background: var(--color-primary-light);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
    font-size: 10px; 
    border-radius: 10px;
    background: var(--color-neutral-500);
  }
`;function ee({images:e,onShowAllImages:t}){let[n,r]=(0,l.useState)(0);if(!e||e.length===0)return(0,d.jsx)(p,{children:(0,d.jsx)(m,{children:(0,d.jsx)(`img`,{src:f,alt:`تصویر محصول`})})});let i=e.length>3;return(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{children:(0,d.jsx)(`img`,{src:e[n]?.url||f,alt:e[n]?.alt||`تصویر محصول`,onError:e=>{e.target.src=f}})}),(0,d.jsxs)(h,{children:[e.map((e,t)=>(0,d.jsx)(g,{$active:n===t,onClick:()=>r(t),children:(0,d.jsx)(`img`,{src:e.url||f,alt:e.alt||`تصویر محصول`,onError:e=>{e.target.src=f}})},e.id||t)),i&&(0,d.jsxs)(_,{onClick:t,children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,d.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`}),(0,d.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,d.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]}),(0,d.jsx)(`span`,{children:`تصاویر بیشتر`})]})]})]})}var v=()=>(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:(0,d.jsx)(`path`,{fill:`#2F5F8A`,d:`M20.622 13.07c-.38 0-.7-.29-.75-.67a7.83 7.83 0 0 0-3.34-5.61.75.75 0 0 1-.19-1.04c.24-.34.71-.42 1.04-.19a9.34 9.34 0 0 1 3.97 6.68c.04.41-.25.78-.67.83zM3.492 13.12h-.08a.766.766 0 0 1-.67-.83c.27-2.69 1.7-5.12 3.91-6.69a.753.753 0 1 1 .87 1.23 7.85 7.85 0 0 0-3.29 5.62.74.74 0 0 1-.74.67M12.06 22.61c-1.48 0-2.89-.34-4.21-1a.75.75 0 0 1-.33-1.01.75.75 0 0 1 1.01-.33 7.9 7.9 0 0 0 6.94.06c.37-.18.82-.02 1 .35s.02.82-.35 1c-1.28.62-2.64.93-4.06.93M12.061 8.44a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06m0-5.55c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.92-2.03-2.03-2.03M4.83 20.67a3.53 3.53 0 1 1 0-7.058 3.53 3.53 0 0 1 0 7.058m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.91-2.03-2.03-2.03M19.17 20.67a3.53 3.53 0 1 1 3.53-3.53c-.01 1.94-1.59 3.53-3.53 3.53m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03a2.04 2.04 0 0 0-2.03-2.03`})}),y=()=>(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`path`,{fill:`#fff`,d:`M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.57 3.57 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84s-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31M6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56s.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28zM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5`}),(0,d.jsx)(`path`,{fill:`#fff`,d:`M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75`})]}),te=e=>(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:(0,d.jsx)(`path`,{fill:e.fill,d:`M12 21.65c-.31 0-.61-.04-.86-.13-3.82-1.31-9.89-5.96-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.21 6.21 0 0 1 4.44-1.84c3.48 0 6.31 2.85 6.31 6.34 0 6.88-6.07 11.52-9.89 12.83-.25.09-.55.13-.86.13M7.56 3.85c-2.65 0-4.81 2.17-4.81 4.84 0 6.83 6.57 10.63 8.88 11.42.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.77 4.77 0 0 0-3.85-1.94`})}),ne=()=>(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,children:(0,d.jsx)(`path`,{fill:`#ADADAD`,d:`M13.281 10.534a.5.5 0 0 1-.353-.147L8.58 6.04a.82.82 0 0 0-1.16 0l-4.347 4.347a.503.503 0 0 1-.706 0 .503.503 0 0 1 0-.707l4.346-4.346a1.827 1.827 0 0 1 2.574 0l4.346 4.346a.503.503 0 0 1 0 .707.52.52 0 0 1-.353.147`})}),re=()=>(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,children:(0,d.jsx)(`path`,{fill:`#ADADAD`,d:`M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8`})}),ie=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`,b=r.span`
  font-size: var(--font-body-xxl);
  font-weight: 600;
  display: block;
  margin-bottom: 12px;
`,ae=r.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,oe=r.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-800)`};
  background: ${({color:e})=>e};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: var(--color-base-primary);
  }
`,x=r.div`
  width: 50%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-height: ${({$isOpen:e})=>e?`200px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${({$isOpen:e})=>e?`1`:`0`};
      @media (max-width : 490px) {
    width: 100%;
    margin-bottom: 12px;
  }
`,S=r.button`
  padding: 8px 28px;
  border-radius: 8px;
  border: 2px solid ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-300)`};
  background: ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-500)`};
  color: ${({$active:e})=>e?`white`:`black`};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: var(--font-body-md);

  &:hover {
    border-color: var(--color-base-primary);
    background: ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-800)`};
    color: white;
  }
`,C=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  gap: 12px;

  @media (max-width: 490px) {
     flex-direction: row; 
  }
`,w=r.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 0.15rem solid var(--color-base-primary);
  color: var(--color-base-primary);

  @media (max-width: 490px) {
     flex: 1; 
     min-width: 110px;
  }
`,T=r.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--font-body-xxxl);
  display: flex;
  align-items: center;
  color: var(--color-base-primary);
  background-color: transparent;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-base-primary);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,E=r.span`
  font-size: var(--font-body-large);
  font-weight: 700;
  min-width: 30px;
  text-align: center;
`,D=r.div`
  display: flex;
  gap: 12px;
  align-items: center;
  order: 3;
  
  @media (max-width: 490px) {
    flex: 1; 
    justify-content: flex-end;
    order: 0;
  }
`,O=r.button`
  padding: 14px 32px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(250, 84, 28, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 490px) {
    width: 100%;
    flex: 1 0 100%;
  }
`,k=r.button`
  padding: 12px 24px;
  background: transparent;
  color: var(--color-base-secondary);
  border: 2px solid var(--color-neutral-300);
  border-radius: 12px;
  font-size: var(--font-body-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: var(--color-error-800);
    color: var(--color-error-800);
    background: var(--color-error-50);
  }
`,A=r(b)`
  width: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  user-select: none;
  margin-bottom: 8px;
  
  &:hover {
    color: var(--color-base-primary);
  }
  @media (max-width : 490px) {
    width: 100%;
  }
`,j=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;     
  height: 24px;
     
  svg {
    width: 20px;
    height: 20px;
  }
`;function M({colors:e,sizes:t,selectedColor:n,setSelectedColor:r,selectedSize:i,setSelectedSize:a,quantity:o,setQuantity:s,onAddToCart:c,onAddToWishlist:u,stock:f}){let[p,m]=(0,l.useState)(!1),h=e=>{let t=o+e;t>=1&&t<=f&&s(t)};return(0,d.jsxs)(ie,{children:[e&&e.length>0&&(0,d.jsxs)(`div`,{children:[(0,d.jsx)(b,{children:`رنگ`}),(0,d.jsx)(ae,{children:e.map(e=>(0,d.jsx)(oe,{color:e.hex,$active:n?.id===e.id,onClick:()=>r(e),title:e.name},e.id))})]}),t&&t.length>0&&(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(A,{onClick:()=>{m(!p)},children:[`سایز`,(0,d.jsx)(j,{$isOpen:p,children:p?(0,d.jsx)(ne,{}):(0,d.jsx)(re,{})})]}),(0,d.jsx)(x,{$isOpen:p,children:t.map(e=>(0,d.jsx)(S,{$active:i===e,onClick:()=>a(e),children:e},e))})]}),(0,d.jsxs)(C,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)(T,{onClick:()=>h(-1),disabled:o<=1,children:`−`}),(0,d.jsx)(E,{children:o}),(0,d.jsx)(T,{onClick:()=>h(1),disabled:o>=f,children:`+`})]}),(0,d.jsxs)(D,{children:[(0,d.jsx)(v,{}),(0,d.jsx)(k,{onClick:u,children:(0,d.jsx)(te,{fill:`red`})})]}),(0,d.jsxs)(O,{onClick:c,disabled:f===0,children:[`افزودن به سبد خرید `,(0,d.jsx)(y,{})]})]})]})}var N=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,P=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,F=r.h1`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin: 0;
  line-height: 1.3;
`,I=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  gap: 8px;
  background-color: rgba(250, 84, 28, 0.3);
  font-size: var(--font-body-md);
  border-radius: 6px;

  .stars {
    color: #f59e0b;
    display: block;
  }

  .count {
    display: block;
    font-weight: bolder;
    
  }
`,L=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
font-size: var(--font-body-large);
`,R=r.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-base-secondary);
`,z=r.span`
  color: var(--color-neutral-800);
  text-decoration: line-through;
`,B=r.span`
  padding: 4px 10px;
  background: var(--color-base-primary);
  color: var(--color-base-background);
  font-size: var(--font-body-md);
  font-weight: 600;
  margin-right: 12px;
  border-radius: 6px;
`;function V({product:e,selectedColor:t,setSelectedColor:n,selectedSize:r,setSelectedSize:i,quantity:a,setQuantity:o,onAddToCart:s,onAddToWishlist:c}){return(0,d.jsxs)(N,{children:[(0,d.jsxs)(P,{children:[(0,d.jsx)(F,{children:e.title}),(0,d.jsxs)(I,{children:[(0,d.jsx)(`div`,{className:`stars`,children:`⭐`}),(0,d.jsx)(`div`,{className:`count`,children:e.rating})]})]}),(0,d.jsxs)(L,{children:[(0,d.jsxs)(R,{children:[e.finalPrice.toLocaleString(),` تومان`]}),e.discount>0&&(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(z,{children:[e.price.toLocaleString(),` `]}),(0,d.jsxs)(B,{children:[`٪ `,e.discount]})]})]}),(0,d.jsx)(M,{colors:e.colors,sizes:e.sizes,selectedColor:t,setSelectedColor:n,selectedSize:r,setSelectedSize:i,quantity:a,setQuantity:o,onAddToCart:s,onAddToWishlist:c,stock:e.stock})]})}var H=r.div`
 height: max-content;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px  24px;
  position: relative;
  `,U=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,W=r.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-base-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-body-sm);
  flex-shrink: 0;
`,G=r.div`
  display: flex;
  flex-direction: column;
`,K=r.strong`
  color: var(--color-neutral-800);
  font-size: var(--font-body-md);
`,q=r.span`
  color: var(--color-neutral-800) ;
  font-size: var(--font-body-xs);
`,se=r.div`
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;
  position: absolute;
  top: 15px ;
  left: 16px;
`,ce=r.p`
  font-size: var(--font-body-md);
  line-height: 1.6;
  margin: 0;
  padding-right: 52px;
`;function le({review:e}){return(0,d.jsxs)(H,{children:[(0,d.jsxs)(U,{children:[(0,d.jsx)(W,{children:e.avatar}),(0,d.jsxs)(G,{children:[(0,d.jsx)(K,{children:e.user}),(0,d.jsx)(q,{children:e.date})]})]}),(0,d.jsx)(se,{children:`⭐`.repeat(e.rating)}),(0,d.jsx)(ce,{children:e.text})]})}var ue=r.div`
  flex: 1.3;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  @media (max-width : 490px) {
     padding: 0;
  
  }
`,de=r.div`
  margin-bottom: var(--header-margin-medium);
`,fe=r.div`
  font-size: var(--font-body-large);
  border-bottom: 1px solid var(--color-neutral-800);
  padding: 8px 0;
`,pe=r.div`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-800);
  padding: 8px 0;
`,me=r.div`
  display: flex;
  flex-direction: column;
`,J=r.div`
  padding: 12px 14px;
  border-radius: 10px;
  margin: 16px;
  position: relative;
  border: 1px solid var(--color-neutral-800);
  transition: border-color 0.2s ease;
  &:focus-within {
    border: 1px solid var(--color-base-primary);
  }
    @media (max-width : 490px) {
     padding: 10px 0;
     input {
        padding-right: 12px;
     }
  
  }
`,Y=r.label`
  position: absolute;
  top: -16px;
  background-color: white;
  padding: 0 8px;
`,X=r.input`
  width: 100%;
  height: 100%;
`,he=r(X)``,ge=r(J)`
  height: 165px;
`,_e=r.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 8px 12px;
`,ve=r.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`,ye=r.div`
  display: flex;
  gap: 4px;
  direction: ltr;
`,be=r.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({$active:e})=>e?`#f39c12`:`var(--color-neutral-800)`}; 
  transition: transform 0.15s ease, color 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  @media (max-width: 490px ) {
    svg{
       width: 16px;
    height: 16px; 
    }
  }
`,xe=r.button`
  width: 45%;
  padding: 10px 8px;
  color: var(--color-base-primary);
  border: 1px solid var(--color-base-primary);
  background-color: transparent;
  border-radius: 12px;
  font-size: var(--font-body-large);
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    color: var(--color-base-background);
    background-color: var(--color-base-primary);
  }
`;function Se(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(0),i=e=>{t(e)};return(0,d.jsxs)(ue,{children:[(0,d.jsxs)(de,{children:[(0,d.jsx)(fe,{children:`نظرت رو برامون بنویس`}),(0,d.jsx)(pe,{children:`ایمیل شما نشان داده نمی شود.`})]}),(0,d.jsxs)(me,{children:[(0,d.jsxs)(J,{children:[(0,d.jsx)(Y,{children:`نام`}),(0,d.jsx)(X,{type:`text`})]}),(0,d.jsxs)(J,{children:[(0,d.jsx)(Y,{children:`ایمیل`}),(0,d.jsx)(he,{type:`email`})]}),(0,d.jsxs)(ge,{children:[(0,d.jsx)(Y,{children:`نظر شما`}),(0,d.jsx)(_e,{minLength:6,maxLength:250})]})]}),(0,d.jsxs)(ve,{children:[(0,d.jsx)(ye,{children:[1,2,3,4,5].map(t=>(0,d.jsx)(be,{$active:(n||e)>=t,onClick:()=>i(t),onMouseEnter:()=>r(t),onMouseLeave:()=>r(0),type:`button`,children:(0,d.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,d.jsx)(`path`,{d:`M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`})})},t))}),(0,d.jsx)(xe,{children:`ثبت نظر و امتیاز`})]})]})}var Ce=r.div`
    display: flex;
    gap: 16px;
    @media (max-width : 490px) {
        flex-direction: column;
    }
`,we=r.div`
flex: 2;
display: flex;
flex-direction: column;
gap: 12px;
`,Te=r.div`
text-align: center;
padding: 20px;
color: var(--color-neutral-800);
`;function Ee({reviews:e}){return(0,d.jsxs)(Ce,{children:[(0,d.jsx)(we,{children:e?.length>0?e.map((e,t)=>(0,d.jsx)(le,{review:e},e.id||t)):(0,d.jsx)(Te,{children:`نظری برای این محصول ثبت نشده است.`})}),(0,d.jsx)(Se,{})]})}var De=r.div`
    line-height: 1.8;
    white-space: pre-wrap;
`;function Oe({description:e}){return(0,d.jsx)(De,{children:e})}var ke=r.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid var(--color-neutral-800);
    padding: 12px 16px;
  }
  tr:last-child {
    border: none;
  }

  td {
    padding: 10px 12px;
    font-size: var(--font-body-md);
  }

  td:first-child {
    font-weight: 600;
    width: 30%;
  }

  td:last-child {
  }
`;function Ae({specs:e}){return(0,d.jsx)(ke,{children:(0,d.jsx)(`tbody`,{children:e&&Object.entries(e).map(([e,t])=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:e}),(0,d.jsx)(`td`,{children:t})]},e))})})}var je=r.div`
  width: 90%;
  margin: 40px auto;
  border: 1px solid var(--color-neutral-200);
  border-radius: 12px;
  overflow: hidden;
      @media (max-width : 490px) {
    width: 100%;
    padding: 0 12px;
  }
`,Me=r.div`
  display: flex;
  border-bottom: 1px solid var(--color-neutral-200);
  background: var(--color-neutral-50);
  gap: 8px;

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`,Ne=r.button`
  padding: 14px 24px;
  background: ${({$active:e})=>e?`rgb(207,232,255)`:`transparent`};
  border: none;
  font-size: var(--font-body-md);
  font-weight: ${({$active:e})=>e?`700`:`400`};
  color: var(--color-base-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 12px;

  &:hover {
    background: rgb(207, 232, 255);
  }
  @media (max-width : 490px) {
  font-size: var(--font-body-xl);
  padding: 10px 12px;
  }
`,Pe=r.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-800);
  margin-top: 12px;
`,Z=r.div`
  display: ${({$active:e})=>e?`block`:`none`};
   animation: ${({$active:e})=>e?`animate`:``} 0.5s ease;
   transform-origin: left;
   @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(100%) scale(.25);
    }
    100%{
      opacity: 1;
    }
   }
`;function Fe({description:e,specs:t,reviews:n}){let[r,i]=(0,l.useState)(`description`),a=[{key:`specs`,label:`ویژگی های محصول`},{key:`description`,label:`توضیحات`},{key:`reviews`,label:`نظرات (${n?.length||0})`}];return(0,d.jsxs)(je,{children:[(0,d.jsx)(Me,{children:a.map(e=>(0,d.jsx)(Ne,{$active:r===e.key,onClick:()=>i(e.key),children:e.label},e.key))}),(0,d.jsxs)(Pe,{children:[(0,d.jsx)(Z,{$active:r===`description`,children:(0,d.jsx)(Oe,{description:e})}),(0,d.jsx)(Z,{$active:r===`specs`,children:(0,d.jsx)(Ae,{specs:t})}),(0,d.jsx)(Z,{$active:r===`reviews`,children:(0,d.jsx)(Ee,{reviews:n})})]})]})}var Q=r.div`
  margin: 40px 0;
`,Ie=r.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-neutral-200);
`,Le=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`,Re=r(e)`
  background: var(--color-base-background);
  border-radius: 12px;
  padding: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--color-neutral-800);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-base-primary);
  }
`,ze=r.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  background: var(--color-neutral-100);
`,Be=r.h4`
  font-size: var(--font-body-md);
  font-weight: 600;
  color: var(--color-neutral-800);
  margin: 8px 0 4px;
  line-height: 1.3;
`,Ve=r.span`
  font-size: var(--font-body-md);
  font-weight: 700;
  color: var(--color-base-secondary);
`,He=r.div`
  color: #f59e0b;
  font-size: var(--font-body-sm);
  margin-top: 4px;
`;function Ue({products:e}){return!e||e.length===0?null:(0,d.jsxs)(Q,{children:[(0,d.jsx)(Ie,{children:`محصولات مشابه`}),(0,d.jsx)(Le,{children:e.map(e=>(0,d.jsxs)(Re,{to:`/product/${e.id}`,children:[(0,d.jsx)(ze,{src:e.image,alt:e.title}),(0,d.jsx)(Be,{children:e.title}),(0,d.jsxs)(Ve,{children:[e.price.toLocaleString(),` تومان`]}),(0,d.jsxs)(He,{children:[`⭐ `,e.rating]})]},e.id))})]})}var We=r.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  @media (max-width : 490px) {
     padding: 12px 0;
  }
`,Ge=r.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 24px auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`,Ke=r.div`
  width: 90% ;
  margin:  16px auto;
`,$=r.div`
  text-align: center;
  padding: 60px 20px;
  font-size: var(--font-body-large);
  color: var(--color-error-800);
`;function qe(){let{productId:e}=o(),{product:t,loading:n,error:r,addToCart:i,addToWishlist:s,relatedProduct:f}=u(e),[p,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(null),[_,v]=(0,l.useState)(1);return n?(0,d.jsx)(a,{}):r?(0,d.jsx)($,{children:r}):t?(0,d.jsxs)(We,{children:[(0,d.jsxs)(Ge,{children:[(0,d.jsx)(ee,{images:t.images}),(0,d.jsx)(V,{product:t,selectedColor:p,setSelectedColor:m,selectedSize:h,setSelectedSize:g,quantity:_,setQuantity:v,onAddToCart:()=>{if(!h){alert(`لطفاً سایز مورد نظر را انتخاب کنید`);return}i(_,h,p),alert(`${t.title} به سبد خرید اضافه شد!`)},onAddToWishlist:()=>{s(),alert(`${t.title} به علاقه‌مندی‌ها اضافه شد!`)}})]}),(0,d.jsx)(Fe,{description:t.description,specs:t.specs,reviews:t.reviews}),(0,d.jsx)(Ke,{children:(0,d.jsx)(Ue,{products:f})}),(0,d.jsx)(c,{bgColor:`transparnert`})]}):(0,d.jsx)($,{children:`محصولی یافت نشد`})}export{qe as default};