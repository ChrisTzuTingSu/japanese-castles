
const anatomy={
 keep:{title:'天守',jp:'天守（てんしゅ）',text:'城郭最醒目的高層建築之一。除了防禦與瞭望，也具有強烈的權力象徵性；但城主的日常政務與生活往往更多發生在御殿。',use:'象徵、瞭望、防禦、非常時的據點'},
 yagura:{title:'櫓',jp:'櫓（やぐら）',text:'配置於城牆、曲輪、門與轉角等位置，可用於監視、防禦、儲藏。熊本城曾擁有大量多層櫓，讓整座城形成密集的防禦節點。',use:'監視、防禦、儲藏'},
 stone:{title:'石垣',jp:'石垣（いしがき）',text:'抬高防禦面、穩固地形並形成壓迫性的城郭輪廓。坡度、砌法與轉角設計也會影響攻守。',use:'高差、防禦、地形塑造'},
 moat:{title:'堀',jp:'堀（ほり）',text:'水堀或空堀可切斷敵軍前進路線，並把進攻者導向城方預設的狹窄通道。',use:'阻隔、導流、延滯'},
 palace:{title:'御殿',jp:'御殿（ごてん）',text:'政務、接待、儀式與居住的重要空間。精緻的障壁畫、上段之間與庭園，共同塑造大名權力的舞台。',use:'治理、接待、生活、儀式'},
 town:{title:'城下町',jp:'城下町（じょうかまち）',text:'城不是孤立的堡壘。武家地、町人地、寺社、道路與水路一起構成城下町，讓城成為政治、經濟與社會秩序的中心。',use:'行政、商業、居住、交通'}
};
const panel=document.querySelector('.anatomyPanel');document.querySelectorAll('.anatomyTabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.anatomyTabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=anatomy[btn.dataset.key];panel.innerHTML=`<div class="jp">${d.jp}</div><h3 class="serif">${d.title}</h3><p>${d.text}</p><p><b>核心功能</b>　${d.use}</p>`;}));
