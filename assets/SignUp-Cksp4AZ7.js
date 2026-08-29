import{n as e,t}from"./jsx-runtime-yu_Uq3ru.js";import{l as n}from"./index-By7vYwek.js";import{i as r,n as i,r as a,t as o}from"./types-DrkYJ-Zb.js";import{n as s,t as c}from"./AuthLayout-IgdrFc6u.js";var l=o({phone:i().min(1,`لطفا شماره موبایل را وارد کنید`).regex(/^09\d{9}$/,`شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود`),fullName:i().min(1,`نام و نام خانوادگی الزامی است`),password:i().min(6,`رمز عبور باید حداقل ۶ کاراکتر باشد`),confirmPassword:i().min(6,`تکرار رمز عبور الزامی است`)}).refine(e=>e.password===e.confirmPassword,{message:`رمز عبور و تکرار آن یکسان نیستند`,path:[`confirmPassword`]}),u=`/Fit_land/assets/SignUpImage-C_lIVS7I.png`,d=t(),f=e.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,p=e.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,m=e.input`
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
`,h=e.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
 margin: 8px 0;
`,g=e.button`
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
`;function _(){let e=n().state?.fullPhone||``,{isSubmitting:t,authError:i,fieldErrors:o,registerUser:_}=s(),{register:v,handleSubmit:y,formState:{errors:b}}=r({resolver:a(l),defaultValues:{fullName:``,phone:e,password:``,confirmPassword:``}});return(0,d.jsxs)(c,{image:u,children:[(0,d.jsx)(f,{children:`ثبت نام`}),(0,d.jsxs)(`form`,{onSubmit:y(e=>{_({...e})}),style:{width:`100%`},children:[(0,d.jsx)(p,{children:`نام و نام خانوادگی *`}),(0,d.jsx)(m,{placeholder:`نام و نام خانوادگی`,...v(`fullName`)}),b.fullName&&(0,d.jsx)(h,{children:b.fullName.message}),(0,d.jsx)(p,{children:`شماره موبایل *`}),(0,d.jsx)(m,{placeholder:`09123456789`,inputMode:`numeric`,...v(`phone`)}),b.phone&&(0,d.jsx)(h,{children:b.phone.message}),(0,d.jsx)(p,{children:`رمز عبور *`}),(0,d.jsx)(m,{type:`password`,placeholder:`رمز عبور (حداقل ۶ کاراکتر)`,...v(`password`)}),b.password&&(0,d.jsx)(h,{children:b.password.message}),(0,d.jsx)(p,{children:`تکرار رمز عبور *`}),(0,d.jsx)(m,{type:`password`,placeholder:`تکرار رمز عبور`,...v(`confirmPassword`)}),b.confirmPassword&&(0,d.jsx)(h,{children:b.confirmPassword.message}),o.phone&&(0,d.jsx)(h,{children:o.phone}),i&&(0,d.jsx)(h,{children:i}),(0,d.jsx)(g,{type:`submit`,disabled:t,children:t?`در حال ثبت‌نام...`:`ثبت نام`})]})]})}export{_ as default};