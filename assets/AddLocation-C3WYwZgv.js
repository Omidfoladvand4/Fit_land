import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{t as i}from"./LocationIcon-CwCBCG3N.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./marker-shadow-B73RVFNQ.js";var p=e(n(),1);function m(){return o().map}function h(e){let t=m();return(0,p.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}var g=e(d(),1),_=r(),v=g.default.icon({iconUrl:c,shadowUrl:f,iconSize:[25,41],iconAnchor:[12,41]});g.default.Marker.prototype.options.icon=v;var y=t.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,b=t.h2`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  margin-bottom: 8px;
  border-bottom: 1px solid var(--color-neutral-800);
`,x=t.p`
  color: var(--color-neutral-800);
  margin-bottom: 24px;
`,S=t.div`
  width: 100%;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
`,C=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
    @media (max-width : 490px) {
    flex-direction: column;
  }
`,w=t.input`
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  margin: 16px;
  font-size: var(--font-body-md);
  @media (max-width : 490px) {
    width: 100%;
    margin: 10px 0;
  }
`,T=t.select`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  background: white;
    @media (max-width : 490px) {
    width: 100%;
    margin: 10px 0;
  }
`,E=t.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e3df;
  z-index: 1;
`,D=t.button`
  width: 100%;
  max-width: 300px;
  margin-top: 24px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-lg);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width : 786px) {
    width : 8em ;
  }
`;function O({setPosition:e,setAddress:t}){return h({async click(n){let{lat:r,lng:i}=n.latlng;e(n.latlng);try{t((await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${r}&lon=${i}&format=jsonv2&accept-language=fa`,{headers:{"User-Agent":`MyFitLandApp/1.0 (my-email@example.com)`}})).json()).display_name||`آدرس نامشخص`)}catch{t(`آدرس نامشخص`)}}}),null}function k(){let[e,t]=(0,p.useState)([35.7219,51.3347]),[n,r]=(0,p.useState)(`آدرس خود را روی نقشه انتخاب کنید`);return(0,_.jsxs)(y,{children:[(0,_.jsx)(b,{children:`آدرس ارسال`}),(0,_.jsx)(x,{children:`آدرس‌ی شما ثبت نشده است.`}),(0,_.jsxs)(S,{children:[(0,_.jsxs)(C,{children:[(0,_.jsxs)(T,{defaultValue:``,children:[(0,_.jsx)(`option`,{value:``,disabled:!0,children:`استان`}),(0,_.jsx)(`option`,{children:`تهران`}),(0,_.jsx)(`option`,{children:`اصفهان`})]}),(0,_.jsxs)(T,{defaultValue:``,children:[(0,_.jsx)(`option`,{value:``,disabled:!0,children:`شهر`}),(0,_.jsx)(`option`,{children:`تهران`})]})]}),(0,_.jsx)(w,{placeholder:`خیابان`}),(0,_.jsx)(w,{placeholder:`کوچه`}),(0,_.jsx)(w,{placeholder:`کد پستی`})]}),(0,_.jsx)(E,{children:(0,_.jsxs)(l,{center:e,zoom:13,scrollWheelZoom:!0,style:{height:`100%`,width:`100%`},children:[(0,_.jsx)(u,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,_.jsx)(O,{setPosition:t,setAddress:r}),e&&(0,_.jsx)(a,{position:e,children:(0,_.jsx)(s,{children:n})})]})}),(0,_.jsx)(`p`,{style:{marginTop:`8px`,color:`var(--color-base-secondary)`,fontWeight:`bold`},children:n}),(0,_.jsxs)(D,{children:[`ثبت آدرس `,(0,_.jsx)(i,{})]})]})}export{k as default};