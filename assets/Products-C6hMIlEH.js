import{c as e,d as t,i as n,l as r,o as i,r as a,s as o,u as s}from"./index-DWVO4log.js";import{n as c,t as l}from"./ProductCard-CqmzwuQ-.js";var u=t(e(),1),d=r(),f=()=>(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`path`,{fill:`#ADADAD`,d:`M9.568 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06l6.07-6.07c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.558 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22`}),(0,d.jsx)(`path`,{fill:`#ADADAD`,d:`M20.502 12.75H3.672c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75`})]}),p=a.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800); 
  direction: rtl;
  width: 100%;
  margin-bottom: 16px; 
`,m=a.span`
  a {
    color: ${({$isLast:e})=>e?`var(--color-base-secondary)`:`var(--color-neutral-800)`};
    font-weight: ${({$isLast:e})=>e?`600`:`400`};
    cursor: ${({$isLast:e})=>e?`default`:`pointer`};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: ${({$isLast:e})=>e?`var(--color-base-secondary)`:`var(--color-info-800)`};
    }
  }
`,h=a.span`
  font-size: var(--font-body-md);
  display: flex;
  user-select: none;
`,g=({items:e=[]})=>(0,d.jsx)(p,{children:e.map((t,r)=>{let i=r===e.length-1;return(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(m,{$isLast:i,children:(0,d.jsx)(n,{to:t===`خانه`?`/`:null,children:t})}),!i&&(0,d.jsx)(h,{children:(0,d.jsx)(f,{})})]},r)})}),_=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`,v=a.span`
  font-size: var(--font-body-large);
  font-weight: 500;
  color: var(--color-base-secondary);
`,y=a.button`
  width: 40px;
  height: 20px;
  border-radius: 9999px;
  border: none;
  background-color: ${({$isActive:e})=>e?`var(--color-base-secondary)`:`#d1d5db`};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({$isActive:e})=>e?`22px`:`2px`};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`,b=({label:e,isActive:t,onToggle:n})=>(0,d.jsxs)(_,{children:[(0,d.jsx)(v,{children:e}),(0,d.jsx)(y,{$isActive:t,onClick:n})]}),x=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,S=a.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({$color:e})=>e};
  border: 2px solid ${({$isSelected:e})=>e?`var(--color-neutral-800)`:`var(--color-base-primary)`};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }
`,C=({colors:e,selectedColors:t,onColorSelect:n})=>(0,d.jsx)(x,{children:e.map(e=>(0,d.jsx)(S,{$color:e,$isSelected:t.includes(e),onClick:()=>n(e)},e))}),w=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`,T=a.button`
  min-width: 40px;
  height: 32px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-md);
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({$isSelected:e})=>e?`var(--color-base-secondary)`:`#d1d5db`};
  background-color: ${({$isSelected:e})=>e?`var(--color-base-secondary)`:`var(--color-base-background`};
  color: ${({$isSelected:e})=>e?`var(--color-base-background)`:`var(--color-base-secondary)`};
  cursor: pointer;
  transition: all 0.2s ease;

