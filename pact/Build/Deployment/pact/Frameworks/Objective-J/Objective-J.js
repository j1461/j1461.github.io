var ObjectiveJ={};
(function(_1,_2){
if(!Object.create){
Object.create=function(o){
if(arguments.length>1){
throw new Error("Object.create implementation only accepts the first parameter.");
}
function F(){
};
F.prototype=o;
return new F();
};
}
if(!Object.keys){
Object.keys=(function(){
var _3=Object.prototype.hasOwnProperty,_4=!({toString:null}).propertyIsEnumerable("toString"),_5=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],_6=_5.length;
return function(_7){
if(typeof _7!=="object"&&typeof _7!=="function"||_7===null){
throw new TypeError("Object.keys called on non-object");
}
var _8=[];
for(var _9 in _7){
if(_3.call(_7,_9)){
_8.push(_9);
}
}
if(_4){
for(var i=0;i<_6;i++){
if(_3.call(_7,_5[i])){
_8.push(_5[i]);
}
}
}
return _8;
};
})();
}
if(!Array.prototype.indexOf){
Array.prototype.indexOf=function(_a){
"use strict";
if(this===null){
throw new TypeError();
}
var t=new Object(this),_b=t.length>>>0;
if(_b===0){
return -1;
}
var n=0;
if(arguments.length>1){
n=Number(arguments[1]);
if(n!=n){
n=0;
}else{
if(n!==0&&n!=Infinity&&n!=-Infinity){
n=(n>0||-1)*Math.floor(Math.abs(n));
}
}
}
if(n>=_b){
return -1;
}
var k=n>=0?n:Math.max(_b-Math.abs(n),0);
for(;k<_b;k++){
if(k in t&&t[k]===_a){
return k;
}
}
return -1;
};
}
if(!this.JSON){
JSON={};
}
(function(){
function f(n){
return n<10?"0"+n:n;
};
if(typeof Date.prototype.toJSON!=="function"){
Date.prototype.toJSON=function(_c){
return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z";
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(_d){
return this.valueOf();
};
}
var cx=new RegExp("[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var _e=new RegExp("[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var _f,_10,_11={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},rep;
function _12(_13){
_e.lastIndex=0;
return _e.test(_13)?"\""+_13.replace(_e,function(a){
var c=_11[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
})+"\"":"\""+_13+"\"";
};
function str(key,_14){
var i,k,v,_15,_16=_f,_17,_18=_14[key];
if(_18&&typeof _18==="object"&&typeof _18.toJSON==="function"){
_18=_18.toJSON(key);
}
if(typeof rep==="function"){
_18=rep.call(_14,key,_18);
}
switch(typeof _18){
case "string":
return _12(_18);
case "number":
return isFinite(_18)?String(_18):"null";
case "boolean":
case "null":
return String(_18);
case "object":
if(!_18){
return "null";
}
_f+=_10;
_17=[];
if(Object.prototype.toString.apply(_18)==="[object Array]"){
_15=_18.length;
for(i=0;i<_15;i+=1){
_17[i]=str(i,_18)||"null";
}
v=_17.length===0?"[]":_f?"[\n"+_f+_17.join(",\n"+_f)+"\n"+_16+"]":"["+_17.join(",")+"]";
_f=_16;
return v;
}
if(rep&&typeof rep==="object"){
_15=rep.length;
for(i=0;i<_15;i+=1){
k=rep[i];
if(typeof k==="string"){
v=str(k,_18);
if(v){
_17.push(_12(k)+(_f?": ":":")+v);
}
}
}
}else{
for(k in _18){
if(Object.hasOwnProperty.call(_18,k)){
v=str(k,_18);
if(v){
_17.push(_12(k)+(_f?": ":":")+v);
}
}
}
}
v=_17.length===0?"{}":_f?"{\n"+_f+_17.join(",\n"+_f)+"\n"+_16+"}":"{"+_17.join(",")+"}";
_f=_16;
return v;
}
};
if(typeof JSON.stringify!=="function"){
JSON.stringify=function(_19,_1a,_1b){
var i;
_f="";
_10="";
if(typeof _1b==="number"){
for(i=0;i<_1b;i+=1){
_10+=" ";
}
}else{
if(typeof _1b==="string"){
_10=_1b;
}
}
rep=_1a;
if(_1a&&typeof _1a!=="function"&&(typeof _1a!=="object"||typeof _1a.length!=="number")){
throw new Error("JSON.stringify");
}
return str("",{"":_19});
};
}
if(typeof JSON.parse!=="function"){
JSON.parse=function(_1c,_1d){
var j;
function _1e(_1f,key){
var k,v,_20=_1f[key];
if(_20&&typeof _20==="object"){
for(k in _20){
if(Object.hasOwnProperty.call(_20,k)){
v=_1e(_20,k);
if(v!==_2f){
_20[k]=v;
}else{
delete _20[k];
}
}
}
}
return _1d.call(_1f,key,_20);
};
cx.lastIndex=0;
if(cx.test(_1c)){
_1c=_1c.replace(cx,function(a){
return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
});
}
if(/^[\],:{}\s]*$/.test(_1c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
j=eval("("+_1c+")");
return typeof _1d==="function"?_1e({"":j},""):j;
}
throw new SyntaxError("JSON.parse");
};
}
}());
var _21=/([^%]+|%(?:\d+\$)?[\+\-\ \#0]*[0-9\*]*(.[0-9\*]+)?[hlL]?[cbBdieEfgGosuxXpn%@])/g,_22=/(%)(?:(\d+)\$)?([\+\-\ \#0]*)([0-9\*]*)((?:.[0-9\*]+)?)([hlL]?)([cbBdieEfgGosuxXpn%@])/;
_2.sprintf=function(_23){
var _23=arguments[0],_24=_23.match(_21),_25=0,_26="",arg=1;
for(var i=0;i<_24.length;i++){
var t=_24[i];
if(_23.substring(_25,_25+t.length)!==t){
return _26;
}
_25+=t.length;
if(t.charAt(0)!=="%"){
_26+=t;
}else{
if(t==="%%"){
_26+="%";
}else{
var _27=t.match(_22);
if(_27.length!==8||_27[0]!==t){
return _26;
}
var _28=_27[1],_29=_27[2],_2a=_27[3],_2b=_27[4],_2c=_27[5],_2d=_27[6],_2e=_27[7];
if(_29===_2f||_29===null||_29===""){
_29=arg++;
}else{
_29=Number(_29);
}
var _30=null;
if(_2b=="*"){
_30=arguments[_29];
}else{
if(_2b!==""){
_30=Number(_2b);
}
}
var _31=null;
if(_2c===".*"){
_31=arguments[_29];
}else{
if(_2c!==""){
_31=Number(_2c.substring(1));
}
}
var _32=(_2a.indexOf("-")>=0),_33=(_2a.indexOf("0")>=0),_34="";
if(/[bBdiufeExXo]/.test(_2e)){
var num=Number(arguments[_29]),_35="";
if(num<0){
_35="-";
}else{
if(_2a.indexOf("+")>=0){
_35="+";
}else{
if(_2a.indexOf(" ")>=0){
_35=" ";
}
}
}
if(_2e==="d"||_2e==="i"||_2e==="u"){
var _36=String(Math.abs(Math.floor(num)));
_34=_37(_35,"",_36,"",_30,_32,_33);
}
if(_2e=="f"){
var _36=String((_31!==null)?Math.abs(num).toFixed(_31):Math.abs(num)),_38=(_2a.indexOf("#")>=0&&_36.indexOf(".")<0)?".":"";
_34=_37(_35,"",_36,_38,_30,_32,_33);
}
if(_2e==="e"||_2e==="E"){
var _36=String(Math.abs(num).toExponential(_31!==null?_31:21)),_38=(_2a.indexOf("#")>=0&&_36.indexOf(".")<0)?".":"";
_34=_37(_35,"",_36,_38,_30,_32,_33);
}
if(_2e=="x"||_2e=="X"){
var _36=String(Math.abs(num).toString(16));
var _39=(_2a.indexOf("#")>=0&&num!=0)?"0x":"";
_34=_37(_35,_39,_36,"",_30,_32,_33);
}
if(_2e=="b"||_2e=="B"){
var _36=String(Math.abs(num).toString(2));
var _39=(_2a.indexOf("#")>=0&&num!=0)?"0b":"";
_34=_37(_35,_39,_36,"",_30,_32,_33);
}
if(_2e=="o"){
var _36=String(Math.abs(num).toString(8));
var _39=(_2a.indexOf("#")>=0&&num!=0)?"0":"";
_34=_37(_35,_39,_36,"",_30,_32,_33);
}
if(/[A-Z]/.test(_2e)){
_34=_34.toUpperCase();
}else{
_34=_34.toLowerCase();
}
}else{
var _34="";
if(_2e==="%"){
_34="%";
}else{
if(_2e==="c"){
_34=String(arguments[_29]).charAt(0);
}else{
if(_2e==="s"||_2e==="@"){
_34=String(arguments[_29]);
}else{
if(_2e==="p"||_2e==="n"){
_34="";
}
}
}
}
_34=_37("","",_34,"",_30,_32,false);
}
_26+=_34;
}
}
}
return _26;
};
function _37(_3a,_3b,_3c,_3d,_3e,_3f,_40){
var _41=(_3a.length+_3b.length+_3c.length+_3d.length);
if(_3f){
return _3a+_3b+_3c+_3d+pad(_3e-_41," ");
}else{
if(_40){
return _3a+_3b+pad(_3e-_41,"0")+_3c+_3d;
}else{
return pad(_3e-_41," ")+_3a+_3b+_3c+_3d;
}
}
};
function pad(n,ch){
return Array(MAX(0,n)+1).join(ch);
};
CPLogDisable=false;
var _42="Cappuccino";
var _43=["fatal","error","warn","info","debug","trace"];
var _44=_43[3];
var _45={};
for(var i=0;i<_43.length;i++){
_45[_43[i]]=i;
}
var _46={};
CPLogRegister=function(_47,_48,_49){
CPLogRegisterRange(_47,_43[0],_48||_43[_43.length-1],_49);
};
CPLogRegisterRange=function(_4a,_4b,_4c,_4d){
var min=_45[_4b];
var max=_45[_4c];
if(min!==_2f&&max!==_2f&&min<=max){
for(var i=min;i<=max;i++){
CPLogRegisterSingle(_4a,_43[i],_4d);
}
}
};
CPLogRegisterSingle=function(_4e,_4f,_50){
if(!_46[_4f]){
_46[_4f]=[];
}
for(var i=0;i<_46[_4f].length;i++){
if(_46[_4f][i][0]===_4e){
_46[_4f][i][1]=_50;
return;
}
}
_46[_4f].push([_4e,_50]);
};
CPLogUnregister=function(_51){
for(var _52 in _46){
for(var i=0;i<_46[_52].length;i++){
if(_46[_52][i][0]===_51){
_46[_52].splice(i--,1);
}
}
}
};
function _53(_54,_55,_56){
if(_56==_2f){
_56=_42;
}
if(_55==_2f){
_55=_44;
}
var _57=(typeof _54[0]=="string"&&_54.length>1)?_2.sprintf.apply(null,_54):String(_54[0]);
if(_46[_55]){
for(var i=0;i<_46[_55].length;i++){
var _58=_46[_55][i];
_58[0](_57,_55,_56,_58[1]);
}
}
};
CPLog=function(){
_53(arguments);
};
for(var i=0;i<_43.length;i++){
CPLog[_43[i]]=(function(_59){
return function(){
_53(arguments,_59);
};
})(_43[i]);
}
var _5a=function(_5b,_5c,_5d){
var now=new Date(),_5e;
if(_5c===null){
_5c="";
}else{
_5c=_5c||"info";
_5c="["+CPLogColorize(_5c,_5c)+"]";
}
_5d=_5d||"";
if(_5d&&_5c){
_5d+=" ";
}
_5e=_5d+_5c;
if(_5e){
_5e+=": ";
}
if(typeof _2.sprintf=="function"){
return _2.sprintf("%4d-%02d-%02d %02d:%02d:%02d.%03d %s%s",now.getFullYear(),now.getMonth()+1,now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds(),_5e,_5b);
}else{
return now+" "+_5e+": "+_5b;
}
};
CPLogConsole=function(_5f,_60,_61,_62){
if(typeof console!="undefined"){
var _63=(_62||_5a)(_5f,_60,_61),_64={"fatal":"error","error":"error","warn":"warn","info":"info","debug":"debug","trace":"debug"}[_60];
if(_64&&console[_64]){
console[_64](_63);
}else{
if(console.log){
console.log(_63);
}
}
}
};
CPLogColorize=function(_65,_66){
return _65;
};
CPLogAlert=function(_67,_68,_69,_6a){
if(typeof alert!="undefined"&&!CPLogDisable){
var _6b=(_6a||_5a)(_67,_68,_69);
CPLogDisable=!confirm(_6b+"\n\n(Click cancel to stop log alerts)");
}
};
var _6c=null;
CPLogPopup=function(_6d,_6e,_6f,_70){
try{
if(CPLogDisable||window.open==_2f){
return;
}
if(!_6c||!_6c.document){
_6c=window.open("","_blank","width=600,height=400,status=no,resizable=yes,scrollbars=yes");
if(!_6c){
CPLogDisable=!confirm(_6d+"\n\n(Disable pop-up blocking for CPLog window; Click cancel to stop log alerts)");
return;
}
_71(_6c);
}
var _72=_6c.document.createElement("div");
_72.setAttribute("class",_6e||"fatal");
var _73=(_70||_5a)(_6d,_70?_6e:null,_6f);
_72.appendChild(_6c.document.createTextNode(_73));
_6c.log.appendChild(_72);
if(_6c.focusEnabled.checked){
_6c.focus();
}
if(_6c.blockEnabled.checked){
_6c.blockEnabled.checked=_6c.confirm(_73+"\nContinue blocking?");
}
if(_6c.scrollEnabled.checked){
_6c.scrollToBottom();
}
}
catch(e){
}
};
var _74="<style type=\"text/css\" media=\"screen\"> body{font:10px Monaco,Courier,\"Courier New\",monospace,mono;padding-top:15px;} div > .fatal,div > .error,div > .warn,div > .info,div > .debug,div > .trace{display:none;overflow:hidden;white-space:pre;padding:0px 5px 0px 5px;margin-top:2px;-moz-border-radius:5px;-webkit-border-radius:5px;} div[wrap=\"yes\"] > div{white-space:normal;} .fatal{background-color:#ffb2b3;} .error{background-color:#ffe2b2;} .warn{background-color:#fdffb2;} .info{background-color:#e4ffb2;} .debug{background-color:#a0e5a0;} .trace{background-color:#99b9ff;} .enfatal .fatal,.enerror .error,.enwarn .warn,.eninfo .info,.endebug .debug,.entrace .trace{display:block;} div#header{background-color:rgba(240,240,240,0.82);position:fixed;top:0px;left:0px;width:100%;border-bottom:1px solid rgba(0,0,0,0.33);text-align:center;} ul#enablers{display:inline-block;margin:1px 15px 0 15px;padding:2px 0 2px 0;} ul#enablers li{display:inline;padding:0px 5px 0px 5px;margin-left:4px;-moz-border-radius:5px;-webkit-border-radius:5px;} [enabled=\"no\"]{opacity:0.25;} ul#options{display:inline-block;margin:0 15px 0px 15px;padding:0 0px;} ul#options li{margin:0 0 0 0;padding:0 0 0 0;display:inline;} </style>";
function _71(_75){
var doc=_75.document;
doc.writeln("<html><head><title></title>"+_74+"</head><body></body></html>");
doc.title=_42+" Run Log";
var _76=doc.getElementsByTagName("head")[0];
var _77=doc.getElementsByTagName("body")[0];
var _78=window.location.protocol+"//"+window.location.host+window.location.pathname;
_78=_78.substring(0,_78.lastIndexOf("/")+1);
var div=doc.createElement("div");
div.setAttribute("id","header");
_77.appendChild(div);
var ul=doc.createElement("ul");
ul.setAttribute("id","enablers");
div.appendChild(ul);
for(var i=0;i<_43.length;i++){
var li=doc.createElement("li");
li.setAttribute("id","en"+_43[i]);
li.setAttribute("class",_43[i]);
li.setAttribute("onclick","toggle(this);");
li.setAttribute("enabled","yes");
li.appendChild(doc.createTextNode(_43[i]));
ul.appendChild(li);
}
var ul=doc.createElement("ul");
ul.setAttribute("id","options");
div.appendChild(ul);
var _79={"focus":["Focus",false],"block":["Block",false],"wrap":["Wrap",false],"scroll":["Scroll",true],"close":["Close",true]};
for(o in _79){
var li=doc.createElement("li");
ul.appendChild(li);
_75[o+"Enabled"]=doc.createElement("input");
_75[o+"Enabled"].setAttribute("id",o);
_75[o+"Enabled"].setAttribute("type","checkbox");
if(_79[o][1]){
_75[o+"Enabled"].setAttribute("checked","checked");
}
li.appendChild(_75[o+"Enabled"]);
var _7a=doc.createElement("label");
_7a.setAttribute("for",o);
_7a.appendChild(doc.createTextNode(_79[o][0]));
li.appendChild(_7a);
}
_75.log=doc.createElement("div");
_75.log.setAttribute("class","enerror endebug enwarn eninfo enfatal entrace");
_77.appendChild(_75.log);
_75.toggle=function(_7b){
var _7c=(_7b.getAttribute("enabled")=="yes")?"no":"yes";
_7b.setAttribute("enabled",_7c);
if(_7c=="yes"){
_75.log.className+=" "+_7b.id;
}else{
_75.log.className=_75.log.className.replace(new RegExp("[\\s]*"+_7b.id,"g"),"");
}
};
_75.scrollToBottom=function(){
_75.scrollTo(0,_77.offsetHeight);
};
_75.wrapEnabled.addEventListener("click",function(){
_75.log.setAttribute("wrap",_75.wrapEnabled.checked?"yes":"no");
},false);
_75.addEventListener("keydown",function(e){
var e=e||_75.event;
if(e.keyCode==75&&(e.ctrlKey||e.metaKey)){
while(_75.log.firstChild){
_75.log.removeChild(_75.log.firstChild);
}
e.preventDefault();
}
},"false");
window.addEventListener("unload",function(){
if(_75&&_75.closeEnabled&&_75.closeEnabled.checked){
CPLogDisable=true;
_75.close();
}
},false);
_75.addEventListener("unload",function(){
if(!CPLogDisable){
CPLogDisable=!confirm("Click cancel to stop logging");
}
},false);
};
CPLogDefault=(typeof window==="object"&&window.console)?CPLogConsole:CPLogPopup;
var _2f;
if(typeof window!=="undefined"){
window.setNativeTimeout=window.setTimeout;
window.clearNativeTimeout=window.clearTimeout;
window.setNativeInterval=window.setInterval;
window.clearNativeInterval=window.clearInterval;
}
NO=false;
YES=true;
nil=null;
Nil=null;
NULL=null;
ABS=Math.abs;
ASIN=Math.asin;
ACOS=Math.acos;
ATAN=Math.atan;
ATAN2=Math.atan2;
SIN=Math.sin;
COS=Math.cos;
TAN=Math.tan;
EXP=Math.exp;
POW=Math.pow;
CEIL=Math.ceil;
FLOOR=Math.floor;
ROUND=Math.round;
MIN=Math.min;
MAX=Math.max;
RAND=Math.random;
SQRT=Math.sqrt;
E=Math.E;
LN2=Math.LN2;
LN10=Math.LN10;
LOG=Math.log;
LOG2E=Math.LOG2E;
LOG10E=Math.LOG10E;
PI=Math.PI;
PI2=Math.PI*2;
PI_2=Math.PI/2;
SQRT1_2=Math.SQRT1_2;
SQRT2=Math.SQRT2;
function _7d(_7e){
this._eventListenersForEventNames={};
this._owner=_7e;
};
_7d.prototype.addEventListener=function(_7f,_80){
var _81=this._eventListenersForEventNames;
if(!_82.call(_81,_7f)){
var _83=[];
_81[_7f]=_83;
}else{
var _83=_81[_7f];
}
var _84=_83.length;
while(_84--){
if(_83[_84]===_80){
return;
}
}
_83.push(_80);
};
_7d.prototype.removeEventListener=function(_85,_86){
var _87=this._eventListenersForEventNames;
if(!_82.call(_87,_85)){
return;
}
var _88=_87[_85],_89=_88.length;
while(_89--){
if(_88[_89]===_86){
return _88.splice(_89,1);
}
}
};
_7d.prototype.dispatchEvent=function(_8a){
var _8b=_8a.type,_8c=this._eventListenersForEventNames;
if(_82.call(_8c,_8b)){
var _8d=this._eventListenersForEventNames[_8b],_8e=0,_8f=_8d.length;
for(;_8e<_8f;++_8e){
_8d[_8e](_8a);
}
}
var _90=(this._owner||this)["on"+_8b];
if(_90){
_90(_8a);
}
};
var _91=0,_92=null,_93=[];
function _94(_95){
var _96=_91;
if(_92===null){
window.setNativeTimeout(function(){
var _97=_93,_98=0,_99=_93.length;
++_91;
_92=null;
_93=[];
for(;_98<_99;++_98){
_97[_98]();
}
},0);
}
return function(){
var _9a=arguments;
if(_91>_96){
_95.apply(this,_9a);
}else{
_93.push(function(){
_95.apply(this,_9a);
});
}
};
};
var _9b=null;
if(window.XMLHttpRequest){
_9b=window.XMLHttpRequest;
}else{
if(window.ActiveXObject!==_2f){
var _9c=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.6.0"],_9d=_9c.length;
while(_9d--){
try{
var _9e=_9c[_9d];
new ActiveXObject(_9e);
_9b=function(){
return new ActiveXObject(_9e);
};
break;
}
catch(anException){
}
}
}
}
CFHTTPRequest=function(){
this._isOpen=false;
this._requestHeaders={};
this._mimeType=null;
this._eventDispatcher=new _7d(this);
this._nativeRequest=new _9b();
this._nativeRequest.withCredentials=false;
var _9f=this;
this._stateChangeHandler=function(){
_b3(_9f);
};
this._nativeRequest.onreadystatechange=this._stateChangeHandler;
if(CFHTTPRequest.AuthenticationDelegate!==nil){
this._eventDispatcher.addEventListener("HTTP403",function(){
CFHTTPRequest.AuthenticationDelegate(_9f);
});
}
};
CFHTTPRequest.UninitializedState=0;
CFHTTPRequest.LoadingState=1;
CFHTTPRequest.LoadedState=2;
CFHTTPRequest.InteractiveState=3;
CFHTTPRequest.CompleteState=4;
CFHTTPRequest.AuthenticationDelegate=nil;
CFHTTPRequest.prototype.status=function(){
try{
return this._nativeRequest.status||0;
}
catch(anException){
return 0;
}
};
CFHTTPRequest.prototype.statusText=function(){
try{
return this._nativeRequest.statusText||"";
}
catch(anException){
return "";
}
};
CFHTTPRequest.prototype.readyState=function(){
return this._nativeRequest.readyState;
};
CFHTTPRequest.prototype.success=function(){
var _a0=this.status();
if(_a0>=200&&_a0<300){
return YES;
}
return _a0===0&&this.responseText()&&this.responseText().length;
};
CFHTTPRequest.prototype.responseXML=function(){
var _a1=this._nativeRequest.responseXML;
if(_a1&&(_9b===window.XMLHttpRequest)&&_a1.documentRoot){
return _a1;
}
return _a2(this.responseText());
};
CFHTTPRequest.prototype.responsePropertyList=function(){
var _a3=this.responseText();
if(CFPropertyList.sniffedFormatOfString(_a3)===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(this.responseXML());
}
return CFPropertyList.propertyListFromString(_a3);
};
CFHTTPRequest.prototype.responseText=function(){
return this._nativeRequest.responseText;
};
CFHTTPRequest.prototype.setRequestHeader=function(_a4,_a5){
this._requestHeaders[_a4]=_a5;
};
CFHTTPRequest.prototype.getResponseHeader=function(_a6){
return this._nativeRequest.getResponseHeader(_a6);
};
CFHTTPRequest.prototype.getAllResponseHeaders=function(){
return this._nativeRequest.getAllResponseHeaders();
};
CFHTTPRequest.prototype.overrideMimeType=function(_a7){
this._mimeType=_a7;
};
CFHTTPRequest.prototype.open=function(_a8,_a9,_aa,_ab,_ac){
this._isOpen=true;
this._URL=_a9;
this._async=_aa;
this._method=_a8;
this._user=_ab;
this._password=_ac;
return this._nativeRequest.open(_a8,_a9,_aa,_ab,_ac);
};
CFHTTPRequest.prototype.send=function(_ad){
if(!this._isOpen){
delete this._nativeRequest.onreadystatechange;
this._nativeRequest.open(this._method,this._URL,this._async,this._user,this._password);
this._nativeRequest.onreadystatechange=this._stateChangeHandler;
}
for(var i in this._requestHeaders){
if(this._requestHeaders.hasOwnProperty(i)){
this._nativeRequest.setRequestHeader(i,this._requestHeaders[i]);
}
}
if(this._mimeType&&"overrideMimeType" in this._nativeRequest){
this._nativeRequest.overrideMimeType(this._mimeType);
}
this._isOpen=false;
try{
return this._nativeRequest.send(_ad);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
this._isOpen=false;
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_ae,_af){
this._eventDispatcher.addEventListener(_ae,_af);
};
CFHTTPRequest.prototype.removeEventListener=function(_b0,_b1){
this._eventDispatcher.removeEventListener(_b0,_b1);
};
CFHTTPRequest.prototype.setWithCredentials=function(_b2){
this._nativeRequest.withCredentials=_b2;
};
CFHTTPRequest.prototype.withCredentials=function(){
return this._nativeRequest.withCredentials;
};
function _b3(_b4){
var _b5=_b4._eventDispatcher;
_b5.dispatchEvent({type:"readystatechange",request:_b4});
var _b6=_b4._nativeRequest,_b7=["uninitialized","loading","loaded","interactive","complete"];
if(_b7[_b4.readyState()]==="complete"){
var _b8="HTTP"+_b4.status();
_b5.dispatchEvent({type:_b8,request:_b4});
var _b9=_b4.success()?"success":"failure";
_b5.dispatchEvent({type:_b9,request:_b4});
_b5.dispatchEvent({type:_b7[_b4.readyState()],request:_b4});
}else{
_b5.dispatchEvent({type:_b7[_b4.readyState()],request:_b4});
}
};
function _ba(_bb,_bc,_bd,_be){
var _bf=new CFHTTPRequest();
if(_bb.pathExtension()==="plist"){
_bf.overrideMimeType("text/xml");
}
var _c0=0,_c1=null;
function _c2(_c3){
_be(_c3.loaded-_c0);
_c0=_c3.loaded;
};
function _c4(_c5){
if(_be&&_c1===null){
_be(_c5.request.responseText().length);
}
_bc(_c5);
};
if(_2.asyncLoader){
_bf.onsuccess=_94(_c4);
_bf.onfailure=_94(_bd);
}else{
_bf.onsuccess=_c4;
_bf.onfailure=_bd;
}
if(_be){
var _c6=true;
if(document.all){
_c6=!!window.atob;
}
if(_c6){
try{
_c1=_2.asyncLoader?_94(_c2):_c2;
_bf._nativeRequest.onprogress=_c1;
}
catch(anException){
_c1=null;
}
}
}
_bf.open("GET",_bb.absoluteString(),_2.asyncLoader);
_bf.send("");
};
_2.asyncLoader=YES;
_2.Asynchronous=_94;
_2.determineAndDispatchHTTPRequestEvents=_b3;
var _c7=0;
objj_generateObjectUID=function(){
return _c7++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000;
CFPropertyList.sniffedFormatOfString=function(_c8){
if(_c8.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_c8.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_c9,_ca){
var _cb=new CFMutableData();
_cb.setRawString(CFPropertyList.stringFromPropertyList(_c9,_ca));
return _cb;
};
CFPropertyList.stringFromPropertyList=function(_cc,_cd){
if(!_cd){
_cd=CFPropertyList.Format280North_v1_0;
}
var _ce=_cf[_cd];
return _ce["start"]()+_d0(_cc,_ce)+_ce["finish"]();
};
function _d0(_d1,_d2){
var _d3=typeof _d1,_d4=_d1.valueOf(),_d5=typeof _d4;
if(_d3!==_d5){
_d3=_d5;
_d1=_d4;
}
if(_d1===YES||_d1===NO){
_d3="boolean";
}else{
if(_d3==="number"){
if(FLOOR(_d1)===_d1&&(""+_d1).indexOf("e")==-1){
_d3="integer";
}else{
_d3="real";
}
}else{
if(_d3!=="string"){
if(_d1.slice){
_d3="array";
}else{
_d3="dictionary";
}
}
}
}
return _d2[_d3](_d1,_d2);
};
var _cf={};
_cf[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_d6){
return "<string>"+_d7(_d6)+"</string>";
},"boolean":function(_d8){
return _d8?"<true/>":"<false/>";
},"integer":function(_d9){
return "<integer>"+_d9+"</integer>";
},"real":function(_da){
return "<real>"+_da+"</real>";
},"array":function(_db,_dc){
var _dd=0,_de=_db.length,_df="<array>";
for(;_dd<_de;++_dd){
_df+=_d0(_db[_dd],_dc);
}
return _df+"</array>";
},"dictionary":function(_e0,_e1){
var _e2=_e0._keys,_9d=0,_e3=_e2.length,_e4="<dict>";
for(;_9d<_e3;++_9d){
var key=_e2[_9d];
_e4+="<key>"+key+"</key>";
_e4+=_d0(_e0.valueForKey(key),_e1);
}
return _e4+"</dict>";
}};
var _e5="A",_e6="D",_e7="f",_e8="d",_e9="S",_ea="T",_eb="F",_ec="K",_ed="E";
_cf[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_ee){
return _e9+";"+_ee.length+";"+_ee;
},"boolean":function(_ef){
return (_ef?_ea:_eb)+";";
},"integer":function(_f0){
var _f1=""+_f0;
return _e8+";"+_f1.length+";"+_f1;
},"real":function(_f2){
var _f3=""+_f2;
return _e7+";"+_f3.length+";"+_f3;
},"array":function(_f4,_f5){
var _f6=0,_f7=_f4.length,_f8=_e5+";";
for(;_f6<_f7;++_f6){
_f8+=_d0(_f4[_f6],_f5);
}
return _f8+_ed+";";
},"dictionary":function(_f9,_fa){
var _fb=_f9._keys,_9d=0,_fc=_fb.length,_fd=_e6+";";
for(;_9d<_fc;++_9d){
var key=_fb[_9d];
_fd+=_ec+";"+key.length+";"+key;
_fd+=_d0(_f9.valueForKey(key),_fa);
}
return _fd+_ed+";";
}};
var _fe="xml",_ff="#document",_100="plist",_101="key",_102="dict",_103="array",_104="string",_105="date",_106="true",_107="false",_108="real",_109="integer",_10a="data";
var _10b=function(_10c){
var text="",_9d=0,_10d=_10c.length;
for(;_9d<_10d;++_9d){
var node=_10c[_9d];
if(node.nodeType===3||node.nodeType===4){
text+=node.nodeValue;
}else{
if(node.nodeType!==8){
text+=_10b(node.childNodes);
}
}
}
return text;
};
var _10e=function(_10f,_110,_111){
var node=_10f;
node=(node.firstChild);
if(node!==NULL&&((node.nodeType)===8||(node.nodeType)===3)){
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
}
if(node){
return node;
}
if((String(_10f.nodeName))===_103||(String(_10f.nodeName))===_102){
_111.pop();
}else{
if(node===_110){
return NULL;
}
node=_10f;
while((node=(node.nextSibling))&&((node.nodeType)===8||(node.nodeType)===3)){
}
if(node){
return node;
}
}
node=_10f;
while(node){
var next=node;
while((next=(next.nextSibling))&&((next.nodeType)===8||(next.nodeType)===3)){
}
if(next){
return next;
}
var node=(node.parentNode);
if(_110&&node===_110){
return NULL;
}
_111.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_112,_113){
return CFPropertyList.propertyListFromString(_112.rawString(),_113);
};
CFPropertyList.propertyListFromString=function(_114,_115){
if(!_115){
_115=CFPropertyList.sniffedFormatOfString(_114);
}
if(_115===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_114);
}
if(_115===CFPropertyList.Format280North_v1_0){
return _116(_114);
}
return NULL;
};
var _e5="A",_e6="D",_e7="f",_e8="d",_e9="S",_ea="T",_eb="F",_ec="K",_ed="E";
function _116(_117){
var _118=new _119(_117),_11a=NULL,key="",_11b=NULL,_11c=NULL,_11d=[],_11e=NULL;
while(_11a=_118.getMarker()){
if(_11a===_ed){
_11d.pop();
continue;
}
var _11f=_11d.length;
if(_11f){
_11e=_11d[_11f-1];
}
if(_11a===_ec){
key=_118.getString();
_11a=_118.getMarker();
}
switch(_11a){
case _e5:
_11b=[];
_11d.push(_11b);
break;
case _e6:
_11b=new CFMutableDictionary();
_11d.push(_11b);
break;
case _e7:
_11b=parseFloat(_118.getString());
break;
case _e8:
_11b=parseInt(_118.getString(),10);
break;
case _e9:
_11b=_118.getString();
break;
case _ea:
_11b=YES;
break;
case _eb:
_11b=NO;
break;
default:
throw new Error("*** "+_11a+" marker not recognized in Plist.");
}
if(!_11c){
_11c=_11b;
}else{
if(_11e){
if(_11e.slice){
_11e.push(_11b);
}else{
_11e.setValueForKey(key,_11b);
}
}
}
}
return _11c;
};
function _d7(_120){
return _120.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
function _121(_122){
return _122.replace(/&quot;/g,"\"").replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
};
function _a2(_123){
if(window.DOMParser){
return (new window.DOMParser().parseFromString(_123,"text/xml").documentElement);
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _124=_123.match(CFPropertyList.DTDRE);
if(_124){
_123=_123.substr(_124[0].length);
}
XMLNode.loadXML(_123);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_125){
var _126=_125;
if(_125.valueOf&&typeof _125.valueOf()==="string"){
_126=_a2(_125);
}
while(((String(_126.nodeName))===_ff)||((String(_126.nodeName))===_fe)){
_126=(_126.firstChild);
if(_126!==NULL&&((_126.nodeType)===8||(_126.nodeType)===3)){
while((_126=(_126.nextSibling))&&((_126.nodeType)===8||(_126.nodeType)===3)){
}
}
}
if(((_126.nodeType)===10)){
while((_126=(_126.nextSibling))&&((_126.nodeType)===8||(_126.nodeType)===3)){
}
}
if(!((String(_126.nodeName))===_100)){
return NULL;
}
var key="",_127=NULL,_128=NULL,_129=_126,_12a=[],_12b=NULL;
while(_126=_10e(_126,_129,_12a)){
var _12c=_12a.length;
if(_12c){
_12b=_12a[_12c-1];
}
if((String(_126.nodeName))===_101){
key=(_126.textContent||(_126.textContent!==""&&_10b([_126])));
while((_126=(_126.nextSibling))&&((_126.nodeType)===8||(_126.nodeType)===3)){
}
}
switch(String((String(_126.nodeName)))){
case _103:
_127=[];
_12a.push(_127);
break;
case _102:
_127=new CFMutableDictionary();
_12a.push(_127);
break;
case _108:
_127=parseFloat((_126.textContent||(_126.textContent!==""&&_10b([_126]))));
break;
case _109:
_127=parseInt((_126.textContent||(_126.textContent!==""&&_10b([_126]))),10);
break;
case _104:
if((_126.getAttribute("type")==="base64")){
_127=(_126.firstChild)?CFData.decodeBase64ToString((_126.textContent||(_126.textContent!==""&&_10b([_126])))):"";
}else{
_127=_121((_126.firstChild)?(_126.textContent||(_126.textContent!==""&&_10b([_126]))):"");
}
break;
case _105:
var _12d=Date.parseISO8601((_126.textContent||(_126.textContent!==""&&_10b([_126]))));
_127=isNaN(_12d)?new Date():new Date(_12d);
break;
case _106:
_127=YES;
break;
case _107:
_127=NO;
break;
case _10a:
_127=new CFMutableData();
var _12e=(_126.firstChild)?CFData.decodeBase64ToArray((_126.textContent||(_126.textContent!==""&&_10b([_126]))),YES):[];
_127.setBytes(_12e);
break;
default:
throw new Error("*** "+(String(_126.nodeName))+" tag not recognized in Plist.");
}
if(!_128){
_128=_127;
}else{
if(_12b){
if(_12b.slice){
_12b.push(_127);
}else{
_12b.setValueForKey(key,_127);
}
}
}
}
return _128;
};
kCFPropertyListOpenStepFormat=CFPropertyList.FormatOpenStep;
kCFPropertyListXMLFormat_v1_0=CFPropertyList.FormatXML_v1_0;
kCFPropertyListBinaryFormat_v1_0=CFPropertyList.FormatBinary_v1_0;
kCFPropertyList280NorthFormat_v1_0=CFPropertyList.Format280North_v1_0;
CFPropertyListCreate=function(){
return new CFPropertyList();
};
CFPropertyListCreateFromXMLData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateXMLData=function(_12f){
return CFPropertyList.dataFromPropertyList(_12f,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_130){
return CFPropertyList.dataFromPropertyList(_130,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_131){
return CFPropertyList.propertyListFromData(data,_131);
};
CPPropertyListCreateData=function(_132,_133){
return CFPropertyList.dataFromPropertyList(_132,_133);
};
CFDictionary=function(_134){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _135=Array.prototype.indexOf,_82=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _136=new CFMutableDictionary(),keys=this._keys,_137=this._count;
_136._keys=keys.slice();
_136._count=_137;
var _138=0,_139=this._buckets,_13a=_136._buckets;
for(;_138<_137;++_138){
var key=keys[_138];
_13a[key]=_139[key];
}
return _136;
};
CFDictionary.prototype.containsKey=function(aKey){
return _82.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_13b){
var keys=this._keys,_13c=this._buckets,_9d=0,_13d=keys.length;
for(;_9d<_13d;++_9d){
if(_13c[keys[_9d]]===_13b){
return YES;
}
}
return NO;
};
CFDictionary.prototype.count=function(){
return this._count;
};
CFDictionary.prototype.countOfKey=function(aKey){
return this.containsKey(aKey)?1:0;
};
CFDictionary.prototype.countOfValue=function(_13e){
var keys=this._keys,_13f=this._buckets,_9d=0,_140=keys.length,_141=0;
for(;_9d<_140;++_9d){
if(_13f[keys[_9d]]===_13e){
++_141;
}
}
return _141;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _142=this._buckets;
if(!_82.apply(_142,[aKey])){
return nil;
}
return _142[aKey];
};
CFDictionary.prototype.toString=function(){
var _143="{\n",keys=this._keys,_9d=0,_144=this._count;
for(;_9d<_144;++_9d){
var key=keys[_9d];
_143+="\t"+key+" = \""+String(this.valueForKey(key)).split("\n").join("\n\t")+"\"\n";
}
return _143+"}";
};
CFMutableDictionary=function(_145){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_146){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_146;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _147=-1;
if(_135){
_147=_135.call(this._keys,aKey);
}else{
var keys=this._keys,_9d=0,_148=keys.length;
for(;_9d<_148;++_9d){
if(keys[_9d]===aKey){
_147=_9d;
break;
}
}
}
if(_147===-1){
return;
}
--this._count;
this._keys.splice(_147,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_149){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_149;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_14a){
if(_14a===nil||_14a===_2f){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_14a);
}else{
this.addValueForKey(aKey,_14a);
}
}
};
kCFErrorLocalizedDescriptionKey="CPLocalizedDescription";
kCFErrorLocalizedFailureReasonKey="CPLocalizedFailureReason";
kCFErrorLocalizedRecoverySuggestionKey="CPLocalizedRecoverySuggestion";
kCFErrorDescriptionKey="CPDescription";
kCFErrorUnderlyingErrorKey="CPUnderlyingError";
kCFErrorURLKey="CPURL";
kCFErrorFilePathKey="CPFilePath";
kCFErrorDomainCappuccino="CPCappuccinoErrorDomain";
kCFErrorDomainCocoa=kCFErrorDomainCappuccino;
CFError=function(_14b,code,_14c){
this._domain=_14b||NULL;
this._code=code||0;
this._userInfo=_14c||new CFDictionary();
this._UID=objj_generateObjectUID();
};
CFError.prototype.domain=function(){
return this._domain;
};
CFError.prototype.code=function(){
return this._code;
};
CFError.prototype.description=function(){
var _14d=this._userInfo.valueForKey(kCFErrorLocalizedDescriptionKey);
if(_14d){
return _14d;
}
var _14e=this._userInfo.valueForKey(kCFErrorLocalizedFailureReasonKey);
if(_14e){
var _14f="The operation couldn’t be completed. "+_14e;
return _14f;
}
var _150="",desc=this._userInfo.valueForKey(kCFErrorDescriptionKey);
if(desc){
var _150="The operation couldn’t be completed. (error "+this._code+" - "+desc+")";
}else{
var _150="The operation couldn’t be completed. (error "+this._code+")";
}
return _150;
};
CFError.prototype.failureReason=function(){
return this._userInfo.valueForKey(kCFErrorLocalizedFailureReasonKey);
};
CFError.prototype.recoverySuggestion=function(){
return this._userInfo.valueForKey(kCFErrorLocalizedRecoverySuggestionKey);
};
CFError.prototype.userInfo=function(){
return this._userInfo;
};
CFErrorCreate=function(_151,code,_152){
return new CFError(_151,code,_152);
};
CFErrorCreateWithUserInfoKeysAndValues=function(_153,code,_154,_155,_156){
var _157=new CFMutableDictionary();
while(_156--){
_157.setValueForKey(_154[_156],_155[_156]);
}
return new CFError(_153,code,_157);
};
CFErrorGetCode=function(err){
return err.code();
};
CFErrorGetDomain=function(err){
return err.domain();
};
CFErrorCopyDescription=function(err){
return err.description();
};
CFErrorCopyUserInfo=function(err){
return err.userInfo();
};
CFErrorCopyFailureReason=function(err){
return err.failureReason();
};
CFErrorCopyRecoverySuggestion=function(err){
return err.recoverySuggestion();
};
kCFURLErrorUnknown=-998;
kCFURLErrorCancelled=-999;
kCFURLErrorBadURL=-1000;
kCFURLErrorTimedOut=-1001;
kCFURLErrorUnsupportedURL=-1002;
kCFURLErrorCannotFindHost=-1003;
kCFURLErrorCannotConnectToHost=-1004;
kCFURLErrorNetworkConnectionLost=-1005;
kCFURLErrorDNSLookupFailed=-1006;
kCFURLErrorHTTPTooManyRedirects=-1007;
kCFURLErrorResourceUnavailable=-1008;
kCFURLErrorNotConnectedToInternet=-1009;
kCFURLErrorRedirectToNonExistentLocation=-1010;
kCFURLErrorBadServerResponse=-1011;
kCFURLErrorUserCancelledAuthentication=-1012;
kCFURLErrorUserAuthenticationRequired=-1013;
kCFURLErrorZeroByteResource=-1014;
kCFURLErrorCannotDecodeRawData=-1015;
kCFURLErrorCannotDecodeContentData=-1016;
kCFURLErrorCannotParseResponse=-1017;
kCFURLErrorRequestBodyStreamExhausted=-1021;
kCFURLErrorFileDoesNotExist=-1100;
kCFURLErrorFileIsDirectory=-1101;
kCFURLErrorNoPermissionsToReadFile=-1102;
kCFURLErrorDataLengthExceedsMaximum=-1103;
CFData=function(){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFData.prototype.propertyList=function(){
if(!this._propertyList){
this._propertyList=CFPropertyList.propertyListFromString(this.rawString());
}
return this._propertyList;
};
CFData.prototype.JSONObject=function(){
if(!this._JSONObject){
try{
this._JSONObject=JSON.parse(this.rawString());
}
catch(anException){
}
}
return this._JSONObject;
};
CFData.prototype.rawString=function(){
if(this._rawString===NULL){
if(this._propertyList){
this._rawString=CFPropertyList.stringFromPropertyList(this._propertyList,this._propertyListFormat);
}else{
if(this._JSONObject){
this._rawString=JSON.stringify(this._JSONObject);
}else{
if(this._bytes){
this._rawString=CFData.bytesToString(this._bytes);
}else{
if(this._base64){
this._rawString=CFData.decodeBase64ToString(this._base64,true);
}else{
throw new Error("Can't convert data to string.");
}
}
}
}
}
return this._rawString;
};
CFData.prototype.bytes=function(){
if(this._bytes===NULL){
var _158=CFData.stringToBytes(this.rawString());
this.setBytes(_158);
}
return this._bytes;
};
CFData.prototype.base64=function(){
if(this._base64===NULL){
var _159;
if(this._bytes){
_159=CFData.encodeBase64Array(this._bytes);
}else{
_159=CFData.encodeBase64String(this.rawString());
}
this.setBase64String(_159);
}
return this._base64;
};
CFMutableData=function(){
CFData.call(this);
};
CFMutableData.prototype=new CFData();
function _15a(_15b){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_15c,_15d){
_15a(this);
this._propertyList=_15c;
this._propertyListFormat=_15d;
};
CFMutableData.prototype.setJSONObject=function(_15e){
_15a(this);
this._JSONObject=_15e;
};
CFMutableData.prototype.setRawString=function(_15f){
_15a(this);
this._rawString=_15f;
};
CFMutableData.prototype.setBytes=function(_160){
_15a(this);
this._bytes=_160;
};
CFMutableData.prototype.setBase64String=function(_161){
_15a(this);
this._base64=_161;
};
var _162=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_163=[];
for(var i=0;i<_162.length;i++){
_163[_162[i].charCodeAt(0)]=i;
}
CFData.decodeBase64ToArray=function(_164,_165){
if(_165){
_164=_164.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_164[_164.length-1]=="="?1:0)+(_164[_164.length-2]=="="?1:0),_166=_164.length,_167=[];
var i=0;
while(i<_166){
var bits=(_163[_164.charCodeAt(i++)]<<18)|(_163[_164.charCodeAt(i++)]<<12)|(_163[_164.charCodeAt(i++)]<<6)|(_163[_164.charCodeAt(i++)]);
_167.push((bits&16711680)>>16);
_167.push((bits&65280)>>8);
_167.push(bits&255);
}
if(pad>0){
return _167.slice(0,-1*pad);
}
return _167;
};
CFData.encodeBase64Array=function(_168){
var pad=(3-(_168.length%3))%3,_169=_168.length+pad,_16a=[];
if(pad>0){
_168.push(0);
}
if(pad>1){
_168.push(0);
}
var i=0;
while(i<_169){
var bits=(_168[i++]<<16)|(_168[i++]<<8)|(_168[i++]);
_16a.push(_162[(bits&16515072)>>18]);
_16a.push(_162[(bits&258048)>>12]);
_16a.push(_162[(bits&4032)>>6]);
_16a.push(_162[bits&63]);
}
if(pad>0){
_16a[_16a.length-1]="=";
_168.pop();
}
if(pad>1){
_16a[_16a.length-2]="=";
_168.pop();
}
return _16a.join("");
};
CFData.decodeBase64ToString=function(_16b,_16c){
return CFData.bytesToString(CFData.decodeBase64ToArray(_16b,_16c));
};
CFData.decodeBase64ToUtf16String=function(_16d,_16e){
return CFData.bytesToUtf16String(CFData.decodeBase64ToArray(_16d,_16e));
};
CFData.bytesToString=function(_16f){
return String.fromCharCode.apply(NULL,_16f);
};
CFData.stringToBytes=function(_170){
var temp=[];
for(var i=0;i<_170.length;i++){
temp.push(_170.charCodeAt(i));
}
return temp;
};
CFData.encodeBase64String=function(_171){
var temp=[];
for(var i=0;i<_171.length;i++){
temp.push(_171.charCodeAt(i));
}
return CFData.encodeBase64Array(temp);
};
CFData.bytesToUtf16String=function(_172){
var temp=[];
for(var i=0;i<_172.length;i+=2){
temp.push(_172[i+1]<<8|_172[i]);
}
return String.fromCharCode.apply(NULL,temp);
};
CFData.encodeBase64Utf16String=function(_173){
var temp=[];
for(var i=0;i<_173.length;i++){
var c=_173.charCodeAt(i);
temp.push(c&255);
temp.push((c&65280)>>8);
}
return CFData.encodeBase64Array(temp);
};
var _174,_175,_176=0;
function _177(){
if(++_176!==1){
return;
}
_174={};
_175={};
};
function _178(){
_176=MAX(_176-1,0);
if(_176!==0){
return;
}
delete _174;
delete _175;
};
var _179=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _17a=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _17b(aURL){
if(aURL._parts){
return aURL._parts;
}
var _17c=aURL.string(),_17d=_17c.match(/^mhtml:/);
if(_17d){
_17c=_17c.substr("mhtml:".length);
}
if(_176>0&&_82.call(_175,_17c)){
aURL._parts=_175[_17c];
return aURL._parts;
}
aURL._parts={};
var _17e=aURL._parts,_17f=_179.exec(_17c),_9d=_17f.length;
while(_9d--){
_17e[_17a[_9d]]=_17f[_9d]||NULL;
}
_17e.portNumber=parseInt(_17e.portNumber,10);
if(isNaN(_17e.portNumber)){
_17e.portNumber=-1;
}
_17e.pathComponents=[];
if(_17e.path){
var _180=_17e.path.split("/"),_181=_17e.pathComponents,_182=_180.length;
for(_9d=0;_9d<_182;++_9d){
var _183=_180[_9d];
if(_183){
_181.push(_183);
}else{
if(_9d===0){
_181.push("/");
}
}
}
_17e.pathComponents=_181;
}
if(_17d){
_17e.url="mhtml:"+_17e.url;
_17e.scheme="mhtml:"+_17e.scheme;
}
if(_176>0){
_175[_17c]=_17e;
}
return _17e;
};
CFURL=function(aURL,_184){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_184){
return new CFURL(aURL.absoluteString());
}
var _185=aURL.baseURL();
if(_185){
_184=new CFURL(_185.absoluteURL(),_184);
}
aURL=aURL.string();
}
if(_176>0){
var _186=aURL+" "+(_184&&_184.UID()||"");
if(_82.call(_174,_186)){
return _174[_186];
}
_174[_186]=this;
}
if(aURL.match(/^data:/)){
var _187={},_9d=_17a.length;
while(_9d--){
_187[_17a[_9d]]="";
}
_187.url=aURL;
_187.scheme="data";
_187.pathComponents=[];
this._parts=_187;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_184;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _188={};
CFURL.prototype.mappedURL=function(){
return _188[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_189,_18a){
_188[_189.absoluteString()]=_18a;
};
CFURL.prototype.schemeAndAuthority=function(){
var _18b="",_18c=this.scheme();
if(_18c){
_18b+=_18c+":";
}
var _18d=this.authority();
if(_18d){
_18b+="//"+_18d;
}
return _18b;
};
CFURL.prototype.absoluteString=function(){
if(this._absoluteString===_2f){
this._absoluteString=this.absoluteURL().string();
}
return this._absoluteString;
};
CFURL.prototype.toString=function(){
return this.absoluteString();
};
function _18e(aURL){
aURL=aURL.standardizedURL();
var _18f=aURL.baseURL();
if(!_18f){
return aURL;
}
var _190=((aURL)._parts||_17b(aURL)),_191,_192=_18f.absoluteURL(),_193=((_192)._parts||_17b(_192));
if(!_190.scheme&&_190.authorityRoot){
_191=_194(_190);
_191.scheme=_18f.scheme();
}else{
if(_190.scheme||_190.authority){
_191=_190;
}else{
_191={};
_191.scheme=_193.scheme;
_191.authority=_193.authority;
_191.userInfo=_193.userInfo;
_191.user=_193.user;
_191.password=_193.password;
_191.domain=_193.domain;
_191.portNumber=_193.portNumber;
_191.queryString=_190.queryString;
_191.fragment=_190.fragment;
var _195=_190.pathComponents;
if(_195.length&&_195[0]==="/"){
_191.path=_190.path;
_191.pathComponents=_195;
}else{
var _196=_193.pathComponents,_197=_196.concat(_195);
if(!_18f.hasDirectoryPath()&&_196.length){
_197.splice(_196.length-1,1);
}
if(_195.length&&(_195[0]===".."||_195[0]===".")){
_198(_197,YES);
}
_191.pathComponents=_197;
_191.path=_199(_197,_195.length<=0||aURL.hasDirectoryPath());
}
}
}
var _19a=_19b(_191),_19c=new CFURL(_19a);
_19c._parts=_191;
_19c._standardizedURL=_19c;
_19c._standardizedString=_19a;
_19c._absoluteURL=_19c;
_19c._absoluteString=_19a;
return _19c;
};
function _199(_19d,_19e){
var path=_19d.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_19e){
path+="/";
}
return path;
};
function _198(_19f,_1a0){
var _1a1=0,_1a2=0,_1a3=_19f.length,_1a4=_1a0?_19f:[],_1a5=NO;
for(;_1a1<_1a3;++_1a1){
var _1a6=_19f[_1a1];
if(_1a6===""){
continue;
}
if(_1a6==="."){
_1a5=_1a2===0;
continue;
}
if(_1a6!==".."||_1a2===0||_1a4[_1a2-1]===".."){
_1a4[_1a2]=_1a6;
_1a2++;
continue;
}
if(_1a2>0&&_1a4[_1a2-1]!=="/"){
--_1a2;
}
}
if(_1a5&&_1a2===0){
_1a4[_1a2++]=".";
}
_1a4.length=_1a2;
return _1a4;
};
function _19b(_1a7){
var _1a8="",_1a9=_1a7.scheme;
if(_1a9){
_1a8+=_1a9+":";
}
var _1aa=_1a7.authority;
if(_1aa){
_1a8+="//"+_1aa;
}
_1a8+=_1a7.path;
var _1ab=_1a7.queryString;
if(_1ab){
_1a8+="?"+_1ab;
}
var _1ac=_1a7.fragment;
if(_1ac){
_1a8+="#"+_1ac;
}
return _1a8;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_2f){
this._absoluteURL=_18e(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_2f){
var _1ad=((this)._parts||_17b(this)),_1ae=_1ad.pathComponents,_1af=_198(_1ae,NO);
var _1b0=_199(_1af,this.hasDirectoryPath());
if(_1ad.path===_1b0){
this._standardizedURL=this;
}else{
var _1b1=_194(_1ad);
_1b1.pathComponents=_1af;
_1b1.path=_1b0;
var _1b2=new CFURL(_19b(_1b1),this.baseURL());
_1b2._parts=_1b1;
_1b2._standardizedURL=_1b2;
this._standardizedURL=_1b2;
}
}
return this._standardizedURL;
};
function _194(_1b3){
var _1b4={},_1b5=_17a.length;
while(_1b5--){
var _1b6=_17a[_1b5];
_1b4[_1b6]=_1b3[_1b6];
}
return _1b4;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _1b7=((this)._parts||_17b(this)).authority;
if(_1b7){
return _1b7;
}
var _1b8=this.baseURL();
return _1b8&&_1b8.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _1b9=this._hasDirectoryPath;
if(_1b9===_2f){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _1ba=this.lastPathComponent();
_1b9=_1ba==="."||_1ba==="..";
this._hasDirectoryPath=_1b9;
}
return _1b9;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return ((this)._parts||_17b(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
if(this._lastPathComponent===_2f){
var _1bb=this.pathComponents(),_1bc=_1bb.length;
if(!_1bc){
this._lastPathComponent="";
}else{
this._lastPathComponent=_1bb[_1bc-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return ((this)._parts||_17b(this)).path;
};
CFURL.prototype.createCopyDeletingLastPathComponent=function(){
var _1bd=((this)._parts||_17b(this)),_1be=_198(_1bd.pathComponents,NO);
if(_1be.length>0){
if(_1be.length>1||_1be[0]!=="/"){
_1be.pop();
}
}
var _1bf=_1be.length===1&&_1be[0]==="/";
_1bd.pathComponents=_1be;
_1bd.path=_1bf?"/":_199(_1be,NO);
return new CFURL(_19b(_1bd));
};
CFURL.prototype.pathComponents=function(){
return ((this)._parts||_17b(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _1c0=this.lastPathComponent();
if(!_1c0){
return NULL;
}
_1c0=_1c0.replace(/^\.*/,"");
var _1c1=_1c0.lastIndexOf(".");
return _1c1<=0?"":_1c0.substring(_1c1+1);
};
CFURL.prototype.queryString=function(){
return ((this)._parts||_17b(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _1c2=this._scheme;
if(_1c2===_2f){
_1c2=((this)._parts||_17b(this)).scheme;
if(!_1c2){
var _1c3=this.baseURL();
_1c2=_1c3&&_1c3.scheme();
}
this._scheme=_1c2;
}
return _1c2;
};
CFURL.prototype.user=function(){
return ((this)._parts||_17b(this)).user;
};
CFURL.prototype.password=function(){
return ((this)._parts||_17b(this)).password;
};
CFURL.prototype.portNumber=function(){
return ((this)._parts||_17b(this)).portNumber;
};
CFURL.prototype.domain=function(){
return ((this)._parts||_17b(this)).domain;
};
CFURL.prototype.baseURL=function(){
return this._baseURL;
};
CFURL.prototype.asDirectoryPathURL=function(){
if(this.hasDirectoryPath()){
return this;
}
var _1c4=this.lastPathComponent();
if(_1c4!=="/"){
_1c4="./"+_1c4;
}
return new CFURL(_1c4+"/",this);
};
function _1c5(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return _1c5(this).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1c6){
_1c5(this).setValueForKey(aKey,_1c6);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString(_1c7.resourceAtURL(this).contents());
return data;
};
function _119(_1c8){
this._string=_1c8;
var _1c9=_1c8.indexOf(";");
this._magicNumber=_1c8.substr(0,_1c9);
this._location=_1c8.indexOf(";",++_1c9);
this._version=_1c8.substring(_1c9,this._location++);
};
_119.prototype.magicNumber=function(){
return this._magicNumber;
};
_119.prototype.version=function(){
return this._version;
};
_119.prototype.getMarker=function(){
var _1ca=this._string,_1cb=this._location;
if(_1cb>=_1ca.length){
return null;
}
var next=_1ca.indexOf(";",_1cb);
if(next<0){
return null;
}
var _1cc=_1ca.substring(_1cb,next);
if(_1cc==="e"){
return null;
}
this._location=next+1;
return _1cc;
};
_119.prototype.getString=function(){
var _1cd=this._string,_1ce=this._location;
if(_1ce>=_1cd.length){
return null;
}
var next=_1cd.indexOf(";",_1ce);
if(next<0){
return null;
}
var size=parseInt(_1cd.substring(_1ce,next),10),text=_1cd.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1cf=0,_1d0=1<<0,_1d1=1<<1,_1d2=1<<2,_1d3=1<<3,_1d4=1<<4;
var _1d5={},_1d6={},_1d7={},_1d8=new Date().getTime(),_1d9=0,_1da=0;
CFBundle=function(aURL){
aURL=_1db(aURL).asDirectoryPathURL();
var _1dc=aURL.absoluteString(),_1dd=_1d5[_1dc];
if(_1dd){
return _1dd;
}
_1d5[_1dc]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._isValid=NO;
this._loadStatus=_1cf;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _7d(this);
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1db(aURL));
var _1de,_1df=aURL.absoluteString();
while(!_1de||_1de!==_1df){
var _1e0=_1d5[_1df];
if(_1e0&&_1e0._isValid){
return _1e0;
}
aURL=new CFURL("..",aURL);
_1de=_1df;
_1df=aURL.absoluteString();
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1e1);
};
function _1e2(_1e3,_1e4){
if(_1e4){
_1d6[_1e3.name]=_1e4;
}
};
function _1e5(){
_1d5={};
_1d6={};
_1d7={};
_1d9=0;
_1da=0;
};
CFBundle.bundleForClass=function(_1e6){
return _1d6[_1e6.name]||CFBundle.mainBundle();
};
CFBundle.bundleWithIdentifier=function(_1e7){
return _1d7[_1e7]||NULL;
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL.absoluteURL();
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1e8,_1e9,_1ea){
if(_1e9){
_1e8=_1e8+"."+_1e9;
}
if(_1ea){
_1e8=_1ea+"/"+_1e8;
}
var _1eb=(new CFURL(_1e8,this.resourcesDirectoryURL())).mappedURL();
return _1eb.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_2f){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_2f){
var _1ec=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1ec){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1ec,this.mostEligibleEnvironmentURL());
}
}
return this._executableURL;
};
CFBundle.prototype.infoDictionary=function(){
return this._infoDictionary;
};
CFBundle.prototype.valueForInfoDictionaryKey=function(aKey){
return this._infoDictionary.valueForKey(aKey);
};
CFBundle.prototype.identifier=function(){
return this._infoDictionary.valueForKey("CPBundleIdentifier");
};
CFBundle.prototype.hasSpritedImages=function(){
var _1ed=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_9d=_1ed.length,_1ee=this.mostEligibleEnvironment();
while(_9d--){
if(_1ed[_9d]===_1ee){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1ef){
_1ef=_1ef||this.environments();
var _1f0=CFBundle.environments(),_9d=0,_1f1=_1f0.length,_1f2=_1ef.length;
for(;_9d<_1f1;++_9d){
var _1f3=0,_1f4=_1f0[_9d];
for(;_1f3<_1f2;++_1f3){
if(_1f4===_1ef[_1f3]){
return _1f4;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1d0;
};
CFBundle.prototype.isLoaded=function(){
return !!(this._loadStatus&_1d4);
};
CFBundle.prototype.load=function(_1f5){
if(this._loadStatus!==_1cf){
return;
}
this._loadStatus=_1d0|_1d1;
var self=this,_1f6=this.bundleURL(),_1f7=new CFURL("..",_1f6);
if(_1f7.absoluteString()===_1f6.absoluteString()){
_1f7=_1f7.schemeAndAuthority();
}
_1c7.resolveResourceAtURL(_1f7,YES,function(_1f8){
var _1f9=_1f6.lastPathComponent();
self._staticResource=_1f8._children[_1f9]||new _1c7(_1f6,_1f8,YES,NO);
function _1fa(_1fb){
self._loadStatus&=~_1d1;
var _1fc=_1fb.request.responsePropertyList();
self._isValid=!!_1fc||CFBundle.mainBundle()===self;
if(_1fc){
self._infoDictionary=_1fc;
var _1fd=self._infoDictionary.valueForKey("CPBundleIdentifier");
if(_1fd){
_1d7[_1fd]=self;
}
}
if(!self._infoDictionary){
_1ff(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1da=self.valueForInfoDictionaryKey("CPApplicationSize").valueForKey("executable")||0;
}
_203(self,_1f5);
};
function _1fe(){
self._isValid=CFBundle.mainBundle()===self;
self._loadStatus=_1cf;
_1ff(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _ba(new CFURL("Info.plist",self.bundleURL()),_1fa,_1fe);
});
};
function _1ff(_200,_201){
_202(_200._staticResource);
_200._eventDispatcher.dispatchEvent({type:"error",error:_201,bundle:_200});
};
function _203(_204,_205){
if(!_204.mostEligibleEnvironment()){
return _206();
}
_207(_204,_208,_206,_209);
_20a(_204,_208,_206,_209);
if(_204._loadStatus===_1d0){
return _208();
}
function _206(_20b){
var _20c=_204._loadRequests,_20d=_20c.length;
while(_20d--){
_20c[_20d].abort();
}
this._loadRequests=[];
_204._loadStatus=_1cf;
_1ff(_204,_20b||new Error("Could not recognize executable code format in Bundle "+_204));
};
function _209(_20e){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"){
_1d9+=_20e;
var _20f=_1da?MAX(MIN(1,_1d9/_1da),0):0;
OBJJ_PROGRESS_CALLBACK(_20f,_1da,_204.bundlePath());
}
};
function _208(){
if(_204._loadStatus===_1d0){
_204._loadStatus=_1d4;
}else{
return;
}
_202(_204._staticResource);
function _210(){
_204._eventDispatcher.dispatchEvent({type:"load",bundle:_204});
};
if(_205){
_211(_204,_210);
}else{
_210();
}
};
};
function _207(_212,_213,_214,_215){
var _216=_212.executableURL();
if(!_216){
return;
}
_212._loadStatus|=_1d2;
new _ba(_216,function(_217){
try{
_218(_212,_217.request.responseText(),_216);
_212._loadStatus&=~_1d2;
_213();
}
catch(anException){
_214(anException);
}
},_214,_215);
};
function _219(_21a){
return "mhtml:"+new CFURL("MHTMLTest.txt",_21a.mostEligibleEnvironmentURL());
};
function _21b(_21c){
if(_21d===_21e){
return new CFURL("dataURLs.txt",_21c.mostEligibleEnvironmentURL());
}
if(_21d===_21f||_21d===_220){
return new CFURL("MHTMLPaths.txt",_21c.mostEligibleEnvironmentURL());
}
return NULL;
};
function _20a(_221,_222,_223,_224){
if(!_221.hasSpritedImages()){
return;
}
_221._loadStatus|=_1d3;
if(!_225()){
return _226(_219(_221),function(){
_20a(_221,_222,_223,_224);
});
}
var _227=_21b(_221);
if(!_227){
_221._loadStatus&=~_1d3;
return _222();
}
new _ba(_227,function(_228){
try{
_218(_221,_228.request.responseText(),_227);
_221._loadStatus&=~_1d3;
_222();
}
catch(anException){
_223(anException);
}
},_223,_224);
};
var _229=[],_21d=-1,_22a=0,_21e=1,_21f=2,_220=3;
function _225(){
return _21d!==-1;
};
function _226(_22b,_22c){
if(_225()){
return;
}
_229.push(_22c);
if(_229.length>1){
return;
}
_229.push(function(){
var size=0,_22d=CFBundle.mainBundle().valueForInfoDictionaryKey("CPApplicationSize");
if(!_22d){
return;
}
switch(_21d){
case _21e:
size=_22d.valueForKey("data");
break;
case _21f:
case _220:
size=_22d.valueForKey("mhtml");
break;
}
_1da+=size;
});
_22e([_21e,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_21f,_22b+"!test",_220,_22b+"?"+_1d8+"!test"]);
};
function _22f(){
var _230=_229.length;
while(_230--){
_229[_230]();
}
};
function _22e(_231){
if(!("Image" in _1)||_231.length<2){
_21d=_22a;
_22f();
return;
}
var _232=new Image();
_232.onload=function(){
if(_232.width===1&&_232.height===1){
_21d=_231[0];
_22f();
}else{
_232.onerror();
}
};
_232.onerror=function(){
_22e(_231.slice(2));
};
_232.src=_231[1];
};
function _211(_233,_234){
var _235=[_233._staticResource];
function _236(_237){
for(;_237<_235.length;++_237){
var _238=_235[_237];
if(_238.isNotFound()){
continue;
}
if(_238.isFile()){
var _239=new _6aa(_238.URL());
if(_239.hasLoadedFileDependencies()){
_239.execute();
}else{
_239.loadFileDependencies(function(){
_236(_237);
});
return;
}
}else{
if(_238.URL().absoluteString()===_233.resourcesDirectoryURL().absoluteString()){
continue;
}
var _23a=_238.children();
for(var name in _23a){
if(_82.call(_23a,name)){
_235.push(_23a[name]);
}
}
}
}
_234();
};
_236(0);
};
var _23b="@STATIC",_23c="p",_23d="u",_23e="c",_23f="t",_240="I",_241="i";
function _218(_242,_243,_244){
var _245=new _119(_243);
if(_245.magicNumber()!==_23b){
throw new Error("Could not read static file: "+_244);
}
if(_245.version()!=="1.0"){
throw new Error("Could not read static file: "+_244);
}
var _246,_247=_242.bundleURL(),file=NULL;
while(_246=_245.getMarker()){
var text=_245.getString();
if(_246===_23c){
var _248=new CFURL(text,_247),_249=_1c7.resourceAtURL(new CFURL(".",_248),YES);
file=new _1c7(_248,_249,NO,YES);
}else{
if(_246===_23d){
var URL=new CFURL(text,_247),_24a=_245.getString();
if(_24a.indexOf("mhtml:")===0){
_24a="mhtml:"+new CFURL(_24a.substr("mhtml:".length),_247);
if(_21d===_220){
var _24b=_24a.indexOf("!"),_24c=_24a.substring(0,_24b),_24d=_24a.substring(_24b);
_24a=_24c+"?"+_1d8+_24d;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_24a));
var _249=_1c7.resourceAtURL(new CFURL(".",URL),YES);
new _1c7(URL,_249,NO,YES);
}else{
if(_246===_23f){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_24e,_24f){
this._eventDispatcher.addEventListener(_24e,_24f);
};
CFBundle.prototype.removeEventListener=function(_250,_251){
this._eventDispatcher.removeEventListener(_250,_251);
};
CFBundle.prototype.onerror=function(_252){
throw _252.error;
};
CFBundle.prototype.bundlePath=function(){
return this.bundleURL().path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_253){
return this.resourceURL(_253).absoluteString();
};
var _254={};
function _1c7(aURL,_255,_256,_257,_258){
this._parent=_255;
this._eventDispatcher=new _7d(this);
var name=aURL.absoluteURL().lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_257;
this._filenameTranslateDictionary=_258;
if(_256){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_255){
_254[name]=this;
}
this._isDirectory=!!_256;
this._isNotFound=NO;
if(_255){
_255._children[name]=this;
}
if(_256){
this._children={};
}else{
this._contents="";
}
};
_1c7.rootResources=function(){
return _254;
};
function _259(x){
var _25a=0;
for(var k in x){
if(x.hasOwnProperty(k)){
++_25a;
}
}
return _25a;
};
_1c7.resetRootResources=function(){
_254={};
};
_1c7.prototype.filenameTranslateDictionary=function(){
return this._filenameTranslateDictionary||{};
};
_2.StaticResource=_1c7;
function _202(_25b){
_25b._isResolved=YES;
_25b._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_25b});
};
_1c7.prototype.resolve=function(){
if(this.isDirectory()){
var _25c=new CFBundle(this.URL());
_25c.onerror=function(){
};
_25c.load(NO);
}else{
var self=this;
function _25d(_25e){
self._contents=_25e.request.responseText();
_202(self);
};
function _25f(){
self._isNotFound=YES;
_202(self);
};
var url=this.URL(),_260=this.filenameTranslateDictionary();
if(_260){
var _261=url.toString(),_262=url.lastPathComponent(),_263=_261.substring(0,_261.length-_262.length),_264=_260[_262];
if(_264&&_261.slice(-_264.length)!==_264){
url=new CFURL(_263+_264);
}
}
new _ba(url,_25d,_25f);
}
};
_1c7.prototype.name=function(){
return this._name;
};
_1c7.prototype.URL=function(){
return this._URL;
};
_1c7.prototype.contents=function(){
return this._contents;
};
_1c7.prototype.children=function(){
return this._children;
};
_1c7.prototype.parent=function(){
return this._parent;
};
_1c7.prototype.isResolved=function(){
return this._isResolved;
};
_1c7.prototype.write=function(_265){
this._contents+=_265;
};
function _266(_267){
var _268=_267.schemeAndAuthority(),_269=_254[_268];
if(!_269){
_269=new _1c7(new CFURL(_268),NULL,YES,YES);
}
return _269;
};
_1c7.resourceAtURL=function(aURL,_26a){
aURL=_1db(aURL).absoluteURL();
var _26b=_266(aURL),_26c=aURL.pathComponents(),_9d=0,_26d=_26c.length;
for(;_9d<_26d;++_9d){
var name=_26c[_9d];
if(_82.call(_26b._children,name)){
_26b=_26b._children[name];
}else{
if(_26a){
if(name!=="/"){
name="./"+name;
}
_26b=new _1c7(new CFURL(name,_26b.URL()),_26b,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _26b;
};
_1c7.prototype.resourceAtURL=function(aURL,_26e){
return _1c7.resourceAtURL(new CFURL(aURL,this.URL()),_26e);
};
_1c7.resolveResourceAtURL=function(aURL,_26f,_270,_271){
aURL=_1db(aURL).absoluteURL();
_272(_266(aURL),_26f,aURL.pathComponents(),0,_270,_271);
};
_1c7.prototype.resolveResourceAtURL=function(aURL,_273,_274){
_1c7.resolveResourceAtURL(new CFURL(aURL,this.URL()).absoluteURL(),_273,_274);
};
function _272(_275,_276,_277,_278,_279,_27a){
var _27b=_277.length;
for(;_278<_27b;++_278){
var name=_277[_278],_27c=_82.call(_275._children,name)&&_275._children[name];
if(!_27c){
_27c=new _1c7(new CFURL(name,_275.URL()),_275,_278+1<_27b||_276,NO,_27a);
_27c.resolve();
}
if(!_27c.isResolved()){
return _27c.addEventListener("resolve",function(){
_272(_275,_276,_277,_278,_279,_27a);
});
}
if(_27c.isNotFound()){
return _279(null,new Error("File not found: "+_277.join("/")));
}
if((_278+1<_27b)&&_27c.isFile()){
return _279(null,new Error("File is not a directory: "+_277.join("/")));
}
_275=_27c;
}
_279(_275);
};
function _27d(aURL,_27e,_27f){
var _280=_1c7.includeURLs(),_281=new CFURL(aURL,_280[_27e]).absoluteURL();
_1c7.resolveResourceAtURL(_281,NO,function(_282){
if(!_282){
if(_27e+1<_280.length){
_27d(aURL,_27e+1,_27f);
}else{
_27f(NULL);
}
return;
}
_27f(_282);
});
};
_1c7.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_283){
_27d(aURL,0,_283);
};
_1c7.prototype.addEventListener=function(_284,_285){
this._eventDispatcher.addEventListener(_284,_285);
};
_1c7.prototype.removeEventListener=function(_286,_287){
this._eventDispatcher.removeEventListener(_286,_287);
};
_1c7.prototype.isNotFound=function(){
return this._isNotFound;
};
_1c7.prototype.isFile=function(){
return !this._isDirectory;
};
_1c7.prototype.isDirectory=function(){
return this._isDirectory;
};
_1c7.prototype.toString=function(_288){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _289=this.name();
if(this.isDirectory()){
var _28a=this._children;
for(var name in _28a){
if(_28a.hasOwnProperty(name)){
var _28b=_28a[name];
if(_288||!_28b.isNotFound()){
_289+="\n\t"+_28a[name].toString(_288).split("\n").join("\n\t");
}
}
}
}
return _289;
};
var _28c=NULL;
_1c7.includeURLs=function(){
if(_28c!==NULL){
return _28c;
}
_28c=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_28c=["Frameworks","Frameworks/Debug"];
}else{
_28c=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _28d=_28c.length;
while(_28d--){
_28c[_28d]=new CFURL(_28c[_28d]).asDirectoryPathURL();
}
return _28c;
};
var _28e="accessors",_28f="class",_290="end",_291="function",_292="implementation",_293="import",_294="each",_295="outlet",_296="action",_297="new",_298="selector",_299="super",_29a="var",_29b="in",_29c="pragma",_29d="mark",_29e="=",_29f="+",_2a0="-",_2a1=":",_2a2=",",_2a3=".",_2a4="*",_2a5=";",_2a6="<",_2a7="{",_2a8="}",_2a9=">",_2aa="[",_2ab="\"",_2ac="@",_2ad="#",_2ae="]",_2af="?",_2b0="(",_2b1=")",_2b2=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_2b3=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_2b4=/^[a-zA-Z_$](\w|$)*$/;
function _2b5(_2b6){
this._index=-1;
this._tokens=(_2b6+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_2b5.prototype.push=function(){
this._context.push(this._index);
};
_2b5.prototype.pop=function(){
this._index=this._context.pop();
};
_2b5.prototype.peek=function(_2b7){
if(_2b7){
this.push();
var _2b8=this.skip_whitespace();
this.pop();
return _2b8;
}
return this._tokens[this._index+1];
};
_2b5.prototype.next=function(){
return this._tokens[++this._index];
};
_2b5.prototype.previous=function(){
return this._tokens[--this._index];
};
_2b5.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_2b5.prototype.skip_whitespace=function(_2b9){
var _2ba;
if(_2b9){
while((_2ba=this.previous())&&_2b2.test(_2ba)){
}
}else{
while((_2ba=this.next())&&_2b2.test(_2ba)){
}
}
return _2ba;
};
_2.Lexer=_2b5;
function _2bb(){
this.atoms=[];
};
_2bb.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_2bc,aURL,_2bd){
return new _2be(_2bc,aURL,_2bd).executable();
};
_2.eval=function(_2bf){
return eval(_2.preprocess(_2bf).code());
};
var _2be=function(_2c0,aURL,_2c1){
this._URL=new CFURL(aURL);
_2c0=_2c0.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _2bb();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _2b5(_2c0);
this._flags=_2c1;
this._classMethod=false;
this._executable=NULL;
this._classLookupTable={};
this._classVars={};
var _2c2=new objj_class();
for(var i in _2c2){
this._classVars[i]=1;
}
this.preprocess(this._tokens,this._buffer);
};
_2be.prototype.setClassInfo=function(_2c3,_2c4,_2c5){
this._classLookupTable[_2c3]={superClassName:_2c4,ivars:_2c5};
};
_2be.prototype.getClassInfo=function(_2c6){
return this._classLookupTable[_2c6];
};
_2be.prototype.allIvarNamesForClassName=function(_2c7){
var _2c8={},_2c9=this.getClassInfo(_2c7);
while(_2c9){
for(var i in _2c9.ivars){
_2c8[i]=1;
}
_2c9=this.getClassInfo(_2c9.superClassName);
}
return _2c8;
};
_2.Preprocessor=_2be;
_2be.Flags={};
_2be.Flags.IncludeDebugSymbols=1<<0;
_2be.Flags.IncludeTypeSignatures=1<<1;
_2be.prototype.executable=function(){
if(!this._executable){
this._executable=new _2ca(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_2be.prototype.accessors=function(_2cb){
var _2cc=_2cb.skip_whitespace(),_2cd={};
if(_2cc!=_2b0){
_2cb.previous();
return _2cd;
}
while((_2cc=_2cb.skip_whitespace())!=_2b1){
var name=_2cc,_2ce=true;
if(!/^\w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @accessors attribute name not valid."));
}
if((_2cc=_2cb.skip_whitespace())==_29e){
_2ce=_2cb.skip_whitespace();
if(!/^\w+$/.test(_2ce)){
throw new SyntaxError(this.error_message("*** @accessors attribute value not valid."));
}
if(name=="setter"){
if((_2cc=_2cb.next())!=_2a1){
throw new SyntaxError(this.error_message("*** @accessors setter attribute requires argument with \":\" at end of selector name."));
}
_2ce+=":";
}
_2cc=_2cb.skip_whitespace();
}
_2cd[name]=_2ce;
if(_2cc==_2b1){
break;
}
if(_2cc!=_2a2){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @accessors attribute list."));
}
}
return _2cd;
};
_2be.prototype.brackets=function(_2cf,_2d0){
var _2d1=[];
while(this.preprocess(_2cf,NULL,NULL,NULL,_2d1[_2d1.length]=[])){
}
if(_2d1[0].length===1){
_2d0.atoms[_2d0.atoms.length]="[";
_2d0.atoms[_2d0.atoms.length]=_2d1[0][0];
_2d0.atoms[_2d0.atoms.length]="]";
}else{
var _2d2=new _2bb();
if(_2d1[0][0].atoms[0]==_299){
_2d0.atoms[_2d0.atoms.length]="objj_msgSendSuper(";
_2d0.atoms[_2d0.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_2d0.atoms[_2d0.atoms.length]="objj_msgSend(";
_2d0.atoms[_2d0.atoms.length]=_2d1[0][0];
}
_2d2.atoms[_2d2.atoms.length]=_2d1[0][1];
var _2d3=1,_2d4=_2d1.length,_2d5=new _2bb();
for(;_2d3<_2d4;++_2d3){
var pair=_2d1[_2d3];
_2d2.atoms[_2d2.atoms.length]=pair[1];
_2d5.atoms[_2d5.atoms.length]=", "+pair[0];
}
_2d0.atoms[_2d0.atoms.length]=", \"";
_2d0.atoms[_2d0.atoms.length]=_2d2;
_2d0.atoms[_2d0.atoms.length]="\"";
_2d0.atoms[_2d0.atoms.length]=_2d5;
_2d0.atoms[_2d0.atoms.length]=")";
}
};
_2be.prototype.directive=function(_2d6,_2d7,_2d8){
var _2d9=_2d7?_2d7:new _2bb(),_2da=_2d6.next();
if(_2da.charAt(0)==_2ab){
_2d9.atoms[_2d9.atoms.length]=_2da;
}else{
if(_2da===_28f){
_2d6.skip_whitespace();
return;
}else{
if(_2da===_292){
this.implementation(_2d6,_2d9);
}else{
if(_2da===_293){
this._import(_2d6);
}else{
if(_2da===_298){
this.selector(_2d6,_2d9);
}
}
}
}
}
if(!_2d7){
return _2d9;
}
};
_2be.prototype.hash=function(_2db,_2dc){
var _2dd=_2dc?_2dc:new _2bb(),_2de=_2db.next();
if(_2de===_29c){
_2de=_2db.skip_whitespace();
if(_2de===_29d){
while((_2de=_2db.next()).indexOf("\n")<0){
}
}
}else{
throw new SyntaxError(this.error_message("*** Expected \"pragma\" to follow # but instead saw \""+_2de+"\"."));
}
};
_2be.prototype.implementation=function(_2df,_2e0){
var _2e1=_2e0,_2e2="",_2e3=NO,_2e4=_2df.skip_whitespace(),_2e5="Nil",_2e6=new _2bb(),_2e7=new _2bb();
if(!(/^\w/).test(_2e4)){
throw new Error(this.error_message("*** Expected class name, found \""+_2e4+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_2e4+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_2e4+"\").super_class";
this._currentClass=_2e4;
this._currentSelector="";
if((_2e2=_2df.skip_whitespace())==_2b0){
_2e2=_2df.skip_whitespace();
if(_2e2==_2b1){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_2e4+"\"."));
}
if(_2df.skip_whitespace()!=_2b1){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_2e4+"\"."));
}
_2e1.atoms[_2e1.atoms.length]="{\nvar the_class = objj_getClass(\""+_2e4+"\")\n";
_2e1.atoms[_2e1.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_2e4+"\\\"\");\n";
_2e1.atoms[_2e1.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_2e2==_2a1){
_2e2=_2df.skip_whitespace();
if(!_2b4.test(_2e2)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_2e2+"\"."));
}
_2e5=_2e2;
_2e2=_2df.skip_whitespace();
}
_2e1.atoms[_2e1.atoms.length]="{var the_class = objj_allocateClassPair("+_2e5+", \""+_2e4+"\"),\nmeta_class = the_class.isa;";
if(_2e2==_2a7){
var _2e8={},_2e9=0,_2ea=[],_2eb,_2ec={},_2ed=[];
while((_2e2=_2df.skip_whitespace())&&_2e2!=_2a8){
if(_2e2===_2ac){
_2e2=_2df.next();
if(_2e2===_28e){
_2eb=this.accessors(_2df);
}else{
if(_2e2!==_295){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_2e2+"')."));
}else{
_2ed.push("@"+_2e2);
}
}
}else{
if(_2e2==_2a5){
if(_2e9++===0){
_2e1.atoms[_2e1.atoms.length]="class_addIvars(the_class, [";
}else{
_2e1.atoms[_2e1.atoms.length]=", ";
}
var name=_2ea[_2ea.length-1];
if(this._flags&_2be.Flags.IncludeTypeSignatures){
_2e1.atoms[_2e1.atoms.length]="new objj_ivar(\""+name+"\", \""+_2ed.slice(0,_2ed.length-1).join(" ")+"\")";
}else{
_2e1.atoms[_2e1.atoms.length]="new objj_ivar(\""+name+"\")";
}
_2e8[name]=1;
_2ea=[];
_2ed=[];
if(_2eb){
_2ec[name]=_2eb;
_2eb=NULL;
}
}else{
_2ea.push(_2e2);
_2ed.push(_2e2);
}
}
}
if(_2ea.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_2e9){
_2e1.atoms[_2e1.atoms.length]="]);\n";
}
if(!_2e2){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
this.setClassInfo(_2e4,_2e5==="Nil"?null:_2e5,_2e8);
var _2e8=this.allIvarNamesForClassName(_2e4);
for(ivar_name in _2ec){
var _2ee=_2ec[ivar_name],_2ef=_2ee["property"]||ivar_name;
var _2f0=_2ee["getter"]||_2ef,_2f1="(id)"+_2f0+"\n{\nreturn "+ivar_name+";\n}";
if(_2e6.atoms.length!==0){
_2e6.atoms[_2e6.atoms.length]=",\n";
}
_2e6.atoms[_2e6.atoms.length]=this.method(new _2b5(_2f1),_2e8);
if(_2ee["readonly"]){
continue;
}
var _2f2=_2ee["setter"];
if(!_2f2){
var _2f3=_2ef.charAt(0)=="_"?1:0;
_2f2=(_2f3?"_":"")+"set"+_2ef.substr(_2f3,1).toUpperCase()+_2ef.substring(_2f3+1)+":";
}
var _2f4="(void)"+_2f2+"(id)newValue\n{\n";
if(_2ee["copy"]){
_2f4+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_2f4+=ivar_name+" = newValue;\n}";
}
if(_2e6.atoms.length!==0){
_2e6.atoms[_2e6.atoms.length]=",\n";
}
_2e6.atoms[_2e6.atoms.length]=this.method(new _2b5(_2f4),_2e8);
}
}else{
_2df.previous();
}
_2e1.atoms[_2e1.atoms.length]="objj_registerClassPair(the_class);\n";
}
if(!_2e8){
var _2e8=this.allIvarNamesForClassName(_2e4);
}
while((_2e2=_2df.skip_whitespace())){
if(_2e2==_29f){
this._classMethod=true;
if(_2e7.atoms.length!==0){
_2e7.atoms[_2e7.atoms.length]=", ";
}
_2e7.atoms[_2e7.atoms.length]=this.method(_2df,this._classVars);
}else{
if(_2e2==_2a0){
this._classMethod=false;
if(_2e6.atoms.length!==0){
_2e6.atoms[_2e6.atoms.length]=", ";
}
_2e6.atoms[_2e6.atoms.length]=this.method(_2df,_2e8);
}else{
if(_2e2==_2ad){
this.hash(_2df,_2e1);
}else{
if(_2e2==_2ac){
if((_2e2=_2df.next())==_290){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_2e2+"\"."));
}
}
}
}
}
}
if(_2e6.atoms.length!==0){
_2e1.atoms[_2e1.atoms.length]="class_addMethods(the_class, [";
_2e1.atoms[_2e1.atoms.length]=_2e6;
_2e1.atoms[_2e1.atoms.length]="]);\n";
}
if(_2e7.atoms.length!==0){
_2e1.atoms[_2e1.atoms.length]="class_addMethods(meta_class, [";
_2e1.atoms[_2e1.atoms.length]=_2e7;
_2e1.atoms[_2e1.atoms.length]="]);\n";
}
_2e1.atoms[_2e1.atoms.length]="}";
this._currentClass="";
};
_2be.prototype._import=function(_2f5){
var _2f6="",_2f7=_2f5.skip_whitespace(),_2f8=(_2f7!==_2a6);
if(_2f7===_2a6){
while((_2f7=_2f5.next())&&_2f7!==_2a9){
_2f6+=_2f7;
}
if(!_2f7){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_2f7.charAt(0)===_2ab){
_2f6=_2f7.substr(1,_2f7.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_2f7+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_2f6;
this._buffer.atoms[this._buffer.atoms.length]=_2f8?"\", YES);":"\", NO);";
this._dependencies.push(new _2f9(new CFURL(_2f6),_2f8));
};
_2be.prototype.method=function(_2fa,_2fb){
var _2fc=new _2bb(),_2fd,_2fe="",_2ff=[],_300=[null];
_2fb=_2fb||{};
while((_2fd=_2fa.skip_whitespace())&&_2fd!==_2a7&&_2fd!==_2a5){
if(_2fd==_2a1){
var type="";
_2fe+=_2fd;
_2fd=_2fa.skip_whitespace();
if(_2fd==_2b0){
while((_2fd=_2fa.skip_whitespace())&&_2fd!=_2b1){
type+=_2fd;
}
_2fd=_2fa.skip_whitespace();
}
_300[_2ff.length+1]=type||null;
_2ff[_2ff.length]=_2fd;
if(_2fd in _2fb){
CPLog.warn(this.error_message("*** Warning: Method ( "+_2fe+" ) uses a parameter name that is already in use ( "+_2fd+" )"));
}
}else{
if(_2fd==_2b0){
var type="";
while((_2fd=_2fa.skip_whitespace())&&_2fd!=_2b1){
type+=_2fd;
}
_300[0]=type||null;
}else{
if(_2fd==_2a2){
if((_2fd=_2fa.skip_whitespace())!=_2a3||_2fa.next()!=_2a3||_2fa.next()!=_2a3){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_2fe+=_2fd;
}
}
}
}
if(_2fd===_2a5){
_2fd=_2fa.skip_whitespace();
if(_2fd!==_2a7){
throw new SyntaxError(this.error_message("Invalid semi-colon in method declaration. "+"Semi-colons are allowed only to terminate the method signature, before the open brace."));
}
}
var _301=0,_302=_2ff.length;
_2fc.atoms[_2fc.atoms.length]="new objj_method(sel_getUid(\"";
_2fc.atoms[_2fc.atoms.length]=_2fe;
_2fc.atoms[_2fc.atoms.length]="\"), function";
this._currentSelector=_2fe;
if(this._flags&_2be.Flags.IncludeDebugSymbols){
_2fc.atoms[_2fc.atoms.length]=" $"+this._currentClass+"__"+_2fe.replace(/:/g,"_");
}
_2fc.atoms[_2fc.atoms.length]="(self, _cmd";
for(;_301<_302;++_301){
_2fc.atoms[_2fc.atoms.length]=", ";
_2fc.atoms[_2fc.atoms.length]=_2ff[_301];
}
_2fc.atoms[_2fc.atoms.length]=")\n{ with(self)\n{";
_2fc.atoms[_2fc.atoms.length]=this.preprocess(_2fa,NULL,_2a8,_2a7);
_2fc.atoms[_2fc.atoms.length]="}\n}";
if(this._flags&_2be.Flags.IncludeDebugSymbols){
_2fc.atoms[_2fc.atoms.length]=","+JSON.stringify(_300);
}
_2fc.atoms[_2fc.atoms.length]=")";
this._currentSelector="";
return _2fc;
};
_2be.prototype.preprocess=function(_303,_304,_305,_306,_307){
var _308=_304?_304:new _2bb(),_309=0,_30a="";
if(_307){
_307[0]=_308;
var _30b=false,_30c=[0,0,0];
}
while((_30a=_303.next())&&((_30a!==_305)||_309)){
if(_307){
if(_30a===_2af){
++_30c[2];
}else{
if(_30a===_2a7){
++_30c[0];
}else{
if(_30a===_2a8){
--_30c[0];
}else{
if(_30a===_2b0){
++_30c[1];
}else{
if(_30a===_2b1){
--_30c[1];
}else{
if((_30a===_2a1&&_30c[2]--===0||(_30b=(_30a===_2ae)))&&_30c[0]===0&&_30c[1]===0){
_303.push();
var _30d=_30b?_303.skip_whitespace(true):_303.previous(),_30e=_2b2.test(_30d);
if(_30e||_2b4.test(_30d)&&_2b2.test(_303.previous())){
_303.push();
var last=_303.skip_whitespace(true),_30f=true,_310=false;
if(last==="+"||last==="-"){
if(_303.previous()!==last){
_30f=false;
}else{
last=_303.skip_whitespace(true);
_310=true;
}
}
_303.pop();
_303.pop();
if(_30f&&((!_310&&(last===_2a8))||last===_2b1||last===_2ae||last===_2a3||_2b3.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_2b4.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_30e){
_307[1]=":";
}else{
_307[1]=_30d;
if(!_30b){
_307[1]+=":";
}
var _309=_308.atoms.length;
while(_308.atoms[_309--]!==_30d){
}
_308.atoms.length=_309;
}
return !_30b;
}
if(_30b){
return NO;
}
}
_303.pop();
if(_30b){
return NO;
}
}
}
}
}
}
}
_30c[2]=MAX(_30c[2],0);
}
if(_306){
if(_30a===_306){
++_309;
}else{
if(_30a===_305){
--_309;
}
}
}
if(_30a===_291){
var _311="";
while((_30a=_303.next())&&_30a!==_2b0&&!(/^\w/).test(_30a)){
_311+=_30a;
}
if(_30a===_2b0){
if(_306===_2b0){
++_309;
}
_308.atoms[_308.atoms.length]="function"+_311+"(";
if(_307){
++_30c[1];
}
}else{
_308.atoms[_308.atoms.length]=_30a+" = function";
}
}else{
if(_30a==_2ac){
this.directive(_303,_308);
}else{
if(_30a==_2ad){
this.hash(_303,_308);
}else{
if(_30a==_2aa){
this.brackets(_303,_308);
}else{
_308.atoms[_308.atoms.length]=_30a;
}
}
}
}
}
if(_307){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_304){
return _308;
}
};
_2be.prototype.selector=function(_312,_313){
var _314=_313?_313:new _2bb();
_314.atoms[_314.atoms.length]="sel_getUid(\"";
if(_312.skip_whitespace()!=_2b0){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _315=_312.skip_whitespace();
if(_315==_2b1){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_313.atoms[_313.atoms.length]=_315;
var _316,_317=true;
while((_316=_312.next())&&_316!=_2b1){
if(_317&&/^\d+$/.test(_316)||!(/^(\w|$|\:)/.test(_316))){
if(!(/\S/).test(_316)){
if(_312.skip_whitespace()==_2b1){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_316+"' in @selector()."));
}
}
_314.atoms[_314.atoms.length]=_316;
_317=(_316==_2a1);
}
_314.atoms[_314.atoms.length]="\")";
if(!_313){
return _314;
}
};
_2be.prototype.error_message=function(_318){
return _318+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
if(typeof _2!="undefined"&&!_2.acorn){
_2.acorn={};
_2.acorn.walk={};
}
(function(_319){
"use strict";
_319.version="0.1.01";
var _31a,_31b,_31c,_31d;
_319.parse=function(inpt,opts){
_31b=String(inpt);
_31c=_31b.length;
_31e(opts);
_31f();
return _320(_31a.program);
};
var _321=_319.defaultOptions={ecmaVersion:5,strictSemicolons:false,allowTrailingCommas:true,forbidReserved:false,trackComments:false,trackSpaces:false,locations:false,ranges:false,program:null,sourceFile:null,objj:true,preprocess:true,preprocessAddMacro:_322,preprocessGetMacro:_323,preprocessUndefineMacro:_324,preprocessIsMacro:_325};
function _31e(opts){
_31a=opts||{};
for(var opt in _321){
if(!_31a.hasOwnProperty(opt)){
_31a[opt]=_321[opt];
}
}
_31d=_31a.sourceFile||null;
};
var _326;
var _327;
function _322(_328){
_326[_328.identifier]=_328;
_327=null;
};
function _323(_329){
return _326[_329];
};
function _324(_32a){
delete _326[_32a];
_327=null;
};
function _325(_32b){
var x=Object.keys(_326).join(" ");
return (_327||(_327=_32c(x)))(_32b);
};
var _32d=_319.getLineInfo=function(_32e,_32f){
for(var line=1,cur=0;;){
_330.lastIndex=cur;
var _331=_330.exec(_32e);
if(_331&&_331.index<_32f){
++line;
cur=_331.index+_331[0].length;
}else{
break;
}
}
return {line:line,column:_32f-cur,lineStart:cur,lineEnd:(_331?_331.index+_331[0].length:_32e.length)};
};
_319.tokenize=function(inpt,opts){
_31b=String(inpt);
_31c=_31b.length;
_31e(opts);
_31f();
var t={};
function _332(_333){
_3e2(_333);
t.start=_33b;
t.end=_33c;
t.startLoc=_33d;
t.endLoc=_33e;
t.type=_33f;
t.value=_340;
return t;
};
_332.jumpTo=function(pos,_334){
_335=pos;
if(_31a.locations){
_336=_337=_330.lastIndex=0;
var _338;
while((_338=_330.exec(_31b))&&_338.index<pos){
++_336;
_337=_338.index+_338[0].length;
}
}
var ch=_31b.charAt(pos-1);
_339=_334;
_33a();
};
return _332;
};
var _335;
var _33b,_33c;
var _33d,_33e;
var _33f,_340;
var _341,_342,_343;
var _344,_345,_346;
var _339,_347,_348;
var _336,_337,_349;
var _34a,_34b;
var _34c,_34d,_34e;
var _34f;
var _350;
var _351,_352,_353;
var _354,_355,_356,_357,_358;
var _359,_35a;
var _35b=[];
var _35c=false;
function _35d(pos,_35e){
if(typeof pos=="number"){
pos=_32d(_31b,pos);
}
var _35f=new SyntaxError(_35e);
_35f.line=pos.line;
_35f.column=pos.column;
_35f.lineStart=pos.lineStart;
_35f.lineEnd=pos.lineEnd;
_35f.fileName=_31d;
throw _35f;
};
var _360={type:"num"},_361={type:"regexp"},_362={type:"string"};
var _363={type:"name"},_364={type:"eof"},_365={type:"eol"};
var _366={keyword:"break"},_367={keyword:"case",beforeExpr:true},_368={keyword:"catch"};
var _369={keyword:"continue"},_36a={keyword:"debugger"},_36b={keyword:"default"};
var _36c={keyword:"do",isLoop:true},_36d={keyword:"else",beforeExpr:true};
var _36e={keyword:"finally"},_36f={keyword:"for",isLoop:true},_370={keyword:"function"};
var _371={keyword:"if"},_372={keyword:"return",beforeExpr:true},_373={keyword:"switch"};
var _374={keyword:"throw",beforeExpr:true},_375={keyword:"try"},_376={keyword:"var"};
var _377={keyword:"while",isLoop:true},_378={keyword:"with"},_379={keyword:"new",beforeExpr:true};
var _37a={keyword:"this"};
var _37b={keyword:"void",prefix:true,beforeExpr:true};
var _37c={keyword:"null",atomValue:null},_37d={keyword:"true",atomValue:true};
var _37e={keyword:"false",atomValue:false};
var _37f={keyword:"in",binop:7,beforeExpr:true};
var _380={keyword:"implementation"},_381={keyword:"outlet"},_382={keyword:"accessors"};
var _383={keyword:"end"},_384={keyword:"import",afterImport:true};
var _385={keyword:"action"},_386={keyword:"selector"},_387={keyword:"class"},_388={keyword:"global"};
var _389={keyword:"{"},_38a={keyword:"["};
var _38b={keyword:"ref"},_38c={keyword:"deref"};
var _38d={keyword:"protocol"},_38e={keyword:"optional"},_38f={keyword:"required"};
var _390={keyword:"interface"};
var _391={keyword:"typedef"};
var _392={keyword:"filename"},_393={keyword:"unsigned",okAsIdent:true},_394={keyword:"signed",okAsIdent:true};
var _395={keyword:"byte",okAsIdent:true},_396={keyword:"char",okAsIdent:true},_397={keyword:"short",okAsIdent:true};
var _398={keyword:"int",okAsIdent:true},_399={keyword:"long",okAsIdent:true},_39a={keyword:"id",okAsIdent:true};
var _39b={keyword:"BOOL",okAsIdent:true},_39c={keyword:"SEL",okAsIdent:true},_39d={keyword:"float",okAsIdent:true};
var _39e={keyword:"double",okAsIdent:true};
var _39f={keyword:"#"};
var _3a0={keyword:"define"};
var _3a1={keyword:"undef"};
var _3a2={keyword:"ifdef"};
var _3a3={keyword:"ifndef"};
var _3a4={keyword:"if"};
var _3a5={keyword:"else"};
var _3a6={keyword:"endif"};
var _3a7={keyword:"elif"};
var _3a8={keyword:"pragma"};
var _3a9={keyword:"defined"};
var _3aa={keyword:"\\"};
var _3ab={type:"preprocessParamItem"};
var _3ac={"break":_366,"case":_367,"catch":_368,"continue":_369,"debugger":_36a,"default":_36b,"do":_36c,"else":_36d,"finally":_36e,"for":_36f,"function":_370,"if":_371,"return":_372,"switch":_373,"throw":_374,"try":_375,"var":_376,"while":_377,"with":_378,"null":_37c,"true":_37d,"false":_37e,"new":_379,"in":_37f,"instanceof":{keyword:"instanceof",binop:7,beforeExpr:true},"this":_37a,"typeof":{keyword:"typeof",prefix:true,beforeExpr:true},"void":_37b,"delete":{keyword:"delete",prefix:true,beforeExpr:true}};
var _3ad={"IBAction":_385,"IBOutlet":_381,"unsigned":_393,"signed":_394,"byte":_395,"char":_396,"short":_397,"int":_398,"long":_399,"id":_39a,"float":_39d,"BOOL":_39b,"SEL":_39c,"double":_39e};
var _3ae={"implementation":_380,"outlet":_381,"accessors":_382,"end":_383,"import":_384,"action":_385,"selector":_386,"class":_387,"global":_388,"ref":_38b,"deref":_38c,"protocol":_38d,"optional":_38e,"required":_38f,"interface":_390,"typedef":_391};
var _3af={"define":_3a0,"pragma":_3a8,"ifdef":_3a2,"ifndef":_3a3,"undef":_3a1,"if":_3a4,"endif":_3a6,"else":_3a5,"elif":_3a7,"defined":_3a9};
var _3b0={type:"[",beforeExpr:true},_3b1={type:"]"},_3b2={type:"{",beforeExpr:true};
var _3b3={type:"}"},_3b4={type:"(",beforeExpr:true},_3b5={type:")"};
var _3b6={type:",",beforeExpr:true},_3b7={type:";",beforeExpr:true};
var _3b8={type:":",beforeExpr:true},_3b9={type:"."},_3ba={type:"?",beforeExpr:true};
var _3bb={type:"@"},_3bc={type:"..."},_3bd={type:"#"};
var _3be={binop:10,beforeExpr:true,preprocess:true},_3bf={isAssign:true,beforeExpr:true,preprocess:true};
var _3c0={isAssign:true,beforeExpr:true},_3c1={binop:9,prefix:true,beforeExpr:true,preprocess:true};
var _3c2={postfix:true,prefix:true,isUpdate:true},_3c3={prefix:true,beforeExpr:true};
var _3c4={binop:1,beforeExpr:true,preprocess:true},_3c5={binop:2,beforeExpr:true,preprocess:true};
var _3c6={binop:3,beforeExpr:true,preprocess:true},_3c7={binop:4,beforeExpr:true,preprocess:true};
var _3c8={binop:5,beforeExpr:true,preprocess:true},_3c9={binop:6,beforeExpr:true,preprocess:true};
var _3ca={binop:7,beforeExpr:true,preprocess:true},_3cb={binop:8,beforeExpr:true,preprocess:true};
var _3cc={binop:10,beforeExpr:true,preprocess:true};
_319.tokTypes={bracketL:_3b0,bracketR:_3b1,braceL:_3b2,braceR:_3b3,parenL:_3b4,parenR:_3b5,comma:_3b6,semi:_3b7,colon:_3b8,dot:_3b9,question:_3ba,slash:_3be,eq:_3bf,name:_363,eof:_364,num:_360,regexp:_361,string:_362};
for(var kw in _3ac){
_319.tokTypes[kw]=_3ac[kw];
}
function _32c(_3cd){
_3cd=_3cd.split(" ");
var f="",cats=[];
out:
for(var i=0;i<_3cd.length;++i){
for(var j=0;j<cats.length;++j){
if(cats[j][0].length==_3cd[i].length){
cats[j].push(_3cd[i]);
continue out;
}
}
cats.push([_3cd[i]]);
}
function _3ce(arr){
if(arr.length==1){
return f+="return str === "+JSON.stringify(arr[0])+";";
}
f+="switch(str){";
for(var i=0;i<arr.length;++i){
f+="case "+JSON.stringify(arr[i])+":";
}
f+="return true}return false;";
};
if(cats.length>3){
cats.sort(function(a,b){
return b.length-a.length;
});
f+="switch(str.length){";
for(var i=0;i<cats.length;++i){
var cat=cats[i];
f+="case "+cat[0].length+":";
_3ce(cat);
}
f+="}";
}else{
_3ce(_3cd);
}
return new Function("str",f);
};
_319.makePredicate=_32c;
var _3cf=_32c("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");
var _3d0=_32c("class enum extends super const export import");
var _3d1=_32c("implements interface let package private protected public static yield");
var _3d2=_32c("eval arguments");
var _3d3=_32c("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");
var _3d4=_32c("IBAction IBOutlet byte char short int long float unsigned signed id BOOL SEL double");
var _3d5=_32c("define pragma if ifdef ifndef else elif endif defined");
var _3d6=/[\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/;
var _3d7=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var _3d8="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var _3d9="ͱ-ʹ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿";
var _3da=new RegExp("["+_3d8+"]");
var _3db=new RegExp("["+_3d8+_3d9+"]");
var _3dc=/[\n\r\u2028\u2029]/;
var _330=/\r\n|[\n\r\u2028\u2029]/g;
function _3dd(code){
if(code<65){
return code===36;
}
if(code<91){
return true;
}
if(code<97){
return code===95;
}
if(code<123){
return true;
}
return code>=170&&_3da.test(String.fromCharCode(code));
};
function _3de(code){
if(code<48){
return code===36;
}
if(code<58){
return true;
}
if(code<65){
return false;
}
if(code<91){
return true;
}
if(code<97){
return code===95;
}
if(code<123){
return true;
}
return code>=170&&_3db.test(String.fromCharCode(code));
};
function _3df(){
this.line=_336;
this.column=_335-_337;
};
function _31f(){
_326=Object.create(null);
_336=1;
_335=_337=0;
_339=true;
_347=null;
_348=null;
_33a();
};
var _3e0=[_3a4,_3a2,_3a3,_3a5,_3a7,_3a6];
function _3e1(type,val){
if(type in _3e0){
return _3e2();
}
_33c=_335;
if(_31a.locations){
_33e=new _3df;
}
_33f=type;
_33a();
if(_31a.preprocess&&_31b.charCodeAt(_335)===35&&_31b.charCodeAt(_335+1)===35){
var val1=type===_363?val:type.keyword;
_335+=2;
if(val1){
_33a();
_3e2();
var val2=_33f===_363?_340:_33f.keyword;
if(val2){
var _3e3=""+val1+val2,code=_3e3.charCodeAt(0),tok;
if(_3dd(code)){
tok=_3e4(_3e3)!==false;
}
if(tok){
return tok;
}
tok=_3e5(code,_3e1);
if(tok===false){
_3e6();
}
return tok;
}else{
}
}
}
_340=val;
_343=_342;
_346=_345;
_342=_347;
_345=_348;
_339=type.beforeExpr;
_34f=type.afterImport;
};
function _3e7(){
var _3e8=_31a.onComment&&_31a.locations&&new _3df;
var _3e9=_335,end=_31b.indexOf("*/",_335+=2);
if(end===-1){
_35d(_335-2,"Unterminated comment");
}
_335=end+2;
if(_31a.locations){
_330.lastIndex=_3e9;
var _3ea;
while((_3ea=_330.exec(_31b))&&_3ea.index<_335){
++_336;
_337=_3ea.index+_3ea[0].length;
}
}
if(_31a.onComment){
_31a.onComment(true,_31b.slice(_3e9+2,end),_3e9,_335,_3e8,_31a.locations&&new _3df);
}
if(_31a.trackComments){
(_347||(_347=[])).push(_31b.slice(_3e9,end));
}
};
function _3eb(){
var _3ec=_335;
var _3ed=_31a.onComment&&_31a.locations&&new _3df;
var ch=_31b.charCodeAt(_335+=2);
while(_335<_31c&&ch!==10&&ch!==13&&ch!==8232&&ch!==8329){
++_335;
ch=_31b.charCodeAt(_335);
}
if(_31a.onComment){
_31a.onComment(false,_31b.slice(_3ec+2,_335),_3ec,_335,_3ed,_31a.locations&&new _3df);
}
if(_31a.trackComments){
(_347||(_347=[])).push(_31b.slice(_3ec,_335));
}
};
function _3ee(){
var ch=_31b.charCodeAt(_335);
var last;
while(_335<_31c&&((ch!==10&&ch!==13&&ch!==8232&&ch!==8329)||last===92)){
if(ch!=32&&ch!=9&&ch!=160&&(ch<5760||!_3d7.test(String.fromCharCode(ch)))){
last=ch;
}
ch=_31b.charCodeAt(++_335);
}
};
function _33a(){
_347=null;
_348=null;
var _3ef=_335;
for(;;){
var ch=_31b.charCodeAt(_335);
if(ch===32){
++_335;
}else{
if(ch===13){
++_335;
var next=_31b.charCodeAt(_335);
if(next===10){
++_335;
}
if(_31a.locations){
++_336;
_337=_335;
}
}else{
if(ch===10){
++_335;
++_336;
_337=_335;
}else{
if(ch<14&&ch>8){
++_335;
}else{
if(ch===47){
var next=_31b.charCodeAt(_335+1);
if(next===42){
if(_31a.trackSpaces){
(_348||(_348=[])).push(_31b.slice(_3ef,_335));
}
_3e7();
_3ef=_335;
}else{
if(next===47){
if(_31a.trackSpaces){
(_348||(_348=[])).push(_31b.slice(_3ef,_335));
}
_3eb();
_3ef=_335;
}else{
break;
}
}
}else{
if(ch===160){
++_335;
}else{
if(ch>=5760&&_3d6.test(String.fromCharCode(ch))){
++_335;
}else{
if(_335>=_31c){
if(_31a.preprocess&&_35b.length){
var _3f0=_35b.pop();
_335=_3f0.end;
_31b=_3f0.input;
_31c=_3f0.inputLen;
_34d=_3f0.lastEnd;
_34c=_3f0.lastStart;
}else{
break;
}
}else{
break;
}
}
}
}
}
}
}
}
}
};
function _3f1(code,_3f2){
var next=_31b.charCodeAt(_335+1);
if(next>=48&&next<=57){
return _3f3(String.fromCharCode(code),_3f2);
}
if(next===46&&_31a.objj&&_31b.charCodeAt(_335+2)===46){
_335+=3;
return _3f2(_3bc);
}
++_335;
return _3f2(_3b9);
};
function _3f4(_3f5){
var next=_31b.charCodeAt(_335+1);
if(_339){
++_335;
return _3f6();
}
if(next===61){
return _3f7(_3c0,2,_3f5);
}
return _3f7(_3be,1,_3f5);
};
function _3f8(_3f9){
var next=_31b.charCodeAt(_335+1);
if(next===61){
return _3f7(_3c0,2,_3f9);
}
return _3f7(_3cc,1,_3f9);
};
function _3fa(code,_3fb){
var next=_31b.charCodeAt(_335+1);
if(next===code){
return _3f7(code===124?_3c4:_3c5,2,_3fb);
}
if(next===61){
return _3f7(_3c0,2,_3fb);
}
return _3f7(code===124?_3c6:_3c8,1,_3fb);
};
function _3fc(_3fd){
var next=_31b.charCodeAt(_335+1);
if(next===61){
return _3f7(_3c0,2,_3fd);
}
return _3f7(_3c7,1,_3fd);
};
function _3fe(code,_3ff){
var next=_31b.charCodeAt(_335+1);
if(next===code){
return _3f7(_3c2,2,_3ff);
}
if(next===61){
return _3f7(_3c0,2,_3ff);
}
return _3f7(_3c1,1,_3ff);
};
function _400(code,_401){
if(_34f&&_31a.objj&&code===60){
var str=[];
for(;;){
if(_335>=_31c){
_35d(_33b,"Unterminated import statement");
}
var ch=_31b.charCodeAt(++_335);
if(ch===62){
++_335;
return _401(_392,String.fromCharCode.apply(null,str));
}
str.push(ch);
}
}
var next=_31b.charCodeAt(_335+1);
var size=1;
if(next===code){
size=code===62&&_31b.charCodeAt(_335+2)===62?3:2;
if(_31b.charCodeAt(_335+size)===61){
return _3f7(_3c0,size+1,_401);
}
return _3f7(_3cb,size,_401);
}
if(next===61){
size=_31b.charCodeAt(_335+2)===61?3:2;
}
return _3f7(_3ca,size,_401);
};
function _402(code,_403){
var next=_31b.charCodeAt(_335+1);
if(next===61){
return _3f7(_3c9,_31b.charCodeAt(_335+2)===61?3:2,_403);
}
return _3f7(code===61?_3bf:_3c3,1,_403);
};
function _404(code,_405){
var next=_31b.charCodeAt(++_335);
if(next===34||next===39){
return _406(next,_405);
}
if(next===123){
return _405(_389);
}
if(next===91){
return _405(_38a);
}
var word=_407(),_408=_3ae[word];
if(!_408){
_35d(_335,"Unrecognized Objective-J keyword '@"+word+"'");
}
return _405(_408);
};
var _409=true;
var _40a=0;
function _40b(_40c){
++_335;
_40d();
switch(_355){
case _3a0:
_40d();
var _40e=_358;
var _40f=_410();
if(_31b.charCodeAt(_40e)===40){
_411(_3b4);
var _412=[];
var _413=true;
while(!_414(_3b5)){
if(!_413){
_411(_3b6,"Expected ',' between macro parameters");
}else{
_413=false;
}
_412.push(_410());
}
}
var _415=_335=_357;
_3ee();
var _416=_31b.slice(_415,_335);
_416=_416.replace(/\\/g," ");
_31a.preprocessAddMacro(new _417(_40f,_416,_412));
break;
case _3a1:
_40d();
_31a.preprocessUndefineMacro(_410());
_3ee();
break;
case _3a4:
if(_409){
_40a++;
_40d();
var expr=_418();
var test=_419(expr);
if(!test){
_409=false;
}
_41a(!test);
}else{
return _40c(_3a4);
}
break;
case _3a2:
if(_409){
_40a++;
_40d();
var _41b=_410();
var test=_31a.preprocessGetMacro(_41b);
if(!test){
_409=false;
}
_41a(!test);
}else{
return _40c(_3a2);
}
break;
case _3a3:
if(_409){
_40a++;
_40d();
var _41b=_410();
var test=_31a.preprocessGetMacro(_41b);
if(test){
_409=false;
}
_41a(test);
}else{
return _40c(_3a3);
}
break;
case _3a5:
if(_40a){
if(_409){
_409=false;
_40c(_3a5);
_40d();
_41a(true,true);
}else{
return _40c(_3a5);
}
}else{
_35d(_357,"#else without #if");
}
break;
case _3a6:
if(_40a){
if(_409){
_40a--;
break;
}
}else{
_35d(_357,"#endif without #if");
}
return _40c(_3a6);
break;
case _3a8:
_3ee();
break;
case _3c3:
_3ee();
break;
default:
_35d(_357,"Invalid preprocessing directive");
_3ee();
return _40c(_39f);
}
_3e1(_39f);
return _3e2();
};
function _419(expr){
return _319.walk.recursive(expr,{},{BinaryExpression:function(node,st,c){
var left=node.left,_41c=node.right;
switch(node.operator){
case "+":
return c(left,st)+c(_41c,st);
case "-":
return c(left,st)-c(_41c,st);
case "*":
return c(left,st)*c(_41c,st);
case "/":
return c(left,st)/c(_41c,st);
case "%":
return c(left,st)%c(_41c,st);
case "<":
return c(left,st)<c(_41c,st);
case ">":
return c(left,st)>c(_41c,st);
case "=":
case "==":
case "===":
return c(left,st)===c(_41c,st);
case "<=":
return c(left,st)<=c(_41c,st);
case ">=":
return c(left,st)>=c(_41c,st);
case "&&":
return c(left,st)&&c(_41c,st);
case "||":
return c(left,st)||c(_41c,st);
}
},Literal:function(node,st,c){
return node.value;
},Identifier:function(node,st,c){
var name=node.name,_41d=_31a.preprocessGetMacro(name);
return (_41d&&parseInt(_41d.macro))||0;
},DefinedExpression:function(node,st,c){
return !!_31a.preprocessGetMacro(node.id.name);
}},{});
};
function _3e5(code,_41e,_41f){
switch(code){
case 46:
return _3f1(code,_41e);
case 40:
++_335;
return _41e(_3b4);
case 41:
++_335;
return _41e(_3b5);
case 59:
++_335;
return _41e(_3b7);
case 44:
++_335;
return _41e(_3b6);
case 91:
++_335;
return _41e(_3b0);
case 93:
++_335;
return _41e(_3b1);
case 123:
++_335;
return _41e(_3b2);
case 125:
++_335;
return _41e(_3b3);
case 58:
++_335;
return _41e(_3b8);
case 63:
++_335;
return _41e(_3ba);
case 48:
var next=_31b.charCodeAt(_335+1);
if(next===120||next===88){
return _420(_41e);
}
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
return _3f3(false,_41e);
case 34:
case 39:
return _406(code,_41e);
case 47:
return _3f4(_41e);
case 37:
case 42:
return _3f8(_41e);
case 124:
case 38:
return _3fa(code,_41e);
case 94:
return _3fc(_41e);
case 43:
case 45:
return _3fe(code,_41e);
case 60:
case 62:
return _400(code,_41e,_41e);
case 61:
case 33:
return _402(code,_41e);
case 126:
return _3f7(_3c3,1,_41e);
case 64:
if(_31a.objj){
return _404(code,_41e);
}
return false;
case 35:
if(_31a.preprocess){
return _40b(_41e);
}
return false;
case 92:
if(_31a.preprocess){
return _3f7(_3aa,1,_41e);
}
return false;
}
if(_41f&&_3dc.test(String.fromCharCode(code))){
return _3f7(_365,1,_41e);
}
return false;
};
function _421(){
while(_335<_31c){
var ch=_31b.charCodeAt(_335);
if(ch===32||ch===9||ch===160||(ch>=5760&&_3d7.test(String.fromCharCode(ch)))){
++_335;
}else{
if(ch===92){
var pos=_335+1;
ch=_31b.charCodeAt(pos);
while(pos<_31c&&(ch===32||ch===9||ch===11||ch===12||(ch>=5760&&_3d7.test(String.fromCharCode(ch))))){
ch=_31b.charCodeAt(++pos);
}
_330.lastIndex=0;
var _422=_330.exec(_31b.slice(pos,pos+2));
if(_422&&_422.index===0){
_335=pos+_422[0].length;
}else{
return false;
}
}else{
_330.lastIndex=0;
var _422=_330.exec(_31b.slice(_335,_335+2));
return _422&&_422.index===0;
}
}
}
};
function _41a(test,_423){
if(test){
var _424=0;
while(_424>0||(_355!=_3a6&&(_355!=_3a5||_423))){
switch(_355){
case _3a4:
case _3a2:
case _3a3:
_424++;
break;
case _3a6:
_424--;
break;
case _364:
_409=true;
_35d(_357,"Missing #endif");
}
_40d();
}
_409=true;
if(_355===_3a6){
_40a--;
}
}
};
function _40d(){
_357=_335;
_34b=_31b;
if(_335>=_31c){
return _364;
}
var code=_31b.charCodeAt(_335);
if(_35c&&code!==41&&code!==44){
var _425=0;
while(_335<_31c&&(_425||(code!==41&&code!==44))){
if(code===40){
_425++;
}
if(code===41){
_425--;
}
code=_31b.charCodeAt(++_335);
}
return _426(_3ab,_31b.slice(_357,_335));
}
if(_3dd(code)||(code===92&&_31b.charCodeAt(_335+1)===117)){
return _427();
}
if(_3e5(code,_426,true)===false){
var ch=String.fromCharCode(code);
if(ch==="\\"||_3da.test(ch)){
return _427();
}
_35d(_335,"Unexpected character '"+ch+"'");
}
};
function _427(){
var word=_407();
_426(_3d5(word)?_3af[word]:_363,word);
};
function _426(type,val){
_355=type;
_356=val;
_358=_335;
_421();
};
function _428(){
_359=_33b;
_35a=_33c;
return _40d();
};
function _414(type){
if(_355===type){
_428();
return true;
}
};
function _411(type,_429){
if(_355===type){
_40d();
}else{
_35d(_357,_429||"Unexpected token");
}
};
function _410(){
var _42a=_355===_363?_356:((!_31a.forbidReserved||_355.okAsIdent)&&_355.keyword)||_35d(_357,"Expected Macro identifier");
_428();
return _42a;
};
function _42b(){
var node=_42c();
node.name=_410();
return _42d(node,"Identifier");
};
function _418(){
return _42e();
};
function _42e(){
return _42f(_430(),-1);
};
function _42f(left,_431){
var prec=_355.binop;
if(prec){
if(!_355.preprocess){
_35d(_357,"Unsupported macro operator");
}
if(prec>_431){
var node=_432(left);
node.left=left;
node.operator=_356;
_428();
node.right=_42f(_430(),prec);
var node=_42d(node,"BinaryExpression");
return _42f(node,_431);
}
}
return left;
};
function _430(){
if(_355.preprocess&&_355.prefix){
var node=_42c();
node.operator=_340;
node.prefix=true;
_428();
node.argument=_430();
return _42d(node,"UnaryExpression");
}
return _433();
};
function _433(){
switch(_355){
case _363:
return _42b();
case _360:
case _362:
return _434();
case _3b4:
var _435=_357;
_428();
var val=_418();
val.start=_435;
val.end=_358;
_411(_3b5,"Expected closing ')' in macro expression");
return val;
case _3a9:
var node=_42c();
_428();
node.id=_42b();
return _42d(node,"DefinedExpression");
default:
_3e6();
}
};
function _434(){
var node=_42c();
node.value=_356;
node.raw=_34b.slice(_357,_358);
_428();
return _42d(node,"Literal");
};
function _42d(node,type){
node.type=type;
node.end=_35a;
return node;
};
function _3e2(_436){
_33b=_335;
_34a=_31b;
if(_31a.locations){
_33d=new _3df;
}
_341=_347;
_344=_348;
if(_436){
return _3f6();
}
if(_335>=_31c){
return _3e1(_364);
}
var code=_31b.charCodeAt(_335);
if(_3dd(code)||code===92){
return _3e4();
}
var tok=_3e5(code,_3e1);
if(tok===false){
var ch=String.fromCharCode(code);
if(ch==="\\"||_3da.test(ch)){
return _3e4();
}
_35d(_335,"Unexpected character '"+ch+"'");
}
return tok;
};
function _3f7(type,size,_437){
var str=_31b.slice(_335,_335+size);
_335+=size;
_437(type,str);
};
function _3f6(){
var _438="",_439,_43a,_43b=_335;
for(;;){
if(_335>=_31c){
_35d(_43b,"Unterminated regular expression");
}
var ch=_31b.charAt(_335);
if(_3dc.test(ch)){
_35d(_43b,"Unterminated regular expression");
}
if(!_439){
if(ch==="["){
_43a=true;
}else{
if(ch==="]"&&_43a){
_43a=false;
}else{
if(ch==="/"&&!_43a){
break;
}
}
}
_439=ch==="\\";
}else{
_439=false;
}
++_335;
}
var _438=_31b.slice(_43b,_335);
++_335;
var mods=_407();
if(mods&&!/^[gmsiy]*$/.test(mods)){
_35d(_43b,"Invalid regexp flag");
}
return _3e1(_361,new RegExp(_438,mods));
};
function _43c(_43d,len){
var _43e=_335,_43f=0;
for(var i=0,e=len==null?Infinity:len;i<e;++i){
var code=_31b.charCodeAt(_335),val;
if(code>=97){
val=code-97+10;
}else{
if(code>=65){
val=code-65+10;
}else{
if(code>=48&&code<=57){
val=code-48;
}else{
val=Infinity;
}
}
}
if(val>=_43d){
break;
}
++_335;
_43f=_43f*_43d+val;
}
if(_335===_43e||len!=null&&_335-_43e!==len){
return null;
}
return _43f;
};
function _420(_440){
_335+=2;
var val=_43c(16);
if(val==null){
_35d(_33b+2,"Expected hexadecimal number");
}
if(_3dd(_31b.charCodeAt(_335))){
_35d(_335,"Identifier directly after number");
}
return _440(_360,val);
};
function _3f3(_441,_442){
var _443=_335,_444=false,_445=_31b.charCodeAt(_335)===48;
if(!_441&&_43c(10)===null){
_35d(_443,"Invalid number");
}
if(_31b.charCodeAt(_335)===46){
++_335;
_43c(10);
_444=true;
}
var next=_31b.charCodeAt(_335);
if(next===69||next===101){
next=_31b.charCodeAt(++_335);
if(next===43||next===45){
++_335;
}
if(_43c(10)===null){
_35d(_443,"Invalid number");
}
_444=true;
}
if(_3dd(_31b.charCodeAt(_335))){
_35d(_335,"Identifier directly after number");
}
var str=_31b.slice(_443,_335),val;
if(_444){
val=parseFloat(str);
}else{
if(!_445||str.length===1){
val=parseInt(str,10);
}else{
if(/[89]/.test(str)||_353){
_35d(_443,"Invalid number");
}else{
val=parseInt(str,8);
}
}
}
return _442(_360,val);
};
var _446=[];
function _406(_447,_448){
_335++;
_446.length=0;
for(;;){
if(_335>=_31c){
_35d(_33b,"Unterminated string constant");
}
var ch=_31b.charCodeAt(_335);
if(ch===_447){
++_335;
return _448(_362,String.fromCharCode.apply(null,_446));
}
if(ch===92){
ch=_31b.charCodeAt(++_335);
var _449=/^[0-7]+/.exec(_31b.slice(_335,_335+3));
if(_449){
_449=_449[0];
}
while(_449&&parseInt(_449,8)>255){
_449=_449.slice(0,_449.length-1);
}
if(_449==="0"){
_449=null;
}
++_335;
if(_449){
if(_353){
_35d(_335-2,"Octal literal in strict mode");
}
_446.push(parseInt(_449,8));
_335+=_449.length-1;
}else{
switch(ch){
case 110:
_446.push(10);
break;
case 114:
_446.push(13);
break;
case 120:
_446.push(_44a(2));
break;
case 117:
_446.push(_44a(4));
break;
case 85:
_446.push(_44a(8));
break;
case 116:
_446.push(9);
break;
case 98:
_446.push(8);
break;
case 118:
_446.push(11);
break;
case 102:
_446.push(12);
break;
case 48:
_446.push(0);
break;
case 13:
if(_31b.charCodeAt(_335)===10){
++_335;
}
case 10:
if(_31a.locations){
_337=_335;
++_336;
}
break;
default:
_446.push(ch);
break;
}
}
}else{
if(ch===13||ch===10||ch===8232||ch===8329){
_35d(_33b,"Unterminated string constant");
}
_446.push(ch);
++_335;
}
}
};
function _44a(len){
var n=_43c(16,len);
if(n===null){
_35d(_33b,"Bad character escape sequence");
}
return n;
};
var _44b;
function _407(){
_44b=false;
var word,_44c=true,_44d=_335;
for(;;){
var ch=_31b.charCodeAt(_335);
if(_3de(ch)){
if(_44b){
word+=_31b.charAt(_335);
}
++_335;
}else{
if(ch===92){
if(!_44b){
word=_31b.slice(_44d,_335);
}
_44b=true;
if(_31b.charCodeAt(++_335)!=117){
_35d(_335,"Expecting Unicode escape sequence \\uXXXX");
}
++_335;
var esc=_44a(4);
var _44e=String.fromCharCode(esc);
if(!_44e){
_35d(_335-1,"Invalid Unicode escape");
}
if(!(_44c?_3dd(esc):_3de(esc))){
_35d(_335-4,"Invalid Unicode escape");
}
word+=_44e;
}else{
break;
}
}
_44c=false;
}
return _44b?word:_31b.slice(_44d,_335);
};
function _3e4(_44f){
var word=_44f||_407();
var type=_363;
var _450;
if(_31a.preprocess){
var _451;
var i=_35b.length;
if(i>0){
var _452=_35b[i-1];
if(_452.parameterDict&&_452.macro.isParameterFunction()(word)){
_451=_452.parameterDict[word];
}
}
if(!_451&&_31a.preprocessIsMacro(word)){
_451=_31a.preprocessGetMacro(word);
}
if(_451){
var _453=_33b;
var _454;
var _455=_451.parameters;
var _456;
if(_455){
_456=_335<_31c&&_31b.charCodeAt(_335)===40;
}
if(!_455||_456){
var _457=_451.macro;
var _458=_335;
if(_456){
var _459=true;
var _45a=0;
_454=Object.create(null);
_40d();
_35c=true;
_411(_3b4);
_458=_335;
while(!_414(_3b5)){
if(!_459){
_411(_3b6,"Expected ',' between macro parameters");
}else{
_459=false;
}
var _45b=_455[_45a++];
var val=_356;
_411(_3ab);
_454[_45b]=new _417(_45b,val);
_458=_335;
}
_35c=false;
}
if(_457){
_35b.push({macro:_451,parameterDict:_454,start:_453,end:_458,input:_31b,inputLen:_31c,lastStart:_33b,lastEnd:_458});
_31b=_457;
_31c=_457.length;
_335=0;
}
return next();
}
}
}
if(!_44b){
if(_3d3(word)){
type=_3ac[word];
}else{
if(_31a.objj&&_3d4(word)){
type=_3ad[word];
}else{
if(_31a.forbidReserved&&(_31a.ecmaVersion===3?_3cf:_3d0)(word)||_353&&_3d1(word)){
_35d(_33b,"The keyword '"+word+"' is reserved");
}
}
}
}
return _3e1(type,word);
};
function _417(_45c,_45d,_45e){
this.identifier=_45c;
if(_45d){
this.macro=_45d;
}
if(_45e){
this.parameters=_45e;
}
};
_417.prototype.isParameterFunction=function(){
var y=(this.parameters||[]).join(" ");
return this.isParameterFunctionVar||(this.isParameterFunctionVar=_32c(y));
};
function next(){
_34c=_33b;
_34d=_33c;
_34e=_33e;
_350=null;
return _3e2();
};
function _45f(_460){
_353=_460;
_335=_34d;
_33a();
_3e2();
};
function _461(){
this.type=null;
this.start=_33b;
this.end=null;
};
function _462(){
this.start=_33d;
this.end=null;
if(_31d!==null){
this.source=_31d;
}
};
function _42c(){
var node=new _461();
if(_31a.trackComments&&_341){
node.commentsBefore=_341;
_341=null;
}
if(_31a.trackSpaces&&_344){
node.spacesBefore=_344;
_344=null;
}
if(_31a.locations){
node.loc=new _462();
}
if(_31a.ranges){
node.range=[_33b,0];
}
return node;
};
function _432(_463){
var node=new _461();
node.start=_463.start;
if(_463.commentsBefore){
node.commentsBefore=_463.commentsBefore;
delete _463.commentsBefore;
}
if(_463.spacesBefore){
node.spacesBefore=_463.spacesBefore;
delete _463.spacesBefore;
}
if(_31a.locations){
node.loc=new _462();
node.loc.start=_463.loc.start;
}
if(_31a.ranges){
node.range=[_463.range[0],0];
}
return node;
};
var _464;
function _465(node,type){
node.type=type;
node.end=_34d;
if(_31a.trackComments){
if(_343){
node.commentsAfter=_343;
_342=null;
}else{
if(_464&&_464.end===_34d&&_464.commentsAfter){
node.commentsAfter=_464.commentsAfter;
delete _464.commentsAfter;
}
}
if(!_31a.trackSpaces){
_464=node;
}
}
if(_31a.trackSpaces){
if(_346){
node.spacesAfter=_346;
_346=null;
}else{
if(_464&&_464.end===_34d&&_464.spacesAfter){
node.spacesAfter=_464.spacesAfter;
delete _464.spacesAfter;
}
}
_464=node;
}
if(_31a.locations){
node.loc.end=_34e;
}
if(_31a.ranges){
node.range[1]=_34d;
}
return node;
};
function _466(stmt){
return _31a.ecmaVersion>=5&&stmt.type==="ExpressionStatement"&&stmt.expression.type==="Literal"&&stmt.expression.value==="use strict";
};
function eat(type){
if(_33f===type){
next();
return true;
}
};
function _467(){
return !_31a.strictSemicolons&&(_33f===_364||_33f===_3b3||_3dc.test(_34a.slice(_34d,_33b))||(_350&&_31a.objj));
};
function _468(){
if(!eat(_3b7)&&!_467()){
_35d(_33b,"Expected a semicolon");
}
};
function _469(type,_46a){
if(_33f===type){
next();
}else{
_46a?_35d(_33b,_46a):_3e6();
}
};
function _3e6(){
_35d(_33b,"Unexpected token");
};
function _46b(expr){
if(expr.type!=="Identifier"&&expr.type!=="MemberExpression"&&expr.type!=="Dereference"){
_35d(expr.start,"Assigning to rvalue");
}
if(_353&&expr.type==="Identifier"&&_3d2(expr.name)){
_35d(expr.start,"Assigning to "+expr.name+" in strict mode");
}
};
function _320(_46c){
_34c=_34d=_335;
if(_31a.locations){
_34e=new _3df;
}
_351=_353=null;
_352=[];
_3e2();
var node=_46c||_42c(),_46d=true;
if(!_46c){
node.body=[];
}
while(_33f!==_364){
var stmt=_46e();
node.body.push(stmt);
if(_46d&&_466(stmt)){
_45f(true);
}
_46d=false;
}
return _465(node,"Program");
};
var _46f={kind:"loop"},_470={kind:"switch"};
function _46e(){
if(_33f===_3be){
_3e2(true);
}
var _471=_33f,node=_42c();
if(_350){
node.expression=_472(_350,_350.object);
_468();
return _465(node,"ExpressionStatement");
}
switch(_471){
case _366:
case _369:
next();
var _473=_471===_366;
if(eat(_3b7)||_467()){
node.label=null;
}else{
if(_33f!==_363){
_3e6();
}else{
node.label=_474();
_468();
}
}
for(var i=0;i<_352.length;++i){
var lab=_352[i];
if(node.label==null||lab.name===node.label.name){
if(lab.kind!=null&&(_473||lab.kind==="loop")){
break;
}
if(node.label&&_473){
break;
}
}
}
if(i===_352.length){
_35d(node.start,"Unsyntactic "+_471.keyword);
}
return _465(node,_473?"BreakStatement":"ContinueStatement");
case _36a:
next();
_468();
return _465(node,"DebuggerStatement");
case _36c:
next();
_352.push(_46f);
node.body=_46e();
_352.pop();
_469(_377,"Expected 'while' at end of do statement");
node.test=_475();
_468();
return _465(node,"DoWhileStatement");
case _36f:
next();
_352.push(_46f);
_469(_3b4,"Expected '(' after 'for'");
if(_33f===_3b7){
return _476(node,null);
}
if(_33f===_376){
var init=_42c();
next();
_477(init,true);
if(init.declarations.length===1&&eat(_37f)){
return _478(node,init);
}
return _476(node,init);
}
var init=_479(false,true);
if(eat(_37f)){
_46b(init);
return _478(node,init);
}
return _476(node,init);
case _370:
next();
return _47a(node,true);
case _371:
next();
node.test=_475();
node.consequent=_46e();
node.alternate=eat(_36d)?_46e():null;
return _465(node,"IfStatement");
case _372:
if(!_351){
_35d(_33b,"'return' outside of function");
}
next();
if(eat(_3b7)||_467()){
node.argument=null;
}else{
node.argument=_479();
_468();
}
return _465(node,"ReturnStatement");
case _373:
next();
node.discriminant=_475();
node.cases=[];
_469(_3b2,"Expected '{' in switch statement");
_352.push(_470);
for(var cur,_47b;_33f!=_3b3;){
if(_33f===_367||_33f===_36b){
var _47c=_33f===_367;
if(cur){
_465(cur,"SwitchCase");
}
node.cases.push(cur=_42c());
cur.consequent=[];
next();
if(_47c){
cur.test=_479();
}else{
if(_47b){
_35d(_34c,"Multiple default clauses");
}
_47b=true;
cur.test=null;
}
_469(_3b8,"Expected ':' after case clause");
}else{
if(!cur){
_3e6();
}
cur.consequent.push(_46e());
}
}
if(cur){
_465(cur,"SwitchCase");
}
next();
_352.pop();
return _465(node,"SwitchStatement");
case _374:
next();
if(_3dc.test(_34a.slice(_34d,_33b))){
_35d(_34d,"Illegal newline after throw");
}
node.argument=_479();
_468();
return _465(node,"ThrowStatement");
case _375:
next();
node.block=_47d();
node.handlers=[];
while(_33f===_368){
var _47e=_42c();
next();
_469(_3b4,"Expected '(' after 'catch'");
_47e.param=_474();
if(_353&&_3d2(_47e.param.name)){
_35d(_47e.param.start,"Binding "+_47e.param.name+" in strict mode");
}
_469(_3b5,"Expected closing ')' after catch");
_47e.guard=null;
_47e.body=_47d();
node.handlers.push(_465(_47e,"CatchClause"));
}
node.finalizer=eat(_36e)?_47d():null;
if(!node.handlers.length&&!node.finalizer){
_35d(node.start,"Missing catch or finally clause");
}
return _465(node,"TryStatement");
case _376:
next();
node=_477(node);
_468();
return node;
case _377:
next();
node.test=_475();
_352.push(_46f);
node.body=_46e();
_352.pop();
return _465(node,"WhileStatement");
case _378:
if(_353){
_35d(_33b,"'with' in strict mode");
}
next();
node.object=_475();
node.body=_46e();
return _465(node,"WithStatement");
case _3b2:
return _47d();
case _3b7:
next();
return _465(node,"EmptyStatement");
case _390:
if(_31a.objj){
next();
node.classname=_474(true);
if(eat(_3b8)){
node.superclassname=_474(true);
}else{
if(eat(_3b4)){
node.categoryname=_474(true);
_469(_3b5,"Expected closing ')' after category name");
}
}
if(_340==="<"){
next();
var _47f=[],_480=true;
node.protocols=_47f;
while(_340!==">"){
if(!_480){
_469(_3b6,"Expected ',' between protocol names");
}else{
_480=false;
}
_47f.push(_474(true));
}
next();
}
if(eat(_3b2)){
node.ivardeclarations=[];
for(;;){
if(eat(_3b3)){
break;
}
_481(node);
}
node.endOfIvars=_33b;
}
node.body=[];
while(!eat(_383)){
if(_33f===_364){
_35d(_335,"Expected '@end' after '@interface'");
}
node.body.push(_482());
}
return _465(node,"InterfaceDeclarationStatement");
}
break;
case _380:
if(_31a.objj){
next();
node.classname=_474(true);
if(eat(_3b8)){
node.superclassname=_474(true);
}else{
if(eat(_3b4)){
node.categoryname=_474(true);
_469(_3b5,"Expected closing ')' after category name");
}
}
if(_340==="<"){
next();
var _47f=[],_480=true;
node.protocols=_47f;
while(_340!==">"){
if(!_480){
_469(_3b6,"Expected ',' between protocol names");
}else{
_480=false;
}
_47f.push(_474(true));
}
next();
}
if(_340==="<"){
next();
var _47f=[],_480=true;
node.protocols=_47f;
while(_340!==">"){
if(!_480){
_469(_3b6,"Expected ',' between protocol names");
}else{
_480=false;
}
_47f.push(_474(true));
}
next();
}
if(eat(_3b2)){
node.ivardeclarations=[];
for(;;){
if(eat(_3b3)){
break;
}
_481(node);
}
node.endOfIvars=_33b;
}
node.body=[];
while(!eat(_383)){
if(_33f===_364){
_35d(_335,"Expected '@end' after '@implementation'");
}
node.body.push(_482());
}
return _465(node,"ClassDeclarationStatement");
}
break;
case _38d:
if(_31a.objj&&_31b.charCodeAt(_335)!==40){
next();
node.protocolname=_474(true);
if(_340==="<"){
next();
var _47f=[],_480=true;
node.protocols=_47f;
while(_340!==">"){
if(!_480){
_469(_3b6,"Expected ',' between protocol names");
}else{
_480=false;
}
_47f.push(_474(true));
}
next();
}
while(!eat(_383)){
if(_33f===_364){
_35d(_335,"Expected '@end' after '@protocol'");
}
if(eat(_38f)){
continue;
}
if(eat(_38e)){
while(!eat(_38f)&&_33f!==_383){
(node.optional||(node.optional=[])).push(_483());
}
}else{
(node.required||(node.required=[])).push(_483());
}
}
return _465(node,"ProtocolDeclarationStatement");
}
break;
case _384:
if(_31a.objj){
next();
if(_33f===_362){
node.localfilepath=true;
}else{
if(_33f===_392){
node.localfilepath=false;
}else{
_3e6();
}
}
node.filename=_484();
return _465(node,"ImportStatement");
}
break;
case _39f:
if(_31a.objj){
next();
return _465(node,"PreprocessStatement");
}
break;
case _387:
if(_31a.objj){
next();
node.id=_474(false);
return _465(node,"ClassStatement");
}
break;
case _388:
if(_31a.objj){
next();
node.id=_474(false);
return _465(node,"GlobalStatement");
}
break;
case _391:
if(_31a.objj){
next();
node.typedefname=_474(true);
return _465(node,"TypeDefStatement");
}
break;
}
var _485=_340,expr=_479();
if(_471===_363&&expr.type==="Identifier"&&eat(_3b8)){
for(var i=0;i<_352.length;++i){
if(_352[i].name===_485){
_35d(expr.start,"Label '"+_485+"' is already declared");
}
}
var kind=_33f.isLoop?"loop":_33f===_373?"switch":null;
_352.push({name:_485,kind:kind});
node.body=_46e();
_352.pop();
node.label=expr;
return _465(node,"LabeledStatement");
}else{
node.expression=expr;
_468();
return _465(node,"ExpressionStatement");
}
};
function _481(node){
var _486;
if(eat(_381)){
_486=true;
}
var type=_487();
if(_353&&_3d2(type.name)){
_35d(type.start,"Binding "+type.name+" in strict mode");
}
for(;;){
var decl=_42c();
if(_486){
decl.outlet=_486;
}
decl.ivartype=type;
decl.id=_474();
if(_353&&_3d2(decl.id.name)){
_35d(decl.id.start,"Binding "+decl.id.name+" in strict mode");
}
if(eat(_382)){
decl.accessors={};
if(eat(_3b4)){
if(!eat(_3b5)){
for(;;){
var _488=_474(true);
switch(_488.name){
case "property":
case "getter":
_469(_3bf,"Expected '=' after 'getter' accessor attribute");
decl.accessors[_488.name]=_474(true);
break;
case "setter":
_469(_3bf,"Expected '=' after 'setter' accessor attribute");
var _489=_474(true);
decl.accessors[_488.name]=_489;
if(eat(_3b8)){
_489.end=_33b;
}
_489.name+=":";
break;
case "readwrite":
case "readonly":
case "copy":
decl.accessors[_488.name]=true;
break;
default:
_35d(_488.start,"Unknown accessors attribute '"+_488.name+"'");
}
if(!eat(_3b6)){
break;
}
}
_469(_3b5,"Expected closing ')' after accessor attributes");
}
}
}
_465(decl,"IvarDeclaration");
node.ivardeclarations.push(decl);
if(!eat(_3b6)){
break;
}
}
_468();
};
function _48a(node){
node.methodtype=_340;
_469(_3c1,"Method declaration must start with '+' or '-'");
if(eat(_3b4)){
var _48b=_42c();
if(eat(_385)){
node.action=_465(_48b,"ObjectiveJActionType");
_48b=_42c();
}
if(!eat(_3b5)){
node.returntype=_487(_48b);
_469(_3b5,"Expected closing ')' after method return type");
}
}
var _48c=true,_48d=[],args=[];
node.selectors=_48d;
node.arguments=args;
for(;;){
if(_33f!==_3b8){
_48d.push(_474(true));
if(_48c&&_33f!==_3b8){
break;
}
}else{
_48d.push(null);
}
_469(_3b8,"Expected ':' in selector");
var _48e={};
args.push(_48e);
if(eat(_3b4)){
_48e.type=_487();
_469(_3b5,"Expected closing ')' after method argument type");
}
_48e.identifier=_474(false);
if(_33f===_3b2||_33f===_3b7){
break;
}
if(eat(_3b6)){
_469(_3bc,"Expected '...' after ',' in method declaration");
node.parameters=true;
break;
}
_48c=false;
}
};
function _482(){
var _48f=_42c();
if(_340==="+"||_340==="-"){
_48a(_48f);
eat(_3b7);
_48f.startOfBody=_34d;
var _490=_351,_491=_352;
_351=true;
_352=[];
_48f.body=_47d(true);
_351=_490;
_352=_491;
return _465(_48f,"MethodDeclarationStatement");
}else{
return _46e();
}
};
function _483(){
var _492=_42c();
_48a(_492);
_468();
return _465(_492,"MethodDeclarationStatement");
};
function _475(){
_469(_3b4,"Expected '(' before expression");
var val=_479();
_469(_3b5,"Expected closing ')' after expression");
return val;
};
function _47d(_493){
var node=_42c(),_494=true,_353=false,_495;
node.body=[];
_469(_3b2,"Expected '{' before block");
while(!eat(_3b3)){
var stmt=_46e();
node.body.push(stmt);
if(_494&&_466(stmt)){
_495=_353;
_45f(_353=true);
}
_494=false;
}
if(_353&&!_495){
_45f(false);
}
return _465(node,"BlockStatement");
};
function _476(node,init){
node.init=init;
_469(_3b7,"Expected ';' in for statement");
node.test=_33f===_3b7?null:_479();
_469(_3b7,"Expected ';' in for statement");
node.update=_33f===_3b5?null:_479();
_469(_3b5,"Expected closing ')' in for statement");
node.body=_46e();
_352.pop();
return _465(node,"ForStatement");
};
function _478(node,init){
node.left=init;
node.right=_479();
_469(_3b5,"Expected closing ')' in for statement");
node.body=_46e();
_352.pop();
return _465(node,"ForInStatement");
};
function _477(node,noIn){
node.declarations=[];
node.kind="var";
for(;;){
var decl=_42c();
decl.id=_474();
if(_353&&_3d2(decl.id.name)){
_35d(decl.id.start,"Binding "+decl.id.name+" in strict mode");
}
decl.init=eat(_3bf)?_479(true,noIn):null;
node.declarations.push(_465(decl,"VariableDeclarator"));
if(!eat(_3b6)){
break;
}
}
return _465(node,"VariableDeclaration");
};
function _479(_496,noIn){
var expr=_497(noIn);
if(!_496&&_33f===_3b6){
var node=_432(expr);
node.expressions=[expr];
while(eat(_3b6)){
node.expressions.push(_497(noIn));
}
return _465(node,"SequenceExpression");
}
return expr;
};
function _497(noIn){
var left=_498(noIn);
if(_33f.isAssign){
var node=_432(left);
node.operator=_340;
node.left=left;
next();
node.right=_497(noIn);
_46b(left);
return _465(node,"AssignmentExpression");
}
return left;
};
function _498(noIn){
var expr=_499(noIn);
if(eat(_3ba)){
var node=_432(expr);
node.test=expr;
node.consequent=_479(true);
_469(_3b8,"Expected ':' in conditional expression");
node.alternate=_479(true,noIn);
return _465(node,"ConditionalExpression");
}
return expr;
};
function _499(noIn){
return _49a(_49b(noIn),-1,noIn);
};
function _49a(left,_49c,noIn){
var prec=_33f.binop;
if(prec!=null&&(!noIn||_33f!==_37f)){
if(prec>_49c){
var node=_432(left);
node.left=left;
node.operator=_340;
next();
node.right=_49a(_49b(noIn),prec,noIn);
var node=_465(node,/&&|\|\|/.test(node.operator)?"LogicalExpression":"BinaryExpression");
return _49a(node,_49c,noIn);
}
}
return left;
};
function _49b(noIn){
if(_33f.prefix){
var node=_42c(),_49d=_33f.isUpdate;
node.operator=_340;
node.prefix=true;
next();
node.argument=_49b(noIn);
if(_49d){
_46b(node.argument);
}else{
if(_353&&node.operator==="delete"&&node.argument.type==="Identifier"){
_35d(node.start,"Deleting local variable in strict mode");
}
}
return _465(node,_49d?"UpdateExpression":"UnaryExpression");
}
var expr=_49e();
while(_33f.postfix&&!_467()){
var node=_432(expr);
node.operator=_340;
node.prefix=false;
node.argument=expr;
_46b(expr);
next();
expr=_465(node,"UpdateExpression");
}
return expr;
};
function _49e(){
return _49f(_4a0());
};
function _49f(base,_4a1){
if(eat(_3b9)){
var node=_432(base);
node.object=base;
node.property=_474(true);
node.computed=false;
return _49f(_465(node,"MemberExpression"),_4a1);
}else{
if(_31a.objj){
var _4a2=_42c();
}
if(eat(_3b0)){
var expr=_479();
if(_31a.objj&&_33f!==_3b1){
_4a2.object=expr;
_350=_4a2;
return base;
}
var node=_432(base);
node.object=base;
node.property=expr;
node.computed=true;
_469(_3b1,"Expected closing ']' in subscript");
return _49f(_465(node,"MemberExpression"),_4a1);
}else{
if(!_4a1&&eat(_3b4)){
var node=_432(base);
node.callee=base;
node.arguments=_4a3(_3b5,_33f===_3b5?null:_479(true),false);
return _49f(_465(node,"CallExpression"),_4a1);
}
}
}
return base;
};
function _4a0(){
switch(_33f){
case _37a:
var node=_42c();
next();
return _465(node,"ThisExpression");
case _363:
return _474();
case _360:
case _362:
case _361:
return _484();
case _37c:
case _37d:
case _37e:
var node=_42c();
node.value=_33f.atomValue;
node.raw=_33f.keyword;
next();
return _465(node,"Literal");
case _3b4:
var _4a4=_33d,_4a5=_33b;
next();
var val=_479();
val.start=_4a5;
val.end=_33c;
if(_31a.locations){
val.loc.start=_4a4;
val.loc.end=_33e;
}
if(_31a.ranges){
val.range=[_4a5,_33c];
}
_469(_3b5,"Expected closing ')' in expression");
return val;
case _38a:
var node=_42c(),_4a6=null;
next();
_469(_3b0,"Expected '[' at beginning of array literal");
if(_33f!==_3b1){
_4a6=_479(true,true);
}
node.elements=_4a3(_3b1,_4a6,true,true);
return _465(node,"ArrayLiteral");
case _3b0:
var node=_42c(),_4a6=null;
next();
if(_33f!==_3b6&&_33f!==_3b1){
_4a6=_479(true,true);
if(_33f!==_3b6&&_33f!==_3b1){
return _472(node,_4a6);
}
}
node.elements=_4a3(_3b1,_4a6,true,true);
return _465(node,"ArrayExpression");
case _389:
var node=_42c();
next();
var r=_4a7();
node.keys=r[0];
node.values=r[1];
return _465(node,"DictionaryLiteral");
case _3b2:
return _4a8();
case _370:
var node=_42c();
next();
return _47a(node,false);
case _379:
return _4a9();
case _386:
var node=_42c();
next();
_469(_3b4,"Expected '(' after '@selector'");
_4aa(node,_3b5);
_469(_3b5,"Expected closing ')' after selector");
return _465(node,"SelectorLiteralExpression");
case _38d:
var node=_42c();
next();
_469(_3b4,"Expected '(' after '@protocol'");
node.id=_474(true);
_469(_3b5,"Expected closing ')' after protocol name");
return _465(node,"ProtocolLiteralExpression");
case _38b:
var node=_42c();
next();
_469(_3b4,"Expected '(' after '@ref'");
node.element=_474(node,_3b5);
_469(_3b5,"Expected closing ')' after ref");
return _465(node,"Reference");
case _38c:
var node=_42c();
next();
_469(_3b4,"Expected '(' after '@deref'");
node.expr=_479(true,true);
_469(_3b5,"Expected closing ')' after deref");
return _465(node,"Dereference");
default:
if(_33f.okAsIdent){
return _474();
}
_3e6();
}
};
function _472(node,_4ab){
_4ac(node,_3b1);
if(_4ab.type==="Identifier"&&_4ab.name==="super"){
node.superObject=true;
}else{
node.object=_4ab;
}
return _465(node,"MessageSendExpression");
};
function _4aa(node,_4ad){
var _4ae=true,_4af=[];
for(;;){
if(_33f!==_3b8){
_4af.push(_474(true).name);
if(_4ae&&_33f===_4ad){
break;
}
}
_469(_3b8,"Expected ':' in selector");
_4af.push(":");
if(_33f===_4ad){
break;
}
_4ae=false;
}
node.selector=_4af.join("");
};
function _4ac(node,_4b0){
var _4b1=true,_4b2=[],args=[],_4b3=[];
node.selectors=_4b2;
node.arguments=args;
for(;;){
if(_33f!==_3b8){
_4b2.push(_474(true));
if(_4b1&&eat(_4b0)){
break;
}
}else{
_4b2.push(null);
}
_469(_3b8,"Expected ':' in selector");
args.push(_479(true,true));
if(eat(_4b0)){
break;
}
if(_33f===_3b6){
node.parameters=[];
while(eat(_3b6)){
node.parameters.push(_479(true,true));
}
eat(_4b0);
break;
}
_4b1=false;
}
};
function _4a9(){
var node=_42c();
next();
node.callee=_49f(_4a0(false),true);
if(eat(_3b4)){
node.arguments=_4a3(_3b5,_33f===_3b5?null:_479(true),false);
}else{
node.arguments=[];
}
return _465(node,"NewExpression");
};
function _4a8(){
var node=_42c(),_4b4=true,_4b5=false;
node.properties=[];
next();
while(!eat(_3b3)){
if(!_4b4){
_469(_3b6,"Expected ',' in object literal");
if(_31a.allowTrailingCommas&&eat(_3b3)){
break;
}
}else{
_4b4=false;
}
var prop={key:_4b6()},_4b7=false,kind;
if(eat(_3b8)){
prop.value=_479(true);
kind=prop.kind="init";
}else{
if(_31a.ecmaVersion>=5&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")){
_4b7=_4b5=true;
kind=prop.kind=prop.key.name;
prop.key=_4b6();
if(_33f!==_3b4){
_3e6();
}
prop.value=_47a(_42c(),false);
}else{
_3e6();
}
}
if(prop.key.type==="Identifier"&&(_353||_4b5)){
for(var i=0;i<node.properties.length;++i){
var _4b8=node.properties[i];
if(_4b8.key.name===prop.key.name){
var _4b9=kind==_4b8.kind||_4b7&&_4b8.kind==="init"||kind==="init"&&(_4b8.kind==="get"||_4b8.kind==="set");
if(_4b9&&!_353&&kind==="init"&&_4b8.kind==="init"){
_4b9=false;
}
if(_4b9){
_35d(prop.key.start,"Redefinition of property");
}
}
}
}
node.properties.push(prop);
}
return _465(node,"ObjectExpression");
};
function _4b6(){
if(_33f===_360||_33f===_362){
return _4a0();
}
return _474(true);
};
function _47a(node,_4ba){
if(_33f===_363){
node.id=_474();
}else{
if(_4ba){
_3e6();
}else{
node.id=null;
}
}
node.params=[];
var _4bb=true;
_469(_3b4,"Expected '(' before function parameters");
while(!eat(_3b5)){
if(!_4bb){
_469(_3b6,"Expected ',' between function parameters");
}else{
_4bb=false;
}
node.params.push(_474());
}
var _4bc=_351,_4bd=_352;
_351=true;
_352=[];
node.body=_47d(true);
_351=_4bc;
_352=_4bd;
if(_353||node.body.body.length&&_466(node.body.body[0])){
for(var i=node.id?-1:0;i<node.params.length;++i){
var id=i<0?node.id:node.params[i];
if(_3d1(id.name)||_3d2(id.name)){
_35d(id.start,"Defining '"+id.name+"' in strict mode");
}
if(i>=0){
for(var j=0;j<i;++j){
if(id.name===node.params[j].name){
_35d(id.start,"Argument name clash in strict mode");
}
}
}
}
}
return _465(node,_4ba?"FunctionDeclaration":"FunctionExpression");
};
function _4a3(_4be,_4bf,_4c0,_4c1){
if(_4bf&&eat(_4be)){
return [_4bf];
}
var elts=[],_4c2=true;
while(!eat(_4be)){
if(_4c2){
_4c2=false;
if(_4c1&&_33f===_3b6&&!_4bf){
elts.push(null);
}else{
elts.push(_4bf);
}
}else{
_469(_3b6,"Expected ',' between expressions");
if(_4c0&&_31a.allowTrailingCommas&&eat(_4be)){
break;
}
if(_4c1&&_33f===_3b6){
elts.push(null);
}else{
elts.push(_479(true));
}
}
}
return elts;
};
function _4a7(){
_469(_3b2,"Expected '{' before dictionary");
var keys=[],_4c3=[],_4c4=true;
while(!eat(_3b3)){
if(!_4c4){
_469(_3b6,"Expected ',' between expressions");
if(_31a.allowTrailingCommas&&eat(_3b3)){
break;
}
}
keys.push(_479(true,true));
_469(_3b8,"Expected ':' between dictionary key and value");
_4c3.push(_479(true,true));
_4c4=false;
}
return [keys,_4c3];
};
function _474(_4c5){
var node=_42c();
node.name=_33f===_363?_340:(((_4c5&&!_31a.forbidReserved)||_33f.okAsIdent)&&_33f.keyword)||_3e6();
next();
return _465(node,"Identifier");
};
function _484(){
var node=_42c();
node.value=_340;
node.raw=_34a.slice(_33b,_33c);
next();
return _465(node,"Literal");
};
function _487(_4c6){
var node=_4c6?_432(_4c6):_42c();
if(_33f===_363){
node.name=_340;
node.typeisclass=true;
next();
}else{
node.typeisclass=false;
node.name=_33f.keyword;
if(!eat(_37b)){
if(eat(_39a)){
if(_340==="<"){
var _4c7=true,_4c8=[];
node.protocols=_4c8;
do{
next();
if(_4c7){
_4c7=false;
}else{
eat(_3b6);
}
_4c8.push(_474(true));
}while(_340!==">");
next();
}
}else{
var _4c9;
if(eat(_39d)||eat(_39b)||eat(_39c)||eat(_39e)){
_4c9=_33f.keyword;
}else{
if(eat(_394)||eat(_393)){
_4c9=_33f.keyword||true;
}
if(eat(_396)||eat(_395)||eat(_397)){
if(_4c9){
node.name+=" "+_4c9;
}
_4c9=_33f.keyword||true;
}else{
if(eat(_398)){
if(_4c9){
node.name+=" "+_4c9;
}
_4c9=_33f.keyword||true;
}
if(eat(_399)){
if(_4c9){
node.name+=" "+_4c9;
}
_4c9=_33f.keyword||true;
if(eat(_399)){
node.name+=" "+_4c9;
}
}
}
if(!_4c9){
node.name=(!_31a.forbidReserved&&_33f.keyword)||_3e6();
node.typeisclass=true;
next();
}
}
}
}
}
return _465(node,"ObjectiveJType");
};
})(typeof _2==="undefined"?(self.acorn={}):_2.acorn);
if(!_2.acorn){
_2.acorn={};
_2.acorn.walk={};
}
(function(_4ca){
"use strict";
_4ca.simple=function(node,_4cb,base,_4cc){
if(!base){
base=_4ca;
}
function c(node,st,_4cd){
var type=_4cd||node.type,_4ce=_4cb[type];
if(_4ce){
_4ce(node,st);
}
base[type](node,st,c);
};
c(node,_4cc);
};
_4ca.recursive=function(node,_4cf,_4d0,base){
var _4d1=_4ca.make(_4d0,base);
function c(node,st,_4d2){
return _4d1[_4d2||node.type](node,st,c);
};
return c(node,_4cf);
};
_4ca.make=function(_4d3,base){
if(!base){
base=_4ca;
}
var _4d4={};
for(var type in base){
_4d4[type]=base[type];
}
for(var type in _4d3){
_4d4[type]=_4d3[type];
}
return _4d4;
};
function _4d5(node,st,c){
c(node,st);
};
function _4d6(node,st,c){
};
_4ca.Program=_4ca.BlockStatement=function(node,st,c){
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
};
_4ca.Statement=_4d5;
_4ca.EmptyStatement=_4d6;
_4ca.ExpressionStatement=function(node,st,c){
c(node.expression,st,"Expression");
};
_4ca.IfStatement=function(node,st,c){
c(node.test,st,"Expression");
c(node.consequent,st,"Statement");
if(node.alternate){
c(node.alternate,st,"Statement");
}
};
_4ca.LabeledStatement=function(node,st,c){
c(node.body,st,"Statement");
};
_4ca.BreakStatement=_4ca.ContinueStatement=_4d6;
_4ca.WithStatement=function(node,st,c){
c(node.object,st,"Expression");
c(node.body,st,"Statement");
};
_4ca.SwitchStatement=function(node,st,c){
c(node.discriminant,st,"Expression");
for(var i=0;i<node.cases.length;++i){
var cs=node.cases[i];
if(cs.test){
c(cs.test,st,"Expression");
}
for(var j=0;j<cs.consequent.length;++j){
c(cs.consequent[j],st,"Statement");
}
}
};
_4ca.ReturnStatement=function(node,st,c){
if(node.argument){
c(node.argument,st,"Expression");
}
};
_4ca.ThrowStatement=function(node,st,c){
c(node.argument,st,"Expression");
};
_4ca.TryStatement=function(node,st,c){
c(node.block,st,"Statement");
for(var i=0;i<node.handlers.length;++i){
c(node.handlers[i].body,st,"ScopeBody");
}
if(node.finalizer){
c(node.finalizer,st,"Statement");
}
};
_4ca.WhileStatement=function(node,st,c){
c(node.test,st,"Expression");
c(node.body,st,"Statement");
};
_4ca.DoWhileStatement=function(node,st,c){
c(node.body,st,"Statement");
c(node.test,st,"Expression");
};
_4ca.ForStatement=function(node,st,c){
if(node.init){
c(node.init,st,"ForInit");
}
if(node.test){
c(node.test,st,"Expression");
}
if(node.update){
c(node.update,st,"Expression");
}
c(node.body,st,"Statement");
};
_4ca.ForInStatement=function(node,st,c){
c(node.left,st,"ForInit");
c(node.right,st,"Expression");
c(node.body,st,"Statement");
};
_4ca.ForInit=function(node,st,c){
if(node.type=="VariableDeclaration"){
c(node,st);
}else{
c(node,st,"Expression");
}
};
_4ca.DebuggerStatement=_4d6;
_4ca.FunctionDeclaration=function(node,st,c){
c(node,st,"Function");
};
_4ca.VariableDeclaration=function(node,st,c){
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i];
if(decl.init){
c(decl.init,st,"Expression");
}
}
};
_4ca.Function=function(node,st,c){
c(node.body,st,"ScopeBody");
};
_4ca.ScopeBody=function(node,st,c){
c(node,st,"Statement");
};
_4ca.Expression=_4d5;
_4ca.ThisExpression=_4d6;
_4ca.ArrayExpression=_4ca.ArrayLiteral=function(node,st,c){
for(var i=0;i<node.elements.length;++i){
var elt=node.elements[i];
if(elt){
c(elt,st,"Expression");
}
}
};
_4ca.DictionaryLiteral=function(node,st,c){
for(var i=0;i<node.keys.length;i++){
var key=node.keys[i];
c(key,st,"Expression");
var _4d7=node.values[i];
c(_4d7,st,"Expression");
}
};
_4ca.ObjectExpression=function(node,st,c){
for(var i=0;i<node.properties.length;++i){
c(node.properties[i].value,st,"Expression");
}
};
_4ca.FunctionExpression=_4ca.FunctionDeclaration;
_4ca.SequenceExpression=function(node,st,c){
for(var i=0;i<node.expressions.length;++i){
c(node.expressions[i],st,"Expression");
}
};
_4ca.UnaryExpression=_4ca.UpdateExpression=function(node,st,c){
c(node.argument,st,"Expression");
};
_4ca.BinaryExpression=_4ca.AssignmentExpression=_4ca.LogicalExpression=function(node,st,c){
c(node.left,st,"Expression");
c(node.right,st,"Expression");
};
_4ca.ConditionalExpression=function(node,st,c){
c(node.test,st,"Expression");
c(node.consequent,st,"Expression");
c(node.alternate,st,"Expression");
};
_4ca.NewExpression=_4ca.CallExpression=function(node,st,c){
c(node.callee,st,"Expression");
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
c(node.arguments[i],st,"Expression");
}
}
};
_4ca.MemberExpression=function(node,st,c){
c(node.object,st,"Expression");
if(node.computed){
c(node.property,st,"Expression");
}
};
_4ca.Identifier=_4ca.Literal=_4d6;
_4ca.ClassDeclarationStatement=function(node,st,c){
if(node.ivardeclarations){
for(var i=0;i<node.ivardeclarations.length;++i){
c(node.ivardeclarations[i],st,"IvarDeclaration");
}
}
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
};
_4ca.ImportStatement=_4d6;
_4ca.IvarDeclaration=_4d6;
_4ca.PreprocessStatement=_4d6;
_4ca.ClassStatement=_4d6;
_4ca.GlobalStatement=_4d6;
_4ca.ProtocolDeclarationStatement=function(node,st,c){
if(node.required){
for(var i=0;i<node.required.length;++i){
c(node.required[i],st,"Statement");
}
}
if(node.optional){
for(var i=0;i<node.optional.length;++i){
c(node.optional[i],st,"Statement");
}
}
};
_4ca.TypeDefStatement=_4d6;
_4ca.MethodDeclarationStatement=function(node,st,c){
var body=node.body;
if(body){
c(body,st,"Statement");
}
};
_4ca.MessageSendExpression=function(node,st,c){
if(!node.superObject){
c(node.object,st,"Expression");
}
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
c(node.arguments[i],st,"Expression");
}
}
if(node.parameters){
for(var i=0;i<node.parameters.length;++i){
c(node.parameters[i],st,"Expression");
}
}
};
_4ca.SelectorLiteralExpression=_4d6;
_4ca.ProtocolLiteralExpression=_4d6;
_4ca.Reference=function(node,st,c){
c(node.element,st,"Identifier");
};
_4ca.Dereference=function(node,st,c){
c(node.expr,st,"Expression");
};
function _4d8(prev){
return {vars:Object.create(null),prev:prev};
};
_4ca.scopeVisitor=_4ca.make({Function:function(node,_4d9,c){
var _4da=_4d8(_4d9);
for(var i=0;i<node.params.length;++i){
_4da.vars[node.params[i].name]={type:"argument",node:node.params[i]};
}
if(node.id){
var decl=node.type=="FunctionDeclaration";
(decl?_4d9:_4da).vars[node.id.name]={type:decl?"function":"function name",node:node.id};
}
c(node.body,_4da,"ScopeBody");
},TryStatement:function(node,_4db,c){
c(node.block,_4db,"Statement");
for(var i=0;i<node.handlers.length;++i){
var _4dc=node.handlers[i],_4dd=_4d8(_4db);
_4dd.vars[_4dc.param.name]={type:"catch clause",node:_4dc.param};
c(_4dc.body,_4dd,"ScopeBody");
}
if(node.finalizer){
c(node.finalizer,_4db,"Statement");
}
},VariableDeclaration:function(node,_4de,c){
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i];
_4de.vars[decl.id.name]={type:"var",node:decl.id};
if(decl.init){
c(decl.init,_4de,"Expression");
}
}
}});
})(typeof _2=="undefined"?acorn.walk={}:_2.acorn.walk);
var _4df=function(prev,base){
this.vars=Object.create(null);
if(base){
for(var key in base){
this[key]=base[key];
}
}
this.prev=prev;
if(prev){
this.compiler=prev.compiler;
}
};
_4df.prototype.compiler=function(){
return this.compiler;
};
_4df.prototype.rootScope=function(){
return this.prev?this.prev.rootScope():this;
};
_4df.prototype.isRootScope=function(){
return !this.prev;
};
_4df.prototype.currentClassName=function(){
return this.classDef?this.classDef.name:this.prev?this.prev.currentClassName():null;
};
_4df.prototype.currentProtocolName=function(){
return this.protocolDef?this.protocolDef.name:this.prev?this.prev.currentProtocolName():null;
};
_4df.prototype.getIvarForCurrentClass=function(_4e0){
if(this.ivars){
var ivar=this.ivars[_4e0];
if(ivar){
return ivar;
}
}
var prev=this.prev;
if(prev&&!this.classDef){
return prev.getIvarForCurrentClass(_4e0);
}
return null;
};
_4df.prototype.getLvar=function(_4e1,_4e2){
if(this.vars){
var lvar=this.vars[_4e1];
if(lvar){
return lvar;
}
}
var prev=this.prev;
if(prev&&(!_4e2||!this.methodType)){
return prev.getLvar(_4e1,_4e2);
}
return null;
};
_4df.prototype.currentMethodType=function(){
return this.methodType?this.methodType:this.prev?this.prev.currentMethodType():null;
};
_4df.prototype.copyAddedSelfToIvarsToParent=function(){
if(this.prev&&this.addedSelfToIvars){
for(var key in this.addedSelfToIvars){
var _4e3=this.addedSelfToIvars[key],_4e4=(this.prev.addedSelfToIvars||(this.prev.addedSelfToIvars=Object.create(null)))[key]||(this.prev.addedSelfToIvars[key]=[]);
_4e4.push.apply(_4e4,_4e3);
}
}
};
_4df.prototype.addMaybeWarning=function(_4e5){
var _4e6=this.rootScope();
(_4e6._maybeWarnings||(_4e6._maybeWarnings=[])).push(_4e5);
};
_4df.prototype.maybeWarnings=function(){
return this.rootScope()._maybeWarnings;
};
var _4e7=function(_4e8,node,code){
this.message=_4e9(_4e8,node,code);
this.node=node;
};
_4e7.prototype.checkIfWarning=function(st){
var _4ea=this.node.name;
return !st.getLvar(_4ea)&&typeof _1[_4ea]==="undefined"&&typeof window[_4ea]==="undefined"&&!st.compiler.getClassDef(_4ea);
};
function _2bb(){
this.atoms=[];
};
_2bb.prototype.toString=function(){
return this.atoms.join("");
};
_2bb.prototype.concat=function(_4eb){
this.atoms.push(_4eb);
};
_2bb.prototype.isEmpty=function(){
return this.atoms.length!==0;
};
var _4ec=function(_4ed,name,_4ee,_4ef,_4f0,_4f1,_4f2){
this.name=name;
if(_4ee){
this.superClass=_4ee;
}
if(_4ef){
this.ivars=_4ef;
}
if(_4ed){
this.instanceMethods=_4f0||Object.create(null);
this.classMethods=_4f1||Object.create(null);
}
if(_4f2){
this.protocols=_4f2;
}
};
_4ec.prototype.addInstanceMethod=function(_4f3){
this.instanceMethods[_4f3.name]=_4f3;
};
_4ec.prototype.addClassMethod=function(_4f4){
this.classMethods[_4f4.name]=_4f4;
};
_4ec.prototype.listOfNotImplementedMethodsForProtocols=function(_4f5){
var _4f6=[],_4f7=this.getInstanceMethods(),_4f8=this.getClassMethods();
for(var i=0,size=_4f5.length;i<size;i++){
var _4f9=_4f5[i],_4fa=_4f9.requiredInstanceMethods,_4fb=_4f9.requiredClassMethods,_4fc=_4f9.protocols;
if(_4fa){
for(var _4fd in _4fa){
var _4fe=_4fa[_4fd];
if(!_4f7[_4fd]){
_4f6.push({"methodDef":_4fe,"protocolDef":_4f9});
}
}
}
if(_4fb){
for(var _4fd in _4fb){
var _4fe=_4fb[_4fd];
if(!_4f8[_4fd]){
_4f6.push({"methodDef":_4fe,"protocolDef":_4f9});
}
}
}
if(_4fc){
_4f6=_4f6.concat(this.listOfNotImplementedMethodsForProtocols(_4fc));
}
}
return _4f6;
};
_4ec.prototype.getInstanceMethod=function(name){
var _4ff=this.instanceMethods;
if(_4ff){
var _500=_4ff[name];
if(_500){
return _500;
}
}
var _501=this.superClass;
if(_501){
return _501.getInstanceMethod(name);
}
return null;
};
_4ec.prototype.getClassMethod=function(name){
var _502=this.classMethods;
if(_502){
var _503=_502[name];
if(_503){
return _503;
}
}
var _504=this.superClass;
if(_504){
return _504.getClassMethod(name);
}
return null;
};
_4ec.prototype.getInstanceMethods=function(){
var _505=this.instanceMethods;
if(_505){
var _506=this.superClass,_507=Object.create(null);
if(_506){
var _508=_506.getInstanceMethods();
for(var _509 in _508){
_507[_509]=_508[_509];
}
}
for(var _509 in _505){
_507[_509]=_505[_509];
}
return _507;
}
return [];
};
_4ec.prototype.getClassMethods=function(){
var _50a=this.classMethods;
if(_50a){
var _50b=this.superClass,_50c=Object.create(null);
if(_50b){
var _50d=_50b.getClassMethods();
for(var _50e in _50d){
_50c[_50e]=_50d[_50e];
}
}
for(var _50e in _50a){
_50c[_50e]=_50a[_50e];
}
return _50c;
}
return [];
};
var _50f=function(name,_510,_511,_512){
this.name=name;
this.protocols=_510;
if(_511){
this.requiredInstanceMethods=_511;
}
if(_512){
this.requiredClassMethods=_512;
}
};
_50f.prototype.addInstanceMethod=function(_513){
(this.requiredInstanceMethods||(this.requiredInstanceMethods=Object.create(null)))[_513.name]=_513;
};
_50f.prototype.addClassMethod=function(_514){
(this.requiredClassMethods||(this.requiredClassMethods=Object.create(null)))[_514.name]=_514;
};
_50f.prototype.getInstanceMethod=function(name){
var _515=this.requiredInstanceMethods;
if(_515){
var _516=_515[name];
if(_516){
return _516;
}
}
var _517=this.protocols;
for(var i=0,size=_517.length;i<size;i++){
var _518=_517[i],_516=_518.getInstanceMethod(name);
if(_516){
return _516;
}
}
return null;
};
_50f.prototype.getClassMethod=function(name){
var _519=this.requiredClassMethods;
if(_519){
var _51a=_519[name];
if(_51a){
return _51a;
}
}
var _51b=this.protocols;
for(var i=0,size=_51b.length;i<size;i++){
var _51c=_51b[i],_51a=_51c.getInstanceMethod(name);
if(_51a){
return _51a;
}
}
return null;
};
var _51d=function(name){
this.name=name;
};
var _51e=function(name,_51f){
this.name=name;
this.types=_51f;
};
var _520="";
var _521=_2.acorn.makePredicate("self _cmd undefined localStorage arguments");
var _522=_2.acorn.makePredicate("delete in instanceof new typeof void");
var _523=_2.acorn.makePredicate("LogicalExpression BinaryExpression");
var _524=_2.acorn.makePredicate("in instanceof");
var _525=function(_526,aURL,_527,pass,_528,_529,_52a){
this.source=_526;
this.URL=new CFURL(aURL);
this.pass=pass;
this.jsBuffer=new _2bb();
this.imBuffer=null;
this.cmBuffer=null;
this.warnings=[];
try{
this.tokens=_2.acorn.parse(_526);
}
catch(e){
if(e.lineStart!=null){
var _52b=this.prettifyMessage(e,"ERROR");
console.log(_52b);
}
throw e;
}
this.dependencies=[];
this.flags=_527|_525.Flags.IncludeDebugSymbols;
this.classDefs=_528?_528:Object.create(null);
this.protocolDefs=_529?_529:Object.create(null);
this.typeDefs=_52a?_52a:Object.create(null);
this.lastPos=0;
if(_520&_525.Flags.Generate){
this.generate=true;
}
this.generate=true;
_52c(this.tokens,new _4df(null,{compiler:this}),pass===2?_52d:_52e);
};
_2.ObjJAcornCompiler=_525;
_2.ObjJAcornCompiler.compileToExecutable=function(_52f,aURL,_530){
_525.currentCompileFile=aURL;
return new _525(_52f,aURL,_530,2).executable();
};
_2.ObjJAcornCompiler.compileToIMBuffer=function(_531,aURL,_532,_533,_534,_535){
return new _525(_531,aURL,_532,2,_533,_534,_535).IMBuffer();
};
_2.ObjJAcornCompiler.compileFileDependencies=function(_536,aURL,_537){
_525.currentCompileFile=aURL;
return new _525(_536,aURL,_537,1).executable();
};
_525.prototype.compilePass2=function(){
var _538=[];
_525.currentCompileFile=this.URL;
this.pass=2;
this.jsBuffer=new _2bb();
this.warnings=[];
_52c(this.tokens,new _4df(null,{compiler:this}),_52d);
for(var i=0;i<this.warnings.length;i++){
var _539=this.warnings[i],type="WARNING";
var _53a=this.prettifyMessage(_539,type);
console.log(_53a);
}
if(_538.length&&_2.outputFormatInXML){
print(CFPropertyListCreateXMLData(_538,kCFPropertyListXMLFormat_v1_0).rawString());
}
return this.jsBuffer.toString();
};
var _520="";
_2.setCurrentCompilerFlags=function(_53b){
_520=_53b;
};
_2.currentCompilerFlags=function(_53c){
return _520;
};
_525.Flags={};
_525.Flags.IncludeDebugSymbols=1<<0;
_525.Flags.IncludeTypeSignatures=1<<1;
_525.Flags.Generate=1<<2;
_525.prototype.addWarning=function(_53d){
this.warnings.push(_53d);
};
_525.prototype.getIvarForClass=function(_53e,_53f){
var ivar=_53f.getIvarForCurrentClass(_53e);
if(ivar){
return ivar;
}
var c=this.getClassDef(_53f.currentClassName());
while(c){
var _540=c.ivars;
if(_540){
var _541=_540[_53e];
if(_541){
return _541;
}
}
c=c.superClass;
}
};
_525.prototype.getClassDef=function(_542){
if(!_542){
return null;
}
var c=this.classDefs[_542];
if(c){
return c;
}
if(typeof objj_getClass==="function"){
var _543=objj_getClass(_542);
if(_543){
var _544=class_copyIvarList(_543),_545=_544.length,_546=Object.create(null),_547=class_copyProtocolList(_543),_548=_547.length,_549=Object.create(null),_54a=_525.methodDefsFromMethodList(class_copyMethodList(_543)),_54b=_525.methodDefsFromMethodList(class_copyMethodList(_543.isa)),_54c=class_getSuperclass(_543);
for(var i=0;i<_545;i++){
var ivar=_544[i];
_546[ivar.name]={"type":ivar.type,"name":ivar.name};
}
for(var i=0;i<_548;i++){
var _54d=_547[i],_54e=protocol_getName(_54d),_54f=this.getProtocolDef(_54e);
_549[_54e]=_54f;
}
c=new _4ec(true,_542,_54c?this.getClassDef(_54c.name):null,_546,_54a,_54b,_549);
this.classDefs[_542]=c;
return c;
}
}
return null;
};
_525.prototype.getProtocolDef=function(_550){
if(!_550){
return null;
}
var p=this.protocolDefs[_550];
if(p){
return p;
}
if(typeof objj_getProtocol==="function"){
var _551=objj_getProtocol(_550);
if(_551){
var _552=protocol_getName(_551),_553=protocol_copyMethodDescriptionList(_551,true,true),_554=_525.methodDefsFromMethodList(_553),_555=protocol_copyMethodDescriptionList(_551,true,false),_556=_525.methodDefsFromMethodList(_555),_557=_551.protocols,_558=[];
if(_557){
for(var i=0,size=_557.length;i<size;i++){
_558.push(compiler.getProtocolDef(_557[i].name));
}
}
p=new _50f(_552,_558,_554,_556);
this.protocolDefs[_550]=p;
return p;
}
}
return null;
};
_525.prototype.getTypeDef=function(_559){
if(!_559){
return null;
}
var t=this.typeDefs[_559];
if(t){
return t;
}
if(typeof objj_getTypeDef==="function"){
var _55a=objj_getTypeDef(_559);
if(_55a){
var _55b=typeDef_getName(_55a);
t=new _51d(_55b);
this.typeDefs[_55b]=t;
return t;
}
}
return null;
};
_525.methodDefsFromMethodList=function(_55c){
var _55d=_55c.length,_55e=Object.create(null);
for(var i=0;i<_55d;i++){
var _55f=_55c[i],_560=method_getName(_55f);
_55e[_560]=new _51e(_560,_55f.types);
}
return _55e;
};
_525.prototype.executable=function(){
if(!this._executable){
this._executable=new _2ca(this.jsBuffer?this.jsBuffer.toString():null,this.dependencies,this.URL,null,this);
}
return this._executable;
};
_525.prototype.IMBuffer=function(){
return this.imBuffer;
};
_525.prototype.JSBuffer=function(){
return this.jsBuffer;
};
_525.prototype.prettifyMessage=function(_561,_562){
var line=this.source.substring(_561.lineStart,_561.lineEnd),_563="\n"+line;
_563+=(new Array(_561.column+1)).join(" ");
_563+=(new Array(Math.min(1,line.length)+1)).join("^")+"\n";
_563+=_562+" line "+_561.line+" in "+this.URL+": "+_561.message;
return _563;
};
_525.prototype.error_message=function(_564,node){
var pos=_2.acorn.getLineInfo(this.source,node.start),_565={message:_564,line:pos.line,column:pos.column,lineStart:pos.lineStart,lineEnd:pos.lineEnd},_566=new SyntaxError(this.prettifyMessage(_565,"ERROR"));
_566.line=pos.line;
_566.path=this.URL.path();
return _566;
};
_525.prototype.pushImport=function(url){
if(!_525.importStack){
_525.importStack=[];
}
_525.importStack.push(url);
};
_525.prototype.popImport=function(){
_525.importStack.pop();
};
function _4e9(_567,node,code){
var _568=_2.acorn.getLineInfo(code,node.start);
_568.message=_567;
return _568;
};
function _52c(node,_569,_56a){
function c(node,st,_56b){
_56a[_56b||node.type](node,st,c);
};
c(node,_569);
};
function _56c(node){
switch(node.type){
case "Literal":
case "Identifier":
return true;
case "ArrayExpression":
for(var i=0;i<node.elements.length;++i){
if(!_56c(node.elements[i])){
return false;
}
}
return true;
case "DictionaryLiteral":
for(var i=0;i<node.keys.length;++i){
if(!_56c(node.keys[i])){
return false;
}
if(!_56c(node.values[i])){
return false;
}
}
return true;
case "ObjectExpression":
for(var i=0;i<node.properties.length;++i){
if(!_56c(node.properties[i].value)){
return false;
}
}
return true;
case "FunctionExpression":
for(var i=0;i<node.params.length;++i){
if(!_56c(node.params[i])){
return false;
}
}
return true;
case "SequenceExpression":
for(var i=0;i<node.expressions.length;++i){
if(!_56c(node.expressions[i])){
return false;
}
}
return true;
case "UnaryExpression":
return _56c(node.argument);
case "BinaryExpression":
return _56c(node.left)&&_56c(node.right);
case "ConditionalExpression":
return _56c(node.test)&&_56c(node.consequent)&&_56c(node.alternate);
case "MemberExpression":
return _56c(node.object)&&(!node.computed||_56c(node.property));
case "Dereference":
return _56c(node.expr);
case "Reference":
return _56c(node.element);
default:
return false;
}
};
function _56d(st,node){
if(!_56c(node)){
throw st.compiler.error_message("Dereference of expression with side effects",node);
}
};
function _56e(c){
return function(node,st,_56f){
st.compiler.jsBuffer.concat("(");
c(node,st,_56f);
st.compiler.jsBuffer.concat(")");
};
};
var _570={"*":3,"/":3,"%":3,"+":4,"-":4,"<<":5,">>":5,">>>":5,"<":6,"<=":6,">":6,">=":6,"in":6,"instanceof":6,"==":7,"!=":7,"===":7,"!==":7,"&":8,"^":9,"|":10,"&&":11,"||":12};
var _571={MemberExpression:0,CallExpression:1,NewExpression:2,FunctionExpression:3,UnaryExpression:4,UpdateExpression:4,BinaryExpression:5,LogicalExpression:6,ConditionalExpression:7,AssignmentExpression:8};
function _572(node,_573,_574){
var _575=node.type,_572=_571[_575]||-1,_576=_571[_573.type]||-1,_577,_578;
return _572<_576||(_572===_576&&_523(_575)&&((_577=_570[node.operator])<(_578=_570[_573.operator])||(_574&&_577===_578)));
};
var _52e=_2.acorn.walk.make({ImportStatement:function(node,st,c){
var _579=node.filename.value;
st.compiler.dependencies.push(new _2f9(new CFURL(_579),node.localfilepath));
}});
var _57a=4;
var _57b=Array(_57a+1).join(" ");
var _57c="";
var _52d=_2.acorn.walk.make({Program:function(node,st,c){
var _57d=st.compiler,_57e=_57d.generate;
_57c="";
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
if(!_57e){
_57d.jsBuffer.concat(_57d.source.substring(_57d.lastPos,node.end));
}
var _57f=st.maybeWarnings();
if(_57f){
for(var i=0;i<_57f.length;i++){
var _580=_57f[i];
if(_580.checkIfWarning(st)){
_57d.addWarning(_580.message);
}
}
}
},BlockStatement:function(node,st,c){
var _581=st.compiler,_582=_581.generate,_583=st.endOfScopeBody,_584;
if(_583){
delete st.endOfScopeBody;
}
if(_582){
st.indentBlockLevel=typeof st.indentBlockLevel==="undefined"?0:st.indentBlockLevel+1;
_584=_581.jsBuffer;
_584.concat(_57c.substring(_57a));
_584.concat("{\n");
}
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
if(_582){
var _585=st.maxReceiverLevel;
if(_583&&_585){
_584.concat(_57c);
_584.concat("var ");
for(var i=0;i<_585;i++){
if(i){
_584.concat(", ");
}
_584.concat("___r");
_584.concat((i+1)+"");
}
_584.concat(";\n");
}
_584.concat(_57c.substring(_57a));
_584.concat("}");
if(st.isDecl||st.indentBlockLevel>0){
_584.concat("\n");
}
st.indentBlockLevel--;
}
},ExpressionStatement:function(node,st,c){
var _586=st.compiler,_587=_586.generate;
if(_587){
_586.jsBuffer.concat(_57c);
}
c(node.expression,st,"Expression");
if(_587){
_586.jsBuffer.concat(";\n");
}
},IfStatement:function(node,st,c){
var _588=st.compiler,_589=_588.generate,_58a;
if(_589){
_58a=_588.jsBuffer;
if(!st.superNodeIsElse){
_58a.concat(_57c);
}else{
delete st.superNodeIsElse;
}
_58a.concat("if (");
}
c(node.test,st,"Expression");
if(_589){
_58a.concat(node.consequent.type==="EmptyStatement"?");\n":")\n");
}
_57c+=_57b;
c(node.consequent,st,"Statement");
_57c=_57c.substring(_57a);
var _58b=node.alternate;
if(_58b){
var _58c=_58b.type!=="IfStatement";
if(_589){
var _58d=_58b.type==="EmptyStatement";
_58a.concat(_57c);
_58a.concat(_58c?_58d?"else;\n":"else\n":"else ");
}
if(_58c){
_57c+=_57b;
}else{
st.superNodeIsElse=true;
}
c(_58b,st,"Statement");
if(_58c){
_57c=_57c.substring(_57a);
}
}
},LabeledStatement:function(node,st,c){
var _58e=st.compiler;
if(_58e.generate){
var _58f=_58e.jsBuffer;
_58f.concat(_57c);
_58f.concat(node.label.name);
_58f.concat(": ");
}
c(node.body,st,"Statement");
},BreakStatement:function(node,st,c){
var _590=st.compiler;
if(_590.generate){
_590.jsBuffer.concat(_57c);
if(node.label){
_590.jsBuffer.concat("break ");
_590.jsBuffer.concat(node.label.name);
_590.jsBuffer.concat(";\n");
}else{
_590.jsBuffer.concat("break;\n");
}
}
},ContinueStatement:function(node,st,c){
var _591=st.compiler;
if(_591.generate){
var _592=_591.jsBuffer;
_592.concat(_57c);
if(node.label){
_592.concat("continue ");
_592.concat(node.label.name);
_592.concat(";\n");
}else{
_592.concat("continue;\n");
}
}
},WithStatement:function(node,st,c){
var _593=st.compiler,_594=_593.generate,_595;
if(_594){
_595=_593.jsBuffer;
_595.concat(_57c);
_595.concat("with(");
}
c(node.object,st,"Expression");
if(_594){
_595.concat(")\n");
}
_57c+=_57b;
c(node.body,st,"Statement");
_57c=_57c.substring(_57a);
},SwitchStatement:function(node,st,c){
var _596=st.compiler,_597=_596.generate,_598;
if(_597){
_598=_596.jsBuffer;
_598.concat(_57c);
_598.concat("switch(");
}
c(node.discriminant,st,"Expression");
if(_597){
_598.concat(") {\n");
}
for(var i=0;i<node.cases.length;++i){
var cs=node.cases[i];
if(cs.test){
if(_597){
_598.concat(_57c);
_598.concat("case ");
}
c(cs.test,st,"Expression");
if(_597){
_598.concat(":\n");
}
}else{
if(_597){
_598.concat("default:\n");
}
}
_57c+=_57b;
for(var j=0;j<cs.consequent.length;++j){
c(cs.consequent[j],st,"Statement");
}
_57c=_57c.substring(_57a);
}
if(_597){
_598.concat(_57c);
_598.concat("}\n");
}
},ReturnStatement:function(node,st,c){
var _599=st.compiler,_59a=_599.generate,_59b;
if(_59a){
_59b=_599.jsBuffer;
_59b.concat(_57c);
_59b.concat("return");
}
if(node.argument){
if(_59a){
_59b.concat(" ");
}
c(node.argument,st,"Expression");
}
if(_59a){
_59b.concat(";\n");
}
},ThrowStatement:function(node,st,c){
var _59c=st.compiler,_59d=_59c.generate,_59e;
if(_59d){
_59e=_59c.jsBuffer;
_59e.concat(_57c);
_59e.concat("throw ");
}
c(node.argument,st,"Expression");
if(_59d){
_59e.concat(";\n");
}
},TryStatement:function(node,st,c){
var _59f=st.compiler,_5a0=_59f.generate,_5a1;
if(_5a0){
_5a1=_59f.jsBuffer;
_5a1.concat(_57c);
_5a1.concat("try");
}
_57c+=_57b;
c(node.block,st,"Statement");
_57c=_57c.substring(_57a);
for(var i=0;i<node.handlers.length;++i){
var _5a2=node.handlers[i],_5a3=new _4df(st),_5a4=_5a2.param,name=_5a4.name;
_5a3.vars[name]={type:"catch clause",node:_5a4};
if(_5a0){
_5a1.concat(_57c);
_5a1.concat("catch(");
_5a1.concat(name);
_5a1.concat(") ");
}
_57c+=_57b;
_5a3.endOfScopeBody=true;
c(_5a2.body,_5a3,"ScopeBody");
_57c=_57c.substring(_57a);
_5a3.copyAddedSelfToIvarsToParent();
}
if(node.finalizer){
if(_5a0){
_5a1.concat(_57c);
_5a1.concat("finally ");
}
_57c+=_57b;
c(node.finalizer,st,"Statement");
_57c=_57c.substring(_57a);
}
},WhileStatement:function(node,st,c){
var _5a5=st.compiler,_5a6=_5a5.generate,body=node.body,_5a7;
if(_5a6){
_5a7=_5a5.jsBuffer;
_5a7.concat(_57c);
_5a7.concat("while (");
}
c(node.test,st,"Expression");
if(_5a6){
_5a7.concat(body.type==="EmptyStatement"?");\n":")\n");
}
_57c+=_57b;
c(body,st,"Statement");
_57c=_57c.substring(_57a);
},DoWhileStatement:function(node,st,c){
var _5a8=st.compiler,_5a9=_5a8.generate,_5aa;
if(_5a9){
_5aa=_5a8.jsBuffer;
_5aa.concat(_57c);
_5aa.concat("do\n");
}
_57c+=_57b;
c(node.body,st,"Statement");
_57c=_57c.substring(_57a);
if(_5a9){
_5aa.concat(_57c);
_5aa.concat("while (");
}
c(node.test,st,"Expression");
if(_5a9){
_5aa.concat(");\n");
}
},ForStatement:function(node,st,c){
var _5ab=st.compiler,_5ac=_5ab.generate,body=node.body,_5ad;
if(_5ac){
_5ad=_5ab.jsBuffer;
_5ad.concat(_57c);
_5ad.concat("for (");
}
if(node.init){
c(node.init,st,"ForInit");
}
if(_5ac){
_5ad.concat("; ");
}
if(node.test){
c(node.test,st,"Expression");
}
if(_5ac){
_5ad.concat("; ");
}
if(node.update){
c(node.update,st,"Expression");
}
if(_5ac){
_5ad.concat(body.type==="EmptyStatement"?");\n":")\n");
}
_57c+=_57b;
c(body,st,"Statement");
_57c=_57c.substring(_57a);
},ForInStatement:function(node,st,c){
var _5ae=st.compiler,_5af=_5ae.generate,body=node.body,_5b0;
if(_5af){
_5b0=_5ae.jsBuffer;
_5b0.concat(_57c);
_5b0.concat("for (");
}
c(node.left,st,"ForInit");
if(_5af){
_5b0.concat(" in ");
}
c(node.right,st,"Expression");
if(_5af){
_5b0.concat(body.type==="EmptyStatement"?");\n":")\n");
}
_57c+=_57b;
c(body,st,"Statement");
_57c=_57c.substring(_57a);
},ForInit:function(node,st,c){
var _5b1=st.compiler,_5b2=_5b1.generate;
if(node.type==="VariableDeclaration"){
st.isFor=true;
c(node,st);
delete st.isFor;
}else{
c(node,st,"Expression");
}
},DebuggerStatement:function(node,st,c){
var _5b3=st.compiler;
if(_5b3.generate){
var _5b4=_5b3.jsBuffer;
_5b4.concat(_57c);
_5b4.concat("debugger;\n");
}
},Function:function(node,st,c){
var _5b5=st.compiler,_5b6=_5b5.generate,_5b7=_5b5.jsBuffer;
inner=new _4df(st),decl=node.type=="FunctionDeclaration";
inner.isDecl=decl;
for(var i=0;i<node.params.length;++i){
inner.vars[node.params[i].name]={type:"argument",node:node.params[i]};
}
if(node.id){
(decl?st:inner).vars[node.id.name]={type:decl?"function":"function name",node:node.id};
if(_5b6){
_5b7.concat(node.id.name);
_5b7.concat(" = ");
}else{
_5b7.concat(_5b5.source.substring(_5b5.lastPos,node.start));
_5b7.concat(node.id.name);
_5b7.concat(" = function");
_5b5.lastPos=node.id.end;
}
}
if(_5b6){
_5b7.concat("function(");
for(var i=0;i<node.params.length;++i){
if(i){
_5b7.concat(", ");
}
_5b7.concat(node.params[i].name);
}
_5b7.concat(")\n");
}
_57c+=_57b;
inner.endOfScopeBody=true;
c(node.body,inner,"ScopeBody");
_57c=_57c.substring(_57a);
inner.copyAddedSelfToIvarsToParent();
},VariableDeclaration:function(node,st,c){
var _5b8=st.compiler,_5b9=_5b8.generate,_5ba;
if(_5b9){
_5ba=_5b8.jsBuffer;
if(!st.isFor){
_5ba.concat(_57c);
}
_5ba.concat("var ");
}
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i],_5bb=decl.id.name;
if(i){
if(_5b9){
if(st.isFor){
_5ba.concat(", ");
}else{
_5ba.concat(",\n");
_5ba.concat(_57c);
_5ba.concat("    ");
}
}
}
st.vars[_5bb]={type:"var",node:decl.id};
if(_5b9){
_5ba.concat(_5bb);
}
if(decl.init){
if(_5b9){
_5ba.concat(" = ");
}
c(decl.init,st,"Expression");
}
if(st.addedSelfToIvars){
var _5bc=st.addedSelfToIvars[_5bb];
if(_5bc){
var _5ba=st.compiler.jsBuffer.atoms;
for(var i=0;i<_5bc.length;i++){
var dict=_5bc[i];
_5ba[dict.index]="";
_5b8.addWarning(_4e9("Local declaration of '"+_5bb+"' hides instance variable",dict.node,_5b8.source));
}
st.addedSelfToIvars[_5bb]=[];
}
}
}
if(_5b9&&!st.isFor){
_5b8.jsBuffer.concat(";\n");
}
},ThisExpression:function(node,st,c){
var _5bd=st.compiler;
if(_5bd.generate){
_5bd.jsBuffer.concat("this");
}
},ArrayExpression:function(node,st,c){
var _5be=st.compiler,_5bf=_5be.generate;
if(_5bf){
_5be.jsBuffer.concat("[");
}
for(var i=0;i<node.elements.length;++i){
var elt=node.elements[i];
if(i!==0){
if(_5bf){
_5be.jsBuffer.concat(", ");
}
}
if(elt){
c(elt,st,"Expression");
}
}
if(_5bf){
_5be.jsBuffer.concat("]");
}
},ObjectExpression:function(node,st,c){
var _5c0=st.compiler,_5c1=_5c0.generate;
if(_5c1){
_5c0.jsBuffer.concat("{");
}
for(var i=0;i<node.properties.length;++i){
var prop=node.properties[i];
if(_5c1){
if(i){
_5c0.jsBuffer.concat(", ");
}
st.isPropertyKey=true;
c(prop.key,st,"Expression");
delete st.isPropertyKey;
_5c0.jsBuffer.concat(": ");
}else{
if(prop.key.raw&&prop.key.raw.charAt(0)==="@"){
_5c0.jsBuffer.concat(_5c0.source.substring(_5c0.lastPos,prop.key.start));
_5c0.lastPos=prop.key.start+1;
}
}
c(prop.value,st,"Expression");
}
if(_5c1){
_5c0.jsBuffer.concat("}");
}
},SequenceExpression:function(node,st,c){
var _5c2=st.compiler,_5c3=_5c2.generate;
if(_5c3){
_5c2.jsBuffer.concat("(");
}
for(var i=0;i<node.expressions.length;++i){
if(_5c3&&i!==0){
_5c2.jsBuffer.concat(", ");
}
c(node.expressions[i],st,"Expression");
}
if(_5c3){
_5c2.jsBuffer.concat(")");
}
},UnaryExpression:function(node,st,c){
var _5c4=st.compiler,_5c5=_5c4.generate,_5c6=node.argument;
if(_5c5){
if(node.prefix){
_5c4.jsBuffer.concat(node.operator);
if(_522(node.operator)){
_5c4.jsBuffer.concat(" ");
}
(_572(node,_5c6)?_56e(c):c)(_5c6,st,"Expression");
}else{
(_572(node,_5c6)?_56e(c):c)(_5c6,st,"Expression");
_5c4.jsBuffer.concat(node.operator);
}
}else{
c(_5c6,st,"Expression");
}
},UpdateExpression:function(node,st,c){
var _5c7=st.compiler,_5c8=_5c7.generate;
if(node.argument.type==="Dereference"){
_56d(st,node.argument);
if(!_5c8){
_5c7.jsBuffer.concat(_5c7.source.substring(_5c7.lastPos,node.start));
}
_5c7.jsBuffer.concat((node.prefix?"":"(")+"(");
if(!_5c8){
_5c7.lastPos=node.argument.expr.start;
}
c(node.argument.expr,st,"Expression");
if(!_5c8){
_5c7.jsBuffer.concat(_5c7.source.substring(_5c7.lastPos,node.argument.expr.end));
}
_5c7.jsBuffer.concat(")(");
if(!_5c8){
_5c7.lastPos=node.argument.start;
}
c(node.argument,st,"Expression");
if(!_5c8){
_5c7.jsBuffer.concat(_5c7.source.substring(_5c7.lastPos,node.argument.end));
}
_5c7.jsBuffer.concat(" "+node.operator.substring(0,1)+" 1)"+(node.prefix?"":node.operator=="++"?" - 1)":" + 1)"));
if(!_5c8){
_5c7.lastPos=node.end;
}
return;
}
if(node.prefix){
if(_5c8){
_5c7.jsBuffer.concat(node.operator);
if(_522(node.operator)){
_5c7.jsBuffer.concat(" ");
}
}
(_5c8&&_572(node,node.argument)?_56e(c):c)(node.argument,st,"Expression");
}else{
(_5c8&&_572(node,node.argument)?_56e(c):c)(node.argument,st,"Expression");
if(_5c8){
_5c7.jsBuffer.concat(node.operator);
}
}
},BinaryExpression:function(node,st,c){
var _5c9=st.compiler,_5ca=_5c9.generate,_5cb=_524(node.operator);
(_5ca&&_572(node,node.left)?_56e(c):c)(node.left,st,"Expression");
if(_5ca){
var _5cc=_5c9.jsBuffer;
_5cc.concat(" ");
_5cc.concat(node.operator);
_5cc.concat(" ");
}
(_5ca&&_572(node,node.right,true)?_56e(c):c)(node.right,st,"Expression");
},LogicalExpression:function(node,st,c){
var _5cd=st.compiler,_5ce=_5cd.generate;
(_5ce&&_572(node,node.left)?_56e(c):c)(node.left,st,"Expression");
if(_5ce){
var _5cf=_5cd.jsBuffer;
_5cf.concat(" ");
_5cf.concat(node.operator);
_5cf.concat(" ");
}
(_5ce&&_572(node,node.right,true)?_56e(c):c)(node.right,st,"Expression");
},AssignmentExpression:function(node,st,c){
var _5d0=st.compiler,_5d1=_5d0.generate,_5d2=st.assignment,_5d3=_5d0.jsBuffer;
if(node.left.type==="Dereference"){
_56d(st,node.left);
if(!_5d1){
_5d3.concat(_5d0.source.substring(_5d0.lastPos,node.start));
}
_5d3.concat("(");
if(!_5d1){
_5d0.lastPos=node.left.expr.start;
}
c(node.left.expr,st,"Expression");
if(!_5d1){
_5d3.concat(_5d0.source.substring(_5d0.lastPos,node.left.expr.end));
}
_5d3.concat(")(");
if(node.operator!=="="){
if(!_5d1){
_5d0.lastPos=node.left.start;
}
c(node.left,st,"Expression");
if(!_5d1){
_5d3.concat(_5d0.source.substring(_5d0.lastPos,node.left.end));
}
_5d3.concat(" "+node.operator.substring(0,1)+" ");
}
if(!_5d1){
_5d0.lastPos=node.right.start;
}
c(node.right,st,"Expression");
if(!_5d1){
_5d3.concat(_5d0.source.substring(_5d0.lastPos,node.right.end));
}
_5d3.concat(")");
if(!_5d1){
_5d0.lastPos=node.end;
}
return;
}
var _5d2=st.assignment,_5d4=node.left;
st.assignment=true;
if(_5d4.type==="Identifier"&&_5d4.name==="self"){
var lVar=st.getLvar("self",true);
if(lVar){
var _5d5=lVar.scope;
if(_5d5){
_5d5.assignmentToSelf=true;
}
}
}
(_5d1&&_572(node,_5d4)?_56e(c):c)(_5d4,st,"Expression");
if(_5d1){
_5d3.concat(" ");
_5d3.concat(node.operator);
_5d3.concat(" ");
}
st.assignment=_5d2;
(_5d1&&_572(node,node.right,true)?_56e(c):c)(node.right,st,"Expression");
if(st.isRootScope()&&_5d4.type==="Identifier"&&!st.getLvar(_5d4.name)){
st.vars[_5d4.name]={type:"global",node:_5d4};
}
},ConditionalExpression:function(node,st,c){
var _5d6=st.compiler,_5d7=_5d6.generate;
(_5d7&&_572(node,node.test)?_56e(c):c)(node.test,st,"Expression");
if(_5d7){
_5d6.jsBuffer.concat(" ? ");
}
c(node.consequent,st,"Expression");
if(_5d7){
_5d6.jsBuffer.concat(" : ");
}
c(node.alternate,st,"Expression");
},NewExpression:function(node,st,c){
var _5d8=st.compiler,_5d9=_5d8.generate;
if(_5d9){
_5d8.jsBuffer.concat("new ");
}
(_5d9&&_572(node,node.callee)?_56e(c):c)(node.callee,st,"Expression");
if(_5d9){
_5d8.jsBuffer.concat("(");
}
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
if(_5d9&&i){
_5d8.jsBuffer.concat(", ");
}
c(node.arguments[i],st,"Expression");
}
}
if(_5d9){
_5d8.jsBuffer.concat(")");
}
},CallExpression:function(node,st,c){
var _5da=st.compiler,_5db=_5da.generate,_5dc=node.callee;
if(_5dc.type==="Identifier"&&_5dc.name==="eval"){
var _5dd=st.getLvar("self",true);
if(_5dd){
var _5de=_5dd.scope;
if(_5de){
_5de.assignmentToSelf=true;
}
}
}
(_5db&&_572(node,_5dc)?_56e(c):c)(_5dc,st,"Expression");
if(_5db){
_5da.jsBuffer.concat("(");
}
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
if(_5db&&i){
_5da.jsBuffer.concat(", ");
}
c(node.arguments[i],st,"Expression");
}
}
if(_5db){
_5da.jsBuffer.concat(")");
}
},MemberExpression:function(node,st,c){
var _5df=st.compiler,_5e0=_5df.generate,_5e1=node.computed;
(_5e0&&_572(node,node.object)?_56e(c):c)(node.object,st,"Expression");
if(_5e0){
if(_5e1){
_5df.jsBuffer.concat("[");
}else{
_5df.jsBuffer.concat(".");
}
}
st.secondMemberExpression=!_5e1;
(_5e0&&!_5e1&&_572(node,node.property)?_56e(c):c)(node.property,st,"Expression");
st.secondMemberExpression=false;
if(_5e0&&_5e1){
_5df.jsBuffer.concat("]");
}
},Identifier:function(node,st,c){
var _5e2=st.compiler,_5e3=_5e2.generate,_5e4=node.name;
if(st.currentMethodType()==="-"&&!st.secondMemberExpression&&!st.isPropertyKey){
var lvar=st.getLvar(_5e4,true),ivar=_5e2.getIvarForClass(_5e4,st);
if(ivar){
if(lvar){
_5e2.addWarning(_4e9("Local declaration of '"+_5e4+"' hides instance variable",node,_5e2.source));
}else{
var _5e5=node.start;
if(!_5e3){
do{
_5e2.jsBuffer.concat(_5e2.source.substring(_5e2.lastPos,_5e5));
_5e2.lastPos=_5e5;
}while(_5e2.source.substr(_5e5++,1)==="(");
}
((st.addedSelfToIvars||(st.addedSelfToIvars=Object.create(null)))[_5e4]||(st.addedSelfToIvars[_5e4]=[])).push({node:node,index:_5e2.jsBuffer.atoms.length});
_5e2.jsBuffer.concat("self.");
}
}else{
if(!_521(_5e4)){
var _5e6,_5e7=typeof _1[_5e4]!=="undefined"||typeof window[_5e4]!=="undefined"||_5e2.getClassDef(_5e4),_5e8=st.getLvar(_5e4);
if(_5e7&&(!_5e8||_5e8.type!=="class")){
}else{
if(!_5e8){
if(st.assignment){
_5e6=new _4e7("Creating global variable inside function or method '"+_5e4+"'",node,_5e2.source);
st.vars[_5e4]={type:"remove global warning",node:node};
}else{
_5e6=new _4e7("Using unknown class or uninitialized global variable '"+_5e4+"'",node,_5e2.source);
}
}
}
if(_5e6){
st.addMaybeWarning(_5e6);
}
}
}
}
if(_5e3){
_5e2.jsBuffer.concat(_5e4);
}
},Literal:function(node,st,c){
var _5e9=st.compiler,_5ea=_5e9.generate;
if(_5ea){
if(node.raw&&node.raw.charAt(0)==="@"){
_5e9.jsBuffer.concat(node.raw.substring(1));
}else{
_5e9.jsBuffer.concat(node.raw);
}
}else{
if(node.raw.charAt(0)==="@"){
_5e9.jsBuffer.concat(_5e9.source.substring(_5e9.lastPos,node.start));
_5e9.lastPos=node.start+1;
}
}
},ArrayLiteral:function(node,st,c){
var _5eb=st.compiler,_5ec=_5eb.generate;
if(!_5ec){
_5eb.jsBuffer.concat(_5eb.source.substring(_5eb.lastPos,node.start));
_5eb.lastPos=node.start;
}
if(!_5ec){
buffer.concat(" ");
}
if(!node.elements.length){
_5eb.jsBuffer.concat("objj_msgSend(objj_msgSend(CPArray, \"alloc\"), \"init\")");
}else{
_5eb.jsBuffer.concat("objj_msgSend(objj_msgSend(CPArray, \"alloc\"), \"initWithObjects:count:\", [");
for(var i=0;i<node.elements.length;i++){
var elt=node.elements[i];
if(i){
_5eb.jsBuffer.concat(", ");
}
if(!_5ec){
_5eb.lastPos=elt.start;
}
c(elt,st,"Expression");
if(!_5ec){
_5eb.jsBuffer.concat(_5eb.source.substring(_5eb.lastPos,elt.end));
}
}
_5eb.jsBuffer.concat("], "+node.elements.length+")");
}
if(!_5ec){
_5eb.lastPos=node.end;
}
},DictionaryLiteral:function(node,st,c){
var _5ed=st.compiler,_5ee=_5ed.generate;
if(!_5ee){
_5ed.jsBuffer.concat(_5ed.source.substring(_5ed.lastPos,node.start));
_5ed.lastPos=node.start;
}
if(!_5ee){
buffer.concat(" ");
}
if(!node.keys.length){
_5ed.jsBuffer.concat("objj_msgSend(objj_msgSend(CPDictionary, \"alloc\"), \"init\")");
}else{
_5ed.jsBuffer.concat("objj_msgSend(objj_msgSend(CPDictionary, \"alloc\"), \"initWithObjectsAndKeys:\"");
for(var i=0;i<node.keys.length;i++){
var key=node.keys[i],_5ef=node.values[i];
_5ed.jsBuffer.concat(", ");
if(!_5ee){
_5ed.lastPos=_5ef.start;
}
c(_5ef,st,"Expression");
if(!_5ee){
_5ed.jsBuffer.concat(_5ed.source.substring(_5ed.lastPos,_5ef.end));
}
_5ed.jsBuffer.concat(", ");
if(!_5ee){
_5ed.lastPos=key.start;
}
c(key,st,"Expression");
if(!_5ee){
_5ed.jsBuffer.concat(_5ed.source.substring(_5ed.lastPos,key.end));
}
}
_5ed.jsBuffer.concat(")");
}
if(!_5ee){
_5ed.lastPos=node.end;
}
},ImportStatement:function(node,st,c){
var _5f0=st.compiler,_5f1=_5f0.generate,_5f2=_5f0.jsBuffer;
if(!_5f1){
_5f2.concat(_5f0.source.substring(_5f0.lastPos,node.start));
}
_5f2.concat("objj_executeFile(\"");
_5f2.concat(node.filename.value);
_5f2.concat(node.localfilepath?"\", YES);":"\", NO);");
if(!_5f1){
_5f0.lastPos=node.end;
}
},ClassDeclarationStatement:function(node,st,c){
var _5f3=st.compiler,_5f4=_5f3.generate,_5f5=_5f3.jsBuffer,_5f6=node.classname.name,_5f7=_5f3.getClassDef(_5f6),_5f8=new _4df(st),_5f9=node.type==="InterfaceDeclarationStatement",_5fa=node.protocols;
_5f3.imBuffer=new _2bb();
_5f3.cmBuffer=new _2bb();
_5f3.classBodyBuffer=new _2bb();
if(_5f3.getTypeDef(_5f6)){
throw _5f3.error_message(_5f6+" is already declared as a type",node.classname);
}
if(!_5f4){
_5f5.concat(_5f3.source.substring(_5f3.lastPos,node.start));
}
if(node.superclassname){
if(_5f7&&_5f7.ivars){
throw _5f3.error_message("Duplicate class "+_5f6,node.classname);
}
if(_5f9&&_5f7&&_5f7.instanceMethods&&_5f7.classMethods){
throw _5f3.error_message("Duplicate interface definition for class "+_5f6,node.classname);
}
var _5fb=_5f3.getClassDef(node.superclassname.name);
if(!_5fb){
var _5fc="Can't find superclass "+node.superclassname.name;
for(var i=_525.importStack.length;--i>=0;){
_5fc+="\n"+Array((_525.importStack.length-i)*2+1).join(" ")+"Imported by: "+_525.importStack[i];
}
throw _5f3.error_message(_5fc,node.superclassname);
}
_5f7=new _4ec(!_5f9,_5f6,_5fb,Object.create(null));
_5f5.concat("{var the_class = objj_allocateClassPair("+node.superclassname.name+", \""+_5f6+"\"),\nmeta_class = the_class.isa;");
}else{
if(node.categoryname){
_5f7=_5f3.getClassDef(_5f6);
if(!_5f7){
throw _5f3.error_message("Class "+_5f6+" not found ",node.classname);
}
_5f5.concat("{\nvar the_class = objj_getClass(\""+_5f6+"\")\n");
_5f5.concat("if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_5f6+"\\\"\");\n");
_5f5.concat("var meta_class = the_class.isa;");
}else{
_5f7=new _4ec(!_5f9,_5f6,null,Object.create(null));
_5f5.concat("{var the_class = objj_allocateClassPair(Nil, \""+_5f6+"\"),\nmeta_class = the_class.isa;");
}
}
if(_5fa){
for(var i=0,size=_5fa.length;i<size;i++){
_5f5.concat("\nvar aProtocol = objj_getProtocol(\""+_5fa[i].name+"\");");
_5f5.concat("\nif (!aProtocol) throw new SyntaxError(\"*** Could not find definition for protocol \\\""+_5fa[i].name+"\\\"\");");
_5f5.concat("\nclass_addProtocol(the_class, aProtocol);");
}
}
_5f8.classDef=_5f7;
_5f3.currentSuperClass="objj_getClass(\""+_5f6+"\").super_class";
_5f3.currentSuperMetaClass="objj_getMetaClass(\""+_5f6+"\").super_class";
var _5fd=true,_5fe=_5f7.ivars,_5ff=[],_600=false;
if(node.ivardeclarations){
for(var i=0;i<node.ivardeclarations.length;++i){
var _601=node.ivardeclarations[i],_602=_601.ivartype?_601.ivartype.name:null,_603=_601.ivartype?_601.ivartype.typeisclass:false,_604=_601.id.name,ivar={"type":_602,"name":_604},_605=_601.accessors;
var _606=function(_607,_608){
if(_607.ivars[_604]){
throw _5f3.error_message("Instance variable '"+_604+"' is already declared for class "+_5f6+(_607.name!==_5f6?" in superclass "+_607.name:""),_601.id);
}
if(_607.superClass){
_608(_607.superClass,_608);
}
};
_606(_5f7,_606);
var _609=!_603||typeof _1[_602]!=="undefined"||typeof window[_602]!=="undefined"||_5f3.getClassDef(_602)||_5f3.getTypeDef(_602)||_602==_5f7.name;
if(!_609){
_5f3.addWarning(_4e9("Unknown type '"+_602+"' for ivar '"+_604+"'",_601.id,_5f3.source));
}
if(_5fd){
_5fd=false;
_5f5.concat("class_addIvars(the_class, [");
}else{
_5f5.concat(", ");
}
if(_5f3.flags&_525.Flags.IncludeTypeSignatures){
_5f5.concat("new objj_ivar(\""+_604+"\", \""+_602+"\")");
}else{
_5f5.concat("new objj_ivar(\""+_604+"\")");
}
if(_601.outlet){
ivar.outlet=true;
}
_5ff.push(ivar);
if(!_5f8.ivars){
_5f8.ivars=Object.create(null);
}
_5f8.ivars[_604]={type:"ivar",name:_604,node:_601.id,ivar:ivar};
if(_605){
var _60a=(_605.property&&_605.property.name)||_604,_60b=(_605.getter&&_605.getter.name)||_60a;
_5f7.addInstanceMethod(new _51e(_60b,[_602]));
if(!_605.readonly){
var _60c=_605.setter?_605.setter.name:null;
if(!_60c){
var _60d=_60a.charAt(0)=="_"?1:0;
_60c=(_60d?"_":"")+"set"+_60a.substr(_60d,1).toUpperCase()+_60a.substring(_60d+1)+":";
}
_5f7.addInstanceMethod(new _51e(_60c,["void",_602]));
}
_600=true;
}
}
}
if(!_5fd){
_5f5.concat("]);");
}
if(!_5f9&&_600){
var _60e=new _2bb();
_60e.concat(_5f3.source.substring(node.start,node.endOfIvars).replace(/<.*>/g,""));
_60e.concat("\n");
for(var i=0;i<node.ivardeclarations.length;++i){
var _601=node.ivardeclarations[i],_602=_601.ivartype?_601.ivartype.name:null,_604=_601.id.name,_605=_601.accessors;
if(!_605){
continue;
}
var _60a=(_605.property&&_605.property.name)||_604,_60b=(_605.getter&&_605.getter.name)||_60a,_60f="- ("+(_602?_602:"id")+")"+_60b+"\n{\nreturn "+_604+";\n}\n";
_60e.concat(_60f);
if(_605.readonly){
continue;
}
var _60c=_605.setter?_605.setter.name:null;
if(!_60c){
var _60d=_60a.charAt(0)=="_"?1:0;
_60c=(_60d?"_":"")+"set"+_60a.substr(_60d,1).toUpperCase()+_60a.substring(_60d+1)+":";
}
var _610="- (void)"+_60c+"("+(_602?_602:"id")+")newValue\n{\n";
if(_605.copy){
_610+="if ("+_604+" !== newValue)\n"+_604+" = [newValue copy];\n}\n";
}else{
_610+=_604+" = newValue;\n}\n";
}
_60e.concat(_610);
}
_60e.concat("\n@end");
var b=_60e.toString().replace(/@accessors(\(.*\))?/g,"");
var _611=_525.compileToIMBuffer(b,"Accessors",_5f3.flags,_5f3.classDefs,_5f3.protocolDefs,_5f3.typeDefs);
_5f3.imBuffer.concat(_611);
}
for(var _612=_5ff.length,i=0;i<_612;i++){
var ivar=_5ff[i],_604=ivar.name;
_5fe[_604]=ivar;
}
_5f3.classDefs[_5f6]=_5f7;
var _613=node.body,_614=_613.length;
if(_614>0){
if(!_5f4){
_5f3.lastPos=_613[0].start;
}
for(var i=0;i<_614;++i){
var body=_613[i];
c(body,_5f8,"Statement");
}
if(!_5f4){
_5f5.concat(_5f3.source.substring(_5f3.lastPos,body.end));
}
}
if(!_5f9&&!node.categoryname){
_5f5.concat("objj_registerClassPair(the_class);\n");
}
if(_5f3.imBuffer.isEmpty()){
_5f5.concat("class_addMethods(the_class, [");
_5f5.atoms.push.apply(_5f5.atoms,_5f3.imBuffer.atoms);
_5f5.concat("]);\n");
}
if(_5f3.cmBuffer.isEmpty()){
_5f5.concat("class_addMethods(meta_class, [");
_5f5.atoms.push.apply(_5f5.atoms,_5f3.cmBuffer.atoms);
_5f5.concat("]);\n");
}
_5f5.concat("}");
_5f3.jsBuffer=_5f5;
if(!_5f4){
_5f3.lastPos=node.end;
}
if(_5fa){
var _615=[];
for(var i=0,size=_5fa.length;i<size;i++){
var _616=_5fa[i],_617=_5f3.getProtocolDef(_616.name);
if(!_617){
throw _5f3.error_message("Cannot find protocol declaration for '"+_616.name+"'",_616);
}
_615.push(_617);
}
var _618=_5f7.listOfNotImplementedMethodsForProtocols(_615);
if(_618&&_618.length>0){
for(var i=0,size=_618.length;i<size;i++){
var _619=_618[i],_61a=_619.methodDef,_617=_619.protocolDef;
_5f3.addWarning(_4e9("Method '"+_61a.name+"' in protocol '"+_617.name+"' is not implemented",node.classname,_5f3.source));
}
}
}
},ProtocolDeclarationStatement:function(node,st,c){
var _61b=st.compiler,_61c=_61b.generate,_61d=_61b.jsBuffer,_61e=node.protocolname.name,_61f=_61b.getProtocolDef(_61e),_620=node.protocols,_621=new _4df(st),_622=[];
if(_61f){
throw _61b.error_message("Duplicate protocol "+_61e,node.protocolname);
}
_61b.imBuffer=new _2bb();
_61b.cmBuffer=new _2bb();
if(!_61c){
_61d.concat(_61b.source.substring(_61b.lastPos,node.start));
}
_61d.concat("{var the_protocol = objj_allocateProtocol(\""+_61e+"\");");
if(_620){
for(var i=0,size=_620.length;i<size;i++){
var _623=_620[i],_624=_623.name;
inheritProtocolDef=_61b.getProtocolDef(_624);
if(!inheritProtocolDef){
throw _61b.error_message("Can't find protocol "+_624,_623);
}
_61d.concat("\nvar aProtocol = objj_getProtocol(\""+_624+"\");");
_61d.concat("\nif (!aProtocol) throw new SyntaxError(\"*** Could not find definition for protocol \\\""+_61e+"\\\"\");");
_61d.concat("\nprotocol_addProtocol(the_protocol, aProtocol);");
_622.push(inheritProtocolDef);
}
}
_61f=new _50f(_61e,_622);
_61b.protocolDefs[_61e]=_61f;
_621.protocolDef=_61f;
var _625=node.required;
if(_625){
var _626=_625.length;
if(_626>0){
for(var i=0;i<_626;++i){
var _627=_625[i];
if(!_61c){
_61b.lastPos=_627.start;
}
c(_627,_621,"Statement");
}
if(!_61c){
_61d.concat(_61b.source.substring(_61b.lastPos,_627.end));
}
}
}
_61d.concat("\nobjj_registerProtocol(the_protocol);\n");
if(_61b.imBuffer.isEmpty()){
_61d.concat("protocol_addMethodDescriptions(the_protocol, [");
_61d.atoms.push.apply(_61d.atoms,_61b.imBuffer.atoms);
_61d.concat("], true, true);\n");
}
if(_61b.cmBuffer.isEmpty()){
_61d.concat("protocol_addMethodDescriptions(the_protocol, [");
_61d.atoms.push.apply(_61d.atoms,_61b.cmBuffer.atoms);
_61d.concat("], true, false);\n");
}
_61d.concat("}");
_61b.jsBuffer=_61d;
if(!_61c){
_61b.lastPos=node.end;
}
},MethodDeclarationStatement:function(node,st,c){
var _628=st.compiler,_629=_628.generate,_62a=_628.jsBuffer,_62b=new _4df(st),_62c=node.methodtype==="-";
selectors=node.selectors,nodeArguments=node.arguments,returnType=node.returntype,types=[returnType?returnType.name:(node.action?"void":"id")],returnTypeProtocols=returnType?returnType.protocols:null;
selector=selectors[0].name;
if(returnTypeProtocols){
for(var i=0,size=returnTypeProtocols.length;i<size;i++){
var _62d=returnTypeProtocols[i];
if(!_628.getProtocolDef(_62d.name)){
_628.addWarning(_4e9("Cannot find protocol declaration for '"+_62d.name+"'",_62d,_628.source));
}
}
}
if(!_629){
_62a.concat(_628.source.substring(_628.lastPos,node.start));
}
_628.jsBuffer=_62c?_628.imBuffer:_628.cmBuffer;
for(var i=0;i<nodeArguments.length;i++){
var _62e=nodeArguments[i],_62f=_62e.type,_630=_62f?_62f.name:"id",_631=_62f?_62f.protocols:null;
types.push(_62f?_62f.name:"id");
if(_631){
for(var j=0,size=_631.length;j<size;j++){
var _632=_631[j];
if(!_628.getProtocolDef(_632.name)){
_628.addWarning(_4e9("Cannot find protocol declaration for '"+_632.name+"'",_632,_628.source));
}
}
}
if(i===0){
selector+=":";
}else{
selector+=(selectors[i]?selectors[i].name:"")+":";
}
}
if(_628.jsBuffer.isEmpty()){
_628.jsBuffer.concat(", ");
}
_628.jsBuffer.concat("new objj_method(sel_getUid(\"");
_628.jsBuffer.concat(selector);
_628.jsBuffer.concat("\"), ");
if(node.body){
_628.jsBuffer.concat("function");
if(_628.flags&_525.Flags.IncludeDebugSymbols){
_628.jsBuffer.concat(" $"+st.currentClassName()+"__"+selector.replace(/:/g,"_"));
}
_628.jsBuffer.concat("(self, _cmd");
_62b.methodType=node.methodtype;
_62b.vars["self"]={type:"method base",scope:_62b};
_62b.vars["_cmd"]={type:"method base",scope:_62b};
if(nodeArguments){
for(var i=0;i<nodeArguments.length;i++){
var _62e=nodeArguments[i],_633=_62e.identifier.name;
_628.jsBuffer.concat(", ");
_628.jsBuffer.concat(_633);
_62b.vars[_633]={type:"method argument",node:_62e};
}
}
_628.jsBuffer.concat(")\n");
if(!_629){
_628.lastPos=node.startOfBody;
}
_57c+=_57b;
_62b.endOfScopeBody=true;
c(node.body,_62b,"Statement");
_57c=_57c.substring(_57a);
if(!_629){
_628.jsBuffer.concat(_628.source.substring(_628.lastPos,node.body.end));
}
_628.jsBuffer.concat("\n");
}else{
_628.jsBuffer.concat("Nil\n");
}
if(_628.flags&_525.Flags.IncludeDebugSymbols){
_628.jsBuffer.concat(","+JSON.stringify(types));
}
_628.jsBuffer.concat(")");
_628.jsBuffer=_62a;
if(!_629){
_628.lastPos=node.end;
}
var def=st.classDef,_634;
if(def){
_634=_62c?def.getInstanceMethod(selector):def.getClassMethod(selector);
}else{
def=st.protocolDef;
}
if(!def){
throw "InternalError: MethodDeclaration without ClassDeclaration or ProtocolDeclaration at line: "+_2.acorn.getLineInfo(_628.source,node.start).line;
}
if(!_634){
var _635=def.protocols;
if(_635){
for(var i=0,size=_635.length;i<size;i++){
var _636=_635[i],_634=_62c?_636.getInstanceMethod(selector):_636.getClassMethod(selector);
if(_634){
break;
}
}
}
}
if(_634){
var _637=_634.types;
if(_637){
var _638=_637.length;
if(_638>0){
var _639=_637[0];
if(_639!==types[0]&&!(_639==="id"&&returnType&&returnType.typeisclass)){
_628.addWarning(_4e9("Conflicting return type in implementation of '"+selector+"': '"+_639+"' vs '"+types[0]+"'",returnType||node.action||selectors[0],_628.source));
}
for(var i=1;i<_638;i++){
var _63a=_637[i];
if(_63a!==types[i]&&!(_63a==="id"&&nodeArguments[i-1].type.typeisclass)){
_628.addWarning(_4e9("Conflicting parameter types in implementation of '"+selector+"': '"+_63a+"' vs '"+types[i]+"'",nodeArguments[i-1].type||nodeArguments[i-1].identifier,_628.source));
}
}
}
}
}
var _63b=new _51e(selector,types);
if(_62c){
def.addInstanceMethod(_63b);
}else{
def.addClassMethod(_63b);
}
},MessageSendExpression:function(node,st,c){
var _63c=st.compiler,_63d=_63c.generate,_63e=_63c.jsBuffer,_63f=node.object;
if(!_63d){
_63e.concat(_63c.source.substring(_63c.lastPos,node.start));
_63c.lastPos=_63f?_63f.start:node.arguments.length?node.arguments[0].start:node.end;
}
if(node.superObject){
if(!_63d){
_63e.concat(" ");
}
_63e.concat("objj_msgSendSuper(");
_63e.concat("{ receiver:self, super_class:"+(st.currentMethodType()==="+"?_63c.currentSuperMetaClass:_63c.currentSuperClass)+" }");
}else{
if(_63d){
var _640=_63f.type==="Identifier"&&!(st.currentMethodType()==="-"&&_63c.getIvarForClass(_63f.name,st)&&!st.getLvar(_63f.name,true)),_641,_642;
if(_640){
var name=_63f.name,_641=st.getLvar(name);
if(name==="self"){
_642=!_641||!_641.scope||_641.scope.assignmentToSelf;
}else{
_642=!!_641||!_63c.getClassDef(name);
}
if(_642){
_63e.concat("(");
c(_63f,st,"Expression");
_63e.concat(" == null ? null : ");
}
c(_63f,st,"Expression");
}else{
_642=true;
if(!st.receiverLevel){
st.receiverLevel=0;
}
_63e.concat("((___r");
_63e.concat(++st.receiverLevel+"");
_63e.concat(" = ");
c(_63f,st,"Expression");
_63e.concat("), ___r");
_63e.concat(st.receiverLevel+"");
_63e.concat(" == null ? null : ___r");
_63e.concat(st.receiverLevel+"");
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
}
_63e.concat(".isa.objj_msgSend");
}else{
_63e.concat(" ");
_63e.concat("objj_msgSend(");
_63e.concat(_63c.source.substring(_63c.lastPos,_63f.end));
}
}
var _643=node.selectors,_644=node.arguments,_645=_644.length,_646=_643[0],_647=_646?_646.name:"";
if(_63d&&!node.superObject){
var _648=_645;
if(node.parameters){
_648+=node.parameters.length;
}
if(_648<4){
_63e.concat(""+_648);
}
if(_640){
_63e.concat("(");
c(_63f,st,"Expression");
}else{
_63e.concat("(___r");
_63e.concat(st.receiverLevel+"");
}
}
for(var i=0;i<_645;i++){
if(i===0){
_647+=":";
}else{
_647+=(_643[i]?_643[i].name:"")+":";
}
}
_63e.concat(", \"");
_63e.concat(_647);
_63e.concat("\"");
if(node.arguments){
for(var i=0;i<node.arguments.length;i++){
var _649=node.arguments[i];
_63e.concat(", ");
if(!_63d){
_63c.lastPos=_649.start;
}
c(_649,st,"Expression");
if(!_63d){
_63e.concat(_63c.source.substring(_63c.lastPos,_649.end));
_63c.lastPos=_649.end;
}
}
}
if(node.parameters){
for(var i=0;i<node.parameters.length;++i){
var _64a=node.parameters[i];
_63e.concat(", ");
if(!_63d){
_63c.lastPos=_64a.start;
}
c(_64a,st,"Expression");
if(!_63d){
_63e.concat(_63c.source.substring(_63c.lastPos,_64a.end));
_63c.lastPos=_64a.end;
}
}
}
if(_63d&&!node.superObject){
if(_642){
_63e.concat(")");
}
if(!_640){
st.receiverLevel--;
}
}
_63e.concat(")");
if(!_63d){
_63c.lastPos=node.end;
}
},SelectorLiteralExpression:function(node,st,c){
var _64b=st.compiler,_64c=_64b.jsBuffer,_64d=_64b.generate;
if(!_64d){
_64c.concat(_64b.source.substring(_64b.lastPos,node.start));
_64c.concat(" ");
}
_64c.concat("sel_getUid(\"");
_64c.concat(node.selector);
_64c.concat("\")");
if(!_64d){
_64b.lastPos=node.end;
}
},ProtocolLiteralExpression:function(node,st,c){
var _64e=st.compiler,_64f=_64e.jsBuffer,_650=_64e.generate;
if(!_650){
_64f.concat(_64e.source.substring(_64e.lastPos,node.start));
_64f.concat(" ");
}
_64f.concat("objj_getProtocol(\"");
_64f.concat(node.id.name);
_64f.concat("\")");
if(!_650){
_64e.lastPos=node.end;
}
},Reference:function(node,st,c){
var _651=st.compiler,_652=_651.jsBuffer,_653=_651.generate;
if(!_653){
_652.concat(_651.source.substring(_651.lastPos,node.start));
_652.concat(" ");
}
_652.concat("function(__input) { if (arguments.length) return ");
c(node.element,st,"Expression");
_652.concat(" = __input; return ");
c(node.element,st,"Expression");
_652.concat("; }");
if(!_653){
_651.lastPos=node.end;
}
},Dereference:function(node,st,c){
var _654=st.compiler,_655=_654.generate;
_56d(st,node.expr);
if(!_655){
_654.jsBuffer.concat(_654.source.substring(_654.lastPos,node.start));
_654.lastPos=node.expr.start;
}
c(node.expr,st,"Expression");
if(!_655){
_654.jsBuffer.concat(_654.source.substring(_654.lastPos,node.expr.end));
}
_654.jsBuffer.concat("()");
if(!_655){
_654.lastPos=node.end;
}
},ClassStatement:function(node,st,c){
var _656=st.compiler;
if(!_656.generate){
_656.jsBuffer.concat(_656.source.substring(_656.lastPos,node.start));
_656.lastPos=node.start;
_656.jsBuffer.concat("//");
}
var _657=node.id.name;
if(_656.getTypeDef(_657)){
throw _656.error_message(_657+" is already declared as a type",node.id);
}
if(!_656.getClassDef(_657)){
classDef=new _4ec(false,_657);
_656.classDefs[_657]=classDef;
}
st.vars[node.id.name]={type:"class",node:node.id};
},GlobalStatement:function(node,st,c){
var _658=st.compiler;
if(!_658.generate){
_658.jsBuffer.concat(_658.source.substring(_658.lastPos,node.start));
_658.lastPos=node.start;
_658.jsBuffer.concat("//");
}
st.rootScope().vars[node.id.name]={type:"global",node:node.id};
},PreprocessStatement:function(node,st,c){
var _659=st.compiler;
if(!_659.generate){
_659.jsBuffer.concat(_659.source.substring(_659.lastPos,node.start));
_659.lastPos=node.start;
_659.jsBuffer.concat("//");
}
},TypeDefStatement:function(node,st,c){
var _65a=st.compiler,_65b=_65a.generate,_65c=_65a.jsBuffer,_65d=node.typedefname.name,_65e=_65a.getTypeDef(_65d),_65f=new _4df(st);
if(_65e){
throw _65a.error_message("Duplicate type definition "+_65d,node.typedefname);
}
if(_65a.getClassDef(_65d)){
throw _65a.error_message(_65d+" is already declared as class",node.typedefname);
}
_65a.imBuffer=new _2bb();
_65a.cmBuffer=new _2bb();
if(!_65b){
_65c.concat(_65a.source.substring(_65a.lastPos,node.start));
}
_65c.concat("{var the_typedef = objj_allocateTypeDef(\""+_65d+"\");");
_65e=new _51d(_65d);
_65a.typeDefs[_65d]=_65e;
_65f.typeDef=_65e;
_65c.concat("\nobjj_registerTypeDef(the_typedef);\n");
_65c.concat("}");
_65a.jsBuffer=_65c;
if(!_65b){
_65a.lastPos=node.end;
}
}});
function _2f9(aURL,_660){
this._URL=aURL;
this._isLocal=_660;
};
_2.FileDependency=_2f9;
_2f9.prototype.URL=function(){
return this._URL;
};
_2f9.prototype.isLocal=function(){
return this._isLocal;
};
_2f9.prototype.toMarkedString=function(){
var _661=this.URL().absoluteString();
return (this.isLocal()?_241:_240)+";"+_661.length+";"+_661;
};
_2f9.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _662=0,_663=1,_664=2,_665=0;
function _2ca(_666,_667,aURL,_668,_669,_66a){
if(arguments.length===0){
return this;
}
this._code=_666;
this._function=_668||null;
this._URL=_1db(aURL||new CFURL("(Anonymous"+(_665++)+")"));
this._compiler=_669||null;
this._fileDependencies=_667;
this._filenameTranslateDictionary=_66a;
if(_667.length){
this._fileDependencyStatus=_662;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_664;
}
if(this._function){
return;
}
if(!_669){
this.setCode(_666);
}
};
_2.Executable=_2ca;
_2ca.prototype.path=function(){
return this.URL().path();
};
_2ca.prototype.URL=function(){
return this._URL;
};
_2ca.prototype.functionParameters=function(){
var _66b=["global","objj_executeFile","objj_importFile"];
return _66b;
};
_2ca.prototype.functionArguments=function(){
var _66c=[_1,this.fileExecuter(),this.fileImporter()];
return _66c;
};
_2ca.prototype.execute=function(){
if(this._compiler){
var _66d=this.fileDependencies(),_9d=0,_66e=_66d.length;
this._compiler.pushImport(this.URL().lastPathComponent());
for(;_9d<_66e;++_9d){
var _66f=_66d[_9d],_670=_66f.isLocal(),URL=_66f.URL();
this.fileExecuter()(URL,_670);
}
this._compiler.popImport();
this.setCode(this._compiler.compilePass2());
this._compiler=null;
}
var _671=_672;
_672=CFBundle.bundleContainingURL(this.URL());
var _673=this._function.apply(_1,this.functionArguments());
_672=_671;
return _673;
};
_2ca.prototype.code=function(){
return this._code;
};
_2ca.prototype.setCode=function(code){
this._code=code;
var _674=this.functionParameters().join(",");
this._function=new Function(_674,code);
};
_2ca.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_2ca.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_664;
};
var _675=0,_676=[],_677={};
_2ca.prototype.loadFileDependencies=function(_678){
var _679=this._fileDependencyStatus;
if(_678){
if(_679===_664){
return _678();
}
this._fileDependencyCallbacks.push(_678);
}
if(_679===_662){
if(_675){
throw "Can't load";
}
_67a(this);
}
};
function _67a(_67b){
_676.push(_67b);
_67b._fileDependencyStatus=_663;
var _67c=_67b.fileDependencies(),_9d=0,_67d=_67c.length,_67e=_67b.referenceURL(),_67f=_67e.absoluteString(),_680=_67b.fileExecutableSearcher();
_675+=_67d;
for(;_9d<_67d;++_9d){
var _681=_67c[_9d],_682=_681.isLocal(),URL=_681.URL(),_683=(_682&&(_67f+" ")||"")+URL;
if(_677[_683]){
if(--_675===0){
_684();
}
continue;
}
_677[_683]=YES;
_680(URL,_682,_685);
}
};
function _685(_686){
--_675;
if(_686._fileDependencyStatus===_662){
_67a(_686);
}else{
if(_675===0){
_684();
}
}
};
function _684(){
var _687=_676,_9d=0,_688=_687.length;
_676=[];
for(;_9d<_688;++_9d){
_687[_9d]._fileDependencyStatus=_664;
}
for(_9d=0;_9d<_688;++_9d){
var _689=_687[_9d],_68a=_689._fileDependencyCallbacks,_68b=0,_68c=_68a.length;
for(;_68b<_68c;++_68b){
_68a[_68b]();
}
_689._fileDependencyCallbacks=[];
}
};
_2ca.prototype.referenceURL=function(){
if(this._referenceURL===_2f){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_2ca.prototype.fileImporter=function(){
return _2ca.fileImporterForURL(this.referenceURL());
};
_2ca.prototype.fileExecuter=function(){
return _2ca.fileExecuterForURL(this.referenceURL());
};
_2ca.prototype.fileExecutableSearcher=function(){
return _2ca.fileExecutableSearcherForURL(this.referenceURL());
};
var _68d={};
_2ca.fileExecuterForURL=function(aURL){
var _68e=_1db(aURL),_68f=_68e.absoluteString(),_690=_68d[_68f];
if(!_690){
_690=function(aURL,_691,_692){
_2ca.fileExecutableSearcherForURL(_68e)(aURL,_691,function(_693){
if(!_693.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_693.execute(_692);
});
};
_68d[_68f]=_690;
}
return _690;
};
var _694={};
_2ca.fileImporterForURL=function(aURL){
var _695=_1db(aURL),_696=_695.absoluteString(),_697=_694[_696];
if(!_697){
_697=function(aURL,_698,_699){
_177();
_2ca.fileExecutableSearcherForURL(_695)(aURL,_698,function(_69a){
_69a.loadFileDependencies(function(){
_69a.execute();
_178();
if(_699){
_699();
}
});
});
};
_694[_696]=_697;
}
return _697;
};
var _69b={},_69c={};
function _259(x){
var _69d=0;
for(var k in x){
if(x.hasOwnProperty(k)){
++_69d;
}
}
return _69d;
};
_2ca.resetCachedFileExecutableSearchers=function(){
_69b={};
_69c={};
_694={};
_68d={};
_677={};
};
_2ca.fileExecutableSearcherForURL=function(_69e){
var _69f=_69e.absoluteString(),_6a0=_69b[_69f],_6a1=_2ca.filenameTranslateDictionary?_2ca.filenameTranslateDictionary():null;
cachedSearchResults={};
if(!_6a0){
_6a0=function(aURL,_6a2,_6a3){
var _6a4=(_6a2&&_69e||"")+aURL,_6a5=_69c[_6a4];
if(_6a5){
return _6a6(_6a5);
}
var _6a7=(aURL instanceof CFURL)&&aURL.scheme();
if(_6a2||_6a7){
if(!_6a7){
aURL=new CFURL(aURL,_69e);
}
_1c7.resolveResourceAtURL(aURL,NO,_6a6,_6a1);
}else{
_1c7.resolveResourceAtURLSearchingIncludeURLs(aURL,_6a6);
}
function _6a6(_6a8){
if(!_6a8){
var _6a9=_525?_525.currentCompileFile:null;
throw new Error("Could not load file at "+aURL+(_6a9?" when compiling "+_6a9:""));
}
_69c[_6a4]=_6a8;
_6a3(new _6aa(_6a8.URL(),_6a1));
};
};
_69b[_69f]=_6a0;
}
return _6a0;
};
var _6ab={};
function _6aa(aURL,_6ac){
aURL=_1db(aURL);
var _6ad=aURL.absoluteString(),_6ae=_6ab[_6ad];
if(_6ae){
return _6ae;
}
_6ab[_6ad]=this;
var _6af=_1c7.resourceAtURL(aURL).contents(),_6b0=NULL,_6b1=aURL.pathExtension().toLowerCase();
if(_6af.match(/^@STATIC;/)){
_6b0=_6b2(_6af,aURL);
}else{
if((_6b1==="j"||!_6b1)&&!_6af.match(/^{/)){
_6b0=_2.ObjJAcornCompiler.compileFileDependencies(_6af,aURL,_525.Flags.IncludeDebugSymbols);
}else{
_6b0=new _2ca(_6af,[],aURL);
}
}
_2ca.apply(this,[_6b0.code(),_6b0.fileDependencies(),aURL,_6b0._function,_6b0._compiler,_6ac]);
this._hasExecuted=NO;
};
_2.FileExecutable=_6aa;
_6aa.prototype=new _2ca();
_6aa.resetFileExecutables=function(){
_6ab={};
_6b3={};
};
_6aa.prototype.execute=function(_6b4){
if(this._hasExecuted&&!_6b4){
return;
}
this._hasExecuted=YES;
_2ca.prototype.execute.call(this);
};
_6aa.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _6b2(_6b5,aURL){
var _6b6=new _119(_6b5);
var _6b7=NULL,code="",_6b8=[];
while(_6b7=_6b6.getMarker()){
var text=_6b6.getString();
if(_6b7===_23f){
code+=text;
}else{
if(_6b7===_240){
_6b8.push(new _2f9(new CFURL(text),NO));
}else{
if(_6b7===_241){
_6b8.push(new _2f9(new CFURL(text),YES));
}
}
}
}
var fn=_6aa._lookupCachedFunction(aURL);
if(fn){
return new _2ca(code,_6b8,aURL,fn);
}
return new _2ca(code,_6b8,aURL);
};
var _6b3={};
_6aa._cacheFunction=function(aURL,fn){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
_6b3[aURL]=fn;
};
_6aa._lookupCachedFunction=function(aURL){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
return _6b3[aURL];
};
var _6b9=1,_6ba=2,_6bb=4,_6bc=8;
objj_ivar=function(_6bd,_6be){
this.name=_6bd;
this.type=_6be;
};
objj_method=function(_6bf,_6c0,_6c1){
this.name=_6bf;
this.method_imp=_6c0;
this.types=_6c1;
};
objj_class=function(_6c2){
this.isa=NULL;
this.version=0;
this.super_class=NULL;
this.sub_classes=[];
this.name=NULL;
this.info=0;
this.ivar_list=[];
this.ivar_store=function(){
};
this.ivar_dtable=this.ivar_store.prototype;
this.method_list=[];
this.method_store=function(){
};
this.method_dtable=this.method_store.prototype;
this.protocol_list=[];
this.allocator=function(){
};
this._UID=-1;
};
objj_protocol=function(_6c3){
this.name=_6c3;
this.instance_methods={};
this.class_methods={};
};
objj_object=function(){
this.isa=NULL;
this._UID=-1;
};
objj_typeDef=function(_6c4){
this.name=_6c4;
};
class_getName=function(_6c5){
if(_6c5==Nil){
return "";
}
return _6c5.name;
};
class_isMetaClass=function(_6c6){
if(!_6c6){
return NO;
}
return ((_6c6.info&(_6ba)));
};
class_getSuperclass=function(_6c7){
if(_6c7==Nil){
return Nil;
}
return _6c7.super_class;
};
class_setSuperclass=function(_6c8,_6c9){
_6c8.super_class=_6c9;
_6c8.isa.super_class=_6c9.isa;
};
class_addIvar=function(_6ca,_6cb,_6cc){
var _6cd=_6ca.allocator.prototype;
if(typeof _6cd[_6cb]!="undefined"){
return NO;
}
var ivar=new objj_ivar(_6cb,_6cc);
_6ca.ivar_list.push(ivar);
_6ca.ivar_dtable[_6cb]=ivar;
_6cd[_6cb]=NULL;
return YES;
};
class_addIvars=function(_6ce,_6cf){
var _6d0=0,_6d1=_6cf.length,_6d2=_6ce.allocator.prototype;
for(;_6d0<_6d1;++_6d0){
var ivar=_6cf[_6d0],name=ivar.name;
if(typeof _6d2[name]==="undefined"){
_6ce.ivar_list.push(ivar);
_6ce.ivar_dtable[name]=ivar;
_6d2[name]=NULL;
}
}
};
class_copyIvarList=function(_6d3){
return _6d3.ivar_list.slice(0);
};
class_addMethod=function(_6d4,_6d5,_6d6,_6d7){
var _6d8=new objj_method(_6d5,_6d6,_6d7);
_6d4.method_list.push(_6d8);
_6d4.method_dtable[_6d5]=_6d8;
if(!((_6d4.info&(_6ba)))&&(((_6d4.info&(_6ba)))?_6d4:_6d4.isa).isa===(((_6d4.info&(_6ba)))?_6d4:_6d4.isa)){
class_addMethod((((_6d4.info&(_6ba)))?_6d4:_6d4.isa),_6d5,_6d6,_6d7);
}
return YES;
};
class_addMethods=function(_6d9,_6da){
var _6db=0,_6dc=_6da.length,_6dd=_6d9.method_list,_6de=_6d9.method_dtable;
for(;_6db<_6dc;++_6db){
var _6df=_6da[_6db];
_6dd.push(_6df);
_6de[_6df.name]=_6df;
}
if(!((_6d9.info&(_6ba)))&&(((_6d9.info&(_6ba)))?_6d9:_6d9.isa).isa===(((_6d9.info&(_6ba)))?_6d9:_6d9.isa)){
class_addMethods((((_6d9.info&(_6ba)))?_6d9:_6d9.isa),_6da);
}
};
class_getInstanceMethod=function(_6e0,_6e1){
if(!_6e0||!_6e1){
return NULL;
}
var _6e2=_6e0.method_dtable[_6e1];
return _6e2?_6e2:NULL;
};
class_getInstanceVariable=function(_6e3,_6e4){
if(!_6e3||!_6e4){
return NULL;
}
var _6e5=_6e3.ivar_dtable[_6e4];
return _6e5;
};
class_getClassMethod=function(_6e6,_6e7){
if(!_6e6||!_6e7){
return NULL;
}
var _6e8=(((_6e6.info&(_6ba)))?_6e6:_6e6.isa).method_dtable[_6e7];
return _6e8?_6e8:NULL;
};
class_respondsToSelector=function(_6e9,_6ea){
return class_getClassMethod(_6e9,_6ea)!=NULL;
};
class_copyMethodList=function(_6eb){
return _6eb.method_list.slice(0);
};
class_getVersion=function(_6ec){
return _6ec.version;
};
class_setVersion=function(_6ed,_6ee){
_6ed.version=parseInt(_6ee,10);
};
class_replaceMethod=function(_6ef,_6f0,_6f1){
if(!_6ef||!_6f0){
return NULL;
}
var _6f2=_6ef.method_dtable[_6f0],_6f3=NULL;
if(_6f2){
_6f3=_6f2.method_imp;
}
_6f2.method_imp=_6f1;
return _6f3;
};
class_addProtocol=function(_6f4,_6f5){
if(!_6f5||class_conformsToProtocol(_6f4,_6f5)){
return;
}
(_6f4.protocol_list||(_6f4.protocol_list==[])).push(_6f5);
return true;
};
class_conformsToProtocol=function(_6f6,_6f7){
if(!_6f7){
return false;
}
while(_6f6){
var _6f8=_6f6.protocol_list,size=_6f8?_6f8.length:0;
for(var i=0;i<size;i++){
var p=_6f8[i];
if(p.name===_6f7.name){
return true;
}
if(protocol_conformsToProtocol(p,_6f7)){
return true;
}
}
_6f6=class_getSuperclass(_6f6);
}
return false;
};
class_copyProtocolList=function(_6f9){
var _6fa=_6f9.protocol_list;
return _6fa?_6fa.slice(0):[];
};
protocol_conformsToProtocol=function(p1,p2){
if(!p1||!p2){
return false;
}
if(p1.name===p2.name){
return true;
}
var _6fb=p1.protocol_list,size=_6fb?_6fb.length:0;
for(var i=0;i<size;i++){
var p=_6fb[i];
if(p.name===p2.name){
return true;
}
if(protocol_conformsToProtocol(p,p2)){
return true;
}
}
return false;
};
var _6fc=Object.create(null);
objj_allocateProtocol=function(_6fd){
var _6fe=new objj_protocol(_6fd);
return _6fe;
};
objj_registerProtocol=function(_6ff){
_6fc[_6ff.name]=_6ff;
};
protocol_getName=function(_700){
return _700.name;
};
protocol_addMethodDescription=function(_701,_702,_703,_704,_705){
if(!_701||!_702){
return;
}
if(_704){
(_705?_701.instance_methods:_701.class_methods)[_702]=new objj_method(_702,null,_703);
}
};
protocol_addMethodDescriptions=function(_706,_707,_708,_709){
if(!_708){
return;
}
var _70a=0,_70b=_707.length,_70c=_709?_706.instance_methods:_706.class_methods;
for(;_70a<_70b;++_70a){
var _70d=_707[_70a];
_70c[_70d.name]=_70d;
}
};
protocol_copyMethodDescriptionList=function(_70e,_70f,_710){
if(!_70f){
return [];
}
var _711=_710?_70e.instance_methods:_70e.class_methods,_712=[];
for(var _713 in _711){
if(_711.hasOwnProperty(_713)){
_712.push(_711[_713]);
}
}
return _712;
};
protocol_addProtocol=function(_714,_715){
if(!_714||!_715){
return;
}
(_714.protocol_list||(_714.protocol_list=[])).push(_715);
};
var _716=Object.create(null);
objj_allocateTypeDef=function(_717){
var _718=new objj_typeDef(_717);
return _718;
};
objj_registerTypeDef=function(_719){
_716[_719.name]=_719;
};
typeDef_getName=function(_71a){
return _71a.name;
};
var _71b=function(_71c){
var meta=(((_71c.info&(_6ba)))?_71c:_71c.isa);
if((_71c.info&(_6ba))){
_71c=objj_getClass(_71c.name);
}
if(_71c.super_class&&!((((_71c.super_class.info&(_6ba)))?_71c.super_class:_71c.super_class.isa).info&(_6bb))){
_71b(_71c.super_class);
}
if(!(meta.info&(_6bb))&&!(meta.info&(_6bc))){
meta.info=(meta.info|(_6bc))&~(0);
_71c.objj_msgSend=objj_msgSendFast;
_71c.objj_msgSend0=objj_msgSendFast0;
_71c.objj_msgSend1=objj_msgSendFast1;
_71c.objj_msgSend2=objj_msgSendFast2;
_71c.objj_msgSend3=objj_msgSendFast3;
meta.objj_msgSend=objj_msgSendFast;
meta.objj_msgSend0=objj_msgSendFast0;
meta.objj_msgSend1=objj_msgSendFast1;
meta.objj_msgSend2=objj_msgSendFast2;
meta.objj_msgSend3=objj_msgSendFast3;
meta.objj_msgSend0(_71c,"initialize");
meta.info=(meta.info|(_6bb))&~(_6bc);
}
};
var _71d=function(self,_71e){
var isa=self.isa,_71f=isa.method_dtable[_720];
if(_71f){
var _721=_71f.method_imp.call(this,self,_720,_71e);
if(_721&&_721!==self){
arguments[0]=_721;
return objj_msgSend.apply(this,arguments);
}
}
_71f=isa.method_dtable[_722];
if(_71f){
var _723=isa.method_dtable[_724];
if(_723){
var _725=_71f.method_imp.call(this,self,_722,_71e);
if(_725){
var _726=objj_lookUpClass("CPInvocation");
if(_726){
var _727=_726.isa.objj_msgSend1(_726,_728,_725),_9d=0,_729=arguments.length;
if(_727!=null){
var _72a=_727.isa;
for(;_9d<_729;++_9d){
_72a.objj_msgSend2(_727,_72b,arguments[_9d],_9d);
}
}
_723.method_imp.call(this,self,_724,_727);
return _727==null?null:_72a.objj_msgSend0(_727,_72c);
}
}
}
}
_71f=isa.method_dtable[_72d];
if(_71f){
return _71f.method_imp.call(this,self,_72d,_71e);
}
throw class_getName(isa)+" does not implement doesNotRecognizeSelector:. Did you forget a superclass for "+class_getName(isa)+"?";
};
class_getMethodImplementation=function(_72e,_72f){
if(!((((_72e.info&(_6ba)))?_72e:_72e.isa).info&(_6bb))){
_71b(_72e);
}
var _730=_72e.method_dtable[_72f];
var _731=_730?_730.method_imp:_71d;
return _731;
};
var _732=Object.create(null);
objj_enumerateClassesUsingBlock=function(_733){
for(var key in _732){
_733(_732[key]);
}
};
objj_allocateClassPair=function(_734,_735){
var _736=new objj_class(_735),_737=new objj_class(_735),_738=_736;
if(_734){
_738=_734;
while(_738.superclass){
_738=_738.superclass;
}
_736.allocator.prototype=new _734.allocator;
_736.ivar_dtable=_736.ivar_store.prototype=new _734.ivar_store;
_736.method_dtable=_736.method_store.prototype=new _734.method_store;
_737.method_dtable=_737.method_store.prototype=new _734.isa.method_store;
_736.super_class=_734;
_737.super_class=_734.isa;
}else{
_736.allocator.prototype=new objj_object();
}
_736.isa=_737;
_736.name=_735;
_736.info=_6b9;
_736._UID=objj_generateObjectUID();
_737.isa=_738.isa;
_737.name=_735;
_737.info=_6ba;
_737._UID=objj_generateObjectUID();
return _736;
};
var _672=nil;
objj_registerClassPair=function(_739){
_1[_739.name]=_739;
_732[_739.name]=_739;
_1e2(_739,_672);
};
objj_resetRegisterClasses=function(){
for(var key in _732){
delete _1[key];
}
_732=Object.create(null);
_6fc=Object.create(null);
_716=Object.create(null);
_1e5();
};
class_createInstance=function(_73a){
if(!_73a){
throw new Error("*** Attempting to create object with Nil class.");
}
var _73b=new _73a.allocator();
_73b.isa=_73a;
_73b._UID=objj_generateObjectUID();
return _73b;
};
var _73c=function(){
};
_73c.prototype.member=false;
with(new _73c()){
member=true;
}
if(new _73c().member){
var _73d=class_createInstance;
class_createInstance=function(_73e){
var _73f=_73d(_73e);
if(_73f){
var _740=_73f.isa,_741=_740;
while(_740){
var _742=_740.ivar_list,_743=_742.length;
while(_743--){
_73f[_742[_743].name]=NULL;
}
_740=_740.super_class;
}
_73f.isa=_741;
}
return _73f;
};
}
object_getClassName=function(_744){
if(!_744){
return "";
}
var _745=_744.isa;
return _745?class_getName(_745):"";
};
objj_lookUpClass=function(_746){
var _747=_732[_746];
return _747?_747:Nil;
};
objj_getClass=function(_748){
var _749=_732[_748];
if(!_749){
}
return _749?_749:Nil;
};
objj_getClassList=function(_74a,_74b){
for(var _74c in _732){
_74a.push(_732[_74c]);
if(_74b&&--_74b===0){
break;
}
}
return _74a.length;
};
objj_getMetaClass=function(_74d){
var _74e=objj_getClass(_74d);
return (((_74e.info&(_6ba)))?_74e:_74e.isa);
};
objj_getProtocol=function(_74f){
return _6fc[_74f];
};
objj_getTypeDef=function(_750){
return _716[_750];
};
ivar_getName=function(_751){
return _751.name;
};
ivar_getTypeEncoding=function(_752){
return _752.type;
};
objj_msgSend=function(_753,_754){
if(_753==nil){
return nil;
}
var isa=_753.isa;
if(!((((isa.info&(_6ba)))?isa:isa.isa).info&(_6bb))){
_71b(isa);
}
var _755=isa.method_dtable[_754];
var _756=_755?_755.method_imp:_71d;
switch(arguments.length){
case 2:
return _756(_753,_754);
case 3:
return _756(_753,_754,arguments[2]);
case 4:
return _756(_753,_754,arguments[2],arguments[3]);
}
return _756.apply(_753,arguments);
};
objj_msgSendSuper=function(_757,_758){
var _759=_757.super_class;
arguments[0]=_757.receiver;
if(!((((_759.info&(_6ba)))?_759:_759.isa).info&(_6bb))){
_71b(_759);
}
var _75a=_759.method_dtable[_758];
var _75b=_75a?_75a.method_imp:_71d;
return _75b.apply(_757.receiver,arguments);
};
objj_msgSendFast=function(_75c,_75d){
var _75e=this.method_dtable[_75d],_75f=_75e?_75e.method_imp:_71d;
return _75f.apply(_75c,arguments);
};
var _760=function(_761,_762){
_71b(this);
return this.objj_msgSend.apply(this,arguments);
};
objj_msgSendFast0=function(_763,_764){
var _765=this.method_dtable[_764],_766=_765?_765.method_imp:_71d;
return _766(_763,_764);
};
var _767=function(_768,_769){
_71b(this);
return this.objj_msgSend0(_768,_769);
};
objj_msgSendFast1=function(_76a,_76b,arg0){
var _76c=this.method_dtable[_76b],_76d=_76c?_76c.method_imp:_71d;
return _76d(_76a,_76b,arg0);
};
var _76e=function(_76f,_770,arg0){
_71b(this);
return this.objj_msgSend1(_76f,_770,arg0);
};
objj_msgSendFast2=function(_771,_772,arg0,arg1){
var _773=this.method_dtable[_772],_774=_773?_773.method_imp:_71d;
return _774(_771,_772,arg0,arg1);
};
var _775=function(_776,_777,arg0,arg1){
_71b(this);
return this.objj_msgSend2(_776,_777,arg0,arg1);
};
objj_msgSendFast3=function(_778,_779,arg0,arg1,arg2){
var _77a=this.method_dtable[_779],_77b=_77a?_77a.method_imp:_71d;
return _77b(_778,_779,arg0,arg1,arg2);
};
var _77c=function(_77d,_77e,arg0,arg1,arg2){
_71b(this);
return this.objj_msgSend3(_77d,_77e,arg0,arg1,arg2);
};
method_getName=function(_77f){
return _77f.name;
};
method_getImplementation=function(_780){
return _780.method_imp;
};
method_setImplementation=function(_781,_782){
var _783=_781.method_imp;
_781.method_imp=_782;
return _783;
};
method_exchangeImplementations=function(lhs,rhs){
var _784=method_getImplementation(lhs),_785=method_getImplementation(rhs);
method_setImplementation(lhs,_785);
method_setImplementation(rhs,_784);
};
sel_getName=function(_786){
return _786?_786:"<null selector>";
};
sel_getUid=function(_787){
return _787;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_788){
return _788;
};
objj_class.prototype.toString=objj_object.prototype.toString=function(){
var isa=this.isa;
if(class_getInstanceMethod(isa,_789)){
return isa.objj_msgSend0(this,_789);
}
if(class_isMetaClass(isa)){
return this.name;
}
return "["+isa.name+" Object](-description not implemented)";
};
objj_class.prototype.objj_msgSend=_760;
objj_class.prototype.objj_msgSend0=_767;
objj_class.prototype.objj_msgSend1=_76e;
objj_class.prototype.objj_msgSend2=_775;
objj_class.prototype.objj_msgSend3=_77c;
var _789=sel_getUid("description"),_720=sel_getUid("forwardingTargetForSelector:"),_722=sel_getUid("methodSignatureForSelector:"),_724=sel_getUid("forwardInvocation:"),_72d=sel_getUid("doesNotRecognizeSelector:"),_728=sel_getUid("invocationWithMethodSignature:"),_78a=sel_getUid("setTarget:"),_78b=sel_getUid("setSelector:"),_72b=sel_getUid("setArgument:atIndex:"),_72c=sel_getUid("returnValue");
objj_eval=function(_78c){
var url=_2.pageURL;
var _78d=_2.asyncLoader;
_2.asyncLoader=NO;
var _78e=_2.preprocess(_78c,url,0);
if(!_78e.hasLoadedFileDependencies()){
_78e.loadFileDependencies();
}
_1._objj_eval_scope={};
_1._objj_eval_scope.objj_executeFile=_2ca.fileExecuterForURL(url);
_1._objj_eval_scope.objj_importFile=_2ca.fileImporterForURL(url);
var code="with(_objj_eval_scope){"+_78e._code+"\n//*/\n}";
var _78f;
_78f=eval(code);
_2.asyncLoader=_78d;
return _78f;
};
_2.objj_eval=objj_eval;
_177();
var _790=new CFURL(window.location.href),_791=document.getElementsByTagName("base"),_792=_791.length;
if(_792>0){
var _793=_791[_792-1],_794=_793&&_793.getAttribute("href");
if(_794){
_790=new CFURL(_794,_790);
}
}
var _795=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1e1=new CFURL(".",new CFURL(_795,_790)).absoluteURL(),_796=new CFURL("..",_1e1).absoluteURL();
if(_1e1===_796){
_796=new CFURL(_796.schemeAndAuthority());
}
_1c7.resourceAtURL(_796,YES);
_2.pageURL=_790;
_2.bootstrap=function(){
_797();
};
function _797(){
_1c7.resolveResourceAtURL(_1e1,YES,function(_798){
var _799=_1c7.includeURLs(),_9d=0,_79a=_799.length;
for(;_9d<_79a;++_9d){
_798.resourceAtURL(_799[_9d],YES);
}
_2ca.fileImporterForURL(_1e1)(_795.lastPathComponent(),YES,function(){
_178();
_7a0(function(){
var _79b=window.location.hash.substring(1),args=[];
if(_79b.length){
args=_79b.split("/");
for(var i=0,_79a=args.length;i<_79a;i++){
args[i]=decodeURIComponent(args[i]);
}
}
var _79c=window.location.search.substring(1).split("&"),_79d=new CFMutableDictionary();
for(var i=0,_79a=_79c.length;i<_79a;i++){
var _79e=_79c[i].split("=");
if(!_79e[0]){
continue;
}
if(_79e[1]==null){
_79e[1]=true;
}
_79d.setValueForKey(decodeURIComponent(_79e[0]),decodeURIComponent(_79e[1]));
}
main(args,_79d);
});
});
});
};
var _79f=NO;
function _7a0(_7a1){
if(_79f||document.readyState==="complete"){
return _7a1();
}
if(window.addEventListener){
window.addEventListener("load",_7a1,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_7a1);
}
}
};
_7a0(function(){
_79f=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1db(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1e1);
};
objj_importFile=_2ca.fileImporterForURL(_1e1);
objj_executeFile=_2ca.fileExecuterForURL(_1e1);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
