(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{53:function(n,e,t){n.exports=t.p+"md/cbf45b0edc3ab2dc2b7bcf73ce11f02b.md"},68:function(n,e,t){"use strict";t.r(e);var r=t(12),o=t.n(r),c=t(13),s=t.n(c),a=t(14),i=t.n(a),u=t(15),l=t.n(u),d=t(16),f=t.n(d),h=t(0),p=t.n(h),m=t(78),g=t.n(m),k=t(11),v=t.n(k),x=v.a.escapeHtml,b=v.a.unescapeAll,w=g()("commonmark");w.use(function(n,e,t,r){n.core.ruler.push(e,function(n){var e,t;for(console.log(n),e=n.tokens.length-1;0<=e;e--)"heading_open"===n.tokens[e].type&&(n.tokens[e].attrs=[],t=n.tokens,console.log(n.tokens[e]),r(t,e))})},"url_new_win","heading_open",function(n,e){console.log(n[e]),n[e].attrPush(["className","xxxx"])}),w.renderer.rules.image,w.renderer.rules.fence=function(n,e,t,r,o){var c,s,a,i,u=n[e],l=u.info?b(u.info).trim():"",d="";return l&&(d=l.split(/\s+/g)[0]),0===(c=t.highlight&&t.highlight(u.content,d)||x(u.content)).indexOf("<pre")?c+"\n":l?(s=u.attrIndex("class"),a=u.attrs?u.attrs.slice():[],s<0?a.push(["class",t.langPrefix+d]):a[s][1]+=" "+t.langPrefix+d,i={attrs:a},"<pre><code"+o.renderAttrs(i)+">"+c+"</code></pre>\n"):'<pre style="border: 1px solid black"><code'+o.renderAttrs(u)+">"+c+"</code></pre>\n"},w.renderer.rules.text=function(n,e){return x(n[e].content)},w.renderer.html_block=function(n,e){return n[e].content},w.renderer.html_inline=function(n,e){return n[e].content};var y=function(n){function e(){var n;return o()(this,e),(n=i()(this,l()(e).apply(this,arguments))).renderHtml=function(n){return w.render(n)},n}return f()(e,n),s()(e,[{key:"render",value:function(){return p.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.renderHtml(this.props.src)}})}}]),e}(p.a.Component);y.defaultProps={src:"nothing"};var _=y,H=t(53),P=t.n(H),A=t(33),E=t.n(A);t.d(e,"default",function(){return C});var C=function(n){function e(){var n;return o()(this,e),(n=i()(this,l()(e).apply(this,arguments))).state={markdown:""},n}return f()(e,n),s()(e,[{key:"componentWillMount",value:function(){var n=this;E.a.start(),fetch(P.a).then(function(n){return n.text()}).then(function(e){n.setState({markdown:e}),E.a.done(),console.log(e.match(/(#+)(.*)/g))})}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(_,{src:this.state.markdown}))}}]),e}(p.a.Component)}}]);