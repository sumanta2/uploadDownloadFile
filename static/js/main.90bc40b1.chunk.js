(this.webpackJsonp37react_firebase=this.webpackJsonp37react_firebase||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},83:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(23),o=a.n(s),c=(a(70),a(13)),i=(a(71),a(9)),l=a(4),j=a(50),d=a(39),u=a.n(d),b=(a(56),a(63)),p=(a(73),a(3)),m={width:"270px",height:"31px",marginLeft:"0.5em",marginRight:"0.5em",marginBottom:"0.5em",color:"#461b1b",backgroundColor:"rgb(0 0 0 / 20%)",borderRadius:"5px"},O=function(e){var t=e.id,a=e.name,n=e.url,r=e.fileName;e.fileType,e.time;return r.split(".")[0].length>18&&(r=r.split(".")[0].substring(0,15)+"... ."+r.split(".")[1]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:t,className:"dataContainer",children:[Object(p.jsx)("p",{style:m,children:r}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)("h6",{children:["Owner: ",a]}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:n,target:"_blank",download:!0,children:Object(p.jsx)(b.a,{})})})]})]})})},h=function(e){var t=e.value;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",margin:"4px"},children:[null!=t&&Object.entries(t).reverse().map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]),n=a.id,r=a.imgUrl,s=a.name,o=a.fileName,i=a.fileType,l=a.time;return Object(p.jsx)(O,{name:s,url:r,fileName:o,fileType:i,time:l},n)})),null==t&&Object(p.jsx)("p",{children:"No Data found"})]})})},f=(a(75),a(57)),x=a.n(f),g=a(34),v=(a(54),function(e){var t=e.getData,a=e.setData,r=e.setProgress,s=e.imageData,o=e.setShowProgress,d=e.Url1,b="https://reactfirebaseconnection-default-rtdb.firebaseio.com/reactfirebase.json",m=Object(n.useState)({name:""}),O=Object(c.a)(m,2),f=O[0],v=O[1],y=Object(n.useState)({}),w=Object(c.a)(y,2),D=w[0],F=w[1];Object(n.useEffect)((function(){N()}),[]);var N=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(b);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,F(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error to fetch All Data");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r(0),!f.name||!d){e.next=18;break}return e.prev=4,o(!1),e.next=8,fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:(new Date).getTime().toString(),name:f.name,imgUrl:d,fileName:s.name,fileType:s.type,time:x()(new Date).format("Do MMM YYYY")})});case 8:n=e.sent,setTimeout((function(){a(!0)}),2e3),n&&(g.b.success("Data Inserted SuccessFully \ud83e\udd21",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),v({name:""}),N()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("Error for server side");case 16:e.next=19;break;case 18:""==d?alert("image was not upload properly please wait a while"):alert("Blank data not allowed/Please wait for properly upload the image");case 19:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"myForm myStyle",method:"POST",children:[Object(p.jsx)("h4",{children:"Enter Details"}),Object(p.jsxs)("div",{className:"",style:{margin:"10px"},children:[Object(p.jsx)("span",{style:{float:"left"},children:"Owner"}),Object(p.jsx)("input",{className:"inputStyle",style:{width:"170px",marginLeft:"33px"},type:"text",name:"name",placeholder:"Enter your name",value:f.name,onChange:function(e){var t=e.target,a=t.name,n=t.value;v((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},a,n))}))},autoComplete:"off",required:!0})]}),Object(p.jsx)("div",{className:"",style:{margin:"10px"},children:Object(p.jsx)("button",{className:"btn btn-outline-success",onClick:C,disabled:t,children:"Submit"})})]}),Object(p.jsx)(h,{value:D}),Object(p.jsx)(g.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),y=a(53);y.a.initializeApp({apiKey:"AIzaSyAk3O2p7HobLa9V4mkLxPiLeCBPwKxnZz0",authDomain:"reactfirebaseconnection.firebaseapp.com",databaseURL:"https://reactfirebaseconnection-default-rtdb.firebaseio.com",projectId:"reactfirebaseconnection",storageBucket:"reactfirebaseconnection.appspot.com",messagingSenderId:"574167705081",appId:"1:574167705081:web:d9378cfc4a271835d20928"});var w=y.a.storage(),D=a(58),F=a.n(D),N=a(62),C=(a(83),function(e){var t=e.myData,a=e.getProgress,r=e.setProgress,s=e.setImageData,o=e.showProgress,i=e.setShowProgress,j=e.setUrl1,d=Object(n.useState)(),u=Object(c.a)(d,2),b=(u[0],u[1]),m=Object(n.useState)(""),O=Object(c.a)(m,2),h=(O[0],O[1],Object(N.a)({onDrop:function(e){b(e[0]),s({name:e[0].name,type:e[0].type}),i(!0),w.ref(e[0].name).put(e[0]).on("state_changed",(function(e){r(Math.round(e.bytesTransferred/e.totalBytes*100)-1)}),(function(e){console.log(e),g.b.error("Already one file in this name are present \ud83e\udd21",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i(!1),r(0)}),(function(){w.ref().child(e[0].name).getDownloadURL().then((function(e){r(100),t(!1),j(e),g.b.success("Upload Files SuccessFully \ud83e\udd21",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}))}})),f=h.getRootProps,x=h.getInputProps,v=h.isDragActive;return Object(p.jsxs)(p.Fragment,{children:[o&&Object(p.jsxs)("div",{className:"progressBar",children:["  ",Object(p.jsx)(F.a,{completed:a})," "]}),Object(p.jsxs)("div",Object(l.a)(Object(l.a)({className:"dragFile"},f()),{},{style:{display:"".concat(o?"none":"")},children:[Object(p.jsx)("input",Object(l.a)({},x())),v?"Drop it like it's hot!":"Click me or drag a file to upload!"]})),Object(p.jsx)(g.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})});var S=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),o=Object(c.a)(s,2),i=o[0],l=o[1],j=Object(n.useState)({name:"",type:""}),d=Object(c.a)(j,2),u=d[0],b=d[1],m=Object(n.useState)(!1),O=Object(c.a)(m,2),h=O[0],f=O[1],x=Object(n.useState)(""),g=Object(c.a)(x,2),y=g[0],w=g[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{myData:r,getProgress:i,setProgress:l,setImageData:b,showProgress:h,setShowProgress:f,setUrl1:w}),Object(p.jsx)(v,{getData:a,setData:r,setProgress:l,imageData:u,setShowProgress:f,Url1:y})]})},k=a(16),P=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h4",{children:"Rules of using this website:-"}),"Here You can upload your file and download Your file from anywhere.",Object(p.jsx)("br",{}),"No need any login and logout operation.",Object(p.jsx)("br",{}),"It is free for everyone.",Object(p.jsx)("br",{}),"After 10 days of uploading the files are deleted.",Object(p.jsx)("br",{}),"Anyone can download this file which You upload here.",Object(p.jsx)("br",{})]})};function T(){var e=Object(n.useState)({name1:"",details:""}),t=Object(c.a)(e,2),a=t[0],r=t[1],s=function(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},a,n))}))};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h4",{children:"Enter Details Here"}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Your Name"}),Object(p.jsx)("input",{type:"text",name:"name1",onChange:s,value:a.name1,className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Your Name"})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Details Information"}),Object(p.jsx)("textarea",{placeholder:"Enter Some Information",onChange:s,value:a.details,name:"details",className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(p.jsx)("button",{type:"submit",className:"btn mx-2 my-2 btn-outline-success",onClick:function(e){e.preventDefault(),console.log("FormData is",a),r((function(e){return{name1:"",details:""}}))},children:"Submit"})]})}var I=a(101),B=a(100),L=a(102),U=a(36),A=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{bg:"dark",variant:"dark",children:Object(p.jsxs)(B.a,{children:[Object(p.jsx)(I.a.Brand,{href:"/uploadDownloadFile",children:"Upload Files"}),Object(p.jsxs)(L.a,{className:"me-right",children:[Object(p.jsx)(L.a.Link,{href:"/uploadDownloadFile/about",children:"About"}),Object(p.jsx)(L.a.Link,{href:"/uploadDownloadFile/contact",children:"Contact"}),Object(p.jsx)(U.b,{style:{textDecoration:"none"},to:"/uploadDownloadFile/contact",children:"contact"})]})]})})})},E=(a(95),function(){return Object(p.jsx)("div",{className:"myFooter",children:Object(p.jsx)("span",{className:"fstyle",children:" This Website is design and developed Using ReactJs "})})}),Y=function(){return Object(p.jsx)("div",{children:"Sorry Page Not Found"})},H=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{}),Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(k.a,{exact:!0,path:"/uploadDownloadFile",component:S}),Object(p.jsx)(k.a,{path:"/uploadDownloadFile/contact",component:T}),Object(p.jsx)(k.a,{path:"/uploadDownloadFile/about",component:P}),Object(p.jsx)(k.a,{component:Y})]}),Object(p.jsx)(E,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};a(96);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(U.a,{children:Object(p.jsx)(H,{})})}),document.getElementById("root")),R()}},[[97,1,2]]]);
//# sourceMappingURL=main.90bc40b1.chunk.js.map