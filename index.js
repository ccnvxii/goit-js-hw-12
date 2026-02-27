import{a as v,S as q,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const R="54693688-3a10af049777c36308454ddb3",B="https://pixabay.com/api/";async function h(o,e=1){return(await v.get(B,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const y=document.querySelector(".gallery"),m=document.querySelector(".loader-container"),g=document.querySelector(".load-more-btn"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const e=o.map(r=>`
      <li class="photo-card">
        <a href="${r.largeImageURL}">
          <img 
            src="${r.webformatURL}" 
            alt="${r.tags}" 
            class="photo-img"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${r.likes}</p>
          <p class="info-item"><b>Views:</b> ${r.views}</p>
          <p class="info-item"><b>Comments:</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>`).join("");y.insertAdjacentHTML("beforeend",e),$.refresh()}function x(){y.innerHTML=""}function w(){m.style.display="flex"}function L(){m.style.display="none"}function S(){g.style.display="flex"}function c(){g.style.display="none"}const p=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let d=1,l="",f=0,i=0;p.addEventListener("submit",async function(o){if(o.preventDefault(),l=p.elements["search-text"].value.trim(),!l){n.warning({message:"Please enter a search query!",position:"topRight"});return}d=1,i=0,x(),c(),w();try{const e=await h(l,d);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f=e.totalHits,b(e.hits),i+=e.hits.length,i>=f?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):S()}catch(e){n.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(e)}finally{L()}});M.addEventListener("click",async function(){d+=1,w(),c();try{const o=await h(l,d);b(o.hits),i+=o.hits.length,i>=f?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):S();const e=document.querySelectorAll(".photo-card");if(e.length>0){const a=e[i-o.hits.length].getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch(o){n.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(o)}finally{L()}});
//# sourceMappingURL=index.js.map
