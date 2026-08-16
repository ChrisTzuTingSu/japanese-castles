
const navBtn=document.querySelector('.menuBtn'); const navLinks=document.querySelector('.navlinks'); if(navBtn)navBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
const lightbox=document.querySelector('.lightbox'); if(lightbox){document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{lightbox.querySelector('img').src=el.dataset.lightbox;lightbox.classList.add('open')}));lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target.tagName==='BUTTON')lightbox.classList.remove('open')});}
