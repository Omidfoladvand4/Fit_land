import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{f as i,i as a,n as o,r as s,s as c}from"./index-By7vYwek.js";import{n as l,t as u}from"./ProductSlider-KZpwGGgi.js";import{t as d}from"./products-qadMkMRk.js";var f=e(n(),1),p=e=>{let[t,n]=(0,f.useState)(null),[r,i]=(0,f.useState)(!0),[a,o]=(0,f.useState)(null),[s,c]=(0,f.useState)([]);return(0,f.useEffect)(()=>{e?(async()=>{try{i(!0),setTimeout(()=>{let t=d.find(t=>t.id===Number(e));if(t){n(t),o(null);let e=d.filter(e=>e.category===t.category&&e.id!==t.id).slice(0,4);c(e)}else n(null),c([]),o(`محصول مورد نظر یافت نشد`);i(!1)},600)}catch(e){o(e,`خطا در دریافت اطلاعات محصول`),i(!1)}})():(i(!1),o(`شناسه محصول نامعتبر است`))},[e]),{product:t,loading:r,error:a,relatedProduct:s,addToCart:(e,n,r)=>(console.log(`محصول ${t?.title} با تعداد ${e} و سایز ${n} به سبد خرید اضافه شد`),!0),addToWishlist:()=>(console.log(`محصول ${t?.title} به علاقه‌مندی‌ها اضافه شد`),!0)}},m=r(),h=`https://picsum.photos/seed/fallback/600/600`,g=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_=t.div`
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
`,v=t.div`
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
    background: var(--color-neutral-500);
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`,y=t.div`
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
`,b=t.button`
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
    background: var(--color-base-primary-light);
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
`;function ee({images:e,onShowAllImages:t}){let[n,r]=(0,f.useState)(0);if(!e||e.length===0)return(0,m.jsx)(g,{children:(0,m.jsx)(_,{children:(0,m.jsx)(`img`,{src:h,alt:`تصویر محصول`})})});let i=e.length>3;return(0,m.jsxs)(g,{children:[(0,m.jsx)(_,{children:(0,m.jsx)(`img`,{src:e[n]?.url||h,alt:e[n]?.alt||`تصویر محصول`,onError:e=>{e.target.src=h}})}),(0,m.jsxs)(v,{children:[e.map((e,t)=>(0,m.jsx)(y,{$active:n===t,onClick:()=>r(t),children:(0,m.jsx)(`img`,{src:e.url||h,alt:e.alt||`تصویر محصول`,onError:e=>{e.target.src=h}})},e.id||t)),i&&(0,m.jsxs)(b,{onClick:t,children:[(0,m.jsx)(_,{}),(0,m.jsx)(`span`,{children:`تصاویر بیشتر`})]})]})]})}var x=()=>(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:(0,m.jsx)(`path`,{fill:`#2F5F8A`,d:`M20.622 13.07c-.38 0-.7-.29-.75-.67a7.83 7.83 0 0 0-3.34-5.61.75.75 0 0 1-.19-1.04c.24-.34.71-.42 1.04-.19a9.34 9.34 0 0 1 3.97 6.68c.04.41-.25.78-.67.83zM3.492 13.12h-.08a.766.766 0 0 1-.67-.83c.27-2.69 1.7-5.12 3.91-6.69a.753.753 0 1 1 .87 1.23 7.85 7.85 0 0 0-3.29 5.62.74.74 0 0 1-.74.67M12.06 22.61c-1.48 0-2.89-.34-4.21-1a.75.75 0 0 1-.33-1.01.75.75 0 0 1 1.01-.33 7.9 7.9 0 0 0 6.94.06c.37-.18.82-.02 1 .35s.02.82-.35 1c-1.28.62-2.64.93-4.06.93M12.061 8.44a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06m0-5.55c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.92-2.03-2.03-2.03M4.83 20.67a3.53 3.53 0 1 1 0-7.058 3.53 3.53 0 0 1 0 7.058m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.91-2.03-2.03-2.03M19.17 20.67a3.53 3.53 0 1 1 3.53-3.53c-.01 1.94-1.59 3.53-3.53 3.53m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03a2.04 2.04 0 0 0-2.03-2.03`})}),S=()=>(0,m.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,m.jsx)(`path`,{fill:`#fff`,d:`M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.57 3.57 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84s-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31M6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56s.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28zM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5`}),(0,m.jsx)(`path`,{fill:`#fff`,d:`M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75`})]}),C=e=>(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:e.fill||`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,m.jsx)(`path`,{fill:e.fill||`none`,d:`M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`})}),te=()=>(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,children:(0,m.jsx)(`path`,{fill:`#ADADAD`,d:`M13.281 10.534a.5.5 0 0 1-.353-.147L8.58 6.04a.82.82 0 0 0-1.16 0l-4.347 4.347a.503.503 0 0 1-.706 0 .503.503 0 0 1 0-.707l4.346-4.346a1.827 1.827 0 0 1 2.574 0l4.346 4.346a.503.503 0 0 1 0 .707.52.52 0 0 1-.353.147`})}),ne=()=>(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,children:(0,m.jsx)(`path`,{fill:`#ADADAD`,d:`M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8`})}),re=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`,w=t.span`
  font-size: var(--font-body-xxl);
  font-weight: 600;
  display: block;
  margin-bottom: 12px;
`,ie=t.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,ae=t.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid
    ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-800)`};
  background: ${({color:e})=>e};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: var(--color-base-primary);
  }
