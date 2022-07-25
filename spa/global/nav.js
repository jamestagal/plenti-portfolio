import{SvelteComponent,add_render_callback,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,listen,noop,prevent_default,run_all,safe_not_equal,space,text}from"../web_modules/svelte/internal/index.mjs";function create_fragment(e){let _=!1,V=()=>{_=!1},x,o,n,h,u,D,b,M,S,t,p,r,T,L,j,l,I,B,f,i,H,P,g,s,k,A,v,a,F,E,y,c,N,C,R,d,m,w,O,z,$;return add_render_callback(e[4]),{c(){o=element("nav"),n=element("div"),h=element("div"),u=element("a"),D=text("Portfo"),b=element("span"),M=text("lio."),S=space(),t=element("ul"),p=element("li"),r=element("a"),T=text("Home"),L=space(),j=element("li"),l=element("a"),I=text("About"),B=space(),f=element("li"),i=element("a"),H=text("Services"),P=space(),g=element("li"),s=element("a"),k=text("Skills"),A=space(),v=element("li"),a=element("a"),F=text("Teams"),E=space(),y=element("li"),c=element("a"),N=text("Contact"),R=space(),d=element("div"),m=element("i"),this.h()},l(e){o=claim_element(e,"NAV",{class:!0});var _,w,O,x,C,z,V,$,W,U,K,q,Y,G,X,Q,Z,J,ee=children(o);n=claim_element(ee,"DIV",{class:!0}),w=children(n),h=claim_element(w,"DIV",{class:!0}),z=children(h),u=claim_element(z,"A",{href:!0}),O=children(u),D=claim_text(O,"Portfo"),b=claim_element(O,"SPAN",{}),C=children(b),M=claim_text(C,"lio."),C.forEach(detach),O.forEach(detach),z.forEach(detach),S=claim_space(w),t=claim_element(w,"UL",{class:!0}),_=children(t),p=claim_element(_,"LI",{}),V=children(p),r=claim_element(V,"A",{href:!0,class:!0}),$=children(r),T=claim_text($,"Home"),$.forEach(detach),V.forEach(detach),L=claim_space(_),j=claim_element(_,"LI",{}),W=children(j),l=claim_element(W,"A",{href:!0,class:!0}),U=children(l),I=claim_text(U,"About"),U.forEach(detach),W.forEach(detach),B=claim_space(_),f=claim_element(_,"LI",{}),K=children(f),i=claim_element(K,"A",{href:!0,class:!0}),q=children(i),H=claim_text(q,"Services"),q.forEach(detach),K.forEach(detach),P=claim_space(_),g=claim_element(_,"LI",{}),Y=children(g),s=claim_element(Y,"A",{href:!0,class:!0}),G=children(s),k=claim_text(G,"Skills"),G.forEach(detach),Y.forEach(detach),A=claim_space(_),v=claim_element(_,"LI",{}),X=children(v),a=claim_element(X,"A",{href:!0,class:!0}),Q=children(a),F=claim_text(Q,"Teams"),Q.forEach(detach),X.forEach(detach),E=claim_space(_),y=claim_element(_,"LI",{}),Z=children(y),c=claim_element(Z,"A",{href:!0,class:!0}),J=children(c),N=claim_text(J,"Contact"),J.forEach(detach),Z.forEach(detach),_.forEach(detach),R=claim_space(w),d=claim_element(w,"DIV",{class:!0}),x=children(d),m=claim_element(x,"I",{class:!0}),children(m).forEach(detach),x.forEach(detach),w.forEach(detach),ee.forEach(detach),this.h()},h(){attr(u,"href","."),attr(h,"class","logo"),attr(r,"href","#home"),attr(r,"class","menu-btn"),attr(l,"href","#about"),attr(l,"class","menu-btn"),attr(i,"href","#services"),attr(i,"class","menu-btn"),attr(s,"href","#skills"),attr(s,"class","menu-btn"),attr(a,"href","#teams"),attr(a,"class","menu-btn"),attr(c,"href","#contact"),attr(c,"class","menu-btn"),attr(t,"class",C="menu"+(e[1]?" active":"")),attr(m,"class",w="fas fa-bars"+(e[1]?" active":"")),attr(d,"class","menu-btn"),attr(n,"class","max-width"),attr(o,"class",O="navbar "+(e[0]>20?" sticky":""))},m(w,O){insert(w,o,O),append(o,n),append(n,h),append(h,u),append(u,D),append(u,b),append(b,M),append(n,S),append(n,t),append(t,p),append(p,r),append(r,T),append(t,L),append(t,j),append(j,l),append(l,I),append(t,B),append(t,f),append(f,i),append(i,H),append(t,P),append(t,g),append(g,s),append(s,k),append(t,A),append(t,v),append(v,a),append(a,F),append(t,E),append(t,y),append(y,c),append(c,N),append(n,R),append(n,d),append(d,m),z||($=[listen(window,"scroll",()=>{_=!0,clearTimeout(x),x=setTimeout(V,100),e[4]()}),listen(r,"click",prevent_default(e[5])),listen(l,"click",prevent_default(e[6])),listen(i,"click",prevent_default(e[7])),listen(s,"click",prevent_default(e[8])),listen(a,"click",prevent_default(e[9])),listen(c,"click",prevent_default(e[10])),listen(d,"click",e[2])],z=!0)},p(e,[n]){n&1&&!_&&(_=!0,clearTimeout(x),scrollTo(window.pageXOffset,e[0]),x=setTimeout(V,100)),n&2&&C!==(C="menu"+(e[1]?" active":""))&&attr(t,"class",C),n&2&&w!==(w="fas fa-bars"+(e[1]?" active":""))&&attr(m,"class",w),n&1&&O!==(O="navbar "+(e[0]>20?" sticky":""))&&attr(o,"class",O)},i:noop,o:noop,d(e){e&&detach(o),z=!1,run_all($)}}}function instance(e,t,n){let i,o;const a=()=>{n(1,o=!o)},s=e=>{document.getElementById(e.target.hash.substring(1)).scrollIntoView()};function r(){n(0,i=window.pageYOffset)}const c=e=>s(e),l=e=>s(e),d=e=>s(e),u=e=>s(e),h=e=>s(e),m=e=>s(e);return[i,o,a,s,r,c,l,d,u,h,m]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export default Component