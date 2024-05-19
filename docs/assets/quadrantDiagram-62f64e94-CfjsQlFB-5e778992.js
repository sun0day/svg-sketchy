import{Y as Pt,S as yt,T as E,a as lt,C as vt,B as Ct,f as Lt,g as At,E as zt,Q as Et,j as Dt,w as gt,I as It,y as Rt}from"./index-5273a42c.js";import{Z as mt}from"./linear-2NdyAzsY-b58f7408.js";import"./init-DjUOC4st-cac434d1.js";var ft=function(){var i=function(Y,a,s,l){for(s=s||{},l=Y.length;l--;s[Y[l]]=a);return s},r=[1,3],o=[1,4],u=[1,5],g=[1,6],c=[1,7],h=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],f=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],e=[32,33,34],x=[2,7],v=[1,13],B=[1,17],U=[1,18],D=[1,19],q=[1,20],I=[1,21],O=[1,22],C=[1,23],K=[1,24],it=[1,25],et=[1,26],at=[1,27],M=[1,30],X=[1,31],p=[1,32],t=[1,33],T=[1,34],m=[1,35],A=[1,36],_=[1,37],b=[1,38],S=[1,39],k=[1,40],F=[1,41],P=[1,42],$=[1,57],H=[1,58],L=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],ot={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(Y,a,s,l,y,n,N){var d=n.length-1;switch(y){case 12:this.$=n[d].trim(),l.setDiagramTitle(this.$);break;case 13:this.$=n[d].trim(),l.setAccTitle(this.$);break;case 14:case 15:this.$=n[d].trim(),l.setAccDescription(this.$);break;case 16:l.addSection(n[d].substr(8)),this.$=n[d].substr(8);break;case 17:l.addPoint(n[d-3],n[d-1],n[d]);break;case 18:l.setXAxisLeftText(n[d-2]),l.setXAxisRightText(n[d]);break;case 19:n[d-1].text+=" ⟶ ",l.setXAxisLeftText(n[d-1]);break;case 20:l.setXAxisLeftText(n[d]);break;case 21:l.setYAxisBottomText(n[d-2]),l.setYAxisTopText(n[d]);break;case 22:n[d-1].text+=" ⟶ ",l.setYAxisBottomText(n[d-1]);break;case 23:l.setYAxisBottomText(n[d]);break;case 24:l.setQuadrant1Text(n[d]);break;case 25:l.setQuadrant2Text(n[d]);break;case 26:l.setQuadrant3Text(n[d]);break;case 27:l.setQuadrant4Text(n[d]);break;case 31:this.$={text:n[d],type:"text"};break;case 32:this.$={text:n[d-1].text+""+n[d],type:n[d-1].type};break;case 33:this.$={text:n[d],type:"text"};break;case 34:this.$={text:n[d],type:"markdown"};break;case 35:this.$=n[d];break;case 36:this.$=n[d-1]+""+n[d];break}},table:[{3:1,4:2,5:r,6:o,32:u,33:g,34:c},{1:[3]},{3:8,4:2,5:r,6:o,32:u,33:g,34:c},{3:9,4:2,5:r,6:o,32:u,33:g,34:c},i(h,[2,4],{7:10}),i(f,[2,28]),i(f,[2,29]),i(f,[2,30]),{1:[2,1]},{1:[2,2]},i(e,x,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:v,13:B,15:U,17:D,19:q,20:I,25:O,27:C,28:K,29:it,30:et,31:at,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P}),i(h,[2,5]),{4:43,32:u,33:g,34:c},i(e,x,{10:14,11:15,12:16,21:28,35:29,9:44,5:v,13:B,15:U,17:D,19:q,20:I,25:O,27:C,28:K,29:it,30:et,31:at,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P}),i(e,[2,9]),i(e,[2,10]),i(e,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},i(e,[2,15]),i(e,[2,16]),{21:48,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{21:49,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{21:50,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{21:51,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{21:52,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{21:53,35:29,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P},{5:$,22:[1,54],35:56,36:55,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H},i(L,[2,31]),i(L,[2,33]),i(L,[2,34]),i(L,[2,37]),i(L,[2,38]),i(L,[2,39]),i(L,[2,40]),i(L,[2,41]),i(L,[2,42]),i(L,[2,43]),i(L,[2,44]),i(L,[2,45]),i(L,[2,46]),i(L,[2,47]),i(h,[2,6]),i(e,[2,8]),i(e,[2,12]),i(e,[2,13]),i(e,[2,14]),i(e,[2,20],{36:55,35:56,5:$,26:[1,59],40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,23],{36:55,35:56,5:$,26:[1,60],40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,24],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,25],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,26],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,27],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),{23:[1,61]},i(L,[2,32]),i(L,[2,48]),i(L,[2,49]),i(L,[2,50]),i(e,[2,19],{35:29,21:62,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P}),i(e,[2,22],{35:29,21:63,37:M,38:X,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P}),{24:[1,64]},i(e,[2,18],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,21],{36:55,35:56,5:$,40:p,41:t,42:T,43:m,44:A,45:_,46:b,47:S,48:k,49:F,50:P,51:H}),i(e,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(Y,a){if(a.recoverable)this.trace(Y);else{var s=new Error(Y);throw s.hash=a,s}},parse:function(Y){var a=this,s=[0],l=[],y=[null],n=[],N=this.table,d="",nt=0,pt=0,bt=2,qt=1,St=n.slice.call(arguments,1),z=Object.create(this.lexer),G={yy:{}};for(var ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ct)&&(G.yy[ct]=this.yy[ct]);z.setInput(Y,G.yy),G.yy.lexer=z,G.yy.parser=this,typeof z.yylloc>"u"&&(z.yylloc={});var dt=z.yylloc;n.push(dt);var kt=z.options&&z.options.ranges;typeof G.yy.parseError=="function"?this.parseError=G.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ft(){var V;return V=l.pop()||z.lex()||qt,typeof V!="number"&&(V instanceof Array&&(l=V,V=l.pop()),V=a.symbols_[V]||V),V}for(var Q,J,W,ut,tt={},rt,j,Tt,st;;){if(J=s[s.length-1],this.defaultActions[J]?W=this.defaultActions[J]:((Q===null||typeof Q>"u")&&(Q=Ft()),W=N[J]&&N[J][Q]),typeof W>"u"||!W.length||!W[0]){var xt="";st=[];for(rt in N[J])this.terminals_[rt]&&rt>bt&&st.push("'"+this.terminals_[rt]+"'");z.showPosition?xt="Parse error on line "+(nt+1)+`:
`+z.showPosition()+`
Expecting `+st.join(", ")+", got '"+(this.terminals_[Q]||Q)+"'":xt="Parse error on line "+(nt+1)+": Unexpected "+(Q==qt?"end of input":"'"+(this.terminals_[Q]||Q)+"'"),this.parseError(xt,{text:z.match,token:this.terminals_[Q]||Q,line:z.yylineno,loc:dt,expected:st})}if(W[0]instanceof Array&&W.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+Q);switch(W[0]){case 1:s.push(Q),y.push(z.yytext),n.push(z.yylloc),s.push(W[1]),Q=null,pt=z.yyleng,d=z.yytext,nt=z.yylineno,dt=z.yylloc;break;case 2:if(j=this.productions_[W[1]][1],tt.$=y[y.length-j],tt._$={first_line:n[n.length-(j||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(j||1)].first_column,last_column:n[n.length-1].last_column},kt&&(tt._$.range=[n[n.length-(j||1)].range[0],n[n.length-1].range[1]]),ut=this.performAction.apply(tt,[d,pt,nt,G.yy,W[1],y,n].concat(St)),typeof ut<"u")return ut;j&&(s=s.slice(0,-1*j*2),y=y.slice(0,-1*j),n=n.slice(0,-1*j)),s.push(this.productions_[W[1]][0]),y.push(tt.$),n.push(tt._$),Tt=N[s[s.length-2]][s[s.length-1]],s.push(Tt);break;case 3:return!0}}return!0}},_t=function(){var Y={EOF:1,parseError:function(a,s){if(this.yy.parser)this.yy.parser.parseError(a,s);else throw new Error(a)},setInput:function(a,s){return this.yy=s||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var s=a.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var s=a.length,l=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===y.length?this.yylloc.first_column:0)+y[y.length-l.length].length-l[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),s=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+s+"^"},test_match:function(a,s){var l,y,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),y=a[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],l=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var N in n)this[N]=n[N];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,s,l,y;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),N=0;N<n.length;N++)if(l=this._input.match(this.rules[n[N]]),l&&(!s||l[0].length>s[0].length)){if(s=l,y=N,this.options.backtrack_lexer){if(a=this.test_match(l,n[N]),a!==!1)return a;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(a=this.test_match(s,n[y]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,s,l,y){switch(l){case 0:break;case 1:break;case 2:return 32;case 3:break;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 22:this.popState();break;case 23:this.begin("string");break;case 24:this.popState();break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 28:this.popState();break;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:return 46;case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return Y}();ot.lexer=_t;function ht(){this.yy={}}return ht.prototype=ot,ot.Parser=ht,new ht}();ft.parser=ft;const Bt=ft,w=Pt();class wt{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var r,o,u,g,c,h,f,e,x,v,B,U,D,q,I,O,C,K;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:((r=E.quadrantChart)==null?void 0:r.chartWidth)||500,chartWidth:((o=E.quadrantChart)==null?void 0:o.chartHeight)||500,titlePadding:((u=E.quadrantChart)==null?void 0:u.titlePadding)||10,titleFontSize:((g=E.quadrantChart)==null?void 0:g.titleFontSize)||20,quadrantPadding:((c=E.quadrantChart)==null?void 0:c.quadrantPadding)||5,xAxisLabelPadding:((h=E.quadrantChart)==null?void 0:h.xAxisLabelPadding)||5,yAxisLabelPadding:((f=E.quadrantChart)==null?void 0:f.yAxisLabelPadding)||5,xAxisLabelFontSize:((e=E.quadrantChart)==null?void 0:e.xAxisLabelFontSize)||16,yAxisLabelFontSize:((x=E.quadrantChart)==null?void 0:x.yAxisLabelFontSize)||16,quadrantLabelFontSize:((v=E.quadrantChart)==null?void 0:v.quadrantLabelFontSize)||16,quadrantTextTopPadding:((B=E.quadrantChart)==null?void 0:B.quadrantTextTopPadding)||5,pointTextPadding:((U=E.quadrantChart)==null?void 0:U.pointTextPadding)||5,pointLabelFontSize:((D=E.quadrantChart)==null?void 0:D.pointLabelFontSize)||12,pointRadius:((q=E.quadrantChart)==null?void 0:q.pointRadius)||5,xAxisPosition:((I=E.quadrantChart)==null?void 0:I.xAxisPosition)||"top",yAxisPosition:((O=E.quadrantChart)==null?void 0:O.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:((C=E.quadrantChart)==null?void 0:C.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:((K=E.quadrantChart)==null?void 0:K.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:w.quadrant1Fill,quadrant2Fill:w.quadrant2Fill,quadrant3Fill:w.quadrant3Fill,quadrant4Fill:w.quadrant4Fill,quadrant1TextFill:w.quadrant1TextFill,quadrant2TextFill:w.quadrant2TextFill,quadrant3TextFill:w.quadrant3TextFill,quadrant4TextFill:w.quadrant4TextFill,quadrantPointFill:w.quadrantPointFill,quadrantPointTextFill:w.quadrantPointTextFill,quadrantXAxisTextFill:w.quadrantXAxisTextFill,quadrantYAxisTextFill:w.quadrantYAxisTextFill,quadrantTitleFill:w.quadrantTitleFill,quadrantInternalBorderStrokeFill:w.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:w.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),lt.info("clear called")}setData(r){this.data={...this.data,...r}}addPoints(r){this.data.points=[...r,...this.data.points]}setConfig(r){lt.trace("setConfig called with: ",r),this.config={...this.config,...r}}setThemeConfig(r){lt.trace("setThemeConfig called with: ",r),this.themeConfig={...this.themeConfig,...r}}calculateSpace(r,o,u,g){const c=this.config.xAxisLabelPadding*2+this.config.xAxisLabelFontSize,h={top:r==="top"&&o?c:0,bottom:r==="bottom"&&o?c:0},f=this.config.yAxisLabelPadding*2+this.config.yAxisLabelFontSize,e={left:this.config.yAxisPosition==="left"&&u?f:0,right:this.config.yAxisPosition==="right"&&u?f:0},x=this.config.titleFontSize+this.config.titlePadding*2,v={top:g?x:0},B=this.config.quadrantPadding+e.left,U=this.config.quadrantPadding+h.top+v.top,D=this.config.chartWidth-this.config.quadrantPadding*2-e.left-e.right,q=this.config.chartHeight-this.config.quadrantPadding*2-h.top-h.bottom-v.top,I=D/2,O=q/2;return{xAxisSpace:h,yAxisSpace:e,titleSpace:v,quadrantSpace:{quadrantLeft:B,quadrantTop:U,quadrantWidth:D,quadrantHalfWidth:I,quadrantHeight:q,quadrantHalfHeight:O}}}getAxisLabels(r,o,u,g){const{quadrantSpace:c,titleSpace:h}=g,{quadrantHalfHeight:f,quadrantHeight:e,quadrantLeft:x,quadrantHalfWidth:v,quadrantTop:B,quadrantWidth:U}=c,D=!!this.data.xAxisRightText,q=!!this.data.yAxisTopText,I=[];return this.data.xAxisLeftText&&o&&I.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:x+(D?v/2:0),y:r==="top"?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+B+e+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:D?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&o&&I.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:x+v+(D?v/2:0),y:r==="top"?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+B+e+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:D?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&u&&I.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+x+U+this.config.quadrantPadding,y:B+e-(q?f/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:q?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&u&&I.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+x+U+this.config.quadrantPadding,y:B+f-(q?f/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:q?"center":"left",horizontalPos:"top",rotation:-90}),I}getQuadrants(r){const{quadrantSpace:o}=r,{quadrantHalfHeight:u,quadrantLeft:g,quadrantHalfWidth:c,quadrantTop:h}=o,f=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+c,y:h,width:c,height:u,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:h,width:c,height:u,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:h+u,width:c,height:u,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+c,y:h+u,width:c,height:u,fill:this.themeConfig.quadrant4Fill}];for(const e of f)e.text.x=e.x+e.width/2,this.data.points.length===0?(e.text.y=e.y+e.height/2,e.text.horizontalPos="middle"):(e.text.y=e.y+this.config.quadrantTextTopPadding,e.text.horizontalPos="top");return f}getQuadrantPoints(r){const{quadrantSpace:o}=r,{quadrantHeight:u,quadrantLeft:g,quadrantTop:c,quadrantWidth:h}=o,f=mt().domain([0,1]).range([g,h+g]),e=mt().domain([0,1]).range([u+c,c]);return this.data.points.map(x=>({x:f(x.x),y:e(x.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:x.text,fill:this.themeConfig.quadrantPointTextFill,x:f(x.x),y:e(x.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(r){const o=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:u}=r,{quadrantHalfHeight:g,quadrantHeight:c,quadrantLeft:h,quadrantHalfWidth:f,quadrantTop:e,quadrantWidth:x}=u;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-o,y1:e,x2:h+x+o,y2:e},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h+x,y1:e+o,x2:h+x,y2:e+c-o},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-o,y1:e+c,x2:h+x+o,y2:e+c},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h,y1:e+o,x2:h,y2:e+c-o},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+f,y1:e+o,x2:h+f,y2:e+c-o},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+o,y1:e+g,x2:h+x-o,y2:e+g}]}getTitle(r){if(r)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const r=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),o=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),u=this.config.showTitle&&!!this.data.titleText,g=this.data.points.length>0?"bottom":this.config.xAxisPosition,c=this.calculateSpace(g,r,o,u);return{points:this.getQuadrantPoints(c),quadrants:this.getQuadrants(c),axisLabels:this.getAxisLabels(g,r,o,c),borderLines:this.getBorders(c),title:this.getTitle(u)}}}const Nt=yt();function Z(i){return Rt(i.trim(),Nt)}const R=new wt;function Qt(i){R.setData({quadrant1Text:Z(i.text)})}function Ut(i){R.setData({quadrant2Text:Z(i.text)})}function Xt(i){R.setData({quadrant3Text:Z(i.text)})}function Mt(i){R.setData({quadrant4Text:Z(i.text)})}function Wt(i){R.setData({xAxisLeftText:Z(i.text)})}function Ot(i){R.setData({xAxisRightText:Z(i.text)})}function Yt(i){R.setData({yAxisTopText:Z(i.text)})}function $t(i){R.setData({yAxisBottomText:Z(i.text)})}function Ht(i,r,o){R.addPoints([{x:r,y:o,text:Z(i.text)}])}function jt(i){R.setConfig({chartWidth:i})}function Vt(i){R.setConfig({chartHeight:i})}function Zt(){const i=yt(),{themeVariables:r,quadrantChart:o}=i;return o&&R.setConfig(o),R.setThemeConfig({quadrant1Fill:r.quadrant1Fill,quadrant2Fill:r.quadrant2Fill,quadrant3Fill:r.quadrant3Fill,quadrant4Fill:r.quadrant4Fill,quadrant1TextFill:r.quadrant1TextFill,quadrant2TextFill:r.quadrant2TextFill,quadrant3TextFill:r.quadrant3TextFill,quadrant4TextFill:r.quadrant4TextFill,quadrantPointFill:r.quadrantPointFill,quadrantPointTextFill:r.quadrantPointTextFill,quadrantXAxisTextFill:r.quadrantXAxisTextFill,quadrantYAxisTextFill:r.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:r.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:r.quadrantInternalBorderStrokeFill,quadrantTitleFill:r.quadrantTitleFill}),R.setData({titleText:At()}),R.build()}const Kt=function(){R.clear(),Dt()},Gt={setWidth:jt,setHeight:Vt,setQuadrant1Text:Qt,setQuadrant2Text:Ut,setQuadrant3Text:Xt,setQuadrant4Text:Mt,setXAxisLeftText:Wt,setXAxisRightText:Ot,setYAxisTopText:Yt,setYAxisBottomText:$t,addPoint:Ht,getQuadrantData:Zt,clear:Kt,setAccTitle:vt,getAccTitle:Ct,setDiagramTitle:Lt,getDiagramTitle:At,getAccDescription:zt,setAccDescription:Et},Jt=(i,r,o,u)=>{var g,c,h;function f(t){return t==="top"?"hanging":"middle"}function e(t){return t==="left"?"start":"middle"}function x(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const v=yt();lt.debug(`Rendering quadrant chart
`+i);const B=v.securityLevel;let U;B==="sandbox"&&(U=gt("#i"+r));const D=(B==="sandbox"?gt(U.nodes()[0].contentDocument.body):gt("body")).select(`[id="${r}"]`),q=D.append("g").attr("class","main"),I=((g=v.quadrantChart)==null?void 0:g.chartWidth)||500,O=((c=v.quadrantChart)==null?void 0:c.chartHeight)||500;It(D,O,I,((h=v.quadrantChart)==null?void 0:h.useMaxWidth)||!0),D.attr("viewBox","0 0 "+I+" "+O),u.db.setHeight(O),u.db.setWidth(I);const C=u.db.getQuadrantData(),K=q.append("g").attr("class","quadrants"),it=q.append("g").attr("class","border"),et=q.append("g").attr("class","data-points"),at=q.append("g").attr("class","labels"),M=q.append("g").attr("class","title");C.title&&M.append("text").attr("x",0).attr("y",0).attr("fill",C.title.fill).attr("font-size",C.title.fontSize).attr("dominant-baseline",f(C.title.horizontalPos)).attr("text-anchor",e(C.title.verticalPos)).attr("transform",x(C.title)).text(C.title.text),C.borderLines&&it.selectAll("line").data(C.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const X=K.selectAll("g.quadrant").data(C.quadrants).enter().append("g").attr("class","quadrant");X.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),X.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>f(t.text.horizontalPos)).attr("text-anchor",t=>e(t.text.verticalPos)).attr("transform",t=>x(t.text)).text(t=>t.text.text),at.selectAll("g.label").data(C.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>f(t.horizontalPos)).attr("text-anchor",t=>e(t.verticalPos)).attr("transform",t=>x(t));const p=et.selectAll("g.data-point").data(C.points).enter().append("g").attr("class","data-point");p.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),p.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>f(t.text.horizontalPos)).attr("text-anchor",t=>e(t.text.verticalPos)).attr("transform",t=>x(t.text))},ti={draw:Jt},ni={parser:Bt,db:Gt,renderer:ti,styles:()=>""};export{ni as diagram};
