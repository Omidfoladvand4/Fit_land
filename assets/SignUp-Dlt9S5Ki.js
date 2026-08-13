import{l as e,r as t}from"./index-DWVO4log.js";import{t as n}from"./AuthLayout-DSnfnUMV.js";var r=`/Fit_land/assets/SignUpImage-C_lIVS7I.png`,i=e(),a=t.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,o=t.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,s=t.input`
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
`,c=t.button`
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
`,l=t.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: var(--global-margin-small) 0 0 0;
 
`,u=t.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`,d=t.input`
  margin-left: 8px;
  accent-color: var(--color-base-primary); 
  `,f=t.button`
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
    transform-origin: center;
    color: var(--color-base-primary);
   }

  `;function p(){return(0,i.jsxs)(n,{image:r,children:[(0,i.jsx)(a,{children:`ثبت نام`}),(0,i.jsx)(o,{children:`نام و نام خانوادگی *`}),(0,i.jsx)(s,{placeholder:`نام و نام خانوادگی`}),(0,i.jsx)(o,{children:`رمز عبور *`}),(0,i.jsx)(s,{type:`password`,placeholder:`رمز عبور`}),(0,i.jsx)(o,{children:`ایمیل (اختیاری)`}),(0,i.jsx)(s,{placeholder:`ایمیل`}),(0,i.jsx)(c,{children:`ثبت نام`}),(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{type:`checkbox`}),(0,i.jsx)(u,{children:`قوانین ومقررات `}),` را خوانده و قبول دارم.`]}),(0,i.jsx)(f,{onClick:()=>window.history.back(),children:`صفحه قبلی`})]})}export{p as default};