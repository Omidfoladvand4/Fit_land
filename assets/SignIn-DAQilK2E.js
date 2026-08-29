import{n as e,t}from"./jsx-runtime-yu_Uq3ru.js";import{i as n,n as r,r as i,t as a}from"./types-DrkYJ-Zb.js";import{n as o,t as s}from"./AuthLayout-IgdrFc6u.js";var c=a({phone:r().min(1,`لطفا شماره موبایل را وارد کنید`).regex(/^09\d{9}$/,`شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود`)}),l=`/Fit_land/assets/SignInImage-B1_DyrZV.png`,u=t(),d=e.div`
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
`;function g(){let{isSubmitting:e,authError:t,checkUserExists:r}=o(),{register:a,handleSubmit:g,formState:{errors:_}}=n({resolver:i(c)});return(0,u.jsxs)(s,{image:l,children:[(0,u.jsx)(d,{children:`ورود | ثبت نام`}),(0,u.jsxs)(`form`,{onSubmit:g(e=>{r(e.phone)}),style:{width:`100%`},children:[(0,u.jsx)(f,{children:`شماره موبایل`}),(0,u.jsx)(p,{placeholder:`09123456789`,...a(`phone`),inputMode:`numeric`}),_.phone&&(0,u.jsx)(m,{children:_.phone.message}),t&&(0,u.jsx)(m,{children:t}),(0,u.jsx)(h,{type:`submit`,disabled:e,children:e?`در حال بررسی...`:`ادامه`})]})]})}export{g as default};