`,E=({sizes:e,selectedSizes:t,onSizeSelect:n})=>(0,d.jsx)(w,{children:e.map(e=>(0,d.jsx)(T,{$isSelected:t.includes(e),onClick:()=>n(e),children:e},e))});function D(e){"@babel/helpers - typeof";return D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},D(e)}function O(e,t){if(D(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(D(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function k(e){var t=O(e,`string`);return D(t)==`symbol`?t:t+``}function A(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?j(Object(n),!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ee(e){if(Array.isArray(e))return N(e)}function te(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ne(e,t){if(e){if(typeof e==`string`)return N(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function P(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(e){return ee(e)||te(e)||ne(e)||P()}function re(e){if(Array.isArray(e))return e}function I(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ie(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(e,t){return re(e)||I(e,t)||ne(e,t)||ie()}var R=t(s(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}))());function ae(e){var t=u.useRef();return t.current=e,u.useCallback(function(){var e,n=[...arguments];return(e=t.current)?.call.apply(e,[t].concat(n))},[])}function oe(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var se=oe()?u.useLayoutEffect:u.useEffect,ce=function(e,t){var n=u.useRef(!0);se(function(){return e(n.current)},t),se(function(){return n.current=!1,function(){n.current=!0}},[])},le=function(e,t){ce(function(t){if(!t)return e()},t)};function ue(e){var t=u.useRef(!1),n=L(u.useState(e),2),r=n[0],i=n[1];u.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function a(e,n){n&&t.current||i(e)}return[r,a]}function de(e){return e!==void 0}function fe(e,t){var n=t||{},r=n.defaultValue,i=n.value,a=n.onChange,o=n.postState,s=L(ue(function(){return de(i)?i:de(r)?typeof r==`function`?r():r:typeof e==`function`?e():e}),2),c=s[0],l=s[1],u=i===void 0?c:i,d=o?o(u):u,f=ae(a),p=L(ue([u]),2),m=p[0],h=p[1];return le(function(){var e=m[0];c!==e&&f(c,e)},[m]),le(function(){de(i)||l(i)},[i]),[d,ae(function(e,t){l(e,t),h([u],t)})]}var pe={},me=[],he=function(e){me.push(e)};function ge(e,t){}function _e(e,t){}function ve(){pe={}}function ye(e,t,n){!t&&!pe[n]&&(e(!1,n),pe[n]=!0)}function be(e,t){ye(ge,e,t)}function xe(e,t){ye(_e,e,t)}be.preMessage=he,be.resetWarned=ve,be.noteOnce=xe;function Se(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=new Set;function i(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=r.has(e);if(be(!o,`Warning: There may be circular references`),o)return!1;if(e===t)return!0;if(n&&a>1)return!1;r.add(e);var s=a+1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var c=0;c<e.length;c++)if(!i(e[c],t[c],s))return!1;return!0}if(e&&t&&D(e)===`object`&&D(t)===`object`){var l=Object.keys(e);return l.length===Object.keys(t).length&&l.every(function(n){return i(e[n],t[n],s)})}return!1}return i(e,t)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(null,arguments)}function Ce(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function we(e,t){if(e==null)return{};var n,r,i=Ce(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Te=t(o());function B(e,t,n){return(e-t)/(n-t)}function V(e,t,n,r){var i=B(t,n,r),a={};switch(e){case`rtl`:a.right=`${i*100}%`,a.transform=`translateX(50%)`;break;case`btt`:a.bottom=`${i*100}%`,a.transform=`translateY(50%)`;break;case`ttb`:a.top=`${i*100}%`,a.transform=`translateY(-50%)`;break;default:a.left=`${i*100}%`,a.transform=`translateX(-50%)`}return a}function H(e,t){return Array.isArray(e)?e[t]:e}var U={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=U.F1&&t<=U.F12)return!1;switch(t){case U.ALT:case U.CAPS_LOCK:case U.CONTEXT_MENU:case U.CTRL:case U.DOWN:case U.END:case U.ESC:case U.HOME:case U.INSERT:case U.LEFT:case U.MAC_FF_META:case U.META:case U.NUMLOCK:case U.NUM_CENTER:case U.PAGE_DOWN:case U.PAGE_UP:case U.PAUSE:case U.PRINT_SCREEN:case U.RIGHT:case U.SHIFT:case U.UP:case U.WIN_KEY:case U.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=U.ZERO&&e<=U.NINE||e>=U.NUM_ZERO&&e<=U.NUM_MULTIPLY||e>=U.A&&e<=U.Z||window.navigator.userAgent.indexOf(`WebKit`)!==-1&&e===0)return!0;switch(e){case U.SPACE:case U.QUESTION_MARK:case U.NUM_PLUS:case U.NUM_MINUS:case U.NUM_PERIOD:case U.NUM_DIVISION:case U.SEMICOLON:case U.DASH:case U.EQUALS:case U.COMMA:case U.PERIOD:case U.SLASH:case U.APOSTROPHE:case U.SINGLE_QUOTE:case U.OPEN_SQUARE_BRACKET:case U.BACKSLASH:case U.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},W=u.createContext({min:0,max:0,direction:`ltr`,step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),G=u.createContext({}),Ee=[`prefixCls`,`value`,`valueIndex`,`onStartMove`,`onDelete`,`style`,`render`,`dragging`,`draggingDelete`,`onOffsetChange`,`onChangeComplete`,`onFocus`,`onMouseEnter`],De=u.forwardRef(function(e,t){var n=e.prefixCls,r=e.value,i=e.valueIndex,a=e.onStartMove,o=e.onDelete,s=e.style,c=e.render,l=e.dragging,d=e.draggingDelete,f=e.onOffsetChange,p=e.onChangeComplete,m=e.onFocus,h=e.onMouseEnter,g=we(e,Ee),_=u.useContext(W),v=_.min,y=_.max,b=_.direction,x=_.disabled,S=_.keyboard,C=_.range,w=_.tabIndex,T=_.ariaLabelForHandle,E=_.ariaLabelledByForHandle,D=_.ariaRequired,O=_.ariaValueTextFormatterForHandle,k=_.styles,j=_.classNames,N=`${n}-handle`,ee=function(e){x||a(e,i)},te=function(e){m?.(e,i)},ne=function(e){h(e,i)},P=function(e){if(!x&&S){var t=null;switch(e.which||e.keyCode){case U.LEFT:t=b===`ltr`||b===`btt`?-1:1;break;case U.RIGHT:t=b===`ltr`||b===`btt`?1:-1;break;case U.UP:t=b===`ttb`?-1:1;break;case U.DOWN:t=b===`ttb`?1:-1;break;case U.HOME:t=`min`;break;case U.END:t=`max`;break;case U.PAGE_UP:t=2;break;case U.PAGE_DOWN:t=-2;break;case U.BACKSPACE:case U.DELETE:o?.(i)}t!==null&&(e.preventDefault(),f(t,i))}},F=function(e){switch(e.which||e.keyCode){case U.LEFT:case U.RIGHT:case U.UP:case U.DOWN:case U.HOME:case U.END:case U.PAGE_UP:case U.PAGE_DOWN:p?.()}},re=V(b,r,v,y),I={};i!==null&&(I={tabIndex:x?null:H(w,i),role:`slider`,"aria-valuemin":v,"aria-valuemax":y,"aria-valuenow":r,"aria-disabled":x,"aria-label":H(T,i),"aria-labelledby":H(E,i),"aria-required":H(D,i),"aria-valuetext":H(O,i)?.(r),"aria-orientation":b===`ltr`||b===`rtl`?`horizontal`:`vertical`,onMouseDown:ee,onTouchStart:ee,onFocus:te,onMouseEnter:ne,onKeyDown:P,onKeyUp:F});var ie=u.createElement(`div`,z({ref:t,className:(0,R.default)(N,A(A(A({},`${N}-${i+1}`,i!==null&&C),`${N}-dragging`,l),`${N}-dragging-delete`,d),j.handle),style:M(M(M({},re),s),k.handle)},I,g));return c&&(ie=c(ie,{index:i,prefixCls:n,value:r,dragging:l,draggingDelete:d})),ie}),Oe=[`prefixCls`,`style`,`onStartMove`,`onOffsetChange`,`values`,`handleRender`,`activeHandleRender`,`draggingIndex`,`draggingDelete`,`onFocus`],ke=u.forwardRef(function(e,t){var n=e.prefixCls,r=e.style,i=e.onStartMove,a=e.onOffsetChange,o=e.values,s=e.handleRender,c=e.activeHandleRender,l=e.draggingIndex,d=e.draggingDelete,f=e.onFocus,p=we(e,Oe),m=u.useRef({}),h=L(u.useState(!1),2),g=h[0],_=h[1],v=L(u.useState(-1),2),y=v[0],b=v[1],x=function(e){b(e),_(!0)},S=function(e,t){x(t),f?.(e)},C=function(e,t){x(t)};u.useImperativeHandle(t,function(){return{focus:function(e){var t;(t=m.current[e])==null||t.focus()},hideHelp:function(){(0,Te.flushSync)(function(){_(!1)})}}});var w=M({prefixCls:n,onStartMove:i,onOffsetChange:a,render:s,onFocus:S,onMouseEnter:C},p);return u.createElement(u.Fragment,null,o.map(function(e,t){var n=l===t;return u.createElement(De,z({ref:function(e){e?m.current[t]=e:delete m.current[t]},dragging:n,draggingDelete:n&&d,style:H(r,t),key:t,value:e,valueIndex:t},w))}),c&&g&&u.createElement(De,z({key:`a11y`},w,{value:o[y],valueIndex:null,dragging:l!==-1,draggingDelete:d,render:c,style:{pointerEvents:`none`},tabIndex:null,"aria-hidden":!0})))}),Ae=function(e){var t=e.prefixCls,n=e.style,r=e.children,i=e.value,a=e.onClick,o=u.useContext(W),s=o.min,c=o.max,l=o.direction,d=o.includedStart,f=o.includedEnd,p=o.included,m=`${t}-text`,h=V(l,i,s,c);return u.createElement(`span`,{className:(0,R.default)(m,A({},`${m}-active`,p&&d<=i&&i<=f)),style:M(M({},h),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){a(i)}},r)},je=function(e){var t=e.prefixCls,n=e.marks,r=e.onClick,i=`${t}-mark`;return n.length?u.createElement(`div`,{className:i},n.map(function(e){var t=e.value,n=e.style,a=e.label;return u.createElement(Ae,{key:t,prefixCls:i,style:n,value:t,onClick:r},a)})):null},K=function(e){var t=e.prefixCls,n=e.value,r=e.style,i=e.activeStyle,a=u.useContext(W),o=a.min,s=a.max,c=a.direction,l=a.included,d=a.includedStart,f=a.includedEnd,p=`${t}-dot`,m=l&&d<=n&&n<=f,h=M(M({},V(c,n,o,s)),typeof r==`function`?r(n):r);return m&&(h=M(M({},h),typeof i==`function`?i(n):i)),u.createElement(`span`,{className:(0,R.default)(p,A({},`${p}-active`,m)),style:h})},Me=function(e){var t=e.prefixCls,n=e.marks,r=e.dots,i=e.style,a=e.activeStyle,o=u.useContext(W),s=o.min,c=o.max,l=o.step,d=u.useMemo(function(){var e=new Set;if(n.forEach(function(t){e.add(t.value)}),r&&l!==null)for(var t=s;t<=c;)e.add(t),t+=l;return Array.from(e)},[s,c,l,r,n]);return u.createElement(`div`,{className:`${t}-step`},d.map(function(e){return u.createElement(K,{prefixCls:t,key:e,value:e,style:i,activeStyle:a})}))},q=function(e){var t=e.prefixCls,n=e.style,r=e.start,i=e.end,a=e.index,o=e.onStartMove,s=e.replaceCls,c=u.useContext(W),l=c.direction,d=c.min,f=c.max,p=c.disabled,m=c.range,h=c.classNames,g=`${t}-track`,_=B(r,d,f),v=B(i,d,f),y=function(e){!p&&o&&o(e,-1)},b={};switch(l){case`rtl`:b.right=`${_*100}%`,b.width=`${v*100-_*100}%`;break;case`btt`:b.bottom=`${_*100}%`,b.height=`${v*100-_*100}%`;break;case`ttb`:b.top=`${_*100}%`,b.height=`${v*100-_*100}%`;break;default:b.left=`${_*100}%`,b.width=`${v*100-_*100}%`}var x=s||(0,R.default)(g,A(A({},`${g}-${a+1}`,a!==null&&m),`${t}-track-draggable`,o),h.track);return u.createElement(`div`,{className:x,style:M(M({},b),n),onMouseDown:y,onTouchStart:y})},Ne=function(e){var t=e.prefixCls,n=e.style,r=e.values,i=e.startPoint,a=e.onStartMove,o=u.useContext(W),s=o.included,c=o.range,l=o.min,d=o.styles,f=o.classNames,p=u.useMemo(function(){if(!c){if(r.length===0)return[];var e=i??l,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],a=0;a<r.length-1;a+=1)n.push({start:r[a],end:r[a+1]});return n},[r,c,i,l]);if(!s)return null;var m=p!=null&&p.length&&(f.tracks||d.tracks)?u.createElement(q,{index:null,prefixCls:t,start:p[0].start,end:p[p.length-1].end,replaceCls:(0,R.default)(f.tracks,`${t}-tracks`),style:d.tracks}):null;return u.createElement(u.Fragment,null,m,p.map(function(e,r){var i=e.start,o=e.end;return u.createElement(q,{index:r,prefixCls:t,style:M(M({},H(n,r)),d.track),start:i,end:o,key:r,onStartMove:a})}))},J=130;function Pe(e){var t=`targetTouches`in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Fe(e,t,n,r,i,a,o,s,c,l,d){var f=L(u.useState(null),2),p=f[0],m=f[1],h=L(u.useState(-1),2),g=h[0],_=h[1],v=L(u.useState(!1),2),y=v[0],b=v[1],x=L(u.useState(n),2),S=x[0],C=x[1],w=L(u.useState(n),2),T=w[0],E=w[1],D=u.useRef(null),O=u.useRef(null),k=u.useRef(null),A=u.useContext(G),j=A.onDragStart,M=A.onDragChange;ce(function(){g===-1&&C(n)},[n,g]),u.useEffect(function(){return function(){document.removeEventListener(`mousemove`,D.current),document.removeEventListener(`mouseup`,O.current),k.current&&(k.current.removeEventListener(`touchmove`,D.current),k.current.removeEventListener(`touchend`,O.current))}},[]);var N=function(e,t,n){t!==void 0&&m(t),C(e);var r=e;n&&(r=e.filter(function(e,t){return t!==g})),o(r),M&&M({rawValues:e,deleteIndex:n?g:-1,draggingIndex:g,draggingValue:t})},ee=ae(function(e,t,n){if(e===-1){var o=T[0],s=T[T.length-1],l=r-o,u=i-s,d=t*(i-r);d=Math.max(d,l),d=Math.min(d,u),d=a(o+d)-o,N(T.map(function(e){return e+d}))}else{var f=(i-r)*t,p=F(S);p[e]=T[e];var m=c(p,f,e,`dist`);N(m.values,m.value,n)}});return[g,p,y,u.useMemo(function(){var e=F(n).sort(function(e,t){return e-t}),t=F(S).sort(function(e,t){return e-t}),r={};t.forEach(function(e){r[e]=(r[e]||0)+1}),e.forEach(function(e){r[e]=(r[e]||0)-1});var i=+!!l;return Object.values(r).reduce(function(e,t){return e+Math.abs(t)},0)<=i?S:n},[n,S,l]),function(r,i,a){r.stopPropagation();var o=a||n,c=o[i];_(i),m(c),E(o),C(o),b(!1);var u=Pe(r),f=u.pageX,p=u.pageY,h=!1;j&&j({rawValues:o,draggingIndex:i,draggingValue:c});var g=function(n){n.preventDefault();var r=Pe(n),a=r.pageX,o=r.pageY,s=a-f,c=o-p,u=e.current.getBoundingClientRect(),m=u.width,g=u.height,_,v;switch(t){case`btt`:_=-c/g,v=s;break;case`ttb`:_=c/g,v=s;break;case`rtl`:_=-s/m,v=c;break;default:_=s/m,v=c}h=l?Math.abs(v)>J&&d<S.length:!1,b(h),ee(i,_,h)},v=function e(t){t.preventDefault(),document.removeEventListener(`mouseup`,e),document.removeEventListener(`mousemove`,g),k.current&&(k.current.removeEventListener(`touchmove`,D.current),k.current.removeEventListener(`touchend`,O.current)),D.current=null,O.current=null,k.current=null,s(h),_(-1),b(!1)};document.addEventListener(`mouseup`,v),document.addEventListener(`mousemove`,g),r.currentTarget.addEventListener(`touchend`,v),r.currentTarget.addEventListener(`touchmove`,g),D.current=g,O.current=v,k.current=r.currentTarget}]}function Ie(e,t,n,r,i,a){var o=u.useCallback(function(n){return Math.max(e,Math.min(t,n))},[e,t]),s=u.useCallback(function(r){if(n!==null){var i=e+Math.round((o(r)-e)/n)*n,a=function(e){return(String(e).split(`.`)[1]||``).length},s=Math.max(a(n),a(t),a(e)),c=Number(i.toFixed(s));return e<=c&&c<=t?c:null}return null},[n,e,t,o]),c=u.useCallback(function(i){var a=o(i),c=r.map(function(e){return e.value});n!==null&&c.push(s(i)),c.push(e,t);var l=c[0],u=t-e;return c.forEach(function(e){var t=Math.abs(a-e);t<=u&&(l=e,u=t)}),l},[e,t,r,n,o,s]),l=function i(a,o,c){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`unit`;if(typeof o==`number`){var u,d=a[c],f=d+o,p=[];r.forEach(function(e){p.push(e.value)}),p.push(e,t),p.push(s(d));var m=o>0?1:-1;l===`unit`?p.push(s(d+m*n)):p.push(s(f)),p=p.filter(function(e){return e!==null}).filter(function(e){return o<0?e<=d:e>=d}),l===`unit`&&(p=p.filter(function(e){return e!==d}));var h=l===`unit`?d:f;u=p[0];var g=Math.abs(u-h);if(p.forEach(function(e){var t=Math.abs(e-h);t<g&&(u=e,g=t)}),u===void 0)return o<0?e:t;if(l===`dist`)return u;if(Math.abs(o)>1){var _=F(a);return _[c]=u,i(_,o-m,c,l)}return u}if(o===`min`)return e;if(o===`max`)return t},d=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`unit`,i=e[n],a=l(e,t,n,r);return{value:a,changed:a!==i}},f=function(e){return a===null&&e===0||typeof a==`number`&&e<a};return[c,function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`unit`,o=e.map(c),s=o[n];if(o[n]=l(o,t,n,r),i===!1){var u=a||0;n>0&&o[n-1]!==s&&(o[n]=Math.max(o[n],o[n-1]+u)),n<o.length-1&&o[n+1]!==s&&(o[n]=Math.min(o[n],o[n+1]-u))}else if(typeof a==`number`||a===null){for(var p=n+1;p<o.length;p+=1)for(var m=!0;f(o[p]-o[p-1])&&m;){var h=d(o,1,p);o[p]=h.value,m=h.changed}for(var g=n;g>0;--g)for(var _=!0;f(o[g]-o[g-1])&&_;){var v=d(o,-1,g-1);o[g-1]=v.value,_=v.changed}for(var y=o.length-1;y>0;--y)for(var b=!0;f(o[y]-o[y-1])&&b;){var x=d(o,-1,y-1);o[y-1]=x.value,b=x.changed}for(var S=0;S<o.length-1;S+=1)for(var C=!0;f(o[S+1]-o[S])&&C;){var w=d(o,1,S+1);o[S+1]=w.value,C=w.changed}}return{value:o[n],values:o}}]}function Le(e){return(0,u.useMemo)(function(){if(e===!0||!e)return[!!e,!1,!1,0];var t=e.editable,n=e.draggableTrack,r=e.minCount,i=e.maxCount;return[!0,t,!t&&n,r||0,i]},[e])}var Re=u.forwardRef(function(e,t){var n=e.prefixCls,r=n===void 0?`rc-slider`:n,i=e.className,a=e.style,o=e.classNames,s=e.styles,c=e.id,l=e.disabled,d=l!==void 0&&l,f=e.keyboard,p=f===void 0||f,m=e.autoFocus,h=e.onFocus,g=e.onBlur,_=e.min,v=_===void 0?0:_,y=e.max,b=y===void 0?100:y,x=e.step,S=x===void 0?1:x,C=e.value,w=e.defaultValue,T=e.range,E=e.count,O=e.onChange,k=e.onBeforeChange,j=e.onAfterChange,N=e.onChangeComplete,ee=e.allowCross,te=ee===void 0||ee,ne=e.pushable,P=ne!==void 0&&ne,re=e.reverse,I=e.vertical,ie=e.included,oe=ie===void 0||ie,se=e.startPoint,ce=e.trackStyle,le=e.handleStyle,ue=e.railStyle,de=e.dotStyle,pe=e.activeDotStyle,me=e.marks,he=e.dots,ge=e.handleRender,_e=e.activeHandleRender,ve=e.track,ye=e.tabIndex,xe=ye===void 0?0:ye,z=e.ariaLabelForHandle,Ce=e.ariaLabelledByForHandle,we=e.ariaRequired,Te=e.ariaValueTextFormatterForHandle,B=u.useRef(null),V=u.useRef(null),H=u.useMemo(function(){return I?re?`ttb`:`btt`:re?`rtl`:`ltr`},[re,I]),U=L(Le(T),5),G=U[0],Ee=U[1],De=U[2],Oe=U[3],Ae=U[4],K=u.useMemo(function(){return isFinite(v)?v:0},[v]),q=u.useMemo(function(){return isFinite(b)?b:100},[b]),J=u.useMemo(function(){return S!==null&&S<=0?1:S},[S]),Pe=u.useMemo(function(){return typeof P==`boolean`?P?J:!1:P>=0&&P},[P,J]),Re=u.useMemo(function(){return Object.keys(me||{}).map(function(e){var t=me[e],n={value:Number(e)};return t&&D(t)===`object`&&!u.isValidElement(t)&&(`label`in t||`style`in t)?(n.style=t.style,n.label=t.label):n.label=t,n}).filter(function(e){var t=e.label;return t||typeof t==`number`}).sort(function(e,t){return e.value-t.value})},[me]),ze=L(Ie(K,q,J,Re,te,Pe),2),Be=ze[0],Ve=ze[1],He=L(fe(w,{value:C}),2),Y=He[0],Ue=He[1],X=u.useMemo(function(){var e=Y==null?[]:Array.isArray(Y)?Y:[Y],t=L(e,1)[0],n=Y===null?[]:[t===void 0?K:t];if(G){if(n=F(e),E||Y===void 0){var r=E>=0?E+1:2;for(n=n.slice(0,r);n.length<r;)n.push(n[n.length-1]??K)}n.sort(function(e,t){return e-t})}return n.forEach(function(e,t){n[t]=Be(e)}),n},[Y,G,K,E,Be]),Z=function(e){return G?e:e[0]},We=ae(function(e){var t=F(e).sort(function(e,t){return e-t});O&&!Se(t,X,!0)&&O(Z(t)),Ue(t)}),Ge=ae(function(e){e&&B.current.hideHelp();var t=Z(X);j?.(t),be(!j,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),N?.(t)}),Ke=function(e){if(!(d||!Ee||X.length<=Oe)){var t=F(X);t.splice(e,1),k?.(Z(t)),We(t);var n=Math.max(0,e-1);B.current.hideHelp(),B.current.focus(n)}},Q=L(Fe(V,H,X,K,q,Be,We,Ge,Ve,Ee,Oe),5),qe=Q[0],Je=Q[1],Ye=Q[2],Xe=Q[3],Ze=Q[4],Qe=function(e,t){if(!d){var n=F(X),r=0,i=0,a=q-K;X.forEach(function(t,n){var o=Math.abs(e-t);o<=a&&(a=o,r=n),t<e&&(i=n)});var o=r;Ee&&a!==0&&(!Ae||X.length<Ae)?(n.splice(i+1,0,e),o=i+1):n[r]=e,G&&!X.length&&E===void 0&&n.push(e);var s=Z(n);if(k?.(s),We(n),t){var c,l;(c=document.activeElement)==null||(l=c.blur)==null||l.call(c),B.current.focus(o),Ze(t,o,n)}else j?.(s),be(!j,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),N?.(s)}},$e=function(e){e.preventDefault();var t=V.current.getBoundingClientRect(),n=t.width,r=t.height,i=t.left,a=t.top,o=t.bottom,s=t.right,c=e.clientX,l=e.clientY,u;switch(H){case`btt`:u=(o-l)/r;break;case`ttb`:u=(l-a)/r;break;case`rtl`:u=(s-c)/n;break;default:u=(c-i)/n}Qe(Be(K+u*(q-K)),e)},et=L(u.useState(null),2),tt=et[0],nt=et[1],rt=function(e,t){if(!d){var n=Ve(X,e,t);k?.(Z(X)),We(n.values),nt(n.value)}};u.useEffect(function(){if(tt!==null){var e=X.indexOf(tt);e>=0&&B.current.focus(e)}nt(null)},[tt]);var it=u.useMemo(function(){return De&&J===null?!1:De},[De,J]),at=ae(function(e,t){Ze(e,t),k?.(Z(X))}),ot=qe!==-1;u.useEffect(function(){if(!ot){var e=X.lastIndexOf(Je);B.current.focus(e)}},[ot]);var $=u.useMemo(function(){return F(Xe).sort(function(e,t){return e-t})},[Xe]),st=L(u.useMemo(function(){return G?[$[0],$[$.length-1]]:[K,$[0]]},[$,G,K]),2),ct=st[0],lt=st[1];u.useImperativeHandle(t,function(){return{focus:function(){B.current.focus(0)},blur:function(){var e,t=document.activeElement;(e=V.current)!=null&&e.contains(t)&&t?.blur()}}}),u.useEffect(function(){m&&B.current.focus(0)},[]);var ut=u.useMemo(function(){return{min:K,max:q,direction:H,disabled:d,keyboard:p,step:J,included:oe,includedStart:ct,includedEnd:lt,range:G,tabIndex:xe,ariaLabelForHandle:z,ariaLabelledByForHandle:Ce,ariaRequired:we,ariaValueTextFormatterForHandle:Te,styles:s||{},classNames:o||{}}},[K,q,H,d,p,J,oe,ct,lt,G,xe,z,Ce,we,Te,s,o]);return u.createElement(W.Provider,{value:ut},u.createElement(`div`,{ref:V,className:(0,R.default)(r,i,A(A(A(A({},`${r}-disabled`,d),`${r}-vertical`,I),`${r}-horizontal`,!I),`${r}-with-marks`,Re.length)),style:a,onMouseDown:$e,id:c},u.createElement(`div`,{className:(0,R.default)(`${r}-rail`,o?.rail),style:M(M({},ue),s?.rail)}),ve!==!1&&u.createElement(Ne,{prefixCls:r,style:ce,values:X,startPoint:se,onStartMove:it?at:void 0}),u.createElement(Me,{prefixCls:r,marks:Re,dots:he,style:de,activeStyle:pe}),u.createElement(ke,{ref:B,prefixCls:r,style:le,values:Xe,draggingIndex:qe,draggingDelete:Ye,onStartMove:at,onOffsetChange:rt,onFocus:h,onBlur:g,handleRender:ge,activeHandleRender:_e,onChangeComplete:Ge,onDelete:Ee?Ke:void 0}),u.createElement(je,{prefixCls:r,marks:Re,onClick:Qe})))}),ze=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  direction: ltr;
`,Be=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  font-size: var(--font-body-md);
  color: #4b5563;
  font-weight: 500;
