(this["webpackJsonpreact-scrollama-example"]=this["webpackJsonpreact-scrollama-example"]||[]).push([[0],{14:function(e,t,r){e.exports=r(30)},30:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r(8),a=r(13),i=r(12),s=r(0),c=r.n(s),l=r(9),p=r.n(l),f=r(11),u=r(1),d=r.n(u),g=r(3),h=r.n(g);function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?M(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return P(this,r)}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I={position:"fixed",left:0,width:"100%",height:0,borderTop:"2px dashed black",zIndex:9999},R={fontSize:"12px",fontFamily:"monospace",margin:0,padding:6},k=function(e){var t=e.offsetMargin,r=e.offsetVal;return d.a.createElement("div",{style:S(S({},I),{},{top:t})},d.a.createElement("p",{style:R},"trigger: ",r))},A=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],C=function(e){w(r,e);var t=j(r);function r(e){var n;b(this,r),y(M(n=t.call(this,e)),"cb",{stepEnter:function(){return null},stepExit:function(){return null},stepProgress:function(){return null}}),y(M(n),"io",{}),y(M(n),"disconnectObserver",(function(e){return n.io[e]&&n.io[e].forEach((function(e){return e.disconnect()}))})),y(M(n),"stepElIds",[]),y(M(n),"viewH",window.innerHeight),y(M(n),"pageH",0),y(M(n),"offsetVal",0),y(M(n),"offsetMargin",0),y(M(n),"previousYOffset",0),y(M(n),"progressThreshold",0),y(M(n),"direction","down"),y(M(n),"updateDirection",(function(){window.pageYOffset>n.previousYOffset?n.direction="down":window.pageYOffset<n.previousYOffset&&(n.direction="up"),n.previousYOffset=window.pageYOffset})),y(M(n),"isReady",!1),y(M(n),"isEnabled",!1),y(M(n),"isDebug",!1),y(M(n),"progressMode",!1),y(M(n),"getStep",(function(e){var t=n[e];if(t&&t.current)return t.current;throw"Could not get step with id "+e})),y(M(n),"handleResize",(function(){n.viewH=window.innerHeight,n.pageH=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}(),n.setState({offsetMargin:n.offsetVal*n.viewH}),n.isReady&&(n.stepElIds.forEach((function(e){n.getStep(e).updateOffsetHeight()})),n.isEnabled&&n.updateIO())})),y(M(n),"handleEnable",(function(e){if(e&&!n.isEnabled){if(!n.isReady)return console.error("react scrollama: handleEnable() called before scroller was ready"),void(n.isEnabled=!1);n.updateIO()}!e&&n.isEnabled&&A.forEach(n.disconnectObserver),n.isEnabled=e})),y(M(n),"updateIO",(function(){A.forEach(n.disconnectObserver),n.updateStepAboveIO(),n.updateStepBelowIO(),n.progressMode&&n.updateStepProgressIO()})),y(M(n),"updateStepAboveIO",(function(){var e=n.state.offsetMargin;n.io.stepAbove=n.stepElIds.map((function(t){var r=n.getStep(t),o=-e+r.state.offsetHeight,a=e-n.viewH,i={rootMargin:"".concat(o,"px 0px ").concat(a,"px 0px")},s=new IntersectionObserver(n.intersectStepAbove,i);return s.observe(r.getDOMNode()),s}))})),y(M(n),"updateStepBelowIO",(function(){var e=n.state.offsetMargin;n.io.stepBelow=n.stepElIds.map((function(t){var r=n.getStep(t),o=-e,a=e-n.viewH+r.state.offsetHeight,i={rootMargin:"".concat(o,"px 0px ").concat(a,"px 0px")},s=new IntersectionObserver(n.intersectStepBelow,i);return s.observe(r.getDOMNode()),s}))})),y(M(n),"updateStepProgressIO",(function(){var e=n.state.offsetMargin;n.io.stepProgress=n.stepElIds.map((function(t){var r=n.getStep(t),o=-e+r.state.offsetHeight,a=e-n.viewH,i={rootMargin:"".concat(o,"px 0px ").concat(a,"px 0px"),threshold:n.createThreshold(r.state.offsetHeight)},s=new IntersectionObserver(n.intersectStepProgress,i);return s.observe(r.getDOMNode()),s}))})),y(M(n),"intersectStepAbove",(function(e){var t=H(e,1)[0];n.updateDirection();var r=n.state.offsetMargin,o=t.isIntersecting,a=t.boundingClientRect,i=a.top,s=a.bottom,c=t.target.id,l=i-r,p=s-r,f=n.getStep(c);o&&l<=0&&p>=0&&"down"===n.direction&&"enter"!==f.state.state&&n.notifyStepEnter(f,n.direction),!o&&l>-.5&&"up"===n.direction&&"enter"===f.state.state&&n.notifyStepExit(f,n.direction)})),y(M(n),"intersectStepBelow",(function(e){var t=H(e,1)[0];n.updateDirection();var r=n.state.offsetMargin,o=t.isIntersecting,a=t.boundingClientRect,i=a.top,s=a.bottom,c=t.target.id,l=i-r,p=s-r,f=n.getStep(c);o&&l<=0&&p>=0&&"up"===n.direction&&"enter"!==f.state.state&&n.notifyStepEnter(f,n.direction),!o&&p<0&&"down"===n.direction&&"enter"===f.state.state&&n.notifyStepExit(f,n.direction)})),y(M(n),"intersectStepProgress",(function(e){var t=H(e,1)[0];n.updateDirection();var r=t.isIntersecting,o=t.intersectionRatio,a=t.boundingClientRect.bottom,i=t.target.id,s=a-n.state.offsetMargin;r&&s>=0&&n.notifyStepProgress(n.getStep(i),o)})),y(M(n),"createThreshold",(function(e){for(var t=Math.ceil(e/n.progressThreshold),r=[],o=1/t,a=0;a<=t;a+=1)r.push(a*o);return r})),y(M(n),"notifyStepProgress",(function(e,t){void 0!==t&&e.progress(t);var r={element:e.getDOMNode(),data:e.getData(),progress:e.state.progress};"enter"===e.state.state&&n.cb.stepProgress(r)})),y(M(n),"notifyStepEnter",(function(e,t){e.enter(t);var r={element:e.getDOMNode(),data:e.getData(),direction:t};n.cb.stepEnter&&n.cb.stepEnter(r),n.progressMode&&n.notifyStepProgress(e)})),y(M(n),"notifyStepExit",(function(e,t){n.progressMode&&("down"===t&&e.state.progress<1&&n.notifyStepProgress(e,1),"up"===t&&e.state.progress>0&&n.notifyStepProgress(e,0)),e.exit(t);var r={element:e.getDOMNode(),data:e.getData(),direction:t};n.cb.stepExit&&n.cb.stepExit(r)}));var o=n.props,a=o.children,i=o.prefix,s=o.onStepEnter,c=o.onStepExit,l=o.onStepProgress,p=o.offset,f=o.progress,u=o.threshold,g=o.debug;return d.a.Children.forEach(a,(function(e,t){var r="scrollama-".concat(i?i+"-":"").concat(t);n[r]=d.a.createRef(),n.stepElIds.push(r)})),p&&!isNaN(p)&&(n.offsetVal=Math.min(Math.max(0,p),1)),n.cb.stepEnter=s,n.cb.stepExit=c,n.cb.stepProgress=l,n.isDebug=g,n.progressMode=f,n.progressThreshold=Math.max(1,+u),n.isReady=!0,n.state={offsetMargin:n.offsetVal*n.viewH},n}return m(r,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.domDidLoad.bind(this))}},{key:"domDidLoad",value:function(){this.handleResize(),this.handleEnable(!0),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.domDidLoad.bind(this)),window.removeEventListener("resize",this.handleResize),this.handleEnable(!1)}},{key:"render",value:function(){var e=this;return d.a.createElement(u.Fragment,null,this.isDebug&&d.a.createElement(k,{offsetMargin:this.state.offsetMargin,offsetVal:this.offsetVal}),d.a.Children.map(this.props.children,(function(t,r){var n=e.stepElIds[r];return d.a.cloneElement(t,{id:n,ref:e[n]})})))}}]),r}(u.Component);C.defaultProps={offset:.33,progress:!1,threshold:4},C.propTypes={offsetVal:h.a.number,debug:h.a.bool,onStepEnter:h.a.func,onStepExit:h.a.func,onStepProgress:h.a.func};var N=function(e){w(r,e);var t=j(r);function r(){var e;b(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return y(M(e=t.call.apply(t,[this].concat(o))),"state",{direction:null,state:null,offsetHeight:null,progress:0}),y(M(e),"nodeRef",d.a.createRef()),y(M(e),"getDOMNode",(function(){return e.nodeRef.current})),y(M(e),"getData",(function(){return e.props.data})),y(M(e),"updateOffsetHeight",(function(){return e.setState({offsetHeight:e.getDOMNode().offsetHeight})})),y(M(e),"enter",(function(t){return e.setState({state:"enter",direction:t})})),y(M(e),"exit",(function(t){return e.setState({state:"exit",direction:t})})),y(M(e),"progress",(function(t){return e.setState({progress:t})})),e}return m(r,[{key:"render",value:function(){var e=this.props,t=e.id,r=e.children;return d.a.cloneElement(d.a.Children.only(r),{id:t,ref:this.nodeRef})}}]),r}(u.Component),z=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={data:0,steps:[10,20,30],progress:0},e.onStepEnter=function(t){var r=t.element,n=t.data;r.style.backgroundColor="lightgoldenrodyellow",e.setState({data:n})},e.onStepExit=function(t){var r=t.element,n=t.direction,o=t.data;r.style.backgroundColor="#fff","up"===n&&o===e.state.steps[0]&&e.setState({data:0})},e.onStepProgress=function(t){t.element;var r=t.progress;e.setState({progress:r})},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state,t=e.data,r=e.steps,n=e.progress,o=this.props.classes;return c.a.createElement("div",null,c.a.createElement("div",{className:o.navbar},c.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"GitHub")),c.a.createElement("p",{className:o.pageTitle},c.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"React Scrollama")," ","Example"),c.a.createElement("p",{className:o.pageSubtitle},"Scroll \u2193"),c.a.createElement("div",{className:o.graphicContainer},c.a.createElement("div",{className:o.scroller},c.a.createElement(C,{onStepEnter:this.onStepEnter,onStepExit:this.onStepExit,progress:!0,onStepProgress:this.onStepProgress,offset:.4,debug:!0},r.map((function(e){return c.a.createElement(N,{data:e,key:e},c.a.createElement("div",{className:o.step},c.a.createElement("p",null,"step value: ",e),c.a.createElement("p",null,"progress: ",e===t?Math.round(100*n):"","%")))})))),c.a.createElement("div",{className:o.graphic},c.a.createElement("p",null,t))))}}]),r}(s.PureComponent),T=Object(f.a)({navbar:{position:"fixed",display:"flex",top:0,right:0,zIndex:1,"& a":{display:"block",fontFamily:"Helvetica",fontSize:"20px",color:"#00e",padding:"20px"}},pageTitle:{fontFamily:"Helvetica",textAlign:"center",fontSize:"30px",margin:"110px 0 10px","& a":{color:"#00e"}},pageSubtitle:{margin:0,fontFamily:"Helvetica",textAlign:"center",fontSize:"24px",color:"#888"},graphicContainer:{padding:"40vh 2vw 70vh",display:"flex",fontFamily:"Helvetica",justifyContent:"space-between"},graphic:{flexBasis:"60%",position:"sticky",width:"100%",padding:"5rem 0",top:"160px",alignSelf:"flex-start",backgroundColor:"#aaa","& p":{fontSize:"5rem",textAlign:"center",color:"#fff"}},scroller:{flexBasis:"35%"},step:{margin:"0 auto 2rem auto",paddingTop:200,paddingBottom:200,border:"1px solid #333","& p":{textAlign:"center",padding:"1rem",fontSize:"1.5rem"},"&:last-child":{marginBottom:0}}})(z);p.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89dd6680.chunk.js.map