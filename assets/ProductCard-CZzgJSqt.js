import{n as e,t}from"./jsx-runtime-yu_Uq3ru.js";import{s as n}from"./index-By7vYwek.js";var r=t(),i=e(n)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-base-background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  direction: rtl;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 12px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
`,a=e.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${i}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 120px;
    min-width: 120px;
    aspect-ratio: 3 / 4;
    border-radius: 8px;
  }
`,o=e.div`
  width: 100%;
  height: 45%;
  position: absolute;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  background-color: var(--color-neutral-800);
  z-index: 99;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  transform: translateY(100%);

  ${i}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    display: none;
  }
`,s=e.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-base-background);
  font-size: var(--font-body-large);
  font-weight: 900;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-base-primary);
    color: var(--color-base-background);
  }
`,c=e.div`
  padding: 12px 14px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`,l=e.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;

  span {
    color: var(--color-neutral-700);
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`,u=e.h3`
  font-size: var(--font-body-md);
  font-weight: 600;
  color: black;
  line-height: 1.5;
  margin-bottom: 4px;
  text-align: right;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 700;
    -webkit-line-clamp: 1;
    margin-bottom: 0;
  }
`,d=e.div`
  font-size: var(--font-body-sm);
  font-weight: 400;
  color: var(--color-neutral-800);
  text-align: right;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`,f=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  text-align: right;
  direction: rtl;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    margin-top: 0;
    gap: 6px;
  }
`,p=e.div`
  font-size: var(--font-body-md);
  font-weight: 700;
  color: var(--color-base-primary);

  @media (max-width: 480px) {
    font-size: 15px;
  }
`,m=e.div`
  font-size: var(--font-body-sm);
  font-weight: 400;
  color: var(--color-neutral-800);
  text-decoration: line-through;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,h=e.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 4px;
    gap: 4px;
  }
`,g=e.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  border: 1px solid var(--color-neutral-800);

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`,_=({image:e=`/placeholder-image.jpg`,title:t=`NCY تیشرت زنانه`,price:n=16e4,originalPrice:_=2e5,rating:v,colors:y,sizes:b,ProductId:x})=>{let S=e=>{let t=[],n=Math.floor(e),i=e%1>=.5;for(let e=0;e<n;e++)t.push(`★`);for(i&&t.push(`★`);t.length<5;)t.push((0,r.jsx)(`span`,{children:`★`},t.length));return t},C=_&&_>n;return(0,r.jsxs)(i,{to:`/Product-Detail/${x}`,children:[(0,r.jsxs)(a,{children:[(0,r.jsx)(`img`,{src:e,alt:t}),(0,r.jsx)(o,{children:b.slice(0,5).map((e,t)=>(0,r.jsx)(s,{children:e},t))})]}),(0,r.jsxs)(c,{children:[(0,r.jsx)(l,{children:S(v)}),(0,r.jsx)(u,{children:t}),(0,r.jsx)(d,{children:(e=>{if(!e||e.length===0)return``;let t=[...e].sort((e,t)=>{let n=[`XS`,`S`,`M`,`L`,`XL`,`2XL`,`3XL`];return n.indexOf(e)-n.indexOf(t)});return`از سایز ${t[0]} تا ${t[t.length-1]}`})(b)}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(p,{children:[n.toLocaleString(),` تومان`]}),C&&(0,r.jsxs)(m,{children:[_.toLocaleString(),` تومان`]})]}),(0,r.jsxs)(h,{children:[y.slice(0,3).map((e,t)=>(0,r.jsx)(g,{$color:e.hex},t)),y.length>3&&(0,r.jsxs)(g,{$color:``,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`8px`,fontWeight:`bold`,color:`#6b7280`},children:[`+`,y.length-3]})]})]})]})};export{_ as t};