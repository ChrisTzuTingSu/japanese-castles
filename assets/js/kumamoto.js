
const details={
 1:['壁','厚實的牆體與外裝形成防護面；在城郭中，牆面也會與開口、石垣、櫓的位置共同設計。'],
 2:['窗','不同形式的窗兼顧採光、觀察與防禦需求，開口大小與格柵設計都會影響視野與安全。'],
 3:['忍返し','設在可攀爬位置附近的防攀裝置，用來增加接近建築的難度。'],
 4:['狹間','牆面上的射擊開口，可供弓箭或火繩槍使用，讓守方在遮蔽下攻擊。'],
 5:['石落し','設在建築突出部下方的開口，可對逼近石垣與牆腳的敵人進行攻擊。']
};
const title=document.querySelector('#defTitle'),body=document.querySelector('#defBody');document.querySelectorAll('.hotspot').forEach(h=>h.addEventListener('click',()=>{document.querySelectorAll('.hotspot').forEach(x=>x.classList.remove('active'));h.classList.add('active');const d=details[h.dataset.n];title.textContent=d[0];body.textContent=d[1];}));
