(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},26:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),i=t(2),m=t(8),s=function(){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"mini-nav"},l.a.createElement("li",{className:"hamburger-button"},l.a.createElement("i",{class:"fa fa-bars"})),l.a.createElement("li",{className:"nav-search"},l.a.createElement("div",{class:"input-icon-wrap"},l.a.createElement("span",{class:"input-icon"},l.a.createElement("span",{class:"fa fa-search"})),l.a.createElement("input",{type:"text",class:"input-with-icon"}))),l.a.createElement("li",null,l.a.createElement(i.a,{icon:m.b})),l.a.createElement("li",null,"Account"),l.a.createElement("li",null,l.a.createElement(i.a,{icon:m.a})),l.a.createElement("li",null,"Cart")),l.a.createElement("ul",{className:"title"},l.a.createElement("h1",null,"LOGOTYPE")),l.a.createElement("ul",{className:"main-nav"},l.a.createElement("li",null,l.a.createElement("a",null,"Shop ",l.a.createElement("i",{className:"arrow down"}))),l.a.createElement("li",null,l.a.createElement("a",null,"Nav Item ",l.a.createElement("i",{className:"arrow down"}))),l.a.createElement("li",null,l.a.createElement("a",null,"Nav Item ",l.a.createElement("i",{className:"arrow down"}))),l.a.createElement("li",null,l.a.createElement("a",null,"About")),l.a.createElement("li",null,l.a.createElement("a",null,"Blog")),l.a.createElement("li",null,l.a.createElement("a",null,"Contact"))))};var o=function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("p",null,"FREE SHIPPING on all orders over $99"))};var u=function(){return l.a.createElement("header",null,l.a.createElement(o,null),l.a.createElement(s,null))},E=t(6),d=t(11),f=t(12),p=t(14),h=t(13),v=t(3),N=t(15),b=function(e){var a=e.handleChange,t=e.query,n=""!==t?l.a.createElement("p",null,'Showing results for "',t,'"'):l.a.createElement("p",null);return l.a.createElement("div",{className:"main-search"},l.a.createElement("div",{className:"input-icon-wrap"},l.a.createElement("span",{className:"input-icon"},l.a.createElement("span",{className:"fa fa-search fa-2x"})),l.a.createElement("input",{type:"text",onChange:a,placeholder:"Search"})),n)},g=function(e){var a=e.props,t=e.handleToUpdate;return l.a.createElement("div",{className:"swatch-container"},a.variants.map(function(e,n){var r=a.variant==n?"active":"",c="".concat(r," ").concat(e.title," swatch");return l.a.createElement("span",{key:n,id:n,className:c,onClick:t}," ")}))},w=function(e){var a=e.props,t=e.handleToUpdate;return a.isLoaded?l.a.createElement("div",{id:"grid-container"},l.a.createElement("div",{id:"grid-row"},a.filtered.map(function(e,a){var n=e.tags.match(/new/)?l.a.createElement("span",{className:"new"},"New!"):null,r=null==e.variants[0].compare_at_price?l.a.createElement("div",{className:"price"},l.a.createElement("span",null,"$",e.variants[0].price)):l.a.createElement("div",{className:"price"},l.a.createElement("span",{className:"sale"},"$",e.variants[0].compare_at_price),l.a.createElement("span",null,"$",e.variants[0].price));return e.variant=e.variant||"0",l.a.createElement("div",{key:a,className:"product",id:a},n,l.a.createElement("img",{src:e.images[e.variant].src,alt:e.image.alt}),l.a.createElement(g,{props:e,handleToUpdate:t}),l.a.createElement("h4",null,e.title),r)}))):null},y=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={error:null,isLoaded:!1,query:"",items:[],filtered:[]},t.textInput=t.textInput.bind(Object(v.a)(t)),t.handleToUpdate=t.handleToUpdate.bind(Object(v.a)(t)),t.handleChange=t.handleChange.bind(Object(v.a)(t)),t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"textInput",value:function(e){this.setState({query:e.target.value})}},{key:"handleChange",value:function(e){var a=Object(E.a)(this.state.items),t=[];this.textInput(e),t=""!==e.target.value?a.filter(function(a){var t=a.variants.map(function(e){return e.title}),n=[a.title,a.vendor,a.tags],l=[].concat(Object(E.a)(t),n).map(function(e){return e.toLowerCase().replace(/ /g,"")}),r=e.target.value.toLowerCase();return l.find(function(e){return e.includes(r.replace(/ /g,""))})}):Object(E.a)(this.state.items),this.setState({filtered:t})}},{key:"handleToUpdate",value:function(e){var a=e.target.id,t=e.target.parentNode.parentNode.id,n=Object(E.a)(this.state.filtered);n[t].variant=a,this.setState({filtered:n})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.myjson.com/bins/eb639/").then(function(e){return e.json()}).then(function(a){e.setState({isLoaded:!0,items:a.products,filtered:a.products})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({items:e.items})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(b,{handleChange:this.handleChange,query:this.state.query}),l.a.createElement(w,{props:this.state,handleToUpdate:this.handleToUpdate}))}}]),a}(l.a.Component),j=t(5);var C=function(){return l.a.createElement("footer",null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-info"},l.a.createElement("hr",null),l.a.createElement("div",{className:"foot-nav",tabindex:"0"},l.a.createElement("h3",null,"Shop")),l.a.createElement("li",{className:"foot-item"},"footer item 1"),l.a.createElement("li",{className:"foot-item"},"footer item 2"),l.a.createElement("li",{className:"foot-item"},"footer item 3"),l.a.createElement("li",{className:"foot-item"},"footer item 4")),l.a.createElement("ul",{className:"nav-info"},l.a.createElement("hr",null),l.a.createElement("div",{className:"foot-nav",tabindex:"0"},l.a.createElement("h3",null,"About")),l.a.createElement("li",{className:"foot-item"},"footer item 1"),l.a.createElement("li",{className:"foot-item"},"footer item 2"),l.a.createElement("li",{className:"foot-item"},"footer item 3"),l.a.createElement("li",{className:"foot-item"},"footer item 4")),l.a.createElement("ul",{className:"nav-info"},l.a.createElement("hr",null),l.a.createElement("div",{className:"foot-nav",tabindex:"0"},l.a.createElement("h3",null,"Explore")),l.a.createElement("li",{className:"foot-item"},"footer item 1"),l.a.createElement("li",{className:"foot-item"},"footer item 2"),l.a.createElement("li",{className:"foot-item"},"footer item 3"),l.a.createElement("li",{className:"foot-item"},"footer item 4")),l.a.createElement("div",{id:"newsletter"},l.a.createElement("h3",null,"Newsletter"),l.a.createElement("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id distinctio "),l.a.createElement("div",{className:"email-form"},l.a.createElement("input",{placeholder:"Your e-mail here"})," ",l.a.createElement("button",null," Sign Up ")),l.a.createElement("div",{className:"social-media"},l.a.createElement("span",{className:"fa fa-facebook-f"}),l.a.createElement("span",{className:"fa fa-twitter"}),l.a.createElement("span",{className:"fa fa-instagram"}),l.a.createElement("span",{className:"fa fa-pinterest-p"}))),l.a.createElement("ul",{className:"nav-info"},l.a.createElement("hr",null),l.a.createElement("div",{className:"foot-nav",tabindex:"0"},l.a.createElement("h3",null,"Locations")),l.a.createElement("hr",null),l.a.createElement("li",{className:"foot-item"},"footer item 1"),l.a.createElement("li",{className:"foot-item"},"footer item 2"),l.a.createElement("li",{className:"foot-item"},"footer item 3"),l.a.createElement("li",{className:"foot-item"},"footer item 4"))),l.a.createElement("div",{id:"footer-info"},l.a.createElement("div",{className:"copyright-info"},l.a.createElement("h5",null," copyright \xa9 2018 "),l.a.createElement("h6",null," www.projectvanilla.com ")," ",l.a.createElement("span",null,"|")," ",l.a.createElement("h6",null,"Design and Build by Parkfield Commerce ")),l.a.createElement("div",{className:"card-info"},l.a.createElement(i.a,{icon:j.c}),l.a.createElement(i.a,{icon:j.b}),l.a.createElement(i.a,{icon:j.d}),l.a.createElement(i.a,{icon:j.a}))))};t(26),t(27);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(y,null),l.a.createElement(C,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.653e4a0c.chunk.js.map