import{T as rt,f as at,g as lt,C as ot,B as ct,Q as ht,E as ut,j as yt,y as pt,S as tt,a as et,U as gt,P as ft,W as mt,I as dt,X as K}from"./index-5273a42c.js";import{v as Z}from"./arc-U4dW4nmj-023840fd.js";import{h as _t}from"./ordinal-MUacOSdK-dbc3c131.js";import{t as bt}from"./array-CqVTtuYm-ffeda358.js";import{P as M}from"./path-Crsf9Nsj-3140eca4.js";import"./init-DjUOC4st-cac434d1.js";function xt(e,h){return h<e?-1:h>e?1:h>=e?0:NaN}function vt(e){return e}function kt(){var e=vt,h=xt,p=null,$=M(0),k=M(K),S=M(0);function u(r){var l,m=(r=bt(r)).length,d,T,I=0,_=new Array(m),x=new Array(m),o=+$.apply(this,arguments),A=Math.min(K,Math.max(-K,k.apply(this,arguments)-o)),R,E=Math.min(Math.abs(A)/m,S.apply(this,arguments)),f=E*(A<0?-1:1),t;for(l=0;l<m;++l)(t=x[_[l]=l]=+e(r[l],l,r))>0&&(I+=t);for(h!=null?_.sort(function(i,s){return h(x[i],x[s])}):p!=null&&_.sort(function(i,s){return p(r[i],r[s])}),l=0,T=I?(A-m*f)/I:0;l<m;++l,o=R)d=_[l],t=x[d],R=o+(t>0?t*T:0)+f,x[d]={data:r[d],index:l,value:t,startAngle:o,endAngle:R,padAngle:E};return x}return u.value=function(r){return arguments.length?(e=typeof r=="function"?r:M(+r),u):e},u.sortValues=function(r){return arguments.length?(h=r,p=null,u):h},u.sort=function(r){return arguments.length?(p=r,h=null,u):p},u.startAngle=function(r){return arguments.length?($=typeof r=="function"?r:M(+r),u):$},u.endAngle=function(r){return arguments.length?(k=typeof r=="function"?r:M(+r),u):k},u.padAngle=function(r){return arguments.length?(S=typeof r=="function"?r:M(+r),u):S},u}var Q=function(){var e=function(f,t,i,s){for(i=i||{},s=f.length;s--;i[f[s]]=t);return i},h=[1,3],p=[1,4],$=[1,5],k=[1,6],S=[1,10,12,14,16,18,19,20,21,22],u=[2,4],r=[1,5,10,12,14,16,18,19,20,21,22],l=[20,21,22],m=[2,7],d=[1,12],T=[1,13],I=[1,14],_=[1,15],x=[1,16],o=[1,17],A={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(f,t,i,s,a,n,y){var v=n.length-1;switch(a){case 3:s.setShowData(!0);break;case 6:this.$=n[v-1];break;case 8:s.addSection(n[v-1],s.cleanupValue(n[v]));break;case 9:this.$=n[v].trim(),s.setDiagramTitle(this.$);break;case 10:this.$=n[v].trim(),s.setAccTitle(this.$);break;case 11:case 12:this.$=n[v].trim(),s.setAccDescription(this.$);break;case 13:s.addSection(n[v].substr(8)),this.$=n[v].substr(8);break}},table:[{3:1,4:2,5:h,20:p,21:$,22:k},{1:[3]},{3:7,4:2,5:h,20:p,21:$,22:k},e(S,u,{6:8,7:[1,9]}),e(r,[2,14]),e(r,[2,15]),e(r,[2,16]),{1:[2,1]},e(l,m,{8:10,9:11,1:[2,2],10:d,12:T,14:I,16:_,18:x,19:o}),e(S,u,{6:18}),e(S,[2,5]),{4:19,20:p,21:$,22:k},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},e(l,[2,12]),e(l,[2,13]),e(l,m,{8:10,9:11,1:[2,3],10:d,12:T,14:I,16:_,18:x,19:o}),e(S,[2,6]),e(l,[2,8]),e(l,[2,9]),e(l,[2,10]),e(l,[2,11])],defaultActions:{7:[2,1]},parseError:function(f,t){if(t.recoverable)this.trace(f);else{var i=new Error(f);throw i.hash=t,i}},parse:function(f){var t=this,i=[0],s=[],a=[null],n=[],y=this.table,v="",N=0,g=0,V=2,D=1,Y=n.slice.call(arguments,1),c=Object.create(this.lexer),O={yy:{}};for(var B in this.yy)Object.prototype.hasOwnProperty.call(this.yy,B)&&(O.yy[B]=this.yy[B]);c.setInput(f,O.yy),O.yy.lexer=c,O.yy.parser=this,typeof c.yylloc>"u"&&(c.yylloc={});var X=c.yylloc;n.push(X);var nt=c.options&&c.options.ranges;typeof O.yy.parseError=="function"?this.parseError=O.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function st(){var P;return P=s.pop()||c.lex()||D,typeof P!="number"&&(P instanceof Array&&(s=P,P=s.pop()),P=t.symbols_[P]||P),P}for(var b,F,w,G,j={},U,C,q,L;;){if(F=i[i.length-1],this.defaultActions[F]?w=this.defaultActions[F]:((b===null||typeof b>"u")&&(b=st()),w=y[F]&&y[F][b]),typeof w>"u"||!w.length||!w[0]){var J="";L=[];for(U in y[F])this.terminals_[U]&&U>V&&L.push("'"+this.terminals_[U]+"'");c.showPosition?J="Parse error on line "+(N+1)+`:
`+c.showPosition()+`
Expecting `+L.join(", ")+", got '"+(this.terminals_[b]||b)+"'":J="Parse error on line "+(N+1)+": Unexpected "+(b==D?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(J,{text:c.match,token:this.terminals_[b]||b,line:c.yylineno,loc:X,expected:L})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+F+", token: "+b);switch(w[0]){case 1:i.push(b),a.push(c.yytext),n.push(c.yylloc),i.push(w[1]),b=null,g=c.yyleng,v=c.yytext,N=c.yylineno,X=c.yylloc;break;case 2:if(C=this.productions_[w[1]][1],j.$=a[a.length-C],j._$={first_line:n[n.length-(C||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(C||1)].first_column,last_column:n[n.length-1].last_column},nt&&(j._$.range=[n[n.length-(C||1)].range[0],n[n.length-1].range[1]]),G=this.performAction.apply(j,[v,g,N,O.yy,w[1],a,n].concat(Y)),typeof G<"u")return G;C&&(i=i.slice(0,-1*C*2),a=a.slice(0,-1*C),n=n.slice(0,-1*C)),i.push(this.productions_[w[1]][0]),a.push(j.$),n.push(j._$),q=y[i[i.length-2]][i[i.length-1]],i.push(q);break;case 3:return!0}}return!0}},R=function(){var f={EOF:1,parseError:function(t,i){if(this.yy.parser)this.yy.parser.parseError(t,i);else throw new Error(t)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var i=t.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===a.length?this.yylloc.first_column:0)+a[a.length-s.length].length-s[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+i+"^"},test_match:function(t,i){var s,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),a=t[0].match(/(?:\r\n?|\n).*/g),a&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var y in n)this[y]=n[y];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,i,s,a;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),y=0;y<n.length;y++)if(s=this._input.match(this.rules[n[y]]),s&&(!i||s[0].length>i[0].length)){if(i=s,a=y,this.options.backtrack_lexer){if(t=this.test_match(s,n[y]),t!==!1)return t;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(t=this.test_match(i,n[a]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,s,a){switch(s){case 0:break;case 1:break;case 2:return 20;case 3:break;case 4:break;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 15:this.popState();break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};return f}();A.lexer=R;function E(){this.yy={}}return E.prototype=A,A.Parser=E,new E}();Q.parser=Q;const wt=Q,it=rt.pie,W={sections:{},showData:!1,config:it};let z=W.sections,H=W.showData;const $t=structuredClone(it),St=()=>structuredClone($t),At=()=>{z=structuredClone(W.sections),H=W.showData,yt()},Et=(e,h)=>{e=pt(e,tt()),z[e]===void 0&&(z[e]=h,et.debug(`added new section: ${e}, with value: ${h}`))},It=()=>z,Tt=e=>(e.substring(0,1)===":"&&(e=e.substring(1).trim()),Number(e.trim())),Ot=e=>{H=e},Ct=()=>H,Pt={getConfig:St,clear:At,setDiagramTitle:at,getDiagramTitle:lt,setAccTitle:ot,getAccTitle:ct,setAccDescription:ht,getAccDescription:ut,addSection:Et,getSections:It,cleanupValue:Tt,setShowData:Ot,getShowData:Ct},Rt=e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,Nt=Rt,Dt=e=>{const h=Object.entries(e).map(p=>({label:p[0],value:p[1]})).sort((p,$)=>$.value-p.value);return kt().value(p=>p.value)(h)},Ft=(e,h,p,$)=>{et.debug(`rendering pie chart
`+e);const k=$.db,S=tt(),u=gt(k.getConfig(),S.pie),r=40,l=18,m=4,d=450,T=d,I=ft(h),_=I.append("g"),x=k.getSections();_.attr("transform","translate("+T/2+","+d/2+")");const{themeVariables:o}=S;let[A]=mt(o.pieOuterStrokeWidth);A??(A=2);const R=u.textPosition,E=Math.min(T,d)/2-r,f=Z().innerRadius(0).outerRadius(E),t=Z().innerRadius(E*R).outerRadius(E*R);_.append("circle").attr("cx",0).attr("cy",0).attr("r",E+A/2).attr("class","pieOuterCircle");const i=Dt(x),s=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12],a=_t(s);_.selectAll("mySlices").data(i).enter().append("path").attr("d",f).attr("fill",g=>a(g.data.label)).attr("class","pieCircle");let n=0;Object.keys(x).forEach(g=>{n+=x[g]}),_.selectAll("mySlices").data(i).enter().append("text").text(g=>(g.data.value/n*100).toFixed(0)+"%").attr("transform",g=>"translate("+t.centroid(g)+")").style("text-anchor","middle").attr("class","slice"),_.append("text").text(k.getDiagramTitle()).attr("x",0).attr("y",-(d-50)/2).attr("class","pieTitleText");const y=_.selectAll(".legend").data(a.domain()).enter().append("g").attr("class","legend").attr("transform",(g,V)=>{const D=l+m,Y=D*a.domain().length/2,c=12*l,O=V*D-Y;return"translate("+c+","+O+")"});y.append("rect").attr("width",l).attr("height",l).style("fill",a).style("stroke",a),y.data(i).append("text").attr("x",l+m).attr("y",l-m).text(g=>{const{label:V,value:D}=g.data;return k.getShowData()?`${V} [${D}]`:V});const v=Math.max(...y.selectAll("text").nodes().map(g=>(g==null?void 0:g.getBoundingClientRect().width)??0)),N=T+r+l+m+v;I.attr("viewBox",`0 0 ${N} ${d}`),dt(I,d,N,u.useMaxWidth)},Mt={draw:Ft},Yt={parser:wt,db:Pt,renderer:Mt,styles:Nt};export{Yt as diagram};
