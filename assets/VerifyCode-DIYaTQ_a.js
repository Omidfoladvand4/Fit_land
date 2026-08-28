import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{c as i,l as a}from"./index-DPNvDcSj.js";import{n as o,t as s}from"./AuthLayout-UGShe3TI.js";var c=e(n(),1),l=`/Fit_land/assets/VerifyImage-CAqf-XqK.png`,u=r(),d=t.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
`,f=t.p`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: 0 auto;
`,p=t.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  direction: ltr;
`,m=t.input`
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
`,h=t.button`
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
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,g=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px auto;
`,_=t.button`
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
`,v=t.span`
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
`;function y(){let e=a(),t=i().state?.fullPhone,[n,r]=(0,c.useState)(!1);if(!t)return e(`/Sign-in`),null;let y=[(0,c.useRef)(null),(0,c.useRef)(null),(0,c.useRef)(null),(0,c.useRef)(null),(0,c.useRef)(null),(0,c.useRef)(null)],b=(e,t)=>{let n=t.target.value;/^\d*$/.test(n)&&(n.length===1&&e<5&&y[e+1].current.focus(),n.length===0&&e>0&&y[e-1].current.focus())},x=(e,t)=>{t.key===`Backspace`&&e>0&&!t.target.value&&y[e-1].current.focus()},S=()=>y.map(e=>e.current?.value||``).join(``),C=async()=>{let n=S();if(n.length!==6){alert(`لطفا کد ۶ رقمی را کامل وارد کنید`);return}r(!0);let{data:i,error:a}=await o.auth.verifyOtp({phone:t,token:n,type:`sms`});r(!1),a?alert(`کد وارد شده اشتباه است یا منقضی شده: ${a.message}`):(alert(`ورود با موفقیت انجام شد!`),e(`/User-profile`))},w=async()=>{let{error:e}=await o.auth.signInWithOtp({phone:t});alert(e?`خطا در ارسال مجدد: ${e.message}`:`کد جدید با موفقیت ارسال شد.`)};return(0,u.jsxs)(s,{image:l,children:[(0,u.jsx)(d,{children:`کد تایید را وارد کنید`}),(0,u.jsx)(p,{children:[...[,,,,,,]].map((e,t)=>(0,u.jsx)(m,{ref:y[t],type:`number`,maxLength:1,placeholder:`_`,onChange:e=>b(t,e),onKeyDown:e=>x(t,e)},t))}),(0,u.jsxs)(g,{children:[(0,u.jsx)(f,{children:`کد برای شما ارسال شد`}),(0,u.jsxs)(v,{children:[`01:29`,(0,u.jsx)(_,{onClick:w,children:`ارسال دوباره`})]})]}),(0,u.jsx)(h,{onClick:C,disabled:n,children:n?`در حال تایید...`:`ثبت`})]})}export{y as default};