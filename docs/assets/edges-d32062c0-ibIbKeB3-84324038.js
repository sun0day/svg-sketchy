import{F as R,S as u,y as V,b7 as G,w as C,a as f,i as N,l as lt}from"./index-4307af93.js";import{U as nt}from"./createText-6b48ae7d-CnCprzPX-273ae431.js";import{P as ot}from"./line-CGRmoxw5-2f95bd30.js";const dt=(e,t,a,s)=>{t.forEach(l=>{bt[l](e,a,s)})},ht=(e,t,a)=>{f.trace("Making markers for ",a),e.append("defs").append("marker").attr("id",a+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id",a+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},ct=(e,t,a)=>{e.append("defs").append("marker").attr("id",a+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",a+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},yt=(e,t,a)=>{e.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},pt=(e,t,a)=>{e.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},gt=(e,t,a)=>{e.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),e.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},xt=(e,t,a)=>{e.append("marker").attr("id",a+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",a+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},ft=(e,t,a)=>{e.append("marker").attr("id",a+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",a+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},wt=(e,t,a)=>{e.append("marker").attr("id",a+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),e.append("marker").attr("id",a+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},ut=(e,t,a)=>{e.append("defs").append("marker").attr("id",a+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},bt={extension:ht,composition:ct,aggregation:yt,dependency:pt,lollipop:gt,point:xt,circle:ft,cross:wt,barb:ut},dr=dt;function mt(e,t){t&&e.attr("style",t)}function kt(e){const t=C(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=t.append("xhtml:div"),s=e.label,l=e.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+l+'" '+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+s+"</span>"),mt(a,e.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}const Lt=(e,t,a,s)=>{let l=e||"";if(typeof l=="object"&&(l=l[0]),R(u().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),f.debug("vertexText"+l);const r={isNode:s,label:G(l).replace(/fa[blrs]?:fa-[\w-]+/g,n=>`<i class='${n.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return kt(r)}else{const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let n=[];typeof l=="string"?n=l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?n=l:n=[];for(const i of n){const o=document.createElementNS("http://www.w3.org/2000/svg","tspan");o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),o.setAttribute("dy","1em"),o.setAttribute("x","0"),a?o.setAttribute("class","title-row"):o.setAttribute("class","row"),o.textContent=i.trim(),r.appendChild(o)}return r}},P=Lt,M=async(e,t,a,s)=>{let l;const r=t.useHtmlLabels||R(u().flowchart.htmlLabels);a?l=a:l="node default";const n=e.insert("g").attr("class",l).attr("id",t.domId||t.id),i=n.insert("g").attr("class","label").attr("style",t.labelStyle);let o;t.labelText===void 0?o="":o=typeof t.labelText=="string"?t.labelText:t.labelText[0];const h=i.node();let d;t.labelType==="markdown"?d=nt(i,V(G(o),u()),{useHtmlLabels:r,width:t.width||u().flowchart.wrappingWidth,classes:"markdown-node-label"}):d=h.appendChild(P(V(G(o),u()),t.labelStyle,!1,s));let c=d.getBBox();const p=t.padding/2;if(R(u().flowchart.htmlLabels)){const y=d.children[0],x=C(d),k=y.getElementsByTagName("img");if(k){const g=o.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...k].map(w=>new Promise(v=>{function B(){if(w.style.display="flex",w.style.flexDirection="column",g){const _=u().fontSize?u().fontSize:window.getComputedStyle(document.body).fontSize,X=parseInt(_,10)*5+"px";w.style.minWidth=X,w.style.maxWidth=X}else w.style.width="100%";v(w)}setTimeout(()=>{w.complete&&B()}),w.addEventListener("error",B),w.addEventListener("load",B)})))}c=y.getBoundingClientRect(),x.attr("width",c.width),x.attr("height",c.height)}return r?i.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"):i.attr("transform","translate(0, "+-c.height/2+")"),t.centerLabel&&i.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),i.insert("rect",":first-child"),{shapeSvg:n,bbox:c,halfPadding:p,label:i}},m=(e,t)=>{const a=t.node().getBBox();e.width=a.width,e.height=a.height};function Y(e,t,a,s){return e.insert("polygon",":first-child").attr("points",s.map(function(l){return l.x+","+l.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+a/2+")")}function St(e,t){return e.intersect(t)}function st(e,t,a,s){var l=e.x,r=e.y,n=l-s.x,i=r-s.y,o=Math.sqrt(t*t*i*i+a*a*n*n),h=Math.abs(t*a*n/o);s.x<l&&(h=-h);var d=Math.abs(t*a*i/o);return s.y<r&&(d=-d),{x:l+h,y:r+d}}function vt(e,t,a){return st(e,t,t,a)}function Mt(e,t,a,s){var l,r,n,i,o,h,d,c,p,y,x,k,g,w,v;if(l=t.y-e.y,n=e.x-t.x,o=t.x*e.y-e.x*t.y,p=l*a.x+n*a.y+o,y=l*s.x+n*s.y+o,!(p!==0&&y!==0&&J(p,y))&&(r=s.y-a.y,i=a.x-s.x,h=s.x*a.y-a.x*s.y,d=r*e.x+i*e.y+h,c=r*t.x+i*t.y+h,!(d!==0&&c!==0&&J(d,c))&&(x=l*i-r*n,x!==0)))return k=Math.abs(x/2),g=n*h-i*o,w=g<0?(g-k)/x:(g+k)/x,g=r*o-l*h,v=g<0?(g-k)/x:(g+k)/x,{x:w,y:v}}function J(e,t){return e*t>0}function Tt(e,t,a){var s=e.x,l=e.y,r=[],n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(x){n=Math.min(n,x.x),i=Math.min(i,x.y)}):(n=Math.min(n,t.x),i=Math.min(i,t.y));for(var o=s-e.width/2-n,h=l-e.height/2-i,d=0;d<t.length;d++){var c=t[d],p=t[d<t.length-1?d+1:0],y=Mt(e,a,{x:o+c.x,y:h+c.y},{x:o+p.x,y:h+p.y});y&&r.push(y)}return r.length?(r.length>1&&r.sort(function(x,k){var g=x.x-a.x,w=x.y-a.y,v=Math.sqrt(g*g+w*w),B=k.x-a.x,_=k.y-a.y,X=Math.sqrt(B*B+_*_);return v<X?-1:v===X?0:1}),r[0]):e}const Bt=(e,t)=>{var a=e.x,s=e.y,l=t.x-a,r=t.y-s,n=e.width/2,i=e.height/2,o,h;return Math.abs(r)*n>Math.abs(l)*i?(r<0&&(i=-i),o=r===0?0:i*l/r,h=i):(l<0&&(n=-n),o=n,h=l===0?0:n*r/l),{x:a+o,y:s+h}},Ct=Bt,b={node:St,circle:vt,ellipse:st,polygon:Tt,rect:Ct},_t=async(e,t)=>{t.useHtmlLabels||u().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:a,bbox:s,halfPadding:l}=await M(e,t,"node "+t.classes,!0);f.info("Classes = ",t.classes);const r=a.insert("rect",":first-child");return r.attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-l).attr("y",-s.height/2-l).attr("width",s.width+t.padding).attr("height",s.height+t.padding),m(t,r),t.intersect=function(n){return b.rect(t,n)},a},Et=_t,$t=e=>{const t=new Set;for(const a of e)switch(a){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(a);break}return t},Pt=(e,t,a)=>{const s=$t(e),l=2,r=t.height+2*a.padding,n=r/l,i=t.width+2*n+a.padding,o=a.padding/2;return s.has("right")&&s.has("left")&&s.has("up")&&s.has("down")?[{x:0,y:0},{x:n,y:0},{x:i/2,y:2*o},{x:i-n,y:0},{x:i,y:0},{x:i,y:-r/3},{x:i+2*o,y:-r/2},{x:i,y:-2*r/3},{x:i,y:-r},{x:i-n,y:-r},{x:i/2,y:-r-2*o},{x:n,y:-r},{x:0,y:-r},{x:0,y:-2*r/3},{x:-2*o,y:-r/2},{x:0,y:-r/3}]:s.has("right")&&s.has("left")&&s.has("up")?[{x:n,y:0},{x:i-n,y:0},{x:i,y:-r/2},{x:i-n,y:-r},{x:n,y:-r},{x:0,y:-r/2}]:s.has("right")&&s.has("left")&&s.has("down")?[{x:0,y:0},{x:n,y:-r},{x:i-n,y:-r},{x:i,y:0}]:s.has("right")&&s.has("up")&&s.has("down")?[{x:0,y:0},{x:i,y:-n},{x:i,y:-r+n},{x:0,y:-r}]:s.has("left")&&s.has("up")&&s.has("down")?[{x:i,y:0},{x:0,y:-n},{x:0,y:-r+n},{x:i,y:-r}]:s.has("right")&&s.has("left")?[{x:n,y:0},{x:n,y:-o},{x:i-n,y:-o},{x:i-n,y:0},{x:i,y:-r/2},{x:i-n,y:-r},{x:i-n,y:-r+o},{x:n,y:-r+o},{x:n,y:-r},{x:0,y:-r/2}]:s.has("up")&&s.has("down")?[{x:i/2,y:0},{x:0,y:-o},{x:n,y:-o},{x:n,y:-r+o},{x:0,y:-r+o},{x:i/2,y:-r},{x:i,y:-r+o},{x:i-n,y:-r+o},{x:i-n,y:-o},{x:i,y:-o}]:s.has("right")&&s.has("up")?[{x:0,y:0},{x:i,y:-n},{x:0,y:-r}]:s.has("right")&&s.has("down")?[{x:0,y:0},{x:i,y:0},{x:0,y:-r}]:s.has("left")&&s.has("up")?[{x:i,y:0},{x:0,y:-n},{x:i,y:-r}]:s.has("left")&&s.has("down")?[{x:i,y:0},{x:0,y:0},{x:i,y:-r}]:s.has("right")?[{x:n,y:-o},{x:n,y:-o},{x:i-n,y:-o},{x:i-n,y:0},{x:i,y:-r/2},{x:i-n,y:-r},{x:i-n,y:-r+o},{x:n,y:-r+o},{x:n,y:-r+o}]:s.has("left")?[{x:n,y:0},{x:n,y:-o},{x:i-n,y:-o},{x:i-n,y:-r+o},{x:n,y:-r+o},{x:n,y:-r},{x:0,y:-r/2}]:s.has("up")?[{x:n,y:-o},{x:n,y:-r+o},{x:0,y:-r+o},{x:i/2,y:-r},{x:i,y:-r+o},{x:i-n,y:-r+o},{x:i-n,y:-o}]:s.has("down")?[{x:i/2,y:0},{x:0,y:-o},{x:n,y:-o},{x:n,y:-r+o},{x:i-n,y:-r+o},{x:i-n,y:-o},{x:i,y:-o}]:[{x:0,y:0}]},Q=e=>e?" "+e:"",$=(e,t)=>`${t||"node default"}${Q(e.classes)} ${Q(e.class)}`,K=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=l+r,i=[{x:n/2,y:0},{x:n,y:-n/2},{x:n/2,y:-n},{x:0,y:-n/2}];f.info("Question main (Circle)");const o=Y(a,n,n,i);return o.attr("style",t.style),m(t,o),t.intersect=function(h){return f.warn("Intersect called"),b.polygon(t,i,h)},a},Rt=(e,t)=>{const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=28,l=[{x:0,y:s/2},{x:s/2,y:0},{x:0,y:-s/2},{x:-s/2,y:0}];return a.insert("polygon",":first-child").attr("points",l.map(function(r){return r.x+","+r.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(r){return b.circle(t,14,r)},a},Yt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=4,r=s.height+t.padding,n=r/l,i=s.width+2*n+t.padding,o=[{x:n,y:0},{x:i-n,y:0},{x:i,y:-r/2},{x:i-n,y:-r},{x:n,y:-r},{x:0,y:-r/2}],h=Y(a,i,r,o);return h.attr("style",t.style),m(t,h),t.intersect=function(d){return b.polygon(t,o,d)},a},Wt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,void 0,!0),l=2,r=s.height+2*t.padding,n=r/l,i=s.width+2*n+t.padding,o=Pt(t.directions,s,t),h=Y(a,i,r,o);return h.attr("style",t.style),m(t,h),t.intersect=function(d){return b.polygon(t,o,d)},a},Xt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:-r/2,y:0},{x:l,y:0},{x:l,y:-r},{x:-r/2,y:-r},{x:0,y:-r/2}];return Y(a,l,r,n).attr("style",t.style),t.width=l+r,t.height=r,t.intersect=function(i){return b.polygon(t,n,i)},a},Ot=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:-2*r/6,y:0},{x:l-r/6,y:0},{x:l+2*r/6,y:-r},{x:r/6,y:-r}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},It=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:2*r/6,y:0},{x:l+r/6,y:0},{x:l-2*r/6,y:-r},{x:-r/6,y:-r}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},Dt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:-2*r/6,y:0},{x:l+2*r/6,y:0},{x:l-r/6,y:-r},{x:r/6,y:-r}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},Ht=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:r/6,y:0},{x:l-r/6,y:0},{x:l+2*r/6,y:-r},{x:-2*r/6,y:-r}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},Nt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:0,y:0},{x:l+r/2,y:0},{x:l,y:-r/2},{x:l+r/2,y:-r},{x:0,y:-r}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},Ut=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=l/2,n=r/(2.5+l/50),i=s.height+n+t.padding,o="M 0,"+n+" a "+r+","+n+" 0,0,0 "+l+" 0 a "+r+","+n+" 0,0,0 "+-l+" 0 l 0,"+i+" a "+r+","+n+" 0,0,0 "+l+" 0 l 0,"+-i,h=a.attr("label-offset-y",n).insert("path",":first-child").attr("style",t.style).attr("d",o).attr("transform","translate("+-l/2+","+-(i/2+n)+")");return m(t,h),t.intersect=function(d){const c=b.rect(t,d),p=c.x-t.x;if(r!=0&&(Math.abs(p)<t.width/2||Math.abs(p)==t.width/2&&Math.abs(c.y-t.y)>t.height/2-n)){let y=n*n*(1-p*p/(r*r));y!=0&&(y=Math.sqrt(y)),y=n-y,d.y-t.y>0&&(y=-y),c.y+=y}return c},a},jt=async(e,t)=>{const{shapeSvg:a,bbox:s,halfPadding:l}=await M(e,t,"node "+t.classes+" "+t.class,!0),r=a.insert("rect",":first-child"),n=t.positioned?t.width:s.width+t.padding,i=t.positioned?t.height:s.height+t.padding,o=t.positioned?-n/2:-s.width/2-l,h=t.positioned?-i/2:-s.height/2-l;if(r.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",o).attr("y",h).attr("width",n).attr("height",i),t.props){const d=new Set(Object.keys(t.props));t.props.borders&&(q(r,t.props.borders,n,i),d.delete("borders")),d.forEach(c=>{f.warn(`Unknown node property ${c}`)})}return m(t,r),t.intersect=function(d){return b.rect(t,d)},a},At=async(e,t)=>{const{shapeSvg:a,bbox:s,halfPadding:l}=await M(e,t,"node "+t.classes,!0),r=a.insert("rect",":first-child"),n=t.positioned?t.width:s.width+t.padding,i=t.positioned?t.height:s.height+t.padding,o=t.positioned?-n/2:-s.width/2-l,h=t.positioned?-i/2:-s.height/2-l;if(r.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",o).attr("y",h).attr("width",n).attr("height",i),t.props){const d=new Set(Object.keys(t.props));t.props.borders&&(q(r,t.props.borders,n,i),d.delete("borders")),d.forEach(c=>{f.warn(`Unknown node property ${c}`)})}return m(t,r),t.intersect=function(d){return b.rect(t,d)},a},Zt=async(e,t)=>{const{shapeSvg:a}=await M(e,t,"label",!0);f.trace("Classes = ",t.class);const s=a.insert("rect",":first-child"),l=0,r=0;if(s.attr("width",l).attr("height",r),a.attr("class","label edgeLabel"),t.props){const n=new Set(Object.keys(t.props));t.props.borders&&(q(s,t.props.borders,l,r),n.delete("borders")),n.forEach(i=>{f.warn(`Unknown node property ${i}`)})}return m(t,s),t.intersect=function(n){return b.rect(t,n)},a};function q(e,t,a,s){const l=[],r=i=>{l.push(i,0)},n=i=>{l.push(0,i)};t.includes("t")?(f.debug("add top border"),r(a)):n(a),t.includes("r")?(f.debug("add right border"),r(s)):n(s),t.includes("b")?(f.debug("add bottom border"),r(a)):n(a),t.includes("l")?(f.debug("add left border"),r(s)):n(s),e.attr("stroke-dasharray",l.join(" "))}const zt=(e,t)=>{let a;t.classes?a="node "+t.classes:a="node default";const s=e.insert("g").attr("class",a).attr("id",t.domId||t.id),l=s.insert("rect",":first-child"),r=s.insert("line"),n=s.insert("g").attr("class","label"),i=t.labelText.flat?t.labelText.flat():t.labelText;let o="";typeof i=="object"?o=i[0]:o=i,f.info("Label text abc79",o,i,typeof i=="object");const h=n.node().appendChild(P(o,t.labelStyle,!0,!0));let d={width:0,height:0};if(R(u().flowchart.htmlLabels)){const k=h.children[0],g=C(h);d=k.getBoundingClientRect(),g.attr("width",d.width),g.attr("height",d.height)}f.info("Text 2",i);const c=i.slice(1,i.length);let p=h.getBBox();const y=n.node().appendChild(P(c.join?c.join("<br/>"):c,t.labelStyle,!0,!0));if(R(u().flowchart.htmlLabels)){const k=y.children[0],g=C(y);d=k.getBoundingClientRect(),g.attr("width",d.width),g.attr("height",d.height)}const x=t.padding/2;return C(y).attr("transform","translate( "+(d.width>p.width?0:(p.width-d.width)/2)+", "+(p.height+x+5)+")"),C(h).attr("transform","translate( "+(d.width<p.width?0:-(p.width-d.width)/2)+", 0)"),d=n.node().getBBox(),n.attr("transform","translate("+-d.width/2+", "+(-d.height/2-x+3)+")"),l.attr("class","outer title-state").attr("x",-d.width/2-x).attr("y",-d.height/2-x).attr("width",d.width+t.padding).attr("height",d.height+t.padding),r.attr("class","divider").attr("x1",-d.width/2-x).attr("x2",d.width/2+x).attr("y1",-d.height/2-x+p.height+x).attr("y2",-d.height/2-x+p.height+x),m(t,l),t.intersect=function(k){return b.rect(t,k)},s},Gt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.height+t.padding,r=s.width+l/4+t.padding,n=a.insert("rect",":first-child").attr("style",t.style).attr("rx",l/2).attr("ry",l/2).attr("x",-r/2).attr("y",-l/2).attr("width",r).attr("height",l);return m(t,n),t.intersect=function(i){return b.rect(t,i)},a},qt=async(e,t)=>{const{shapeSvg:a,bbox:s,halfPadding:l}=await M(e,t,$(t,void 0),!0),r=a.insert("circle",":first-child");return r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+l).attr("width",s.width+t.padding).attr("height",s.height+t.padding),f.info("Circle main"),m(t,r),t.intersect=function(n){return f.info("Circle intersect",t,s.width/2+l,n),b.circle(t,s.width/2+l,n)},a},Ft=async(e,t)=>{const{shapeSvg:a,bbox:s,halfPadding:l}=await M(e,t,$(t,void 0),!0),r=5,n=a.insert("g",":first-child"),i=n.insert("circle"),o=n.insert("circle");return n.attr("class",t.class),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+l+r).attr("width",s.width+t.padding+r*2).attr("height",s.height+t.padding+r*2),o.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+l).attr("width",s.width+t.padding).attr("height",s.height+t.padding),f.info("DoubleCircle main"),m(t,i),t.intersect=function(h){return f.info("DoubleCircle intersect",t,s.width/2+l+r,h),b.circle(t,s.width/2+l+r,h)},a},Vt=async(e,t)=>{const{shapeSvg:a,bbox:s}=await M(e,t,$(t,void 0),!0),l=s.width+t.padding,r=s.height+t.padding,n=[{x:0,y:0},{x:l,y:0},{x:l,y:-r},{x:0,y:-r},{x:0,y:0},{x:-8,y:0},{x:l+8,y:0},{x:l+8,y:-r},{x:-8,y:-r},{x:-8,y:0}],i=Y(a,l,r,n);return i.attr("style",t.style),m(t,i),t.intersect=function(o){return b.polygon(t,n,o)},a},Jt=(e,t)=>{const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=a.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),m(t,s),t.intersect=function(l){return b.circle(t,7,l)},a},tt=(e,t,a)=>{const s=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);let l=70,r=10;a==="LR"&&(l=10,r=70);const n=s.append("rect").attr("x",-1*l/2).attr("y",-1*r/2).attr("width",l).attr("height",r).attr("class","fork-join");return m(t,n),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(i){return b.rect(t,i)},s},Qt=(e,t)=>{const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=a.insert("circle",":first-child"),l=a.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),s.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),m(t,l),t.intersect=function(r){return b.circle(t,7,r)},a},Kt=(e,t)=>{const a=t.padding/2,s=4,l=8;let r;t.classes?r="node "+t.classes:r="node default";const n=e.insert("g").attr("class",r).attr("id",t.domId||t.id),i=n.insert("rect",":first-child"),o=n.insert("line"),h=n.insert("line");let d=0,c=s;const p=n.insert("g").attr("class","label");let y=0;const x=t.classData.annotations&&t.classData.annotations[0],k=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",g=p.node().appendChild(P(k,t.labelStyle,!0,!0));let w=g.getBBox();if(R(u().flowchart.htmlLabels)){const L=g.children[0],S=C(g);w=L.getBoundingClientRect(),S.attr("width",w.width),S.attr("height",w.height)}t.classData.annotations[0]&&(c+=w.height+s,d+=w.width);let v=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(u().flowchart.htmlLabels?v+="&lt;"+t.classData.type+"&gt;":v+="<"+t.classData.type+">");const B=p.node().appendChild(P(v,t.labelStyle,!0,!0));C(B).attr("class","classTitle");let _=B.getBBox();if(R(u().flowchart.htmlLabels)){const L=B.children[0],S=C(B);_=L.getBoundingClientRect(),S.attr("width",_.width),S.attr("height",_.height)}c+=_.height+s,_.width>d&&(d=_.width);const X=[];t.classData.members.forEach(L=>{const S=L.getDisplayDetails();let I=S.displayText;u().flowchart.htmlLabels&&(I=I.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const W=p.node().appendChild(P(I,S.cssStyle?S.cssStyle:t.labelStyle,!0,!0));let E=W.getBBox();if(R(u().flowchart.htmlLabels)){const z=W.children[0],H=C(W);E=z.getBoundingClientRect(),H.attr("width",E.width),H.attr("height",E.height)}E.width>d&&(d=E.width),c+=E.height+s,X.push(W)}),c+=l;const F=[];if(t.classData.methods.forEach(L=>{const S=L.getDisplayDetails();let I=S.displayText;u().flowchart.htmlLabels&&(I=I.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const W=p.node().appendChild(P(I,S.cssStyle?S.cssStyle:t.labelStyle,!0,!0));let E=W.getBBox();if(R(u().flowchart.htmlLabels)){const z=W.children[0],H=C(W);E=z.getBoundingClientRect(),H.attr("width",E.width),H.attr("height",E.height)}E.width>d&&(d=E.width),c+=E.height+s,F.push(W)}),c+=l,x){let L=(d-w.width)/2;C(g).attr("transform","translate( "+(-1*d/2+L)+", "+-1*c/2+")"),y=w.height+s}let it=(d-_.width)/2;return C(B).attr("transform","translate( "+(-1*d/2+it)+", "+(-1*c/2+y)+")"),y+=_.height+s,o.attr("class","divider").attr("x1",-d/2-a).attr("x2",d/2+a).attr("y1",-c/2-a+l+y).attr("y2",-c/2-a+l+y),y+=l,X.forEach(L=>{C(L).attr("transform","translate( "+-d/2+", "+(-1*c/2+y+l/2)+")");const S=L==null?void 0:L.getBBox();y+=((S==null?void 0:S.height)??0)+s}),y+=l,h.attr("class","divider").attr("x1",-d/2-a).attr("x2",d/2+a).attr("y1",-c/2-a+l+y).attr("y2",-c/2-a+l+y),y+=l,F.forEach(L=>{C(L).attr("transform","translate( "+-d/2+", "+(-1*c/2+y)+")");const S=L==null?void 0:L.getBBox();y+=((S==null?void 0:S.height)??0)+s}),i.attr("style",t.style).attr("class","outer title-state").attr("x",-d/2-a).attr("y",-(c/2)-a).attr("width",d+t.padding).attr("height",c+t.padding),m(t,i),t.intersect=function(L){return b.rect(t,L)},n},rt={rhombus:K,composite:At,question:K,rect:jt,labelRect:Zt,rectWithTitle:zt,choice:Rt,circle:qt,doublecircle:Ft,stadium:Gt,hexagon:Yt,block_arrow:Wt,rect_left_inv_arrow:Xt,lean_right:Ot,lean_left:It,trapezoid:Dt,inv_trapezoid:Ht,rect_right_inv_arrow:Nt,cylinder:Ut,start:Jt,end:Qt,note:Et,subroutine:Vt,fork:tt,join:tt,class_box:Kt};let D={};const hr=async(e,t,a)=>{let s,l;if(t.link){let r;u().securityLevel==="sandbox"?r="_top":t.linkTarget&&(r=t.linkTarget||"_blank"),s=e.insert("svg:a").attr("xlink:href",t.link).attr("target",r),l=await rt[t.shape](s,t,a)}else l=await rt[t.shape](e,t,a),s=l;return t.tooltip&&l.attr("title",t.tooltip),t.class&&l.attr("class","node default "+t.class),s.attr("data-node","true"),s.attr("data-id",t.id),D[t.id]=s,t.haveCallback&&D[t.id].attr("class",D[t.id].attr("class")+" clickable"),s},cr=(e,t)=>{D[t.id]=e},yr=()=>{D={}},pr=e=>{const t=D[e.id];f.trace("Transforming node",e.diff,e,"translate("+(e.x-e.width/2-5)+", "+e.width/2+")");const a=8,s=e.diff||0;return e.clusterNode?t.attr("transform","translate("+(e.x+s-e.width/2)+", "+(e.y-e.height/2-a)+")"):t.attr("transform","translate("+e.x+", "+e.y+")"),s},tr=({flowchart:e})=>{var t,a;const s=((t=e==null?void 0:e.subGraphTitleMargin)==null?void 0:t.top)??0,l=((a=e==null?void 0:e.subGraphTitleMargin)==null?void 0:a.bottom)??0,r=s+l;return{subGraphTitleTopMargin:s,subGraphTitleBottomMargin:l,subGraphTitleTotalMargin:r}},O={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function U(e,t){if(e===void 0||t===void 0)return{angle:0,deltaX:0,deltaY:0};e=A(e),t=A(t);const[a,s]=[e.x,e.y],[l,r]=[t.x,t.y],n=l-a,i=r-s;return{angle:Math.atan(i/n),deltaX:n,deltaY:i}}const A=e=>Array.isArray(e)?{x:e[0],y:e[1]}:e,rr=e=>({x:function(t,a,s){let l=0;if(a===0&&Object.hasOwn(O,e.arrowTypeStart)){const{angle:r,deltaX:n}=U(s[0],s[1]);l=O[e.arrowTypeStart]*Math.cos(r)*(n>=0?1:-1)}else if(a===s.length-1&&Object.hasOwn(O,e.arrowTypeEnd)){const{angle:r,deltaX:n}=U(s[s.length-1],s[s.length-2]);l=O[e.arrowTypeEnd]*Math.cos(r)*(n>=0?1:-1)}return A(t).x+l},y:function(t,a,s){let l=0;if(a===0&&Object.hasOwn(O,e.arrowTypeStart)){const{angle:r,deltaY:n}=U(s[0],s[1]);l=O[e.arrowTypeStart]*Math.abs(Math.sin(r))*(n>=0?1:-1)}else if(a===s.length-1&&Object.hasOwn(O,e.arrowTypeEnd)){const{angle:r,deltaY:n}=U(s[s.length-1],s[s.length-2]);l=O[e.arrowTypeEnd]*Math.abs(Math.sin(r))*(n>=0?1:-1)}return A(t).y+l}}),ar=(e,t,a,s,l)=>{t.arrowTypeStart&&at(e,"start",t.arrowTypeStart,a,s,l),t.arrowTypeEnd&&at(e,"end",t.arrowTypeEnd,a,s,l)},er={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},at=(e,t,a,s,l,r)=>{const n=er[a];if(!n){f.warn(`Unknown arrow type: ${a}`);return}const i=t==="start"?"Start":"End";e.attr(`marker-${t}`,`url(${s}#${l}_${r}-${n}${i})`)};let Z={},T={};const gr=()=>{Z={},T={}},xr=(e,t)=>{const a=R(u().flowchart.htmlLabels),s=t.labelType==="markdown"?nt(e,t.label,{style:t.labelStyle,useHtmlLabels:a,addSvgBackground:!0}):P(t.label,t.labelStyle),l=e.insert("g").attr("class","edgeLabel"),r=l.insert("g").attr("class","label");r.node().appendChild(s);let n=s.getBBox();if(a){const o=s.children[0],h=C(s);n=o.getBoundingClientRect(),h.attr("width",n.width),h.attr("height",n.height)}r.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),Z[t.id]=l,t.width=n.width,t.height=n.height;let i;if(t.startLabelLeft){const o=P(t.startLabelLeft,t.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),d=h.insert("g").attr("class","inner");i=d.node().appendChild(o);const c=o.getBBox();d.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),T[t.id]||(T[t.id]={}),T[t.id].startLeft=h,j(i,t.startLabelLeft)}if(t.startLabelRight){const o=P(t.startLabelRight,t.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),d=h.insert("g").attr("class","inner");i=h.node().appendChild(o),d.node().appendChild(o);const c=o.getBBox();d.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),T[t.id]||(T[t.id]={}),T[t.id].startRight=h,j(i,t.startLabelRight)}if(t.endLabelLeft){const o=P(t.endLabelLeft,t.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),d=h.insert("g").attr("class","inner");i=d.node().appendChild(o);const c=o.getBBox();d.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),h.node().appendChild(o),T[t.id]||(T[t.id]={}),T[t.id].endLeft=h,j(i,t.endLabelLeft)}if(t.endLabelRight){const o=P(t.endLabelRight,t.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),d=h.insert("g").attr("class","inner");i=d.node().appendChild(o);const c=o.getBBox();d.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),h.node().appendChild(o),T[t.id]||(T[t.id]={}),T[t.id].endRight=h,j(i,t.endLabelRight)}return s};function j(e,t){u().flowchart.htmlLabels&&e&&(e.style.width=t.length*9+"px",e.style.height="12px")}const fr=(e,t)=>{f.debug("Moving label abc88 ",e.id,e.label,Z[e.id],t);let a=t.updatedPath?t.updatedPath:t.originalPath;const s=u(),{subGraphTitleTotalMargin:l}=tr(s);if(e.label){const r=Z[e.id];let n=e.x,i=e.y;if(a){const o=N.calcLabelPosition(a);f.debug("Moving label "+e.label+" from (",n,",",i,") to (",o.x,",",o.y,") abc88"),t.updatedPath&&(n=o.x,i=o.y)}r.attr("transform",`translate(${n}, ${i+l/2})`)}if(e.startLabelLeft){const r=T[e.id].startLeft;let n=e.x,i=e.y;if(a){const o=N.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_left",a);n=o.x,i=o.y}r.attr("transform",`translate(${n}, ${i})`)}if(e.startLabelRight){const r=T[e.id].startRight;let n=e.x,i=e.y;if(a){const o=N.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_right",a);n=o.x,i=o.y}r.attr("transform",`translate(${n}, ${i})`)}if(e.endLabelLeft){const r=T[e.id].endLeft;let n=e.x,i=e.y;if(a){const o=N.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_left",a);n=o.x,i=o.y}r.attr("transform",`translate(${n}, ${i})`)}if(e.endLabelRight){const r=T[e.id].endRight;let n=e.x,i=e.y;if(a){const o=N.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_right",a);n=o.x,i=o.y}r.attr("transform",`translate(${n}, ${i})`)}},nr=(e,t)=>{const a=e.x,s=e.y,l=Math.abs(t.x-a),r=Math.abs(t.y-s),n=e.width/2,i=e.height/2;return l>=n||r>=i},sr=(e,t,a)=>{f.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);const s=e.x,l=e.y,r=Math.abs(s-a.x),n=e.width/2;let i=a.x<t.x?n-r:n+r;const o=e.height/2,h=Math.abs(t.y-a.y),d=Math.abs(t.x-a.x);if(Math.abs(l-t.y)*n>Math.abs(s-t.x)*o){let c=a.y<t.y?t.y-o-l:l-o-t.y;i=d*c/h;const p={x:a.x<t.x?a.x+i:a.x-d+i,y:a.y<t.y?a.y+h-c:a.y-h+c};return i===0&&(p.x=t.x,p.y=t.y),d===0&&(p.x=t.x),h===0&&(p.y=t.y),f.debug(`abc89 topp/bott calc, Q ${h}, q ${c}, R ${d}, r ${i}`,p),p}else{a.x<t.x?i=t.x-n-s:i=s-n-t.x;let c=h*i/d,p=a.x<t.x?a.x+d-i:a.x-d+i,y=a.y<t.y?a.y+c:a.y-c;return f.debug(`sides calc abc89, Q ${h}, q ${c}, R ${d}, r ${i}`,{_x:p,_y:y}),i===0&&(p=t.x,y=t.y),d===0&&(p=t.x),h===0&&(y=t.y),{x:p,y}}},et=(e,t)=>{f.debug("abc88 cutPathAtIntersect",e,t);let a=[],s=e[0],l=!1;return e.forEach(r=>{if(!nr(t,r)&&!l){const n=sr(t,s,r);let i=!1;a.forEach(o=>{i=i||o.x===n.x&&o.y===n.y}),a.some(o=>o.x===n.x&&o.y===n.y)||a.push(n),l=!0}else s=r,l||a.push(r)}),a},wr=function(e,t,a,s,l,r,n){let i=a.points;f.debug("abc88 InsertEdge: edge=",a,"e=",t);let o=!1;const h=r.node(t.v);var d=r.node(t.w);d!=null&&d.intersect&&h!=null&&h.intersect&&(i=i.slice(1,a.points.length-1),i.unshift(h.intersect(i[0])),i.push(d.intersect(i[i.length-1]))),a.toCluster&&(f.debug("to cluster abc88",s[a.toCluster]),i=et(a.points,s[a.toCluster].node),o=!0),a.fromCluster&&(f.debug("from cluster abc88",s[a.fromCluster]),i=et(i.reverse(),s[a.fromCluster].node).reverse(),o=!0);const c=i.filter(_=>!Number.isNaN(_.y));let p=lt;a.curve&&(l==="graph"||l==="flowchart")&&(p=a.curve);const{x:y,y:x}=rr(a),k=ot().x(y).y(x).curve(p);let g;switch(a.thickness){case"normal":g="edge-thickness-normal";break;case"thick":g="edge-thickness-thick";break;case"invisible":g="edge-thickness-thick";break;default:g=""}switch(a.pattern){case"solid":g+=" edge-pattern-solid";break;case"dotted":g+=" edge-pattern-dotted";break;case"dashed":g+=" edge-pattern-dashed";break}const w=e.append("path").attr("d",k(c)).attr("id",a.id).attr("class"," "+g+(a.classes?" "+a.classes:"")).attr("style",a.style);let v="";(u().flowchart.arrowMarkerAbsolute||u().state.arrowMarkerAbsolute)&&(v=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,v=v.replace(/\(/g,"\\("),v=v.replace(/\)/g,"\\)")),ar(w,a,v,n,l);let B={};return o&&(B.updatedPath=i),B.originalPath=a.points,B};export{Ct as E,M,P as R,ar as a,xr as d,pr as f,fr as g,dr as h,m,hr as o,yr as p,rr as r,tr as t,wr as u,gr as x,cr as y};
