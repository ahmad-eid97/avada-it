(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{397:function(o,t,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(82).default)("2c083409",content,!0,{sourceMap:!1})},457:function(o,t,n){"use strict";n(397)},458:function(o,t,n){var e=n(81)(!1);e.push([o.i,".coming-soon-area{position:relative;height:100vh;overflow:hidden;background-color:#fff}.d-table{width:100%;height:100%}.d-table-cell{display:table-cell;vertical-align:middle}@media only screen and (min-width: 1200px){.container{max-width:1170px}}.coming-soon-area .coming-soon-content{text-align:center;max-width:750px;margin-left:auto;margin-right:auto;position:relative;z-index:2;padding:50px 30px;border-radius:0px;background-color:#f8f8f8;border:3px solid var(--main-color);border-radius:15px}.coming-soon-area .coming-soon-content h1{margin-bottom:0;color:#212934;font-size:50px}@media(max-width: 576px){.coming-soon-area .coming-soon-content h1{font-size:30px}}.coming-soon-area .coming-soon-content p{font-size:16px;max-width:600px;margin-top:15px;margin-bottom:0;margin-left:auto;margin-right:auto;color:#444}.coming-soon-area .coming-soon-content #timer{margin-top:40px;display:block}#days{margin-bottom:10px !important}.coming-soon-area .coming-soon-content #timer div:first-child{margin-left:0}.coming-soon-area .coming-soon-content #timer div{display:inline-block;color:#fff;position:relative;width:80px;height:80px;margin:0 10px;margin-left:10px;font-size:35px;font-weight:700;background-color:var(--main-color);border-radius:10px}@media(max-width: 576px){.coming-soon-area .coming-soon-content #timer div{margin:5px 10px !important;margin-left:0px !important}}.coming-soon-area .coming-soon-content #timer div span{display:block;font-size:10px}.coming-soon-area .coming-soon-content .newsletter-form{position:relative;max-width:500px;margin-left:auto;margin-right:auto;margin-top:50px}.coming-soon-area .coming-soon-content .newsletter-form .input-newsletter{display:block;width:100%;height:60px;border:none;background-color:#fff;padding-left:15px;color:#fff;outline:0;-webkit-transition:.5s;transition:.5s;border-radius:0;border:1px solid var(--main-color);color:#5d5d5d}.coming-soon-area .coming-soon-content ul{list-style:none;margin-top:30px;padding:0}.coming-soon-area .coming-soon-content ul li{display:inline-block;width:45px;height:45px;line-height:50px;font-size:18px;background-color:var(--main-color);color:#fff;border-radius:50px;margin-right:10px}.coming-soon-area .coming-soon-content ul li a{color:#fff}.coming-soon-area .coming-soon-content .newsletter-form button{position:absolute;right:0;top:0;height:60px;padding:0 30px;text-transform:uppercase;outline:0;color:#fff;-webkit-transition:.5s;transition:.5s;font-weight:500;font-size:15px;cursor:pointer}.coming-soon-area .btn,.coming-soon-area .btn:hover{background-color:var(--main-color);border-radius:0;color:#fff;padding:10px 16px;font-weight:bold;border:none}",""]),o.exports=e},529:function(o,t,n){"use strict";n.r(t);n(57);var e={name:"Soon",data:function(){return{countDownDate:{time:0,days:0,hours:0,seconds:0,minutes:0}}},mounted:function(){var o=this,t=document.getElementById("timer");setInterval((function(){o.countDownDate.time=new Date(t.getAttribute("data-date")).getTime();var n=(new Date).getTime(),e=o.countDownDate.time-n;o.countDownDate.days=Math.floor(e/864e5),o.countDownDate.hours=Math.floor(e%864e5/36e5),o.countDownDate.minutes=Math.floor(e%36e5/6e4),o.countDownDate.seconds=Math.floor(e%6e4/1e3),e<0&&(o.countDownDate.days=0,o.countDownDate.hours=0,o.countDownDate.minutes=0,o.countDownDate.seconds=0)}),1e3)}},r=(n(457),n(73)),component=Object(r.a)(e,(function(){var o=this,t=o._self._c;return t("div",{staticClass:"coming-soon-area"},[t("div",{staticClass:"d-table"},[t("div",{staticClass:"d-table-cell"},[t("div",{staticClass:"container"},[t("div",{staticClass:"coming-soon-content"},[t("h1",[o._v("Coming Soon")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis\n            ipsum suspendisse ultrices.\n          ")]),o._v(" "),t("div",{attrs:{id:"timer","data-date":new Date((new Date).getTime()+1728e5)}},[t("div",{attrs:{id:"days"}},[o._v(o._s(o.countDownDate.days)+" "),t("span",[o._v("Days")])]),o._v(" "),t("div",{attrs:{id:"hours"}},[o._v(o._s(o.countDownDate.hours)+" "),t("span",[o._v("Hours")])]),o._v(" "),t("div",{attrs:{id:"minutes"}},[o._v(o._s(o.countDownDate.minutes)+" "),t("span",[o._v("Minutes")])]),o._v(" "),t("div",{attrs:{id:"seconds"}},[o._v(o._s(o.countDownDate.seconds)+" "),t("span",[o._v("Seconds")])])]),o._v(" "),o._m(0),o._v(" "),t("ul",{staticClass:"header-content-right"},[t("li",[t("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook-f"}})],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://twitter.com/?lang=en",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-twitter"}})],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin-in"}})],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram"}})],1)])])])])])])])}),[function(){var o=this,t=o._self._c;return t("form",{staticClass:"newsletter-form",attrs:{"data-toggle":"validator",novalidate:"true"}},[t("input",{staticClass:"input-newsletter",attrs:{type:"email",placeholder:"Enter email address",name:"EMAIL",required:"",autocomplete:"off"}}),o._v(" "),t("button",{staticClass:"btn",staticStyle:{"pointer-events":"all",cursor:"pointer"},attrs:{type:"submit"}},[o._v("\n              Notify Me\n            ")]),o._v(" "),t("div",{staticClass:"form-result",attrs:{id:"validator-newsletter"}})])}],!1,null,null,null);t.default=component.exports}}]);