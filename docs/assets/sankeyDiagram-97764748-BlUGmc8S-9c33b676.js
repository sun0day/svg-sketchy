import{S as st,B as _t,C as mt,E as xt,Q as kt,g as vt,f as bt,j as Et,M as wt,ar as Lt,w as G,_ as At}from"./index-f7378c2d.js";import{h as St}from"./ordinal-MUacOSdK-dbc3c131.js";import{r as Mt}from"./Tableau10-GLA_9iAD-fc0d72d8.js";import"./init-DjUOC4st-cac434d1.js";function ot(t,e){let r;if(e===void 0)for(const a of t)a!=null&&(r<a||r===void 0&&a>=a)&&(r=a);else{let a=-1;for(let c of t)(c=e(c,++a,t))!=null&&(r<c||r===void 0&&c>=c)&&(r=c)}return r}function yt(t,e){let r;if(e===void 0)for(const a of t)a!=null&&(r>a||r===void 0&&a>=a)&&(r=a);else{let a=-1;for(let c of t)(c=e(c,++a,t))!=null&&(r>c||r===void 0&&c>=c)&&(r=c)}return r}function H(t,e){let r=0;if(e===void 0)for(let a of t)(a=+a)&&(r+=a);else{let a=-1;for(let c of t)(c=+e(c,++a,t))&&(r+=c)}return r}function It(t){return t.target.depth}function Ct(t){return t.depth}function Pt(t,e){return e-1-t.height}function gt(t,e){return t.sourceLinks.length?t.depth:e-1}function Nt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?yt(t.sourceLinks,It)-1:0}function X(t){return function(){return t}}function at(t,e){return q(t.source,e.source)||t.index-e.index}function ct(t,e){return q(t.target,e.target)||t.index-e.index}function q(t,e){return t.y0-e.y0}function J(t){return t.value}function Dt(t){return t.index}function Ot(t){return t.nodes}function jt(t){return t.links}function lt(t,e){const r=t.get(e);if(!r)throw new Error("missing: "+e);return r}function ht({nodes:t}){for(const e of t){let r=e.y0,a=r;for(const c of e.sourceLinks)c.y0=r+c.width/2,r+=c.width;for(const c of e.targetLinks)c.y1=a+c.width/2,a+=c.width}}function Tt(){let t=0,e=0,r=1,a=1,c=24,x=8,p,_=Dt,i=gt,o,f,m=Ot,y=jt,v=6;function k(){const n={nodes:m.apply(null,arguments),links:y.apply(null,arguments)};return C(n),S(n),M(n),O(n),P(n),ht(n),n}k.update=function(n){return ht(n),n},k.nodeId=function(n){return arguments.length?(_=typeof n=="function"?n:X(n),k):_},k.nodeAlign=function(n){return arguments.length?(i=typeof n=="function"?n:X(n),k):i},k.nodeSort=function(n){return arguments.length?(o=n,k):o},k.nodeWidth=function(n){return arguments.length?(c=+n,k):c},k.nodePadding=function(n){return arguments.length?(x=p=+n,k):x},k.nodes=function(n){return arguments.length?(m=typeof n=="function"?n:X(n),k):m},k.links=function(n){return arguments.length?(y=typeof n=="function"?n:X(n),k):y},k.linkSort=function(n){return arguments.length?(f=n,k):f},k.size=function(n){return arguments.length?(t=e=0,r=+n[0],a=+n[1],k):[r-t,a-e]},k.extent=function(n){return arguments.length?(t=+n[0][0],r=+n[1][0],e=+n[0][1],a=+n[1][1],k):[[t,e],[r,a]]},k.iterations=function(n){return arguments.length?(v=+n,k):v};function C({nodes:n,links:l}){for(const[u,s]of n.entries())s.index=u,s.sourceLinks=[],s.targetLinks=[];const h=new Map(n.map((u,s)=>[_(u,s,n),u]));for(const[u,s]of l.entries()){s.index=u;let{source:g,target:E}=s;typeof g!="object"&&(g=s.source=lt(h,g)),typeof E!="object"&&(E=s.target=lt(h,E)),g.sourceLinks.push(s),E.targetLinks.push(s)}if(f!=null)for(const{sourceLinks:u,targetLinks:s}of n)u.sort(f),s.sort(f)}function S({nodes:n}){for(const l of n)l.value=l.fixedValue===void 0?Math.max(H(l.sourceLinks,J),H(l.targetLinks,J)):l.fixedValue}function M({nodes:n}){const l=n.length;let h=new Set(n),u=new Set,s=0;for(;h.size;){for(const g of h){g.depth=s;for(const{target:E}of g.sourceLinks)u.add(E)}if(++s>l)throw new Error("circular link");h=u,u=new Set}}function O({nodes:n}){const l=n.length;let h=new Set(n),u=new Set,s=0;for(;h.size;){for(const g of h){g.height=s;for(const{source:E}of g.targetLinks)u.add(E)}if(++s>l)throw new Error("circular link");h=u,u=new Set}}function I({nodes:n}){const l=ot(n,s=>s.depth)+1,h=(r-t-c)/(l-1),u=new Array(l);for(const s of n){const g=Math.max(0,Math.min(l-1,Math.floor(i.call(null,s,l))));s.layer=g,s.x0=t+g*h,s.x1=s.x0+c,u[g]?u[g].push(s):u[g]=[s]}if(o)for(const s of u)s.sort(o);return u}function b(n){const l=yt(n,h=>(a-e-(h.length-1)*p)/H(h,J));for(const h of n){let u=e;for(const s of h){s.y0=u,s.y1=u+s.value*l,u=s.y1+p;for(const g of s.sourceLinks)g.width=g.value*l}u=(a-u+p)/(h.length+1);for(let s=0;s<h.length;++s){const g=h[s];g.y0+=u*(s+1),g.y1+=u*(s+1)}A(h)}}function P(n){const l=I(n);p=Math.min(x,(a-e)/(ot(l,h=>h.length)-1)),b(l);for(let h=0;h<v;++h){const u=Math.pow(.99,h),s=Math.max(1-u,(h+1)/v);N(l,u,s),j(l,u,s)}}function j(n,l,h){for(let u=1,s=n.length;u<s;++u){const g=n[u];for(const E of g){let U=0,$=0;for(const{source:Q,value:Z}of E.targetLinks){let B=Z*(E.layer-Q.layer);U+=F(Q,E)*B,$+=B}if(!($>0))continue;let W=(U/$-E.y0)*l;E.y0+=W,E.y1+=W,D(E)}o===void 0&&g.sort(q),d(g,h)}}function N(n,l,h){for(let u=n.length,s=u-2;s>=0;--s){const g=n[s];for(const E of g){let U=0,$=0;for(const{target:Q,value:Z}of E.sourceLinks){let B=Z*(Q.layer-E.layer);U+=T(E,Q)*B,$+=B}if(!($>0))continue;let W=(U/$-E.y0)*l;E.y0+=W,E.y1+=W,D(E)}o===void 0&&g.sort(q),d(g,h)}}function d(n,l){const h=n.length>>1,u=n[h];w(n,u.y0-p,h-1,l),L(n,u.y1+p,h+1,l),w(n,a,n.length-1,l),L(n,e,0,l)}function L(n,l,h,u){for(;h<n.length;++h){const s=n[h],g=(l-s.y0)*u;g>1e-6&&(s.y0+=g,s.y1+=g),l=s.y1+p}}function w(n,l,h,u){for(;h>=0;--h){const s=n[h],g=(s.y1-l)*u;g>1e-6&&(s.y0-=g,s.y1-=g),l=s.y0-p}}function D({sourceLinks:n,targetLinks:l}){if(f===void 0){for(const{source:{sourceLinks:h}}of l)h.sort(ct);for(const{target:{targetLinks:h}}of n)h.sort(at)}}function A(n){if(f===void 0)for(const{sourceLinks:l,targetLinks:h}of n)l.sort(ct),h.sort(at)}function F(n,l){let h=n.y0-(n.sourceLinks.length-1)*p/2;for(const{target:u,width:s}of n.sourceLinks){if(u===l)break;h+=s+p}for(const{source:u,width:s}of l.targetLinks){if(u===n)break;h-=s}return h}function T(n,l){let h=l.y0-(l.targetLinks.length-1)*p/2;for(const{source:u,width:s}of l.targetLinks){if(u===n)break;h+=s+p}for(const{target:u,width:s}of n.sourceLinks){if(u===l)break;h-=s}return h}return k}var tt=Math.PI,nt=2*tt,z=1e-6,$t=nt-z;function et(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function dt(){return new et}et.prototype=dt.prototype={constructor:et,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,r,a){this._+="Q"+ +t+","+ +e+","+(this._x1=+r)+","+(this._y1=+a)},bezierCurveTo:function(t,e,r,a,c,x){this._+="C"+ +t+","+ +e+","+ +r+","+ +a+","+(this._x1=+c)+","+(this._y1=+x)},arcTo:function(t,e,r,a,c){t=+t,e=+e,r=+r,a=+a,c=+c;var x=this._x1,p=this._y1,_=r-t,i=a-e,o=x-t,f=p-e,m=o*o+f*f;if(c<0)throw new Error("negative radius: "+c);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(m>z)if(!(Math.abs(f*_-i*o)>z)||!c)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var y=r-x,v=a-p,k=_*_+i*i,C=y*y+v*v,S=Math.sqrt(k),M=Math.sqrt(m),O=c*Math.tan((tt-Math.acos((k+m-C)/(2*S*M)))/2),I=O/M,b=O/S;Math.abs(I-1)>z&&(this._+="L"+(t+I*o)+","+(e+I*f)),this._+="A"+c+","+c+",0,0,"+ +(f*y>o*v)+","+(this._x1=t+b*_)+","+(this._y1=e+b*i)}},arc:function(t,e,r,a,c,x){t=+t,e=+e,r=+r,x=!!x;var p=r*Math.cos(a),_=r*Math.sin(a),i=t+p,o=e+_,f=1^x,m=x?a-c:c-a;if(r<0)throw new Error("negative radius: "+r);this._x1===null?this._+="M"+i+","+o:(Math.abs(this._x1-i)>z||Math.abs(this._y1-o)>z)&&(this._+="L"+i+","+o),r&&(m<0&&(m=m%nt+nt),m>$t?this._+="A"+r+","+r+",0,1,"+f+","+(t-p)+","+(e-_)+"A"+r+","+r+",0,1,"+f+","+(this._x1=i)+","+(this._y1=o):m>z&&(this._+="A"+r+","+r+",0,"+ +(m>=tt)+","+f+","+(this._x1=t+r*Math.cos(c))+","+(this._y1=e+r*Math.sin(c))))},rect:function(t,e,r,a){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +r+"v"+ +a+"h"+-r+"Z"},toString:function(){return this._}};function ut(t){return function(){return t}}function zt(t){return t[0]}function Rt(t){return t[1]}var Ft=Array.prototype.slice;function Ut(t){return t.source}function Wt(t){return t.target}function Qt(t){var e=Ut,r=Wt,a=zt,c=Rt,x=null;function p(){var _,i=Ft.call(arguments),o=e.apply(this,i),f=r.apply(this,i);if(x||(x=_=dt()),t(x,+a.apply(this,(i[0]=o,i)),+c.apply(this,i),+a.apply(this,(i[0]=f,i)),+c.apply(this,i)),_)return x=null,_+""||null}return p.source=function(_){return arguments.length?(e=_,p):e},p.target=function(_){return arguments.length?(r=_,p):r},p.x=function(_){return arguments.length?(a=typeof _=="function"?_:ut(+_),p):a},p.y=function(_){return arguments.length?(c=typeof _=="function"?_:ut(+_),p):c},p.context=function(_){return arguments.length?(x=_??null,p):x},p}function Bt(t,e,r,a,c){t.moveTo(e,r),t.bezierCurveTo(e=(e+a)/2,r,e,c,a,c)}function Gt(){return Qt(Bt)}function Xt(t){return[t.source.x1,t.y0]}function qt(t){return[t.target.x0,t.y1]}function Kt(){return Gt().source(Xt).target(qt)}var it=function(){var t=function(_,i,o,f){for(o=o||{},f=_.length;f--;o[_[f]]=i);return o},e=[1,9],r=[1,10],a=[1,5,10,12],c={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(_,i,o,f,m,y,v){var k=y.length-1;switch(m){case 7:const C=f.findOrCreateNode(y[k-4].trim().replaceAll('""','"')),S=f.findOrCreateNode(y[k-2].trim().replaceAll('""','"')),M=parseFloat(y[k].trim());f.addLink(C,S,M);break;case 8:case 9:case 11:this.$=y[k];break;case 10:this.$=y[k-1];break}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:r},{1:[2,6],7:11,10:[1,12]},t(r,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(a,[2,8]),t(a,[2,9]),{19:[1,16]},t(a,[2,11]),{1:[2,1]},{1:[2,5]},t(r,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:r},{15:18,16:7,17:8,18:e,20:r},{18:[1,19]},t(r,[2,3]),{12:[1,20]},t(a,[2,10]),{15:21,16:7,17:8,18:e,20:r},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(_,i){if(i.recoverable)this.trace(_);else{var o=new Error(_);throw o.hash=i,o}},parse:function(_){var i=this,o=[0],f=[],m=[null],y=[],v=this.table,k="",C=0,S=0,M=2,O=1,I=y.slice.call(arguments,1),b=Object.create(this.lexer),P={yy:{}};for(var j in this.yy)Object.prototype.hasOwnProperty.call(this.yy,j)&&(P.yy[j]=this.yy[j]);b.setInput(_,P.yy),P.yy.lexer=b,P.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var N=b.yylloc;y.push(N);var d=b.options&&b.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function L(){var g;return g=f.pop()||b.lex()||O,typeof g!="number"&&(g instanceof Array&&(f=g,g=f.pop()),g=i.symbols_[g]||g),g}for(var w,D,A,F,T={},n,l,h,u;;){if(D=o[o.length-1],this.defaultActions[D]?A=this.defaultActions[D]:((w===null||typeof w>"u")&&(w=L()),A=v[D]&&v[D][w]),typeof A>"u"||!A.length||!A[0]){var s="";u=[];for(n in v[D])this.terminals_[n]&&n>M&&u.push("'"+this.terminals_[n]+"'");b.showPosition?s="Parse error on line "+(C+1)+`:
`+b.showPosition()+`
Expecting `+u.join(", ")+", got '"+(this.terminals_[w]||w)+"'":s="Parse error on line "+(C+1)+": Unexpected "+(w==O?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(s,{text:b.match,token:this.terminals_[w]||w,line:b.yylineno,loc:N,expected:u})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+w);switch(A[0]){case 1:o.push(w),m.push(b.yytext),y.push(b.yylloc),o.push(A[1]),w=null,S=b.yyleng,k=b.yytext,C=b.yylineno,N=b.yylloc;break;case 2:if(l=this.productions_[A[1]][1],T.$=m[m.length-l],T._$={first_line:y[y.length-(l||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(l||1)].first_column,last_column:y[y.length-1].last_column},d&&(T._$.range=[y[y.length-(l||1)].range[0],y[y.length-1].range[1]]),F=this.performAction.apply(T,[k,S,C,P.yy,A[1],m,y].concat(I)),typeof F<"u")return F;l&&(o=o.slice(0,-1*l*2),m=m.slice(0,-1*l),y=y.slice(0,-1*l)),o.push(this.productions_[A[1]][0]),m.push(T.$),y.push(T._$),h=v[o[o.length-2]][o[o.length-1]],o.push(h);break;case 3:return!0}}return!0}},x=function(){var _={EOF:1,parseError:function(i,o){if(this.yy.parser)this.yy.parser.parseError(i,o);else throw new Error(i)},setInput:function(i,o){return this.yy=o||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var o=i.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var o=i.length,f=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===m.length?this.yylloc.first_column:0)+m[m.length-f.length].length-f[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),o=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+o+"^"},test_match:function(i,o){var f,m,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),m=i[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],f=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var v in y)this[v]=y[v];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,o,f,m;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),v=0;v<y.length;v++)if(f=this._input.match(this.rules[y[v]]),f&&(!o||f[0].length>o[0].length)){if(o=f,m=v,this.options.backtrack_lexer){if(i=this.test_match(f,y[v]),i!==!1)return i;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(i=this.test_match(o,y[m]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,o,f,m){switch(f){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return _}();c.lexer=x;function p(){this.yy={}}return p.prototype=c,c.Parser=p,new p}();it.parser=it;const K=it;let Y=[],V=[],R={};const Yt=()=>{Y=[],V=[],R={},Et()};class Vt{constructor(e,r,a=0){this.source=e,this.target=r,this.value=a}}const Zt=(t,e,r)=>{Y.push(new Vt(t,e,r))};class Ht{constructor(e){this.ID=e}}const Jt=t=>(t=wt.sanitizeText(t,st()),R[t]||(R[t]=new Ht(t),V.push(R[t])),R[t]),tn=()=>V,nn=()=>Y,en=()=>({nodes:V.map(t=>({id:t.ID})),links:Y.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),rn={nodesMap:R,getConfig:()=>st().sankey,getNodes:tn,getLinks:nn,getGraph:en,addLink:Zt,findOrCreateNode:Jt,getAccTitle:_t,setAccTitle:mt,getAccDescription:xt,setAccDescription:kt,getDiagramTitle:vt,setDiagramTitle:bt,clear:Yt},pt=class rt{static next(e){return new rt(e+ ++rt.count)}constructor(e){this.id=e,this.href=`#${e}`}toString(){return"url("+this.href+")"}};pt.count=0;let ft=pt;const sn={left:Ct,right:Pt,center:Nt,justify:gt},on=function(t,e,r,a){const{securityLevel:c,sankey:x}=st(),p=Lt.sankey;let _;c==="sandbox"&&(_=G("#i"+e));const i=c==="sandbox"?G(_.nodes()[0].contentDocument.body):G("body"),o=c==="sandbox"?i.select(`[id="${e}"]`):G(`[id="${e}"]`),f=(x==null?void 0:x.width)??p.width,m=(x==null?void 0:x.height)??p.width,y=(x==null?void 0:x.useMaxWidth)??p.useMaxWidth,v=(x==null?void 0:x.nodeAlignment)??p.nodeAlignment,k=(x==null?void 0:x.prefix)??p.prefix,C=(x==null?void 0:x.suffix)??p.suffix,S=(x==null?void 0:x.showValues)??p.showValues,M=a.db.getGraph(),O=sn[v];Tt().nodeId(d=>d.id).nodeWidth(10).nodePadding(10+(S?15:0)).nodeAlign(O).extent([[0,0],[f,m]])(M);const I=St(Mt);o.append("g").attr("class","nodes").selectAll(".node").data(M.nodes).join("g").attr("class","node").attr("id",d=>(d.uid=ft.next("node-")).id).attr("transform",function(d){return"translate("+d.x0+","+d.y0+")"}).attr("x",d=>d.x0).attr("y",d=>d.y0).append("rect").attr("height",d=>d.y1-d.y0).attr("width",d=>d.x1-d.x0).attr("fill",d=>I(d.id));const b=({id:d,value:L})=>S?`${d}
${k}${Math.round(L*100)/100}${C}`:d;o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(M.nodes).join("text").attr("x",d=>d.x0<f/2?d.x1+6:d.x0-6).attr("y",d=>(d.y1+d.y0)/2).attr("dy",`${S?"0":"0.35"}em`).attr("text-anchor",d=>d.x0<f/2?"start":"end").text(b);const P=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(M.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),j=(x==null?void 0:x.linkColor)||"gradient";if(j==="gradient"){const d=P.append("linearGradient").attr("id",L=>(L.uid=ft.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",L=>L.source.x1).attr("x2",L=>L.target.x0);d.append("stop").attr("offset","0%").attr("stop-color",L=>I(L.source.id)),d.append("stop").attr("offset","100%").attr("stop-color",L=>I(L.target.id))}let N;switch(j){case"gradient":N=d=>d.uid;break;case"source":N=d=>I(d.source.id);break;case"target":N=d=>I(d.target.id);break;default:N=j}P.append("path").attr("d",Kt()).attr("stroke",N).attr("stroke-width",d=>Math.max(1,d.width)),At(void 0,o,0,y)},an={draw:on},cn=t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),ln=K.parse.bind(K);K.parse=t=>ln(cn(t));const gn={parser:K,db:rn,renderer:an};export{gn as diagram};