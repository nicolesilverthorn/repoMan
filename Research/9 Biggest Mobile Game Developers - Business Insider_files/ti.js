//v110 (c) 2008-2015 33Across Inc. All Rights Reserved

Tynt=window.Tynt||[];
if(typeof Tynt.TIL=="undefined"){(function(){var Mb=function(k,g){function L(a){var b=L.options;a=b.parser[b.strictMode?"strict":"loose"].exec(a);for(var c={},d=14;d--;)c[b.key[d]]=a[d]||"";c[b.q.name]={};c[b.key[12]].replace(b.q.parser,function(e,f,h){if(f)c[b.q.name][f]=h});return c}L.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};if(typeof A==="undefined")var A={afterIpBlockCheck:[],afterDynamicConfig:[],afterCheckModules:[],afterProtectTynt:[],afterDynamicConfigAndDocumentLoaded:[]};var D=function(a,b){if(typeof A!=="undefined"&&A.hasOwnProperty(a)&&A[a].hasOwnProperty("length"))for(var c=0;c<A[a].length;c+=1)typeof A[a][c]===
"function"&&A[a][c](b)},m=g.body,t=g.documentElement,W=k.eval("/*@cc_on!@*/false"),Aa=function(a,b){for(var c="",d=0;d<b;d++)c+=a;return c},B=Aa("a",50),E=(Tynt.e||"")+"ic.tynt.com",Za=(Tynt.e||"")+"de.tynt.com/deb/",$a=(Tynt.e||"")+"cdn.tynt.com",X=E+"/b/s",Ba=(Tynt.e||"")+"id.tynt.com",v=function(){return(new Date).getTime()},C=function(a){return a.replace(/^\s+|\s+$/g,"")},H=function(a,b){for(var c in a)if(a.hasOwnProperty(c))b[c]=a[c]},r=function(a,b,c){a=g.createElement(a);H(b,a);H(c,a.style);
return a},Q=function(){for(var a=Tynt,b={},c=a.length,d=[],e=0;e<c;e++)if(!b[a[e]]){b[a[e]]=true;d.push(a[e])}return d.join("~")},F,R;if(k.addEventListener){F=function(a,b,c){a.addEventListener(b,c,false)};R=function(a,b,c){a.removeEventListener(b,c,false)}}else{F=function(a,b,c){a.attachEvent("on"+b,c)};R=function(a,b,c){a.detachEvent("on"+b,c)}}var S=function(a,b){var c=k.location.hostname.split("."),d,e=2;do{d=c.slice(c.length-e,c.length).join(".");d=a+";path=/;domain=."+d+";"+b;g.cookie=d;e++}while(g.cookie.indexOf(a)==
-1&&e<=c.length);if(g.cookie.indexOf(a)==-1){d=a+";path=/;"+b;g.cookie=d}},Y=function(a){g.readyState=="complete"?a():F(k,"load",function(){setTimeout(function(){if(typeof g.readyState=="undefined"&&!W)g.readyState="complete";a()},10)})},s=function(a,b){var c=[],d=function(e,f){var h="http://"+e.replace("id="+B,"id="+Q());if(h.indexOf(E+"/b/p?")>-1&&typeof Tynt.b=="string")h+="&b="+Tynt.b;var j=new Image(1,1);if(f)j.onerror=f;j.src=h};s=function(e,f){c.push([e,f])};Y(function(){s=d;for(var e=0;e<
c.length;e++)s(c[e][0],c[e][1]);c=null});s(a,b)},ma=function(a){a=r("script",{async:"async",src:"http://"+a});var b=g.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},Ca=function(a){var b=[],c="",d;for(d in a)if(a.hasOwnProperty(d)){b.push(c,d,"=",a[d]);c="&"}return b.join("")},M=function(a){for(var b=0,c=a.length<100?a.length:100,d=0;d<c;d++)b+=a.charCodeAt(d);a=Math.floor(Math.random()*3844);c=Math.abs(v()-12281184E5);return Da(c,7)+Da((b+a)%3844,2)},Ea=function(a){if(a<62)return"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this);
else{var b=Math.floor(a/62);a=a-b*62;return b>=62?Ea(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a):"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a)}},Da=function(a,b){var c=Ea(a);return Aa("0",b-c.length)+c},Z=function(a){return(a=C(a))?a.split(/\s+/i).length:0},T=C((g.title||k.location.hostname).toString()).replace(RegExp(k.location.hash,"g"),""),Fa=function(){for(var a=
g.getElementsByTagName("link"),b=0;b<a.length;b++)if(a[b].getAttribute("rel")&&a[b].getAttribute("rel").match("canonical")&&a[b].getAttribute("href")){a=a[b].getAttribute("href");b=k.location.protocol+"//"+k.location.host+k.location.pathname;var c=g.getElementsByTagName("base")[0];if(c)if(c=c.getAttribute("href"))b=c;if(!a.match(/^http/)){if(a.charAt(0)=="/"){c=b.indexOf("/",9);if(c>-1)b=b.slice(0,c)}else{c=b.lastIndexOf("/");if(c>9)b=b.slice(0,c+1);else b+="/"}a=b+a}return a}return""},G=function(a){return a.replace(/^https?:\/\//,
"")},na=function(a,b){for(var c=b+"=",d=a.split(";"),e=0;e<d.length;e++){for(var f=d[e];f.charAt(0)==" ";)f=f.substring(1,f.length);if(f.indexOf(c)===0)return f.substring(c.length,f.length)}return null},ab=function(){var a=na(g.cookie,"tracertraffic"),b=encodeURIComponent(G(Fa())),c=k.location.hash;c=/tynt=/.test(c)?c.match(/tynt=?([^?&$#]*)/)[1]:false;var d=E+"/b/p?id="+B+(a?"&et="+a:"")+(c?"&a="+c:"")+"&ts="+v(),e=d+(b?"&cu="+b:""),f=e+(g.referrer?"&r="+encodeURIComponent(G(g.referrer)):"");a=f+
"&t="+encodeURIComponent(T);s(a,function(){s(f,function(){s(e,function(){s(d)})})})},bb=function(){Y(function(){var a=[Za,"v2?id=",Q(),"&r=",encodeURIComponent(G(g.referrer))].join("");ma(a)})},Ga=function(a){var b=a.trace_type;delete a.trace_type;var c=a.g;delete a.g;for(var d=[],e=["id","wc","f","w","h","t","c"],f=0;f<e.length;f++){var h=e[f],j=a[h];j&&d.push([h,encodeURIComponent(j).replace(/\'/g,"%27")]);delete a[h]}for(var l in a)if(a.hasOwnProperty(l))(e=a[l])&&d.push([l,encodeURIComponent(e).replace(/\'/g,
"%27")]);a=[];f=2048-(("http://"+E+"/a/t/x#?").length+(3+c.length)+5);h=d.length;var q=j=0,p=0,w,n,I,u,x=0;for(a[x]={g:c,tp:null};j<h&&a.length<35;){w=d[j][0];l=d[j][1];I=w.length+2;n=f-I-q;if(n>0){e=l.substring(p,p+n);u=e.slice(-2).indexOf("%");if(u>-1){e=l.substring(p,p+n-2+u);q+=u+2}q+=e.length+I;p+=e.length;a[x][w]=e}else q=f;if(q>=f){a[++x]={g:c,p:x};q=0}if(p>=l.length){j++;p=0}}a[0].tp=a.length;s(E+"/b/t/"+b+"?"+Ca(a[0]));for(c=1;c<a.length;c++)s(E+"/b/x/"+b+"?"+Ca(a[c]))},oa=function(){var a=
[];return function(b){for(var c=a.length-1;c>=0;c--)if(a[c]==b)return false;a.unshift(b);a.length>3&&a.pop();return true}},cb=oa(),db=oa(),eb=function(){var a,b=function(){k.removeEventListener("blur",b,false);pa(a);return true};return function(c){a=c.target||c.srcElement;k.removeEventListener("blur",b,false);if(a.nodeName=="IMG"&&a.parentNode.nodeName!="A"){k.addEventListener("blur",b,false);setTimeout(function(){g.removeEventListener("blur",b,false)},1E4)}return true}}(),Ha=function(a){pa(a.target||
a.srcElement,true)},$,Ia=function(a){a=a.target||a.srcElement;$=a.nodeName=="IMG"?a:null},qa=function(){var a=function(h){return typeof h.pageX=="number"?{x:h.pageX-(t.scrollLeft?t.scrollLeft:m.scrollLeft),y:h.pageY-(t.scrollTop?t.scrollTop:m.scrollTop)}:{x:h.clientX,y:h.clientY}},b=function(h){h=a(h);return h.x<=0||h.y<=0||h.x>=m.clientWidth||h.y>=m.clientHeight},c=function(h){h=a(h);return h.x<=0||h.y<=0||h.x>=t.clientWidth||h.y>=t.clientHeight},d=function(h){return h.target.nodeName=="#document"},
e=function(h){h=a(h);return h.x<=4||h.y<=4||h.x>=t.clientWidth-4||h.y>=t.clientHeight-4},f=function(h){f=navigator.userAgent.match("MSIE")?!g.compatMode||g.compatMode.indexOf("CSS")==-1?b:c:navigator.userAgent.match("Firefox")?d:e;f(h)};return function(h){if($&&f(h)){pa($);$=null}return true}}(),Ja=function(){return/tracer=test|tracer=no_tracing|disableTracer=/.test(k.location.href)||/disableTracer=y/.test(g.cookie)};Tynt.ci=function(){var a;return function(b,c){a=c||a;var d=X+["?ci=",b,"&id=",B,
"&g=",a,"&r=",encodeURIComponent(G(g.referrer)),"&ts=",v()].join("");s(d)}}();Tynt.st=function(){var a;return function(b,c,d,e){a=d||a;b=[X,"?",encodeURIComponent(b),"=",encodeURIComponent(c),"&id=",B,"&g=",a,"&r=",encodeURIComponent(G(g.referrer)),"&href=",encodeURIComponent(G(k.location.href)),"&ts=",v()];c="";if(e){c=[];d="";for(var f in e)if(e.hasOwnProperty(f)){c.push(d,encodeURIComponent(f),"=",encodeURIComponent(e[f]));d="&"}c="&"+c.join("")}s(b.join("")+c)}}();if(typeof tyntLoadMethod!=="undefined")if(Tynt.e||
Math.random()<0.0010)Tynt.st("lm",tyntLoadMethod,B,{lmEx:tyntLoadException});var ra;if(Tynt.c)ra=function(){};else{Tynt.c=true;Tynt.m=Tynt.m||[];Tynt.n=Tynt.n||[];ra=function(){var a=true,b,c=function(d,e){var f={id:B,wc:Z(e),c:e,f:a?1:0,t:T};H(d,f);a=false;Ga(f)};if(k.addEventListener){navigator.userAgent.match(/Firefox\/2\b/)||m.addEventListener("copy",Ha,false);k.addEventListener("mousedown",Ia,false);k.addEventListener("dragleave",qa,false);k.addEventListener("dragexit",qa,false);g.addEventListener("contextmenu",
eb,false)}else{m.attachEvent("oncopy",Ha);g.getElementsByTagName("html")[0].attachEvent("ondragleave",qa);m.attachEvent("onmousedown",Ia)}if(g.cookie.indexOf("tracertraffic=")!==-1)if(!g.referrer||g.referrer.indexOf(k.location.host)==-1)S("tracertraffic=0","expires=Thu, 01 Jan 1970 00:00:00 GMT");ab();bb();return function(d,e){if(!g.getElementById("tyntSh")){var f,h,j;if(e)if(!g.selection||!g.selection.createRange){h=getSelection();j=h.rangeCount>0&&h.getRangeAt(0);f=h.toString()}else{h=g.selection.createRange();
j=h.duplicate();f=h.text}var l=d.src;if(l&&!f&&db(l)){h={trace_type:3,g:M(l),w:d.width,h:d.height};for(j=0;j<Tynt.n.length;j++)Tynt.n[j](h,l);c(h,l)}else if(f&&C(f).length&&d.nodeName!="TEXTAREA"&&d.nodeName!="INPUT"){l=cb(f);h={trace_type:1};if(l)b=M(f);h.g=b;for(var q=true,p=0;p<Tynt.m.length;p++)q=q&&Tynt.m[p](h,f,j,l);l&&q&&c(h,f)}}}}}var aa=function(a){a=a.charCodeAt(0);return 3584<=a&&a<=3711||11904<=a&&a<=12591||12688<=a&&a<=40959||63744<=a&&a<=64255||65072<=a&&a<=65103||131072<=a&&a<=173791||
194560<=a&&a<=195103},Ka=function(a){a=a.getElementsByTagName("script");for(var b=a.length-1;b>=0;b--){var c=a[b];c.parentNode.removeChild(c)}},N=function(a,b){var c=Fa();c=c&&i.c!==false?c:k.location.href;c=c.replace(/#(i|a)xzz=?(.*)$/g,"");c=c+"#"+("ixzz"+a);if(b)c+="&"+b;return c},fb=function(a,b){b=C(b);if(a.getElementsByClassName)return a.getElementsByClassName(b);if(a.querySelectorAll)return a.querySelectorAll("."+b);return function(){for(var c=a.getElementsByTagName("*"),d=[],e=0;e<c.length;e++)c[e].className.match(b)&&
d.push(c[e]);return d}()},sa=function(a){return Object.prototype.toString.apply(a)==="[object Array]"},gb=function(a){if(typeof Array.prototype.toJSON!=="function")return JSON.stringify(a);var b=Array.prototype.toJSON;delete Array.prototype.toJSON;a=JSON.stringify(a);Array.prototype.toJSON=b;return a},ta=g.defaultView,ua=W?!g.compatMode||g.compatMode.indexOf("CSS")==-1:false,hb=W?!("XMLHttpRequest"in k):false,ba=function(a){ba=typeof ta!="undefined"&&typeof ta.getComputedStyle!="undefined"?function(b){return ta.getComputedStyle(b,
"")}:function(b){return b.currentStyle};return ba(a)},y={};y.t=3;y.p=6;y.w=7;y.f=8;y.i=9;y.l=10;y.g=11;y.ssbt=12;y.ssbf=13;y.ssbp=14;y.ssbl=15;y.ssbg=16;var ib=function(a){a=a.match(/ixzz=?([^?$#]*)/);if(!a)return null;a=a[1].match(/&([^?$]*)/);if(Tynt.k)return Tynt.k.charAt(1);if(!a||!a[1])return null;return a[1]},La=function(a){var b=new Date(v()+864E5);S("tracertraffic="+a.toString(),"expires="+b.toUTCString())},jb=function(){if(Tynt.v)return false;Tynt.v=true;var a=k.location.href.match(/ixzz=?([^?&$#]*)/),
b=(a&&a.length==2?a[1]:null)||Tynt.h;if(b&&!(g.referrer?L(g.referrer).host===L(k.location.hostname).host:false)){a=ib(k.location.href);b=E+"/b/v"+["?g=",b,/\?trace_owner_view/.test(k.location.href)?"&o=y":"","&id=",B,a?"&s="+a:"","&r=",encodeURIComponent(G(g.referrer)),"&ts=",v()].join("");s(b);La(y[a]||1);return true}return false},J="http://"+(Tynt.e||"")+"cdn.tynt.com/images/ss/",Ma=typeof createImageMeme!=="undefined",kb=/Mobile|iP(hone|od|ad)|Android|BlackBerry|Tablet|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
K=K||"";K+=["#tyntSh div,#tyntSh span,#tyntSh img,#tyntSh a,div#tyntSh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}#tyntSh img,#tyntSh span{display:inline}#tyntSh div,div#tyntSh{display:block}div#tyntSh{z-index:9999999;position:absolute;height:62px;margin:10px;overflow:visible;background:#FFF;border-radius:5px;text-align:center;box-shadow: 0 2px 6px rgba(0,0,0,0.5)}div#tyntShTr{margin:-11px auto 0 auto;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:11px solid #F1F1F1}img#tyntShTw,img#tyntShP,img#tyntShFb,img#tyntShLi,img#tyntShGp{cursor:pointer;height:28px;width:28px;margin:3px 3px 2px 3px;vertical-align:bottom}div#tyntShPTL,div#tyntShHFL{color:#888;text-decoration:none;margin:0 0 2px 0;background-color:#F1F1F1;padding:2px 4px;border-radius:5px 5px 0 0}div#tyntShHFL{text-align:right;border-radius:0 0 5px 5px;margin:2px 0 0 0}div#tyntShHFL,span#tyntShHFLs,div#tyntShPTL{font:normal 8px Arial}",
"span#tyntShHFLs{cursor:pointer;"+(ua?"text-decoration:underline":"")+"}","span#tyntShHFLs:hover{color:#555;text-decoration:underline}div#tyntShCB{position:absolute;cursor:pointer;width:14px;height:14px;top:0;right:0;background-position:0 -14px;background-repeat:no-repeat}div#tyntShCB:hover{background-position: 0 0}"].join("");var z=function(){var a,b;return function(c,d,e){a=d||a;b=e||b;c=X+["?w=",c,"&id=",B,"&g=",a,"&wc=",b,"&r=",encodeURIComponent(G(g.referrer)),"&ts=",v()].join("");s(c)}}(),ca=
function(){return kb.test(navigator.userAgent||navigator.vendor||k.opera)},O=function(a){return(i.ss||"").indexOf(a)>-1},Na=function(){return(i.ss||"").replace("p","").replace("m","").length},da=function(a,b){return b.length>a?b.slice(0,a-1)+"\u2026":b},lb=function(a,b,c){if(typeof c==="undefined")c="w";b=N(b,c);return b=da(114,a)+" "+b},o={words:0,_content:"",guid:null,isBar:function(a){a=a||"";return!!a.toString().match(/ssb/)},getContentFor:function(a){return o.isBar(a)?"":o._content},setContent:function(a){o._content=
a},getGuid:function(){return this.guid?this.guid:M(k.location.toString())},twitter:function(a,b,c){return r("img",{src:J+"t.png",title:"tweet this",id:a,onclick:function(){k.open("http://twitter.com/home?status="+encodeURIComponent(lb(o.getContentFor(c),o.getGuid(),c)),"tweet","width=723,height=251");z(b,o.getGuid(),o.words)}})},facebook:function(a,b,c){return r("img",{src:J+"fb.png",title:"share on Facebook",id:a,onclick:function(){var d=["http://www.facebook.com/dialog/feed?app_id=158472647611546&link=",
encodeURIComponent(N(o.getGuid(),c)),"&description=",encodeURIComponent(da(140,o.getContentFor(c))),"&redirect_uri=",encodeURIComponent("http://cdn.tynt.com/close.html")].join("");k.open(d,"fbshare","width=985,height=450");z(b,o.getGuid(),o.words)}})},linkedin:function(a,b,c){return r("img",{src:J+"li.png",title:"share on LinkedIn",id:a,onclick:function(){var d;d=["http://www.linkedin.com/shareArticle?mini=true","&url=",encodeURIComponent(N(o.getGuid(),c)),"&title=",T];if(o.getContentFor(c)){d.push("&summary=");
d.push(encodeURIComponent(da(255,o.getContentFor(c))))}d=d.join("");k.open(d,"lishare","width=520,height=450");z(b,o.getGuid(),o.words)}})},googleplus:function(a,b,c){return r("img",{src:J+"gp.png",title:"share on Google+",id:a,onclick:function(){var d=["https://plus.google.com/share?url=",encodeURIComponent(N(o.getGuid(),c))].join("");k.open(d,"gpshare","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");z(b,o.getGuid(),o.words)}})},pinterest:function(){}},va=function(a,b,
c){var d=a.createElement("style");d.id=b;d.type="text/css";b=a.createTextNode(c);d.styleSheet?d.styleSheet.cssText=b.nodeValue:d.appendChild(b);a.getElementsByTagName("head")[0].appendChild(d)},Oa=function(a,b,c){var d,e=function(f,h,j){o.guid=h;o.setContent(f);o.words=Z(f);if(!(g.getElementById("tyntSh")||o.words<8)){z(0,o.guid,o.words);var l;if(!g.selection||!g.selection.createRange){f=r("span",{},{display:"inline"});h=j.startContainer;var q=j.endContainer,p=j.endOffset;try{var w=g.createRange();
w.setStart(q,p);w.setEnd(q,p);w.surroundContents(f);var n,I,u;p={top:0,left:0,bottom:0};var x=f&&f.ownerDocument;if(x){n=x.documentElement;if(typeof f.getBoundingClientRect!=="undefined")p=f.getBoundingClientRect();I="scrollTo"in x&&x.document?x:x.nodeType===9?x.defaultView||x.parentWindow:false;u={top:p.top,left:p.left,width:p.right-p.left,height:p.bottom-p.top};if(ba(f).position!="fixed"){u.top+=I.pageYOffset||n.scrollTop||0;u.left+=I.pageXOffset||n.scrollLeft||0}u.top+=n.clientTop||0;u.left+=n.clientLeft||
0;l=[u.left,u.top,u.width,u.height]}else l=null;l[2]=f.offsetHeight;f.parentNode.removeChild(f);w.detach();h.parentNode.normalize();q.parentNode.normalize()}catch(Nb){}typeof getSelection().setBaseAndExtent!="undefined"&&getSelection().setBaseAndExtent(j.startContainer,j.startOffset,j.endContainer,j.endOffset)}else{j=g.selection.createRange();w=ua?"offset":"bounding";l=[];l[0]=j[w+"Left"]+(t.scrollLeft||m.scrollLeft);l[1]=j[w+"Top"]+(t.scrollTop||m.scrollTop);l[2]=j.boundingHeight}l=l;d.style.left=
l[0]+"px";d.style.top=Math.max(l[1]+l[2],3)+"px";m.insertBefore(d,m.firstChild);F(m,"mousedown",P);F(m,"touchstart",P)}};(function(){g.getElementById("tyntShCSS")||va(g,"tyntShCSS",K);d=r("div",{id:"tyntSh"},{width:Math.max(80,Na()*34)+"px"});ua||d.appendChild(r("div",{id:"tyntShTr"}));var f=r("div",{id:"tyntShPTL",innerHTML:"Powered by Tynt"});d.appendChild(f);f=r("div",{id:"tyntShHFL"});f.appendChild(r("span",{id:"tyntShHFLs",innerHTML:"Don't show again",onclick:mb}));var h=r("div",{id:"tyntShCB",
title:"close",onclick:nb},{backgroundImage:"url("+(J+"x.png")+")"});O("f")&&d.appendChild(o.facebook("tyntShFb",4,"f"));O("t")&&d.appendChild(o.twitter("tyntShTw",3,"w"));O("l")&&d.appendChild(o.linkedin("tyntShLi",8,"l"));O("g")&&d.appendChild(o.googleplus("tyntShGp",9,"g"));if(Ma){var j=r("img",{src:J+"pi.png",title:"pin it",id:"tyntShP",onclick:function(){createImageMeme(void 0,void 0)}});Ma&&d.appendChild(j)}ca()||d.appendChild(f);d.appendChild(h)})();e(a,b,c);Oa=e},nb=function(){P();z(2)},P=
function(a){var b=g.getElementById("tyntSh"),c=a?a.target||a.srcElement:{id:""};if(b&&!(c.id.indexOf("tyntSh")>-1)){R(m,"mousedown",P);R(m,"touchstart",P);m.removeChild(b);a&&z(1)}},mb=function(){P();var a=new Date(v()+31536E7);S("TyntSpeedShareHide=true","expires="+a.toUTCString());z(5)},ea=function(){return!hb&&g.cookie.indexOf("TyntSpeedShareHide=true")==-1},ob=function(a,b,c){Na()&&setTimeout(function(){ea()&&Oa(b,a.g,c)},1);return true};if(typeof i==="undefined")var i;A.afterDynamicConfigAndDocumentLoaded.push(function(a){if(a&&
a.ssb){va(g,"tyntSbCSS",".tynt-speedshare-bar img{margin:0 3px;}");for(var b=fb(g,"tynt-speedshare-bar"),c,d=false,e=0;e<b.length;e++){c=b[e];if(a.ssb.indexOf("f")>-1){c.appendChild(o.facebook("tyntSbFb",16,"ssbf"));d=true}if(a.ssb.indexOf("t")>-1){c.appendChild(o.twitter("tyntSbTw",17,"ssbt"));d=true}if(a.ssb.indexOf("l")>-1){c.appendChild(o.linkedin("tyntSbLi",19,"ssbl"));d=true}if(a.ssb.indexOf("g")>-1){c.appendChild(o.googleplus("tyntSbGp",20,"ssbg"));d=true}}d?z(14):z(15)}});var fa=[],U=[],Pa=
[{x:970,y:250},{x:300,y:600},{x:300,y:1050},{x:970,y:90},{x:300,y:250},{x:970,y:250},{x:970,y:90},{x:180,y:150},{x:160,y:600},{x:728,y:90},{x:120,y:60},{x:88,y:31}],Qa=[/:\/\/[^\/]*?outbrain\.com/,/:\/\/ads\.yldmgrimg\.net/,/:\/\/[^\/]*?cdn\.adblade\.com/,/:\/\/[^\/]*?googlesyndication\.com/];K=K||"";K+=["div.tyntShIh,.tyntShIh div,.tyntShIh span{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}.tyntShIh img,.tyntShIh span{display:inline}.tyntShIh div,div.tyntShIh{display:block;outline:0}",
"div.tyntShIh{position:absolute;cursor:default;background:transparent url("+(J+"pi.png")+") no-repeat;width:43px;height:21px;opacity:0;filter:alpha(opacity=0);z-index:9999999;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s}","div.tyntIhHover{opacity:1;filter:alpha(opacity=100);cursor:pointer}"].join("");var pb=function(a){a.getElementById("tyntShCSS")||va(a,"tyntShCSS",K)},rb=function(a,b,c){var d=c.document,e=a.getBoundingClientRect(),f=(e.right+e.left+a.width)/2,h=(e.top+e.bottom+a.height)/
2,j;for(j=function(){var l={};for(l.x=f;l.x>e.left;l.x-=20)for(l.y=h;l.y>e.top;l.y-=20)if(d.elementFromPoint(l.x,l.y)===a)return l;l.x=-1;l.y=-1;return l}();j.y<=h&&d.elementFromPoint(j.x,j.y)===a;)j.y++;for(j.y--;j.x<=f&&d.elementFromPoint(j.x,j.y)===a;)j.x++;j.x--;j=qb(j,c);b.style.left=j.x-45+"px";b.style.top=j.y-22+"px"},qb=function(a,b){var c=b.document.documentElement;return{x:a.x+((b.pageXOffset||c.scrollLeft||0)+(c.clientLeft||0)),y:a.y+((b.pageYOffset||c.scrollTop||0)+(c.clientTop||0))}},
sb=function(a){if(i&&typeof i.sspe!=="undefined"){if(U.length===0)U=i.sspe.split(",");if(U.length!==fa.length)for(var b=0;b<U.length;b+=1)fa.push(RegExp(U[b]));for(b=0;b<fa.length;b+=1)if(a.getAttribute("src")&&fa[b].test(a.getAttribute("src")))return true}return false},tb=function(a){var b,c;for(b=0;b<Qa.length;b++)if(Qa[b].test(a.src))return true;for(b=0;b<Pa.length;b++){c=Pa[b];if(a.width===c.x&&a.height===c.y)return true}return false},ub=function(){if(!(Ja()||!ea()||!O("p"))){var a=function(b){var c=
b.document,d=null,e,f=null,h,j,l,q;e=c.createElement("div");e.className="tyntShIh";c.body.appendChild(e);F(e,"click",function(){if(e.className=="tyntShIh tyntIhHover"&&ea()){k.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent(N(M(f.src),"i"))+"&media="+f.src+"&description="+encodeURIComponent(da(500,C(f.title||f.alt))));z(7)}});pb(c);F(c,"mouseover",function(n){if(!n)n=b.event;n=b.event?n.srcElement:n.target;if(n.nodeName==="IMG"&&n.height>=80&&n.width>=80&&n.src.indexOf("data:")!==
0&&!tb(n)&&!sb(n)&&n.getAttribute("nopin")!=="nopin"&&n.nopin!=="nopin")if(!(n===f&&e.showing)){f!==null&&f!==n&&p();f=n;f.__tyntPinItShow=true;d!==null&&clearTimeout(d);d=setTimeout(function(){if(f.__tyntPinItShow&&ea()){rb(f,e,b);e.className="tyntShIh tyntIhHover";e.showing=true;f.__tyntPinItRecorded||z(6);f.__tyntPinItRecorded=true}},typeof i!=="undefined"&&typeof i.pt!=="undefined"&&i.pt=="i"?0:1E3);F(c,"mousemove",q)}});q=function(n){n=c.elementFromPoint(n.clientX,n.clientY);n!=f&&n!=e&&p()&&
R(c,"mousemove",q)};var p=function(){if(e.showing){f.__tyntPinItShow=false;e.showing=false;e.className="tyntShIh";setTimeout(function(){e.style.left="-100px"},600);return true}return false};h=c.getElementsByTagName("iframe");for(l=h.length-1;l>=0;l--){j=h[l];try{!(j.src&&j.src.indexOf(k.location.protocol+"//"+k.location.hostname)!==0)&&j.getAttribute("nopin")!=="nopin"&&j.nopin!=="nopin"&&a(j.contentWindow)}catch(w){k.console&&Tynt.debug&&console.log("Bad iframe access",w,j)}}};a(k)}},wa=function(a){if(Tynt.sic)return false;
Tynt.sic=true;var b=g.createElement("script"),c=g.getElementsByTagName("script")[0];b.async="async";b.type="text/javascript";a=a;var d={"0":"sic-akamai.33across.com/javascripts/sic.js","1":"sic-akamai.33across.com/1/javascripts/sic.js"},e=Tynt.e||"";if(typeof a==="undefined"||!(a in d))a="0";b.src="http://"+e+d[a];c.parentNode.insertBefore(b,c);return true},ga=function(){var a=g.cookie.match(/tyntSICenable=(\d+?)/);return a?a[1]:false}();ga&&wa(ga);var Ra={viglink:function(){Tynt.vglnk={api_url:"//vigapi.tynt.com/api",
key:"f1f79f31e313bdb2b382c721aac77807",sub_id:""+ha};window.vglnk_self="Tynt.vglnk";(function(a,b){var c=a.createElement(b);c.type="text/javascript";c.async=true;c.src=("https:"==document.location.protocol?Tynt.vglnk.api_url:"//vig.tynt.com/api")+"/vglnk.js";var d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d)})(document,"script")},track_selections:function(){var a=oa();F(g,"mouseup",function(){var b="";if(!g.selection||!g.selection.createRange)b=getSelection().toString();else{selection=
g.selection.createRange();b=selection.text}b=C(b);if(b.length&&a(b)){b={id:B,g:M(b),wc:Z(b),c:b.slice(0,2E3),t:T,trace_type:2};Ga(b)}})},track_attribution_views:function(){trackAttributionView=true},sic:function(){wa("0")},sic_v1:function(){wa("1")}};A.afterDynamicConfig.push(function(){var a,b=i.p;if(b)for(a=0;a<b.length;a++)typeof Ra[b[a]]==="function"&&Ra[b[a]]();typeof D==="function"&&D("afterCheckModules")});var vb=Ba+"/ipb.js",xa=function(){return g.cookie.indexOf("ty_attributionBlockedByIp=t")!==
-1?true:false},Sa,wb=function(){Sa=setTimeout(function(){D("afterIpBlockCheck",i)},3E3);ma(vb)};Tynt.ipb=function(a){clearTimeout(Sa);var b=false;if(sa(i.ipb)){for(var c=0;c<i.ipb.length;c++)if(a===i.ipb[c]){b=true;break}a=b;b=new Date;b.setHours(b.getHours()+1);b="expires="+b.toGMTString();S("ty_attributionBlockedByIp="+(a===true?"t":"f"),b)}D("afterIpBlockCheck",i)};var Ta=(Tynt.e||"")+"ec.tynt.com",xb=(Tynt.e||"")+"sc.tynt.com/script/sc/",yb=["","Attribution","Attribution Share Alike","Attribution No Derivatives",
"Attribution Non-Commercial","Attribution Non-Commercial Share Alike","Attribution Non-Commercial No Derivatives"],zb=["","http://creativecommons.org/licenses/by/3.0","http://creativecommons.org/licenses/by-sa/3.0","http://creativecommons.org/licenses/by-nd/3.0","http://creativecommons.org/licenses/by-nc/3.0","http://creativecommons.org/licenses/by-nc-sa/3.0","http://creativecommons.org/licenses/by-nc-nd/3.0"],ia=null,Ab=function(){if(/tynt-mobile-ss-test/.test(k.location.href))return true;if(i.ss)if(ca()&&
ca()&&O("m"))return true;else if(!ca())return true;return false},Bb=function(a){return(a=a.match(/axzz([^?$]*)/))&&a.length==2?a[1]:null},Cb=function(a){s(E+"/b/a?g="+a+"&id="+B+"&r="+encodeURIComponent(G(g.referrer))+"&ts="+v(),function(){})},Ua=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Db=function(){var a;ia=false;if(typeof k.getSelection==="function")if(typeof g.createRange==="function"){var b=k.getSelection();if(!(typeof b.addRange!=="function"||typeof b.removeAllRanges!==
"function"||typeof b.rangeCount!=="number")){var c=[];for(a=0;a<b.rangeCount;a++)c.push(b.getRangeAt(a));a=g.body.appendChild(g.createElement("div"));a.contentEditable="false";var d=a.appendChild(g.createTextNode("\u00a0\u00a0\u00a0")),e=g.createRange(),f=e.cloneRange();e.setStart(d,0);f.setEnd(d,3);f.setStart(d,2);b.removeAllRanges();b.addRange(e);b.addRange(f);ia=b.rangeCount==2;g.body.removeChild(a);b.removeAllRanges();e.detach();f.detach();for(a=0;a<c.length;a++)b.addRange(c[a])}}},V=false,Eb=
function(a){var b,c="";ia===null&&Db();if(V)return false;V=true;var d="";if(i.a){var e=N(a);if(typeof trackAttributionView!=="undefined")c='<img src="https://'+E+"/b/l?id="+Q()+"&g="+a+'">';a=c+'<a style="color: #003399;" href="';d+=i.ap+" ";if(i.st)d=d+a+e+'">'+Ua(T)+"</a> ";if(i.su)d=d+a+e+'">'+Ua(e)+"</a>";if(i.as.length>0)d=d+"\n<br>"+i.as+" ";if(i.cc>0)d=d+"\n<br>Under Creative Commons License: "+a+zb[i.cc]+'">'+yb[i.cc]+"</a>";if(i.w||i.f){d+="\n<br>Follow us: ";if(i.w)d=d+'<a href="http://'+
Ta+"/b/rw?id="+Q()+"&u="+i.w+'" target="_blank">@'+i.w+" on Twitter</a>";if(i.w&&i.f)d+=" | ";if(i.f)d=d+'<a href="http://'+Ta+"/b/rf?id="+Q()+"&u="+i.f+'" target="_blank">'+i.f+" on Facebook</a>"}}if(i.el){if(d.length>0)d+="\n<br>";d+=i.el}var f,h;f=r("div",{},{overflow:"hidden",color:"#000000",backgroundColor:"#FFFFFF",textAlign:"left",textDecoration:"none",border:"none"});if(g.selection&&g.selection.createRange){var j=t.scrollLeft||m.scrollLeft,l=t.scrollTop||m.scrollTop;h=r("div",{},{overflow:"hidden",
position:"absolute",left:j+20+"px",top:l+20+"px",width:"1px",height:"1px"});m.insertBefore(h,m.firstChild);var q=g.selection.createRange();f.innerHTML=i.t?d+"<br><br>"+q.htmlText:q.htmlText+"<br><br>"+d;Ka(f);h.appendChild(g.createElement("br"));h.appendChild(f);d=m.createTextRange();d.moveToElementText(f);d.select();setTimeout(function(){m.removeChild(h);if(q.text!==""){q.select();t.scrollLeft=j;m.scrollLeft=j;t.scrollTop=l;m.scrollTop=l}V=false},0)}else if(ia){b=getSelection();h=r("div",{},{height:0,
position:"absolute",top:"-1000px"});h.innerHTML="<br>";if(i.t){m.insertBefore(h,m.firstChild);f.innerHTML=d+"<br><br>"}else{m.appendChild(h);f.innerHTML="<br>"+d+"<br>"}h.appendChild(f);d=g.createRange();d.selectNode(f);b.addRange(d);k.setTimeout(function(){h.parentNode.removeChild(h);V=false},0)}else{b=getSelection();var p=b.getRangeAt(0);d=r("span",{innerHTML:d});if(i.t){d.innerHTML+="<br/><br/>";f.appendChild(d);f.appendChild(p.cloneContents())}else{f.appendChild(p.cloneContents());d.innerHTML=
"<br/><br/>"+d.innerHTML;f.appendChild(d)}Ka(f);f.style.width=0.1;f.style.height=0.1;f.style.position="absolute";f.style.top="-1000px";f.style.left="-1001px";f.appendChild(g.createElement("br"));d=f.innerText.length;m.insertBefore(f,m.firstChild);if(f.innerText.length!=d)f.style.overflow="";b.selectAllChildren(f);setTimeout(function(){f.parentNode.removeChild(f);b.removeAllRanges();b.addRange(p);V=false},0)}return true},Gb=function(a,b){var c=true;if(i.a||i.el){var d;d=C(b);d=d.length>=2?aa(d.charAt(0))||
aa(d.charAt(d.length-1))||aa(d.charAt(d.length/2)):aa(d);var e;if(e=i.h)a:{e=(e=Fb())?e.className.split(/\s+/):[];for(var f=e.length-1;f>=0;f--)if(i.h[e[f]]!==undefined){e=i.h[e[f]];break a}e=void 0}e=e;if(e!==false&&(d&&b.replace(/\s/g,"").length>=i.aw*2||!d&&Z(b)>=i.aw)||e)if(i.a||i.el){c=Eb(a.g);if(i.a)a.trace_type=0}}return c},Fb=function(){return!g.selection||!g.selection.createRange?function(){var a=getSelection().getRangeAt(0),b=a.startContainer.nodeType==3?a.startContainer.parentNode:a.startContainer;
return b&&C(a.toString())==C(b.textContent)?b:null}:function(){var a=g.selection.createRange(),b=a.duplicate();b.collapse(true);return(b=b.parentElement())&&C(a.text)==C(b.innerText)?b:null}}(),Hb=function(a){var b=a?864E5:-5E3;b=new Date(v()+b);g.cookie="tracerabg="+a+";path=/;expires="+b.toUTCString()},Jb=function(a){var b;a:{b=g.getElementsByTagName("script");for(var c=0;c<b.length;c++)if(/\/show_afs_search\.js/i.test(b[c].src)){b=true;break a}b=false}if(!b&&Ib(k.location)){Tynt.b=a||M(k.location.href);
k.location.replace(k.location.href+(k.location.href[k.location.href.length-1]==="#"?"":"#")+"axzz"+Tynt.b)}},Ib=function(a){if(!(a.hash===""||a.hash==="#"))return false;if(typeof i.ba=="boolean"&&i.ba)i.ba=["/"];else if(!i.ba)return true;for(var b,c=i.ba.length-1;c>=0;c--){b=null;var d=i.ba[c],e=d.indexOf("/");if(e!==0){b=d.slice(0,e);d=d.slice(e)}if(!b||a.host==b)if(d.charAt(d.length-1)=="#"){if(a.pathname.indexOf(d.slice(0,-1))===0)return false}else if(a.pathname==d)return false}return true},ja;
Tynt.getConfig=function(){if(typeof ja!=="undefined"&&ja!==null)return ja;return ja=typeof JSON!=="undefined"&&typeof JSON.parse==="function"&&typeof JSON.stringify==="function"?JSON.parse(gb(i)):i};var ka=0,Va;ga=function(){Tynt.sc=function(c){clearTimeout(b);ka=c.fl||0;var d=la;c=(c=c)||{};if(c.d===true){c=c;H(Tynt.o||{},c);d=c;if(sa(Tynt.overrides))for(var e=0;Tynt.overrides.length>=e;e++)typeof Tynt.overrides[e]==="object"&&H(Tynt.overrides[e],d)}else{c=Tynt.i||k.tyntVariables||{};H(c,d);c=d;
if(!c.ap&&typeof tyntAP!="undefined")c.ap=tyntAP;if(!c.as&&typeof tyntAS!="undefined")c.as=tyntAS}i={a:true,ad:true,aw:8,cc:0,b:false,ap:"Read more:",as:"",st:false,su:true,w:false,f:false,ss:"",sic:{}};H(c,i);if(i.a==="0"||i.a===0)i.a=false;if(i.cc>6)i.cc=0;if(i.aw<8)i.aw=8;if(i.su==="0"||i.su===0)i.su=false;if(!/^\w{1,15}$/.test(i.w||""))i.w=false;if(!/^[\w.]{2,}$/.test(i.f||""))i.f=false;if(ka>0){i.a=false;i.b=false}!g.cookie.match(/ty_attributionBlockedByIp=[tf]/)&&sa(i.ipb)?wb():D("afterIpBlockCheck",
i)};var a=xb+ha+".js",b=setTimeout(function(){Tynt.sc({fl:1})},1E4);Va=v();ma(a)};A.afterIpBlockCheck.push(function(){ka===0&&!xa()&&Tynt.m.push(Gb);if(i.b&&!xa()){var a=Bb(k.location.href);if(a){if("#axzz"+na(g.cookie,"tracerabg")!=k.location.hash)if(!(g.referrer?L(g.referrer).host===L(k.location.hostname).host:false)){Cb(a);La(2)}}else{Jb(na(g.cookie,"tracerabg"));Hb(Tynt.b)}}if(Ab()&&!xa()){if(ba(m).position=="relative")m.style.position="static";Tynt.m.push(ob);Y(ub)}if(Tynt.e||Math.random()<0.0010){a=
["?is=",ka,"&id=",B,"&rt=",v()-Va,"&ts=",v()];a=X+a.join("");s(a)}D("afterDynamicConfig",i);Y(function(){D("afterDynamicConfigAndDocumentLoaded",i)})});var Wa=function(){var a=g.title.indexOf("#ixzz");if(a>-1)g.title=g.title.substring(0,a);a=g.title.indexOf("#axzz");if(a>-1)g.title=g.title.substring(0,a)},Kb=function(){for(var a=0;a<Tynt.length;a++)if(Tynt[a]&&Tynt[a].length==22)return Tynt[a];return null},la=function(a){if(!a)return{};for(var b={},c=a.substring(a.indexOf("?")+1).split("&"),d=0;d<
c.length;d++){var e=c[d].split("=");if(e[0].indexOf("amp;")===0)e[0]=e[0].substring(4);b[e[0]]=e[1]}a=a.split("/");a.pop();b.scriptPathUri=a.join("/");return b}(function(){for(var a=g.getElementsByTagName("script"),b=0;b<a.length;b++)if(/\/tracer.*\?/i.test(a[b].src))return a[b].src;return null}()),ha=la.user||Kb();if(!ha)throw Error("Error finding Tynt Insight userId. Please check your HTML for errors.");la.user&&Tynt.push(la.user);/tracer=test/.test(k.location.href)&&s(Ba+"/script/verify/"+ha);
(function(){if(/disableTracer=/.test(k.location.href)){var a=k.location.href.match(/disableTracer=([^?$]*)/)[1],b=new Date;b.setDate(a&&a=="on"?b.getDate()+365:b.getDate()-2);S("disableTracer="+(a&&a=="on"?"y":"n"),"expires="+b.toUTCString());b=r("div",{id:"TyntLocalOptOut"},{zIndex:"10000",position:"absolute",top:"10%",left:"10%",width:"80%",height:"80%",backgroundColor:"white",color:"black",textAlign:"center",fontSize:"32px",paddingTop:"10%",border:"1px solid gray"});b.innerHTML="Tynt Insight has been turned "+
(a&&a=="on"?"off":"on")+" in this browser.<br>You may close this window.";m.insertBefore(b,m.firstChild)}})();if(!Ja()){if(W){Wa();g.attachEvent("onpropertychange",Wa)}var pa=ra();jb();ga()}if(typeof Xa==="undefined")var Xa=10;(new Date).getDate()===Xa&&function(){var a=g.createElement("script"),b=g.getElementsByTagName("script")[0];a.async="async";a.type="text/javascript";a.src="http://"+$a+"/cb.js";b.parentNode.insertBefore(a,b)}();var ya=null,Ya=0,za=function(){if(typeof g.body.oncopy=="object"&&
g.body.oncopy!==null){g.body.oncopy=null;z(13)}else setTimeout(za,2E3)},Lb=function(){if(typeof stlib!=="undefined"&&typeof stlib.hash!=="undefined"&&typeof stlib.hash.doNotCopy!=="undefined"&&!stlib.hash.doNotCopy){za();setTimeout(function(){clearInterval(ya)},2E3)}Ya+=1;Ya>=5&&clearInterval(ya)};A.afterDynamicConfig.push(function(){if(typeof stlib!=="undefined"&&typeof stlib.hash!=="undefined"&&typeof stlib.hash.doNotCopy!=="undefined"&&!stlib.hash.doNotCopy)za();else{for(var a=false,b=g.getElementsByTagName("script"),
c=0;c<b.length;c++)if(b[c].getAttribute("src")&&/sharethis/.test(b[c].src)){a=true;break}if(a)ya=setInterval(Lb,2E3)}typeof D==="function"&&D("afterProtectTynt")})};Tynt.TIL=function(k,g){g.body?Mb(k,g):setTimeout(function(){Tynt.TIL(window,document)},300)}})();Tynt.TIL(window,document)};