`,oe=t.div`
  width: 50%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-height: ${({$isOpen:e})=>e?`200px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in;
  opacity: ${({$isOpen:e})=>e?`1`:`0`};
  @media (max-width: 490px) {
    width: 100%;
    margin-bottom: 12px;
  }
`,T=t.button`
  padding: 8px 28px;
  border-radius: 8px;
  border: 2px solid
    ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-300)`};
  background: ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-500)`};
  color: ${({$active:e})=>e?`var(--color-base-background)`:`black`};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: var(--font-body-md);

  &:hover {
    border-color: var(--color-base-primary);
    background: ${({$active:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-800)`};
    color: var(--color-base-background);
  }
`,E=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 490px) {
    flex-direction: row;
  }
`,D=t.div`
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
`,O=t.button`
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
`,k=t.span`
  font-size: var(--font-body-large);
  font-weight: 700;
  min-width: 30px;
  text-align: center;
`,A=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
  order: 3;

  @media (max-width: 490px) {
    flex: 1;
    justify-content: flex-end;
    order: 0;
  }
`,j=t.button`
  padding: 14px 32px;
  background: var(--color-base-primary);
  color: var(--color-base-background);
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
    box-shadow: 0 4px 16px var(--color-base-primary-light);
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
`,M=t(c)`
  padding: 14px 32px;
  background: var(--color-base-secondary);
  color: var(--color-base-background);
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
    box-shadow: 0 4px 16px var(--color-base-secondary-light);
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
`,N=t.button`
  background: transparent;
  color: var(--color-base-secondary);
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
`,P=t(w)`
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
  @media (max-width: 490px) {
    width: 100%;
  }
