var Fe=Object.defineProperty;var de=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var _e=(r,e,o)=>e in r?Fe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,pe=(r,e)=>{for(var o in e||(e={}))Be.call(e,o)&&_e(r,o,e[o]);if(de)for(var o of de(e))He.call(e,o)&&_e(r,o,e[o]);return r};import{S as G,i as K,s as Q,ad as Je,e as v,t as q,k as C,j as O,c as I,a as y,g as L,d,n as M,m as V,K as E,f as p,L as w,o as A,x as b,u as D,v as N,$ as We,ae as he,l as j,r as $e,w as ge,a5 as Ge,af as Ke,M as ee,ag as Qe,ah as Ye,b as T,D as z,ai as Xe,aj as Ze,ab as xe,G as se,H as ne,I as re,J as le,ac as ae,ak as et,A as ie,al as be,am as De,an as tt,ao as ot,ap as st,N as nt,O as ce,Q as rt,aq as lt,U as ve,ar as Ie,as as te,at as we,au as ke,W as J,a8 as ye,h as oe,av as at,aw as it}from"../../chunks/vendor-e4153bd8.js";import{u as Te,d as fe,i as ue,r as W,g as ct,e as Y,f as Ee,c as ft,a as ut}from"../../chunks/store-acbdb0b4.js";import{g as mt,a as dt}from"../../chunks/canvas-257efe3e.js";import"../../chunks/singletons-12a22614.js";function je(r,e,o){const t=r.slice();return t[3]=e[o],t}function _t(r){let e=r[3].name+"",o,t;return{c(){o=q(e),t=C()},l(s){o=L(s,e),t=M(s)},m(s,l){p(s,o,l),p(s,t,l)},p:ee,d(s){s&&d(o),s&&d(t)}}}function Ce(r){let e,o;return e=new Ke({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),e.$on("SMUI:action",gt),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),o=!0},p(t,s){const l={};s&64&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function pt(r){let e,o,t=r[1],s=[];for(let n=0;n<t.length;n+=1)s[n]=Ce(je(r,t,n));const l=n=>D(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=j()},l(n){for(let a=0;a<s.length;a+=1)s[a].l(n);e=j()},m(n,a){for(let c=0;c<s.length;c+=1)s[c].m(n,a);p(n,e,a),o=!0},p(n,a){if(a&2){t=n[1];let c;for(c=0;c<t.length;c+=1){const i=je(n,t,c);s[c]?(s[c].p(i,a),b(s[c],1)):(s[c]=Ce(i),s[c].c(),b(s[c],1),s[c].m(e.parentNode,e))}for($e(),c=t.length;c<s.length;c+=1)l(c);ge()}},i(n){if(!o){for(let a=0;a<t.length;a+=1)b(s[a]);o=!0}},o(n){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)D(s[a]);o=!1},d(n){Ge(s,n),n&&d(e)}}}function ht(r){let e,o;return e=new he({props:{$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),o=!0},p(t,s){const l={};s&64&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function $t(r){let e,o,t,s,l,n={style:"left: 100px; top: 50px; width: 300px",$$slots:{default:[ht]},$$scope:{ctx:r}};return s=new Je({props:n}),r[2](s),{c(){e=v("h1"),o=q("6.036"),t=C(),O(s.$$.fragment),this.h()},l(a){e=I(a,"H1",{style:!0});var c=y(e);o=L(c,"6.036"),c.forEach(d),t=M(a),V(s.$$.fragment,a),this.h()},h(){E(e,"font-family","Roboto, sans-serif"),E(e,"font-weight","400"),E(e,"margin-left","8px"),E(e,"margin-top","10px"),E(e,"margin-bottom","12px"),E(e,"font-size","2.4rem")},m(a,c){p(a,e,c),w(e,o),p(a,t,c),A(s,a,c),l=!0},p(a,[c]){const i={};c&64&&(i.$$scope={dirty:c,ctx:a}),s.$set(i)},i(a){l||(b(s.$$.fragment,a),l=!0)},o(a){D(s.$$.fragment,a),l=!1},d(a){a&&d(e),a&&d(t),r[2](null),N(s,a)}}}const gt=()=>{};function bt(r,e,o){let t=[{name:"6.006"},{name:"6.036"}],s;function l(n){We[n?"unshift":"push"](()=>{s=n,o(0,s)})}return[s,t,l]}class Dt extends G{constructor(e){super();K(this,e,bt,$t,Q,{})}}function vt(r){let e;return{c(){e=v("div"),this.h()},l(o){e=I(o,"DIV",{id:!0,class:!0});var t=y(e);t.forEach(d),this.h()},h(){T(e,"id","sign-up-area"),T(e,"class","svelte-f4hgt4")},m(o,t){p(o,e,t)},i:ee,o:ee,d(o){o&&d(e)}}}function It(r){let e,o;return e=new Dt({}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),o=!0},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function wt(r){let e,o,t,s,l,n,a;const c=[It,vt],i=[];function f(u,m){return u[0]?0:1}return l=f(r),n=i[l]=c[l](r),{c(){e=v("div"),o=v("img"),s=C(),n.c(),this.h()},l(u){e=I(u,"DIV",{style:!0,class:!0});var m=y(e);o=I(m,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),s=M(m),n.l(m),m.forEach(d),this.h()},h(){xe(o.src,t="/logo.png")||T(o,"src",t),T(o,"width","55"),T(o,"height","50"),T(o,"alt","web-logo"),T(o,"class","svelte-f4hgt4"),E(e,"display","flex"),E(e,"align-items","center"),T(e,"class","svelte-f4hgt4")},m(u,m){p(u,e,m),w(e,o),w(e,s),i[l].m(e,null),a=!0},p(u,m){let _=l;l=f(u),l!==_&&($e(),D(i[_],1,1,()=>{i[_]=null}),ge(),n=i[l],n||(n=i[l]=c[l](u),n.c()),b(n,1),n.m(e,null))},i(u){a||(b(n),a=!0)},o(u){D(n),a=!1},d(u){u&&d(e),i[l].d()}}}function kt(r){let e;const o=r[1].default,t=se(o,r,r[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&4)&&ne(t,o,s,s[2],e?le(o,s[2],l,null):re(s[2]),null)},i(s){e||(b(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}function yt(r){let e,o,t,s,l;return o=new Ze({props:{padded:!0,style:"padding-top: 0; padding-bottom: 0",$$slots:{default:[wt]},$$scope:{ctx:r}}}),s=new he({props:{$$slots:{default:[kt]},$$scope:{ctx:r}}}),{c(){e=v("div"),O(o.$$.fragment),t=C(),O(s.$$.fragment),this.h()},l(n){e=I(n,"DIV",{class:!0});var a=y(e);V(o.$$.fragment,a),a.forEach(d),t=M(n),V(s.$$.fragment,n),this.h()},h(){T(e,"class","card-container svelte-f4hgt4")},m(n,a){p(n,e,a),A(o,e,null),p(n,t,a),A(s,n,a),l=!0},p(n,a){const c={};a&5&&(c.$$scope={dirty:a,ctx:n}),o.$set(c);const i={};a&4&&(i.$$scope={dirty:a,ctx:n}),s.$set(i)},i(n){l||(b(o.$$.fragment,n),b(s.$$.fragment,n),l=!0)},o(n){D(o.$$.fragment,n),D(s.$$.fragment,n),l=!1},d(n){n&&d(e),N(o),n&&d(t),N(s,n)}}}function Tt(r){let e,o;return e=new Xe({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),o=!0},p(t,s){const l={};s&5&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function Et(r){let e,o;return{c(){e=v("main"),o=v("div"),this.h()},l(t){e=I(t,"MAIN",{class:!0,style:!0});var s=y(e);o=I(s,"DIV",{id:!0,style:!0,class:!0});var l=y(o);l.forEach(d),s.forEach(d),this.h()},h(){T(o,"id","main-content"),E(o,"height","100vh"),T(o,"class","svelte-f4hgt4"),T(e,"class","main-content svelte-f4hgt4"),E(e,"padding","0")},m(t,s){p(t,e,s),w(e,o)},d(t){t&&d(e)}}}function jt(r){let e,o,t,s,l;return o=new Qe({props:{style:"overflow-y: scroll; height: 100%;",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),s=new Ye({props:{class:"app-content",$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){e=v("div"),O(o.$$.fragment),t=C(),O(s.$$.fragment),this.h()},l(n){e=I(n,"DIV",{class:!0});var a=y(e);V(o.$$.fragment,a),t=M(a),V(s.$$.fragment,a),a.forEach(d),this.h()},h(){T(e,"class","drawer-container svelte-f4hgt4")},m(n,a){p(n,e,a),A(o,e,null),w(e,t),A(s,e,null),l=!0},p(n,[a]){const c={};a&5&&(c.$$scope={dirty:a,ctx:n}),o.$set(c);const i={};a&4&&(i.$$scope={dirty:a,ctx:n}),s.$set(i)},i(n){l||(b(o.$$.fragment,n),b(s.$$.fragment,n),l=!0)},o(n){D(o.$$.fragment,n),D(s.$$.fragment,n),l=!1},d(n){n&&d(e),N(o),N(s)}}}function Ct(r,e,o){let t;z(r,Te,n=>o(0,t=n));let{$$slots:s={},$$scope:l}=e;return r.$$set=n=>{"$$scope"in n&&o(2,l=n.$$scope)},[t,s,l]}class Mt extends G{constructor(e){super();K(this,e,Ct,jt,Q,{})}}function Rt(r,e,o){let t,s,l;z(r,fe,g=>o(8,t=g)),z(r,Te,g=>o(9,s=g)),z(r,ue,g=>o(3,l=g));let{classID:n}=e,{roomID:a}=e,c,i,f,u,m,_=`Beaver #${Math.floor(Math.random()*(999-100+1)+100)}`;return ae(()=>{m&&m(),l&&(et(i),ue.set(!1)),u&&u.cancel()}),ie(()=>{W.set({}),f=be(De(),".info/connected"),m=tt(f,async g=>{if(g.val()===!0){const B=ct();c=be(De(),`/class/${n}/room/${a}/participants/${B}`),u=st(c),u.set({hasDisconnected:!0,userUID:s.uid}),o(2,i=nt(ce(),`classes/${n}/participants/${B}`)),rt(i,{uid:s.uid,browserTabID:t,currentRoomID:a,name:_}),ue.set(!0)}})}),r.$$set=g=>{"classID"in g&&o(0,n=g.classID),"roomID"in g&&o(1,a=g.roomID)},r.$$.update=()=>{r.$$.dirty&14&&l&&ot(i,{currentRoomID:a})},[n,a,i,l]}class St extends G{constructor(e){super();K(this,e,Rt,null,Q,{classID:0,roomID:1})}}const Ot="0ac8a98cf9bef2827f5beef5cd36c4f42a442863ce904a2469de12caa9097fa1",Vt=r=>({activeSpeakerID:r&2,firestoreIDToDailyID:r&1}),Me=r=>({toggleMic:r[2],activeSpeakerID:r[1],firestoreIDToDailyID:r[0]});function At(r){let e;const o=r[8].default,t=se(o,r,r[7],Me);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,[l]){t&&t.p&&(!e||l&131)&&ne(t,o,s,s[7],e?le(o,s[7],l,Vt):re(s[7]),Me)},i(s){e||(b(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}async function Nt({track:r,participant:e}){switch(r.kind){case"audio":if(e.local)return;{const o=document.createElement("audio");o.srcObject=new MediaStream([r]),o.setAttribute("id","audio"+e.user_id),o.setAttribute("playsinline",!0),o.setAttribute("autoplay",!0),document.getElementById("container-for-audio-elements").appendChild(o)}break}}async function Pt({track:r,participant:e}){const o=document.getElementById(r.id);o&&(o.srcObject=null,o.remove())}function zt(r,e,o){let t,s,l;z(r,Y,$=>o(10,t=$)),z(r,fe,$=>o(11,s=$)),z(r,Ee,$=>o(12,l=$));let{$$slots:n={},$$scope:a}=e,{roomID:c}=e,i,f,u,m,_,g="";ae(()=>{m==="connected"&&P()}),ie(async()=>{await B(),X()});async function B(){return new Promise(async $=>{if(!l){const k=await navigator.mediaDevices.getUserMedia({audio:!0});Ee.set(k)}const[S]=l.getAudioTracks();i=lt.createCallObject({audioSource:S,videoSource:!1});const Z=["participant-joined","participant-updated","participant-left"];for(const k of Z)i.on(k,()=>{Y.set(i.participants());const H={};for(const Le of Object.keys(t)){const x=t[Le];console.log("user_name, user_id =",x.user_name,x.user_id);const me=x.user_name;me&&(H[me]=x.user_id)}o(0,f=H)});i.on("track-started",Nt),i.on("track-stopped",Pt),i.on("active-speaker-change",({activeSpeaker:k})=>{o(1,g=k.peerId)}),i.on("load-attempt-failed",({action:k,errorMsg:H})=>{alert(k+": "+H)}),i.on("error",({action:k,errorMsg:H})=>{alert(k+": "+H)}),$()})}async function X(){o(4,u="not_connected"),o(5,m="connecting"),o(6,_=c);const{url:$}=await h();$&&(await U($),o(4,u="connecting"),o(5,m="connected"))}function h(){return new Promise(async $=>{try{const S=2*60*60,k=await(await fetch("https://api.daily.co/v1/rooms",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+Ot},body:JSON.stringify({name:c,properties:{exp:Math.round(Date.now()/1e3)+S,eject_at_room_exp:!0,start_video_off:!0}})})).json();k.error==="invalid-request-error"&&k.info===`a room named ${c} already exists`?$({url:`https://feynman.daily.co/${c}`}):(console.log("room =",k),$(k))}catch(S){console.error(S),alert(S),reject({url:""})}})}function U($){return new Promise(async(S,Z)=>{try{console.log("CallObject =",i),await i.join({url:$,userName:s}),S()}catch(k){console.log("error)"),alert(k),Z()}})}function R(){console.log("toggling mic"),i.setLocalAudio(!t.local.audio),Y.set(i.participants())}function P(){const $=document.querySelectorAll("audio");for(const S of $)S.remove();F(),o(4,u="connected"),o(5,m="not_connected")}function F(){i.leave(),Y.set({}),o(1,g="")}return r.$$set=$=>{"roomID"in $&&o(3,c=$.roomID),"$$scope"in $&&o(7,a=$.$$scope)},r.$$.update=()=>{r.$$.dirty&120&&u==="connecting"&&m==="connected"&&_!==c&&(console.log("part 1: user moved to a different room before voice chat connected"),P()),r.$$.dirty&120&&u==="connected"&&m==="not_connected"&&_!==c&&(console.log("part 2: ready to join the new room"),X())},[f,g,R,c,u,m,_,a,n]}class Ut extends G{constructor(e){super();K(this,e,zt,At,Q,{roomID:3})}}const qt=!0;function Re(r,e,o){const t=r.slice();return t[18]=e[o],t}function Se(r,e,o){const t=r.slice();return t[21]=e[o],t}function Oe(r){let e=[],o=new Map,t,s=r[2];const l=n=>n[18].id;for(let n=0;n<s.length;n+=1){let a=Re(r,s,n),c=l(a);o.set(c,e[n]=qe(c,a))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=j()},l(n){for(let a=0;a<e.length;a+=1)e[a].l(n);t=j()},m(n,a){for(let c=0;c<e.length;c+=1)e[c].m(n,a);p(n,t,a)},p(n,a){a&196671&&(s=n[2],e=we(e,a,l,1,n,s,o,t.parentNode,ke,qe,t,Re))},d(n){for(let a=0;a<e.length;a+=1)e[a].d(n);n&&d(t)}}}function Ve(r){let e,o,t,s,l,n;function a(m,_){if(m[18].name)return Ft;if(m[18].name==="")return Lt}let c=a(r),i=c&&c(r),f=r[3][r[18].id]&&Ae(r);function u(){return r[7](r[18])}return{c(){e=v("div"),o=v("div"),i&&i.c(),t=C(),f&&f.c(),s=C(),this.h()},l(m){e=I(m,"DIV",{style:!0});var _=y(e);o=I(_,"DIV",{style:!0,class:!0});var g=y(o);i&&i.l(g),t=M(g),f&&f.l(g),g.forEach(d),s=M(_),_.forEach(d),this.h()},h(){E(o,"padding","6px"),T(o,"class","svelte-2jizi9"),J(o,"selected",r[18].id===r[1]),J(o,"not-selected",r[18].id!==r[1]),E(e,"padding","6px")},m(m,_){p(m,e,_),w(e,o),i&&i.m(o,null),w(o,t),f&&f.m(o,null),w(e,s),l||(n=ye(e,"click",u),l=!0)},p(m,_){r=m,c===(c=a(r))&&i?i.p(r,_):(i&&i.d(1),i=c&&c(r),i&&(i.c(),i.m(o,t))),r[3][r[18].id]?f?f.p(r,_):(f=Ae(r),f.c(),f.m(o,null)):f&&(f.d(1),f=null),_&6&&J(o,"selected",r[18].id===r[1]),_&6&&J(o,"not-selected",r[18].id!==r[1])},d(m){m&&d(e),i&&i.d(),f&&f.d(),l=!1,n()}}}function Lt(r){let e,o;return{c(){e=v("div"),o=q("(no title)")},l(t){e=I(t,"DIV",{});var s=y(e);o=L(s,"(no title)"),s.forEach(d)},m(t,s){p(t,e,s),w(e,o)},p:ee,d(t){t&&d(e)}}}function Ft(r){let e,o=r[18].name+"",t;return{c(){e=v("div"),t=q(o),this.h()},l(s){e=I(s,"DIV",{class:!0});var l=y(e);t=L(l,o),l.forEach(d),this.h()},h(){T(e,"class","svelte-2jizi9"),J(e,"question-item",r[18].name.charAt(r[18].name.length-1)==="?")},m(s,l){p(s,e,l),w(e,t)},p(s,l){l&4&&o!==(o=s[18].name+"")&&oe(t,o),l&4&&J(e,"question-item",s[18].name.charAt(s[18].name.length-1)==="?")},d(s){s&&d(e)}}}function Ae(r){let e=[],o=new Map,t,s=r[3][r[18].id];const l=n=>n[21].browserTabID;for(let n=0;n<s.length;n+=1){let a=Se(r,s,n),c=l(a);o.set(c,e[n]=Ue(c,a))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=j()},l(n){for(let a=0;a<e.length;a+=1)e[a].l(n);t=j()},m(n,a){for(let c=0;c<e.length;c+=1)e[c].m(n,a);p(n,t,a)},p(n,a){a&196668&&(s=n[3][n[18].id],e=we(e,a,l,1,n,s,o,t.parentNode,ke,Ue,t,Se))},d(n){for(let a=0;a<e.length;a+=1)e[a].d(n);n&&d(t)}}}function Ne(r){let e,o,t=r[21].browserTabID===r[5]&&Pe(r),s=r[4][r[17][r[21].browserTabID]]&&ze(r);return{c(){t&&t.c(),e=C(),s&&s.c(),o=j()},l(l){t&&t.l(l),e=M(l),s&&s.l(l),o=j()},m(l,n){t&&t.m(l,n),p(l,e,n),s&&s.m(l,n),p(l,o,n)},p(l,n){l[21].browserTabID===l[5]?t?t.p(l,n):(t=Pe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),l[4][l[17][l[21].browserTabID]]?s?s.p(l,n):(s=ze(l),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},d(l){t&&t.d(l),l&&d(e),s&&s.d(l),l&&d(o)}}}function Pe(r){let e,o=(r[4].local.audio?"mute":"unmute")+"",t,s,l;return{c(){e=v("div"),t=q(o)},l(n){e=I(n,"DIV",{});var a=y(e);t=L(a,o),a.forEach(d)},m(n,a){p(n,e,a),w(e,t),s||(l=ye(e,"click",at(function(){it(r[16])&&r[16].apply(this,arguments)})),s=!0)},p(n,a){r=n,a&16&&o!==(o=(r[4].local.audio?"mute":"unmute")+"")&&oe(t,o)},d(n){n&&d(e),s=!1,l()}}}function ze(r){let e,o,t=r[4][r[17][r[21].browserTabID]].audio+"",s;return{c(){e=v("div"),o=q("isMicOn: "),s=q(t)},l(l){e=I(l,"DIV",{});var n=y(e);o=L(n,"isMicOn: "),s=L(n,t),n.forEach(d)},m(l,n){p(l,e,n),w(e,o),w(e,s)},p(l,n){n&131100&&t!==(t=l[4][l[17][l[21].browserTabID]].audio+"")&&oe(s,t)},d(l){l&&d(e)}}}function Ue(r,e){let o,t,s=e[21].name+"",l,n,a=Object.keys(e[4]).length>0,c,i=a&&Ne(e);return{key:r,first:null,c(){o=v("div"),t=v("div"),l=q(s),n=C(),i&&i.c(),c=C(),this.h()},l(f){o=I(f,"DIV",{style:!0});var u=y(o);t=I(u,"DIV",{style:!0});var m=y(t);l=L(m,s),m.forEach(d),n=M(u),i&&i.l(u),c=M(u),u.forEach(d),this.h()},h(){E(t,"font-size","0.7rem"),E(t,"margin-left","4px"),E(o,"display","flex"),this.first=o},m(f,u){p(f,o,u),w(o,t),w(t,l),w(o,n),i&&i.m(o,null),w(o,c)},p(f,u){e=f,u&12&&s!==(s=e[21].name+"")&&oe(l,s),u&16&&(a=Object.keys(e[4]).length>0),a?i?i.p(e,u):(i=Ne(e),i.c(),i.m(o,c)):i&&(i.d(1),i=null)},d(f){f&&d(o),i&&i.d()}}}function qe(r,e){let o,t,s=e[18].name!==void 0&&Ve(e);return{key:r,first:null,c(){o=j(),s&&s.c(),t=j(),this.h()},l(l){o=j(),s&&s.l(l),t=j(),this.h()},h(){this.first=o},m(l,n){p(l,o,n),s&&s.m(l,n),p(l,t,n)},p(l,n){e=l,e[18].name!==void 0?s?s.p(e,n):(s=Ve(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(l){l&&d(o),s&&s.d(l),l&&d(t)}}}function Bt(r){let e,o=r[2]&&Oe(r);return{c(){o&&o.c(),e=j()},l(t){o&&o.l(t),e=j()},m(t,s){o&&o.m(t,s),p(t,e,s)},p(t,s){t[2]?o?o.p(t,s):(o=Oe(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&d(e)}}}function Ht(r){let e,o;return e=new Mt({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),o=!0},p(t,s){const l={};s&196927&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function Jt(r){let e,o,t,s,l,n,a;e=new St({props:{classID:r[0],roomID:r[1]}}),l=new Ut({props:{roomID:r[1],$$slots:{default:[Ht,({isMicOn:f,activeSpeakerID:u,toggleMic:m,firestoreIDToDailyID:_})=>({14:f,15:u,16:m,17:_}),({isMicOn:f,activeSpeakerID:u,toggleMic:m,firestoreIDToDailyID:_})=>(f?16384:0)|(u?32768:0)|(m?65536:0)|(_?131072:0)]},$$scope:{ctx:r}}});const c=r[6].default,i=se(c,r,r[8],null);return{c(){O(e.$$.fragment),o=C(),t=v("div"),s=C(),O(l.$$.fragment),n=C(),i&&i.c(),this.h()},l(f){V(e.$$.fragment,f),o=M(f),t=I(f,"DIV",{id:!0});var u=y(t);u.forEach(d),s=M(f),V(l.$$.fragment,f),n=M(f),i&&i.l(f),this.h()},h(){T(t,"id","container-for-audio-elements")},m(f,u){A(e,f,u),p(f,o,u),p(f,t,u),p(f,s,u),A(l,f,u),p(f,n,u),i&&i.m(f,u),a=!0},p(f,[u]){const m={};u&1&&(m.classID=f[0]),u&2&&(m.roomID=f[1]),e.$set(m);const _={};u&2&&(_.roomID=f[1]),u&196927&&(_.$$scope={dirty:u,ctx:f}),l.$set(_),i&&i.p&&(!a||u&256)&&ne(i,c,f,f[8],a?le(c,f[8],u,null):re(f[8]),null)},i(f){a||(b(e.$$.fragment,f),b(l.$$.fragment,f),b(i,f),a=!0)},o(f){D(e.$$.fragment,f),D(l.$$.fragment,f),D(i,f),a=!1},d(f){N(e,f),f&&d(o),f&&d(t),f&&d(s),N(l,f),f&&d(n),i&&i.d(f)}}}function Zt({page:r}){return console.log("__layout load(), browser =",qt),{props:{classID:r.params.class,roomID:r.params.room}}}function Wt(r,e,o){let t,s,l;z(r,W,h=>o(3,t=h)),z(r,Y,h=>o(4,s=h)),z(r,fe,h=>o(5,l=h));let{$$slots:n={},$$scope:a}=e,{classID:c}=e,{roomID:i}=e,f;ae(()=>{for(const h of _)h();window.removeEventListener("resize",m)}),ie(()=>{console.log("__layout mounted, but should only be done once"),window.addEventListener("resize",m),m()});function u(){const{height:h,width:U}=dt();ft.set(h),ut.set(U)}function m(){setTimeout(u,100)}let _=[];const g=ve(ce(),`classes/${c}/participants`),B=ve(ce(),`classes/${c}/rooms`);_.push(Ie(B,h=>{const U=[];h.forEach(R=>{U.push(pe({id:R.id,ref:R.ref.path},R.data()))}),o(2,f=U)})),_.push(Ie(g,h=>{h.docChanges().forEach(U=>{const R=U.doc.data(),P=R.currentRoomID;switch(U.type){case"added":t[P]||te(W,t[P]=[],t),t[P].push(R);break;case"modified":for(const F of Object.keys(t))for(const $ of t[F])$.browserTabID===R.browserTabID&&(console.log("removing from array"),te(W,t[F]=t[F].filter(S=>S.browserTabID!==R.browserTabID),t));t[P]||te(W,t[P]=[],t),t[P].push(R);break;case"removed":te(W,t[P]=t[P].filter(F=>F.browserTabID!==R.browserTabID),t);break}console.log("$roomToPeople =",t)})}));const X=h=>mt(`/${c}/${h.id}`);return r.$$set=h=>{"classID"in h&&o(0,c=h.classID),"roomID"in h&&o(1,i=h.roomID),"$$scope"in h&&o(8,a=h.$$scope)},[c,i,f,t,s,l,n,X,a]}class xt extends G{constructor(e){super();K(this,e,Wt,Jt,Q,{classID:0,roomID:1})}}export{xt as default,Zt as load};
