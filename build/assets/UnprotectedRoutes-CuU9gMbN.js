import{b as ce,p as o,j as ye,i as xe,k as q,c as r,_ as s,v as F,l as g,w as Ce,m as de,g as je,B as ge,q as z,t as Ie,M as Te,P as Ae,h as Be,Q as Ve,A as S,O as Oe,S as Me,U as G,I as We,V as Xe,T as X,W as Ne,K as He,L as ae,N as De}from"./index-CRDSBET5.js";import{c as Ue,C as be,b as Ke,I as Ge,H as qe}from"./Home-DgfyvolC.js";import{u as Se,a as Ze,S as ne,T as Qe}from"./TextField-DT2u6V0A.js";const Je={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Ye=ce(o.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ea(e){return xe("MuiChip",e)}const l=ye("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),aa=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],oa=e=>{const{classes:a,disabled:i,size:t,color:c,iconColor:f,onDelete:u,clickable:n,variant:m}=e,h={root:["root",m,i&&"disabled",`size${r(t)}`,`color${r(c)}`,n&&"clickable",n&&`clickableColor${r(c)}`,u&&"deletable",u&&`deletableColor${r(c)}`,`${m}${r(c)}`],label:["label",`label${r(t)}`],avatar:["avatar",`avatar${r(t)}`,`avatarColor${r(c)}`],icon:["icon",`icon${r(t)}`,`iconColor${r(f)}`],deleteIcon:["deleteIcon",`deleteIcon${r(t)}`,`deleteIconColor${r(c)}`,`deleteIcon${r(m)}Color${r(c)}`]};return Ie(h,ea,a)},ia=q("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:i}=e,{color:t,iconColor:c,clickable:f,onDelete:u,size:n,variant:m}=i;return[{[`& .${l.avatar}`]:a.avatar},{[`& .${l.avatar}`]:a[`avatar${r(n)}`]},{[`& .${l.avatar}`]:a[`avatarColor${r(t)}`]},{[`& .${l.icon}`]:a.icon},{[`& .${l.icon}`]:a[`icon${r(n)}`]},{[`& .${l.icon}`]:a[`iconColor${r(c)}`]},{[`& .${l.deleteIcon}`]:a.deleteIcon},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(n)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIconColor${r(t)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(m)}Color${r(t)}`]},a.root,a[`size${r(n)}`],a[`color${r(t)}`],f&&a.clickable,f&&t!=="default"&&a[`clickableColor${r(t)})`],u&&a.deletable,u&&t!=="default"&&a[`deletableColor${r(t)}`],a[m],a[`${m}${r(t)}`]]}})(({theme:e,ownerState:a})=>{const i=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return s({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:i,fontSize:e.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${l.icon}`]:s({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&s({color:e.vars?e.vars.palette.Chip.defaultIconColor:i},a.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:s({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:F(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:F(e.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:F(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>s({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>s({},a.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:F(e.palette[a.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:F(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:F(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:F(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),ta=q("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:i}=e,{size:t}=i;return[a.label,a[`label${r(t)}`]]}})(({ownerState:e})=>s({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function he(e){return e.key==="Backspace"||e.key==="Delete"}const la=g.forwardRef(function(a,i){const t=Ce({props:a,name:"MuiChip"}),{avatar:c,className:f,clickable:u,color:n="default",component:m,deleteIcon:h,disabled:x=!1,icon:p,label:V,onClick:w,onDelete:j,onKeyDown:P,onKeyUp:_,size:N="medium",variant:H="filled",tabIndex:y,skipFocusWhenDisabled:L=!1}=t,Z=de(t,aa),R=g.useRef(null),D=je(R,i),E=b=>{b.stopPropagation(),j&&j(b)},Q=b=>{b.currentTarget===b.target&&he(b)&&b.preventDefault(),P&&P(b)},O=b=>{b.currentTarget===b.target&&(j&&he(b)?j(b):b.key==="Escape"&&R.current&&R.current.blur()),_&&_(b)},$=u!==!1&&w?!0:u,J=$||j?ge:m||"div",C=s({},t,{component:J,disabled:x,size:N,color:n,iconColor:g.isValidElement(p)&&p.props.color||n,onDelete:!!j,clickable:$,variant:H}),I=oa(C),M=J===ge?s({component:m||"div",focusVisibleClassName:I.focusVisible},j&&{disableRipple:!0}):{};let T=null;j&&(T=h&&g.isValidElement(h)?g.cloneElement(h,{className:z(h.props.className,I.deleteIcon),onClick:E}):o.jsx(Ye,{className:z(I.deleteIcon),onClick:E}));let Y=null;c&&g.isValidElement(c)&&(Y=g.cloneElement(c,{className:z(I.avatar,c.props.className)}));let ie=null;return p&&g.isValidElement(p)&&(ie=g.cloneElement(p,{className:z(I.icon,p.props.className)})),o.jsxs(ia,s({as:J,className:z(I.root,f),disabled:$&&x?!0:void 0,onClick:w,onKeyDown:Q,onKeyUp:O,ref:D,tabIndex:L&&x?-1:y,ownerState:C},M,Z,{children:[Y||ie,o.jsx(ta,{className:z(I.label),ownerState:C,children:V}),T]}))}),ra=ce(o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),na=ce(o.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function sa(e){return xe("MuiRating",e)}const oe=ye("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),ca=["value"],da=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function pa(e){const a=e.toString().split(".")[1];return a?a.length:0}function se(e,a){if(e==null)return e;const i=Math.round(e/a)*a;return Number(i.toFixed(pa(a)))}const ua=e=>{const{classes:a,size:i,readOnly:t,disabled:c,emptyValueFocused:f,focusVisible:u}=e,n={root:["root",`size${r(i)}`,c&&"disabled",u&&"focusVisible",t&&"readOnly"],label:["label","pristine"],labelEmptyValue:[f&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ie(n,sa,a)},ma=q("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:i}=e;return[{[`& .${oe.visuallyHidden}`]:a.visuallyHidden},a.root,a[`size${r(i.size)}`],i.readOnly&&a.readOnly]}})(({theme:e,ownerState:a})=>s({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${oe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${oe.focusVisible} .${oe.iconActive}`]:{outline:"1px solid #999"},[`& .${oe.visuallyHidden}`]:Je},a.size==="small"&&{fontSize:e.typography.pxToRem(18)},a.size==="large"&&{fontSize:e.typography.pxToRem(30)},a.readOnly&&{pointerEvents:"none"})),Le=q("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},a)=>[a.label,e.emptyValueFocused&&a.labelEmptyValueActive]})(({ownerState:e})=>s({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),ga=q("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,a)=>{const{ownerState:i}=e;return[a.icon,i.iconEmpty&&a.iconEmpty,i.iconFilled&&a.iconFilled,i.iconHover&&a.iconHover,i.iconFocus&&a.iconFocus,i.iconActive&&a.iconActive]}})(({theme:e,ownerState:a})=>s({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},a.iconActive&&{transform:"scale(1.2)"},a.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),ba=q("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Te(e)&&e!=="iconActive",overridesResolver:(e,a)=>{const{iconActive:i}=e;return[a.decimal,i&&a.iconActive]}})(({iconActive:e})=>s({position:"relative"},e&&{transform:"scale(1.2)"}));function ha(e){const a=de(e,ca);return o.jsx("span",s({},a))}function ve(e){const{classes:a,disabled:i,emptyIcon:t,focus:c,getLabelText:f,highlightSelectedOnly:u,hover:n,icon:m,IconContainerComponent:h,isActive:x,itemValue:p,labelProps:V,name:w,onBlur:j,onChange:P,onClick:_,onFocus:N,readOnly:H,ownerState:y,ratingValue:L,ratingValueRounded:Z}=e,R=u?p===L:p<=L,D=p<=n,E=p<=c,Q=p===Z,O=Se(),$=o.jsx(ga,{as:h,value:p,className:z(a.icon,R?a.iconFilled:a.iconEmpty,D&&a.iconHover,E&&a.iconFocus,x&&a.iconActive),ownerState:s({},y,{iconEmpty:!R,iconFilled:R,iconHover:D,iconFocus:E,iconActive:x}),children:t&&!R?t:m});return H?o.jsx("span",s({},V,{children:$})):o.jsxs(g.Fragment,{children:[o.jsxs(Le,s({ownerState:s({},y,{emptyValueFocused:void 0}),htmlFor:O},V,{children:[$,o.jsx("span",{className:a.visuallyHidden,children:f(p)})]})),o.jsx("input",{className:a.visuallyHidden,onFocus:N,onBlur:j,onChange:P,onClick:_,disabled:i,value:p,id:O,type:"radio",name:w,checked:Q})]})}const va=o.jsx(ra,{fontSize:"inherit"}),fa=o.jsx(na,{fontSize:"inherit"});function ya(e){return`${e} Star${e!==1?"s":""}`}const xa=g.forwardRef(function(a,i){const t=Ce({name:"MuiRating",props:a}),{className:c,defaultValue:f=null,disabled:u=!1,emptyIcon:n=fa,emptyLabelText:m="Empty",getLabelText:h=ya,highlightSelectedOnly:x=!1,icon:p=va,IconContainerComponent:V=ha,max:w=5,name:j,onChange:P,onChangeActive:_,onMouseLeave:N,onMouseMove:H,precision:y=1,readOnly:L=!1,size:Z="medium",value:R}=t,D=de(t,da),E=Se(j),[Q,O]=Ze({controlled:R,default:f,name:"Rating"}),$=se(Q,y),J=Ae(),[{hover:C,focus:I},M]=g.useState({hover:-1,focus:-1});let T=$;C!==-1&&(T=C),I!==-1&&(T=I);const{isFocusVisibleRef:Y,onBlur:ie,onFocus:b,ref:$e}=Be(),[ke,le]=g.useState(!1),pe=g.useRef(),Re=je($e,pe,i),Fe=d=>{H&&H(d);const v=pe.current,{right:k,left:te,width:U}=v.getBoundingClientRect();let K;J?K=(k-d.clientX)/U:K=(d.clientX-te)/U;let A=se(w*K+y/2,y);A=Ve(A,y,w),M(W=>W.hover===A&&W.focus===A?W:{hover:A,focus:A}),le(!1),_&&C!==A&&_(d,A)},ze=d=>{N&&N(d);const v=-1;M({hover:v,focus:v}),_&&C!==v&&_(d,v)},ue=d=>{let v=d.target.value===""?null:parseFloat(d.target.value);C!==-1&&(v=C),O(v),P&&P(d,v)},we=d=>{d.clientX===0&&d.clientY===0||(M({hover:-1,focus:-1}),O(null),P&&parseFloat(d.target.value)===$&&P(d,null))},Pe=d=>{b(d),Y.current===!0&&le(!0);const v=parseFloat(d.target.value);M(k=>({hover:k.hover,focus:v}))},_e=d=>{if(C!==-1)return;ie(d),Y.current===!1&&le(!1);const v=-1;M(k=>({hover:k.hover,focus:v}))},[Ee,me]=g.useState(!1),ee=s({},t,{defaultValue:f,disabled:u,emptyIcon:n,emptyLabelText:m,emptyValueFocused:Ee,focusVisible:ke,getLabelText:h,icon:p,IconContainerComponent:V,max:w,precision:y,readOnly:L,size:Z}),B=ua(ee);return o.jsxs(ma,s({ref:Re,onMouseMove:Fe,onMouseLeave:ze,className:z(B.root,c,L&&"MuiRating-readOnly"),ownerState:ee,role:L?"img":null,"aria-label":L?h(T):null},D,{children:[Array.from(new Array(w)).map((d,v)=>{const k=v+1,te={classes:B,disabled:u,emptyIcon:n,focus:I,getLabelText:h,highlightSelectedOnly:x,hover:C,icon:p,IconContainerComponent:V,name:E,onBlur:_e,onChange:ue,onClick:we,onFocus:Pe,ratingValue:T,ratingValueRounded:$,readOnly:L,ownerState:ee},U=k===Math.ceil(T)&&(C!==-1||I!==-1);if(y<1){const K=Array.from(new Array(1/y));return o.jsx(ba,{className:z(B.decimal,U&&B.iconActive),ownerState:ee,iconActive:U,children:K.map((A,W)=>{const re=se(k-1+(W+1)*y,y);return o.jsx(ve,s({},te,{isActive:!1,itemValue:re,labelProps:{style:K.length-1===W?{}:{width:re===T?`${(W+1)*y*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),re)})},k)}return o.jsx(ve,s({},te,{isActive:U,itemValue:k}),k)}),!L&&!u&&o.jsxs(Le,{className:z(B.label,B.labelEmptyValue),ownerState:ee,children:[o.jsx("input",{className:B.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:$==null,onFocus:()=>me(!0),onBlur:()=>me(!1),onChange:ue}),o.jsx("span",{className:B.visuallyHidden,children:m})]})]}))}),Ca=()=>o.jsx(S,{sx:{p:2},children:o.jsx(Oe,{})}),ja=()=>{const{label:e}=Me();return e==="categories"?o.jsx(S,{children:o.jsx(G,{container:!0,children:Ue.map((a,i)=>o.jsx(G,{item:!0,xl:1,lg:2,md:2,sm:4,xs:6,children:o.jsx(S,{sx:{display:"grid",placeItems:"center"},children:o.jsx(be,{src:a.image,label:a.label})})},i))})}):e==="brands"?o.jsx(S,{children:o.jsx(G,{container:!0,children:Ke.map((a,i)=>o.jsx(G,{item:!0,xl:1,lg:2,md:2,sm:4,xs:6,children:o.jsx(S,{sx:{display:"grid",placeItems:"center"},children:o.jsx(be,{src:a.logo,label:a.label})})},i))})}):o.jsx(o.Fragment,{children:"dfgh"})},Ia=(e,a)=>e.length>a?e.slice(0,a)+"...":e,Sa=({data:e})=>o.jsxs(S,{sx:{width:"100%",border:1,borderColor:"secondary.main",borderRadius:2,overflow:"hidden"},children:[o.jsxs(S,{sx:{position:"relative",p:1},children:[o.jsx(Ge,{src:e.images[0],alt:e.title,style:{width:"100%",height:"200px",borderRadius:2}}),o.jsx(We,{"aria-label":"favorite",size:"small",sx:{position:"absolute",top:10,right:10,bgcolor:"white",boxShadow:2},children:o.jsx(Xe,{})}),e.bestSelling&&o.jsx(la,{label:"best Selling",color:"success",size:"small",sx:{borderRadius:"0 0 10px 0",position:"absolute",top:0,left:0}})]}),o.jsxs(S,{sx:{p:2,bgcolor:"secondary.main"},children:[o.jsx(X,{variant:"subtitle1",sx:{fontWeight:500},children:Ia(e.title,40)}),o.jsxs(ne,{direction:"row",spacing:.5,alignItems:"center",children:[o.jsx(xa,{name:"half-rating",value:e.rating,precision:.5,readOnly:!0,size:"small"}),o.jsxs(X,{variant:"body2",sx:{ml:1,color:"#555"},children:["(",e.totalRaters,")"]})]}),o.jsxs(ne,{direction:"row",alignItems:"center",spacing:1,sx:{mt:1},children:[o.jsxs(X,{variant:"h6",color:"textPrimary",children:["₹",e.discountPrice]}),e.discountPercentage!=0&&o.jsxs(o.Fragment,{children:[o.jsxs(X,{variant:"body2",sx:{textDecoration:"line-through",color:"#888"},children:["₹",e.mrp]}),o.jsxs(X,{variant:"body2",color:"success.main",children:[e.discountPercentage,"% off"]})]})]}),e.colors&&o.jsxs(ne,{direction:"row",alignItems:"center",spacing:1,sx:{mt:1},children:[o.jsx(X,{variant:"body2",children:"Colors:"}),e.colors.map(a=>o.jsx(S,{sx:{width:16,height:16,bgcolor:a.code,borderRadius:"50%",border:"1px solid #ddd"}},a.code))]})]})]}),fe=[{id:"p1",title:"boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",description:"boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",price:849,discountPrice:4999,mrp:4490,discountPercentage:81,rating:3.8,totalRaters:206624,colors:[{label:"Black",code:"#000000",image:"https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg"},{label:"Cider Cyan",code:"#00FFFF",image:"https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg"},{label:"Olive Green",code:"#808000",image:"https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg"},{label:"Pure White",code:" #FFFFFF",image:"https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg"},{label:" Thunder Blue",code:"#4E5D73",image:"https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg"}],sizes:["standard"],brands:{id:"b1",label:"Boat",logo:"https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto"},categories:{id:"c1",label:"Earbuds",image:"https://m.media-amazon.com/images/I/614hH1Cot3L.jpg"},images:["https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg","https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg","https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg","https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg","https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg","https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg"],teg:["Boat","earbuds"],features:["Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.","Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience","Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery of your voice via voice call","TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141","ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert"],replacementPolicy:"7 days replacement policy",delivery:0,warranty:1,bestSelling:!1,numberOfOrders:1500,availability:!0,stock:150},{id:"p2",title:"Noise Vibe 2 5W Portable Wireless Bluetooth Speaker with Built-in Mic,15H Playtime,TWS Pairing Support,52mm Driver,BT v5.3 (Wandering Black)",description:"Noise Vibe 2 5W Portable Wireless Bluetooth Speaker with Built-in Mic,15H Playtime,TWS Pairing Support,52mm Driver,BT v5.3 (Wandering Black)",price:1499,discountPrice:1499,mrp:3499,discountPercentage:57,rating:4.1,totalRaters:1851,colors:[{label:"Wandering Black",code:"#000000",image:"https://m.media-amazon.com/images/I/713qhVzJF-L._SX679_.jpg"},{label:"Stone Grey",code:"#928E85",image:"https://m.media-amazon.com/images/I/81cOiHmMWaL._SX679_.jpg"},{label:"Steely Grey",code:"#71797E",image:"https://m.media-amazon.com/images/I/819ncSF8QqL._SX679_.jpg"},{label:"Rustic Olive",code:"#438759",image:"https://m.media-amazon.com/images/I/81W0g1G3n5L._SX679_.jpg"}],sizes:["standard"],brands:{id:"b2",label:"Noise",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCgb-2-GKZUFcLen8J9JkKrk-841xZ6ne0w&s"},categories:{id:"c2",label:"Speakers",image:"https://www.jiomart.com/images/product/original/rvluiwnjhu/ptron-funk-40-watt-bluetooth-wireless-speaker-with-mic-for-karaoke-black-product-images-orvluiwnjhu-p607218852-0-202401061211.jpg?im=Resize=(1000,1000)"},images:["https://m.media-amazon.com/images/I/713qhVzJF-L._SX679_.jpg","https://m.media-amazon.com/images/I/71PeZXyccZL._SX679_.jpg","https://m.media-amazon.com/images/I/71y2T+3DVRL._SX679_.jpg","https://m.media-amazon.com/images/I/71Bik0SWWXL._SX679_.jpg","https://m.media-amazon.com/images/I/81eUEtiyZWL._SX679_.jpg"],teg:["Noise","Speakers"," trimmer"],features:["Up to 15 hours of playtime: Enjoy up to 15 hours of continuous playtime for uninterrupted entertainment.","5W Power Output: Experience powerful sound with 5W output that fills your space with rich audio.","52mm driver I Tru Bass: Immerse yourself in deep, resonant bass with the 52mm driver powered by Tru Bass","TWS Pairing Support: Seamlessly connect two speakers for stereo sound with TWS pairing support"],replacementPolicy:"7 days Service Centre Replacement",delivery:0,warranty:1,bestSelling:!1,numberOfOrders:1500,availability:!0,stock:150},{id:"p1",title:"boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",description:"boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",price:849,discountPrice:4999,mrp:4490,discountPercentage:81,rating:3.8,totalRaters:206624,colors:[{label:"Black",code:"#000000",image:"https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg"},{label:"Cider Cyan",code:"#00FFFF",image:"https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg"},{label:"Olive Green",code:"#808000",image:"https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg"},{label:"Pure White",code:" #FFFFFF",image:"https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg"},{label:" Thunder Blue",code:"#4E5D73",image:"https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg"}],sizes:["standard"],brands:{id:"b1",label:"Boat",logo:"https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto"},categories:{id:"c1",label:"Earbuds",image:"https://m.media-amazon.com/images/I/614hH1Cot3L.jpg"},images:["https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg","https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg","https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg","https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg","https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg","https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg"],teg:["bosco","phone"],features:["Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.","Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience","Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery of your voice via voice call","TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141","ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert"],replacementPolicy:"7 days replacement policy",delivery:0,warranty:1,bestSelling:!1,numberOfOrders:1500,availability:!0,stock:150}],La=()=>o.jsx(S,{sx:{border:1,height:"100%"},children:"Filters"}),$a=()=>{const e=Ne(),{label:a=[]}=e.state||{},[i,t]=g.useState(""),[c,f]=g.useState([]),u=a.map(n=>n.trim().toLowerCase());return g.useEffect(()=>{const m=(u.length>0?fe.filter(h=>h.teg.some(x=>u.some(p=>x.trim().toLowerCase().includes(p)||p.includes(x.trim().toLowerCase())))):fe).filter(h=>h.teg.some(x=>x.toLowerCase().includes(i.toLowerCase())));f(m)},[u,i]),o.jsxs(S,{sx:{display:"flex",flexDirection:"column",gap:2},children:[o.jsx(Qe,{label:"Search Products",variant:"outlined",value:i,onChange:n=>t(n.target.value),sx:{width:"300px",mb:2}}),o.jsxs(S,{children:[o.jsx(X,{variant:"h5",children:a.join(", ")}),o.jsx(La,{})]}),o.jsx(G,{container:!0,children:c.map((n,m)=>o.jsx(G,{item:!0,lg:2,md:4,sm:6,xs:6,sx:{p:1},children:o.jsx(Sa,{data:n})},m))})]})},za=()=>o.jsx(He,{children:o.jsxs(ae,{path:"/",element:o.jsx(Ca,{}),children:[o.jsx(ae,{path:"/",element:o.jsx(qe,{})}),o.jsx(ae,{path:"/display/:label",element:o.jsx(ja,{})}),o.jsx(ae,{path:"/product",element:o.jsx($a,{})}),o.jsx(ae,{path:"*",element:o.jsx(De,{to:"/",replace:!0})})]})});export{za as default};