`,F=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 20px;
    height: 20px;
  }
`;function I({product:e,colors:t,sizes:n,selectedColor:r,setSelectedColor:i,selectedSize:a,setSelectedSize:o,quantity:c,setQuantity:l,onAddToCart:u,onAddToWishlist:d,stock:p,isInWishlist:h=!1}){let[g,_]=(0,f.useState)(!1),{isInCart:v}=s(),y=v?v(e?.id,a,r):!1,b=e=>{let t=c+e;t>=1&&t<=p&&l(t)};return(0,m.jsxs)(re,{children:[t&&t.length>0&&(0,m.jsxs)(`div`,{children:[(0,m.jsx)(w,{children:`رنگ`}),(0,m.jsx)(ie,{children:t.map(e=>(0,m.jsx)(ae,{color:e.hex,$active:r?.id===e.id,onClick:()=>i(e),title:e.name},e.id))})]}),n&&n.length>0&&(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(P,{onClick:()=>{_(!g)},children:[`سایز`,(0,m.jsx)(F,{$isOpen:g,children:g?(0,m.jsx)(te,{}):(0,m.jsx)(ne,{})})]}),(0,m.jsx)(oe,{$isOpen:g,children:n.map(e=>(0,m.jsx)(T,{$active:a===e,onClick:()=>o(e),children:e},e))})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(D,{children:[(0,m.jsx)(O,{onClick:()=>b(-1),disabled:c<=1,children:`−`}),(0,m.jsx)(k,{children:c}),(0,m.jsx)(O,{onClick:()=>b(1),disabled:c>=p,children:`+`})]}),(0,m.jsxs)(A,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(N,{onClick:d,$isInWishlist:h,children:(0,m.jsx)(C,{fill:h?`red`:`black`})})]}),y?(0,m.jsxs)(M,{to:`/Basket/`,children:[`مشاهده سبد خرید `,(0,m.jsx)(S,{})]}):(0,m.jsxs)(j,{onClick:u,disabled:p===0,children:[`افزودن به سبد خرید `,(0,m.jsx)(S,{})]})]})]})}var L=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,R=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z=t.h1`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin: 0;
  line-height: 1.3;
`,B=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  gap: 8px;
  background-color: var(--color-base-primary-light);
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
`,V=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  font-size: var(--font-body-large);
`,H=t.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-base-secondary);
`,U=t.span`
  color: var(--color-neutral-800);
  text-decoration: line-through;
`,W=t.span`
  padding: 4px 10px;
  background: var(--color-base-primary);
  color: var(--color-base-background);
  font-size: var(--font-body-md);
  font-weight: 600;
  margin-right: 12px;
  border-radius: 6px;
`;function G({product:e,selectedColor:t,setSelectedColor:n,selectedSize:r,setSelectedSize:i,quantity:a,setQuantity:o,onAddToCart:s,onAddToWishlist:c,isInWishlist:l}){return(0,m.jsxs)(L,{children:[(0,m.jsxs)(R,{children:[(0,m.jsx)(z,{children:e.title}),(0,m.jsxs)(B,{children:[(0,m.jsx)(`div`,{className:`stars`,children:`⭐`}),(0,m.jsx)(`div`,{className:`count`,children:e.rating})]})]}),(0,m.jsxs)(V,{children:[(0,m.jsxs)(H,{children:[e.finalPrice.toLocaleString(),` تومان`]}),e.discount>0&&(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(U,{children:[e.price.toLocaleString(),` `]}),(0,m.jsxs)(W,{children:[`٪ `,e.discount]})]})]}),(0,m.jsx)(I,{product:e,colors:e.colors,sizes:e.sizes,selectedColor:t,setSelectedColor:n,selectedSize:r,setSelectedSize:i,quantity:a,setQuantity:o,onAddToCart:s,onAddToWishlist:c,stock:e.stock,isInWishlist:l})]})}var K=t.div`
  height: max-content;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px 24px;
  position: relative;
