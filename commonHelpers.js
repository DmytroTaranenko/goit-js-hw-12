import{a as L,S as v,i as l}from"./assets/vendor-b0d10f48.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();function E(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link" >
        <img class="image-item" src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" />
        </a>
        <div class="wrap">
          <div>
            <h4 class="image-title">likes</h4>
            <p class="image-description">${e.likes}</p>
          </div>
          <div>
            <h4 class="image-title">Views</h4>
            <p class="image-description">${e.views}</p>
          </div>
          <div>
            <h4 class="image-title">Comments</h4>
            <p class="image-description">${e.comments}</p>
          </div>
          <div>
            <h4 class="image-title">Downloads</h4>
            <p class="image-description">${e.downloads}</p>
          </div>
        </div>
      </li>`}function g(e){return e.map(E).join("")}function m(e){e.classList.remove("hidden")}function f(e){e.classList.add("hidden")}function b(e){e.classList.remove("hidden")}function h(e){e.classList.add("hidden")}const P="44483341-a81d0a92f1c16412fe8933c44",S=L.create({baseURL:"https://pixabay.com/api/",params:{key:"44483341 - a81d0a92f1c16412fe8933c44"}});async function p(e,i){const s=new URLSearchParams({key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15});try{return(await S.get("",{params:s})).data}catch(o){throw new Error(o.message)}}const r={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),jsBtn:document.querySelector(".js-btn")},y=new v(".gallery-list a",{captionsData:"alt",captionDelay:250});let n=1,c="",u;r.formEl.addEventListener("submit",async e=>{if(e.preventDefault(),c=new FormData(r.formEl).get("userInput").trim(),c===""){l.warning({title:"Empty search",message:"Please enter a search query!"});return}m(r.loader);try{n=1;const s=await p(c,n);if(u=Math.ceil(s.totalHits/15),s.hits.length!==0){const o=g(s.hits);r.galleryEl.innerHTML=o,y.refresh()}else l.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),r.galleryEl.innerHTML=""}catch(s){l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(s)}finally{f(r.loader),r.formEl.reset(),w()}});r.jsBtn.addEventListener("click",async e=>{h(r.jsBtn),m(r.loader),n++;const i=await p(c,n),s=g(i.hits);r.galleryEl.insertAdjacentHTML("beforeend",s),y.refresh(),w(),j(),f(r.loader)});function w(){n<u?b(r.jsBtn):(B(),h(r.jsBtn))}function B(){u&&l.info({title:"Last page",message:"We're sorry, but you've reached the end of search results."})}function j(){const e=r.galleryEl.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