`,Ve=a.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  font-size: var(--font-body-md);
  color: #9ca3af;
`,He=a(Re)`
  margin: 8px 4px;
  width: calc(100% - 8px);

  .rc-slider-rail {
    background-color: #e5e7eb;
    height: 4px;
    border-radius: 4px;
  }
  .rc-slider-track {
    background-color: #374151;
    height: 4px;
    border-radius: 4px;
  }
  .rc-slider-handle {
    background-color: #ffffff;
    border: 2px solid #374151;
    width: 16px;
    height: 16px;
    margin-top: -6px;
    opacity: 1;
    border-radius: 50%;
    box-shadow: none;
    transition: all 0.2s ease;
  }
  .rc-slider-handle:hover, .rc-slider-handle:active {
    border-color: #000000;
    transform: scale(1.05);
  }
`,Y=({min:e=0,max:t=5e6,step:n=1e5,value:r,onChange:i})=>{let a=e=>e.toLocaleString();return(0,d.jsxs)(ze,{children:[(0,d.jsxs)(Be,{children:[(0,d.jsxs)(`span`,{children:[a(r[0]),` تومان`]}),(0,d.jsx)(`span`,{children:`تا`}),(0,d.jsxs)(`span`,{children:[a(r[1]),` تومان`]})]}),(0,d.jsx)(He,{range:!0,min:e,max:t,step:n,value:r,onChange:i}),(0,d.jsxs)(Ve,{children:[(0,d.jsx)(`span`,{children:a(e)}),(0,d.jsx)(`span`,{children:a(t)})]})]})},Ue=()=>(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`path`,{fill:`#000306`,d:`M22 7.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75M6 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75`}),(0,d.jsx)(`path`,{fill:`#000306`,d:`M10 10.75A4.26 4.26 0 0 1 5.75 6.5 4.26 4.26 0 0 1 10 2.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 10 10.75m0-7c-1.52 0-2.75 1.23-2.75 2.75S8.48 9.25 10 9.25s2.75-1.23 2.75-2.75S11.52 3.75 10 3.75M22 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M8 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75`}),(0,d.jsx)(`path`,{fill:`#000306`,d:`M14 21.75a4.26 4.26 0 0 1-4.25-4.25A4.26 4.26 0 0 1 14 13.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 14 21.75m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75`})]}),X=a.div`
  width: 100%;
  max-width: 260px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  position: sticky;
  top: 16px;
  height: fit-content;

  @media (max-width: 1024px) {
    display: ${({$isOpen:e})=>e?`block`:`none`};
    position: fixed;
    top: 0;
    right: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: 999;
    padding: 24px 20px;
    border-radius: 0;
    border: none;
    overflow-y: auto;
    background: var(--color-base-background, #ffffff);
    animation: slideIn 0.3s ease;

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`,Z=a.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({$isOpen:e})=>e?`block`:`none`};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`,We=a.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    font-size: var(--font-body-xxl);
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;
  }
`,Ge=a.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 1024px) {
    display: block;
    width: 36px;
    height: 36px;
    font-size: 24px;
    color: #374151;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`,Ke=a.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,Q=a.span`
  display: block;
  font-size: var(--font-body-large);
  font-weight: 500;
  color: #374151;
  margin-bottom: 12px;
`,qe=a.button`
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-base-primary);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Je=a.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ye=a.button`
  width: 100%;
  padding: 12px 15px;
  background-color: var(--color-error-800);
  color: var(--color-base-background);
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: var(--font-body-md);
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 24px;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Xe=({onFilterChange:e})=>{let t=[`#000000`,`#FFFFFF`,`#E74C3C`,`#3498DB`,`#2ECC71`,`#F1C40F`],n=[`XS`,`S`,`M`,`L`,`XL`,`2XL`],[r,i]=(0,u.useState)({inStock:!1,hasDiscount:!1,priceRange:[0,5e6],selectedColors:[],selectedSizes:[]}),a=()=>{let t={inStock:!1,hasDiscount:!1,priceRange:[0,5e6],selectedColors:[],selectedSizes:[]};i(t),e&&e(t)},o=!r.inStock&&!r.hasDiscount&&r.selectedColors.length===0&&r.selectedSizes.length===0,[s,c]=(0,u.useState)(!1);(0,u.useEffect)(()=>(s?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[s]);let l=(t,n)=>{let a={...r,[t]:n};i(a),e&&e(a)},f=(e,t)=>{let n=r[e],i=n.includes(t)?n.filter(e=>e!==t):[...n,t];l(e,i)},p=()=>{let e=0;return r.inStock&&e++,r.hasDiscount&&e++,e+=r.selectedColors.length,e+=r.selectedSizes.length,e},m=()=>c(!0),h=()=>c(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(qe,{onClick:m,children:[(0,d.jsx)(Ue,{}),p()>0&&(0,d.jsx)(Je,{children:p()})]}),(0,d.jsx)(Z,{$isOpen:s,onClick:h}),(0,d.jsxs)(X,{$isOpen:s,children:[(0,d.jsxs)(We,{children:[`فیلترها`,(0,d.jsx)(Ge,{onClick:h,children:`✕`})]}),(0,d.jsxs)(Ke,{children:[(0,d.jsx)(Ye,{onClick:a,disabled:o,children:`حذف همه فیلتر ها`}),(0,d.jsx)(b,{label:`محصولات موجود`,isActive:r.inStock,onToggle:()=>l(`inStock`,!r.inStock)}),(0,d.jsx)(b,{label:`محصولات تخفیف‌دار`,isActive:r.hasDiscount,onToggle:()=>l(`hasDiscount`,!r.hasDiscount)})]}),(0,d.jsxs)(Ke,{children:[(0,d.jsx)(Q,{children:`قیمت`}),(0,d.jsx)(Y,{min:0,max:5e6,step:1e5,value:r.priceRange,onChange:e=>l(`priceRange`,e)})]}),(0,d.jsxs)(Ke,{children:[(0,d.jsx)(Q,{children:`رنگ`}),(0,d.jsx)(C,{colors:t,selectedColors:r.selectedColors,onColorSelect:e=>f(`selectedColors`,e)})]}),(0,d.jsxs)(Ke,{children:[(0,d.jsx)(Q,{children:`سایز`}),(0,d.jsx)(E,{sizes:n,selectedSizes:r.selectedSizes,onSizeSelect:e=>f(`selectedSizes`,e)})]})]})]})},Ze=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    max-width: 400px;
    margin: 0 auto;
  }
