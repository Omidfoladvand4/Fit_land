import{a as e,n as t,t as n}from"./jsx-runtime-yu_Uq3ru.js";import{u as r}from"./index-DPNvDcSj.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./marker-shadow-B73RVFNQ.js";var d=e(l(),1),f=n(),p=d.default.icon({iconUrl:o,shadowUrl:u,iconSize:[25,41],iconAnchor:[12,41]});d.default.Marker.prototype.options.icon=p;var m=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;
  margin: 16px 0;
`,h=t.h2`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
`,g=t.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 20px;
  background: white;
`,_=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,v=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  cursor: pointer;
  background: ${({$selected:e})=>e?`var(--color-info-100)`:`white`};
  border-color: ${({$selected:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-300)`};
`,y=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: var(--color-base-secondary);
`,b=t.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  color: var(--color-base-secondary);
  font-size: var(--font-body-md);
  line-height: 1.8;
`,x=t.div`
  flex: 1;
  font-size: var(--font-body-large);
`,S=t.div`
  flex: 1;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-300);
  background: #f4f4f4;
`,C=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-base-secondary);
`,w=t.button`
  background: var(--color-base-primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;function T(){let{items:e}=r(),t=`بجنورد، میدان شهید بهشتی، خیابان ۱۷ شهریور، کوچه عزیز معرف پلاک ۱۳`,n=[37.5485,57.3235];return!e||e.length===0?(0,f.jsx)(`div`,{children:`سبد خرید شما خالی است.`}):(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{children:`انتخاب نحوه پرداخت`}),(0,f.jsxs)(_,{children:[(0,f.jsxs)(v,{$selected:!0,children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(`span`,{children:`🏦`}),` بانک مسکن`]}),(0,f.jsx)(`input`,{type:`radio`,checked:!0,readOnly:!0})]}),(0,f.jsxs)(v,{children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(`span`,{children:`💳`}),` تو بانک`]}),(0,f.jsx)(`input`,{type:`radio`})]})]}),(0,f.jsxs)(g,{children:[(0,f.jsx)(h,{style:{marginBottom:`16px`},children:`خلاصه محصولات`}),e.map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`12px`,borderBottom:`1px solid #eee`,paddingBottom:`8px`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:e.title}),(0,f.jsxs)(`div`,{children:[`سایز: `,e.sizes[0]]})]}),(0,f.jsxs)(`div`,{children:[e.price.toLocaleString(),` تومان`]})]},e.id))]}),(0,f.jsxs)(g,{children:[(0,f.jsx)(h,{style:{marginBottom:`16px`},children:`آدرس انتخابی شما`}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:t}),(0,f.jsx)(S,{children:(0,f.jsxs)(s,{center:n,zoom:13,scrollWheelZoom:!1,style:{height:`100%`,width:`100%`},children:[(0,f.jsx)(c,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,f.jsx)(i,{position:n,children:(0,f.jsx)(a,{children:t})})]})})]})]}),(0,f.jsx)(g,{children:(0,f.jsxs)(C,{children:[(0,f.jsx)(h,{children:`زمان ارسال انتخابی شما`}),(0,f.jsx)(w,{children:`فردا`})]})})]})}export{T as default};