(function(t){function a(a){for(var s,n,o=a[0],c=a[1],l=a[2],u=0,g=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(a);while(g.length)g.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fa9e8e6c"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,e[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"1c00":function(t,a,e){},"3b8a":function(t,a,e){t.exports=e.p+"img/pp-job.6023c84b.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n=(e("034f"),e("2877")),o={},c=Object(n["a"])(o,i,r,!1,null,null,null),l=c.exports,u=(e("d3b7"),e("8c4f")),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"home"},[e("Particles")],1)])},g=[],d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-particles",attrs:{id:"app"}},[s("b-container",{attrs:{id:"top"}},[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[s("b-navbar-brand",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3},expression:"{ duration: 3000 }"}],attrs:{href:"#top"}},[t._v("BAGAS")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3},expression:"{ duration: 3000 }"}],attrs:{href:"#top"}},[t._v("Home")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3,offset:50},expression:"{ duration: 3000, offset: 50 }"}],attrs:{href:"#about"}},[t._v("About")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3,offset:250},expression:"{ duration: 3000, offset: 250 }"}],attrs:{href:"#project"}},[t._v("Portfolio")])])],1)],1)],1)],1),s("div",{staticClass:"title",attrs:{id:"about","data-aos":"fade-up","data-aos-duration":"2000"}},[s("p",[t._v("Hi There, I'm")]),s("h1",[t._v("Bagas Afrizal")]),s("h3",[t._v(" I am a "),s("span",{staticClass:"typed-text"},[t._v(t._s(t.typeValue))]),s("span",{staticClass:"cursor",class:{typing:t.typeStatus}})])]),s("Particles",{attrs:{id:"tsparticles",options:{background:{color:{value:"#000"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}}),s("section",[s("div",{staticClass:"about"},[s("b-container",[s("b-row",{staticClass:"content-about"},[s("b-col",{attrs:{cols:"12"}},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"4","data-aos":"fade-right","data-aos-duration":"2000"}},[s("img",{attrs:{src:e("3b8a"),alt:"",srcset:""}})]),s("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"7",lg:"8","data-aos":"fade-left","data-aos-duration":"2000"}},[s("h6",[t._v("Full Stack Developer & Traveller.")]),s("h6",[t._v("Based in Tangerang, Banten, Indonesia.")]),s("p",{staticClass:"mb-2"},[t._v(" I am a Full Stack Developer who is very interested in the world of technology. Experience using JS, Express JS, and Node Vue JS in developing web applications. Previously, he made a Point Of Sale, Payment Gateway, Job application Portal and Real Time Chat using Vue JS as Front-end and Express JS as Back-end. I have adaptability and teamwork. ")]),s("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/bagasss_i",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),s("a",{staticClass:"instagram",attrs:{href:"https://instagram.com/bagas.afrz",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),s("a",{staticClass:"linkedin",attrs:{href:"https://linkedin.com/in/bagas-afrizal/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),s("a",{staticClass:"github",attrs:{href:"https://github.com/bagasafrz7",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}}),s("br")],1),s("div",{staticClass:"btn-contact"},[s("a",{staticClass:"mt-2",attrs:{href:"https://linkedin.com/in/bagas-afrizal/",target:"_blank"}},[s("span"),s("span"),s("span"),s("span"),t._v(" Contact Me ")])])])],1)],1)],1)],1)],1)]),s("section",{staticClass:"page-blog",attrs:{id:"project"}},[s("div",{staticClass:"project"},[s("b-container",[s("h2",[t._v("My Portfolio")]),s("b-row",{staticClass:"main-project"},[s("b-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"4","data-aos":"zoom-in","data-aos-duration":"2000"}},[s("div",{staticClass:"cards"},[s("div",{staticClass:"card-img"},[s("VuePureLightbox",{staticStyle:{width:"300px",height:"150px"},attrs:{thumbnail:"https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Space/banner-image.png",images:t.imageSpace}})],1),s("div",{staticClass:"content-card text-left"},[s("h2",[t._v("SPACE POS")]),s("p",[t._v(" SPACE POS Apps is a web-based point of sale application that is used to support food and beverage sales, and is equipped with admin / cashier dashboard features, to payment transactions. This application is built with Vue JS and Express JS. ")]),s("a",{attrs:{href:"https://pos-space.netlify.app/",target:"_blank"}},[t._v("View Project")])])])]),s("b-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"4","data-aos":"zoom-in","data-aos-duration":"2000"}},[s("div",{staticClass:"cards"},[s("div",{staticClass:"card-img"},[s("VuePureLightbox",{staticStyle:{width:"300px",height:"150px"},attrs:{thumbnail:"https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Nepays/banner-img.jpg",images:t.imageNepays}})],1),s("div",{staticClass:"content-card text-left"},[s("h2",[t._v("Nepays Apps")]),s("p",[t._v(" Nepays Apps is a website-based payment gateway application that is used to transfer money and top up balances digitally. The top up feature is integrated with Midtrans. This application was built with the team using Vue JS and Express JS. ")]),s("a",{attrs:{href:"https://nepays.netlify.app/",target:"_blank"}},[t._v("View Project")])])])]),s("b-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"4","data-aos":"zoom-in","data-aos-duration":"2000"}},[s("div",{staticClass:"cards"},[s("div",{staticClass:"card-img"},[s("VuePureLightbox",{staticStyle:{width:"300px",height:"150px"},attrs:{thumbnail:"https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Covid-Track/smartmockups_kgsyw4x1.png",images:t.imageCovid}})],1),s("div",{staticClass:"content-card text-left"},[s("h2",[t._v("Covid Track")]),s("p",[t._v(" Covid Track is an application that contains information about the number of cases of Covid-19 sufferers around the world. Always update data for all countries every day. This application is built using React JS as the front-end and the data uses public API. ")]),s("a",{attrs:{href:"https://pandemi-data.netlify.app/",target:"_blank"}},[t._v("View Project")])])])]),s("b-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"4","data-aos":"zoom-in","data-aos-duration":"2000"}},[s("div",{staticClass:"cards"},[s("div",{staticClass:"card-img"},[s("VuePureLightbox",{staticStyle:{width:"300px",height:"150px"},attrs:{thumbnail:"https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Badag/badag-landing.jpg",images:t.imageBadag}})],1),s("div",{staticClass:"content-card text-left"},[s("h2",[t._v("BADAG Apps")]),s("p",[t._v(" BADAG Apps is a website-based job portal application to find jobs for job seekers and find workers. It features real-time chat and a standard profile. This application was built with a team using Vue JS and Express JS. ")]),s("a",{attrs:{href:"https://badag.netlify.app/",target:"_blank"}},[t._v("View Project")])])])]),s("b-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"4","data-aos":"zoom-in","data-aos-duration":"2000"}},[s("div",{staticClass:"cards"},[s("div",{staticClass:"card-img"},[s("VuePureLightbox",{staticStyle:{width:"300px",height:"150px"},attrs:{thumbnail:"https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Play-Chat/smartmockups_kggoc1f2.jpg",images:t.imagePlay}})],1),s("div",{staticClass:"content-card text-left"},[s("h2",[t._v("Play Chat Apps")]),s("p",[t._v(" Play Chat application is a web-based chat application that is used to interact online. Has a feature to find friends, current location and can send messages in real-time. This application is built using Vue JS and Express JS. ")]),s("a",{attrs:{href:"https://play-chat.netlify.app/",target:"_blank"}},[t._v("View Project")])])])])],1)],1)],1)]),s("section",{attrs:{id:"bottom"}},[s("div",{staticClass:"akses-top text-center"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3},expression:"{ duration: 3000 }"}],attrs:{href:"#top",fixed:"bottom"}},[t._v("TOP")])])])],1)},h=[],b=e("c107"),m=e.n(b),f={data:function(){return{typeValue:"",typeStatus:!1,typeArray:["Full Stack Developer","Traveller"],typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typeArrayIndex:0,charIndex:0,imageSpace:["https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Space/banner-image.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Space/LoginPage.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Space/HomePageRev.png"],imageBadag:["https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Badag/badag-landing.jpg","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Badag/landing.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Badag/home-fix.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Badag/hire-fix.png"],imageNepays:["https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Nepays/banner-img.jpg","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Nepays/fix-landing1.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Nepays/login1.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Nepays/home1.png"],imageCovid:["https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Covid-Track/smartmockups_kgsyw4x1.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Covid-Track/pc.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Covid-Track/tablet.png"],imagePlay:["https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Play-Chat/smartmockups_kggoc1f2.jpg","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Play-Chat/select.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Play-Chat/fix-chat.png","https://raw.githubusercontent.com/bagasafrz7/bagasafrz7.github.io/master/img/Image/Play-Chat/fix-friend.png"]}},methods:{typeText:function(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,setTimeout(this.typeText,this.typingSpeed+1e3),2===this.typeArrayIndex&&(this.typeArrayIndex=0))}},created:function(){setTimeout(this.typeText,this.newTextDelay+200)},components:{VuePureLightbox:m.a}},v=f,y=(e("eb30"),Object(n["a"])(v,d,h,!1,null,"396599c0",null)),w=y.exports,x={name:"Home",components:{Particles:w}},z=x,C=(e("9cb2"),Object(n["a"])(z,p,g,!1,null,"730d73db",null)),_=C.exports;s["default"].use(u["a"]);var S=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],k=new u["a"]({mode:"history",base:"/",routes:S}),P=k,I=e("d7da"),T=e("5f5b"),j=e("b1e0"),A=(e("f9e3"),e("2dd8"),e("ecee")),V=e("ad3d"),O=e("f2d1"),J=e("e660"),E=e("0f05"),N=e.n(E),B=e("8cb8"),L=e("f5af"),D=e.n(L),M=(e("e829"),e("b25f")),H=e.n(M);s["default"].use(H.a),s["default"].use(B["VueTypedJs"]),s["default"].use(N.a),s["default"].use(m.a),A["c"].add(O["a"],O["c"],O["d"],O["b"],O["e"]),s["default"].config.productionTip=!1,s["default"].use(I["a"]),s["default"].use(T["a"]),s["default"].use(j["a"]),s["default"].component("font-awesome-icon",V["a"]),s["default"].use(J["a"]),new s["default"]({router:P,created:function(){D.a.init()},render:function(t){return t(l)}}).$mount("#app")},6273:function(t,a,e){},"85ec":function(t,a,e){},"9cb2":function(t,a,e){"use strict";e("6273")},eb30:function(t,a,e){"use strict";e("1c00")}});
//# sourceMappingURL=app.50435212.js.map