import{c as e,d as t,l as n,r}from"./index-lVG-3YxT.js";import{t as i}from"./AuthLayout-g42qRl26.js";var a=t(e(),1),o=`/Fit_land/assets/VerifyImage-CAqf-XqK.png`,s=n(),c=r.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
    margin : 0 auto ;
`,l=r.p`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin : 0 auto;
`,u=r.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  direction: ltr;
`,d=r.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  background-color: var(--color-base-background);
  color: var(--color-base-secondary);

  &:focus {
    border-color: var(--color-base-primary);
    box-shadow: 0 0 0 4px rgba(250, 84, 28, 0.15);
  }

  &::placeholder {
    
    color: var(--color-neutral-400);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-body-xxxl);
    position: relative;
    top: 20%;
    color: var(--color-neutral-800);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  @media (max-width: 490px) {
    width: 35px;
    height: 45px;
    font-size: var(--font-body-xl);
  }
`,f=r.button`
  width: 100%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-xl);
  border-radius: 12px;
  margin-top: 24px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`,p=r.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px auto;
`,m=r.button`
  width: max-content;
  background: none;
  border: none;
  color: var(--color-base-primary);
  font-size: var(--font-body-large);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    text-decoration: none;
  }
`,h=r.span`
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
`;function g(){let e=[(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null)],t=(t,n)=>{let r=n.target.value;/^\d*$/.test(r)&&(r.length===1&&t<5&&e[t+1].current.focus(),r.length===0&&t>0&&e[t-1].current.focus())},n=(t,n)=>{n.key===`Backspace`&&t>0&&!n.target.value&&e[t-1].current.focus()},r=()=>e.map(e=>e.current?.value||``).join(``),g=()=>{let e=r();console.log(`کد کامل:`,e)};return(0,s.jsxs)(i,{image:o,children:[(0,s.jsx)(c,{children:`کد تایید را وارد کنید`}),(0,s.jsx)(u,{children:[...[,,,,,,]].map((r,i)=>(0,s.jsx)(d,{ref:e[i],type:`number`,maxLength:1,placeholder:`_`,onChange:e=>t(i,e),onKeyDown:e=>n(i,e)},i))}),(0,s.jsxs)(p,{children:[(0,s.jsx)(l,{children:`کد برای شما ارسال شد`}),(0,s.jsxs)(h,{children:[`01:29   `,(0,s.jsx)(m,{children:`ارسال دوباره`})]})]}),(0,s.jsx)(f,{onClick:g,children:`ثبت`})]})}export{g as default};