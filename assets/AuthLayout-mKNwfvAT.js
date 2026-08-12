import{c as e,i as t,n,r,t as i}from"./index-q_DZ_Xf_.js";import{t as a}from"./HomeIcon-Dd52wZm_.js";var o=e(),s=n.div`
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
`,c=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`,l=n.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`,u=n.img`
  display: block;
  width: 120px;
  height: auto;
`,d=n(r)`
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
`;function f({SidebarImage:e}){return(0,o.jsxs)(s,{$image:e,children:[(0,o.jsx)(c,{}),(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{src:i,alt:`لوگوی فیت‌لند`}),(0,o.jsxs)(d,{to:`/`,children:[(0,o.jsx)(a,{}),`برگشتن به خانه`]})]})]})}var p=()=>(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`26`,height:`25`,fill:`none`,viewBox:`0 0 26 25`,children:[(0,o.jsx)(`rect`,{width:`2.237`,height:`17.897`,fill:`#717171`,rx:`1.119`,transform:`scale(1.0345 .96426)rotate(-45 11.988 -2.297)`}),(0,o.jsx)(`rect`,{width:`2.237`,height:`17.897`,fill:`#717171`,rx:`1.119`,transform:`scale(1.0345 .96426)rotate(45 1.234 24.224)`})]}),m=()=>(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`26`,height:`25`,fill:`none`,viewBox:`0 0 26 25`,children:(0,o.jsx)(`path`,{fill:`#717171`,d:`M9.654 21.532a.82.82 0 0 1-.575-.23.765.765 0 0 1 0-1.104l7.064-6.791c.52-.5.52-1.313 0-1.813L9.079 4.802a.765.765 0 0 1 0-1.104.84.84 0 0 1 1.149 0l7.063 6.792c.552.531.867 1.25.867 2.01s-.304 1.48-.867 2.01l-7.063 6.792a.87.87 0 0 1-.574.23`})}),h=n.div`
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
  `;function g(){let e=t();return(0,o.jsxs)(h,{children:[(0,o.jsx)(`div`,{onClick:()=>{e(-1,{replace:!0})},children:(0,o.jsx)(m,{})}),(0,o.jsx)(`div`,{onClick:()=>e(`/`),children:(0,o.jsx)(p,{})})]})}var _=`/Fit_land/assets/BImage-DpXfpsBD.png`,v=`/Fit_land/assets/AImage-DRBp5mP5.png`,y=n.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: var(--color-base-background);
  position: relative;
`,b=n.div`
  width: 50%;
  height: 100vh;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,x=n.div`
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
    background: url(${v}) no-repeat center / contain;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: -10px;
    right: -10px;
    background: url(${_}) no-repeat center / contain;
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
`,S=n.div`
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
`;function C({image:e,children:t}){return(0,o.jsxs)(y,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(S,{children:t})]}),(0,o.jsx)(b,{children:(0,o.jsx)(f,{SidebarImage:e})})]})}export{C as t};