`,q=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,se=t.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-base-primary);
  color: var(--color-base-background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-body-sm);
  flex-shrink: 0;
`,ce=t.div`
  display: flex;
  flex-direction: column;
`,le=t.strong`
  color: var(--color-neutral-800);
  font-size: var(--font-body-md);
`,ue=t.span`
  color: var(--color-neutral-800);
  font-size: var(--font-body-xs);
`,de=t.div`
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;
  position: absolute;
  top: 15px;
  left: 16px;
`,fe=t.p`
  font-size: var(--font-body-md);
  line-height: 1.6;
  margin: 0;
  padding-right: 52px;
`;function pe({review:e}){return(0,m.jsxs)(K,{children:[(0,m.jsxs)(q,{children:[(0,m.jsx)(se,{children:e.avatar}),(0,m.jsxs)(ce,{children:[(0,m.jsx)(le,{children:e.user}),(0,m.jsx)(ue,{children:e.date})]})]}),(0,m.jsx)(de,{children:`⭐`.repeat(e.rating)}),(0,m.jsx)(fe,{children:e.text})]})}var me=t.div`
  flex: 1.3;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  @media (max-width : 490px) {
     padding: 0;
  
  }
`,he=t.div`
  margin-bottom: var(--header-margin-medium);
`,ge=t.div`
  font-size: var(--font-body-large);
  border-bottom: 1px solid var(--color-neutral-800);
  padding: 8px 0;
`,_e=t.div`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-800);
  padding: 8px 0;
`,ve=t.div`
  display: flex;
  flex-direction: column;
`,J=t.div`
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
`,Y=t.label`
  position: absolute;
  top: -16px;
  background-color: white;
  padding: 0 8px;
`,X=t.input`
  width: 100%;
  height: 100%;
`,ye=t(X)``,be=t(J)`
  height: 165px;
`,xe=t.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 8px 12px;
`,Se=t.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`,Ce=t.div`
  display: flex;
  gap: 4px;
  direction: ltr;
`,we=t.button`
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
`,Te=t.button`
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
`;function Ee(){let[e,t]=(0,f.useState)(0),[n,r]=(0,f.useState)(0),i=e=>{t(e)};return(0,m.jsxs)(me,{children:[(0,m.jsxs)(he,{children:[(0,m.jsx)(ge,{children:`نظرت رو برامون بنویس`}),(0,m.jsx)(_e,{children:`ایمیل شما نشان داده نمی شود.`})]}),(0,m.jsxs)(ve,{children:[(0,m.jsxs)(J,{children:[(0,m.jsx)(Y,{children:`نام`}),(0,m.jsx)(X,{type:`text`})]}),(0,m.jsxs)(J,{children:[(0,m.jsx)(Y,{children:`ایمیل`}),(0,m.jsx)(ye,{type:`email`})]}),(0,m.jsxs)(be,{children:[(0,m.jsx)(Y,{children:`نظر شما`}),(0,m.jsx)(xe,{minLength:6,maxLength:250})]})]}),(0,m.jsxs)(Se,{children:[(0,m.jsx)(Ce,{children:[1,2,3,4,5].map(t=>(0,m.jsx)(we,{$active:(n||e)>=t,onClick:()=>i(t),onMouseEnter:()=>r(t),onMouseLeave:()=>r(0),type:`button`,children:(0,m.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,m.jsx)(`path`,{d:`M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`})})},t))}),(0,m.jsx)(Te,{children:`ثبت نظر و امتیاز`})]})]})}var De=t.div`
  display: flex;
  gap: 16px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`,Oe=t.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ke=t.div`
  text-align: center;
  padding: 20px;
  color: var(--color-neutral-800);
`;function Ae({reviews:e}){return(0,m.jsxs)(De,{children:[(0,m.jsx)(Oe,{children:e?.length>0?e.map((e,t)=>(0,m.jsx)(pe,{review:e},e.id||t)):(0,m.jsx)(ke,{children:`نظری برای این محصول ثبت نشده است.`})}),(0,m.jsx)(Ee,{})]})}var je=t.div`
  line-height: 1.8;
  white-space: pre-wrap;
`;function Me({description:e}){return(0,m.jsx)(je,{children:e})}var Ne=t.table`
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
`;function Pe({specs:e}){return(0,m.jsx)(Ne,{children:(0,m.jsx)(`tbody`,{children:e&&Object.entries(e).map(([e,t])=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:e}),(0,m.jsx)(`td`,{children:t})]},e))})})}var Fe=t.div`
  width: 90%;
  margin: 40px auto;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 490px) {
    width: 100%;
    padding: 0 12px;
  }
`,Ie=t.div`
  display: flex;
  gap: 8px;
  background-color: var(--color-neutral-800);
  padding: 8px 4px;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`,Z=t.button`
  padding: 14px 24px;
  background: ${({$active:e})=>e?`var(--color-base-primary-light)`:`transparent`};
  border: none;
  font-size: var(--font-body-md);
  font-weight: ${({$active:e})=>e?`700`:`400`};
  color: var(--color-base-background);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 12px;

  &:hover {
    background: var(--color-base-primary);
  }
  @media (max-width: 490px) {
    font-size: var(--font-body-xl);
    padding: 10px 12px;
  }
`,Le=t.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-800);
  margin-top: 12px;