`,Qe=({products:e=[]})=>!e||e.length===0?(0,d.jsx)(`div`,{style:{padding:`40px`,textAlign:`center`,color:`#6b7280`},children:`محصولی یافت نشد.`}):(0,d.jsx)(Ze,{children:e.map(e=>(0,d.jsx)(l,{image:e.image,title:e.title,price:e.price,originalPrice:e.originalPrice,rating:e.rating,colors:e.colors,sizes:e.sizes},e.id))}),$e=a.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
    margin-right: 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 2px;
  }
`,et=a.div`
  padding: 6px 16px;
  font-size: var(--font-size-large);
  font-weight: ${({$isActive:e})=>e?`900`:`600`};
  color: ${({$isActive:e})=>e?`var(--color-base-primary)`:`black`};
  border-bottom: 3px solid ${({$isActive:e})=>e?`var(--color-base-primary)`:`transparent`};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--color-base-secondary);
  }

  @media (max-width: 1024px) {
    padding: 5px 14px;
    border-bottom-width: 2px;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
    border-bottom-width: 2px;
  }

  /* ✅ مخفی کردن تب‌ها در موبایل */
  @media (max-width: 480px) {
    display: none;
  }
`,tt=a.div`
  display: none;
  width: 100%;
  position: relative;

  @media (max-width: 480px) {
    display: block;
  }
