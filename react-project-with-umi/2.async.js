(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{e3kU:function(e,t,a){"use strict";a.r(t);a("+L6B");var s=a("2/Rp"),r=(a("5NDa"),a("5rEg")),l=(a("y8nQ"),a("Vl3Y")),o=a("q1tI"),n=a.n(o),p=a("/MKj"),c="coupon",i=l["a"].Item,m={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},u=e=>{var t=e[c].couponList;return{couponList:t}};class d extends n.a.Component{constructor(e){super(e),this.state={}}componentDidMount(){console.log("couponList: ",this.props.couponList)}render(){this.state.visible;var e=this.props.form.getFieldDecorator;return n.a.createElement("div",null,n.a.createElement(l["a"],m,n.a.createElement(i,{label:"\u540d\u79f0"},e("name",{rules:[{required:!0}]})(n.a.createElement(r["a"],null))),n.a.createElement(i,{label:"\u63cf\u8ff0"},e("desc")(n.a.createElement(r["a"],null))),n.a.createElement(i,{label:"\u94fe\u63a5"},e("url",{rules:[{type:"url"}]})(n.a.createElement(r["a"],null))),n.a.createElement(i,{style:{textAlign:"center"}},n.a.createElement(s["a"],{style:{marginRight:"10px"},onClick:()=>this.resetForm()},"\u91cd\u7f6e"),n.a.createElement(s["a"],{type:"primary",onClick:()=>this.submit()},"\u63d0\u4ea4"))))}resetForm(){this.props.form.resetFields()}submit(){console.log("props: ",this.props),this.props.form.validateFieldsAndScroll((e,t)=>{e||(console.log("Received values of form: ",t),this.props.dispatch({type:"".concat(c,"/addCoupon"),payload:t}))})}}t["default"]=Object(p["c"])(u)(l["a"].create()(d))}}]);