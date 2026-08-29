import{a as e,n as t,t as n}from"./jsx-runtime-yu_Uq3ru.js";import{d as r}from"./index-By7vYwek.js";import{a as i,i as a,n as o,r as s,t as c}from"./leaflet-h3Saojpq.js";var l=e(i(),1),u=n(),d=l.default.divIcon({className:`custom-div-icon`,html:`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FA541C" stroke="none">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="#FFFFFF" stroke="none"></circle>
    </svg>
  `,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});l.default.Marker.prototype.options.icon=d;var f=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;
  margin: 16px 0;
`,p=t.h2`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
`,m=t.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 20px;
  background: var(--color-base-background);
`,h=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,g=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-neutral-500);
  border-radius: 8px;
  cursor: pointer;
  background: ${({$selected:e})=>e?`var(--color-info-200)`:`var(--color-base-background)`};
  border-color: ${({$selected:e})=>e?`var(--color-base-primary)`:`var(--color-neutral-500)`};
`,_=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: var(--color-base-secondary);
`,v=t.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  color: var(--color-base-secondary);
  font-size: var(--font-body-md);
  line-height: 1.8;
`,y=t.div`
  flex: 1;
  font-size: var(--font-body-large);
`,b=t.div`
  flex: 1;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-500);
  background: var(--color-base-background);
`,x=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-base-secondary);
`,S=t.button`
  background: var(--color-base-primary);
  color: var(--color-base-background);

  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;function C(){let{items:e}=r(),t=`تهران، میدان انقلاب، خیابان انقلاب، ابتدای خیابان کارگر شمالی، پلاک ۱۲`,n=[35.6997,51.338];return!e||e.length===0?(0,u.jsx)(`div`,{children:`سبد خرید شما خالی است.`}):(0,u.jsxs)(f,{children:[(0,u.jsx)(p,{children:`انتخاب نحوه پرداخت`}),(0,u.jsxs)(h,{children:[(0,u.jsxs)(g,{$selected:!0,children:[(0,u.jsxs)(_,{children:[(0,u.jsx)(`span`,{children:`🏦`}),` بانک مسکن`]}),(0,u.jsx)(`input`,{type:`radio`,checked:!0,readOnly:!0})]}),(0,u.jsxs)(g,{children:[(0,u.jsxs)(_,{children:[(0,u.jsx)(`span`,{children:`💳`}),` بانک شهر`]}),(0,u.jsx)(`input`,{type:`radio`})]})]}),(0,u.jsxs)(m,{children:[(0,u.jsx)(p,{style:{marginBottom:`16px`},children:`خلاصه محصولات`}),e.map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`12px`,borderBottom:`1px solid #eee`,paddingBottom:`8px`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:e.title}),(0,u.jsxs)(`div`,{children:[`سایز: `,e.sizes[0]]})]}),(0,u.jsxs)(`div`,{children:[e.price.toLocaleString(),` تومان`]})]},e.id))]}),(0,u.jsxs)(m,{children:[(0,u.jsx)(p,{style:{marginBottom:`16px`},children:`آدرس انتخابی شما`}),(0,u.jsxs)(v,{children:[(0,u.jsx)(y,{children:t}),(0,u.jsx)(b,{children:(0,u.jsxs)(a,{center:n,zoom:13,scrollWheelZoom:!1,style:{height:`100%`,width:`100%`},children:[(0,u.jsx)(c,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,u.jsx)(s,{position:n,children:(0,u.jsx)(o,{children:t})})]})})]})]}),(0,u.jsx)(m,{children:(0,u.jsxs)(x,{children:[(0,u.jsx)(p,{children:`زمان ارسال انتخابی شما`}),(0,u.jsx)(S,{children:`فردا`})]})})]})}export{C as default};