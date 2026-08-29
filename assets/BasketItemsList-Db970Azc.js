import{n as e,t}from"./jsx-runtime-yu_Uq3ru.js";import{a as n,d as r}from"./index-By7vYwek.js";var i=t(),a=e.div`
  width: 100%;
  display: flex;
  height: 230px;
  gap: 16px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-800);
  position: relative;
`,o=e.div`
  width: 40%;
  position: relative;
  @media (max-width: 768px) {
    width: 30%;
  }
`,s=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,c=e.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 2em;
  background-color: var(--color-base-primary);
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25%;
  color: var(--color-base-background);
  font-weight: 600;
`,l=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  position: relative;
  line-height: 1.8;
  @media (max-width: 768px) {
    padding: 8px 0;
  }
`,u=e.h1`
  font-size: var(--font-body-xl);
  margin-left: 15px;
`,d=e.h2`
  font-size: var(--font-body-md);
  color: var(--color-neutral-800);
`,f=e.div`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  font-weight: bolder;
`,p=e.div`
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: 500;
  text-decoration: line-through;
  @media (max-width: 768px) {
    display: none;
  }
`,m=e.div`
  color: var(--color-base-secondary);
  font-weight: 700;
  font-size: var(--font-body-large);
`,h=e.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`,g=e.div`
  color: var(--color-neutral-800);
`,_=e.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${({$bgColor:e})=>e||`var(--color-neutral-500)`};
`,v=e.div`
  width: 6em;
  position: absolute;
  bottom: 14px;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-neutral-800);
  border: 1px solid black;
`,y=e.div`
  font-size: var(--font-body-large);
`,b=e.div`
  cursor: pointer;
  font-size: var(--font-body-large);
  font-weight: bolder;
`,x=e.div`
  position: absolute;
  top: 7px;
  left: 8px;
  cursor: pointer;
`;function S({item:e,onRemove:t,onUpdateQuantity:r}){let S=e.quantity;return(0,i.jsxs)(a,{children:[(0,i.jsxs)(o,{children:[(0,i.jsx)(s,{src:e.image}),e.hasDiscount&&(0,i.jsxs)(c,{children:[`%`,e.discount]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)(u,{children:e.title}),(0,i.jsx)(d,{children:e.category}),(0,i.jsxs)(f,{children:[e.price.toLocaleString(),` تومان`]}),e.hasDiscount&&(0,i.jsxs)(p,{children:[e.originalPrice.toLocaleString(),` تومان`]}),(0,i.jsxs)(m,{children:[`سایز: `,e.selectedSize||e.sizes[0]]}),(0,i.jsxs)(h,{children:[(0,i.jsxs)(g,{children:[`رنگ: `,e.selectedColor?.name||e.colors[0].name]}),(0,i.jsx)(_,{$bgColor:e.selectedColor?.hex||e.colors[0].hex})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(b,{onClick:()=>r(e.id,Math.max(1,S-1)),children:`-`}),(0,i.jsx)(y,{children:S}),(0,i.jsx)(b,{onClick:()=>r(e.id,S+1),children:`+`})]})]}),(0,i.jsx)(x,{onClick:()=>t(e.id),children:(0,i.jsx)(n,{})})]})}var C=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,w=e.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-xl);
  color: var(--color-neutral-800);
  border: 1px dashed var(--color-neutral-500);
  border-radius: 12px;
`;function T(){let{items:e,removeFromCart:t,updateCartQuantity:n}=r();return!e||e.length===0?(0,i.jsx)(C,{children:(0,i.jsx)(w,{children:`سبد خرید شما خالی است.`})}):(0,i.jsx)(C,{children:e.map(e=>(0,i.jsx)(S,{item:e,onRemove:t,onUpdateQuantity:n},e.id))})}export{T as default};