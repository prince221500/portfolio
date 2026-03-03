(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const v=document.getElementById("theme-toggle"),a=document.body,f=v.querySelector("i"),x=localStorage.getItem("theme")||"light";a.setAttribute("data-theme",x);E(x);v.addEventListener("click",()=>{const t=a.getAttribute("data-theme")==="dark"?"light":"dark";a.setAttribute("data-theme",t),localStorage.setItem("theme",t),E(t)});function E(e){e==="dark"?f.className="fas fa-sun":f.className="fas fa-moon"}const u=document.getElementById("nav-toggle"),m=document.getElementById("nav-menu");u.addEventListener("click",()=>{m.classList.toggle("active"),u.querySelectorAll(".bar").forEach((t,n)=>{m.classList.contains("active")?(n===0&&(t.style.transform="rotate(-45deg) translate(-5px, 6px)"),n===1&&(t.style.opacity="0"),n===2&&(t.style.transform="rotate(45deg) translate(-5px, -6px)")):(t.style.transform="none",t.style.opacity="1")})});const w=document.querySelectorAll(".nav-link");w.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("active"),u.querySelectorAll(".bar").forEach(n=>{n.style.transform="none",n.style.opacity="1"})})});w.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href"),o=document.querySelector(n);if(o){const s=o.offsetTop-70;window.scrollTo({top:s,behavior:"smooth"})}})});window.addEventListener("scroll",()=>{const e=document.getElementById("navbar");window.scrollY>50?e.style.background=a.getAttribute("data-theme")==="dark"?"rgba(26, 32, 44, 0.98)":"rgba(255, 255, 255, 0.98)":e.style.background=a.getAttribute("data-theme")==="dark"?"rgba(26, 32, 44, 0.95)":"rgba(255, 255, 255, 0.95)"});window.addEventListener("scroll",()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll(".nav-link");let n="";e.forEach(o=>{const s=o.offsetTop-100,r=o.clientHeight;window.scrollY>=s&&window.scrollY<s+r&&(n=o.getAttribute("id"))}),t.forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===`#${n}`&&o.classList.add("active")})});function T(e,t,n=2e3){let o=0;const s=t/(n/16),r=setInterval(()=>{o+=s,e.textContent=Math.floor(o),o>=t&&(e.textContent=t,clearInterval(r))},16)}const p=document.getElementById("about");let g=!1;const S=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!g&&(document.querySelectorAll(".stat-number").forEach(o=>{const s=parseInt(o.getAttribute("data-target"));T(o,s)}),g=!0)})},{threshold:.5});p&&S.observe(p);function q(){document.querySelectorAll(".progress-bar").forEach((t,n)=>{setTimeout(()=>{const o=t.getAttribute("data-width");t.style.width=o+"%"},n*100)})}const h=document.getElementById("skills");let y=!1;const A=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!y&&(q(),y=!0)})},{threshold:.3});h&&A.observe(h);const c=document.getElementById("contact-form");c&&c.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(c),n=c.querySelector('button[type="submit"]'),o=n.innerHTML;n.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',n.disabled=!0;try{if((await fetch(c.action,{method:"POST",body:t,headers:{Accept:"application/json"}})).ok)b("Message sent successfully! I'll get back to you soon.","success"),c.reset();else throw new Error("Form submission failed")}catch(s){console.error("Error:",s),b("Oops! Something went wrong. Please try again.","error")}finally{setTimeout(()=>{n.innerHTML=o,n.disabled=!1},500)}});function b(e,t){document.querySelectorAll(".notification").forEach(i=>{i.remove()});const o=document.createElement("div");o.className=`notification ${t}`,o.innerHTML=`
        <div class="notification-content">
            <i class="fas ${t==="success"?"fa-check-circle":"fa-exclamation-circle"}"></i>
            <span>${e}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `,o.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        ${t==="success"?"background: linear-gradient(135deg, #48bb78, #38a169);":"background: linear-gradient(135deg, #f56565, #e53e3e);"}
    `;const s=o.querySelector(".notification-content");s.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
    `;const r=o.querySelector(".notification-close");r.style.cssText=`
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `,r.addEventListener("mouseenter",()=>{r.style.opacity="1"}),r.addEventListener("mouseleave",()=>{r.style.opacity="0.7"}),r.addEventListener("click",()=>{o.style.transform="translateX(400px)",setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},300)}),document.body.appendChild(o),setTimeout(()=>{o.style.transform="translateX(0)"},100),setTimeout(()=>{o.parentNode&&(o.style.transform="translateX(400px)",setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},300))},5e3)}const k={threshold:.1,rootMargin:"0px 0px -50px 0px"},I=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},k);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".skill-category, .project-card, .certificate-card, .timeline-item, .stat").forEach(t=>{t.classList.add("fade-in"),I.observe(t)})});function O(e,t,n=100){let o=0;e.innerHTML="";function s(){if(o<t.length){if(t.charAt(o)==="<"){let r=t.indexOf(">",o);e.innerHTML+=t.substring(o,r+1),o=r+1}else e.innerHTML+=t.charAt(o),o++;setTimeout(s,n)}}s()}window.addEventListener("scroll",()=>{const e=window.pageYOffset,t=document.querySelector(".hero"),n=document.querySelector(".hero-content");if(t&&n&&window.innerWidth>768){const o=e*-.3;n.style.transform=`translateY(${o}px)`}});window.addEventListener("load",()=>{document.body.classList.add("loaded"),setTimeout(()=>{const e=document.querySelector(".hero-title");if(e){const t=e.innerHTML;O(e,t,50)}},500)});const M=document.querySelectorAll("section"),N=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.style.opacity="1",t.target.style.transform="translateY(0)")})},{threshold:.1});M.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.8s ease, transform 0.8s ease",N.observe(e)});document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-10px) scale(1.02)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)"})});document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",t=>{const n=document.createElement("span"),o=e.getBoundingClientRect(),s=Math.max(o.width,o.height),r=t.clientX-o.left-s/2,i=t.clientY-o.top-s/2;n.style.cssText=`
            position: absolute;
            width: ${s}px;
            height: ${s}px;
            left: ${r}px;
            top: ${i}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `,e.style.position="relative",e.style.overflow="hidden",e.appendChild(n),setTimeout(()=>{n.remove()},600)})});const L=document.createElement("style");L.textContent=`
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;document.head.appendChild(L);const l=document.querySelector(".scroll-indicator");l&&window.addEventListener("scroll",()=>{window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100>10?l.style.opacity="0":l.style.opacity="1"});document.addEventListener("mousemove",e=>{const t=document.querySelector(".custom-cursor");t&&(t.style.left=e.clientX+"px",t.style.top=e.clientY+"px")});function B(e,t){let n;return function(...s){const r=()=>{clearTimeout(n),e(...s)};clearTimeout(n),n=setTimeout(r,t)}}const C=B(()=>{},10);window.addEventListener("scroll",C);const H=document.querySelectorAll(".certificate-image img");Y();H.forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",()=>{$(e.src,e.alt)})});function Y(){const e=document.createElement("div");return e.className="certificate-lightbox",e.innerHTML=`
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `,document.body.appendChild(e),e.querySelector(".lightbox-close").addEventListener("click",()=>d()),e.addEventListener("click",n=>{n.target===e&&d()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.contains("active")&&d()}),e}function $(e,t){const n=document.querySelector(".certificate-lightbox"),o=n.querySelector(".lightbox-image"),s=n.querySelector(".lightbox-caption");o.src=e,o.alt=t,s.textContent=t,n.classList.add("active"),document.body.style.overflow="hidden"}function d(){document.querySelector(".certificate-lightbox").classList.remove("active"),document.body.style.overflow=""}