`,nt=a.select`
  width: 100%;
  padding: 10px 14px;
  font-size: var(--font-body-large);
  font-weight: 600;
  color: var(--color-neutral-800);
  background-color: var(--color-base-background);
  border: 2px solid var(--color-neutral-300);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 36px;

  &:focus {
    border-color: var(--color-base-primary);
    
  }
   option {
    padding: 12px 16px;
    font-size: var(--font-body-md);
    font-weight: 500;
    color: var(--color-neutral-900);
    background-color: var(--color-base-background);
    border: none;
    outline: none;
  }

  option:hover {
    background-color: var(--color-base-primary) !important;
    color: var(--color-base-background) !important;
  }

  option:checked {
    background-color: var(--color-base-primary);
    color: var(--color-base-background);
    font-weight: 700;
  }
`,rt=({onSortChange:e})=>{let t=[{label:`جدیدترین`,value:`newest`},{label:`پرفروش‌ترین`,value:`bestseller`},{label:`گران‌ترین`,value:`most_expensive`},{label:`ارزان‌ترین`,value:`cheapest`}],[n,r]=(0,u.useState)(t[0]),i=n=>{let i=t.find(e=>e.value===n);r(i),e&&e(n)};return(0,d.jsxs)($e,{children:[t.map(e=>(0,d.jsx)(et,{$isActive:n.value===e.value,onClick:()=>i(e.value),children:e.label},e.value)),(0,d.jsx)(tt,{children:(0,d.jsx)(nt,{value:n.value,onChange:n=>{let i=n.target.value,a=t.find(e=>e.value===i);r(a),e&&e(i)},children:t.map(e=>(0,d.jsx)(`option`,{value:e.value,children:e.label},e.value))})})]})},it=a.button`
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-md);
  font-weight: 500;
  border-radius: 8px;
  border: ${({$isActive:e})=>e?`1px solid var(--color-base-secondary)`:`1px solid transparent`};
  background-color: ${({$isActive:e})=>e?`var(--color-base-secondary)`:`transparent`};
  color: ${({$isActive:e})=>e?`var(--color-base-background)`:`#374151`};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({$isActive:e})=>e?`#1f2937`:`#f3f4f6`};
    border-color: ${({$isActive:e})=>e?`#1f2937`:`#e5e7eb`};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      border-color: transparent;
    }
  }
