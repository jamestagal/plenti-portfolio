import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert,listen,noop,safe_not_equal,set_data,space,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";import{isAssetPath}from"./assets_checker.js";function get_each_context(e,t,n){const s=e.slice();return s[13]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[16]=t[n],s}function create_each_block_1(e){let t,n=e[16]+"",s,o,i,a;function r(){return e[9](e[16],e[13])}return{c(){t=element("button"),s=text(n),this.h()},l(e){t=claim_element(e,"BUTTON",{class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"class",o="filter"+(e[3](e[0],e[2](e[16],e[13]))?" active":"")+" svelte-atj9qf")},m(e,n){insert(e,t,n),append(t,s),i||(a=listen(t,"click",r),i=!0)},p(i,a){e=i,a&2&&n!==(n=e[16]+"")&&set_data(s,n),a&3&&o!==(o="filter"+(e[3](e[0],e[2](e[16],e[13]))?" active":"")+" svelte-atj9qf")&&attr(t,"class",o)},d(e){e&&detach(t),i=!1,a()}}}function create_each_block(e){let n,o,s=e[13],t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_1(get_each_context_1(e,s,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();o=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);o=claim_space(s),s.forEach(detach),this.h()},h(){attr(n,"class","filter-group svelte-atj9qf")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null);append(n,o)},p(e,i){if(i&31){s=e[13];let a;for(a=0;a<s.length;a+=1){const r=get_each_context_1(e,s,a);t[a]?t[a].p(r,i):(t[a]=create_each_block_1(r),t[a].c(),t[a].m(n,o))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_if_block(e){let n,t,i,s,o,a,r;return{c(){n=element("button"),t=svg_element("svg"),i=svg_element("path"),s=svg_element("line"),o=svg_element("line"),this.h()},l(e){n=claim_element(e,"BUTTON",{class:!0});var a,r=children(n);t=claim_element(r,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),a=children(t),i=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(i).forEach(detach),s=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(s).forEach(detach),o=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(o).forEach(detach),a.forEach(detach),r.forEach(detach),this.h()},h(){attr(i,"stroke","none"),attr(i,"d","M0 0h24v24H0z"),attr(i,"fill","none"),attr(s,"x1","18"),attr(s,"y1","6"),attr(s,"x2","6"),attr(s,"y2","18"),attr(o,"x1","6"),attr(o,"y1","6"),attr(o,"x2","18"),attr(o,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x"),attr(t,"width","20"),attr(t,"height","20"),attr(t,"viewBox","5 5 14 14"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(n,"class","close svelte-atj9qf")},m(c,l){insert(c,n,l),append(n,t),append(t,i),append(t,s),append(t,o),a||(r=listen(n,"click",e[5]),a=!0)},p:noop,d(e){e&&detach(n),a=!1,r()}}}function create_fragment(e){let s,o,a,i=e[1],t=[];for(let n=0;n<i.length;n+=1)t[n]=create_each_block(get_each_context(e,i,n));let n=e[0].length>0&&create_if_block(e);return{c(){s=element("div"),o=element("div");for(let e=0;e<t.length;e+=1)t[e].c();a=space(),n&&n.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var r,i=children(s);o=claim_element(i,"DIV",{class:!0}),r=children(o);for(let e=0;e<t.length;e+=1)t[e].l(r);r.forEach(detach),a=claim_space(i),n&&n.l(i),i.forEach(detach),this.h()},h(){attr(o,"class","filters svelte-atj9qf"),attr(s,"class","filters-wrapper svelte-atj9qf")},m(e,i){insert(e,s,i),append(s,o);for(let e=0;e<t.length;e+=1)t[e].m(o,null);append(s,a),n&&n.m(s,null)},p(e,[a]){if(a&31){i=e[1];let n;for(n=0;n<i.length;n+=1){const s=get_each_context(e,i,n);t[n]?t[n].p(s,a):(t[n]=create_each_block(s),t[n].c(),t[n].m(o,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}e[0].length>0?n?n.p(e,a):(n=create_if_block(e),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i:noop,o:noop,d(e){e&&detach(s),destroy_each(t,e),n&&n.d()}}}function instance(e,t,n){let{assets:i}=t,{filters:o=[]}=t,{enabledFilters:s=[]}=t,{filteredAssets:a=[]}=t,{singleSelect:r=!1}=t;const c=e=>{let t=e.split("/"),n=t.findIndex(e=>e==="assets")+1;return t.slice(n,-1)},m=(e,t)=>t.findIndex(t=>e.join("").includes(t.join("")));for(const e of i)if(isAssetPath(e)){let t=c(e);if(t.length>0){let e=m(t,o);e===-1?o=[...o,t]:o[e]=t}}const f=(e,t)=>t.find(t=>e.join("")===t.join("")),u=(e,t)=>{let n=t.findIndex(t=>t===e),s=t.slice(0,n+1);return s},h=(e,t)=>e.find(e=>e.join("")===t.join("")),l=e=>{r&&d(),h(s,e)?n(0,s=s.filter(t=>t.join("")!==e.join(""))):n(0,s=[...s,e])},d=()=>{n(0,s=[])},p=(e,t)=>l(u(e,t));return e.$$set=e=>{"assets"in e&&n(7,i=e.assets),"filters"in e&&n(1,o=e.filters),"enabledFilters"in e&&n(0,s=e.enabledFilters),"filteredAssets"in e&&n(6,a=e.filteredAssets),"singleSelect"in e&&n(8,r=e.singleSelect)},e.$$.update=()=>{if(e.$$.dirty&129)$:n(6,a=i.filter(e=>!s.length||f(c(e),s)))},[s,o,u,h,l,d,a,i,r,p]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{assets:7,filters:1,enabledFilters:0,filteredAssets:6,singleSelect:8})}}export default Component