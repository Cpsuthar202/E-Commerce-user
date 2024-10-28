import{aa as q,m as T,ab as z,_ as u,ac as U,ad as H,ae as J,af as K,ag as Q,l as y,ah as X,ai as M,aj as I,ak as Y,a0 as Z,al as ee,am as te,p as se,q as oe,t as ne,i as re,an as $,k as ae,w as le}from"./index-CHmhatUY.js";const ie=["ownerState"],ce=["variants"],ue=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function fe(e){return Object.keys(e).length===0}function pe(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const de=U(),me=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function V({defaultTheme:e,theme:t,themeId:s}){return fe(t)?e:t[s]||t}function he(e){return e?(t,s)=>s[e]:null}function F(e,t){let{ownerState:s}=t,n=T(t,ie);const r=typeof e=="function"?e(u({ownerState:s},n)):e;if(Array.isArray(r))return r.flatMap(l=>F(l,u({ownerState:s},n)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:l=[]}=r;let f=T(r,ce);return l.forEach(o=>{let a=!0;typeof o.props=="function"?a=o.props(u({ownerState:s},n,s)):Object.keys(o.props).forEach(p=>{(s==null?void 0:s[p])!==o.props[p]&&n[p]!==o.props[p]&&(a=!1)}),a&&(Array.isArray(f)||(f=[f]),f.push(typeof o.style=="function"?o.style(u({ownerState:s},n,s)):o.style))}),f}return r}function ye(e={}){const{themeId:t,defaultTheme:s=de,rootShouldForwardProp:n=D,slotShouldForwardProp:r=D}=e,l=c=>H(u({},c,{theme:V(u({},c,{defaultTheme:s,themeId:t}))}));return l.__mui_systemSx=!0,(c,f={})=>{q(c,i=>i.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:o,slot:a,skipVariantsResolver:p,skipSx:k,overridesResolver:v=he(me(a))}=f,w=T(f,ue),O=p!==void 0?p:a&&a!=="Root"&&a!=="root"||!1,R=k||!1;let C,S=D;a==="Root"||a==="root"?S=n:a?S=r:pe(c)&&(S=void 0);const x=z(c,u({shouldForwardProp:S,label:C},w)),_=i=>typeof i=="function"&&i.__emotion_real!==i||J(i)?m=>F(i,u({},m,{theme:V({theme:m.theme,defaultTheme:s,themeId:t})})):i,b=(i,...m)=>{let A=_(i);const g=m?m.map(_):[];o&&v&&g.push(h=>{const d=V(u({},h,{defaultTheme:s,themeId:t}));if(!d.components||!d.components[o]||!d.components[o].styleOverrides)return null;const P=d.components[o].styleOverrides,j={};return Object.entries(P).forEach(([L,W])=>{j[L]=F(W,u({},h,{theme:d}))}),v(h,j)}),o&&!O&&g.push(h=>{var d;const P=V(u({},h,{defaultTheme:s,themeId:t})),j=P==null||(d=P.components)==null||(d=d[o])==null?void 0:d.variants;return F({variants:j},u({},h,{theme:P}))}),R||g.push(l);const E=g.length-m.length;if(Array.isArray(i)&&E>0){const h=new Array(E).fill("");A=[...i,...h],A.raw=[...i.raw,...h]}const N=x(A,...g);return c.muiName&&(N.muiName=c.muiName),N};return x.withConfig&&(b.withConfig=x.withConfig),b}}const ve=ye();function Se(e){const{theme:t,name:s,props:n}=e;return!t||!t.components||!t.components[s]||!t.components[s].defaultProps?n:K(t.components[s].defaultProps,n)}function ke({props:e,name:t,defaultTheme:s,themeId:n}){let r=Q(s);return n&&(r=r[n]||r),Se({theme:r,name:t,props:e})}let B=0;function xe(e){const[t,s]=y.useState(e),n=e||t;return y.useEffect(()=>{t==null&&(B+=1,s(`mui-${B}`))},[t]),n}const G=X.useId;function Te(e){if(G!==void 0){const t=G();return e??t}return xe(e)}function we({controlled:e,default:t,name:s,state:n="value"}){const{current:r}=y.useRef(e!==void 0),[l,c]=y.useState(t),f=r?e:l,o=y.useCallback(a=>{r||c(a)},[]);return[f,o]}const ge=["component","direction","spacing","divider","children","className","useFlexGap"],Pe=U(),Re=ve("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Ce(e){return ke({props:e,name:"MuiStack",defaultTheme:Pe})}function _e(e,t){const s=y.Children.toArray(e).filter(Boolean);return s.reduce((n,r,l)=>(n.push(r),l<s.length-1&&n.push(y.cloneElement(t,{key:`separator-${l}`})),n),[])}const be=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],je=({ownerState:e,theme:t})=>{let s=u({display:"flex",flexDirection:"column"},M({theme:t},I({values:e.direction,breakpoints:t.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=Y(t),r=Object.keys(t.breakpoints.values).reduce((o,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(o[a]=!0),o),{}),l=I({values:e.direction,base:r}),c=I({values:e.spacing,base:r});typeof l=="object"&&Object.keys(l).forEach((o,a,p)=>{if(!l[o]){const v=a>0?l[p[a-1]]:"column";l[o]=v}}),s=Z(s,M({theme:t},c,(o,a)=>e.useFlexGap?{gap:$(n,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${be(a?l[a]:e.direction)}`]:$(n,o)}}))}return s=ee(t.breakpoints,s),s};function Ve(e={}){const{createStyledComponent:t=Re,useThemeProps:s=Ce,componentName:n="MuiStack"}=e,r=()=>ne({root:["root"]},o=>re(n,o),{}),l=t(je);return y.forwardRef(function(o,a){const p=s(o),k=te(p),{component:v="div",direction:w="column",spacing:O=0,divider:R,children:C,className:S,useFlexGap:x=!1}=k,_=T(k,ge),b={direction:w,spacing:O,useFlexGap:x},i=r();return se.jsx(l,u({as:v,ownerState:b,ref:a,className:oe(i.root,S)},_,{children:R?_e(C,R):C}))})}const Oe=Ve({createStyledComponent:ae("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>le({props:e,name:"MuiStack"})});export{Oe as S,we as a,Se as g,Te as u};
