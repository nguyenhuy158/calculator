(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var n=a(1),l=a.n(n),s=a(4),t=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){var c=e.value,a=e.preValue,n=e.operator;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"output",children:c}),Object(o.jsx)("p",{className:"output__mini",children:"".concat(a," ").concat(n)})]})}i.defaultProps={value:0,preValue:0,operator:""};var u=i;var j=function(){var e={"+":function(e,c){return e+c},"-":function(e,c){return Number((e-c).toFixed(10))},x:function(e,c){return e*c},"/":function(e,c){return e/c},"%":function(e,c){return e%c}},c=Object(n.useState)(0),a=Object(r.a)(c,2),l=a[0],s=a[1],t=Object(n.useState)(0),i=Object(r.a)(t,2),j=i[0],d=i[1],b=Object(n.useState)(""),O=Object(r.a)(b,2),p=O[0],x=O[1],v=Object(n.useState)(!1),h=Object(r.a)(v,2),m=h[0],N=h[1];function C(c){var a,n=c.target.getAttribute("value"),t=!isNaN(parseInt(n)),r="C"===n,o="<-"===n,i="."===n&&!m,u=-1!==["+","-","x","/","%"].indexOf(n);"="===n&&""!==p&&(""!==p&&s(e[p](j,l)),""!==p&&d(0),""!==p&&x((function(){return N(!1),""}))),t&&!m&&s((function(e){return parseFloat("".concat(e).concat(n))})),t&&m&&s((function(e){return parseFloat("".concat(e,".").concat(n))})),r&&s((function(){return x(""),d(0),N(!1),0})),o&&s((function(e){return l>=10?parseFloat("".concat(l).slice(0,-1)):0})),i&&N(!0),u&&(a=n,""===p&&x((function(){return d(l),s(0),a})),""!==p&&x(a),N(!1)),console.log({currentValue:l,preValue:j},m)}return Object(o.jsxs)("section",{className:"container-fuild",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(u,{value:l,preValue:j,operator:p})}),Object(o.jsxs)("div",{className:"row number-pad",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("span",{className:"col",onClick:C,value:"C",children:"C"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"+/-",children:"+/-"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"%",children:"%"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"/",children:"/"})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("span",{className:"col",onClick:C,value:"7",children:"7"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"8",children:"8"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"9",children:"9"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"x",children:"x"})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("span",{className:"col",onClick:C,value:"4",children:"4"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"5",children:"5"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"6",children:"6"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"-",children:"-"})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("span",{className:"col",onClick:C,value:"1",children:"1"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"2",children:"2"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"3",children:"3"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"+",children:"+"})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("span",{className:"col",onClick:C,value:"0",children:"0"}),Object(o.jsx)("span",{className:m?"col disable":"col",onClick:C,disable:"true",value:".",children:"."}),Object(o.jsx)("span",{className:"col",onClick:C,value:"<-",children:"<-"}),Object(o.jsx)("span",{className:"col",onClick:C,value:"=",children:"="})]})]})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(c){var a=c.getCLS,n=c.getFID,l=c.getFCP,s=c.getLCP,t=c.getTTFB;a(e),n(e),l(e),s(e),t(e)}))};t.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,c,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.39b53863.chunk.js.map