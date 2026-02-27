import{a as v,S as q,i as s}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const R="54693688-3a10af049777c36308454ddb3",$="https://pixabay.com/api/";async function y(o,t=1){return(await v.get($,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),g=document.querySelector(".load-more-btn"),x=new q(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const t=o.map(n=>`
      <li class="photo-card">
        <a href="${n.largeImageURL}">
          <img 
            src="${n.webformatURL}" 
            alt="${n.tags}" 
            class="photo-img"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n.likes}</p>
          <p class="info-item"><b>Views:</b> ${n.views}</p>
          <p class="info-item"><b>Comments:</b> ${n.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${n.downloads}</p>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",t),x.refresh()}function B(){m.innerHTML=""}function w(){h.style.display="flex"}function L(){h.style.display="none"}function S(){g.style.display="flex"}function l(){g.style.display="none"}const f=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let c=1,a="",u=0,i=0;f.addEventListener("submit",async function(o){if(o.preventDefault(),a=f.elements["search-text"].value.trim(),!a){s.warning({message:"Please enter a search query!",position:"topRight"});return}c=1,i=0,B(),l(),w();try{const t=await y(a,c);if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u=t.totalHits,b(t.hits),i+=t.hits.length,i<u?S():l()}catch(t){s.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(t)}finally{L()}});M.addEventListener("click",async function(){c+=1,w(),l();try{const o=await y(a,c);b(o.hits),i+=o.hits.length,i>=u?(l(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):S(),window.scrollBy({top:window.innerHeight,behavior:"smooth"})}catch(o){s.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(o)}finally{L()}});
//# sourceMappingURL=index.js.map
