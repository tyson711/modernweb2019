(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(47)},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),o=t.n(i),c=t(1),u=t(7),l=t(2),m=t(8),f=(t(33),t(5)),d=(t(36),t(4));t.n(d).a;function s(){var e=Object(c.a)(["\n    margin-bottom: 1rem;\n"]);return s=function(){return e},e}var b=l.b.div(s()),p=(t(39),t(3)),v=t(25),g=t(21),E=t(26),y=t(18),h=t(19),O=t(22),j=t(20),w=t(27),C=(t(43),t(45),function(e){var n=e.context;return function(e){var t=a.a.createFactory(e);return function(e){function r(){return Object(y.a)(this,r),Object(O.a)(this,Object(j.a)(r).apply(this,arguments))}return Object(w.a)(r,e),Object(h.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement(n.Consumer,null,function(n){return t(Object(E.a)({},n,e.props))})}}]),r}(a.a.Component)}});function k(){var e=Object(c.a)(["\n    display: table-cell;\n    padding-bottom: ",";\n\n    // No padding for the last row.\n    ",":last-child > & {\n        padding-bottom: 0;\n    }\n\n    & + & {\n        padding-left: ",";\n    }\n"]);return k=function(){return e},e}function F(){var e=Object(c.a)(["\n    display: table-row;\n"]);return F=function(){return e},e}function S(){var e=Object(c.a)(["\n    display: table;\n"]);return S=function(){return e},e}var x=a.a.createContext(),R=l.b.div(S()),q=l.b.div(F()),A=C({context:x})(Object(l.b)(function(e){e.spacing;var n=Object(v.a)(e,["spacing"]);return a.a.createElement("div",n)})(k(),function(e){return Array.isArray(e.spacing)?e.spacing[1]:0},q,function(e){return Array.isArray(e.spacing)?e.spacing[0]:0})),J=function(e){var n=e.spacing,t=e.children;return n=function(e){var n=e="string"===typeof e?e.split(" ").reduce(function(e,n){return n&&(e=e.concat(n.trim())),e},[]):Object(u.a)(e),t=Object(g.a)(n,2),r=t[0],a=t[1];return e=[r=r||0,a=void 0!==a&&null!==a?a||0:r].map(function(e){return Number(e)>0?"".concat(e,"px"):e})}(n),a.a.createElement(x.Provider,{value:{spacing:n}},"function"===typeof t?t({FormContainer:R,FormRow:q,FormCol:A}):t)};function N(){var e=Object(c.a)(["\n    display: inline-block;\n    margin-bottom: .5rem;\n\n    ","\n"]);return N=function(){return e},e}function B(){var e=Object(c.a)(["\n    &::after {\n        content: '*';\n        color: #db3d44;\n    }\n"]);return B=function(){return e},e}var z=Object(l.a)(B()),I=l.b.label(N(),function(e){return e.required&&z});function P(){var e=Object(c.a)(["\n    background-color: #f7f8f9;\n    padding: .75rem 1rem;\n"]);return P=function(){return e},e}function Y(){var e=Object(c.a)(["\n    color: #db3d44;\n"]);return Y=function(){return e},e}var H=function(e){return e?void 0:"Required field."},D=function(e){var n=e.fieldCount,t=void 0===n?0:n,r=e.onSubmit,i=a.a.useRef(0),o=Object(u.a)(Array(t).keys()).map(function(e){return e+1});return a.a.createElement(p.Container,{fluid:!0,style:{padding:"1rem 1.5rem"}},a.a.createElement(m.b,{onSubmit:r,subscription:{submitting:!0},render:function(e){var n=e.handleSubmit,r=e.form;return e.values,a.a.createElement(p.Row,null,a.a.createElement(p.Col,{style:{paddingRight:"1rem"}},a.a.createElement("h2",null,"React Final Form Performance Optimization"),a.a.createElement("p",null,"Click ",a.a.createElement("strong",null,"Reset")," and input something for the first 10 text fields (marked as required). Your goal is to minimze the form render count without exceeding 2 renders for a successful form submission. So each time you make change to a text field, it will not rerender the whole form on every change."),a.a.createElement(b,null,a.a.createElement("strong",null,"Form fields:")," ",t),a.a.createElement(b,null,a.a.createElement("strong",null,"Form render count:")," ",++i.current),a.a.createElement(b,null,a.a.createElement(f.Button,{btnStyle:"primary",onClick:n},"Submit"),a.a.createElement(f.Button,{btnStyle:"default",onClick:function(){r.reset(),i.current=0}},"Reset")),a.a.createElement(m.c,{subscription:{values:!0}},function(e){var n=e.values;return a.a.createElement(K,null,JSON.stringify(n,0,2))})),a.a.createElement(p.Col,{style:{maxHeight:"calc(100vh - 2rem)",overflowY:"auto"}},a.a.createElement(J,{spacing:[".75rem",".5rem"]},function(e){var n=e.FormContainer,t=e.FormRow,r=e.FormCol;return a.a.createElement(n,{style:{width:"100%"}},o.map(function(e,n){var i=n<10,o=i?H:null,c=i?"Required field":"Optional field";return a.a.createElement(m.a,{name:"field".concat(e),key:e,validate:o},function(n){var o=n.input,u=n.meta;return a.a.createElement(t,null,a.a.createElement(r,{style:{width:"1%",whiteSpace:"nowrap"}},a.a.createElement(I,{required:i},"Field ",e)),a.a.createElement(r,null,a.a.createElement(d.Input,Object.assign({},o,{type:"text",placeholder:c})),u.error&&u.touched&&a.a.createElement(G,null,u.error)))})}))})))}}))},G=l.b.div(Y()),K=l.b.pre(P()),L=function(e){window.alert(JSON.stringify(e,0,2))};o.a.render(a.a.createElement(function(){return a.a.createElement(D,{fieldCount:1e3,onSubmit:L})},null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1eff1475.chunk.js.map