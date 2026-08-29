import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{l as i}from"./index-By7vYwek.js";import{n as a,t as o}from"./AuthLayout-IgdrFc6u.js";var s=e(n(),1),c=`/Fit_land/assets/VerifyImage-CAqf-XqK.png`,l=r(),u=t.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
`,d=t.p`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: 0 auto;
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
    color: var(--color-neutral-400);
  }
`,m=t.button`
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
`,h=t.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin: 8px 0;
`;function g(){let e=i().state?.phone,{isSubmitting:t,authError:n,loginWithPassword:r}=a(),[g,_]=(0,s.useState)(``);return e?(0,l.jsxs)(o,{image:c,children:[(0,l.jsx)(u,{children:`ورود`}),(0,l.jsxs)(d,{children:[`شماره موبایل: `,e]}),(0,l.jsxs)(`form`,{onSubmit:async t=>{if(t.preventDefault(),g.length<6){alert(`لطفا رمز عبور را وارد کنید`);return}r(e,g)},style:{width:`100%`},children:[(0,l.jsx)(f,{children:`رمز عبور`}),(0,l.jsx)(p,{type:`password`,placeholder:`رمز عبور خود را وارد کنید`,value:g,onChange:e=>_(e.target.value)}),n&&(0,l.jsx)(h,{children:n}),(0,l.jsx)(m,{type:`submit`,disabled:t,children:t?`در حال ورود...`:`ورود`})]})]}):null}export{g as default};