(()=>{var e={};e.id=716,e.ids=[716],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8330:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["auth",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1759)),"/home/sanjiv/Desktop/QuizzApp/client/src/app/auth/login/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5828))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7809)),"/home/sanjiv/Desktop/QuizzApp/client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5828))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/sanjiv/Desktop/QuizzApp/client/src/app/auth/login/page.tsx"],u="/auth/login/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/auth/login/page",pathname:"/auth/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1073:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},788:(e,t,r)=>{Promise.resolve().then(r.bind(r,350)),Promise.resolve().then(r.bind(r,3802))},624:(e,t,r)=>{Promise.resolve().then(r.bind(r,2738))},350:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(5344);r(3729);var a=r(6013),n=r(448);let i=(0,n.oM)({name:"popup",initialState:{isOpen:!1},reducers:{openPopup:e=>{e.isOpen=!0},closePopup:e=>{e.isOpen=!1}}}),{openPopup:l,closePopup:o}=i.actions,d=i.reducer;var c=r(1436);let u=(0,n.xC)({reducer:{popup:d,user:c.ZP}});function p({children:e}){return s.jsx(a.zt,{store:u,children:e})}},3802:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ReactQueryClientProvider:()=>i});var s=r(5344),a=r(3729),n=r(165);let i=({children:e})=>{let[t]=(0,a.useState)(()=>new n.QueryClient({defaultOptions:{queries:{staleTime:6e4}}}));return s.jsx(n.QueryClientProvider,{client:t,children:e})}},4230:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(5344);r(3729);var a=r(8720),n=r(6815),i=r(9377);let l=(0,a.j)("p-2.5 px-5 text-[0.875rem] flex items-center gap-3 btn-neutral hover:border-neutral-400 rounded-md font-medium text-white hover:bg-primary_bg  hover:text-white",{variants:{variant:{primary:"bg-primary_bg hover:text-white",danger:"bg-red-400 hover:text-white",cancel:"bg-white border text-neutral-800 border-primary_bg hover:bg-primary_bg  hover:text-white"}},defaultVariants:{variant:"primary"}}),o=({className:e,variant:t,...r})=>s.jsx("button",{type:r.buttontype,className:function(...e){return(0,i.m6)((0,n.W)(e))}(l({className:e,variant:t})),...r,children:r.children})},2204:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(5344);r(3729);let a=e=>{let t="id_"+e.name,{labelColor:r="secondary"}=e;return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsxs)("label",{className:`text-${r} text-sm`,htmlFor:t,children:[e.label,e.required?s.jsx("span",{className:"text-red-600 ",children:"*"}):""]}),(0,s.jsxs)("div",{className:`flex items-center justify-between rounded border shadow-lg bg-transparent border-zinc-400 focus-within:outline focus-within:outline-black focus-within:border-none ${e.icon&&"left"===e.iconAlign&&"flex-row-reverse"} ${e.readonly?"bg-gray-300":""}`,children:[s.jsx("input",{disabled:e.readonly,placeholder:e.placeholder,onChange:t=>{!e.readonly&&e.onChange&&(e?.maxlength&&String(t.target.value).length<=e?.maxlength||!e?.maxlength)&&e.onChange(t)},onBlur:e.onBlur,onFocus:t=>{e.type&&"number"===e.type&&t.target.addEventListener("wheel",function(e){e.preventDefault()})},type:e.type,value:e?.value,className:`text-primary h-[40px] p-3 rounded outline-none  w-full ${e.readonly?"cursor-not-allowed bg-[#f0f0f0]":"bg-white "}`,name:e.name,id:t}),e.icon&&s.jsx("div",{className:`${"left"===e.iconAlign?"ml-2":"mr-2"}`,children:e.icon})]}),e.touched&&e.error&&s.jsx("div",{className:"text-red-500",children:e.error})]})})}},6377:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(5344);r(3729);let a=e=>s.jsx("h2",{className:`text-secondary text-sub_head font-semibold ${e.className}`,children:e.children});var n=r(4230);let i=({children:e,title:t,closeModal:r,width:i="70%",bgColor:l="white",opacity:o=""})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-black opacity-40 z-50"}),s.jsx("section",{className:`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[${i}] max-h-[90%] overflow-auto z-50 rounded-xl hide-scrollbar`,children:s.jsx("div",{className:"relative z-50 ",children:(0,s.jsxs)("div",{className:`w-full rounded-lg h-auto backdrop-blur-lg bg-${l} border shadow-lg flex flex-col ${o} p-5`,children:[s.jsx(a,{children:t}),s.jsx("div",{className:"flex flex-col w-full gap-5 mt-5",children:e}),r&&s.jsx("div",{className:"w-full mt-4 flex items-center justify-end gap-2",children:s.jsx(n.Z,{onClick:r,variant:"cancel",className:"w-24",children:"Close"})})]})})})]})},6527:(e,t,r)=>{"use strict";r.d(t,{l:()=>o});var s=r(5344),a=r(3729),n=r(1413),i=r(6377);let l=()=>{let[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let r=setTimeout(()=>{t(e>2?0:e+1)},500);return()=>clearTimeout(r)}),s.jsx(s.Fragment,{children:s.jsx(i.Z,{title:"",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center w-40",children:[s.jsx(n.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),(0,s.jsxs)("span",{className:"text-[20px] text-black my-8",children:["Working ",".".repeat(e)]})]})})})};function o(){let[e,t]=(0,a.useState)(!1);return[e?s.jsx(l,{}):s.jsx(s.Fragment,{}),()=>{t(!0)},()=>{t(!1)}]}},2738:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(5344),a=r(3729),n=r(4230),i=r(2204),l=r(4721),o=r(4502),d=r(6013),c=r(1436),u=r(7406),p=r(522),x=r(6527),h=r(8428),m=r(4669);let g=()=>{let e=(0,d.I0)(),[t,r]=(0,a.useState)(),[g,v]=(0,a.useState)(!0),f=(0,h.useRouter)(),[b,j,y]=(0,x.l)(),w=o.Ry().shape({phone:o.Z_().required("Phone number is required"),password:o.Z_().required("Password is required")}),k=async t=>{j();try{let s=await (0,u.Z)({url:p.Y.AUTH.login,method:"POST",data:{phone:t.phone,password:t.password}});s.data.data?(e((0,c.x4)(s.data.data)),window.location.replace("/quizz/home")):r("You have entered wrong credentials !!")}catch(e){m.ZP.error(e.response.data.message),r("Something Went Wrong!!"),console.log(e)}finally{y()}},P=()=>{v(!g)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(m.x7,{}),b,s.jsx("div",{className:"max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0",children:s.jsx("div",{className:"relative",children:(0,s.jsxs)("div",{className:"p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl",children:[s.jsx(l.J9,{initialValues:{phone:"",password:""},validationSchema:w,onSubmit:e=>{k(e)},children:({values:e,errors:r,touched:a,handleChange:l,handleBlur:o,handleSubmit:d})=>(0,s.jsxs)("form",{onSubmit:d,children:[s.jsx("div",{className:"text-center",children:s.jsx("h1",{className:"text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center",children:"Welcome Back"})}),s.jsx("div",{className:"flex flex-col mt-4 text-center",children:s.jsx("span",{className:"text-center text-red-400",children:t})}),s.jsx("hr",{className:"block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700"}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("div",{className:"mt-1 mb-6",children:s.jsx(i.Z,{label:"Username",placeholder:"Username",onChange:l,onBlur:o,value:e.phone,error:r.phone,touched:a.phone,name:"phone",maxlength:10,type:"number"})}),s.jsx(i.Z,{label:"Password",onChange:l,onBlur:o,value:e.password,error:r.password,touched:a.password,name:"password",placeholder:"Password",className:"mt-1",type:g?"password":"text",icon:g?s.jsx("svg",{onClick:P,xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 52 50",fill:"none",children:s.jsx("path",{d:"M3.49755 2.5L48.4975 47.5M20.6083 19.7841C19.3017 21.134 18.4976 22.973 18.4976 25C18.4976 29.1423 21.8555 32.5 25.9975 32.5C28.0538 32.5 29.9168 31.6725 31.2715 30.3325M12.2476 11.6179C7.4993 14.7509 3.88263 19.4599 2.14258 25C5.3282 35.1427 14.804 42.5 25.998 42.5C30.9703 42.5 35.6035 41.0485 39.497 38.546M23.4975 7.62347C24.32 7.54182 25.1543 7.5 25.998 7.5C37.1923 7.5 46.668 14.8573 49.8535 25C49.1518 27.235 48.1443 29.3345 46.8805 31.25",stroke:"black",strokeOpacity:"0.6",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,s.jsxs)("svg",{onClick:P,xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 61 61",fill:"none",children:[s.jsx("path",{d:"M37.9794 30.0859C37.9794 34.2282 34.6217 37.5859 30.4794 37.5859C26.3374 37.5859 22.9795 34.2282 22.9795 30.0859C22.9795 25.9437 26.3374 22.5859 30.4794 22.5859C34.6217 22.5859 37.9794 25.9437 37.9794 30.0859Z",stroke:"black",strokeOpacity:"0.35",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M30.4808 12.5859C19.2866 12.5859 9.81094 19.9431 6.62524 30.0859C9.81089 40.2287 19.2866 47.5859 30.4808 47.5859C41.6748 47.5859 51.1505 40.2287 54.3363 30.0859C51.1505 19.9432 41.6748 12.5859 30.4808 12.5859Z",stroke:"black",strokeOpacity:"0.35",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),s.jsx("div",{className:"grid mt-6",children:(0,s.jsxs)(n.Z,{className:"w-[100%] flex justify-center mt-6",variant:"primary",buttontype:"submit",children:[(0,s.jsxs)("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right",viewBox:"0 0 16 16",children:[s.jsx("path",{fillRule:"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),s.jsx("path",{fillRule:"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),"Log in"]})})]})}),s.jsx("div",{className:"my-2",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center flex-wrap gapx-x-2 gap-y-2 w-full poppins",children:[s.jsx("span",{className:"text-gray-700 text-sm font-semibold cursor-pointer w-full text-center",onClick:()=>{f.push("/auth/register")},children:"Don't have an account? Sign up"}),s.jsx("span",{className:"text-gray-700 text-sm font-semibold cursor-pointer w-full text-center",onClick:()=>{},children:"Forgot Password"})]})})]})})})]})},v=()=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"h-screen md:py-12 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40 flex items-center justify-center",children:s.jsx("div",{className:"md:w-1/2",children:s.jsx(g,{})})})})},7406:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(7665);let a=r(8014).Z.get("quizzLoginData"),n="";a&&(n=JSON.parse(a));let i=s.Z.create({baseURL:"http://localhost:2001/api/v1",headers:{authorization:`${n?.token}`}})},1436:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>c,kS:()=>d,x4:()=>o});var s=r(448),a=r(8014);let n=a.Z.get("quizzLoginData"),i={user:n?JSON.parse(n):null},l=(0,s.oM)({name:"auth",initialState:i,reducers:{login:(e,t)=>{e.user=t.payload,a.Z.set("quizzLoginData",JSON.stringify(t.payload),{expires:1})},logout:e=>{e.user=null,a.Z.remove("quizzLoginData")}}}),{login:o,logout:d}=l.actions,c=l.reducer},522:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s});let s={AUTH:{register:"/auth/register",login:"/auth/login",sendOtp:"/auth/phone/send-otp"},TEST_URL:{getAll:"test/get-all",update:"test/update",create:"test/create",delete:"test/delete"},TEST_PAPER_URL:{getAll:"test-paper/get-all",update:"test-paper/update",create:"test-paper/create",delete:"test-paper/delete"},QUESTIONS_URL:{getAll:"/question/test-paper",updateQuestion:"question/only/update",updateOption:"question/option/update",create:"question/create-single",delete:"question/delete",upload:"upload"},QUESTION_TYPE_URL:{getAll:"question-type/get-all",update:"question-type/update",create:"question-type/create",delete:"question-type/delete"}}},1759:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5036);let a=(0,r(6843).createProxy)(String.raw`/home/sanjiv/Desktop/QuizzApp/client/src/components/page/auth/Index.tsx`),{__esModule:n,$$typeof:i}=a,l=a.default;r(2);let o=()=>s.jsx(l,{})},7809:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g,metadata:()=>m});var s=r(5036),a=r(2195),n=r.n(a);r(5023);var i=r(6843);let l=(0,i.createProxy)(String.raw`/home/sanjiv/Desktop/QuizzApp/client/src/app/storeProvider.tsx`),{__esModule:o,$$typeof:d}=l,c=l.default,u=(0,i.createProxy)(String.raw`/home/sanjiv/Desktop/QuizzApp/client/src/components/ReactQueryClientProvider.tsx`),{__esModule:p,$$typeof:x}=u;u.default;let h=(0,i.createProxy)(String.raw`/home/sanjiv/Desktop/QuizzApp/client/src/components/ReactQueryClientProvider.tsx#ReactQueryClientProvider`),m={title:"Create Next App",description:"Generated by create next app"};function g({children:e}){return s.jsx(c,{children:s.jsx(h,{children:s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:e})})})})}},5828:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)("/quizz",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,139,337,500,128,429],()=>r(8330));module.exports=s})();