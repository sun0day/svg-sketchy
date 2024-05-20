import{S as I,C as Me,B as Le,E as Ie,Q as ve,f as Ae,g as Ce,a as N,M as D,j as Oe,w as Se,i as Ge,m as Pe,p as Be}from"./index-b1aa4907.js";var he=function(){var i=function(T,l,f,r){for(f=f||{},r=T.length;r--;f[T[r]]=l);return f},n=[1,3],o=[1,6],m=[1,4],a=[1,5],s=[2,5],g=[1,12],y=[5,7,13,19,21,23,24,26,28,31,37,40,47],d=[7,13,19,21,23,24,26,28,31,37,40],k=[7,12,13,19,21,23,24,26,28,31,37,40],c=[7,13,47],M=[1,42],h=[1,41],$=[7,13,29,32,35,38,47],u=[1,55],p=[1,56],b=[1,57],O=[7,13,32,35,42,47],E={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(T,l,f,r,_,e,P){var t=e.length-1;switch(_){case 2:return e[t];case 3:return e[t-1];case 4:return r.setDirection(e[t-3]),e[t-1];case 6:r.setOptions(e[t-1]),this.$=e[t];break;case 7:e[t-1]+=e[t],this.$=e[t-1];break;case 9:this.$=[];break;case 10:e[t-1].push(e[t]),this.$=e[t-1];break;case 11:this.$=e[t-1];break;case 16:this.$=e[t].trim(),r.setAccTitle(this.$);break;case 17:case 18:this.$=e[t].trim(),r.setAccDescription(this.$);break;case 19:r.addSection(e[t].substr(8)),this.$=e[t].substr(8);break;case 21:r.checkout(e[t]);break;case 22:r.branch(e[t]);break;case 23:r.branch(e[t-2],e[t]);break;case 24:r.cherryPick(e[t],"",void 0);break;case 25:r.cherryPick(e[t-2],"",void 0,e[t]);break;case 26:r.cherryPick(e[t-2],"",e[t]);break;case 27:r.cherryPick(e[t-4],"",e[t],e[t-2]);break;case 28:r.cherryPick(e[t-4],"",e[t-2],e[t]);break;case 29:r.cherryPick(e[t],"",e[t-2]);break;case 30:r.cherryPick(e[t],"","");break;case 31:r.cherryPick(e[t-2],"","");break;case 32:r.cherryPick(e[t-4],"","",e[t-2]);break;case 33:r.cherryPick(e[t-4],"","",e[t]);break;case 34:r.cherryPick(e[t-2],"",e[t-4],e[t]);break;case 35:r.cherryPick(e[t-2],"","",e[t]);break;case 36:r.merge(e[t],"","","");break;case 37:r.merge(e[t-2],e[t],"","");break;case 38:r.merge(e[t-2],"",e[t],"");break;case 39:r.merge(e[t-2],"","",e[t]);break;case 40:r.merge(e[t-4],e[t],"",e[t-2]);break;case 41:r.merge(e[t-4],"",e[t],e[t-2]);break;case 42:r.merge(e[t-4],"",e[t-2],e[t]);break;case 43:r.merge(e[t-4],e[t-2],e[t],"");break;case 44:r.merge(e[t-4],e[t-2],"",e[t]);break;case 45:r.merge(e[t-4],e[t],e[t-2],"");break;case 46:r.merge(e[t-6],e[t-4],e[t-2],e[t]);break;case 47:r.merge(e[t-6],e[t],e[t-4],e[t-2]);break;case 48:r.merge(e[t-6],e[t-4],e[t],e[t-2]);break;case 49:r.merge(e[t-6],e[t-2],e[t-4],e[t]);break;case 50:r.merge(e[t-6],e[t],e[t-2],e[t-4]);break;case 51:r.merge(e[t-6],e[t-2],e[t],e[t-4]);break;case 52:r.commit(e[t]);break;case 53:r.commit("","",r.commitType.NORMAL,e[t]);break;case 54:r.commit("","",e[t],"");break;case 55:r.commit("","",e[t],e[t-2]);break;case 56:r.commit("","",e[t-2],e[t]);break;case 57:r.commit("",e[t],r.commitType.NORMAL,"");break;case 58:r.commit("",e[t-2],r.commitType.NORMAL,e[t]);break;case 59:r.commit("",e[t],r.commitType.NORMAL,e[t-2]);break;case 60:r.commit("",e[t-2],e[t],"");break;case 61:r.commit("",e[t],e[t-2],"");break;case 62:r.commit("",e[t-4],e[t-2],e[t]);break;case 63:r.commit("",e[t-4],e[t],e[t-2]);break;case 64:r.commit("",e[t-2],e[t-4],e[t]);break;case 65:r.commit("",e[t],e[t-4],e[t-2]);break;case 66:r.commit("",e[t],e[t-2],e[t-4]);break;case 67:r.commit("",e[t-2],e[t],e[t-4]);break;case 68:r.commit(e[t],"",r.commitType.NORMAL,"");break;case 69:r.commit(e[t],"",r.commitType.NORMAL,e[t-2]);break;case 70:r.commit(e[t-2],"",r.commitType.NORMAL,e[t]);break;case 71:r.commit(e[t-2],"",e[t],"");break;case 72:r.commit(e[t],"",e[t-2],"");break;case 73:r.commit(e[t],e[t-2],r.commitType.NORMAL,"");break;case 74:r.commit(e[t-2],e[t],r.commitType.NORMAL,"");break;case 75:r.commit(e[t-4],"",e[t-2],e[t]);break;case 76:r.commit(e[t-4],"",e[t],e[t-2]);break;case 77:r.commit(e[t-2],"",e[t-4],e[t]);break;case 78:r.commit(e[t],"",e[t-4],e[t-2]);break;case 79:r.commit(e[t],"",e[t-2],e[t-4]);break;case 80:r.commit(e[t-2],"",e[t],e[t-4]);break;case 81:r.commit(e[t-4],e[t],e[t-2],"");break;case 82:r.commit(e[t-4],e[t-2],e[t],"");break;case 83:r.commit(e[t-2],e[t],e[t-4],"");break;case 84:r.commit(e[t],e[t-2],e[t-4],"");break;case 85:r.commit(e[t],e[t-4],e[t-2],"");break;case 86:r.commit(e[t-2],e[t-4],e[t],"");break;case 87:r.commit(e[t-4],e[t],r.commitType.NORMAL,e[t-2]);break;case 88:r.commit(e[t-4],e[t-2],r.commitType.NORMAL,e[t]);break;case 89:r.commit(e[t-2],e[t],r.commitType.NORMAL,e[t-4]);break;case 90:r.commit(e[t],e[t-2],r.commitType.NORMAL,e[t-4]);break;case 91:r.commit(e[t],e[t-4],r.commitType.NORMAL,e[t-2]);break;case 92:r.commit(e[t-2],e[t-4],r.commitType.NORMAL,e[t]);break;case 93:r.commit(e[t-6],e[t-4],e[t-2],e[t]);break;case 94:r.commit(e[t-6],e[t-4],e[t],e[t-2]);break;case 95:r.commit(e[t-6],e[t-2],e[t-4],e[t]);break;case 96:r.commit(e[t-6],e[t],e[t-4],e[t-2]);break;case 97:r.commit(e[t-6],e[t-2],e[t],e[t-4]);break;case 98:r.commit(e[t-6],e[t],e[t-2],e[t-4]);break;case 99:r.commit(e[t-4],e[t-6],e[t-2],e[t]);break;case 100:r.commit(e[t-4],e[t-6],e[t],e[t-2]);break;case 101:r.commit(e[t-2],e[t-6],e[t-4],e[t]);break;case 102:r.commit(e[t],e[t-6],e[t-4],e[t-2]);break;case 103:r.commit(e[t-2],e[t-6],e[t],e[t-4]);break;case 104:r.commit(e[t],e[t-6],e[t-2],e[t-4]);break;case 105:r.commit(e[t],e[t-4],e[t-2],e[t-6]);break;case 106:r.commit(e[t-2],e[t-4],e[t],e[t-6]);break;case 107:r.commit(e[t],e[t-2],e[t-4],e[t-6]);break;case 108:r.commit(e[t-2],e[t],e[t-4],e[t-6]);break;case 109:r.commit(e[t-4],e[t-2],e[t],e[t-6]);break;case 110:r.commit(e[t-4],e[t],e[t-2],e[t-6]);break;case 111:r.commit(e[t-2],e[t-4],e[t-6],e[t]);break;case 112:r.commit(e[t],e[t-4],e[t-6],e[t-2]);break;case 113:r.commit(e[t-2],e[t],e[t-6],e[t-4]);break;case 114:r.commit(e[t],e[t-2],e[t-6],e[t-4]);break;case 115:r.commit(e[t-4],e[t-2],e[t-6],e[t]);break;case 116:r.commit(e[t-4],e[t],e[t-6],e[t-2]);break;case 117:this.$="";break;case 118:this.$=e[t];break;case 119:this.$=r.commitType.NORMAL;break;case 120:this.$=r.commitType.REVERSE;break;case 121:this.$=r.commitType.HIGHLIGHT;break}},table:[{3:1,4:2,5:n,7:o,13:m,47:a},{1:[3]},{3:7,4:2,5:n,7:o,13:m,47:a},{6:8,7:s,8:[1,9],9:[1,10],10:11,13:g},i(y,[2,124]),i(y,[2,125]),i(y,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:s,10:11,13:g},{8:[1,15]},i(d,[2,9],{11:16,12:[1,17]}),i(k,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:s,10:11,13:g},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},i(k,[2,7]),{1:[2,3]},{7:[1,36]},i(d,[2,10]),{4:37,7:o,13:m,47:a},i(d,[2,12]),i(c,[2,13]),i(c,[2,14]),i(c,[2,15]),{20:[1,38]},{22:[1,39]},i(c,[2,18]),i(c,[2,19]),i(c,[2,20]),{27:40,33:M,46:h},i(c,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:M,46:h},{32:[1,50],35:[1,51]},{27:52,33:M,46:h},{1:[2,4]},i(d,[2,11]),i(c,[2,16]),i(c,[2,17]),i(c,[2,21]),i($,[2,122]),i($,[2,123]),i(c,[2,52]),{33:[1,53]},{39:54,43:u,44:p,45:b},{33:[1,58]},{33:[1,59]},i(c,[2,118]),i(c,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},i(c,[2,22],{29:[1,66]}),i(c,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),i(c,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),i(O,[2,119]),i(O,[2,120]),i(O,[2,121]),i(c,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),i(c,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:u,44:p,45:b},{33:[1,81]},i(c,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:u,44:p,45:b},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:u,44:p,45:b},{33:[1,95]},{33:[1,96]},{39:97,43:u,44:p,45:b},{33:[1,98]},i(c,[2,37],{35:[1,100],38:[1,99]}),i(c,[2,38],{32:[1,102],35:[1,101]}),i(c,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},i(c,[2,23]),i(c,[2,55],{32:[1,110],42:[1,111]}),i(c,[2,59],{38:[1,112],42:[1,113]}),i(c,[2,69],{32:[1,115],38:[1,114]}),i(c,[2,56],{32:[1,116],42:[1,117]}),i(c,[2,61],{35:[1,118],42:[1,119]}),i(c,[2,72],{32:[1,121],35:[1,120]}),i(c,[2,58],{38:[1,122],42:[1,123]}),i(c,[2,60],{35:[1,124],42:[1,125]}),i(c,[2,73],{35:[1,127],38:[1,126]}),i(c,[2,70],{32:[1,129],38:[1,128]}),i(c,[2,71],{32:[1,131],35:[1,130]}),i(c,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:u,44:p,45:b},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:u,44:p,45:b},i(c,[2,25],{35:[1,140]}),i(c,[2,26],{34:[1,141]}),i(c,[2,31],{34:[1,142]}),i(c,[2,29],{34:[1,143]}),i(c,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:u,44:p,45:b},{33:[1,148]},{39:149,43:u,44:p,45:b},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:u,44:p,45:b},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:u,44:p,45:b},{33:[1,162]},{39:163,43:u,44:p,45:b},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:u,44:p,45:b},{33:[1,168]},i(c,[2,43],{35:[1,169]}),i(c,[2,44],{38:[1,170]}),i(c,[2,42],{32:[1,171]}),i(c,[2,45],{35:[1,172]}),i(c,[2,40],{38:[1,173]}),i(c,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},i(c,[2,66],{42:[1,181]}),i(c,[2,79],{32:[1,182]}),i(c,[2,67],{42:[1,183]}),i(c,[2,90],{38:[1,184]}),i(c,[2,80],{32:[1,185]}),i(c,[2,89],{38:[1,186]}),i(c,[2,65],{42:[1,187]}),i(c,[2,78],{32:[1,188]}),i(c,[2,64],{42:[1,189]}),i(c,[2,84],{35:[1,190]}),i(c,[2,77],{32:[1,191]}),i(c,[2,83],{35:[1,192]}),i(c,[2,63],{42:[1,193]}),i(c,[2,91],{38:[1,194]}),i(c,[2,62],{42:[1,195]}),i(c,[2,85],{35:[1,196]}),i(c,[2,86],{35:[1,197]}),i(c,[2,92],{38:[1,198]}),i(c,[2,76],{32:[1,199]}),i(c,[2,87],{38:[1,200]}),i(c,[2,75],{32:[1,201]}),i(c,[2,81],{35:[1,202]}),i(c,[2,82],{35:[1,203]}),i(c,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:u,44:p,45:b},{33:[1,207]},{33:[1,208]},{39:209,43:u,44:p,45:b},{33:[1,210]},i(c,[2,27]),i(c,[2,32]),i(c,[2,28]),i(c,[2,33]),i(c,[2,34]),i(c,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:u,44:p,45:b},{33:[1,215]},{39:216,43:u,44:p,45:b},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:u,44:p,45:b},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:u,44:p,45:b},{33:[1,229]},{39:230,43:u,44:p,45:b},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:u,44:p,45:b},i(c,[2,46]),i(c,[2,48]),i(c,[2,47]),i(c,[2,49]),i(c,[2,51]),i(c,[2,50]),i(c,[2,107]),i(c,[2,108]),i(c,[2,105]),i(c,[2,106]),i(c,[2,110]),i(c,[2,109]),i(c,[2,114]),i(c,[2,113]),i(c,[2,112]),i(c,[2,111]),i(c,[2,116]),i(c,[2,115]),i(c,[2,104]),i(c,[2,103]),i(c,[2,102]),i(c,[2,101]),i(c,[2,99]),i(c,[2,100]),i(c,[2,98]),i(c,[2,97]),i(c,[2,96]),i(c,[2,95]),i(c,[2,93]),i(c,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(T,l){if(l.recoverable)this.trace(T);else{var f=new Error(T);throw f.hash=l,f}},parse:function(T){var l=this,f=[0],r=[],_=[null],e=[],P=this.table,t="",te=0,ye=0,Ee=2,ue=1,Te=e.slice.call(arguments,1),v=Object.create(this.lexer),F={yy:{}};for(var ne in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ne)&&(F.yy[ne]=this.yy[ne]);v.setInput(T,F.yy),F.yy.lexer=v,F.yy.parser=this,typeof v.yylloc>"u"&&(v.yylloc={});var se=v.yylloc;e.push(se);var we=v.options&&v.options.ranges;typeof F.yy.parseError=="function"?this.parseError=F.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Re(){var Y;return Y=r.pop()||v.lex()||ue,typeof Y!="number"&&(Y instanceof Array&&(r=Y,Y=r.pop()),Y=l.symbols_[Y]||Y),Y}for(var B,U,z,oe,W={},ie,q,pe,re;;){if(U=f[f.length-1],this.defaultActions[U]?z=this.defaultActions[U]:((B===null||typeof B>"u")&&(B=Re()),z=P[U]&&P[U][B]),typeof z>"u"||!z.length||!z[0]){var le="";re=[];for(ie in P[U])this.terminals_[ie]&&ie>Ee&&re.push("'"+this.terminals_[ie]+"'");v.showPosition?le="Parse error on line "+(te+1)+`:
`+v.showPosition()+`
Expecting `+re.join(", ")+", got '"+(this.terminals_[B]||B)+"'":le="Parse error on line "+(te+1)+": Unexpected "+(B==ue?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(le,{text:v.match,token:this.terminals_[B]||B,line:v.yylineno,loc:se,expected:re})}if(z[0]instanceof Array&&z.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+B);switch(z[0]){case 1:f.push(B),_.push(v.yytext),e.push(v.yylloc),f.push(z[1]),B=null,ye=v.yyleng,t=v.yytext,te=v.yylineno,se=v.yylloc;break;case 2:if(q=this.productions_[z[1]][1],W.$=_[_.length-q],W._$={first_line:e[e.length-(q||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(q||1)].first_column,last_column:e[e.length-1].last_column},we&&(W._$.range=[e[e.length-(q||1)].range[0],e[e.length-1].range[1]]),oe=this.performAction.apply(W,[t,ye,te,F.yy,z[1],_,e].concat(Te)),typeof oe<"u")return oe;q&&(f=f.slice(0,-1*q*2),_=_.slice(0,-1*q),e=e.slice(0,-1*q)),f.push(this.productions_[z[1]][0]),_.push(W.$),e.push(W._$),pe=P[f[f.length-2]][f[f.length-1]],f.push(pe);break;case 3:return!0}}return!0}},x=function(){var T={EOF:1,parseError:function(l,f){if(this.yy.parser)this.yy.parser.parseError(l,f);else throw new Error(l)},setInput:function(l,f){return this.yy=f||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var f=l.match(/(?:\r\n?|\n).*/g);return f?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var f=l.length,r=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var _=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===_.length?this.yylloc.first_column:0)+_[_.length-r.length].length-r[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),f=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+f+"^"},test_match:function(l,f){var r,_,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),_=l[0].match(/(?:\r\n?|\n).*/g),_&&(this.yylineno+=_.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:_?_[_.length-1].length-_[_.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],r=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var P in e)this[P]=e[P];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,f,r,_;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),P=0;P<e.length;P++)if(r=this._input.match(this.rules[e[P]]),r&&(!f||r[0].length>f[0].length)){if(f=r,_=P,this.options.backtrack_lexer){if(l=this.test_match(r,e[P]),l!==!1)return l;if(this._backtrack){f=!1;continue}else return!1}else if(!this.options.flex)break}return f?(l=this.test_match(f,e[_]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return l||this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},pushState:function(l){this.begin(l)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(l,f,r,_){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:break;case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:return 9;case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 30:this.popState();break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 34:this.popState();break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}};return T}();E.lexer=x;function G(){this.yy={}}return G.prototype=E,E.Parser=G,new G}();he.parser=he;const He=he;let ae=I().gitGraph.mainBranchName,Ne=I().gitGraph.mainBranchOrder,L={},S=null,J={};J[ae]={name:ae,order:Ne};let R={};R[ae]=S;let C=ae,de="LR",Q=0;function me(){return Be({length:7})}function ze(i,n){const o=Object.create(null);return i.reduce((m,a)=>{const s=n(a);return o[s]||(o[s]=!0,m.push(a)),m},[])}const De=function(i){de=i};let fe={};const qe=function(i){N.debug("options str",i),i=i&&i.trim(),i=i||"{}";try{fe=JSON.parse(i)}catch(n){N.error("error while parsing gitGraph options",n.message)}},Ye=function(){return fe},je=function(i,n,o,m){N.debug("Entering commit:",i,n,o,m),n=D.sanitizeText(n,I()),i=D.sanitizeText(i,I()),m=D.sanitizeText(m,I());const a={id:n||Q+"-"+me(),message:i,seq:Q++,type:o||X.NORMAL,tag:m||"",parents:S==null?[]:[S.id],branch:C};S=a,L[a.id]=a,R[C]=a.id,N.debug("in pushCommit "+a.id)},Fe=function(i,n){if(i=D.sanitizeText(i,I()),R[i]===void 0)R[i]=S!=null?S.id:null,J[i]={name:i,order:n?parseInt(n,10):null},$e(i),N.debug("in createBranch");else{let o=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+i+'")');throw o.hash={text:"branch "+i,token:"branch "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+i+'"']},o}},Ue=function(i,n,o,m){i=D.sanitizeText(i,I()),n=D.sanitizeText(n,I());const a=L[R[C]],s=L[R[i]];if(C===i){let y=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw y.hash={text:"merge "+i,token:"merge "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},y}else if(a===void 0||!a){let y=new Error('Incorrect usage of "merge". Current branch ('+C+")has no commits");throw y.hash={text:"merge "+i,token:"merge "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},y}else if(R[i]===void 0){let y=new Error('Incorrect usage of "merge". Branch to be merged ('+i+") does not exist");throw y.hash={text:"merge "+i,token:"merge "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+i]},y}else if(s===void 0||!s){let y=new Error('Incorrect usage of "merge". Branch to be merged ('+i+") has no commits");throw y.hash={text:"merge "+i,token:"merge "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},y}else if(a===s){let y=new Error('Incorrect usage of "merge". Both branches have same head');throw y.hash={text:"merge "+i,token:"merge "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},y}else if(n&&L[n]!==void 0){let y=new Error('Incorrect usage of "merge". Commit with id:'+n+" already exists, use different custom Id");throw y.hash={text:"merge "+i+n+o+m,token:"merge "+i+n+o+m,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+i+" "+n+"_UNIQUE "+o+" "+m]},y}const g={id:n||Q+"-"+me(),message:"merged branch "+i+" into "+C,seq:Q++,parents:[S==null?null:S.id,R[i]],branch:C,type:X.MERGE,customType:o,customId:!!n,tag:m||""};S=g,L[g.id]=g,R[C]=g.id,N.debug(R),N.debug("in mergeBranch")},Ke=function(i,n,o,m){if(N.debug("Entering cherryPick:",i,n,o),i=D.sanitizeText(i,I()),n=D.sanitizeText(n,I()),o=D.sanitizeText(o,I()),m=D.sanitizeText(m,I()),!i||L[i]===void 0){let g=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw g.hash={text:"cherryPick "+i+" "+n,token:"cherryPick "+i+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},g}let a=L[i],s=a.branch;if(m&&!(Array.isArray(a.parents)&&a.parents.includes(m)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");if(a.type===X.MERGE&&!m)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!n||L[n]===void 0){if(s===C){let d=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw d.hash={text:"cherryPick "+i+" "+n,token:"cherryPick "+i+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},d}const g=L[R[C]];if(g===void 0||!g){let d=new Error('Incorrect usage of "cherry-pick". Current branch ('+C+")has no commits");throw d.hash={text:"cherryPick "+i+" "+n,token:"cherryPick "+i+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},d}const y={id:Q+"-"+me(),message:"cherry-picked "+a+" into "+C,seq:Q++,parents:[S==null?null:S.id,a.id],branch:C,type:X.CHERRY_PICK,tag:o??`cherry-pick:${a.id}${a.type===X.MERGE?`|parent:${m}`:""}`};S=y,L[y.id]=y,R[C]=y.id,N.debug(R),N.debug("in cherryPick")}},$e=function(i){if(i=D.sanitizeText(i,I()),R[i]===void 0){let n=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+i+'")');throw n.hash={text:"checkout "+i,token:"checkout "+i,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+i+'"']},n}else{C=i;const n=R[C];S=L[n]}};function ge(i,n,o){const m=i.indexOf(n);m===-1?i.push(o):i.splice(m,1,o)}function ke(i){const n=i.reduce((a,s)=>a.seq>s.seq?a:s,i[0]);let o="";i.forEach(function(a){a===n?o+="	*":o+="	|"});const m=[o,n.id,n.seq];for(let a in R)R[a]===n.id&&m.push(a);if(N.debug(m.join(" ")),n.parents&&n.parents.length==2){const a=L[n.parents[0]];ge(i,n,a),i.push(L[n.parents[1]])}else{if(n.parents.length==0)return;{const a=L[n.parents];ge(i,n,a)}}i=ze(i,a=>a.id),ke(i)}const Qe=function(){N.debug(L);const i=xe()[0];ke([i])},We=function(){L={},S=null;let i=I().gitGraph.mainBranchName,n=I().gitGraph.mainBranchOrder;R={},R[i]=null,J={},J[i]={name:i,order:n},C=i,Q=0,Oe()},Xe=function(){return Object.values(J).map((i,n)=>i.order!==null?i:{...i,order:parseFloat(`0.${n}`,10)}).sort((i,n)=>i.order-n.order).map(({name:i})=>({name:i}))},Ze=function(){return R},Ve=function(){return L},xe=function(){const i=Object.keys(L).map(function(n){return L[n]});return i.forEach(function(n){N.debug(n.id)}),i.sort((n,o)=>n.seq-o.seq),i},Je=function(){return C},et=function(){return de},tt=function(){return S},X={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},it={getConfig:()=>I().gitGraph,setDirection:De,setOptions:qe,getOptions:Ye,commit:je,branch:Fe,merge:Ue,cherryPick:Ke,checkout:$e,prettyPrint:Qe,clear:We,getBranchesAsObjArray:Xe,getBranches:Ze,getCommits:Ve,getCommitsArray:xe,getCurrentBranch:Je,getDirection:et,getHead:tt,setAccTitle:Me,getAccTitle:Le,getAccDescription:Ie,setAccDescription:ve,setDiagramTitle:Ae,getDiagramTitle:Ce,commitType:X};let Z={};const A={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},K=8;let H={},j={},ce=[],ee=0,w="LR";const rt=()=>{H={},j={},Z={},ee=0,ce=[],w="LR"},_e=i=>{const n=document.createElementNS("http://www.w3.org/2000/svg","text");let o=[];typeof i=="string"?o=i.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(i)?o=i:o=[];for(const m of o){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),a.setAttribute("class","row"),a.textContent=m.trim(),n.appendChild(a)}return n},at=i=>{let n="",o=0;return i.forEach(m=>{const a=w==="TB"?j[m].y:j[m].x;a>=o&&(n=m,o=a)}),n||void 0},be=(i,n,o)=>{const m=I().gitGraph,a=i.append("g").attr("class","commit-bullets"),s=i.append("g").attr("class","commit-labels");let g=0;w==="TB"&&(g=30);const y=Object.keys(n).sort((M,h)=>n[M].seq-n[h].seq),d=m.parallelCommits,k=10,c=40;y.forEach(M=>{const h=n[M];if(d)if(h.parents.length){const b=at(h.parents);g=w==="TB"?j[b].y+c:j[b].x+c}else g=0,w==="TB"&&(g=30);const $=g+k,u=w==="TB"?$:H[h.branch].pos,p=w==="TB"?H[h.branch].pos:$;if(o){let b,O=h.customType!==void 0&&h.customType!==""?h.customType:h.type;switch(O){case A.NORMAL:b="commit-normal";break;case A.REVERSE:b="commit-reverse";break;case A.HIGHLIGHT:b="commit-highlight";break;case A.MERGE:b="commit-merge";break;case A.CHERRY_PICK:b="commit-cherry-pick";break;default:b="commit-normal"}if(O===A.HIGHLIGHT){const E=a.append("rect");E.attr("x",p-10),E.attr("y",u-10),E.attr("height",20),E.attr("width",20),E.attr("class",`commit ${h.id} commit-highlight${H[h.branch].index%K} ${b}-outer`),a.append("rect").attr("x",p-6).attr("y",u-6).attr("height",12).attr("width",12).attr("class",`commit ${h.id} commit${H[h.branch].index%K} ${b}-inner`)}else if(O===A.CHERRY_PICK)a.append("circle").attr("cx",p).attr("cy",u).attr("r",10).attr("class",`commit ${h.id} ${b}`),a.append("circle").attr("cx",p-3).attr("cy",u+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${h.id} ${b}`),a.append("circle").attr("cx",p+3).attr("cy",u+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${h.id} ${b}`),a.append("line").attr("x1",p+3).attr("y1",u+1).attr("x2",p).attr("y2",u-5).attr("stroke","#fff").attr("class",`commit ${h.id} ${b}`),a.append("line").attr("x1",p-3).attr("y1",u+1).attr("x2",p).attr("y2",u-5).attr("stroke","#fff").attr("class",`commit ${h.id} ${b}`);else{const E=a.append("circle");if(E.attr("cx",p),E.attr("cy",u),E.attr("r",h.type===A.MERGE?9:10),E.attr("class",`commit ${h.id} commit${H[h.branch].index%K}`),O===A.MERGE){const x=a.append("circle");x.attr("cx",p),x.attr("cy",u),x.attr("r",6),x.attr("class",`commit ${b} ${h.id} commit${H[h.branch].index%K}`)}O===A.REVERSE&&a.append("path").attr("d",`M ${p-5},${u-5}L${p+5},${u+5}M${p-5},${u+5}L${p+5},${u-5}`).attr("class",`commit ${b} ${h.id} commit${H[h.branch].index%K}`)}}if(w==="TB"?j[h.id]={x:p,y:$}:j[h.id]={x:$,y:u},o){if(h.type!==A.CHERRY_PICK&&(h.customId&&h.type===A.MERGE||h.type!==A.MERGE)&&m.showCommitLabel){const b=s.append("g"),O=b.insert("rect").attr("class","commit-label-bkg"),E=b.append("text").attr("x",g).attr("y",u+25).attr("class","commit-label").text(h.id);let x=E.node().getBBox();if(O.attr("x",$-x.width/2-2).attr("y",u+13.5).attr("width",x.width+2*2).attr("height",x.height+2*2),w==="TB"&&(O.attr("x",p-(x.width+4*4+5)).attr("y",u-12),E.attr("x",p-(x.width+4*4)).attr("y",u+x.height-12)),w!=="TB"&&E.attr("x",$-x.width/2),m.rotateCommitLabel)if(w==="TB")E.attr("transform","rotate(-45, "+p+", "+u+")"),O.attr("transform","rotate(-45, "+p+", "+u+")");else{let G=-7.5-(x.width+10)/25*9.5,T=10+x.width/25*8.5;b.attr("transform","translate("+G+", "+T+") rotate(-45, "+g+", "+u+")")}}if(h.tag){const b=s.insert("polygon"),O=s.append("circle"),E=s.append("text").attr("y",u-16).attr("class","tag-label").text(h.tag);let x=E.node().getBBox();E.attr("x",$-x.width/2);const G=x.height/2,T=u-19.2;b.attr("class","tag-label-bkg").attr("points",`
          ${g-x.width/2-4/2},${T+2}
          ${g-x.width/2-4/2},${T-2}
          ${$-x.width/2-4},${T-G-2}
          ${$+x.width/2+4},${T-G-2}
          ${$+x.width/2+4},${T+G+2}
          ${$-x.width/2-4},${T+G+2}`),O.attr("cx",g-x.width/2+4/2).attr("cy",T).attr("r",1.5).attr("class","tag-hole"),w==="TB"&&(b.attr("class","tag-label-bkg").attr("points",`
            ${p},${g+2}
            ${p},${g-2}
            ${p+k},${g-G-2}
            ${p+k+x.width+4},${g-G-2}
            ${p+k+x.width+4},${g+G+2}
            ${p+k},${g+G+2}`).attr("transform","translate(12,12) rotate(45, "+p+","+g+")"),O.attr("cx",p+4/2).attr("cy",g).attr("transform","translate(12,12) rotate(45, "+p+","+g+")"),E.attr("x",p+5).attr("y",g+3).attr("transform","translate(14,14) rotate(45, "+p+","+g+")"))}}g+=c+k,g>ee&&(ee=g)})},ct=(i,n,o,m,a)=>{const s=(w==="TB"?o.x<m.x:o.y<m.y)?n.branch:i.branch,g=d=>d.branch===s,y=d=>d.seq>i.seq&&d.seq<n.seq;return Object.values(a).some(d=>y(d)&&g(d))},V=(i,n,o=0)=>{const m=i+Math.abs(i-n)/2;if(o>5)return m;if(ce.every(s=>Math.abs(s-m)>=10))return ce.push(m),m;const a=Math.abs(i-n);return V(i,n-a/5,o+1)},nt=(i,n,o,m)=>{const a=j[n.id],s=j[o.id],g=ct(n,o,a,s,m);let y="",d="",k=0,c=0,M=H[o.branch].index;o.type===A.MERGE&&n.id!==o.parents[0]&&(M=H[n.branch].index);let h;if(g){y="A 10 10, 0, 0, 0,",d="A 10 10, 0, 0, 1,",k=10,c=10;const $=a.y<s.y?V(a.y,s.y):V(s.y,a.y),u=a.x<s.x?V(a.x,s.x):V(s.x,a.x);w==="TB"?a.x<s.x?h=`M ${a.x} ${a.y} L ${u-k} ${a.y} ${d} ${u} ${a.y+c} L ${u} ${s.y-k} ${y} ${u+c} ${s.y} L ${s.x} ${s.y}`:(M=H[n.branch].index,h=`M ${a.x} ${a.y} L ${u+k} ${a.y} ${y} ${u} ${a.y+c} L ${u} ${s.y-k} ${d} ${u-c} ${s.y} L ${s.x} ${s.y}`):a.y<s.y?h=`M ${a.x} ${a.y} L ${a.x} ${$-k} ${y} ${a.x+c} ${$} L ${s.x-k} ${$} ${d} ${s.x} ${$+c} L ${s.x} ${s.y}`:(M=H[n.branch].index,h=`M ${a.x} ${a.y} L ${a.x} ${$+k} ${d} ${a.x+c} ${$} L ${s.x-k} ${$} ${y} ${s.x} ${$-c} L ${s.x} ${s.y}`)}else y="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",k=20,c=20,w==="TB"?(a.x<s.x&&(o.type===A.MERGE&&n.id!==o.parents[0]?h=`M ${a.x} ${a.y} L ${a.x} ${s.y-k} ${y} ${a.x+c} ${s.y} L ${s.x} ${s.y}`:h=`M ${a.x} ${a.y} L ${s.x-k} ${a.y} ${d} ${s.x} ${a.y+c} L ${s.x} ${s.y}`),a.x>s.x&&(y="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",k=20,c=20,o.type===A.MERGE&&n.id!==o.parents[0]?h=`M ${a.x} ${a.y} L ${a.x} ${s.y-k} ${d} ${a.x-c} ${s.y} L ${s.x} ${s.y}`:h=`M ${a.x} ${a.y} L ${s.x+k} ${a.y} ${y} ${s.x} ${a.y+c} L ${s.x} ${s.y}`),a.x===s.x&&(h=`M ${a.x} ${a.y} L ${s.x} ${s.y}`)):(a.y<s.y&&(o.type===A.MERGE&&n.id!==o.parents[0]?h=`M ${a.x} ${a.y} L ${s.x-k} ${a.y} ${d} ${s.x} ${a.y+c} L ${s.x} ${s.y}`:h=`M ${a.x} ${a.y} L ${a.x} ${s.y-k} ${y} ${a.x+c} ${s.y} L ${s.x} ${s.y}`),a.y>s.y&&(o.type===A.MERGE&&n.id!==o.parents[0]?h=`M ${a.x} ${a.y} L ${s.x-k} ${a.y} ${y} ${s.x} ${a.y-c} L ${s.x} ${s.y}`:h=`M ${a.x} ${a.y} L ${a.x} ${s.y+k} ${d} ${a.x+c} ${s.y} L ${s.x} ${s.y}`),a.y===s.y&&(h=`M ${a.x} ${a.y} L ${s.x} ${s.y}`));i.append("path").attr("d",h).attr("class","arrow arrow"+M%K)},st=(i,n)=>{const o=i.append("g").attr("class","commit-arrows");Object.keys(n).forEach(m=>{const a=n[m];a.parents&&a.parents.length>0&&a.parents.forEach(s=>{nt(o,n[s],a,n)})})},ot=(i,n)=>{const o=I().gitGraph,m=i.append("g");n.forEach((a,s)=>{const g=s%K,y=H[a.name].pos,d=m.append("line");d.attr("x1",0),d.attr("y1",y),d.attr("x2",ee),d.attr("y2",y),d.attr("class","branch branch"+g),w==="TB"&&(d.attr("y1",30),d.attr("x1",y),d.attr("y2",ee),d.attr("x2",y)),ce.push(y);let k=a.name;const c=_e(k),M=m.insert("rect"),h=m.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+g);h.node().appendChild(c);let $=c.getBBox();M.attr("class","branchLabelBkg label"+g).attr("rx",4).attr("ry",4).attr("x",-$.width-4-(o.rotateCommitLabel===!0?30:0)).attr("y",-$.height/2+8).attr("width",$.width+18).attr("height",$.height+4),h.attr("transform","translate("+(-$.width-14-(o.rotateCommitLabel===!0?30:0))+", "+(y-$.height/2-1)+")"),w==="TB"&&(M.attr("x",y-$.width/2-10).attr("y",0),h.attr("transform","translate("+(y-$.width/2-5)+", 0)")),w!=="TB"&&M.attr("transform","translate(-19, "+(y-$.height/2)+")")})},lt=function(i,n,o,m){rt();const a=I(),s=a.gitGraph;N.debug("in gitgraph renderer",i+`
`,"id:",n,o),Z=m.db.getCommits();const g=m.db.getBranchesAsObjArray();w=m.db.getDirection();const y=Se(`[id="${n}"]`);let d=0;g.forEach((k,c)=>{const M=_e(k.name),h=y.append("g"),$=h.insert("g").attr("class","branchLabel"),u=$.insert("g").attr("class","label branch-label");u.node().appendChild(M);let p=M.getBBox();H[k.name]={pos:d,index:c},d+=50+(s.rotateCommitLabel?40:0)+(w==="TB"?p.width/2:0),u.remove(),$.remove(),h.remove()}),be(y,Z,!1),s.showBranches&&ot(y,g),st(y,Z),be(y,Z,!0),Ge.insertTitle(y,"gitTitleText",s.titleTopMargin,m.db.getDiagramTitle()),Pe(void 0,y,s.diagramPadding,s.useMaxWidth??a.useMaxWidth)},ht={draw:lt},mt=i=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(n=>`
        .branch-label${n} { fill: ${i["gitBranchLabel"+n]}; }
        .commit${n} { stroke: ${i["git"+n]}; fill: ${i["git"+n]}; }
        .commit-highlight${n} { stroke: ${i["gitInv"+n]}; fill: ${i["gitInv"+n]}; }
        .label${n}  { fill: ${i["git"+n]}; }
        .arrow${n} { stroke: ${i["git"+n]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${i.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${i.commitLabelFontSize}; fill: ${i.commitLabelColor};}
  .commit-label-bkg { font-size: ${i.commitLabelFontSize}; fill: ${i.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${i.tagLabelFontSize}; fill: ${i.tagLabelColor};}
  .tag-label-bkg { fill: ${i.tagLabelBackground}; stroke: ${i.tagLabelBorder}; }
  .tag-hole { fill: ${i.textColor}; }

  .commit-merge {
    stroke: ${i.primaryColor};
    fill: ${i.primaryColor};
  }
  .commit-reverse {
    stroke: ${i.primaryColor};
    fill: ${i.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${i.primaryColor};
    fill: ${i.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${i.textColor};
  }
`,yt=mt,pt={parser:He,db:it,renderer:ht,styles:yt};export{pt as diagram};
