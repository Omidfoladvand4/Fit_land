import{f as e,h as t,i as n,l as r,n as i,p as a}from"./index-OylXGWMp.js";var o=t(e(),1),s=a(),c=n.div`
  width: 100%;
  display: flex;
  height: 230px;
  gap: 16px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-800);
  position: relative;
`,l=n.div`
  width: 40%;
  position: relative;
  @media (max-width : 768px) {
     width: 30%;
  }
`,u=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,d=n.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width:  4em;
  height: 2em;
  background-color: var(--color-base-primary);
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25%;
  color: var(--color-base-background);
  font-weight: 600;
`,f=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  position: relative;
  line-height: 1.8;
`,p=n.h1`
  font-size: var(--font-body-xl);
  margin-left: 15px;
`,m=n.h2`
  font-size: var(--font-body-md);
  color: var(--color-neutral-800);
`,h=n.div`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  font-weight: bolder;
`,g=n.div`
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: 500;
  text-decoration: line-through;
  @media (max-width : 768px) {
     display: none;
  }
`,_=n.div`
  color: var(--color-base-secondary);
  font-weight: 700;
  font-size: var(--font-body-large);
`,v=n.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`,y=n.div`
  color: var(--color-neutral-800);
`,b=n.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${({$bgColor:e})=>e||`var(--color-neutral-300)`};
`,x=n.div`
  width: 6em;
  position: absolute;
  bottom: 14px;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-neutral-800);
  border: 1px solid black;
`,S=n.div`
  font-size: var(--font-body-large);
`,C=n.div`
  cursor: pointer;
  font-size: var(--font-body-large);
  font-weight: bolder;
`,w=n.div`
  position: absolute;
  top: 7px;
  left: 8px;
  cursor: pointer;
`;function T({item:e,onRemove:t}){let[n,r]=(0,o.useState)(1);return(0,s.jsxs)(c,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)(u,{src:e.image}),e.hasDiscount&&(0,s.jsxs)(d,{children:[`%`,e.discount]})]}),(0,s.jsxs)(f,{children:[(0,s.jsx)(p,{children:e.title}),(0,s.jsx)(m,{children:e.category}),(0,s.jsxs)(h,{children:[e.price.toLocaleString(),` تومان`]}),e.hasDiscount&&(0,s.jsxs)(g,{children:[e.originalPrice.toLocaleString(),` تومان`]}),(0,s.jsxs)(_,{children:[`سایز: `,e.sizes[0]]}),(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:[`رنگ: `,e.colors[0].name]}),(0,s.jsx)(b,{$bgColor:e.colors[0].hex})]}),(0,s.jsxs)(x,{children:[(0,s.jsx)(C,{onClick:()=>r(e=>Math.max(1,e-1)),children:`-`}),(0,s.jsx)(S,{children:n}),(0,s.jsx)(C,{onClick:()=>r(e=>e+1),children:`+`})]})]}),(0,s.jsx)(w,{onClick:()=>t(e.id),children:(0,s.jsx)(i,{})})]})}var E=n.div`
  width: 807px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width : 1024px) {
      width: 100%;
      margin-top: 18px;
      align-items: center;
  }
`;function D(){let{items:e,onRemove:t}=r();return!e||e.length===0?(0,s.jsx)(`div`,{children:`سبد خرید شما خالی است.`}):(0,s.jsx)(E,{children:e.map(e=>(0,s.jsx)(T,{item:e,onRemove:t},e.id))})}export{D as default};