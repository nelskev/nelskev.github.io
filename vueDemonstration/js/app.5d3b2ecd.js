(function(){"use strict";var e={7048:function(e,a,t){var o=t(5130),n=t(6768);function i(e,a,t,o,i,s){const l=(0,n.g2)("NavBar"),r=(0,n.g2)("router-view"),d=(0,n.g2)("ThankYou");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),(0,n.bF)(r),i.showThankYou?((0,n.uX)(),(0,n.Wv)(d,{key:0})):(0,n.Q3)("",!0)],64)}const s={class:"navbar sticky-top navbar-expand-lg bg-body-tertiary"},l=(0,n.Fv)('<div class="container-fluid"><a class="navbar-brand" href="/#">House Browse</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link" href="/#slideshow">Slideshow</a><a class="nav-link" href="/#aboutUs">About Us</a><a class="nav-link" href="/#form">Contact Us</a></div></div></div>',1),r=[l];function d(e,a,t,o,i,l){return(0,n.uX)(),(0,n.CE)("nav",s,r)}var c={name:"NavBar",mounted(){const e=document.querySelectorAll(".needs-validation");Array.from(e).forEach((e=>{e.addEventListener("submit",(a=>{e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}))}},u=t(1241);const v=(0,u.A)(c,[["render",d]]);var f=v;const m=(0,n.Lk)("h1",null,"Thank you!",-1);function b(e,a,t,o,i,s){const l=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)(n.FK,null,[m,(0,n.Lk)("p",null,[(0,n.eW)("We have received your message and will get back to you shortly! You can "),(0,n.bF)(l,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("click here")])),_:1}),(0,n.eW)(" to go back to the homepage.")])],64)}var p={name:"ThankYou",components:{}};const h=(0,u.A)(p,[["render",b]]);var g=h,y={name:"App",components:{NavBar:f,ThankYou:g},data(){return{showThankYou:!1}},methods:{submitForm(){this.showThankYou=!0}}};const k=(0,u.A)(y,[["render",i]]);var w=k,x=t(1387),C=t.p+"img/house1.2b02f0eb.png",A=t.p+"img/house2.812c12f6.png",F=t.p+"img/house3.fe33b06e.png";const O=(0,n.Fv)('<div id="slideshow" class="carousel slide mt-5" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><div style="display:flex;justify-content:center;align-items:center;"><img src="'+C+'" style="margin:auto;" alt="Wooden House on a Hill"></div></div><div class="carousel-item"><div style="display:flex;justify-content:center;align-items:center;"><img src="'+A+'" style="margin:auto;" alt="Brick House in a Neighborhood"></div></div><div class="carousel-item"><div style="display:flex;justify-content:center;align-items:center;"><img src="'+F+'" style="margin:auto;" alt="Multilevel narrow houses side by side" width="1000"></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#slideshow" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#slideshow" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><br><div class="" id="aboutUs"><h2>About Us</h2><p>We are a company dedicated to finding our clients the best prices on houses. With the housing market, some houses can be inflated on their prices and unsuspecting buyers pay much more than they need to. Our team of experts looks at the housing market and finds the best value houses for sale. All that&#39;s left for you is to find the house you like and have ease of mind knowing you aren&#39;t being taken advantage of. </p></div>',3),P=(0,n.Fv)('<div class="col-md-4"><label for="validationCustom01" class="form-label">First name</label><input type="text" class="form-control" id="validationCustom01" placeholder="Mark" required><div class="valid-feedback"> Looks good! </div><div class="invalid-feedback"> Please provide a valid name. </div></div><div class="col-md-4"><label for="validationCustom02" class="form-label">Last name</label><input type="text" class="form-control" id="validationCustom02" placeholder="Otto" required><div class="valid-feedback"> Looks good! </div><div class="invalid-feedback"> Please provide a valid last name. </div></div><div class="col-md-6"><label for="validationCustom03" class="form-label">Email</label><input type="email" class="form-control" id="validationCustom03" placeholder="email@example.com" required><div class="valid-feedback"> Looks good! </div><div class="invalid-feedback"> Please provide a valid email address. </div></div><div class="col-md-3"><label for="validationCustom04" class="form-label">Phone Number</label><input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" id="validationCustom04" placeholder="111-111-1111" required><div class="valid-feedback"> Looks good! </div><div class="invalid-feedback"> Please enter a valid phone number in the format of 123-456-7890 </div></div><div class="col-mb-3"><label for="validationCustom05" class="form-label">Message</label><textarea class="form-control" id="validationCustom05" rows="3" placeholder="Message" required></textarea><div class="valid-feedback"> Looks good! </div><div class="invalid-feedback"> Please provide a message. </div></div><div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="invalidCheck" required><label class="form-check-label" for="invalidCheck"> Agree to terms and conditions </label><div class="invalid-feedback"> You must agree before submitting. </div></div></div><div class="col-12"><button class="btn btn-primary" type="submit">Submit form</button></div>',7),L=[P];function T(e,a,t,i,s,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[O,(0,n.Lk)("form",{class:"row g-3 needs-validation",novalidate:"",onSubmit:a[0]||(a[0]=(0,o.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"])),id:"form"},L,32)],64)}t(4114);var j={name:"MainSection",methods:{submitForm(){const e=document.querySelectorAll(".needs-validation");Array.from(e).forEach((e=>{e.checkValidity()?this.$router.push("/thankyou"):(event.preventDefault(),event.stopPropagation()),e.classList.add("was-validated")}))}},mounted(){},metaInfo:{title:"Foo Page"}};const E=(0,u.A)(j,[["render",T]]);var M=E;t(8077);const S=[{path:"/",component:M},{path:"/thankyou",component:g}],N=(0,x.aE)({history:(0,x.LA)(),routes:S});(0,o.Ef)(w).use(N).mount("#app")}},a={};function t(o){var n=a[o];if(void 0!==n)return n.exports;var i=a[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,o,n,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],i=e[c][2];for(var l=!0,r=0;r<o.length;r++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[r])}))?o.splice(r--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=n();void 0!==d&&(a=d)}}return a}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,n,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="VueDemonstration/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,o){var n,i,s=o[0],l=o[1],r=o[2],d=0;if(s.some((function(a){return 0!==e[a]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(r)var c=r(t)}for(a&&a(o);d<s.length;d++)i=s[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkvue_homepage"]=self["webpackChunkvue_homepage"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(7048)}));o=t.O(o)})();
//# sourceMappingURL=app.5d3b2ecd.js.map