(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=n(7),u=n(6),s=n(1),i=n(2),d=n(4),p=n(3),m=n(5),b=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:this.handleBadgeClasses()},this.handleFormat()),r.a.createElement("button",{className:"btn btn-secondary m-2",onClick:function(){return e.props.onHandleInc(e.props.counter)},disabled:10===this.props.counter.value},"+"),r.a.createElement("button",{className:"btn btn-secondary m-2",disabled:!this.props.counter.value,onClick:function(){return e.props.onHandleDec(e.props.counter)}},"-"),r.a.createElement("button",{className:"btn btn-danger m-2",onClick:function(){return e.props.onDelete(e.props.counter.id)}},"Delete"))}},{key:"handleBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"handleFormat",value:function(){return this.props.counter.value?this.props.counter.value:"Zero"}}]),t}(a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,0===this.props.counter.length?r.a.createElement("div",null,r.a.createElement("h6",{className:"p-2 btn btn-danger m-2"},"You'r bucket is empty.Kindly add some items."),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-secondary m-2",onClick:function(){return e.props.onHandleAdd(e.props.counter.id)}},"Add")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary m-2",onClick:this.props.onHandleReset},"Reset"),this.props.counter.map(function(t){return r.a.createElement(b,{key:t.id,counter:t,onDelete:e.props.onHandleDelete,onHandleInc:e.props.onHandleInc,onHandleDec:e.props.onHandleDec})}),r.a.createElement("button",{className:"btn btn-secondary m-2",onClick:function(){return e.props.onHandleAdd(e.props.counter.id)}},"Add")))}}]),t}(a.Component),v=function(e){return r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("span",{className:"badge badge-pill badge-secondary p-2 m-2"},e.value),"Bucket"))},f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={counter:[{id:1,value:0},{id:2,value:4},{id:3,value:0},{id:4,value:0}]},n.handleInc=function(e){var t=Object(u.a)(n.state.counter),a=t.indexOf(e);t[a]=Object(l.a)({},e),t[a].value++,n.setState({counter:t})},n.handleDec=function(e){var t=Object(u.a)(n.state.counter),a=t.indexOf(e);t[a]=Object(l.a)({},e),t[a].value--,n.setState({counter:t})},n.handleReset=function(){var e=n.state.counter.map(function(e){return e.value=0,e});n.setState({counter:e})},n.handleDelete=function(e){var t=n.state.counter.filter(function(t){return t.id!==e}),a=n.state.counter.filter(function(t){return t.id===e});if(1===n.state.counter.length)return!0===window.confirm("Do you really want your cart to be empty")?n.setState({counter:t}):n.setState({counter:a});n.setState({counter:t})},n.handleAdd=function(e){var t=Object(u.a)(n.state.counter),a=t.map(function(e){return e.id}),r=Math.max.apply(Math,Object(u.a)(a));t.length<1?t.push({id:1,value:0}):t.length<8&&t.push({id:r+1,value:0}),n.setState({counter:t})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{value:this.state.counter.filter(function(e){return e.value>0}).length}),r.a.createElement("main",{className:"container "},r.a.createElement(h,{counter:this.state.counter,onHandleDelete:this.handleDelete,onHandleReset:this.handleReset,onHandleInc:this.handleInc,onHandleDec:this.handleDec,onHandleAdd:this.handleAdd})))}}]),t}(a.Component);n(15);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.1f8a33da.chunk.js.map