import{c as G,j as e,u as O,r as p,a as U,B as w,O as $,b as P,d as _,s as R,p as q,e as B,f as V,g as z,h as k,T as C,i as v,k as H,l as J,m as K,n as F,S as Q,R as X,o as S,N}from"./index-DP29KqiN.js";import{v as A,a as I,T,P as W,b as Y,c as Z,C as ee}from"./PasswordField-BClKPmsi.js";import{D as se}from"./Grow-CC9fD_WA.js";const te=G(e.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google"),ae=()=>{const r=O(),[s,t]=p.useState(!1);return p.useEffect(()=>{U()?(t(!0),r("/user",{replace:!0})):t(!1)},[r]),e.jsx(e.Fragment,{children:!s&&e.jsx(w,{sx:{display:"grid",placeItems:"center",flex:1,height:"70vh"},children:e.jsx(w,{sx:{minWidth:"max(20vw, 350px)",width:"350px",p:3,border:1,px:4,borderColor:"primary.main",borderRadius:2,textAlign:"center"},children:e.jsx($,{})})})})},re=r=>{const s={};let t=!0;const n=A(r.email);n.isValid||(t=!1,s.email=n.err.email);const a=I(r.password);return a.isValid||(t=!1,s.password=a.err.password),{isValid:t,err:s}},ne=()=>{const r=O(),s=P(),{loginDetailPreserve:t,isLoading:n}=_(i=>i.auth),[a,l]=p.useState({email:"",password:""}),[c,f]=p.useState({}),E=i=>{const{name:o,value:d}=i.target;o==="phone_number"&&d.length>10||(l(m=>({...m,[o]:d})),f(m=>({...m,[o]:""})))},y=async i=>{i.preventDefault();const o=re(a);if(o.isValid){s(R(a));try{const L=await s(q(a)).unwrap();L?.data?(await B(L.data),V({message:L.message}),r("/user",{replace:!0}),s(R(null))):z({message:"Unexpected response: Missing data"})}catch(d){const m=d instanceof Error?d.message:"Something went wrong";console.warn(m)}}else f(o.err)},j=async()=>{s(R(a));const i=A(a.email);if(i.isValid)try{const o={email:a.email},m=await s(k(o)).unwrap();V({message:m.message,duration:3e3}),r("/user/auth/verify_otp",{state:{userdata:a,action:"forgetpassword"}})}catch(o){const d=o instanceof Error?o.message:"Something went wrong";console.warn(d)}else f(i.err)},g=async()=>{s(R(a)),r("/user/auth/registration")};return p.useEffect(()=>{t&&l(t)},[t]),{veriabls:{loginDetails:a,loginDetailsErr:c,isLoading:n},methods:{handleLoginDetailsChange:E,handleSubmit:y,handleForgotPassword:j,handleRegistration:g}}},M=({title:r,subtitle:s,children:t})=>e.jsxs(w,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(C,{variant:"subtitle1",fontWeight:"bold",color:"primary.dark",children:[r,e.jsx(C,{variant:"body1",color:"primary.main",children:s})]}),t]}),oe=()=>{const{veriabls:{loginDetails:r,loginDetailsErr:s,isLoading:t},methods:{handleLoginDetailsChange:n,handleSubmit:a,handleForgotPassword:l,handleRegistration:c}}=ne();return e.jsxs(M,{title:"Log in to E-Commerce",subtitle:"Enter your details below",children:[e.jsx("form",{onSubmit:a,children:e.jsxs(w,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(T,{variant:"standard",fullWidth:!0,autoFocus:!0,label:"Email",name:"email",type:"email",value:r.email,onChange:n,error:!!s.email,helperText:s.email}),e.jsx(W,{value:r.password,onChange:n,error:!!s.password,helperText:s.password}),e.jsx(w,{sx:{display:"flex",justifyContent:"end"},children:e.jsx(v,{variant:"text",color:"primary",sx:{py:"1px"},onClick:l,disabled:t,children:"Forgot password?"})}),e.jsx(v,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:t,children:"Log In"})]})}),e.jsx(se,{children:e.jsx(C,{variant:"body1",color:"primary.main",children:"Or, Login with"})}),e.jsx(v,{fullWidth:!0,variant:"outlined",startIcon:e.jsx(te,{}),children:"Sign in with Google"}),e.jsxs(C,{variant:"body1",children:["Don’t have an account?",e.jsx(v,{variant:"text",color:"primary",sx:{py:"1px",ml:.5},onClick:c,children:"Register here"})]})]})},ie=()=>{const r=O(),s=H(),t=P(),n=s.state.userdata,a=s.state.action,l=5,[c,f]=p.useState({otp:"",password:""}),[E,y]=p.useState({}),[j,g]=p.useState(l),[i,o]=p.useState(!0);return p.useEffect(()=>{if(i&&j>0){const x=setInterval(()=>g(h=>h-1),1e3);return()=>clearInterval(x)}},[i,j]),{veriabls:{validationData:c,validationDataErr:E,userdata:n,actiontype:a,timer:j},methods:{handleChange:x=>{const{name:h,value:b}=x.target;h==="otp"&&b.length>6||(f(u=>({...u,[h]:b})),y(u=>({...u,[h]:""})))},handleSubmit:async x=>{x.preventDefault();const h=Y(c.otp);if(!h.isValid){y(u=>({...u,otp:h.err.otp??""}));return}if(a==="forgetpassword"){const u=I(c.password??"");if(!u.isValid){y(D=>({...D,password:u.err.password??""}));return}}const b=a==="forgetpassword"?{email:n.email,password:c.password,otp:c.otp}:{otp:c.otp,...n};try{const D=await t(a==="forgetpassword"?J(b):K(b)).unwrap();a!=="forgetpassword"&&D?.data?(await B(D.data),r("/user",{replace:!0})):a==="forgetpassword"&&r("/user/auth/login",{replace:!0}),V({message:D.message}),t(R(null)),t(F(null))}catch(u){const D=u instanceof Error?u.message:"Something went wrong";console.warn(D)}},handleResendOtp:async()=>{try{const x={email:n.email},b=await t(k(x)).unwrap();V({message:b.message,duration:3e3}),g(l),o(!0)}catch(x){const h=x instanceof Error?x.message:"Something went wrong";console.warn(h)}}}}},le=()=>{const{veriabls:{validationData:r,validationDataErr:s,userdata:t,actiontype:n,timer:a},methods:{handleChange:l,handleSubmit:c,handleResendOtp:f}}=ie();return e.jsx(M,{title:"Verification",subtitle:`Otp sent successfully to your number ${t.email}`,children:e.jsx("form",{onSubmit:c,children:e.jsxs(w,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(T,{autoFocus:!0,variant:"standard",label:"Otp",name:"otp",type:"number",value:r.otp,onChange:l,error:!!s.otp,helperText:s.otp,sx:{}}),n==="forgetpassword"&&e.jsx(W,{value:r?.password,onChange:l,error:!!s.password,helperText:s.password}),e.jsx(w,{sx:{display:"flex",justifyContent:"end"},children:a?e.jsxs(C,{variant:"body1",sx:{},children:["Resend OTP in ",a>0&&`${a} sec`]}):e.jsx(v,{type:"button",onClick:f,disabled:a>0,sx:{},children:"Resend OTP"})}),e.jsx(v,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Submit"})]})})})},de=r=>{const s={};let t=!0;const n=Z(r.name);n.isValid||(t=!1,s.name=n.err.name);const a=A(r.email);a.isValid||(t=!1,s.email=a.err.email);const l=I(r.password);return l.isValid||(t=!1,s.password=l.err.password),{isValid:t,err:s}},ce=()=>{const r=O(),s=P(),{registerDetailPreserve:t}=_(g=>g.auth),[n,a]=p.useState({name:"",email:"",password:""}),[l,c]=p.useState({}),f=g=>{const{name:i,value:o}=g.target;i==="phone_number"&&o.length>10||(a(d=>({...d,[i]:o})),c(d=>({...d,[i]:""})))},E=async g=>{g.preventDefault();const i=de(n);if(i.isValid){s(F(n));try{const o={email:n.email},m=await s(k(o)).unwrap();V({message:m.message,duration:3e3}),r("/user/auth/verify_otp",{state:{userdata:n,action:"registration"}})}catch(o){const d=o instanceof Error?o.message:"Something went wrong";console.warn(d)}}else c(i.err)},y=()=>{s(F(n)),r("/user/auth/login")},j=()=>{};return p.useEffect(()=>{t?a(t):console.error("No preserved login.")},[t]),{veriabls:{registrationDetails:n,registrationDetailsErr:l},methods:{handleRegistrationDetailsChange:f,handleSubmit:E,handleLogin:y,handleTermsAndConditions:j}}},pe=()=>{const{veriabls:{registrationDetails:r,registrationDetailsErr:s},methods:{handleRegistrationDetailsChange:t,handleSubmit:n,handleLogin:a,handleTermsAndConditions:l}}=ce();return e.jsxs(M,{title:"Create an account",subtitle:"Enter your details to register.",children:[e.jsx("form",{onSubmit:n,children:e.jsxs(w,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(T,{autoFocus:!0,variant:"standard",fullWidth:!0,label:"Full Name",name:"name",value:r.name,onChange:t,error:!!s.name,helperText:s.name}),e.jsx(T,{variant:"standard",fullWidth:!0,label:"Email",name:"email",type:"email",value:r.email,onChange:t,error:!!s.email,helperText:s.email}),e.jsx(W,{value:r.password,onChange:t,error:!!s.password,helperText:s.password}),e.jsxs(Q,{direction:"row",spacing:0,sx:{p:0},children:[e.jsx(ee,{required:!0,sx:{color:"primary.main",p:0}})," ",e.jsx(v,{variant:"text",color:"primary",sx:{py:"1px"},onClick:l,children:"Terms And Conditions "})]}),e.jsx(v,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Register"})]})}),e.jsxs(C,{children:["Already have an account?",e.jsx(C,{component:"span",sx:{color:"primary.main",cursor:"pointer",ml:1},onClick:a,children:"Log in here"})]})]})},ge=()=>e.jsx(X,{children:e.jsxs(S,{path:"/",element:e.jsx(ae,{}),children:[e.jsx(S,{index:!0,element:e.jsx(N,{to:"/auth/login",replace:!0})}),e.jsx(S,{path:"login",element:e.jsx(oe,{})}),e.jsx(S,{path:"registration",element:e.jsx(pe,{})}),e.jsx(S,{path:"verify_otp",element:e.jsx(le,{})}),e.jsx(S,{path:"*",element:e.jsx(N,{to:"/auth/login",replace:!0})})]})});export{ge as default};
