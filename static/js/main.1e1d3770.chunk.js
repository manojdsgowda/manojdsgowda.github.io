(this.webpackJsonpmyprofile=this.webpackJsonpmyprofile||[]).push([[0],{64:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(17),i=a.n(n),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))},l=a(41),o=a.n(l),d=a(3);var j=function(e){var t=Object(s.useContext)(q);return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"cover-bg p-3 p-lg-4 text-white",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-4 col-md-5",children:Object(d.jsx)("div",{className:"avatar hover-effect bg-white shadow-sm",children:Object(d.jsx)("img",{src:t.display_picture,alt:"User name"})})}),Object(d.jsxs)("div",{className:"col-lg-8 col-md-7 text-center text-md-start",children:[Object(d.jsx)("h2",{className:"h1 mt-2","data-aos":"fade-left","data-aos-delay":"0",children:t.name}),Object(d.jsx)("p",{"data-aos":"fade-left","data-aos-delay":"100",children:t.designation}),Object(d.jsxs)("div",{className:"d-print-none","data-aos":"fade-left","data-aos-delay":"200",children:[Object(d.jsx)("a",{className:"btn btn-light text-dark shadow-sm mt-1 me-1",href:t.cv_link,target:"_blank",rel:"noopener noreferrer",children:"Download CV"}),Object(d.jsx)("a",{className:"btn btn-success shadow-sm mt-1",href:"#contact",children:"Hire Me"})]})]})]})})})};var m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)("div",{className:"pb-1",children:e.title})}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsx)("div",{className:"pb-1 text-secondary",children:e.datavalue})})]})};var b=function(){var e=Object(s.useContext)(q);return Object(d.jsx)("div",{className:"about-section pt-4 px-3 px-lg-4 mt-1",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h2",{className:"h3 mb-3",children:"About Me"}),Object(d.jsx)("p",{style:{textAlign:"justify"},children:e.about_me})]}),Object(d.jsx)("div",{className:"col-md-5 offset-md-1",children:Object(d.jsxs)("div",{className:"row mt-4",children:[Object(d.jsx)(m,{title:"Age",datavalue:e.age}),Object(d.jsx)(m,{title:"Experience",datavalue:e.totalExperience}),Object(d.jsx)(m,{title:"Email",datavalue:e.emailId}),Object(d.jsx)(m,{title:"Address",datavalue:e.address})]})})]})})};var u=function(){return Object(d.jsx)("hr",{className:"d-print-none"})};var h=function(e){return Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("span",{children:[" ",e.title," "]}),Object(d.jsx)("div",{className:"progress my-1",children:Object(d.jsx)("div",{className:"progress-bar bg-primary",role:"progressbar","data-aos":"zoom-in-right","data-aos-delay":"200","data-aos-anchor":".skills-section",style:{width:e.percentage+"%"},"aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"})})]})};function x(e){return Object(d.jsx)("div",{className:"col-md-6",children:e.children})}var O=function(){var e=Object(s.useContext)(q).professionalSkills.map((function(e,t){return Object(d.jsx)(x,{children:Object(d.jsx)(h,{title:e.skillName,percentage:e.rating})},t)}));return Object(d.jsxs)("div",{className:"skills-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-3",children:"Professional Skills"}),Object(d.jsx)("div",{className:"row",children:e})]})},p=a(19);function v(e){var t=e.details.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}));return Object(d.jsx)("ul",{children:t})}var g=function(e){return Object(d.jsx)("div",{className:"timeline-card timeline-card-primary card shadow-sm",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"h5 mb-1",children:[e.title,Object(d.jsxs)("span",{className:"text-muted h6",children:[" ",e.subtitle," "]})]}),Object(d.jsx)("div",{className:e.details?"text-muted text-small mb-2":"text-muted text-small",children:e.timeperiod}),e.details&&Object(d.jsx)("div",{children:Object(d.jsx)(v,{details:e.details})})]})})};var f=function(){var e=Object(s.useContext)(q).workExperience.map((function(e,t){return Object(s.createElement)(g,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return Object(d.jsxs)("div",{className:"work-experience-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-4",children:"Work Experience"}),Object(d.jsx)("div",{className:"timeline",children:e})]})};var N=function(){return Object(d.jsx)("div",{className:"page-break"})};var y=function(){var e=Object(s.useContext)(q).educationList.map((function(e,t){return Object(s.createElement)(g,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return Object(d.jsxs)("div",{className:"education-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-4",children:"Education"}),Object(d.jsx)("div",{className:"timeline",children:e})]})},w=a(26),k=a(86),S=a(87),C=a(43).a.initializeApp({apiKey:"AIzaSyAIVKYgjfjE-hkYCWfi3QEEzza1XG7ZmVs",authDomain:"manojdsgowda-3e3f6.firebaseapp.com",projectId:"manojdsgowda-3e3f6",storageBucket:"manojdsgowda-3e3f6.appspot.com",messagingSenderId:"131998572942",appId:"1:131998572942:web:3fa63294226918da7744df",measurementId:"G-MYBNH76M8Q",databaseURL:"https://manojdsgowda-3e3f6-default-rtdb.firebaseio.com/"}).database().ref();function E(e){return Object(d.jsx)(k.a,Object(p.a)({elevation:6,variant:"filled"},e))}var I=function(){var e=Object(s.useState)(""),t=Object(w.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(w.a)(n,2),r=i[0],l=i[1],o=Object(s.useState)(""),j=Object(w.a)(o,2),m=j[0],b=j[1],u=Object(s.useState)(!1),h=Object(w.a)(u,2),x=h[0],O=h[1],p=Object(s.useState)(""),v=Object(w.a)(p,2),g=v[0],f=v[1],N=Object(s.useState)(""),y=Object(w.a)(N,2),k=y[0],I=y[1],M=Object(s.useContext)(q),A=function(){O(!1)};return Object(d.jsxs)("div",{className:"contant-section px-3 px-lg-4 pb-4",id:"contact",children:[Object(d.jsx)("h2",{className:"h3 text mb-3",children:"Contact"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-7 d-print-none",children:Object(d.jsx)("div",{className:"my-2",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.child("profile-communications").push({name:a,emailId:r,message:m},(function(e){e?(console.log(e),f("Error occured while sending message, please try again"),I("error")):(c(""),l(""),b(""),f("Message sent successfully"),I("success")),O(!0)}))},children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("input",{className:"form-control",type:"text",id:"name",value:a,onChange:function(e){return c(e.target.value)},name:"name",placeholder:"Your Name",required:!0})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("input",{className:"form-control",type:"email",id:"email",value:r,onChange:function(e){return l(e.target.value)},name:"_replyto",placeholder:"Your E-mail",required:!0})})]}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("textarea",{className:"form-control",style:{resize:"none"},id:"message",value:m,onChange:function(e){return b(e.target.value)},name:"message",rows:"4",placeholder:"Your Message",required:!0})}),Object(d.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Send"})]})})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"mt-2",children:[Object(d.jsx)("h3",{className:"h6",children:"Address"}),Object(d.jsx)("div",{className:"pb-2 text-secondary",children:M.address}),Object(d.jsx)("h3",{className:"h6",children:"Email"}),Object(d.jsx)("div",{className:"pb-2 text-secondary",children:M.emailId})]})})]}),Object(d.jsx)(S.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:x,autoHideDuration:6e3,onClose:A,children:Object(d.jsx)(E,{onClose:A,severity:k,children:g})})]})};var M=function(e){return Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"cover shadow-lg bg-white",children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{}),Object(d.jsx)(u,{}),Object(d.jsx)(O,{}),Object(d.jsx)(u,{}),Object(d.jsx)(f,{}),Object(d.jsx)(u,{}),Object(d.jsx)(N,{}),Object(d.jsx)(y,{}),Object(d.jsx)(u,{}),Object(d.jsx)(u,{}),Object(d.jsx)(I,{})]})})})};var A=function(e){var t={color:e.color||null};return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("a",{className:"nav-link",href:e.pagelink,title:e.title,children:[Object(d.jsx)("i",{className:e.iclass,style:t}),Object(d.jsxs)("span",{className:"menu-title sr-only",children:[" ",e.title," "]})]})})};var L=function(e){var t=Object(s.useContext)(q).navigations.map((function(e,t){return Object(d.jsx)(A,{title:e.title,pagelink:e.pagelink,iclass:e.iclass,color:e.color},t)}));return Object(d.jsx)(d.Fragment,{children:t})};var D=function(){var e=Object(s.useContext)(q).name;return Object(d.jsx)("header",{className:"d-print-none",children:Object(d.jsx)("div",{className:"container text-center text-lg-left",children:Object(d.jsxs)("div",{className:"py-3 clearfix",children:[Object(d.jsxs)("h1",{className:"site-title mb-0",children:[" ",e," "]}),Object(d.jsx)("div",{className:"site-nav",children:Object(d.jsx)("nav",{role:"navigation",children:Object(d.jsx)("ul",{className:"nav justify-content-center",children:Object(d.jsx)(L,{})})})})]})})})};var P=function(e){var t=Object(s.useContext)(q);return Object(d.jsx)("footer",{className:"pt-4 pb-4 text-muted text-center d-print-none",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("div",{className:"h4",children:t.name}),Object(d.jsx)("div",{className:"footer-nav",children:Object(d.jsx)("nav",{role:"navigation",children:Object(d.jsx)("ul",{className:"nav justify-content-center",children:Object(d.jsx)(L,{})})})})]})})})},_={name:"Manoj D S",age:26,emailId:"manojdsgowda@gmail.com",totalExperience:"4 years",address:"Koppa, Karnataka - 577123 IN",designation:"Software Engineer",cv_link:"static/Manoj.pdf",display_picture:"static/images/avatar1.jfif",about_me:"Hello! I\u2019m Manoj D S. I am passionate programmer who loves to code. I am a professional React JS developer with 4 years of software development experience. Strong engineering professional in shaping business needs into engineering solutions by guaranteeing high quality of code, accessibility, security and scalability.",navigations:[{title:"Github",pagelink:"https://github.com/manojdsgowda",iclass:"fab fa-github",color:"black"},{title:"LinkedIn",pagelink:"https://www.linkedin.com/in/manoj-d-s-gowda/",iclass:"fab fa-linkedin",color:"#007bb6"}],professionalSkills:[{skillName:"React JS",rating:"95"},{skillName:"Redux",rating:"70"},{skillName:"Javascript",rating:"80"},{skillName:"HTML",rating:"80"},{skillName:"CSS",rating:"70"},{skillName:"Bootstrap",rating:"80"},{skillName:"LINQ",rating:"40"},{skillName:"C#",rating:"70"}],workExperience:[{title:"Software Engineer",subtitle:"Griha Software Technologies Pvt Ltd",timeperiod:"Jan 2019 - Present",details:["Working on React platform for application development","Development of Griha operations tool to handle and manager allocation process of the company","Implementation of Employee Recruitment System to track and update candidate interview process","Development of Leave Management System to apply and track employee leaves","Worked on Project Management Tool for managing the project activities of the company"]},{title:"Recruiter",subtitle:"ObjectWin Technology",timeperiod:"Aug 2017 - Aug 2018",details:["Screening CV\u2019s of candidates in line with the business requirement and arrange for their submission formally through the system","Conducting initial rounds of discussions with the candidates to ensure their skill set / experience is line with the business requirements","Arranging interviews for applicants, salary negotiation, etc","Preparing weekly reports in line with the customer specific business & requirements"]}],educationList:[{title:"Computer science and engineering",subtitle:"From Global Academy of Technology",timeperiod:"2013 - 2017",details:""}]},q=c.a.createContext();var z=function(e){return Object(s.useEffect)((function(){o.a.init({anchorPlacement:"top-left",duration:1e3})}),[]),Object(d.jsx)(q.Provider,{value:_,children:Object(d.jsxs)("div",{children:[Object(d.jsx)(D,{}),Object(d.jsx)(M,{}),Object(d.jsx)(P,{})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),r()}},[[64,1,2]]]);
//# sourceMappingURL=main.1e1d3770.chunk.js.map