(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),o=a.n(l),i=a(40),c=(a(23),a(4)),r=a(5),u=a(8),d=a(6),m=a(9),h=(a(25),a(42)),p=a(41),f=a(15),v=(a(27),function(e){var t=e.className,a=e.value,n=e.id,l=e.onClick;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:t,id:n,onClick:l}," ",a," "))}),E=(a(29),function(e){var t=e.handleClose,a=e.show,n=e.customClassName,l=e.children,o=a?"modal display-block":"modal display-none",i=n||null;return s.a.createElement("div",{className:o},s.a.createElement("section",{className:"modal-main"},s.a.createElement(v,{className:"close-button",onClick:t,value:"close"}),s.a.createElement("div",{className:i},l)))}),g=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className,a=this.props.options;return s.a.createElement("div",null,s.a.createElement("select",{className:t,onChange:function(t){return e.props.onChange&&e.props.onChange(t.target.value)}},a&&a.map(function(e,t){return s.a.createElement("option",{key:t,value:e.value?e.value:null},e.optionText)})))}}]),t}(s.a.Component),S=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showSlides=function(e){var t,n=document.querySelectorAll(".mySlides"),s=document.querySelector(".slideshow-container");if(s.style.display="none",n.length>0){for(e>n.length&&(a.slideIndex=1),e<1&&(a.slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[a.slideIndex-1].style.display="block",s.style.display="block"}},a.plusSlides=function(e){a.showSlides(a.slideIndex+=e)},a.slideIndex=1,a.slideArray=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","twenty"],a.state={show:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.showSlides(this.slideIndex)}},{key:"componentDidUpdate",value:function(){this.showSlides(this.slideIndex)}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.numberOfSlides;a++)t.push(s.a.createElement("div",{className:"mySlides fade",key:a},s.a.createElement("div",{className:"side-text"},a+1,"/",this.props.numberOfSlides),s.a.createElement("div",{className:"text"},this.slideArray[a])));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"slideshow-container"},t,s.a.createElement("a",{className:"prev",onClick:function(){return e.plusSlides(-1)}},"\u276e"),s.a.createElement("a",{className:"next",onClick:function(){return e.plusSlides(1)}},"\u276f")))}}]),t}(s.a.Component)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getSelectedValue=function(e){"Select Slides"!==e&&a.setState(function(t){return{selectedValues:[].concat(Object(f.a)(t.selectedValues),[e])}}),a.setState({slides:e})},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.state={dropDownArray:[],slides:0,selectedValues:[],show:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){for(var e=[],t=0;t<=20;t++)e.push({id:t,value:t,optionText:0===t?"Select Slides":t});this.setState({dropDownArray:e})}},{key:"render",value:function(){return console.log(),s.a.createElement(s.a.Fragment,null,this.props.location&&this.props.location.state&&this.props.location.state.loginToken?s.a.createElement("div",null,s.a.createElement("div",{className:"pre-guide"}," ",s.a.createElement("span",null," Please Select Slides Between 1 to 20 ")),s.a.createElement(g,{className:"drop-down",options:this.state.dropDownArray,onChange:this.getSelectedValue}),s.a.createElement(S,{numberOfSlides:this.state.slides,selectedSlides:this.state.selectedValues}),s.a.createElement("div",null,this.state.slides>0?s.a.createElement(v,{value:"Finish",className:"finishButton",onClick:this.showModal}):null),s.a.createElement(E,{show:this.state.show,handleClose:this.hideModal,customClassName:"slidesNumber"},s.a.createElement("div",null,s.a.createElement("span",null," User Selected Slides Are :-")," ",s.a.createElement("br",null),this.state.selectedValues.toString()))," "):null)}}]),t}(s.a.Component),w=a(13),N=function(e){var t=e.className,a=e.value,n=e.id,l=e.onChange,o=e.name,i=e.placeholder;return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{className:t,value:a,id:n,onChange:l,name:o,placeholder:i}))},y=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onInputChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.checkUserLogin=function(e){"shaadi"===a.state.userName&&"123"===a.state.userPassword?a.setState({loginSuccess:!0}):a.setState({show:!0})},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.state={userName:"",userPassword:"",loginSuccess:"",show:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.loginSuccess&&this.props.history.push({pathname:"/slides",state:{loginToken:!0}}),s.a.createElement("div",{className:"main-div"},s.a.createElement("div",{className:"login-page"},s.a.createElement(N,{className:"input-class",placeholder:"username",value:this.state.userName,onChange:this.onInputChange,name:"userName"})," ",s.a.createElement("br",null),s.a.createElement(N,{className:"input-class",placeholder:"password",value:this.state.userPassword,onChange:this.onInputChange,name:"userPassword"})," ",s.a.createElement("br",null),s.a.createElement(v,{className:"login-button",value:"Login",onClick:this.checkUserLogin}),s.a.createElement(E,{show:this.state.show,handleClose:this.hideModal,customClassName:"error-message"},s.a.createElement("span",null," User Credentials are Wrong Try Again"))))}}]),t}(n.Component)),O=function(){return s.a.createElement(h.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:y}),s.a.createElement(p.a,{exact:!0,path:"/slides",component:b}))},C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O,null))}}]),t}(n.Component);o.a.render(s.a.createElement(i.a,null,s.a.createElement(C,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.bcbd99e5.chunk.js.map