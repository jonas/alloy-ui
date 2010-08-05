/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("jsonp-url",function(E){var B=E.JSONPRequest,D=E.Object.getValue,C=function(){},F=".",A="@";E.mix(B.prototype,{_pattern:/\bcallback=(.*?)(?=&|$)/i,_template:"callback={callback}",_defaultCallback:function(I){var H=I.match(this._pattern),G={},J=0,K,L;if(H){K=H[1].replace(/\[(?:(['"])([^\]\1]+)\1|(\d+))\]/g,function(P,N,O,M){var R=(RegExp.rightContext||".").charAt(0),Q=A+(++J);G[Q]=O||M;if(R!==F&&R!=="["){Q+=F;}return F+Q;}).split(/\./);E.each(K,function(N,M){if(N.charAt(0)==="@"){K[M]=G[N];}});L=D(E.config.win,K)||D(E,K)||D(E,K.slice(1));}return L||C;},_format:function(G,I){var J=this._template.replace(/\{callback\}/,I),H;if(this._pattern.test(G)){return G.replace(this._pattern,J);}else{H=G.slice(-1);if(H!=="&"&&H!=="?"){G+=(G.indexOf("?")>-1)?"&":"?";}return G+J;}}},true);},"3.2.0PR1",{requires:["jsonp-base"]});