import{A as b,S as x,i as p}from"./assets/vendor-00ccef64.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const E=b.create({baseURL:"https://pixabay.com/api/",params:{key:"42754365-919be7dc6da81f3ebd6558a71"}});async function m(t,s){return(await E.get("",{params:{q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const a=document.querySelector(".gallery");function S(t){const{webformatURL:s,largeImageURL:r,tags:c,likes:e,views:o,comments:i,downloads:w}=t;return`<li class="list-item">
        <a href="${r}"><img src="${s}" alt="${c}" class="item-img" /></a>
        <div class="list-wrapper">
          <div class="text-wrapper">
            <h5 class="title">Likes</h5>
            <p class="text">${e}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Views</h5>
            <p class="text">${o}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Comments</h5>
            <p class="text">${i}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Downloads</h5>
            <p class="text">${w}</p>
          </div>
        </div>
      </li>`}function h({hits:t}){return t.map(S).join("")}const q="/goit-js-hw-12/assets/error-icon-77b820ef.svg",g=new x(".gallery a",{captionsData:"alt",captionDelay:200}),B=document.querySelector(".js-form"),y=document.querySelector(".loader"),u=document.querySelector(".load-btn");let n=1,f,l="";B.addEventListener("submit",T);u.addEventListener("click",$);async function T(t){if(t.preventDefault(),n=1,l=t.target.elements.photo.value,a.innerHTML="",!l.trim()){d();return}L(),d();try{const s=await m(l,n),r=h(s);if(s.hits.length===0)return a.innerHTML=r,p.show({iconUrl:q,color:"#ef4040",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});a.insertAdjacentHTML("beforeend",r),C()}catch(s){console.log(s)}finally{v(),g.refresh(),t.target.reset()}}async function $(){n++,L();try{const t=await m(l,n),s=h(t);f=Math.ceil(t.totalHits/15),a.insertAdjacentHTML("beforeend",s),M(),n>=f&&(d(),p.show({color:"#4390d9",messageColor:"#fff",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}v(),g.refresh()}function L(){y.classList.remove("is-hidden")}function v(){y.classList.add("is-hidden")}function C(){u.classList.remove("is-hidden")}function d(){u.classList.add("is-hidden")}function M(){const s=a.firstElementChild.getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:s})}
//# sourceMappingURL=commonHelpers.js.map
