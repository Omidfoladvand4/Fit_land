import{n as e,t}from"./jsx-runtime-yu_Uq3ru.js";import{l as n}from"./index-DPNvDcSj.js";import{a as r,i,n as a,r as o}from"./types-C2EzWw2y.js";import{n as s,t as c}from"./AuthLayout-UGShe3TI.js";var l=`/Fit_land/assets/SignInImage-B1_DyrZV.png`,u=t(),d=e.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,f=e.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,p=e.input`
  width: 100%;
  border: 1px solid var(--color-neutral-800);
  padding: 12px 14px;
  border-radius: 12px;
  font-size: var(--font-body-md);
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-base-primary);
  }
  &::placeholder {
    font-weight: var(--font-weight-regular);
    color: var(--color-neutral-400);
  }
`,m=e.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin-top: -4px;
  margin-bottom: 8px;
`,h=e.button`
  width: 100%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-xl);
  border-radius: 12px;
  margin-top: 16px;
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
`,g=e.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin-top: var(--global-margin-small);
  text-align: center;
`,_=e.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`,v=a({phone:o().min(1,`لطفا شماره موبایل را وارد کنید`)});function y(){let e=n(),{register:t,handleSubmit:a,formState:{errors:o,isSubmitting:y}}=r({resolver:i(v)});return(0,u.jsxs)(c,{image:l,children:[(0,u.jsx)(d,{children:`ورود | ثبت نام`}),(0,u.jsxs)(`form`,{onSubmit:a(async t=>{let n=t.phone.replace(/\D/g,``);if(n.startsWith(`0`)&&(n=n.slice(1)),!n.startsWith(`9`)){alert(`شماره موبایل معتبر نیست`);return}let r=`+98${n}`,{error:i}=await s.auth.signInWithOtp({phone:r,options:{shouldCreateUser:!0}});i?i.message.includes(`rate limit`)?alert(`⚠️ لطفاً کمی صبر کنید و دوباره تلاش کنید.`):alert(`خطا در ارسال کد: ${i.message}`):e(`/Verify-code`,{state:{fullPhone:r}})}),style:{width:`100%`},children:[(0,u.jsx)(f,{children:`شماره موبایل`}),(0,u.jsx)(p,{placeholder:`09123456789`,...t(`phone`),inputMode:`numeric`}),o.phone&&(0,u.jsx)(m,{children:o.phone.message}),(0,u.jsx)(h,{type:`submit`,disabled:y,children:y?`در حال ارسال کد...`:`دریافت کد`})]}),(0,u.jsxs)(g,{children:[`ورود شما به معنای پذیرش شرایط `,(0,u.jsx)(_,{children:`فیت لند`}),` و`,` `,(0,u.jsx)(_,{children:`قوانین حریم خصوصی`}),` ماست`]})]})}export{y as default};