import{A as b,S as x,i as p}from"./assets/vendor-00ccef64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const E=b.create({baseURL:"https://pixabay.com/api/",params:{key:"42754365-919be7dc6da81f3ebd6558a71"}});async function m(s,e){return(await E.get("",{params:{q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const a=document.querySelector(".gallery");function S(s){const{webformatURL:e,largeImageURL:r,tags:c,likes:t,views:o,comments:i,downloads:w}=s;return`<li class="list-item">
        <a href="${r}"><img src="${e}" alt="${c}" class="item-img" /></a>
        <div class="list-wrapper">
          <div class="text-wrapper">
            <h5 class="title">Likes</h5>
            <p class="text">${t}</p>
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
      </li>`}function h({hits:s}){return s.map(S).join("")}const q="/goit-js-hw-12/assets/error-icon-77b820ef.svg",g=new x(".gallery a",{captionsData:"alt",captionDelay:200}),B=document.querySelector(".js-form"),y=document.querySelector(".loader"),u=document.querySelector(".load-btn");let n=1,f,l="";B.addEventListener("submit",T);u.addEventListener("click",$);async function T(s){if(s.preventDefault(),n=1,l=s.target.elements.photo.value,a.innerHTML="",!l.trim()){d();return}L(),d();try{const e=await m(l,n),r=h(e);if(e.hits.length===0)return a.innerHTML=r,p.show({iconUrl:q,color:"#ef4040",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});a.insertAdjacentHTML("beforeend",r),e.totalHits>15&&C()}catch(e){console.log(e)}finally{v(),g.refresh(),s.target.reset()}}async function $(){n++,L();try{const s=await m(l,n),e=h(s);f=Math.ceil(s.totalHits/15),a.insertAdjacentHTML("beforeend",e),H(),n>=f&&(d(),p.show({color:"#4390d9",messageColor:"#fff",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.log(s)}v(),g.refresh()}function L(){y.classList.remove("is-hidden")}function v(){y.classList.add("is-hidden")}function C(){u.classList.remove("is-hidden")}function d(){u.classList.add("is-hidden")}function H(){const e=a.firstElementChild.getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=commonHelpers.js.map
