webpackJsonp([0],{114:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(9),l=n.n(c),A=n(8),u=n(115),p=(n.n(u),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),b=function(t){function e(){var t,n,r,i;o(this,e);for(var s=arguments.length,c=Array(s),A=0;A<s;A++)c[A]=arguments[A];return n=r=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.state={title:"",content:"",author:"Max",submitted:!1},r.postDataHandler=function(){var t={title:r.state.title,body:r.state.content,author:r.state.author};l.a.post("/posts",t).then(function(t){console.log(t),r.props.history.replace("/posts")})},i=n,a(r,i)}return r(e,t),p(e,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=s.a.createElement(A.c,{to:"/posts"})),s.a.createElement("div",{className:"NewPost"},e,s.a.createElement("h1",null,"Add a Post"),s.a.createElement("label",null,"Title"),s.a.createElement("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),s.a.createElement("label",null,"Content"),s.a.createElement("textarea",{rows:"4",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),s.a.createElement("label",null,"Author"),s.a.createElement("select",{value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})}},s.a.createElement("option",{value:"Max"},"Max"),s.a.createElement("option",{value:"Manu"},"Manu")),s.a.createElement("button",{onClick:this.postDataHandler},"Add Post"))}}]),e}(i.Component);e.default=b},115:function(t,e,n){var o=n(116);"string"===typeof o&&(o=[[t.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(113)(o,a);o.locals&&(t.exports=o.locals)},116:function(t,e,n){e=t.exports=n(112)(!0),e.push([t.i,".NewPost{width:80%;margin:20px auto;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;text-align:center}.NewPost label{display:block;margin:10px auto;text-align:center;font-weight:700}.NewPost input,.NewPost select,.NewPost textarea{display:block;width:80%;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #000;outline:none;font:inherit;margin:auto}.NewPost button{margin:5px 0;padding:10px;font:inherit;border:1px solid #fa923f;background-color:transparent;color:#fa923f;cursor:pointer}.NewPost button:active,.NewPost button:hover{color:#fff;background-color:#fa923f}","",{version:3,sources:["/home/lr26/Documents/mes sites/react/my-new-app/src/containers/Blog/NewPost/NewPost.css"],names:[],mappings:"AAAA,SACI,UAAW,AACX,iBAAkB,AAClB,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,iBAAmB,CACtB,AAED,eACI,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,eAAkB,CACrB,AAED,iDAGI,cAAe,AACf,UAAW,AACX,8BAA+B,AACvB,sBAAuB,AAC/B,sBAAwB,AACxB,aAAc,AACd,aAAc,AACd,WAAa,CAChB,AAED,gBACI,aAAc,AACd,aAAc,AACd,aAAc,AACd,yBAA0B,AAC1B,6BAA8B,AAC9B,cAAe,AACf,cAAgB,CACnB,AAED,6CAEI,WAAa,AACb,wBAA0B,CAC7B",file:"NewPost.css",sourcesContent:[".NewPost {\n    width: 80%;\n    margin: 20px auto;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    text-align: center;\n}\n\n.NewPost label {\n    display: block;\n    margin: 10px auto;\n    text-align: center;\n    font-weight: bold;\n}\n\n.NewPost input,\n.NewPost textarea,\n.NewPost select {\n    display: block;\n    width: 80%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid black;\n    outline: none;\n    font: inherit;\n    margin: auto;\n}\n\n.NewPost button {\n    margin: 5px 0;\n    padding: 10px;\n    font: inherit;\n    border: 1px solid #fa923f;\n    background-color: transparent;\n    color: #fa923f;\n    cursor: pointer;\n}\n\n.NewPost button:hover,\n.NewPost button:active {\n    color: white;\n    background-color: #fa923f;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.5f0efd64.chunk.js.map