(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".js-menu-container"),y=document.querySelector(".js-open-menu");window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&u.classList.remove("is__open")});y.addEventListener("click",()=>{u.classList.toggle("is__open")});let l=0;const d=document.querySelector(".header");window.addEventListener("scroll",()=>{let n=window.pageYOffset||document.documentElement.scrollTop;n>l?d.style.top="-120px":d.style.top="0",l=n<=0?0:n});document.addEventListener("DOMContentLoaded",n=>{const s=document.querySelectorAll(".services-btn"),r=document.querySelectorAll(".close"),a=document.querySelectorAll(".modal__btn-support");s.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=t.target.getAttribute("data-modal"),c=document.getElementById(o);c.classList.add("show"),setTimeout(()=>{c.style.display="block"},10)})}),r.forEach(e=>{e.addEventListener("click",t=>{const o=t.target.closest(".close").getAttribute("data-modal"),c=document.getElementById(o);c.classList.remove("show"),document.body.style.overflow="",setTimeout(()=>{c.style.display="none"},300)})}),a.forEach(e=>{e.addEventListener("click",t=>{const o=t.target.closest(".modal"),c=e.getAttribute("data-modal"),i=document.getElementById(c);o.classList.remove("show"),setTimeout(()=>{o.style.display="none"},300),i.classList.add("show"),document.body.style.overflow="hidden",setTimeout(()=>{i.style.display="block"},10)})}),window.addEventListener("click",e=>{e.target.classList.contains("modal")&&(e.target.classList.remove("show"),document.body.style.overflow="",setTimeout(()=>{e.target.style.display="none"},300))}),document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&document.querySelectorAll(".modal").forEach(o=>{o.classList.remove("show"),document.body.style.overflow="",setTimeout(()=>{o.style.display="none"},300)})}),window.addEventListener("click",e=>{const{classList:t}=e.target,o=e.target.closest("a");if(t&&(t.contains("modal__btn-support")||t.contains("app__mob services-btn"))){const c=t.contains("modal__btn-support")?e.target.getAttribute("data-service"):"pidtrumka",i=document.getElementById("support-form"),m=document.getElementById("social-telegram"),p=document.getElementById("social-instagram");i.setAttribute("data-service",c),m.setAttribute("data-service",c),p.setAttribute("data-service",c)}o&&o.getAttribute("data-event")&&dataLayer.push({event:o.getAttribute("data-event"),service:o.getAttribute("data-service"),type:o.getAttribute("data-type")})}),document.addEventListener("submit",e=>{const t=e.target;t&&t.getAttribute("data-event")&&dataLayer.push({event:t.getAttribute("data-event"),service:t.getAttribute("data-service"),type:t.getAttribute("data-type")})})});document.querySelectorAll(".accordion__header").forEach(n=>{n.addEventListener("click",()=>{const s=n.nextElementSibling,r=document.querySelector(".accordion__content.open");r&&r!==s&&(r.style.maxHeight=0,r.classList.remove("open"),r.previousElementSibling.classList.remove("active")),s.classList.contains("open")?s.style.maxHeight=0:s.style.maxHeight=s.scrollHeight+"px",s.classList.toggle("open"),n.classList.toggle("active")})});
