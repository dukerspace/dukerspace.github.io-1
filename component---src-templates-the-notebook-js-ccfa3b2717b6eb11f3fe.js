/*! For license information please see component---src-templates-the-notebook-js-ccfa3b2717b6eb11f3fe.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"K/fi":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("wx14"),o=a("zLVn"),s=a("TSYQ"),i=a.n(s),u=r.a.createContext({});u.Consumer,u.Provider;function f(e,t){var a=Object(n.useContext)(u);return e||a[t]||t}var m=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,l=e.as,s=void 0===l?"div":l,u=e.className,m=Object(o.a)(e,["bsPrefix","fluid","as","className"]),d=f(a,"container"),v="string"==typeof n?"-"+n:"-fluid";return r.a.createElement(s,Object(c.a)({ref:t},m,{className:i()(u,n?""+d+v:d)}))}));m.displayName="Container",m.defaultProps={fluid:!1};var d=m,v=["xl","lg","md","sm","xs"],p=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.noGutters,s=e.as,u=void 0===s?"div":s,m=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),d=f(a,"row"),p=d+"-cols",E=[];return v.forEach((function(e){var t,a=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+p+n+"-"+t)})),r.a.createElement(u,Object(c.a)({ref:t},m,{className:i.a.apply(void 0,[n,d,l&&"no-gutters"].concat(E))}))}));p.displayName="Row",p.defaultProps={noGutters:!1};var E=p,b=["xl","lg","md","sm","xs"],h=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,s=void 0===l?"div":l,u=Object(o.a)(e,["bsPrefix","className","as"]),m=f(a,"col"),d=[],v=[];return b.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],"object"==typeof r&&null!=r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+m+c:""+m+c+"-"+t),null!=n&&v.push("order"+c+"-"+n),null!=a&&v.push("offset"+c+"-"+a)})),d.length||d.push(m),r.a.createElement(s,Object(c.a)({},u,{ref:t,className:i.a.apply(void 0,[n].concat(d,v))}))}));h.displayName="Col";var x=h,y=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(d,null,r.a.createElement(E,null,r.a.createElement(x,{xs:12},r.a.createElement("h1",{className:"text-center"},r.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))))};y.defaultProps={siteTitle:""};var N=y,g=function(){return r.a.createElement("footer",null,r.a.createElement(d,null,r.a.createElement(E,null,r.a.createElement(x,{xs:12},r.a.createElement("ul",{className:"text-center"},r.a.createElement("li",null,"© ",(new Date).getFullYear()),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"project"},"Project")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"the-notebook"},"The Notebook")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"about"},"About Me")))))))};a("KvI+"),t.a=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"main container"},t),r.a.createElement(g,null))}})}},"KvI+":function(e,t,a){},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},o5hi:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("K/fi"),c=a("Wbzz"),o=function(){var e=Object(c.useStaticQuery)("1742292432");return r.a.createElement("div",null,r.a.createElement("ul",{className:"sidebar"},e.contents?e.contents.edges.map((function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(c.Link,{to:""+a.frontmatter.path},a.frontmatter.title))})):null))},s=(t.default=function(e){var t=e.data.content;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 col-12"},r.a.createElement(o,null)),r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8 col-12"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))},"3308185612")},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-templates-the-notebook-js-ccfa3b2717b6eb11f3fe.js.map