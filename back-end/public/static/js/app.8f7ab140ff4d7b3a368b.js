webpackJsonp([1],[,,,,,,,,,,function(t,e,s){"use strict";var i=s(51),a=s.n(i),n=function(t,e){var s=e.length;if(1===t)return[e[s-2],e[s-1]];for(var i=0;t<e[i].h||t>=e[i+1].h;)i++;var a=i===s?0:i+1;return[e[i],e[a]]},u=function(t,e,s,i,a){var n=i+(t-e)*(a-i)/(s-e);return Math.round(n)},M=function(t,e){var s=n(t,e),i=a()(s,2),M=i[0],r=i[1];return{r:u(t,M.h,r.h,M.r,r.r),g:u(t,M.h,r.h,M.g,r.g),b:u(t,M.h,r.h,M.b,r.b),a:255}},r=[{h:0,r:0,g:0,b:0},{h:.125,r:255,g:255,b:255},{h:.25,r:0,g:0,b:0},{h:.375,r:255,g:255,b:255},{h:.5,r:0,g:0,b:0},{h:.625,r:255,g:255,b:255},{h:.75,r:0,g:0,b:0},{h:.875,r:255,g:255,b:255},{h:1,r:0,g:0,b:0}],o=[{h:0,r:255,g:255,b:255},{h:.125,r:0,g:0,b:0},{h:.25,r:255,g:255,b:255},{h:.375,r:0,g:0,b:0},{h:.5,r:255,g:255,b:255},{h:.625,r:0,g:0,b:0},{h:.75,r:255,g:255,b:255},{h:.875,r:0,g:0,b:0},{h:1,r:255,g:255,b:255}],c=[{h:0,r:255,g:255,b:255},{h:.1,r:255,g:0,b:255},{h:.2,r:0,g:0,b:255},{h:.3,r:0,g:255,b:255},{h:.4,r:0,g:255,b:0},{h:.6,r:255,g:255,b:0},{h:.8,r:255,g:0,b:0},{h:1,r:0,g:0,b:0}],h=[{h:0,r:0,g:7,b:100},{h:.16,r:32,g:107,b:203},{h:.42,r:237,g:255,b:255},{h:.64,r:255,g:170,b:0},{h:.86,r:0,g:2,b:0},{h:1,r:0,g:7,b:100}];e.a={bw:r,wb:o,rb:c,wk:h,lg:M}},,,,,,,,,,function(t,e,s){"use strict";var i=s(102),a=s.n(i),n=s(38);e.a={props:["value"],methods:{draw:function(){this.$emit("progress",!0),this.interactions.unbind();var t=this.$el.getContext("2d"),e=this.getState(),s=t.createImageData(e.width,e.height);this.fworker.postMessage({image:s,params:e})}},mounted:function(){var t=this;this.fworker=new a.a,this.fworker.onmessage=function(e){t.$el.getContext("2d").putImageData(e.data.image,0,0),t.$emit("stat",e.data.stat),t.interactions.bind(),t.$emit("progress",!1)},this.interactions=n.a.create(this.$el,{move:function(e,s){(e||s)&&t.changeState(function(t){var i=t.x,a=t.y,n=t.zoom;return{x:i-e/n,y:a+s/n}})},zoomIn:function(){t.changeState(function(t){return{zoom:1.5*t.zoom}})},zoomOut:function(){t.changeState(function(t){return{zoom:t.zoom/1.5}})}}),this.draw()},beforeDestroy:function(){this.fworker.terminate()}}},,,,,,,,,,,,,,,,function(t,e,s){"use strict";var i=s(19),a=s(99),n=s(90),u=s.n(n);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",component:u.a},{path:"*",redirect:"/"}]})},function(t,e,s){s(87);var i=s(6)(s(40),s(98),null,null);t.exports=i.exports},function(t,e,s){"use strict";var i=s(48),a=s.n(i),n=s(49),u=s.n(n),M=function(){function t(){a()(this,t),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}return u()(t,[{key:"setup",value:function(t,e){this.elem=t,this.actions=e}},{key:"onMouseDown",value:function(t){this.cStart={x:t.clientX,y:t.clientY}}},{key:"onMouseUp",value:function(t){if(this.cStart){var e={x:t.clientX,y:t.clientY};this.actions.move(e.x-this.cStart.x,e.y-this.cStart.y),this.cStart=null}}},{key:"onKeyDown",value:function(t){switch(t.keyCode){case 107:case 187:this.actions.zoomIn();break;case 109:case 189:this.actions.zoomOut();break;default:return}}},{key:"onTouchStart",value:function(t){t.preventDefault();var e=t.targetTouches.length;1===e?(this.sx1=t.targetTouches[0].clientX,this.sy1=t.targetTouches[0].clientY,this.state=1):2===e?(this.sx1=t.targetTouches[0].clientX,this.sy1=t.targetTouches[0].clientY,this.sx2=t.targetTouches[1].clientX,this.sy2=t.targetTouches[1].clientY,this.state=2):this.state=0}},{key:"onTouchEnd",value:function(t){if(t.preventDefault(),1===this.state)this.ex1=t.changedTouches[0].clientX,this.ey1=t.changedTouches[0].clientY,this.actions.move(this.ex1-this.sx1,this.ey1-this.sy1);else if(2===this.state){this.ex1=t.changedTouches[0].clientX,this.ey1=t.changedTouches[0].clientY,t.changedTouches.length>1?(this.ex2=t.changedTouches[1].clientX,this.ey2=t.changedTouches[1].clientY):(this.ex2=t.targetTouches[0].clientX,this.ey2=t.targetTouches[0].clientY);var e=(this.sx1-this.sx2)*(this.sx1-this.sx2)+(this.sy1-this.sy2)*(this.sy1-this.sy2),s=(this.ex1-this.ex2)*(this.ex1-this.ex2)+(this.ey1-this.ey2)*(this.ey1-this.ey2);e>s?this.actions.zoomOut():this.actions.zoomIn()}this.state=0}},{key:"bind",value:function(){this.state=0,this.sx1=0,this.sy1=0,this.sx2=0,this.sy2=0,this.ex1=0,this.ey1=0,this.ex2=0,this.ey2=0,this.elem.addEventListener("mousedown",this.onMouseDown),this.elem.addEventListener("mouseup",this.onMouseUp),this.elem.addEventListener("keydown",this.onKeyDown),this.elem.addEventListener("touchstart",this.onTouchStart),this.elem.addEventListener("touchend",this.onTouchEnd)}},{key:"unbind",value:function(){this.elem.removeEventListener("mousedown",this.onMouseDown),this.elem.removeEventListener("mouseup",this.onMouseUp),this.elem.removeEventListener("keydown",this.onKeyDown),this.elem.removeEventListener("touchstart",this.onTouchStart),this.elem.removeEventListener("touchend",this.onTouchEnd)}}],[{key:"create",value:function(e,s){var i=new t;return i.setup(e,s),i}}]),t}();e.a=M},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(19),a=s(37),n=s.n(a),u=s(36);i.a.config.productionTip=!1,new i.a({el:"#app",router:u.a,template:"<App/>",components:{App:n.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(50),a=s.n(i),n=s(11),u=s.n(n),M=s(92),r=s.n(M),o=s(93),c=s.n(o),h=s(91),L=s.n(h),N=s(10);e.default={components:{FdrawR:r.a,FdrawRw:c.a,fchart:L.a},data:function(){return{params:{width:320,height:440,x:-1.37215516,y:.0109641665,zoom:498788,resolution:300,palette:N.a.wk},drawing:"",stat:[],palette:N.a.wk}},computed:{selectedPalette:function(){switch(this.params.palette){case N.a.bw:return"bw";case N.a.wb:return"wb";case N.a.rb:return"rb";case N.a.wk:return"wk";default:return"custom"}}},methods:{selectPalette:function(t){var e=N.a[t.target.value];this.params=u()({},this.params,{palette:e}),this.palette=e},pushToImmutable:function(t,e){var s=+e.target.value;!isNaN(s)&&s>0&&(this.params=u()({},this.params,a()({},t,s)))},progress:function(t){this.drawing=t?"Drawing...":"[+] [-] drag pinch"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(10);e.default={props:["stat","width","height","span","palette"],computed:{barStep:function(){return this.width/this.stat.length},barWidth:function(){return this.barStep*(1-this.span)}},watch:{palette:function(){this.showPalette()}},mounted:function(){this.showPalette()},methods:{showPalette:function(){for(var t=this,e=this.$refs.canvas,s=e.getContext("2d"),a=e.width,n=e.height,u=s.createImageData(a,n),M=0;M<n;M++)for(var r=0;r<a;r++){var o=4*(M*a+r),c=function(e){return i.a.lg(e,t.palette)}(r/a);u.data[o+0]=c.r,u.data[o+1]=c.g,u.data[o+2]=c.b,u.data[o+3]=c.a}s.putImageData(u,0,0)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(11),a=s.n(i),n=s(20),u=s(10),M={width:300,height:300,x:-.5,y:0,zoom:100,resolution:300,palette:u.a.bw};e.default={mixins:[n.a],methods:{changeState:function(t){this.state=a()({},this.state,t(this.state)),this.draw(),this.$emit("input",this.state)}},created:function(){var t=this;this.value&&"string"==typeof this.value.palette&&(this.value.palette=u.a[this.value.palette]),this.state=a()({},M,this.value),this.getState=function(){return t.state}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(11),a=s.n(i),n=s(20);e.default={mixins:[n.a],methods:{changeState:function(t){var e=a()({},this.value,t(this.value));this.$emit("input",e)}},watch:{value:function(){var t=this;this.$nextTick(function(){return t.draw()})}},created:function(){var t=this;this.getState=function(){return t.value}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIgZmlsbD0iIzAwMCIvPgo8L2c+Cjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjU2LDBDMTE0LjYxNSwwLDAsMTE0LjYxNSwwLDI1NnMxMTQuNjE1LDI1NiwyNTYsMjU2czI1Ni0xMTQuNjE1LDI1Ni0yNTZTMzk3LjM4NSwwLDI1NiwweiBNNDAzLjEyMSwxODAuNTQ0ICAgYzAuMTQ2LDMuMjU0LDAuMjIxLDYuNTI4LDAuMjIxLDkuODE5YzAsMTAwLjMxMS03Ni4zNTQsMjE1Ljk4Mi0yMTUuOTc5LDIxNS45ODJjLTQyLjg2OCwwLTgyLjc2OC0xMi41NjgtMTE2LjM2My0zNC4xMDYgICBjNS45MzgsMC43MDIsMTEuOTgxLDEuMDYyLDE4LjEwOCwxLjA2MmMzNS41NjUsMCw2OC4yOTUtMTIuMTM4LDk0LjI3NS0zMi40OTZjLTMzLjIxNy0wLjYxMS02MS4yNS0yMi41NjItNzAuOTEyLTUyLjcxNyAgIGM0LjYzNywwLjg4NSw5LjM5MiwxLjM2MSwxNC4yODMsMS4zNjFjNi45MjMsMCwxMy42MjktMC45MjgsMTkuOTk5LTIuNjYyYy0zNC43MjYtNi45NzctNjAuODkzLTM3LjY1Ni02MC44OTMtNzQuNDM0ICAgYzAtMC4zMiwwLTAuNjM5LDAuMDA4LTAuOTU1YzEwLjIzNSw1LjY4NSwyMS45MzksOS4xLDM0LjM4Miw5LjQ5NGMtMjAuMzctMTMuNjExLTMzLjc3LTM2Ljg0Ni0zMy43Ny02My4xODQgICBjMC0xMy45MTEsMy43NDQtMjYuOTUyLDEwLjI3OC0zOC4xNjJjMzcuNDM5LDQ1LjkyNyw5My4zNzQsNzYuMTQ2LDE1Ni40NjIsNzkuMzE0Yy0xLjI5NC01LjU1OS0xLjk2NS0xMS4zNTEtMS45NjUtMTcuMzAyICAgYzAtNDEuOTIsMzMuOTktNzUuOTA2LDc1LjkwOS03NS45MDZjMjEuODMyLDAsNDEuNTYyLDkuMjE4LDU1LjQwOCwyMy45N2MxNy4yOTEtMy40MDQsMzMuNTM3LTkuNzIxLDQ4LjIwNy0xOC40MiAgIGMtNS42NjgsMTcuNzI3LTE3LjcwNSwzMi42MDMtMzMuMzc3LDQxLjk5N2MxNS4zNTUtMS44MzQsMjkuOTg0LTUuOTE2LDQzLjU5OC0xMS45NTIgICBDNDMwLjgyNCwxNTYuNDcxLDQxNy45NTUsMTY5Ljg0LDQwMy4xMjEsMTgwLjU0NHoiIGZpbGw9IiMwMDAiLz4KPC9nPgo8L3N2Zz4K"},function(t,e,s){s(85);var i=s(6)(s(41),s(96),"data-v-3a7a549a",null);t.exports=i.exports},function(t,e,s){s(83);var i=s(6)(s(42),s(94),"data-v-1f401ac4",null);t.exports=i.exports},function(t,e,s){s(86);var i=s(6)(s(43),s(97),null,null);t.exports=i.exports},function(t,e,s){s(84);var i=s(6)(s(44),s(95),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{staticClass:"chart",attrs:{width:t.width,height:t.height}},t._l(t.stat,function(e,i){return s("g",{attrs:{transform:"translate("+i*t.barStep+","+t.height*(1-e)+")"}},[s("rect",{attrs:{width:t.barWidth,height:e*t.height}},[s("title",[t._v(t._s(i/t.stat.length+" : "+e.toPrecision(2)))])])])})),t._v(" "),s("canvas",{ref:"canvas",staticClass:"palette",attrs:{width:t.width,height:32}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{staticClass:"fcanvas",attrs:{tabindex:"-1",width:t.value.width,height:t.value.height}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"title bottom-span"},[t._v("Tools:")]),t._v(" "),s("div",{staticClass:"fpanel"},[s("input",{attrs:{title:"Width"},domProps:{value:t.params.width},on:{change:function(e){t.pushToImmutable("width",e)}}}),t._v(" "),s("span",[t._v("×")]),t._v(" "),s("input",{attrs:{title:"Height"},domProps:{value:t.params.height},on:{change:function(e){t.pushToImmutable("height",e)}}}),t._v(" "),s("span",{staticClass:"info"},[s("b",[t._v(t._s(t.drawing))])]),t._v(" "),s("br"),t._v(" "),s("input",{attrs:{title:"Resolution"},domProps:{value:t.params.resolution},on:{change:function(e){t.pushToImmutable("resolution",e)}}}),t._v(" "),s("select",{attrs:{title:"Palette"},domProps:{value:t.selectedPalette},on:{change:t.selectPalette}},[s("option",{attrs:{disabled:"",value:"custom"}},[t._v("Select palette")]),t._v(" "),s("option",{attrs:{value:"bw"}},[t._v("b&w")]),t._v(" "),s("option",{attrs:{value:"wb"}},[t._v("w&b")]),t._v(" "),s("option",{attrs:{value:"rb"}},[t._v("rainbow")]),t._v(" "),s("option",{attrs:{value:"wk"}},[t._v("wiki")])]),t._v(" "),s("div",{staticClass:"info"},[t._v("x:    "+t._s(t.params.x))]),t._v(" "),s("div",{staticClass:"info"},[t._v("y:    "+t._s(t.params.y))]),t._v(" "),s("div",{staticClass:"info"},[t._v("zoom: "+t._s(t.params.zoom))])]),t._v(" "),s("div",{staticClass:"title top-span"},[t._v("Color map:")]),t._v(" "),s("fdraw-rw",{staticClass:"top-span",on:{progress:t.progress,stat:function(e){t.stat=e}},model:{value:t.params,callback:function(e){t.params=e},expression:"params"}}),t._v(" "),s("div",{staticClass:"title top-span"},[t._v("Spectrum:")]),t._v(" "),s("fchart",{staticClass:"top-span",attrs:{stat:t.stat,width:"324",height:"120",span:"0.2",palette:t.palette}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{staticClass:"fcanvas",attrs:{tabindex:"-1",width:t.state.width,height:t.state.height}})},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),s("hr"),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{staticClass:"header"},[i("span",[t._v("Fractal Explorer")]),t._v(" "),i("a",{attrs:{href:"https://twitter.com/iurii_kyrylenko",target:"_blank",title:"Twitter"}},[i("img",{attrs:{src:s(89)}})]),t._v(" "),i("a",{attrs:{href:"https://github.com/iurii-kyrylenko",target:"_blank",title:"GitHub"}},[i("img",{attrs:{src:s(88)}})])])}]}},,,,function(t,e,s){t.exports=function(){return new Worker(s.p+"2a9278fadb3ad47613c2.worker.js")}}],[39]);