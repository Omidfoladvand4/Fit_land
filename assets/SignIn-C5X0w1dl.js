import{c as e,i as t,n}from"./index-Cp0K4MIl.js";import{t as r}from"./AuthLayout-Bu0xjJMh.js";var i=`/Fit_land/assets/SignInImage-B1_DyrZV.png`,a=e(),o=n.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`,s=n.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`,c=n.input`
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
`,l=n.button`
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
`,u=n.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin-top: var(--global-margin-small);
  text-align: center;
`,d=n.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`;function f(){let e=t(),n=()=>{e(`/Verify-code`)};return(0,a.jsxs)(r,{image:i,children:[(0,a.jsx)(o,{children:`ورود | ثبت نام`}),(0,a.jsx)(s,{htmlFor:`input`,children:`لطفا شماره تماس یا ایمیل خود را وارد کنید`}),(0,a.jsx)(c,{id:`input`,placeholder:`Example@gmail.com یا 09123456789`}),(0,a.jsx)(l,{onClick:()=>n(),children:`ادامه`}),(0,a.jsxs)(u,{children:[`ورود شما به معنای پذیرش شرایط `,(0,a.jsx)(d,{children:`فیت لند`}),` و`,` `,(0,a.jsx)(d,{children:`قوانین حریم خصوصی`}),` ماست`]})]})}export{f as default};