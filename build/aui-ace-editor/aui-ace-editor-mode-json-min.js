AUI.add("aui-ace-editor-mode-json",function(a){define("ace/mode/json",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle"],function(v,u,t){var s=v("pilot/oop"),r=v("ace/mode/text").Mode,q=v("ace/tokenizer").Tokenizer,p=v("ace/mode/json_highlight_rules").JsonHighlightRules,o=v("ace/mode/matching_brace_outdent").MatchingBraceOutdent,n=v("ace/range").Range,m=v("ace/mode/behaviour/cstyle").CstyleBehaviour,l=function(){this.$tokenizer=new q((new p).getRules()),this.$outdent=new o,this.$behaviour=new m;};s.inherits(l,r),function(){this.getNextLineIndent=function(j,i,A){var z=this.$getIndent(i),y=this.$tokenizer.getLineTokens(i,j),x=y.tokens,w=y.state;if(j=="start"){var k=i.match(/^.*[\{\(\[]\s*$/);k&&(z+=A);}return z;},this.checkOutdent=function(e,d,f){return this.$outdent.checkOutdent(d,f);},this.autoOutdent=function(e,d,f){this.$outdent.autoOutdent(d,f);};}.call(l.prototype),u.Mode=l;}),define("ace/mode/json_highlight_rules",["require","exports","module","pilot/oop","pilot/lang","ace/mode/text_highlight_rules"],function(i,h,n){var m=i("pilot/oop"),l=i("pilot/lang"),k=i("ace/mode/text_highlight_rules").TextHighlightRules,j=function(){this.$rules={start:[{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"invalid.illegal",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"invalid.illegal",regex:"\\/\\/.*$"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]};};m.inherits(j,k),h.JsonHighlightRules=j;}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,f,j){var i=g("ace/range").Range,h=function(){};(function(){this.checkOutdent=function(d,c){return/^\s+$/.test(d)?/^\s*\}/.test(c):!1;},this.autoOutdent=function(k,d){var p=k.getLine(d),o=p.match(/^(\s*\})/);if(!o){return 0;}var n=o[1].length,m=k.findMatchingBracket({row:d,column:n});if(!m||m.row==d){return 0;}var l=this.$getIndent(k.getLine(m.row));k.replace(new i(d,0,d,n-1),l);},this.$getIndent=function(d){var c=d.match(/^(\s+)/);return c?c[1]:"";};}).call(h.prototype),f.MatchingBraceOutdent=h;}),define("ace/mode/behaviour/cstyle",["require","exports","module","pilot/oop","ace/mode/behaviour"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/behaviour").Behaviour,i=function(){this.add("braces","insertion",function(B,A,z,y,x){if(x=="{"){var w=z.getSelectionRange(),v=y.doc.getTextRange(w);return v!==""?{text:"{"+v+"}",selection:!1}:{text:"{}",selection:[1,1]};}if(x=="}"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var r=y.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(r!==null){return{text:"",selection:[1,1]};}}}else{if(x=="\n"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var q=y.findMatchingBracket({row:u.row,column:u.column+1});if(!q){return !1;}var p=this.getNextLineIndent(B,t.substring(0,t.length-1),y.getTabString()),o=this.$getIndent(y.doc.getLine(q.row));return{text:"\n"+p+"\n"+o,selection:[1,p.length,1,p.length]};}}}return !1;}),this.add("braces","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="{"){var p=s.doc.getLine(r.start.row),o=p.substring(r.end.column,r.end.column+1);if(o=="}"){r.end.column++;return r;}}return !1;}),this.add("parens","insertion",function(w,v,u,t,s){if(s=="("){var r=u.getSelectionRange(),q=t.doc.getTextRange(r);return q!==""?{text:"("+q+")",selection:!1}:{text:"()",selection:[1,1]};}if(s==")"){var p=u.getCursorPosition(),o=t.doc.getLine(p.row),n=o.substring(p.column,p.column+1);if(n==")"){var m=t.$findOpeningBracket(")",{column:p.column+1,row:p.row});if(m!==null){return{text:"",selection:[1,1]};}}}return !1;}),this.add("parens","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="("){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o==")"){r.end.column++;return r;}}return !1;}),this.add("string_dquotes","insertion",function(F,E,D,C,B){if(B=='"'){var A=D.getSelectionRange(),z=C.doc.getTextRange(A);if(z!==""){return{text:'"'+z+'"',selection:!1};}var y=D.getCursorPosition(),x=C.doc.getLine(y.row),w=x.substring(y.column-1,y.column);if(w=="\\"){return !1;}var v=C.getTokens(A.start.row,A.start.row)[0].tokens,u=0,t,s=-1;for(var r=0;r<v.length;r++){t=v[r],t.type=="string"?s=-1:s<0&&(s=t.value.indexOf('"'));if(t.value.length+u>A.start.column){break;}u+=v[r].value.length;}if(!t||s<0&&t.type!=="comment"&&(t.type!=="string"||A.start.column!==t.value.length+u-1&&t.value.lastIndexOf('"')===t.value.length-1)){return{text:'""',selection:[1,1]};}if(t&&t.type==="string"){var q=x.substring(y.column,y.column+1);if(q=='"'){return{text:"",selection:[1,1]};}}}return !1;}),this.add("string_dquotes","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=='"'){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o=='"'){r.end.column++;return r;}}return !1;});};k.inherits(i,j),g.CstyleBehaviour=i;});},"@VERSION@",{skinnable:false,requires:["aui-ace-editor-base"]});