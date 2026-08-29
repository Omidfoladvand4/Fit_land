import{a as e,n as t,r as n,t as r}from"./jsx-runtime-yu_Uq3ru.js";import{i,o as a,s as o,t as s,u as c}from"./index-By7vYwek.js";import{t as l}from"./HomeIcon-BqGuVp_Z.js";import{t as u}from"./supabase-CpqE1W6R.js";var d=e(n(),1),f=e=>{let t=e.replace(/\D/g,``);return t.startsWith(`0`)&&(t=t.slice(1)),`+98${t}`},p=()=>{let e=c(),{saveUser:t,logout:n}=s(),[r,a]=(0,d.useState)(!1),[o,l]=(0,d.useState)(null),[p,m]=(0,d.useState)({});return{isSubmitting:r,authError:o,fieldErrors:p,checkUserExists:async t=>{a(!0),l(null),m({});try{let n=f(t),{data:r,error:i}=await u.from(`Users`).select(`*`).eq(`Phone`,n).single();if(i&&i.code===`PGRST116`){e(`/Sign-up`,{state:{fullPhone:n}});return}if(i)throw Error(i.message);r&&e(`/Verify-code`,{state:{phone:n}})}catch(e){l(e.message||`خطا در بررسی کاربر`)}finally{a(!1)}},loginWithPassword:async(n,r)=>{a(!0),l(null);try{let{data:a,error:o}=await u.from(`Users`).select(`*`).eq(`Phone`,n).single();if(o||!a)throw i.warning(`کاربری با این نام یافت نشد`),Error(`کاربری با این شماره یافت نشد`);if(a.Password===r)t({id:a.id,phone:a.Phone,fullName:a.Full_Name}),i.success(`ورود با موفقیت انجام شد`),e(`/`);else throw i.error(`رمز عبور اشتباه است`),Error(`رمز عبور اشتباه است`)}catch(e){l(e.message)}finally{a(!1)}},registerUser:async t=>{let{fullName:n,password:r,phone:o}=t,s=o.replace(/\D/g,``);s.startsWith(`0`)&&(s=s.slice(1));let c=`+98${s}`;a(!0),l(null),m({});try{let{error:t}=await u.from(`Users`).insert([{Phone:c,Full_Name:n,Password:r}]);if(t){if(t.code===`23505`){m({phone:`این شماره موبایل قبلاً ثبت شده است`});return}throw i.error(t.message),Error(t.message)}i.success(`ثبت نام با موفقیت انجام شد`),e(`/Verify-code`,{state:{phone:c}})}catch(e){l(e.message||`خطا در ثبت‌نام`)}finally{a(!1)}},logout:()=>{n(),e(`/Sign-in`)}}},m=r(),h=t.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  background: url(${({$image:e})=>e}) no-repeat center / cover;
  background-color: var(--color-base-secondary);
  background-position: top;
  position: relative;
  color: var(--color-base-background);

  @media (max-width: 490px) {
    display: none;
  }
`,g=t.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`,_=t.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`,v=t.img`
  display: block;
  width: 120px;
  height: auto;
`,y=t(o)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-base-background);
  font-size: var(--font-body-xl);
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateX(-4px);
  }

  svg {
    color: var(--color-base-background);
    display: block;
  }
`;function b({SidebarImage:e}){return(0,m.jsxs)(h,{$image:e,children:[(0,m.jsx)(g,{}),(0,m.jsxs)(_,{children:[(0,m.jsx)(v,{src:a,alt:`لوگوی فیت‌لند`}),(0,m.jsxs)(y,{to:`/`,children:[(0,m.jsx)(l,{}),`برگشتن به خانه`]})]})]})}var x=()=>(0,m.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`26`,height:`25`,fill:`none`,viewBox:`0 0 26 25`,children:[(0,m.jsx)(`rect`,{width:`2.237`,height:`17.897`,fill:`#717171`,rx:`1.119`,transform:`scale(1.0345 .96426)rotate(-45 11.988 -2.297)`}),(0,m.jsx)(`rect`,{width:`2.237`,height:`17.897`,fill:`#717171`,rx:`1.119`,transform:`scale(1.0345 .96426)rotate(45 1.234 24.224)`})]}),S=()=>(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`26`,height:`25`,fill:`none`,viewBox:`0 0 26 25`,children:(0,m.jsx)(`path`,{fill:`#717171`,d:`M9.654 21.532a.82.82 0 0 1-.575-.23.765.765 0 0 1 0-1.104l7.064-6.791c.52-.5.52-1.313 0-1.813L9.079 4.802a.765.765 0 0 1 0-1.104.84.84 0 0 1 1.149 0l7.063 6.792c.552.531.867 1.25.867 2.01s-.304 1.48-.867 2.01l-7.063 6.792a.87.87 0 0 1-.574.23`})}),C=t.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  svg{
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
     opacity: 0.85;
     transform: translateY(-2px);
    }
  }
  @media (max-width: 490px) {
    display: flex;
  }
  `;function w(){let e=c();return(0,m.jsxs)(C,{children:[(0,m.jsx)(`div`,{onClick:()=>{e(-1,{replace:!0})},children:(0,m.jsx)(S,{})}),(0,m.jsx)(`div`,{onClick:()=>e(`/`),children:(0,m.jsx)(x,{})})]})}var T=`/Fit_land/assets/BImage-DpXfpsBD.png`,E=`/Fit_land/assets/AImage-DRBp5mP5.png`,D=t.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: var(--color-base-background);
  position: relative;
`,O=t.div`
  width: 50%;
  height: 100vh;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,k=t.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  background-color: var(--color-base-background);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    top: -10px;
    left: -10px;
    background: url(${E}) no-repeat center / contain;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: -10px;
    right: -10px;
    background: url(${T}) no-repeat center / contain;
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    animation: animate 0.5s ease;
    @keyframes animate {
      0%{
        transform: translateX(100%);
        opacity: 0;
      }
        100%{
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`,A=t.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  padding: 14px 16px;
  gap: 8px;
  position: relative;
  z-index: 1;
  background-color: var(--color-base-background);

  @media (max-width: 490px) {
   padding: 10px 14px;
  }
`;function j({image:e,children:t}){return(0,m.jsxs)(D,{children:[(0,m.jsxs)(k,{children:[(0,m.jsx)(w,{}),(0,m.jsx)(A,{children:t})]}),(0,m.jsx)(O,{children:(0,m.jsx)(b,{SidebarImage:e})})]})}export{p as n,j as t};