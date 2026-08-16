
let castles=[];let map,markers=[];let filter='all';
const statusClass={original:'#5b6e5b',reconstructed:'#a62b27',ruins:'#555'};
fetch('data/castles.json').then(r=>r.json()).then(data=>{castles=data;initMap();renderList();});
function initMap(){map=L.map('map',{zoomControl:true}).setView([36.0,137.2],5);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);renderMarkers();}
function renderMarkers(){markers.forEach(m=>m.remove());markers=[];castles.filter(matchFilter).forEach(c=>{const m=L.circleMarker([c.lat,c.lng],{radius:8,color:'#fff',weight:2,fillColor:statusClass[c.status]||'#333',fillOpacity:1}).addTo(map);m.bindPopup(popupHTML(c));m.on('click',()=>selectCastle(c.id));markers.push(m);});}
function popupHTML(c){return `<div class="mapDetail"><b style="font-size:18px">${c.name}</b><div>${c.ja}｜${c.prefecture}</div>${c.image?`<img src="${c.image}" alt="${c.name}">`:''}<div>${c.statusLabel}｜${c.year}</div><p>${c.note}</p>${c.id==='kumamoto'?'<a href="kumamoto.html">進入熊本城案例 →</a>':''}</div>`}
function matchFilter(c){return filter==='all'||c.status===filter}
function renderList(){const el=document.querySelector('.castleList');el.innerHTML=castles.filter(matchFilter).map(c=>`<div class="castleItem" data-id="${c.id}"><b>${c.name}</b><small>${c.prefecture}｜${c.statusLabel}</small></div>`).join('');el.querySelectorAll('.castleItem').forEach(i=>i.addEventListener('click',()=>selectCastle(i.dataset.id)))}
function selectCastle(id){const c=castles.find(x=>x.id===id);document.querySelectorAll('.castleItem').forEach(i=>i.classList.toggle('active',i.dataset.id===id));map.flyTo([c.lat,c.lng],c.id==='kumamoto'?8:7,{duration:.8});markers.forEach(m=>{const ll=m.getLatLng();if(Math.abs(ll.lat-c.lat)<.001&&Math.abs(ll.lng-c.lng)<.001)m.openPopup()})}
document.querySelectorAll('.chip').forEach(ch=>ch.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));ch.classList.add('active');filter=ch.dataset.filter;renderMarkers();renderList();}));
