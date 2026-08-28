import{c as e,i as t,p as n}from"./index-OylXGWMp.js";import{a as r,i,n as a,r as o}from"./types-DnV2Pe55.js";import{n as s,t as c}from"./AuthLayout-Ct6GM0Eq.js";var l=`/Fit_land/assets/SignInImage-B1_DyrZV.png`,u=n(),d=t.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,f=t.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,p=t.input`
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
`,m=t.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin-top: -4px;
  margin-bottom: 8px;
`,h=t.button`
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
    background-color: var(--color-neutral-400); /* خاکستری کردن دکمه */
  }
`,g=t.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin-top: var(--global-margin-small);
  text-align: center;
`,_=t.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`,v=a({identifier:o().min(1,`لطفا شماره تماس یا ایمیل را وارد کنید`)});function y(){let t=e(),{register:n,handleSubmit:a,formState:{errors:o,isSubmitting:y}}=r({resolver:i(v)});return(0,u.jsxs)(c,{image:l,children:[(0,u.jsx)(d,{children:`ورود | ثبت نام`}),(0,u.jsxs)(`form`,{onSubmit:a(async e=>{let{identifier:n}=e,r=n.includes(`@`)?{email:n}:{phone:n},{error:i}=await s.auth.signInWithOtp(r);i?i.message.includes(`rate limit`)?alert(`⚠️ شما بیش از حد مجاز درخواست فرستاده‌اید. لطفاً ۱ دقیقه صبر کنید و دوباره تلاش کنید.`):alert(`خطا در ارسال کد: ${i.message}`):t(`/Verify-code`,{state:{identifier:n}})}),style:{width:`100%`},children:[(0,u.jsx)(f,{htmlFor:`input`,children:`لطفا شماره تماس یا ایمیل خود را وارد کنید`}),(0,u.jsx)(p,{id:`input`,placeholder:`Example@gmail.com یا 09123456789`,...n(`identifier`)}),o.identifier&&(0,u.jsx)(m,{children:o.identifier.message}),(0,u.jsx)(h,{type:`submit`,disabled:y,children:y?`در حال ارسال کد...`:`ادامه`})]}),(0,u.jsxs)(g,{children:[`ورود شما به معنای پذیرش شرایط `,(0,u.jsx)(_,{children:`فیت لند`}),` و`,` `,(0,u.jsx)(_,{children:`قوانین حریم خصوصی`}),` ماست`]})]})}export{y as default};