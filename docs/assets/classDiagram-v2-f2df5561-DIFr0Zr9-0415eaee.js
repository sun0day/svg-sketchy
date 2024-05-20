import{z as $,K as L,Y as B}from"./styles-991ebdfc-Bh0hBE5t-4623e9cf.js";import{a as c,S as d,w,i as R,_ as j,n as N,t as D,b as M,M as A}from"./index-b1aa4907.js";import{Z as z}from"./graph-Cb3y9Kfp-7a1ed4a3.js";import{b as K}from"./index-fc10efb0-C7IPc9it-4f888ccd.js";import"./layout-BMd344Lw-6b808065.js";import"./clone-DUfa26ko-d6045c07.js";import"./edges-d32062c0-ibIbKeB3-f6727dd2.js";import"./createText-6b48ae7d-CnCprzPX-813c1cfd.js";import"./line-CGRmoxw5-f6db5efd.js";import"./array-CqVTtuYm-ffeda358.js";import"./path-Crsf9Nsj-3140eca4.js";const k=a=>A.sanitizeText(a,d());let x={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const P=function(a,t,b,n){const e=Object.keys(a);c.info("keys:",e),c.info(a),e.forEach(function(s){var l,r;const o=a[s],i={shape:"rect",id:o.id,domId:o.domId,labelText:k(o.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=d().flowchart)==null?void 0:l.padding)??((r=d().class)==null?void 0:r.padding)};t.setNode(o.id,i),C(o.classes,t,b,n,o.id),c.info("setNode",i)})},C=function(a,t,b,n,e){const s=Object.keys(a);c.info("keys:",s),c.info(a),s.filter(l=>a[l].parent==e).forEach(function(l){var r,o;const i=a[l],g=i.cssClasses.join(" "),y=N(i.styles),u=i.label??i.id,p=0,f={labelStyle:y.labelStyle,shape:"class_box",labelText:k(u),classData:i,rx:p,ry:p,class:g,style:y.style,id:i.id,domId:i.domId,tooltip:n.db.getTooltip(i.id,e)||"",haveCallback:i.haveCallback,link:i.link,width:i.type==="group"?500:void 0,type:i.type,padding:((r=d().flowchart)==null?void 0:r.padding)??((o=d().class)==null?void 0:o.padding)};t.setNode(i.id,f),e&&t.setParent(i.id,e),c.info("setNode",f)})},Z=function(a,t,b,n){c.info(a),a.forEach(function(e,s){var l,r;const o=e,i="",g={labelStyle:"",style:""},y=o.text,u=0,p={labelStyle:g.labelStyle,shape:"note",labelText:k(y),noteData:o,rx:u,ry:u,class:i,style:g.style,id:o.id,domId:o.id,tooltip:"",type:"note",padding:((l=d().flowchart)==null?void 0:l.padding)??((r=d().class)==null?void 0:r.padding)};if(t.setNode(o.id,p),c.info("setNode",p),!o.class||!(o.class in n))return;const f=b+s,m={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(x.curve,M)};t.setEdge(o.id,o.class,m,f)})},G=function(a,t){const b=d().flowchart;let n=0;a.forEach(function(e){var s;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${n}`,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:E(e.relation.type1),arrowTypeEnd:E(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(b==null?void 0:b.curve,M)};if(c.info(l,e),e.style!==void 0){const r=N(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((s=d().flowchart)==null?void 0:s.htmlLabels)??d().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(A.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,l,n)})},H=function(a){x={...x,...a}},O=async function(a,t,b,n){c.info("Drawing class - ",t);const e=d().flowchart??d().class,s=d().securityLevel;c.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,o=new z({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),i=n.db.getNamespaces(),g=n.db.getClasses(),y=n.db.getRelations(),u=n.db.getNotes();c.info(y),P(i,o,t,n),C(g,o,t,n),G(y,o),Z(u,o,y.length+1,g);let p;s==="sandbox"&&(p=w("#i"+t));const f=s==="sandbox"?w(p.nodes()[0].contentDocument.body):w("body"),m=f.select(`[id="${t}"]`),_=f.select("#"+t+" g");if(await K(_,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),R.insertTitle(m,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),j(o,m,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const S=s==="sandbox"?p.nodes()[0].contentDocument:document,I=S.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const v of I){const T=v.getBBox(),h=S.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",T.width),h.setAttribute("height",T.height),v.insertBefore(h,v.firstChild)}}};function E(a){let t;switch(a){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:H,draw:O},oe={parser:$,db:L,renderer:W,styles:B,init:a=>{a.class||(a.class={}),a.class.arrowMarkerAbsolute=a.arrowMarkerAbsolute,L.clear()}};export{oe as diagram};
