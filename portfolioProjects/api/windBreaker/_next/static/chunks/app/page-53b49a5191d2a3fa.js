(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6655:function(e,t,n){Promise.resolve().then(n.bind(n,2848))},2848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var i=n(3827);async function a(e){return await fetch("http://api.weatherapi.com/v1/current.json?key=36279875f3bd444e934214049221502&q=".concat(e,"&aqi=no")).then(e=>e.json())}var s=n(4090),c=n(4454),r=n.n(c);function o(){let[e,t]=(0,s.useState)("Flor"),[n,c]=(0,s.useState)("west p"),[o,u]=(0,s.useState)(),[l,d]=(0,s.useState)(),[h,p]=(0,s.useState)(),[f,_]=(0,s.useState)("33406");return(0,s.useEffect)(()=>{a(f).then(e=>{c(e.location.name),t(e.location.region),u(e.current.temp_f),p(e.current.is_day),d(e.current.condition.icon)}).catch(e=>{alert("Search city name or zipcode and ty again"),console.log(e)})},[f]),(0,i.jsxs)("main",{className:"".concat(r().main," ").concat(1==h?"isDay":"isNight"),children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),_(e.target[0].value),e.target[0].value=""},children:[(0,i.jsx)("input",{type:"text",placeholder:"city name or zipcode"}),(0,i.jsx)("input",{type:"submit"})]}),(0,i.jsx)("h4",{className:r().ViewMobile,children:"** for best experience, view mobile **"}),(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:r().contentContainer,children:[(0,i.jsxs)("h2",{children:[Math.ceil(o),(0,i.jsx)("sup",{children:"\xb0"}),"F"]}),(0,i.jsx)("img",{src:l}),(0,i.jsxs)("h3",{children:[n.slice(0,5),",",e.slice(0,5)]}),(0,i.jsx)("h1",{children:(()=>{let e;let t=new Date().getDay();return 0===t?e="Sunday":1===t?e="Monday":2===t?e="Tuesday":3===t?e="Wednesday":4===t?e="Thurssday":5===t?e="Friday":6===t&&(e="Saturday"),e})()})]})})]})}},4454:function(e){e.exports={main:"page_main__nw1Wk",ViewMobile:"page_ViewMobile__ROjk9",contentContainer:"page_contentContainer__f18zT","slide-right":"page_slide-right__Dr2pP"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=6655)}),_N_E=e.O()}]);