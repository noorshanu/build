import{aL as Pe,aM as nt,az as it}from"./index-ba1db270.js";const Ae=i=>typeof i=="object"&&i!==null,H=new WeakMap,pe=new WeakSet,ot=(i=Object.is,c=(y,x)=>new Proxy(y,x),l=y=>Ae(y)&&!pe.has(y)&&(Array.isArray(y)||!(Symbol.iterator in y))&&!(y instanceof WeakMap)&&!(y instanceof WeakSet)&&!(y instanceof Error)&&!(y instanceof Number)&&!(y instanceof Date)&&!(y instanceof String)&&!(y instanceof RegExp)&&!(y instanceof ArrayBuffer),h=y=>{switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:throw y}},p=new WeakMap,d=(y,x,B=h)=>{const F=p.get(y);if((F==null?void 0:F[0])===x)return F[1];const b=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y));return Pe(b,!0),p.set(y,[x,b]),Reflect.ownKeys(y).forEach(W=>{if(Object.getOwnPropertyDescriptor(b,W))return;const R=Reflect.get(y,W),K={value:R,enumerable:!0,configurable:!0};if(pe.has(R))Pe(R,!1);else if(R instanceof Promise)delete K.value,K.get=()=>B(R);else if(H.has(R)){const[S,ce]=H.get(R);K.value=d(S,ce(),B)}Object.defineProperty(b,W,K)}),b},f=new WeakMap,s=[1,1],I=y=>{if(!Ae(y))throw new Error("object required");const x=f.get(y);if(x)return x;let B=s[0];const F=new Set,b=(m,g=++s[0])=>{B!==g&&(B=g,F.forEach(w=>w(m,g)))};let W=s[1];const R=(m=++s[1])=>(W!==m&&!F.size&&(W=m,S.forEach(([g])=>{const w=g[1](m);w>B&&(B=w)})),B),K=m=>(g,w)=>{const D=[...g];D[1]=[m,...D[1]],b(D,w)},S=new Map,ce=(m,g)=>{if(F.size){const w=g[3](K(m));S.set(m,[g,w])}else S.set(m,[g])},ue=m=>{var g;const w=S.get(m);w&&(S.delete(m),(g=w[1])==null||g.call(w))},Ee=m=>(F.add(m),F.size===1&&S.forEach(([w,D],J)=>{const q=w[3](K(J));S.set(J,[w,q])}),()=>{F.delete(m),F.size===0&&S.forEach(([w,D],J)=>{D&&(D(),S.set(J,[w]))})}),k=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y)),Q=c(k,{deleteProperty(m,g){const w=Reflect.get(m,g);ue(g);const D=Reflect.deleteProperty(m,g);return D&&b(["delete",[g],w]),D},set(m,g,w,D){const J=Reflect.has(m,g),q=Reflect.get(m,g,D);if(J&&(i(q,w)||f.has(w)&&i(q,f.get(w))))return!0;ue(g),Ae(w)&&(w=nt(w)||w);let X=w;if(w instanceof Promise)w.then(V=>{w.status="fulfilled",w.value=V,b(["resolve",[g],V])}).catch(V=>{w.status="rejected",w.reason=V,b(["reject",[g],V])});else{!H.has(w)&&l(w)&&(X=I(w));const V=!pe.has(X)&&H.get(X);V&&ce(g,V)}return Reflect.set(m,g,X,D),b(["set",[g],w,q]),!0}});f.set(y,Q);const Ie=[k,R,d,Ee];return H.set(Q,Ie),Reflect.ownKeys(y).forEach(m=>{const g=Object.getOwnPropertyDescriptor(y,m);"value"in g&&(Q[m]=y[m],delete g.value,delete g.writable),Object.defineProperty(k,m,g)}),Q})=>[I,H,pe,i,c,l,h,p,d,f,s],[st]=ot();function Z(i={}){return st(i)}function re(i,c,l){const h=H.get(i);let p;const d=[],f=h[3];let s=!1;const y=f(x=>{if(d.push(x),l){c(d.splice(0));return}p||(p=Promise.resolve().then(()=>{p=void 0,s&&c(d.splice(0))}))});return s=!0,()=>{s=!1,y()}}function at(i,c){const l=H.get(i),[h,p,d]=l;return d(h,p(),c)}var ve={},we={};we.byteLength=lt;we.toByteArray=ht;we.fromByteArray=yt;var Y=[],N=[],ct=typeof Uint8Array<"u"?Uint8Array:Array,be="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var oe=0,ut=be.length;oe<ut;++oe)Y[oe]=be[oe],N[be.charCodeAt(oe)]=oe;N["-".charCodeAt(0)]=62;N["_".charCodeAt(0)]=63;function ze(i){var c=i.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=i.indexOf("=");l===-1&&(l=c);var h=l===c?0:4-l%4;return[l,h]}function lt(i){var c=ze(i),l=c[0],h=c[1];return(l+h)*3/4-h}function ft(i,c,l){return(c+l)*3/4-l}function ht(i){var c,l=ze(i),h=l[0],p=l[1],d=new ct(ft(i,h,p)),f=0,s=p>0?h-4:h,I;for(I=0;I<s;I+=4)c=N[i.charCodeAt(I)]<<18|N[i.charCodeAt(I+1)]<<12|N[i.charCodeAt(I+2)]<<6|N[i.charCodeAt(I+3)],d[f++]=c>>16&255,d[f++]=c>>8&255,d[f++]=c&255;return p===2&&(c=N[i.charCodeAt(I)]<<2|N[i.charCodeAt(I+1)]>>4,d[f++]=c&255),p===1&&(c=N[i.charCodeAt(I)]<<10|N[i.charCodeAt(I+1)]<<4|N[i.charCodeAt(I+2)]>>2,d[f++]=c>>8&255,d[f++]=c&255),d}function pt(i){return Y[i>>18&63]+Y[i>>12&63]+Y[i>>6&63]+Y[i&63]}function dt(i,c,l){for(var h,p=[],d=c;d<l;d+=3)h=(i[d]<<16&16711680)+(i[d+1]<<8&65280)+(i[d+2]&255),p.push(pt(h));return p.join("")}function yt(i){for(var c,l=i.length,h=l%3,p=[],d=16383,f=0,s=l-h;f<s;f+=d)p.push(dt(i,f,f+d>s?s:f+d));return h===1?(c=i[l-1],p.push(Y[c>>2]+Y[c<<4&63]+"==")):h===2&&(c=(i[l-2]<<8)+i[l-1],p.push(Y[c>>10]+Y[c>>4&63]+Y[c<<2&63]+"=")),p.join("")}var _e={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */_e.read=function(i,c,l,h,p){var d,f,s=p*8-h-1,I=(1<<s)-1,y=I>>1,x=-7,B=l?p-1:0,F=l?-1:1,b=i[c+B];for(B+=F,d=b&(1<<-x)-1,b>>=-x,x+=s;x>0;d=d*256+i[c+B],B+=F,x-=8);for(f=d&(1<<-x)-1,d>>=-x,x+=h;x>0;f=f*256+i[c+B],B+=F,x-=8);if(d===0)d=1-y;else{if(d===I)return f?NaN:(b?-1:1)*(1/0);f=f+Math.pow(2,h),d=d-y}return(b?-1:1)*f*Math.pow(2,d-h)};_e.write=function(i,c,l,h,p,d){var f,s,I,y=d*8-p-1,x=(1<<y)-1,B=x>>1,F=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=h?0:d-1,W=h?1:-1,R=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(s=isNaN(c)?1:0,f=x):(f=Math.floor(Math.log(c)/Math.LN2),c*(I=Math.pow(2,-f))<1&&(f--,I*=2),f+B>=1?c+=F/I:c+=F*Math.pow(2,1-B),c*I>=2&&(f++,I/=2),f+B>=x?(s=0,f=x):f+B>=1?(s=(c*I-1)*Math.pow(2,p),f=f+B):(s=c*Math.pow(2,B-1)*Math.pow(2,p),f=0));p>=8;i[l+b]=s&255,b+=W,s/=256,p-=8);for(f=f<<p|s,y+=p;y>0;i[l+b]=f&255,b+=W,f/=256,y-=8);i[l+b-W]|=R*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const c=we,l=_e,h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=s,i.SlowBuffer=ce,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p,s.TYPED_ARRAY_SUPPORT=d(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function f(r){if(r>p)throw new RangeError('The value "'+r+'" is invalid for option "size"');const e=new Uint8Array(r);return Object.setPrototypeOf(e,s.prototype),e}function s(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B(r)}return I(r,e,t)}s.poolSize=8192;function I(r,e,t){if(typeof r=="string")return F(r,e);if(ArrayBuffer.isView(r))return W(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if($(r,ArrayBuffer)||r&&$(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($(r,SharedArrayBuffer)||r&&$(r.buffer,SharedArrayBuffer)))return R(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return s.from(n,e,t);const o=K(r);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return s.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}s.from=function(r,e,t){return I(r,e,t)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function y(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function x(r,e,t){return y(r),r<=0?f(r):e!==void 0?typeof t=="string"?f(r).fill(e,t):f(r).fill(e):f(r)}s.alloc=function(r,e,t){return x(r,e,t)};function B(r){return y(r),f(r<0?0:S(r)|0)}s.allocUnsafe=function(r){return B(r)},s.allocUnsafeSlow=function(r){return B(r)};function F(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const t=ue(r,e)|0;let n=f(t);const o=n.write(r,e);return o!==t&&(n=n.slice(0,o)),n}function b(r){const e=r.length<0?0:S(r.length)|0,t=f(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}function W(r){if($(r,Uint8Array)){const e=new Uint8Array(r);return R(e.buffer,e.byteOffset,e.byteLength)}return b(r)}function R(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,s.prototype),n}function K(r){if(s.isBuffer(r)){const e=S(r.length)|0,t=f(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Be(r.length)?f(0):b(r);if(r.type==="Buffer"&&Array.isArray(r.data))return b(r.data)}function S(r){if(r>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return r|0}function ce(r){return+r!=r&&(r=0),s.alloc(+r)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if($(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,o=t.length;for(let a=0,u=Math.min(n,o);a<u;++a)if(e[a]!==t[a]){n=e[a],o=t[a];break}return n<o?-1:o<n?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return s.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const o=s.allocUnsafe(t);let a=0;for(n=0;n<e.length;++n){let u=e[n];if($(u,Uint8Array))a+u.length>o.length?(s.isBuffer(u)||(u=s.from(u)),u.copy(o,a)):Uint8Array.prototype.set.call(o,u,a);else if(s.isBuffer(u))u.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return o};function ue(r,e){if(s.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||$(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return xe(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Me(r).length;default:if(o)return n?-1:xe(r).length;e=(""+e).toLowerCase(),o=!0}}s.byteLength=ue;function Ee(r,e,t){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return qe(this,e,t);case"utf8":case"utf-8":return q(this,e,t);case"ascii":return Ke(this,e,t);case"latin1":case"binary":return Je(this,e,t);case"base64":return J(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ge(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function k(r,e,t){const n=r[e];r[e]=r[t],r[t]=n}s.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)k(this,t,t+1);return this},s.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)k(this,t,t+3),k(this,t+1,t+2);return this},s.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)k(this,t,t+7),k(this,t+1,t+6),k(this,t+2,t+5),k(this,t+3,t+4);return this},s.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?q(this,0,e):Ee.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:s.compare(this,e)===0},s.prototype.inspect=function(){let e="";const t=i.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},h&&(s.prototype[h]=s.prototype.inspect),s.prototype.compare=function(e,t,n,o,a){if($(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||n>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=n)return 0;if(o>=a)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,o>>>=0,a>>>=0,this===e)return 0;let u=a-o,E=n-t;const C=Math.min(u,E),U=this.slice(o,a),_=e.slice(t,n);for(let A=0;A<C;++A)if(U[A]!==_[A]){u=U[A],E=_[A];break}return u<E?-1:E<u?1:0};function ge(r,e,t,n,o){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Be(t)&&(t=o?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(o)return-1;t=r.length-1}else if(t<0)if(o)t=0;else return-1;if(typeof e=="string"&&(e=s.from(e,n)),s.isBuffer(e))return e.length===0?-1:Q(r,e,t,n,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Q(r,[e],t,n,o);throw new TypeError("val must be string, number or Buffer")}function Q(r,e,t,n,o){let a=1,u=r.length,E=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,E/=2,t/=2}function C(_,A){return a===1?_[A]:_.readUInt16BE(A*a)}let U;if(o){let _=-1;for(U=t;U<u;U++)if(C(r,U)===C(e,_===-1?0:U-_)){if(_===-1&&(_=U),U-_+1===E)return _*a}else _!==-1&&(U-=U-_),_=-1}else for(t+E>u&&(t=u-E),U=t;U>=0;U--){let _=!0;for(let A=0;A<E;A++)if(C(r,U+A)!==C(e,A)){_=!1;break}if(_)return U}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return ge(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return ge(this,e,t,n,!1)};function Ie(r,e,t,n){t=Number(t)||0;const o=r.length-t;n?(n=Number(n),n>o&&(n=o)):n=o;const a=e.length;n>a/2&&(n=a/2);let u;for(u=0;u<n;++u){const E=parseInt(e.substr(u*2,2),16);if(Be(E))return u;r[t+u]=E}return u}function m(r,e,t,n){return he(xe(e,r.length-t),r,t,n)}function g(r,e,t,n){return he(Xe(e),r,t,n)}function w(r,e,t,n){return he(Me(e),r,t,n)}function D(r,e,t,n){return he(et(e,r.length-t),r,t,n)}s.prototype.write=function(e,t,n,o){if(t===void 0)o="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")o=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const a=this.length-t;if((n===void 0||n>a)&&(n=a),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let u=!1;for(;;)switch(o){case"hex":return Ie(this,e,t,n);case"utf8":case"utf-8":return m(this,e,t,n);case"ascii":case"latin1":case"binary":return g(this,e,t,n);case"base64":return w(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,e,t,n);default:if(u)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),u=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function J(r,e,t){return e===0&&t===r.length?c.fromByteArray(r):c.fromByteArray(r.slice(e,t))}function q(r,e,t){t=Math.min(r.length,t);const n=[];let o=e;for(;o<t;){const a=r[o];let u=null,E=a>239?4:a>223?3:a>191?2:1;if(o+E<=t){let C,U,_,A;switch(E){case 1:a<128&&(u=a);break;case 2:C=r[o+1],(C&192)===128&&(A=(a&31)<<6|C&63,A>127&&(u=A));break;case 3:C=r[o+1],U=r[o+2],(C&192)===128&&(U&192)===128&&(A=(a&15)<<12|(C&63)<<6|U&63,A>2047&&(A<55296||A>57343)&&(u=A));break;case 4:C=r[o+1],U=r[o+2],_=r[o+3],(C&192)===128&&(U&192)===128&&(_&192)===128&&(A=(a&15)<<18|(C&63)<<12|(U&63)<<6|_&63,A>65535&&A<1114112&&(u=A))}}u===null?(u=65533,E=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|u&1023),n.push(u),o+=E}return V(n)}const X=4096;function V(r){const e=r.length;if(e<=X)return String.fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=X));return t}function Ke(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]&127);return n}function Je(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]);return n}function qe(r,e,t){const n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let o="";for(let a=e;a<t;++a)o+=tt[r[a]];return o}function Ge(r,e,t){const n=r.slice(e,t);let o="";for(let a=0;a<n.length-1;a+=2)o+=String.fromCharCode(n[a]+n[a+1]*256);return o}s.prototype.slice=function(e,t){const n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);const o=this.subarray(e,t);return Object.setPrototypeOf(o,s.prototype),o};function L(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||L(e,t,this.length);let o=this[e],a=1,u=0;for(;++u<t&&(a*=256);)o+=this[e+u]*a;return o},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||L(e,t,this.length);let o=this[e+--t],a=1;for(;t>0&&(a*=256);)o+=this[e+--t]*a;return o},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e=e>>>0,t||L(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||L(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||L(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=G(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(o)+(BigInt(a)<<BigInt(32))}),s.prototype.readBigUInt64BE=G(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(o)<<BigInt(32))+BigInt(a)}),s.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||L(e,t,this.length);let o=this[e],a=1,u=0;for(;++u<t&&(a*=256);)o+=this[e+u]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},s.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||L(e,t,this.length);let o=t,a=1,u=this[e+--o];for(;o>0&&(a*=256);)u+=this[e+--o]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u},s.prototype.readInt8=function(e,t){return e=e>>>0,t||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e=e>>>0,t||L(e,2,this.length);const n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e=e>>>0,t||L(e,2,this.length);const n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=G(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),s.prototype.readBigInt64BE=G(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),s.prototype.readFloatLE=function(e,t){return e=e>>>0,t||L(e,4,this.length),l.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e=e>>>0,t||L(e,4,this.length),l.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||L(e,8,this.length),l.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||L(e,8,this.length),l.read(this,e,!1,52,8)};function P(r,e,t,n,o,a){if(!s.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<a)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const E=Math.pow(2,8*n)-1;P(this,e,t,n,E,0)}let a=1,u=0;for(this[t]=e&255;++u<n&&(a*=256);)this[t+u]=e/a&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const E=Math.pow(2,8*n)-1;P(this,e,t,n,E,0)}let a=n-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Fe(r,e,t,n,o){De(e,n,o,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Le(r,e,t,n,o){De(e,n,o,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}s.prototype.writeBigUInt64LE=G(function(e,t=0){return Fe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=G(function(e,t=0){return Le(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const C=Math.pow(2,8*n-1);P(this,e,t,n,C-1,-C)}let a=0,u=1,E=0;for(this[t]=e&255;++a<n&&(u*=256);)e<0&&E===0&&this[t+a-1]!==0&&(E=1),this[t+a]=(e/u>>0)-E&255;return t+n},s.prototype.writeIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const C=Math.pow(2,8*n-1);P(this,e,t,n,C-1,-C)}let a=n-1,u=1,E=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&E===0&&this[t+a+1]!==0&&(E=1),this[t+a]=(e/u>>0)-E&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeBigInt64LE=G(function(e,t=0){return Fe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=G(function(e,t=0){return Le(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Te(r,e,t,n,o,a){if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Oe(r,e,t,n,o){return e=+e,t=t>>>0,o||Te(r,e,t,4),l.write(r,e,t,n,23,4),t+4}s.prototype.writeFloatLE=function(e,t,n){return Oe(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return Oe(this,e,t,!1,n)};function Re(r,e,t,n,o){return e=+e,t=t>>>0,o||Te(r,e,t,8),l.write(r,e,t,n,52,8),t+8}s.prototype.writeDoubleLE=function(e,t,n){return Re(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return Re(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,o){if(!s.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<n&&(o=n),o===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n);const a=o-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,o):Uint8Array.prototype.set.call(e,this.subarray(n,o),t),a},s.prototype.fill=function(e,t,n,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!s.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){const u=e.charCodeAt(0);(o==="utf8"&&u<128||o==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<n;++a)this[a]=e;else{const u=s.isBuffer(e)?e:s.from(e,o),E=u.length;if(E===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=u[a%E]}return this};const ne={};function me(r,e,t){ne[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}me("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),me("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError),me("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=Se(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=Se(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n},RangeError);function Se(r){let e="",t=r.length;const n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function He(r,e,t){ie(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&le(e,r.length-(t+1))}function De(r,e,t,n,o,a){if(r>t||r<e){const u=typeof e=="bigint"?"n":"";let E;throw a>3?e===0||e===BigInt(0)?E=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:E=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:E=`>= ${e}${u} and <= ${t}${u}`,new ne.ERR_OUT_OF_RANGE("value",E,r)}He(n,o,a)}function ie(r,e){if(typeof r!="number")throw new ne.ERR_INVALID_ARG_TYPE(e,"number",r)}function le(r,e,t){throw Math.floor(r)!==r?(ie(r,t),new ne.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new ne.ERR_BUFFER_OUT_OF_BOUNDS:new ne.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}const Ze=/[^+/0-9A-Za-z-_]/g;function Qe(r){if(r=r.split("=")[0],r=r.trim().replace(Ze,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function xe(r,e){e=e||1/0;let t;const n=r.length;let o=null;const a=[];for(let u=0;u<n;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!o){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===n){(e-=3)>-1&&a.push(239,191,189);continue}o=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),o=t;continue}t=(o-55296<<10|t-56320)+65536}else o&&(e-=3)>-1&&a.push(239,191,189);if(o=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Xe(r){const e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function et(r,e){let t,n,o;const a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),n=t>>8,o=t%256,a.push(o),a.push(n);return a}function Me(r){return c.toByteArray(Qe(r))}function he(r,e,t,n){let o;for(o=0;o<n&&!(o+t>=e.length||o>=r.length);++o)e[o+t]=r[o];return o}function $(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Be(r){return r!==r}const tt=function(){const r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let o=0;o<16;++o)e[n+o]=r[t]+r[o]}return e}();function G(r){return typeof BigInt>"u"?rt:r}function rt(){throw new Error("BigInt not supported")}})(ve);const T=Z({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),Ye={state:T,subscribe(i){return re(T,()=>i(T))},push(i,c){i!==T.view&&(T.view=i,c&&(T.data=c),T.history.push(i))},reset(i){T.view=i,T.history=[i]},replace(i){T.history.length>1&&(T.history[T.history.length-1]=i,T.view=i)},goBack(){if(T.history.length>1){T.history.pop();const[i]=T.history.slice(-1);T.view=i}},setData(i){T.data=i}},M={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return M.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const i=navigator.userAgent.toLowerCase();return M.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},isArray(i){return Array.isArray(i)&&i.length>0},formatNativeUrl(i,c,l){if(M.isHttpUrl(i))return this.formatUniversalUrl(i,c,l);let h=i;h.includes("://")||(h=i.replaceAll("/","").replaceAll(":",""),h=`${h}://`),h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(c);return`${h}wc?uri=${p}`},formatUniversalUrl(i,c,l){if(!M.isHttpUrl(i))return this.formatNativeUrl(i,c,l);let h=i;h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(c);return`${h}wc?uri=${p}`},async wait(i){return new Promise(c=>{setTimeout(c,i)})},openHref(i,c){window.open(i,c,"noreferrer noopener")},setWalletConnectDeepLink(i,c){try{localStorage.setItem(M.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:i,name:c}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(i){try{const[c]=i.split("?");localStorage.setItem(M.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:c,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(M.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(M.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var i;const c=(i=Ye.state.data)==null?void 0:i.Wallet;if(!c)throw new Error('Missing "Wallet" view data');return c}},wt=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),O=Z({enabled:wt,userSessionId:"",events:[],connectedWalletId:void 0}),Et={state:O,subscribe(i){return re(O.events,()=>i(at(O.events[O.events.length-1])))},initialize(){O.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(O.userSessionId=crypto.randomUUID())},setConnectedWalletId(i){O.connectedWalletId=i},click(i){if(O.enabled){const c={type:"CLICK",name:i.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:i};O.events.push(c)}},track(i){if(O.enabled){const c={type:"TRACK",name:i.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:i};O.events.push(c)}},view(i){if(O.enabled){const c={type:"VIEW",name:i.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:i};O.events.push(c)}}},v=Z({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),j={state:v,subscribe(i){return re(v,()=>i(v))},setChains(i){v.chains=i},setWalletConnectUri(i){v.walletConnectUri=i},setIsCustomDesktop(i){v.isCustomDesktop=i},setIsCustomMobile(i){v.isCustomMobile=i},setIsDataLoaded(i){v.isDataLoaded=i},setIsUiLoaded(i){v.isUiLoaded=i},setIsAuth(i){v.isAuth=i}},de=Z({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),ae={state:de,subscribe(i){return re(de,()=>i(de))},setConfig(i){var c,l;Et.initialize(),j.setChains(i.chains),j.setIsAuth(!!i.enableAuthMode),j.setIsCustomMobile(!!((c=i.mobileWallets)!=null&&c.length)),j.setIsCustomDesktop(!!((l=i.desktopWallets)!=null&&l.length)),M.setModalVersionInStorage(),Object.assign(de,i)}},Ce="https://explorer-api.walletconnect.com";async function ye(i,c){const l=new URL(i,Ce);return l.searchParams.append("projectId",ae.state.projectId),Object.entries(c).forEach(([h,p])=>{p&&l.searchParams.append(h,String(p))}),(await fetch(l)).json()}const ee={async getDesktopListings(i){return ye("/w3m/v1/getDesktopListings",i)},async getMobileListings(i){return ye("/w3m/v1/getMobileListings",i)},async getInjectedListings(i){return ye("/w3m/v1/getInjectedListings",i)},async getAllListings(i){return ye("/w3m/v1/getAllListings",i)},getWalletImageUrl(i){return`${Ce}/w3m/v1/getWalletImage/${i}?projectId=${ae.state.projectId}`},getAssetImageUrl(i){return`${Ce}/w3m/v1/getAssetImage/${i}?projectId=${ae.state.projectId}`}};var gt=Object.defineProperty,We=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,Ne=(i,c,l)=>c in i?gt(i,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[c]=l,xt=(i,c)=>{for(var l in c||(c={}))It.call(c,l)&&Ne(i,l,c[l]);if(We)for(var l of We(c))mt.call(c,l)&&Ne(i,l,c[l]);return i};const ke=M.isMobile(),z=Z({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Tt={state:z,async getRecomendedWallets(){const{explorerRecommendedWalletIds:i,explorerExcludedWalletIds:c}=ae.state;if(i==="NONE"||c==="ALL"&&!i)return z.recomendedWallets;if(M.isArray(i)){const l={recommendedIds:i.join(",")},{listings:h}=await ee.getAllListings(l),p=Object.values(h);p.sort((d,f)=>{const s=i.indexOf(d.id),I=i.indexOf(f.id);return s-I}),z.recomendedWallets=p}else{const{chains:l,isAuth:h}=j.state,p=l==null?void 0:l.join(","),d=M.isArray(c),f={page:1,sdks:h?"auth_v1":void 0,entries:M.RECOMMENDED_WALLET_AMOUNT,chains:p,version:2,excludedIds:d?c.join(","):void 0},{listings:s}=ke?await ee.getMobileListings(f):await ee.getDesktopListings(f);z.recomendedWallets=Object.values(s)}return z.recomendedWallets},async getWallets(i){const c=xt({},i),{explorerRecommendedWalletIds:l,explorerExcludedWalletIds:h}=ae.state,{recomendedWallets:p}=z;if(h==="ALL")return z.wallets;p.length?c.excludedIds=p.map(B=>B.id).join(","):M.isArray(l)&&(c.excludedIds=l.join(",")),M.isArray(h)&&(c.excludedIds=[c.excludedIds,h].filter(Boolean).join(",")),j.state.isAuth&&(c.sdks="auth_v1");const{page:d,search:f}=i,{listings:s,total:I}=ke?await ee.getMobileListings(c):await ee.getDesktopListings(c),y=Object.values(s),x=f?"search":"wallets";return z[x]={listings:[...z[x].listings,...y],total:I,page:d??1},{listings:y,total:I}},getWalletImageUrl(i){return ee.getWalletImageUrl(i)},getAssetImageUrl(i){return ee.getAssetImageUrl(i)},resetSearch(){z.search={listings:[],total:0,page:1}}},se=Z({open:!1}),Ue={state:se,subscribe(i){return re(se,()=>i(se))},async open(i){return new Promise(c=>{const{isUiLoaded:l,isDataLoaded:h}=j.state;if(j.setWalletConnectUri(i==null?void 0:i.uri),j.setChains(i==null?void 0:i.chains),Ye.reset("ConnectWallet"),l&&h)se.open=!0,c();else{const p=setInterval(()=>{const d=j.state;d.isUiLoaded&&d.isDataLoaded&&(clearInterval(p),se.open=!0,c())},200)}})},close(){se.open=!1}};var Bt=Object.defineProperty,je=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,Ve=(i,c,l)=>c in i?Bt(i,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[c]=l,Ut=(i,c)=>{for(var l in c||(c={}))At.call(c,l)&&Ve(i,l,c[l]);if(je)for(var l of je(c))bt.call(c,l)&&Ve(i,l,c[l]);return i};function Ct(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const fe=Z({themeMode:Ct()?"dark":"light"}),$e={state:fe,subscribe(i){return re(fe,()=>i(fe))},setThemeConfig(i){const{themeMode:c,themeVariables:l}=i;c&&(fe.themeMode=c),l&&(fe.themeVariables=Ut({},l))}},te=Z({open:!1,message:"",variant:"success"}),Ot={state:te,subscribe(i){return re(te,()=>i(te))},openToast(i,c){te.open=!0,te.message=i,te.variant=c},closeToast(){te.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ve.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class _t{constructor(c){this.openModal=Ue.open,this.closeModal=Ue.close,this.subscribeModal=Ue.subscribe,this.setTheme=$e.setThemeConfig,$e.setThemeConfig(c),ae.setConfig(c),this.initUi()}async initUi(){if(typeof window<"u"){await it(()=>import("./index-87f2f474.js"),["assets/index-87f2f474.js","assets/if-defined-af1d23a0.js","assets/index-ba1db270.js","assets/index-6d1ea369.css"]);const c=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",c),j.setIsUiLoaded(!0)}}}const Rt=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:_t},Symbol.toStringTag,{value:"Module"}));export{Et as $,ae as C,Tt as G,Ye as N,Ue as Q,$e as X,Ot as Y,Rt as a,j as c,M as i};