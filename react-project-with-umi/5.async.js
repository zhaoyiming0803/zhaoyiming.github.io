(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3moH":function(e,t,a){"use strict";a.r(t);a("B9cy");var n=a("Ol7k"),r=a("cDcd"),o=a.n(r),s=(a("Pwec"),a("CtXQ")),p=(a("lUTK"),a("BvKs")),c=a("wY1l"),l=a.n(c),i="\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",m=p["a"].Item,h=p["a"].SubMenu,u=n["a"].Sider;class d extends o.a.Component{constructor(e){super(e)}shouldComponentUpdate(e){return!1}render(){return o.a.createElement(u,{width:256,style:{minHeight:"100vh"}},o.a.createElement("div",{style:{height:"32px",color:"#fff",textAlign:"center",margin:"16px"}},i),o.a.createElement(p["a"],{theme:"dark",mode:"inline",defaultSelectedKeys:[this.props.defaultSelectedKeys]},this.props.routes.slice(0,-1).filter(e=>!e.meta||!e.meta.hidden).map(e=>this.resolveMenu(e))))}resolveMenu(e){return Array.isArray(e.routes)?o.a.createElement(h,{key:e.path,title:o.a.createElement("span",null,o.a.createElement(s["a"],{type:"dashboard"}),o.a.createElement("span",null,e.meta&&e.meta.title))},e.routes.filter(e=>!e.meta||!e.meta.hidden).slice(0,-1).map(e=>this.resolveMenu(e))):o.a.createElement(m,{key:e.path},o.a.createElement(l.a,{to:e.path},o.a.createElement(s["a"],{type:"pie-chart"}),o.a.createElement("span",null,e.meta&&e.meta.title)))}}var g=d,f=n["a"].Header;class E extends o.a.Component{shouldComponentUpdate(){return!1}render(){return o.a.createElement(f,{style:{background:"#fff",textAlign:"center",padding:0}},"Header")}}var y=E,v=n["a"].Footer;class A extends o.a.Component{shouldComponentUpdate(){return!1}render(){return o.a.createElement(v,{style:{textAlign:"center"}},"Footer")}}var x,b,w=A,C=(a("T2oS"),a("W9HT")),k=a("h74D"),I=[{path:"/login",component:"login/Login"},{path:"/",component:"App",routes:[{path:"/",component:"Index",meta:{title:"\u9996\u9875",access:"dashboard"}},{path:"/coupon",meta:{title:"\u4f18\u60e0\u5238\u7ba1\u7406"},routes:[{path:"list",component:"coupon/List",meta:{title:"\u4f18\u60e0\u5238\u5217\u8868",access:"business-group-mgr"},routes:[{path:"test",component:"coupon/List",meta:{title:"\u4f18\u60e0\u5238\u6d4b\u8bd5",access:"partner"}}]},{path:"add",component:"coupon/Add",meta:{title:"\u6dfb\u52a0\u4f18\u60e0\u5238",access:"programme-management"}}]},{path:"/coupon1",meta:{title:"coupon1"},routes:[{path:"list",component:"coupon/List",meta:{title:"\u4f18\u60e0\u5238\u5217\u8868",access:"wechat-group-info",hidden:!0}},{path:"add",component:"coupon/Add",meta:{title:"\u6dfb\u52a0\u4f18\u60e0\u5238",access:"wechat-group-info"}}]},{path:"/coupon2",meta:{title:"coupon2"},routes:[{path:"list",component:"coupon/List",meta:{title:"\u4f18\u60e0\u5238\u5217\u8868",access:"distribution-haha"}},{path:"add",component:"coupon/Add",meta:{title:"\u6dfb\u52a0\u4f18\u60e0\u5238",hidden:!0,access:"grouper-mgr"}}]}]}],H=a("7Qib"),S="auth",U=e=>({userInfo:e[S].userInfo}),K=(x=Object(k["connect"])(U),x(b=class extends o.a.Component{constructor(e){super(e),this.validateIdetify()}validateIdetify(){var e=Object(H["a"])(),t=e.Uid,a=e.Token;if(!t||!a)return this.props.history.replace("/login");this.props.dispatch({type:"".concat(S,"/getUserInfo"),payload:a})}render(){console.log("props: ",this),console.log("access: ",this.props.userInfo.access),console.log("pathname: ",this.props.pathname);var e=this.props.userInfo.access;if(!Array.isArray(e)||!e.length)return o.a.createElement(C["a"],{size:"large"});var t=L(I).find(e=>e.path===this.props.pathname);return t?!t.meta||e.includes(t.meta.access)?o.a.createElement(o.a.Fragment,null,this.props.children):o.a.createElement("div",null,"\u6ca1\u6709\u6743\u9650"):o.a.createElement("div",null,"404")}})||b);function L(e){var t=[];return M(e,"",t),t}function M(e,t,a){e.forEach(e=>{"/"===t.charAt(t.length-1)&&(t=t.slice(0,-1)),"/"===e.path.charAt(0)&&(e.path=e.path.slice(1));var n=t+"/"+e.path;Array.isArray(e.routes)?M(e.routes,n,a):a.push({path:n,meta:e.meta})})}var T=K,F=n["a"].Content;class O extends o.a.Component{render(){return o.a.createElement(F,{style:{margin:"24px 16px 0"}},o.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},o.a.createElement(T,{pathname:this.props.pathname},this.props.children)))}}var j=O;class B extends o.a.Component{render(){return o.a.createElement(n["a"],null,o.a.createElement(g,{routes:this.props.route.routes,defaultSelectedKeys:this.props.location.pathname}),o.a.createElement(n["a"],null,o.a.createElement(y,null),o.a.createElement(j,{pathname:this.props.location.pathname,children:this.props.children}),o.a.createElement(w,null)))}}t["default"]=B}}]);