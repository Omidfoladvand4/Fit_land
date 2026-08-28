import{c as e,i as t,p as n}from"./index-OylXGWMp.js";import{a as r,i,n as a,r as o,t as s}from"./types-DnV2Pe55.js";import{n as c,t as l}from"./AuthLayout-Ct6GM0Eq.js";var u=`/Fit_land/assets/SignUpImage-C_lIVS7I.png`,d=n(),f=t.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,p=t.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,m=t.input`
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
`,h=t.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin-top: -4px;
  margin-bottom: 8px;
`,g=t.button`
  width: 100%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-xxl);
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
`,_=t.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: var(--global-margin-small) 0 0 0;
`,v=t.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`,y=t.input`
  margin-left: 8px;
  accent-color: var(--color-base-primary);
`,b=t.button`
  width: max-content;
  text-align: start;
  background: none;
  font-size: var(--font-body-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--color-base-neutral-800);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    color: var(--color-base-primary);
  }
`,x=a({fullName:o().min(1,`نام و نام خانوادگی الزامی است`),email:o().email(`ایمیل معتبر وارد کنید`),password:o().min(6,`رمز عبور باید حداقل ۶ کاراکتر باشد`),acceptTerms:s().refine(e=>e===!0,{message:`لطفا قوانین و مقررات را بپذیرید`})});function S(){let t=e(),{register:n,handleSubmit:a,formState:{errors:o,isSubmitting:s}}=r({resolver:i(x),defaultValues:{acceptTerms:!1}});return(0,d.jsxs)(l,{image:u,children:[(0,d.jsx)(f,{children:`ثبت نام`}),(0,d.jsxs)(`form`,{onSubmit:a(async e=>{let{fullName:n,email:r,password:i}=e,{data:a,error:o}=await c.auth.signUp({email:r,password:i,options:{data:{full_name:n}}});o?alert(`خطا در ثبت‌نام: ${o.message}`):(alert(`ثبت‌نام با موفقیت انجام شد! لطفاً برای ورود، کد تایید ارسال شده به ایمیل خود را وارد کنید.`),t(`/Sign-in`,{state:{emailToAutoFill:r}}))}),style:{width:`100%`},children:[(0,d.jsx)(p,{children:`نام و نام خانوادگی *`}),(0,d.jsx)(m,{placeholder:`نام و نام خانوادگی`,...n(`fullName`)}),o.fullName&&(0,d.jsx)(h,{children:o.fullName.message}),(0,d.jsx)(p,{children:`ایمیل *`}),(0,d.jsx)(m,{placeholder:`ایمیل`,...n(`email`)}),o.email&&(0,d.jsx)(h,{children:o.email.message}),(0,d.jsx)(p,{children:`رمز عبور *`}),(0,d.jsx)(m,{type:`password`,placeholder:`رمز عبور (حداقل ۶ کاراکتر)`,...n(`password`)}),o.password&&(0,d.jsx)(h,{children:o.password.message}),(0,d.jsx)(g,{type:`submit`,disabled:s,children:s?`در حال ثبت‌نام...`:`ثبت نام`}),(0,d.jsxs)(_,{children:[(0,d.jsx)(y,{type:`checkbox`,...n(`acceptTerms`)}),(0,d.jsx)(v,{children:`قوانین ومقررات `}),` را خوانده و قبول دارم.`,o.acceptTerms&&(0,d.jsx)(h,{children:o.acceptTerms.message})]})]}),(0,d.jsx)(b,{onClick:()=>window.history.back(),children:`صفحه قبلی`})]})}export{S as default};