import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{s as i}from"./index-By7vYwek.js";import{t as a}from"./LocationIcon-nDxi_86V.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./leaflet-h3Saojpq.js";var f=e(n(),1);function p(){return l().map}function m(e){let t=p();return(0,f.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}var h=e(o(),1),g=r(),_=h.default.divIcon({className:`custom-div-icon`,html:`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FA541C" stroke="none">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="#FFFFFF" stroke="none"></circle>
    </svg>
  `,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});h.default.Marker.prototype.options.icon=_;var v=t.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,y=t.h2`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  margin-bottom: 8px;
  border-bottom: 1px solid var(--color-neutral-800);
`,b=t.p`
  color: var(--color-neutral-800);
  margin-bottom: 24px;
`,x=t.div`
  width: 100%;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
`,S=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`,C=t.input`
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  margin: 16px;
  font-size: var(--font-body-md);
  @media (max-width: 490px) {
    width: 100%;
    margin: 10px 0;
  }
`,w=t.select`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  background: var(--color-base-background);
  @media (max-width: 490px) {
    width: 100%;
    margin: 10px 0;
  }
`,T=t.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-base-background);
  z-index: 1;
`,E=t(i)`
  width: 100%;
  max-width: 300px;
  margin-top: 24px;
  background: var(--color-base-primary);
  color: var(--color-base-background);

  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 786px) {
    width: 10em;
  }
`;function D({setPosition:e,setAddress:t}){return m({async click(n){let{lat:r,lng:i}=n.latlng;e(n.latlng);try{t((await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${r}&lon=${i}&format=jsonv2&accept-language=fa`,{headers:{"User-Agent":`MyFitLandApp/1.0 (my-email@example.com)`}})).json()).display_name||`آدرس نامشخص`)}catch(e){t(e,`آدرس نامشخص`)}}}),null}function O(){let[e,t]=(0,f.useState)([35.7219,51.3347]),[n,r]=(0,f.useState)(`آدرس خود را روی نقشه انتخاب کنید`);return(0,g.jsxs)(v,{children:[(0,g.jsx)(y,{children:`آدرس ارسال`}),(0,g.jsx)(b,{children:`آدرس‌ی شما ثبت نشده است.`}),(0,g.jsxs)(x,{children:[(0,g.jsxs)(S,{children:[(0,g.jsxs)(w,{defaultValue:``,children:[(0,g.jsx)(`option`,{value:``,disabled:!0,children:`استان`}),(0,g.jsx)(`option`,{children:`تهران`}),(0,g.jsx)(`option`,{children:`اصفهان`})]}),(0,g.jsxs)(w,{defaultValue:``,children:[(0,g.jsx)(`option`,{value:``,disabled:!0,children:`شهر`}),(0,g.jsx)(`option`,{children:`تهران`})]})]}),(0,g.jsx)(C,{placeholder:`خیابان`}),(0,g.jsx)(C,{placeholder:`کوچه`}),(0,g.jsx)(C,{placeholder:`کد پستی`})]}),(0,g.jsx)(T,{children:(0,g.jsxs)(s,{center:e,zoom:13,scrollWheelZoom:!0,style:{height:`100%`,width:`100%`},children:[(0,g.jsx)(d,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,g.jsx)(D,{setPosition:t,setAddress:r}),e&&(0,g.jsx)(u,{position:e,children:(0,g.jsx)(c,{children:n})})]})}),(0,g.jsx)(`p`,{style:{marginTop:`8px`,color:`var(--color-base-secondary)`,fontWeight:`bold`},children:n}),(0,g.jsxs)(E,{to:`/Basket/Pay`,children:[`ثبت آدرس `,(0,g.jsx)(a,{})]})]})}export{O as default};