`,at=({number:e,isActive:t,isDisabled:n,onClick:r})=>(0,d.jsx)(it,{$isActive:t,disabled:n,onClick:()=>!n&&r(e),children:e}),ot=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 24px 0 8px 0;
  direction: rtl;
`,$=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #ffffff;
      border-color: #e5e7eb;
    }
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,st=({currentPage:e=1,totalPages:t=10,onPageChange:n})=>{let r=(()=>{let n=[],r=[],i;for(let r=1;r<=t;r++)(r===1||r===t||r>=e-1&&r<=e+1)&&n.push(r);return n.forEach(e=>{i&&(e-i===2?r.push(i+1):e-i!==1&&r.push(`...`)),r.push(e),i=e}),r})();return(0,d.jsxs)(ot,{children:[(0,d.jsx)($,{disabled:e===1,onClick:()=>n(e-1),children:(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,d.jsx)(`polyline`,{points:`9 18 15 12 9 6`})})}),r.map((t,r)=>(0,d.jsx)(u.Fragment,{children:t===`...`?(0,d.jsx)(`span`,{style:{padding:`0 8px`,color:`#9ca3af`,fontSize:`var(--font-body-large)`},children:`...`}):(0,d.jsx)(at,{number:t,isActive:t===e,onClick:n})},r)),(0,d.jsx)($,{disabled:e===t,onClick:()=>n(e+1),children:(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,d.jsx)(`polyline`,{points:`15 18 9 12 15 6`})})})]})},ct=a.div`
  font-size: var(--font-body-large);
  font-weight: 500;
  color: var(--color-neutral-800 ); 
  white-space: nowrap;
`,lt=({count:e})=>(0,d.jsxs)(ct,{children:[e.toLocaleString(),` کالا`]}),ut=a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  direction: rtl;
`,dt=a.div`
  display: flex;
  gap: 24px;
  width: 100%;
