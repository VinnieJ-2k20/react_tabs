(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=n(1),l=n(2),u=n(4),s=n(3),d=(n(13),n(7)),b=n.n(d),h=function(e){var t=e.title,n=e.isActive,a=e.onTabChange,c=e.children,i=e.index;return r.a.createElement("button",{className:b()(["button",{"button--active":n}]),key:t,type:"button",onClick:function(){return a(c,i)}},t)};h.defaultProps={children:{}};var p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={index:0},e.componentDidMount=function(){var t=e.props,n=t.children,a=t.defaultIndex,r=n[a].props.children;e.onTabChange(r,a)},e.onTabChange=function(t,n){e.setState({index:n}),e.props.onTabSelected(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.index,n=this.props.children;return r.a.createElement("div",null,n.map((function(n,a){return r.a.createElement(h,Object.assign({},n.props,{key:n.props.title,isActive:t===a,index:a,onTabChange:e.onTabChange}))})))}}]),n}(r.a.Component);p.defaultProps={children:{},defaultIndex:0};var m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={content:""},e.onTabChange=function(t){e.setState({content:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.content;return r.a.createElement("main",{className:"main"},r.a.createElement("h1",null,"React tabs (with children)"),r.a.createElement(p,{defaultIndex:0,onTabSelected:this.onTabChange},r.a.createElement(h,{title:"Tab 2"},"It could be a text"),r.a.createElement(h,{title:"Tab 3"},r.a.createElement("div",null,"1"),r.a.createElement("div",null,"2")),r.a.createElement(h,{title:"Tab 1"},"Or even any JSX")),r.a.createElement("div",{className:"content"},e))}}]),n}(r.a.Component);i.a.render(r.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cfc1a4c3.chunk.js.map