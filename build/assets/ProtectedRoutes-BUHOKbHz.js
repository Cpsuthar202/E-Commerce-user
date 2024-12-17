import{m as se,n as ie,o as W,_ as j,r as x,p as le,q as ze,t as Ne,v as de,w as Be,x as Me,y as Xe,j as e,z as J,A as ce,C as je,P as $e,D as qe,E as Oe,F as ge,u as pe,c as Ge,B as p,O as we,T as o,G as I,f as $,S as R,g as k,H as He,J as Ve,h as Ce,R as Ue,l as A,N as ye}from"./index-Clr7e2zp.js";import{u as Ye,p as Je,P as Ke,l as oe,C as O,A as Qe,t as Ae,G as Ze,I as et,R as tt,a as _e,H as at}from"./Home-CTW_CzIv.js";import{D as _}from"./Divider-rE9Qtxka.js";import{T as L,F as rt,C as ot,P as fe,a as ve}from"./PasswordField-DqvMxuZt.js";function nt(t){return se("MuiCollapse",t)}ie("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const st=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],it=t=>{const{orientation:a,classes:r}=t,l={root:["root",`${a}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${a}`],wrapperInner:["wrapperInner",`${a}`]};return ce(l,nt,r)},lt=W("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.orientation],r.state==="entered"&&a.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&a.hidden]}})(({theme:t,ownerState:a})=>j({height:0,overflow:"hidden",transition:t.transitions.create("height")},a.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},a.state==="entered"&&j({height:"auto",overflow:"visible"},a.orientation==="horizontal"&&{width:"auto"}),a.state==="exited"&&!a.in&&a.collapsedSize==="0px"&&{visibility:"hidden"})),dt=W("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,a)=>a.wrapper})(({ownerState:t})=>j({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),ct=W("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,a)=>a.wrapperInner})(({ownerState:t})=>j({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),Se=x.forwardRef(function(a,r){const l=le({props:a,name:"MuiCollapse"}),{addEndListener:m,children:i,className:h,collapsedSize:n="0px",component:d,easing:s,in:c,onEnter:b,onEntered:v,onEntering:S,onExit:g,onExited:y,onExiting:w,orientation:f="vertical",style:z,timeout:P=ze.standard,TransitionComponent:G=Ne}=l,me=de(l,st),N=j({},l,{orientation:f,collapsedSize:n}),D=it(N),H=Be(),ue=Me(),E=x.useRef(null),V=x.useRef(),B=typeof n=="number"?`${n}px`:n,F=f==="horizontal",U=F?"width":"height",K=x.useRef(null),Ie=Xe(r,K),M=u=>C=>{if(u){const T=K.current;C===void 0?u(T):u(T,C)}},he=()=>E.current?E.current[F?"clientWidth":"clientHeight"]:0,ke=M((u,C)=>{E.current&&F&&(E.current.style.position="absolute"),u.style[U]=B,b&&b(u,C)}),De=M((u,C)=>{const T=he();E.current&&F&&(E.current.style.position="");const{duration:Y,easing:Q}=je({style:z,timeout:P,easing:s},{mode:"enter"});if(P==="auto"){const be=H.transitions.getAutoHeightDuration(T);u.style.transitionDuration=`${be}ms`,V.current=be}else u.style.transitionDuration=typeof Y=="string"?Y:`${Y}ms`;u.style[U]=`${T}px`,u.style.transitionTimingFunction=Q,S&&S(u,C)}),Ee=M((u,C)=>{u.style[U]="auto",v&&v(u,C)}),Te=M(u=>{u.style[U]=`${he()}px`,g&&g(u)}),Le=M(y),We=M(u=>{const C=he(),{duration:T,easing:Y}=je({style:z,timeout:P,easing:s},{mode:"exit"});if(P==="auto"){const Q=H.transitions.getAutoHeightDuration(C);u.style.transitionDuration=`${Q}ms`,V.current=Q}else u.style.transitionDuration=typeof T=="string"?T:`${T}ms`;u.style[U]=B,u.style.transitionTimingFunction=Y,w&&w(u)}),Fe=u=>{P==="auto"&&ue.start(V.current||0,u),m&&m(K.current,u)};return e.jsx(G,j({in:c,onEnter:ke,onEntered:Ee,onEntering:De,onExit:Te,onExited:Le,onExiting:We,addEndListener:Fe,nodeRef:K,timeout:P==="auto"?null:P},me,{children:(u,C)=>e.jsx(lt,j({as:d,className:J(D.root,h,{entered:D.entered,exited:!c&&B==="0px"&&D.hidden}[u]),style:j({[F?"minWidth":"minHeight"]:B},z),ref:Ie},C,{ownerState:j({},N,{state:u}),children:e.jsx(dt,{ownerState:j({},N,{state:u}),className:D.wrapper,ref:E,children:e.jsx(ct,{ownerState:j({},N,{state:u}),className:D.wrapperInner,children:i})})}))}))});Se.muiSupportAuto=!0;const Pe=x.createContext({});function pt(t){return se("MuiAccordion",t)}const Z=ie("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),mt=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],ut=t=>{const{classes:a,square:r,expanded:l,disabled:m,disableGutters:i}=t;return ce({root:["root",!r&&"rounded",l&&"expanded",m&&"disabled",!i&&"gutters"],region:["region"]},pt,a)},ht=W($e,{name:"MuiAccordion",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[{[`& .${Z.region}`]:a.region},a.root,!r.square&&a.rounded,!r.disableGutters&&a.gutters]}})(({theme:t})=>{const a={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],a),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],a)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${Z.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${Z.disabled}`]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}},({theme:t})=>({variants:[{props:a=>!a.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:a=>!a.disableGutters,style:{[`&.${Z.expanded}`]:{margin:"16px 0"}}}]})),ee=x.forwardRef(function(a,r){const l=le({props:a,name:"MuiAccordion"}),{children:m,className:i,defaultExpanded:h=!1,disabled:n=!1,disableGutters:d=!1,expanded:s,onChange:c,square:b=!1,slots:v={},slotProps:S={},TransitionComponent:g,TransitionProps:y}=l,w=de(l,mt),[f,z]=qe({controlled:s,default:h,name:"Accordion",state:"expanded"}),P=x.useCallback(F=>{z(!f),c&&c(F,!f)},[f,c,z]),[G,...me]=x.Children.toArray(m),N=x.useMemo(()=>({expanded:f,disabled:n,disableGutters:d,toggle:P}),[f,n,d,P]),D=j({},l,{square:b,disabled:n,disableGutters:d,expanded:f}),H=ut(D),ue=j({transition:g},v),E=j({transition:y},S),[V,B]=Ye("transition",{elementType:Se,externalForwardedProps:{slots:ue,slotProps:E},ownerState:D});return e.jsxs(ht,j({className:J(H.root,i),ref:r,ownerState:D,square:b},w,{children:[e.jsx(Pe.Provider,{value:N,children:G}),e.jsx(V,j({in:f,timeout:"auto"},B,{children:e.jsx("div",{"aria-labelledby":G.props.id,id:G.props["aria-controls"],role:"region",className:H.region,children:me})}))]}))});function xt(t){return se("MuiAccordionDetails",t)}ie("MuiAccordionDetails",["root"]);const gt=["className"],bt=t=>{const{classes:a}=t;return ce({root:["root"]},xt,a)},jt=W("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(t,a)=>a.root})(({theme:t})=>({padding:t.spacing(1,2,2)})),te=x.forwardRef(function(a,r){const l=le({props:a,name:"MuiAccordionDetails"}),{className:m}=l,i=de(l,gt),h=l,n=bt(h);return e.jsx(jt,j({className:J(n.root,m),ref:r,ownerState:h},i))});function yt(t){return se("MuiAccordionSummary",t)}const X=ie("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),ft=["children","className","expandIcon","focusVisibleClassName","onClick"],vt=t=>{const{classes:a,expanded:r,disabled:l,disableGutters:m}=t;return ce({root:["root",r&&"expanded",l&&"disabled",!m&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!m&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},yt,a)},wt=W(Oe,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(t,a)=>a.root})(({theme:t})=>{const a={duration:t.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],a),[`&.${X.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${X.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`&:hover:not(.${X.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${X.expanded}`]:{minHeight:64}}}]}}),Ct=W("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(t,a)=>a.content})(({theme:t})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:a=>!a.disableGutters,style:{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),[`&.${X.expanded}`]:{margin:"20px 0"}}}]})),At=W("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(t,a)=>a.expandIconWrapper})(({theme:t})=>({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),[`&.${X.expanded}`]:{transform:"rotate(180deg)"}})),ae=x.forwardRef(function(a,r){const l=le({props:a,name:"MuiAccordionSummary"}),{children:m,className:i,expandIcon:h,focusVisibleClassName:n,onClick:d}=l,s=de(l,ft),{disabled:c=!1,disableGutters:b,expanded:v,toggle:S}=x.useContext(Pe),g=f=>{S&&S(f),d&&d(f)},y=j({},l,{expanded:v,disabled:c,disableGutters:b}),w=vt(y);return e.jsxs(wt,j({focusRipple:!1,disableRipple:!0,disabled:c,component:"div","aria-expanded":v,className:J(w.root,i),focusVisibleClassName:J(w.focusVisible,n),onClick:g,ref:r,ownerState:y},s,{children:[e.jsx(Ct,{className:w.content,ownerState:y,children:m}),h&&e.jsx(At,{className:w.expandIconWrapper,ownerState:y,children:h})]}))}),_t=ge(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),xe=ge(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),re=ge(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),St=()=>{const t=pe(),[a,r]=x.useState(!1);return x.useEffect(()=>{Ge()?r(!0):(r(!1),t("/user/auth/login",{replace:!0}))},[t]),e.jsx(p,{children:a&&e.jsx(e.Fragment,{children:e.jsx(p,{sx:{},children:e.jsx(we,{})})})})},Pt=()=>e.jsxs(p,{children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",color:"primary.main"},children:"Your Wishlist"}),e.jsx(I,{container:!0,children:Je.map((t,a)=>e.jsx(I,{item:!0,lg:2,md:4,sm:6,xs:6,sx:{p:1},children:e.jsx(Ke,{data:t})},a))})]}),Rt={user_id:"1cps99",profile_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",name:"Chandra Prakash Suthar",email:"jane.doe@example.com",phone_number:"7023667323",gender:"Male",dob:"20-02-1999",password:"ACPs1999",address:[{id:"addr001",name:"Chandra Prakash Suthar S/O Bharat Kumar",mobile_no:"7023667323",pincode:"306912",landmark:"Shandev Mandir",city:"Pali",state:"Rajasthan",country:"India",area:"Takhatgarh",apartment:"Hanuman Ji Gali",default:!0},{id:"addr002",name:"John Doe",mobile_no:"9876543210",pincode:"110011",landmark:"Near Central Park",city:"New Delhi",state:"Delhi",country:"India",area:"Connaught Place",apartment:"The Grand Residency",default:!1},{id:"addr003",name:"Jane Doe",mobile_no:"9876543211",pincode:"560001",landmark:"Beside MG Road Metro",city:"Bangalore",state:"Karnataka",country:"India",area:"MG Road",apartment:"Prestige Apartment",default:!1},{id:"addr004",name:"Rahul Sharma ",mobile_no:"9123456789",pincode:"400001",landmark:"Opp. Gateway of India",city:"Mumbai",state:"Maharashtra",country:"India",area:"Colaba",apartment:"Seaside View",default:!1},{id:"addr005",name:"Anjali Verma",mobile_no:"9812345678",pincode:"700001",landmark:"Near Howrah Bridge",city:"Kolkata",state:"West Bengal",country:"India",area:"Howrah",apartment:"Heritage Residency",default:!1}]},Re=()=>{const t=pe(),a=Rt,r=a.address.find(g=>g.default),l=()=>{t("/user/profile/address")},m=()=>{t("/user/profile/update-password",{state:{phone_number:a.phone_number}})},i=()=>{t("/user/profile/manage-address",{state:{action:"Add"}})},h=g=>{t("/user/profile/manage-address",{state:{address:g,action:"Update"}})},n=g=>{console.log("handlesDefaultAddres_ id",g),oe({message:"Default address changed"})},[d,s]=x.useState(!1),[c,b]=x.useState();return console.log("removeAddress",c),{variables:{userData:a,defaultAddress:r,removeAddress:c,openRemoveDialog:d,setOpenRemoveDialog:s},methods:{handleAddress:l,handleUpdatePassword:m,handleAddAddress:i,handleUpdateAddress:h,handlesDefaultAddres:n,handleRemoveAddress:g=>{console.log("handleRemoveAddressid",g),oe({message:"Remove address successfully"}),setTimeout(()=>{s(!1)},1500)},handleRemoveAddressDialog:g=>{b(g),s(!0)}}}},ne=({address:t})=>e.jsxs(p,{children:[e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Name:"})," ",(t==null?void 0:t.name)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Landmark:"})," ",(t==null?void 0:t.landmark)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Apartment:"})," ",(t==null?void 0:t.apartment)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Area:"})," ",(t==null?void 0:t.area)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Pincode:"})," ",(t==null?void 0:t.pincode)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"City:"})," ",(t==null?void 0:t.city)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"State:"})," ",(t==null?void 0:t.state)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Country:"})," ",(t==null?void 0:t.country)||"N/A"]}),e.jsxs(o,{variant:"body1",children:[e.jsx("strong",{children:"Mobile No.:"})," ",(t==null?void 0:t.mobile_no)||"N/A"]})]}),It=()=>{const{variables:{userData:t,defaultAddress:a},methods:{handleAddress:r,handleUpdatePassword:l}}=Re();return e.jsx(O,{sx:{},children:e.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",color:"primary.main"},children:"Information"}),e.jsx($,{children:e.jsx(xe,{})})]}),e.jsx(Qe,{src:t.profile_url,alt:"Owner",variant:"rounded",sx:{width:70,height:70}}),e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:t.name}),e.jsx(_,{}),e.jsxs(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Email Address",t.email?e.jsxs(o,{variant:"body1",children:[" ",t.email]}):e.jsx(o,{variant:"body1",color:"error",children:"Add Email"})]}),e.jsx(_,{}),e.jsxs(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Mobile Number",t.phone_number?e.jsxs(o,{variant:"body1",children:[" ",t.phone_number]}):e.jsx(o,{variant:"body1",color:"error",children:"Add Phone Number"})]}),e.jsx(_,{}),e.jsxs(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Gender",t.gender?e.jsxs(o,{variant:"body1",children:[" ",t.gender]}):e.jsx(o,{variant:"body1",color:"error",children:"Add Gender"})," "]}),e.jsx(_,{}),e.jsxs(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Date of Birth",t.dob?e.jsxs(o,{variant:"body1",children:[" ",t.dob]}):e.jsx(o,{variant:"body1",color:"error",children:"Add Date of Birth"})]}),e.jsx(_,{}),e.jsxs(p,{children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"Update Password"}),e.jsx($,{onClick:l,children:e.jsx(xe,{})})]}),e.jsx(o,{variant:"body1",children:"******** "})]}),e.jsx(_,{}),e.jsxs(p,{children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"Address"}),e.jsx($,{onClick:r,children:e.jsx(xe,{})})]}),e.jsx(ne,{address:a})]}),e.jsx(_,{})]})})},q=[{id:"p1",title:"boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",price:200,discountPrice:100,mrp:200,discountPercentage:50,colors:[{label:"Black",code:"#000000",image:"https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg"},{label:"Cider Cyan",code:"#00FFFF",image:"https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg"},{label:"Olive Green",code:"#808000",image:"https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg"},{label:"Pure White",code:" #FFFFFF",image:"https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg"},{label:" Thunder Blue",code:"#4E5D73",image:"https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg"}],sizes:["standard"],images:["https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg","https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg","https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg","https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg","https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg","https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg"],delivery_charges:5,warranty:1,bestSelling:!0,bestSelling_number:4,numberOfOrders:1500,availability:!0,stock:4,quantity:1},{id:"p3",title:"boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",description:"boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",price:300,discountPrice:200,mrp:300,discountPercentage:25,ratings:{rat:4.5,totalRaters:2345,rat_5:350,rat_4:230,rat_3:180,rat_2:70,rat_1:40},colors:[{label:"Black",code:"#000000",image:"https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg"},{label:"Cider Cyan",code:"#00FFFF",image:"https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg"},{label:"Olive Green",code:"#808000",image:"https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg"},{label:"Pure White",code:" #FFFFFF",image:"https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg"},{label:" Thunder Blue",code:"#4E5D73",image:"https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg"}],sizes:["standard"],brands:{id:"b1",label:"Boat",logo:"https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto"},categories:{id:"c1",label:"Earbuds",image:"https://m.media-amazon.com/images/I/614hH1Cot3L.jpg"},store:{id:"1",logo:"https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",store_name:"Tech Haven"},images:["https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg","https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg","https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg","https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg","https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg","https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg"],teg:["bosco","phone"],features:["Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.","Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience","Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery_charges of your voice via voice call","TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141","ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert"],replacementPolicy:"7 days replacement policy",delivery_charges:1,warranty:1,bestSelling:!0,bestSelling_number:2,numberOfOrders:1500,availability:!0,stock:0,quantity:2},{id:"p6",title:"boAt bosco Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",description:"boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",price:50,discountPrice:20,mrp:20,discountPercentage:30,ratings:{rat:4.5,totalRaters:2345,rat_5:350,rat_4:230,rat_3:180,rat_2:70,rat_1:40},colors:[{label:"Black",code:"#000000",image:"https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg"},{label:"Cider Cyan",code:"#00FFFF",image:"https://m.media-amazon.com/images/I/71oXzCK43NL._SX522_.jpgg"},{label:"Olive Green",code:"#808000",image:"https://m.media-amazon.com/images/I/71i6-yYY1IL._SX522_.jpg"},{label:"Pure White",code:" #FFFFFF",image:"https://m.media-amazon.com/images/I/61+62pfcajL._SX522_.jpg"},{label:" Thunder Blue",code:"#4E5D73",image:"https://m.media-amazon.com/images/I/71XWviFA49L._SX522_.jpg"}],sizes:["standard"],brands:{id:"b1",label:"Boat",logo:"https://swarajya.gumlet.io/swarajya/2021-01/7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c/boAt_logo.jpg?w=610&q=50&compress=true&format=auto"},categories:{id:"c1",label:"Earbuds",image:"https://m.media-amazon.com/images/I/614hH1Cot3L.jpg"},store:{id:"1",logo:"https://media.gettyimages.com/id/1438530724/photo/facade-of-a-food-store-or-charcuterie.jpg?s=612x612&w=gi&k=20&c=KNUptosEYqC0qRHoO9nmliaO465VHqSMEOIBfbGJ6Es=",store_name:"Tech Haven"},images:["https://m.media-amazon.com/images/I/71RFdy6y6LL._SX522_.jpg","https://m.media-amazon.com/images/I/61mEqp7RZXL._SX522_.jpg","https://m.media-amazon.com/images/I/71QZbcvD65L._SX522_.jpg","https://m.media-amazon.com/images/I/61vBE3t4x1L._SX522_.jpg","https://m.media-amazon.com/images/I/61F5lcvJHLL._SX522_.jpg","https://m.media-amazon.com/images/I/61rM6cHlA1L._SX522_.jpg"],teg:["bosco","phone"],features:["Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.","Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience","Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery_charges of your voice via voice call","TboAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141","ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interfacert"],replacementPolicy:"7 days replacement policy",delivery_charges:10,warranty:1,bestSelling:!0,bestSelling_number:1,numberOfOrders:1500,availability:!0,stock:5,quantity:4}],kt=()=>{console.log("cartData",q);const t=pe(),[a,r]=x.useState(!1),l=n=>(d,s)=>{r(s?n:!1),console.log("event",d)},m={id:"addr001",name:"Chandra Prakash Suthar S/O Bharat Kumar",mobile_no:"7023667323",pincode:"306912",landmark:"Shandev Mandir",city:"Pali",state:"Rajasthan",country:"India",area:"Takhatgarh",apartment:"Hanuman Ji Gali",default:!0},[i,h]=x.useState();return console.log("ratingValue",i),e.jsxs(O,{sx:{display:"flex",flexDirection:"column",gap:2,p:2},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",color:"primary.main"},children:"Your Order"}),q.length===0?e.jsx(o,{variant:"body1",sx:{textAlign:"center",mt:2},children:"No items in your cart."}):q.map(n=>e.jsxs(p,{sx:{borderRadius:2,overflow:"hidden",boxShadow:1,height:"100%",p:2,border:1,width:"100%","&:hover":{boxShadow:3}},children:[e.jsx(o,{variant:"body1",children:"Delivery on 16 November"}),e.jsxs(p,{sx:{display:"flex",border:1,borderRadius:1,mt:1},children:[e.jsx(p,{component:"img",src:n.images[0],alt:n.title,sx:{height:100,cursor:"pointer",mr:2},onClick:()=>t(`/product_details/${n.id}`)}),e.jsxs(p,{sx:{flex:1},children:[e.jsx(o,{variant:"subtitle2",sx:{width:"100%"},children:Ae(n.title,100)}),e.jsxs(o,{variant:"body1",children:["Price : ₹",n.discountPrice]}),e.jsx(o,{variant:"body1",children:"Order Id: 407-7369418-7954728"})]})]}),e.jsxs(p,{children:[e.jsxs(ee,{expanded:a===`tracking-${n.id}`,onChange:l(`tracking-${n.id}`),sx:{backgroundColor:"transparent",overflow:"hidden",borderRadius:2,my:1},children:[e.jsx(ae,{expandIcon:e.jsx(re,{}),"aria-controls":`tracking-${n.id}-content`,id:`tracking-${n.id}-header`,children:e.jsx(o,{variant:"subtitle2",children:"Tracking details"})}),e.jsx(te,{children:e.jsxs(p,{children:[e.jsx(o,{variant:"body1",sx:{},children:"Track Id: 12345678990"}),e.jsxs(o,{variant:"body1",color:"success.main",children:["Tracking link :",e.jsx("a",{href:"https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:"India Post Tracking"})]})]})})]}),e.jsxs(ee,{expanded:a===`order-${n.id}`,onChange:l(`order-${n.id}`),sx:{backgroundColor:"transparent",overflow:"hidden",borderRadius:2,my:1},children:[e.jsx(ae,{expandIcon:e.jsx(re,{}),"aria-controls":`order-${n.id}-content`,id:`order-${n.id}-header`,children:e.jsx(o,{variant:"subtitle2",children:"View order details"})}),e.jsx(te,{children:e.jsxs(p,{children:[e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"body1",children:"Order date"}),e.jsx(o,{variant:"body1",children:"12-nov- 2024"})]}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"body1",children:"Order id"}),e.jsx(o,{variant:"body1",children:"1234567890"})]}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"body1",children:"Order total"}),e.jsx(o,{variant:"body1",children:"₹ 290"})]})]})})]}),e.jsxs(ee,{expanded:a===`address-${n.id}`,onChange:l(`address-${n.id}`),sx:{backgroundColor:"transparent",overflow:"hidden",borderRadius:2,my:1},children:[e.jsx(ae,{expandIcon:e.jsx(re,{}),"aria-controls":`address-${n.id}-content`,id:`address-${n.id}-header`,children:e.jsx(o,{variant:"subtitle2",children:"Order Address"})}),e.jsx(te,{children:e.jsx(p,{children:e.jsx(ne,{address:m})})})]}),e.jsxs(ee,{expanded:a===`rating-${n.id}`,onChange:l(`rating-${n.id}`),sx:{backgroundColor:"transparent",overflow:"hidden",borderRadius:2,my:1},children:[e.jsx(ae,{expandIcon:e.jsx(re,{}),"aria-controls":`rating-${n.id}-content`,id:`rating-${n.id}-header`,children:e.jsx(o,{variant:"subtitle2",children:"Order Ratings"})}),e.jsx(te,{children:e.jsxs(p,{children:[e.jsx(o,{variant:"body1",children:"Rate this product"}),e.jsx(Ze,{value:i,setValue:h})]})})]})]})]},n.id))]})},Dt=()=>{const[t,a]=x.useState(q.filter(s=>s.stock>0).map(s=>({product_id:s.id,quantity:1,delivery_charges:s.delivery_charges,discountPrice:s.discountPrice,price:s.price}))),r=(s,c)=>{a(b=>b.map(v=>v.product_id===s&&v.quantity<c?{...v,quantity:v.quantity+1}:v))},l=s=>{a(c=>c.map(b=>b.product_id===s&&b.quantity>1?{...b,quantity:b.quantity-1}:b))},m=()=>console.log("cartFData",t),i=s=>console.log({id:s}),h=s=>console.log({id:s}),d=t.reduce((s,c)=>(s.totalPrice+=c.price*c.quantity,s.totalDiscountPrice+=c.discountPrice*c.quantity,s.totalDeliveryCharges+=c.delivery_charges*c.quantity,s.totalSavings=s.totalPrice-s.totalDiscountPrice,s.totalProducts=t.length,s.totalQuantity+=c.quantity,s),{totalPrice:0,totalDiscountPrice:0,totalDeliveryCharges:0,totalSavings:0,totalProducts:0,totalQuantity:0});return{variable:{cartFData:t,priceDetails:d},methods:{handleIncrement:r,handleDecrement:l,healdCheckout:m,healdWishlistCart:i,healdRemoveCart:h}}},Et=()=>{const t=pe(),{variable:{cartFData:a,priceDetails:r},methods:{handleIncrement:l,handleDecrement:m,healdCheckout:i,healdWishlistCart:h,healdRemoveCart:n}}=Dt();return console.log("cartData",q),e.jsxs(e.Fragment,{children:[e.jsxs(O,{sx:{display:"flex",flexDirection:"column",gap:1,p:1},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",color:"primary.main"},children:"Your Cart"}),e.jsxs(p,{sx:{border:1,borderColor:"primary.main",borderRadius:2,p:2,display:"flex",flexDirection:"column",gap:1},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold"},children:"Price Details"}),e.jsx(_,{}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(o,{variant:"subtitle2",children:["Price (",r.totalProducts," items, ",r.totalQuantity," Quantity)"]}),e.jsxs(o,{variant:"subtitle2",children:[" ₹",r.totalPrice]})]}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"subtitle2",children:"Discounted Price "}),e.jsxs(o,{variant:"subtitle2",color:"success.main",children:["- ₹",r.totalDiscountPrice]})]}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"subtitle2",children:"Delivery Charges "}),e.jsxs(o,{variant:"subtitle2",children:[" ₹",r.totalDeliveryCharges]})]}),e.jsx(_,{}),e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"Total Amount"}),e.jsxs(o,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["₹",r.totalDiscountPrice+r.totalDeliveryCharges]})]}),e.jsx(_,{}),e.jsxs(o,{variant:"subtitle2",color:"success.main",sx:{fontWeight:"bold"},children:["You will save ₹",r.totalSavings," on this order"]}),e.jsx(p,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(k,{variant:"contained",onClick:i,children:"Place Order"})})]})]}),e.jsx(I,{container:!0,children:q.map(d=>{const s=a.find(b=>b.product_id===d.id),c=s?s.quantity:1;return e.jsx(I,{item:!0,sm:6,xs:12,sx:{p:1},children:e.jsx(p,{sx:{borderRadius:2,overflow:"hidden",boxShadow:1,height:"100%",p:1,width:"100%",display:"flex"},children:e.jsxs(I,{container:!0,children:[e.jsx(I,{item:!0,lg:4,md:12,sm:12,xs:12,sx:{p:1},children:e.jsx(et,{src:d.images[0],alt:d.title,style:{height:"200px",width:"100%"},onClick:()=>t(`/product_details/${d.id}`)})}),e.jsx(I,{item:!0,lg:8,md:12,sm:12,xs:12,sx:{p:1},children:e.jsxs(p,{sx:{flex:1,p:1},children:[e.jsx(o,{variant:"subtitle2",sx:{width:"100%"},children:Ae(d.title,100)}),d.stock>0?e.jsxs(e.Fragment,{children:[e.jsxs(R,{direction:"row",alignItems:"center",spacing:1,sx:{mt:1},children:[e.jsxs(o,{variant:"subtitle2",children:["₹",d.discountPrice]}),d.discountPercentage>0&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{variant:"body1",sx:{textDecoration:"line-through",color:"#888"},children:["₹",d.price]}),e.jsxs(o,{variant:"body1",color:"success.main",children:[d.discountPercentage,"% off"]}),d.delivery_charges>0&&e.jsxs(o,{variant:"body1",children:["Delivery: ₹",d.delivery_charges]})]})]}),e.jsxs(R,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx($,{onClick:()=>m(d.id),disabled:c<=1,children:e.jsx(tt,{})}),e.jsx(p,{sx:{border:1,borderColor:"primary.main",p:1,px:2,borderRadius:2},children:e.jsx(o,{children:c})}),e.jsx($,{onClick:()=>l(d.id,d.stock),disabled:c===d.stock,children:e.jsx(_e,{})})]})]}):e.jsx(o,{variant:"subtitle2",color:"error",sx:{my:1},children:"Out Of Stock"}),e.jsxs(R,{direction:"row",alignItems:"center",spacing:1,sx:{},children:[e.jsx(k,{onClick:()=>h(d.id),children:"Add to Wishlist"}),e.jsx(k,{onClick:()=>n(d.id),children:"Remove from Cart"})]})]})})]})})})})})]})},Tt=()=>e.jsx(p,{sx:{},children:e.jsx(we,{})}),Lt=()=>{const{variables:{userData:t,removeAddress:a,openRemoveDialog:r,setOpenRemoveDialog:l},methods:{handleAddAddress:m,handleUpdateAddress:i,handlesDefaultAddres:h,handleRemoveAddressDialog:n,handleRemoveAddress:d}}=Re();return e.jsxs(e.Fragment,{children:[e.jsx(O,{sx:{p:0},children:e.jsxs(I,{container:!0,children:[e.jsx(I,{item:!0,lg:4,md:6,sm:12,xs:12,sx:{p:1},children:e.jsx(p,{sx:{borderRadius:2,overflow:"hidden",boxShadow:1,height:"100%",p:2,display:"grid",placeItems:"center"},children:e.jsxs(k,{sx:{display:"flex",flexDirection:"column"},onClick:m,children:[e.jsx(_e,{}),e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold",px:2},children:"Add Address"})]})})}),t.address.map((s,c)=>e.jsx(I,{item:!0,lg:4,md:6,sm:12,xs:12,sx:{p:1},children:e.jsxs(p,{sx:{borderRadius:2,overflow:"hidden",boxShadow:1,height:"100%",p:2,border:s.default?1.5:0,borderColor:"primary.main"},children:[e.jsx(ne,{address:s}),e.jsxs(p,{sx:{mt:1},children:[e.jsx(k,{onClick:()=>i(s),sx:{py:0,pt:"1px"},children:"Edit"}),e.jsx(k,{sx:{py:0,pt:"1px"},onClick:()=>n(s),children:"Remove"}),!s.default&&e.jsx(k,{onClick:()=>h(s.id),sx:{py:0,pt:"1px"},children:"Set as Default"})]})]})},c))]})}),r&&e.jsx(He,{open:r,handleClose:()=>l(!1),children:e.jsxs(p,{sx:{background:Ve.white,p:2},children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:"bold",color:"primary.main"},children:"Confirm Deletion"}),e.jsx($,{onClick:()=>l(!1),children:e.jsx(_t,{})})]}),e.jsx(_,{sx:{my:1}}),e.jsx(ne,{address:a}),e.jsx(k,{variant:"contained",fullWidth:!0,sx:{mt:2},onClick:()=>d(a),children:"Remove"})]})})]})},Wt=t=>{const a={};let r=!0;return t.name||(a.name="Name is required",r=!1),t.mobile_no?t.mobile_no.length<10&&(a.mobile_no="Please enter a valid Number",r=!1):(a.mobile_no="Number is required",r=!1),t.pincode?t.pincode.length<6&&(a.pincode="Please enter a valid pincode",r=!1):(a.pincode="Pincode is required",r=!1),t.city||(a.city="City is required",r=!1),t.state||(a.state="State is required",r=!1),t.country||(a.country="Country is required",r=!1),t.area||(a.area="Area is required",r=!1),t.apartment||(a.apartment="Apartment is required",r=!1),{isValid:r,err:a}},Ft=()=>{const t=Ce(),a=t.state.address,r=t.state.action;console.log({state_address:a,state_action:r});const[l,m]=x.useState(!0),[i,h]=x.useState({name:a==null?void 0:a.name,mobile_no:a==null?void 0:a.mobile_no,pincode:a==null?void 0:a.pincode,landmark:a==null?void 0:a.landmark,city:a==null?void 0:a.city,state:a==null?void 0:a.state,country:a==null?void 0:a.country,area:a==null?void 0:a.area,apartment:a==null?void 0:a.apartment,default:!1});console.log("add  ress",i);const[n,d]=x.useState({}),s=g=>{const{name:y,value:w}=g.target;m(!1),!(y==="mobile_no"&&w.length>10)&&(y==="pincode"&&w.length>6||(h(f=>({...f,[y]:w})),d(f=>({...f,[y]:""}))))},[c,b]=x.useState(!1),v=g=>{b(g.target.checked),h(y=>({...y,default:g.target.checked}))},S=g=>{g.preventDefault(),console.log("addressAWERT",i);const y=Wt(i);y.isValid?(console.log({address:i}),r==="Add"?oe({message:"Add Address successfully"}):oe({message:"Update Address successfully"})):d(y.err)};return e.jsx(O,{sx:{p:0},children:e.jsxs(p,{sx:{width:"100%",maxWidth:500,m:"auto"},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",my:2,color:"primary.main"},children:`${r} ${r==="Add"?"a new":"your"} address`}),e.jsx("form",{onSubmit:S,children:e.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:2,p:2,borderRadius:2,boxShadow:1},children:[e.jsx(L,{autoFocus:!0,variant:"standard",label:"Name",name:"name",value:i==null?void 0:i.name,onChange:s,error:!!n.name,helperText:n.name}),e.jsx(L,{variant:"standard",fullWidth:!0,label:"Mobile Number",name:"mobile_no",type:"number",value:i==null?void 0:i.mobile_no,onChange:s,error:!!n.mobile_no,helperText:n.mobile_no}),e.jsx(L,{variant:"standard",label:"pincode",name:"pincode",type:"number",value:i==null?void 0:i.pincode,onChange:s,error:!!n.pincode,helperText:n.pincode}),e.jsx(L,{variant:"standard",label:"Landmark",name:"landmark",value:i==null?void 0:i.landmark,onChange:s,error:!!n.landmark,helperText:n.landmark}),e.jsx(L,{variant:"standard",label:"City",name:"city",value:i==null?void 0:i.city,onChange:s,error:!!n.city,helperText:n.city}),e.jsx(L,{variant:"standard",label:"State",name:"state",value:i==null?void 0:i.state,onChange:s,error:!!n.state,helperText:n.state}),e.jsx(L,{variant:"standard",label:"Country",name:"country",value:i==null?void 0:i.country,onChange:s,error:!!n.country,helperText:n.country}),e.jsx(L,{variant:"standard",label:"area",name:"area",value:i==null?void 0:i.area,onChange:s,error:!!n.area,helperText:n.area}),e.jsx(L,{variant:"standard",label:"apartment",name:"apartment",value:i==null?void 0:i.apartment,onChange:s,error:!!n.apartment,helperText:n.apartment}),r!="Update"&&e.jsx(rt,{control:e.jsx(ot,{sx:{color:"primary.main"},checked:c,onChange:v}),label:"Make this my default address",sx:{color:"primary.main"}}),e.jsxs(k,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:l,children:[r," address"]})]})})]})})},zt=t=>{const a={};let r=!0;const l=ve(t.old_password);console.log("oldPasswordValidation",l),l.isValid||(r=!1,a.old_password=l.err.password);const m=ve(t.new_password);return m.isValid||(r=!1,a.new_password=m.err.password),{isValid:r,errors:a}},Nt=()=>{const t=Ce(),[a,r]=x.useState({phone_number:t.state.phone_number,old_password:"",new_password:""}),[l,m]=x.useState({});console.log("updatePasswordErr",l);const i=n=>{const{name:d,value:s}=n.target;r(c=>({...c,[d]:s})),m(c=>({...c,[d]:""}))},h=n=>{n.preventDefault();const{isValid:d,errors:s}=zt(a);d?(console.log("Password updated successfully:",a),r({phone_number:t.state.phone_number,old_password:"",new_password:""}),m({})):m(s)};return e.jsx(O,{sx:{p:0},children:e.jsxs(p,{sx:{width:"100%",maxWidth:500,m:"auto"},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:"bold",my:2,color:"primary.main"},children:"Update Password"}),e.jsx("form",{onSubmit:h,children:e.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:2,p:2,borderRadius:2,boxShadow:1},children:[e.jsx(fe,{label:"Old Password",name:"old_password",value:a.old_password,onChange:i,error:!!l.old_password,helperText:l.old_password}),e.jsx(fe,{label:"New Password",name:"new_password",value:a.new_password,onChange:i,error:!!l.new_password,helperText:l.new_password}),e.jsx(k,{type:"submit",variant:"contained",color:"primary",children:"Update"})]})})]})})},qt=()=>e.jsx(Ue,{children:e.jsxs(A,{path:"/",element:e.jsx(St,{}),children:[e.jsx(A,{index:!0,element:e.jsx(at,{})}),e.jsx(A,{path:"/wishlist",element:e.jsx(Pt,{})}),e.jsxs(A,{path:"/profile",element:e.jsx(Tt,{}),children:[e.jsx(A,{index:!0,element:e.jsx(ye,{to:"/profile/information",replace:!0})}),e.jsx(A,{path:"information",element:e.jsx(It,{})}),e.jsx(A,{path:"address",element:e.jsx(Lt,{})}),e.jsx(A,{path:"manage-address",element:e.jsx(Ft,{})}),e.jsx(A,{path:"update-password",element:e.jsx(Nt,{})})]}),e.jsx(A,{path:"/order",element:e.jsx(kt,{})}),e.jsx(A,{path:"/cart",element:e.jsx(Et,{})}),e.jsx(A,{path:"*",element:e.jsx(ye,{to:"/user",replace:!0})})]})});export{qt as default};