`,Q=t.div`
  display: ${({$active:e})=>e?`block`:`none`};
  animation: ${({$active:e})=>e?`animate`:``} 0.5s ease;
  transform-origin: left;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateX(100%) scale(0.25);
    }
    100% {
      opacity: 1;
    }
  }
`;function Re({description:e,specs:t,reviews:n}){let[r,i]=(0,f.useState)(`description`),a=[{key:`specs`,label:`ویژگی های محصول`},{key:`description`,label:`توضیحات`},{key:`reviews`,label:`نظرات (${n?.length||0})`}];return(0,m.jsxs)(Fe,{children:[(0,m.jsx)(Ie,{children:a.map(e=>(0,m.jsx)(Z,{$active:r===e.key,onClick:()=>i(e.key),children:e.label},e.key))}),(0,m.jsxs)(Le,{children:[(0,m.jsx)(Q,{$active:r===`description`,children:(0,m.jsx)(Me,{description:e})}),(0,m.jsx)(Q,{$active:r===`specs`,children:(0,m.jsx)(Pe,{specs:t})}),(0,m.jsx)(Q,{$active:r===`reviews`,children:(0,m.jsx)(Ae,{reviews:n})})]})]})}var ze=t.div`
  margin: 40px 0;
`;function Be({products:e}){return!e||e.length===0?null:(0,m.jsx)(ze,{children:(0,m.jsx)(u,{title:`محصولات مشابه`,products:e,background:`var(--color-info-200)`})})}var Ve=t.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  @media (max-width : 490px) {
     padding: 12px 0;
  }
`,He=t.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 24px auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`,Ue=t.div`
  width: 90% ;
  margin:  16px auto;
`,$=t.div`
  text-align: center;
  padding: 60px 20px;
  font-size: var(--font-body-large);
  color: var(--color-error-800);
`;function We(){let{productId:e}=i(),{product:t,loading:n,error:r,relatedProduct:c}=p(e),{addToCart:u,addToWishlist:d,isInWishlist:h}=s(),[g,_]=(0,f.useState)(null),[v,y]=(0,f.useState)(null),[b,x]=(0,f.useState)(1);return n?(0,m.jsx)(o,{}):r?(0,m.jsx)($,{children:r}):t?(0,m.jsxs)(Ve,{children:[(0,m.jsxs)(He,{children:[(0,m.jsx)(ee,{images:t.images}),(0,m.jsx)(G,{product:t,selectedColor:g,setSelectedColor:_,selectedSize:v,setSelectedSize:y,quantity:b,setQuantity:x,onAddToCart:()=>{if(!v){a.error(`لطفاً سایز مورد نظر را انتخاب کنید`);return}u(t,b,v,g),a.success(`${t.title} به سبد خرید اضافه شد!`)},onAddToWishlist:()=>{d(t),h(t.id)?a(`${t.title} از علاقه‌مندی‌ها حذف شد!`):a.success(`${t.title} به علاقه‌مندی‌ها اضافه شد!`)},isInWishlist:h(t.id)})]}),(0,m.jsx)(Re,{description:t.description,specs:t.specs,reviews:t.reviews}),(0,m.jsx)(Ue,{children:(0,m.jsx)(Be,{products:c})}),(0,m.jsx)(l,{bgColor:`transparnert`})]}):(0,m.jsx)($,{children:`محصولی یافت نشد`})}export{We as default};