(this["webpackJsonptutorial-game"]=this["webpackJsonptutorial-game"]||[]).push([[0],{15:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),a=r(0),n=r(3),i=r(4),c=r(6),u=r(5),l=r(1),d=r.n(l),o=r(7),j=r.n(o);r(15);function h(e){return Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(i.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();x(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(a.jsx)(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=x(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"status",children:e}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(d.a.Component),v=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(b,{})}),Object(a.jsxs)("div",{className:"game-info",children:[Object(a.jsx)("div",{}),Object(a.jsx)("ol",{})]})]})}}]),r}(d.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],i=a[1],c=a[2];if(e[n]&&e[n]===e[i]&&e[n]===e[c])return e[n]}return null}j.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.a9dc7e45.chunk.js.map