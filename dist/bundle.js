(()=>{"use strict";class e{id;name;username;email;picture;constructor(e,t,a,d){this.id=e,this.name=t,this.username=a,this.email=d}}class t{id;title;body;image;writer;constructor(e,t,a){this.id=e,this.title=t,this.body=a}get writerGet(){return this.writer}set writerSet(e){this.writer=e}}window.onload=()=>{n()};let a=[],d=[];const s="https://jsonplaceholder.typicode.com/",n=()=>{fetch(s+"users").then((e=>e.json())).then((t=>{t.forEach(((t,a)=>{let s=new e(t.id,t.name,t.username,t.email);s.picture=`../images/author-${a}.png`,d.push(s)}))})),setTimeout((()=>{fetch(s+"posts").then((e=>e.json())).then((e=>{for(let s=0;s<20;s++){let n=new t(e[s].id,e[s].title,e[s].body);n.image=`../images/insta-post-${s}.png`,console.log("userList em getPosts",d),console.log(n);let i=!1;for(let t=0;t<d.length&&!i;t++)i=!1,d[t].id===e[s].userId&&(n.writerSet=d[t],i=!0);a.push(n)}a.forEach((e=>c(e)))}))}),500)},i=document.getElementsByClassName("feature-list")[0],c=e=>{const t=document.createElement("li"),a=document.createElement("div");a.classList.add("card"),a.classList.add("feature-card");const d=document.createElement("figure");d.classList.add("card-banner"),d.classList.add("img-holder"),d.style.setProperty("--width","1602"),d.style.setProperty("--height","903");const s=document.createElement("img");s.classList.add("img-cover"),s.src=e.image,s.width=1603,s.height=903,s.loading="lazy",s.alt="New York at night full of neon lights";const n=document.createElement("div");n.classList.add("card-content");const c=document.createElement("div");c.classList.add("card-content");const l=document.createElement("div");l.classList.add("card-tag");const r=document.createElement("a");r.href="#tags",r.classList.add("span"),r.classList.add("hover-2"),r.innerText="#Travel";const o=document.createElement("a");o.href="#tags",o.classList.add("span"),o.classList.add("hover-2"),o.innerText="#Lifestyle";const m=document.createElement("div");m.classList.add("wrapper");const h=document.createElement("ion-icon");h.name="time-outline",h.ariaHidden="true";const p=document.createElement("span");p.classList.add("span");const u=document.createElement("h3");u.classList.add("headline"),u.classList.add("headline-3");const g=document.createElement("a");g.href="#",g.classList.add("card-title"),g.classList.add("hover-2"),g.innerText=e.title;const L=document.createElement("div");L.classList.add("card-wrapper");const E=document.createElement("div");E.classList.add("profile-card");const C=document.createElement("img");C.src=e.writerGet.picture,C.width=48,C.height=48,C.loading="lazy",C.alt=e.writerGet.name,C.classList.add("profile-banner");const w=document.createElement("div"),f=document.createElement("p");f.classList.add("card-title"),f.innerText=e.writerGet.name;const v=document.createElement("p");v.classList.add("card-subtitle"),v.innerText="25 Nov 2022";const y=document.createElement("a");y.href="#",y.classList.add("card-btn"),y.innerText="Read more",l.appendChild(r),l.appendChild(o),m.appendChild(h),m.appendChild(p),c.appendChild(l),c.appendChild(m),u.appendChild(g),w.appendChild(f),w.appendChild(v),E.appendChild(C),E.appendChild(w),L.appendChild(E),L.appendChild(y),n.appendChild(c),n.appendChild(u),n.appendChild(L),t.appendChild(a),t.appendChild(n),i.appendChild(t)}})();