`,ft=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,pt=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;
`;function mt(){let[e,t]=(0,u.useState)(1),[n]=(0,u.useState)(9),r=i(),a=decodeURIComponent(r.category),[o,s]=(0,u.useState)(c);(0,u.useEffect)(()=>{if(a){let e=c.filter(e=>e.category===a);s(e),t(1)}else s(c)},[a]);let l=e*n,f=l-n,p=o.slice(f,l),m=Math.ceil(o.length/n);return(0,d.jsxs)(ut,{children:[(0,d.jsx)(g,{items:a?[`خانه`,a]:[`خانه`,`همه محصولات`]}),(0,d.jsxs)(dt,{children:[(0,d.jsx)(Xe,{onFilterChange:e=>{t(1),console.log(`فیلترهای انتخاب شده:`,e);let n=c.filter(e=>!(a&&e.category!==a));e?.minPrice&&(n=n.filter(t=>t.price>=e.minPrice)),e?.maxPrice&&(n=n.filter(t=>t.price<=e.maxPrice)),s(n)}}),(0,d.jsxs)(ft,{children:[(0,d.jsxs)(pt,{children:[(0,d.jsx)(rt,{onSortChange:e=>{t(1),console.log(`مرتب‌سازی بر اساس:`,e);let n=[...o].sort((t,n)=>e===`cheapest`?t.price-n.price:e===`most_expensive`?n.price-t.price:e===`newest`?n.id-t.id:e===`bestseller`?(n.sales||0)-(t.sales||0):0);s(n)}}),(0,d.jsx)(lt,{count:o.length})]}),(0,d.jsx)(Qe,{products:p}),(0,d.jsx)(st,{currentPage:e,totalPages:m,onPageChange:e=>{t(e),window.scrollTo({top:0,behavior:`smooth`})}})]})]})]})}export{mt as default};