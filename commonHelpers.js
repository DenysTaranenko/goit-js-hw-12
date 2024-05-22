import{a as b,i as m,S as L}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function y(r,e){const n="43855184-3ed97af1df9d5eb5f963fa3ef",o="https://pixabay.com/api/";return(await b.get(o,{params:{key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}function g(r){return r.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`).join("")}function h(){m.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){m.info({timeout:3e3,position:"topRight",message:"The search query can not be empty!"})}function w(){m.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}const u=new L(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),i=document.querySelector(".gallery"),f=document.querySelector(".loader"),a=document.querySelector(".load-btn");let p="",l;c.addEventListener("submit",M);a.addEventListener("click",q);async function M(r){if(l=1,r.preventDefault(),i.innerHTML="",p=c.elements.searchWord.value.trim(),a.style.display="none",p===""){v(),i.innerHTML="",a.style.display="none",c.reset();return}f.style.display="block";try{const e=await y(p,l),n=g(e);if(e.hits.length===0){w(),a.style.display="none",f.style.display="none";return}i.insertAdjacentHTML("beforeend",n),u.refresh(),f.style.display="none",e.totalHits<=l*15?h():a.style.display="block"}catch(e){console.error("Error:",e)}c.reset()}async function q(){l+=1;try{const r=await y(p,l).then(e=>{const n=g(e);i.insertAdjacentHTML("beforeend",n),u.refresh();const o=i.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),e.hits.length<=14&&(a.style.display="none",h(),u.refresh())})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
