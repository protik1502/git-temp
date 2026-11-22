/* HONOR — visual/layout controller
   Frontend-only university prototype. No real payments or backend services. */

const app = document.getElementById('app');
const page = document.body.dataset.page || 'home';

const causes = [
  { id:'education', title:"Children's Higher Education Fund", short:'Education Support', icon:'🎓', image:'assets/images/education-student.png', text:'We support the higher education dreams of children from martyr families by providing scholarships and mentorship.', raised:68, target:'₹25,00,000' },
  { id:'medical', title:'Medical Rehabilitation', short:'Medical Support', icon:'♡', image:'assets/images/medical-rehabilitation.png', text:'We provide financial assistance for surgeries, therapies, and long-term medical care for veterans and their families.', raised:54, target:'₹18,00,000' },
  { id:'accessibility', title:'Home Accessibility', short:'Home Accessibility', icon:'⌂', image:'assets/images/home-accessibility.png', text:'We modify homes to be safe, accessible, and dignified for specially-abled veterans and elderly family members.', raised:41, target:'₹15,00,000' }
];

const veterans = [
  { id:1, name:'Capt. Arjun Mehta', business:'BraveCraft Manufacturing', city:'Pune', category:'Manufacturing', image:'assets/images/bravecraft-manufacturing.png', text:'Precision manufacturing and adaptive products creating meaningful opportunities for fellow veterans.' },
  { id:2, name:'Maj. Kavya Rao', business:'Valor Mobility', city:'Hyderabad', category:'Mobility', image:'assets/images/valor-mobility-car.png', text:'Accessible mobility solutions designed around independence, dignity and everyday movement.' },
  { id:3, name:'Subedar Neeraj Kumar', business:'ValorerGuard Security', city:'Jaipur', category:'Security', image:'assets/images/valorguard-security.png', text:'Professional security services built on discipline, training and veteran experience.' }
];

const navItems = [
  ['index.html','Home','home'],
  ['causes.html','Causes','causes'],
  ['veterans.html','Veterans','veterans'],
  ['impact.html','Impact','impact'],
  ['about.html','About','about'],
  ['honor-wall.html','Honor Wall','honor-wall']
];

function nav(){
  return `<header class="site-header">
    <div class="container nav">
      <a class="logo" href="index.html" aria-label="HONOR — Remember. Support. Empower."><img src="assets/images/honor-logo.png" alt="HONOR — Remember. Support. Empower."></a>
      <button class="menu" id="menuToggle" aria-label="Open navigation" aria-expanded="false">☰</button>
      <nav class="nav-links" id="navLinks">
        ${navItems.map(([href,label,key])=>`<a class="${page===key?'active':''}" href="${href}">${label}</a>`).join('')}
        <a class="btn" href="donate.html">Donate Now</a>
      </nav>
    </div>
  </header>`;
}

function footer(){
  return `<footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo" href="index.html" aria-label="HONOR — Remember. Support. Empower."><img src="assets/images/honor-logo.png" alt="HONOR — Remember. Support. Empower."></a>
          <p style="margin-top:10px">A frontend demonstration platform for supporting veterans, martyr families and veteran-led enterprise.</p>
        </div>
        <div><h3>Explore</h3><a href="causes.html">Causes</a><a href="honor-wall.html">Honor Wall</a><a href="veterans.html">Veterans</a></div>
        <div><h3>Trust</h3><a href="impact.html">Our Impact</a><a href="transparency.html">Transparency</a><a href="about.html">Our Mission</a></div>
        <div><h3>Support</h3><a href="donate.html">Donate</a><a href="cause-details.html?id=education">Cause Details</a><a href="index.html">Home</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 HONOR — Remember. Support. Empower.</span><span>Frontend demonstration project · No real payments processed.</span></div>
    </div>
  </footer>`;
}

function layout(content){
  app.innerHTML = nav() + `<main class="fade">${content}</main>` + footer() + `<button id="backTop" aria-label="Back to top">↑</button>`;
  bindShared();
}

function pageHero(kicker,title,text,extraClass=''){
  return `<section class="page-hero ${extraClass}"><div class="container"><div class="kicker">${kicker}</div><h1>${title}</h1><p class="lead">${text}</p></div></section>`;
}

function supportStrip(){
  return `<section class="support-strip">
    <div class="support-item"><div class="support-icon">♧</div><div><h3>Education Support</h3><p>Empowering children through education.</p></div></div>
    <div class="support-item"><div class="support-icon">♡</div><div><h3>Medical Support</h3><p>Providing healthcare & rehabilitation support.</p></div></div>
    <div class="support-item"><div class="support-icon">⌂</div><div><h3>Home Accessibility</h3><p>Making homes safe and accessible for veterans.</p></div></div>
  </section>`;
}

function helpCards(){
  return `<div class="grid grid-3">
    <article class="card help-card"><div class="icon">♡</div><h3>Contribute</h3><p>Your contribution helps support families and improve lives.</p><a href="donate.html">Learn more →</a></article>
    <article class="card help-card"><div class="icon">♧</div><h3>Volunteer</h3><p>Join hands to bring hope and empower communities.</p><a href="about.html">Learn more →</a></article>
    <article class="card help-card"><div class="icon">◈</div><h3>Spread Awareness</h3><p>Share our mission and inspire others to make a difference.</p><a href="honor-wall.html">Learn more →</a></article>
  </div>`;
}

function causeCards(){
  return causes.map(c=>`<article class="cause-card">
    <div class="cause-card-image">
      <img src="${c.image}" alt="${c.title}">
    </div>

    <div class="cause-card-content">
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      <a class="btn" href="cause-details.html?id=${c.id}">Explore Cause</a>
    </div>

    <div class="cause-card-side">
      <div class="icon">${c.icon}</div>
    </div>
  </article>`).join('');
}

function stats(){
  return `<div class="stat-grid">
    <div class="stat"><strong>2,500+</strong><small>Families Supported</small></div>
    <div class="stat"><strong>1,200+</strong><small>Children Educated</small></div>
    <div class="stat"><strong>850+</strong><small>Medical Aids Provided</small></div>
    <div class="stat"><strong>450+</strong><small>Homes Made Accessible</small></div>
  </div>`;
}

function impactStories(){
  const stories=[
    ['https://www.shutterstock.com/image-photo/young-man-18-years-old-260nw-2628087371.jpg','Scholarship','“Thanks for scholarship, i am now pursuing my dreams to becoming an engineer  ”','— Rohan, Scholar'],
    ['https://thumbs.dreamstime.com/b/reading-digital-tablet-computer-portrait-middle-aged-indian-man-home-41653035.jpg','Medical Aid','“Rehabilitation support helps veterans and families move forward with dignity.”','— Neha, Daughter'],
    ['assets/images/home-accessibility.png','Accessibility','“A safer home can restore independence to everyday life.”','— Arjun, Veteran']
  ];
  return `<div class="grid grid-3">${stories.map(([image,tag,quote,by])=>`<article class="card impact-story"><div class="impact-story-image"><img src="${image}" alt="${tag} impact story"></div><div class="tag">${tag}</div><p class="quote">${quote}</p><p><b>${by}</b></p></article>`).join('')}</div>`;
}

function render(){
  if(page==='home'){
    layout(`
      <section class="hero"><div class="hero-inner">
        <div class="kicker">A MEANINGFUL WAY TO SUPPORT</div>
        <h1>SUPPORT THOSE<br>WHO SERVED</h1>
        <p class="lead">A meaningful way to support veterans and martyr families through education, healthcare, accessibility and opportunity.</p>
        <div class="actions"><a class="btn" href="donate.html">Support a Family</a><a class="btn btn-outline" href="causes.html">Explore Causes</a></div>
      </div></section>
      ${supportStrip()}
      <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">MAKE A DIFFERENCE</div><h2>HOW YOU CAN HELP</h2></div><p>Small acts of support can create lasting change for families who have given so much.</p></div>${helpCards()}</div></section>
      <section class="section section-stone"><div class="container"><div class="section-head"><div><div class="kicker">WHERE SUPPORT GOES</div><h2>OUR CAUSES</h2></div><p>Focused support areas designed around dignity, independence and a stronger future.</p></div><div class="cause-list">${causeCards()}</div></div></section>
      <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">OUR IMPACT</div><h2>Every number represents a life touched.</h2></div><p>Illustrative figures for this university prototype.</p></div>${stats()}</div></section>
      <section class="section"><div class="container"><div class="cta"><div class="kicker">YOUR SUPPORT MATTERS</div><h2>Together, let's build a stronger and more grateful nation.</h2><p>Choose a cause and make a simulated one-time or monthly pledge.</p><a class="btn" href="donate.html">Support More Lives</a></div></div></section>
    `);
  } else if(page==='causes'){
    layout(`${pageHero('OUR CAUSES','OUR CAUSES','Every cause you support creates a real change in someone’s life.')}
      <section class="section"><div class="container"><div class="cause-list">${causeCards()}</div></div></section>
      <section class="section section-stone"><div class="container"><div class="section-head"><div><div class="kicker">HOW IT WORKS</div><h2>Support with clarity.</h2></div><p>Select a cause, understand its purpose, and continue to a simple frontend donation flow.</p></div><div class="grid grid-3"><article class="card"><div class="icon">1</div><h3>Choose a Cause</h3><p>Select education, medical rehabilitation or home accessibility.</p></article><article class="card"><div class="icon">2</div><h3>Choose Support</h3><p>Make a one-time or monthly simulated pledge.</p></article><article class="card"><div class="icon">3</div><h3>See Your Receipt</h3><p>Generate and print a demonstration contribution receipt.</p></article></div></div></section>`);
  } else if(page==='cause-details'){
    const id=new URLSearchParams(location.search).get('id')||'education'; const c=causes.find(x=>x.id===id)||causes[0];
    layout(`${pageHero('CAUSE DETAILS',c.title,c.text)}<section class="section"><div class="container cause-details"><article class="card"><div class="cause-card-image" style="height:250px;margin-bottom:20px"><img src="${c.image}" alt="${c.title}"></div><div class="kicker">WHY IT MATTERS</div><h2>Support should create independence and dignity.</h2><p>Families who have given so much should not have to face every challenge alone. This prototype connects each support action with a clear purpose.</p><div class="progress"><span style="width:${c.raised}%"></span></div><p><b>${c.raised}%</b> illustrative campaign progress</p><a class="btn" href="donate.html?cause=${c.id}">Support This Cause</a></article><aside class="card"><h3>Campaign Snapshot</h3><div class="cause-stat"><span>Goal</span><b>${c.target}</b></div><div class="cause-stat"><span>Progress</span><b>${c.raised}%</b></div><div class="cause-stat"><span>Support</span><b>One-time / Monthly</b></div><div class="notice">Prototype figures are illustrative. Production reporting should use verified financial records.</div></aside></div></section>`);
  } else if(page==='donate'){
    layout(`${pageHero('MAKE A DIFFERENCE','MAKE A DIFFERENCE','Your support helps empower lives and build a better tomorrow.')}
      <section class="section"><div class="container form-grid">
        <form id="donationForm" class="card">
          <div class="kicker">YOUR CONTRIBUTION</div>
          <div class="field"><label for="cause">Select Cause</label><select id="cause">${causes.map(c=>`<option value="${c.id}">${c.title}</option>`).join('')}</select></div>
          <div class="field"><label>Select Amount (₹)</label><div class="amounts">${[500,1000,2500,5000].map(a=>`<button type="button" class="amount-btn ${a===500?'selected':''}" data-amount="${a}">₹${a.toLocaleString('en-IN')}</button>`).join('')}</div></div>
          <div class="field"><label for="customAmount">Other Amount</label><input id="customAmount" type="number" min="100" placeholder="Enter amount"></div>
          <div class="field"><label>Frequency</label><div class="toggle"><button type="button" class="active" data-type="one-time">One-time</button><button type="button" data-type="monthly">Monthly</button></div><input type="hidden" id="donationType" value="One-time"></div>
          <div class="field"><label for="donorName">Your Details</label><input id="donorName" required placeholder="Full Name"></div>
          <div class="field"><input id="donorEmail" type="email" required placeholder="Email Address"></div>
          <label style="text-transform:none;letter-spacing:0;font-weight:400"><input id="taxReceipt" type="checkbox" style="width:auto;min-height:auto;margin-right:5px"> I would like to receive updates from HONOR.</label>
          <div class="notice">Demo-only flow. No real payment is processed and the generated receipt is not a tax certificate.</div>
          <button class="btn" type="submit" style="width:100%">Proceed to Donate</button>
        </form>
        <aside class="donation-impact"><div class="donation-impact-copy"><div class="kicker">YOUR IMPACT</div><h2 class="donation-preview" id="donationPreview">₹500</h2><p>Education support opens doors to a brighter future.</p><div style="margin-top:18px"><h3>Why Donate?</h3><div class="snapshot-list"><div class="snapshot-item"><span class="snapshot-icon">✓</span>Secure prototype flow</div><div class="snapshot-item"><span class="snapshot-icon">✓</span>Direct impact in lives</div><div class="snapshot-item"><span class="snapshot-icon">✓</span>Transparency in allocation</div><div class="snapshot-item"><span class="snapshot-icon">✓</span>Support veteran families</div></div></div></div><div class="donation-impact-visual"></div></aside>
      </div></section>`);
  } else if(page==='receipt'){
    layout(`${pageHero('THANK YOU','YOUR SUPPORT HAS BEEN RECORDED','Here is your simulated contribution receipt. You can print it for the project demonstration.')}
      <section class="section"><div class="container"><div id="receiptBox" class="receipt"></div></div></section>`);
  } else if(page==='honor-wall'){
    layout(`${pageHero('HONOR WALL','HONOR WALL','Share your tribute. Honor their legacy.','honor-hero')}
      <section class="section"><div class="container"><div class="search-row"><input id="tributeSearch" placeholder="Search tributes..."><button class="btn" id="openTribute">Share a Tribute</button></div><div id="tributeList" class="tribute-grid"></div><div id="tributeEmpty" class="empty" hidden>No tributes match your search.</div></div></section>
      <section class="section section-stone"><div class="container"><div class="section-head"><div><div class="kicker">A FEW WORDS MATTER</div><h2>Leave a tribute.</h2></div><p>Your words of gratitude become part of a respectful digital memorial.</p></div><div class="grid grid-3"><article class="card"><h3>Be respectful</h3><p>Keep messages sincere, dignified and focused on gratitude.</p></article><article class="card"><h3>Be personal</h3><p>Share what their courage means to you and future generations.</p></article><article class="card"><h3>Keep it meaningful</h3><p>A few genuine words can carry a lifetime of respect.</p></article></div></div></section>
      <div id="tributeModal" class="modal" hidden><div class="modal-panel"><button class="modal-close" data-close-modal aria-label="Close">×</button><div class="kicker">HONOR WALL</div><h2>Share a Tribute</h2><form id="tributeForm"><div class="field"><label for="tributeName">Your Name</label><input id="tributeName" required></div><div class="field"><label for="tributeMessage">Your Message</label><textarea id="tributeMessage" required></textarea></div><button class="btn" type="submit">Post Tribute</button></form></div></div>`);
  } else if(page==='veterans'){
    layout(`${pageHero('VETERAN ENTREPRENEURS','VETERAN ENTREPRENEURS','Supporting veteran-led businesses and encouraging self-reliance.')}
      <section class="section"><div class="container"><div class="filter-row" id="veteranFilters"><button class="filter-btn active" data-filter="all">All</button><button class="filter-btn" data-filter="Manufacturing">Manufacturing</button><button class="filter-btn" data-filter="Mobility">Mobility</button><button class="filter-btn" data-filter="Security">Security</button></div><div class="field" style="max-width:500px;margin:0 auto 18px"><input id="veteranSearch" placeholder="Search business, veteran or city..."></div><div id="veteranGrid" class="veteran-grid"></div></div></section>`);
  } else if(page==='business-details'){
    const id=Number(new URLSearchParams(location.search).get('id'))||1; const v=veterans.find(x=>x.id===id)||veterans[0];
    layout(`${pageHero('VETERAN BUSINESS',v.business,`${v.name} · ${v.city} · ${v.category}`)}<section class="section"><div class="container form-grid"><article class="card"><div class="veteran-image" style="height:250px"><img src="${v.image}" alt="${v.business}"></div><div class="tag">${v.category}</div><h2>${v.business}</h2><p>${v.text}</p><p class="quote">“The mission changes. The purpose remains.”</p></article><aside class="card"><h3>Support the showcase</h3><p>Explore, share and celebrate veteran-led enterprise.</p><a class="btn" href="veterans.html">Back to Veterans</a></aside></div></section>`);
  } else if(page==='impact'){
    layout(`${pageHero('OUR IMPACT','OUR IMPACT','Every number represents a life touched and a future transformed.')}
      <section class="section compact"><div class="container">${stats()}</div></section>
      <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">STORIES OF CHANGE</div><h2>Impact with people behind it.</h2></div><p>Illustrative stories used to demonstrate how an impact dashboard can communicate outcomes.</p></div>${impactStories()}</div></section>
      <section class="section section-stone"><div class="container transparency-panel"><div class="transparency-panel-header"><div><div class="kicker">ILLUSTRATIVE ALLOCATION</div><h2>Where support is focused</h2></div><span class="status-pill">DEMO DATA</span></div><div class="allocation-row"><div class="allocation-info"><span>Higher Education</span><b>38%</b></div><div class="allocation-track"><span style="width:38%"></span></div></div><div class="allocation-row"><div class="allocation-info"><span>Medical Rehabilitation</span><b>27%</b></div><div class="allocation-track"><span style="width:27%"></span></div></div><div class="allocation-row"><div class="allocation-info"><span>Home Accessibility</span><b>20%</b></div><div class="allocation-track"><span style="width:20%"></span></div></div><div class="allocation-row"><div class="allocation-info"><span>Veteran Entrepreneurship</span><b>15%</b></div><div class="allocation-track"><span style="width:15%"></span></div></div></div></section>`);
  } else if(page==='transparency'){
    layout(`${pageHero('TRANSPARENCY','TRANSPARENCY','Every rupee deserves a purpose.')}
      <section class="section"><div class="container grid grid-4">${[['Education','42%'],['Medical','31%'],['Accessibility','18%'],['Vocational','9%']].map(([name,p])=>`<article class="card"><div class="kicker">${p}</div><h3>${name}</h3><div class="progress"><span style="width:${p}"></span></div><p>Illustrative allocation for prototype demonstration.</p></article>`).join('')}</div></section>
      <section class="section section-stone"><div class="container"><div class="notice-box"><div class="notice-icon">i</div><div><b>Production note</b><p style="margin-top:3px">A live system should connect allocation figures to audited records and verified reporting.</p></div></div></div></section>`);
  } else if(page==='about'){
    layout(`<section class="page-hero about-hero"><div class="container"><div style="max-width:560px"><div class="kicker">ABOUT HONOR</div><h1>ABOUT HONOR</h1><p class="lead">HONOR is dedicated to supporting veterans, martyrs’ families, and their dependents through meaningful initiatives.</p></div></div></section>
      <section class="section"><div class="container"><div class="about-principle-card"><div class="about-principle-mark">“</div><div class="kicker" style="color:var(--gold-2)">OUR PURPOSE</div><h2>Remember. Support. Empower.</h2><p>HONOR brings remembrance and practical welfare support together in one dignified digital experience.</p></div></div></section>
      <section class="section section-stone"><div class="container"><div class="pillar-grid"><article class="pillar-card"><div class="pillar-number">01</div><div class="pillar-symbol">♧</div><h3>Our Mission</h3><p>Empower and uplift veterans and families by providing support in education, healthcare and livelihood.</p></article><article class="pillar-card"><div class="pillar-number">02</div><div class="pillar-symbol">◎</div><h3>Our Vision</h3><p>A society that deeply respects and supports those who protect our nation.</p></article><article class="pillar-card"><div class="pillar-number">03</div><div class="pillar-symbol">♡</div><h3>Our Values</h3><p>Respect, Integrity, Compassion, Transparency and Commitment.</p></article><article class="pillar-card"><div class="pillar-number">04</div><div class="pillar-symbol">▣</div><h3>What We Do</h3><p>Collaborate with communities, donors and volunteers to create lasting impact.</p></article></div></div></section>
      <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">THE HONOR PATH</div><h2>From remembrance to empowerment.</h2></div><p>A simple model for a respectful welfare platform.</p></div><div class="about-path-grid"><article class="card about-path-card"><span class="about-path-number">01</span><span class="about-path-arrow">→</span><h3>Remember</h3><p>Preserve stories and give gratitude a meaningful place.</p></article><article class="card about-path-card"><span class="about-path-number">02</span><span class="about-path-arrow">→</span><h3>Support</h3><p>Make welfare causes understandable and easy to support.</p></article><article class="card about-path-card"><span class="about-path-number">03</span><h3>Empower</h3><p>Help families and veterans move toward stronger futures.</p></article></div></div></section>
      <section class="section"><div class="container"><div class="cta"><h2>Together, let's build a stronger and more grateful nation.</h2><p>Built as a responsive frontend masterpiece using HTML, CSS and JavaScript — without a backend.</p><a class="btn" href="donate.html">Support More Lives</a></div></div></section>`);
  } else {
    layout(`${pageHero('404','PAGE NOT FOUND','The requested page could not be found, but the mission continues.')}<section class="section"><div class="container text-center"><a class="btn" href="index.html">Return Home</a></div></section>`);
  }
}

function bindShared(){
  const menu=document.getElementById('menuToggle'); const links=document.getElementById('navLinks');
  if(menu&&links){ menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));}); links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open'))); }
  const back=document.getElementById('backTop');
  if(back){ window.addEventListener('scroll',()=>back.classList.toggle('show',window.scrollY>360),{passive:true}); back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }
  bindDonations(); bindReceipt(); bindHonorWall(); bindVeterans();
}

function bindDonations(){
  const form=document.getElementById('donationForm'); if(!form)return;
  let amount=500; const preview=document.getElementById('donationPreview'); const custom=document.getElementById('customAmount');
  const update=()=>{if(preview)preview.textContent='₹'+amount.toLocaleString('en-IN');};
  document.querySelectorAll('.amount-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.amount-btn').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');amount=Number(btn.dataset.amount);if(custom)custom.value='';update();}));
  if(custom)custom.addEventListener('input',()=>{if(Number(custom.value)>0){amount=Number(custom.value);document.querySelectorAll('.amount-btn').forEach(x=>x.classList.remove('selected'));update();}});
  document.querySelectorAll('.toggle button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.toggle button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById('donationType').value=btn.dataset.type==='monthly'?'Monthly':'One-time';}));
  const q=new URLSearchParams(location.search).get('cause'); if(q&&document.getElementById('cause'))document.getElementById('cause').value=q;
  form.addEventListener('submit',e=>{e.preventDefault();if(amount<100){alert('Minimum demo contribution is ₹100.');return;}const name=document.getElementById('donorName').value.trim();const email=document.getElementById('donorEmail').value.trim();if(!name||!email){alert('Please complete your details.');return;}const cause=document.getElementById('cause');const data={id:'HON-'+Date.now().toString().slice(-8),name,email,cause:cause.selectedOptions[0].text,type:document.getElementById('donationType').value,amount,date:new Date().toLocaleString('en-IN')};localStorage.setItem('honorDonation',JSON.stringify(data));location.href='receipt.html';});
  update();
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}

function bindReceipt(){
  const box=document.getElementById('receiptBox'); if(!box)return; const d=JSON.parse(localStorage.getItem('honorDonation')||'null');
  if(!d){box.innerHTML='<div class="empty">No demo donation found. <a href="donate.html" style="color:#8b6614">Make a pledge first.</a></div>';return;}
  box.innerHTML=`<div class="kicker">HONOR · DEMO RECEIPT</div><h2>Thank you, ${escapeHtml(d.name)}.</h2><div class="receipt-row"><span>Contribution ID</span><b>${d.id}</b></div><div class="receipt-row"><span>Cause</span><b>${escapeHtml(d.cause)}</b></div><div class="receipt-row"><span>Amount</span><b>₹${Number(d.amount).toLocaleString('en-IN')}</b></div><div class="receipt-row"><span>Type</span><b>${escapeHtml(d.type)}</b></div><div class="receipt-row"><span>Date</span><b>${escapeHtml(d.date)}</b></div><div class="notice">This is a simulated frontend receipt for a college prototype and is not a tax certificate or payment confirmation.</div><button class="btn no-print" id="printReceipt">Print Receipt</button> <a class="btn btn-outline no-print" href="index.html">Home</a>`;
  document.getElementById('printReceipt')?.addEventListener('click',()=>window.print());
}

function bindHonorWall(){
  const list=document.getElementById('tributeList'); if(!list)return;
  const defaults=[
    {name:'A Grateful Citizen',message:'Because of your sacrifice, we live in a nation of freedom and pride. Thank you.',date:'12 May 2024'},
    {name:'A Student',message:'Your courage will inspire generations to come.',date:'9 May 2024'},
    {name:'A Family',message:'To the families who stood strong behind our heroes, you are our strength.',date:'5 May 2024'},
    {name:'Indian Citizen',message:'Saluting the bravery, dedication and selflessness of our armed forces.',date:'1 May 2024'},
    {name:'Well Wisher',message:'You may be gone, but your legacy lives on in every heart.',date:'30 Apr 2024'}
  ];
  let items=JSON.parse(localStorage.getItem('honorTributes')||'null')||defaults;
  const search=document.getElementById('tributeSearch'); const empty=document.getElementById('tributeEmpty'); const modal=document.getElementById('tributeModal'); const form=document.getElementById('tributeForm');
  const draw=()=>{const q=(search?.value||'').toLowerCase().trim();const filtered=items.filter(x=>`${x.name} ${x.message}`.toLowerCase().includes(q));list.innerHTML=filtered.map(x=>`<article class="card tribute"><div class="kicker">IN GRATITUDE</div><p class="quote">${escapeHtml(x.message)}</p><small>— ${escapeHtml(x.name)} · ${escapeHtml(x.date||'Today')}</small></article>`).join('');if(empty)empty.hidden=filtered.length>0;};
  search?.addEventListener('input',draw); document.getElementById('openTribute')?.addEventListener('click',()=>{modal.hidden=false;document.body.style.overflow='hidden';});
  modal?.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-close-modal]')){modal.hidden=true;document.body.style.overflow='';}});
  form?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('tributeName').value.trim();const message=document.getElementById('tributeMessage').value.trim();if(!name||!message)return;items.unshift({name,message,date:new Date().toLocaleDateString('en-IN')});localStorage.setItem('honorTributes',JSON.stringify(items));form.reset();modal.hidden=true;document.body.style.overflow='';draw();});
  draw();
}

function bindVeterans(){
  const grid=document.getElementById('veteranGrid'); if(!grid)return;
  let filter='all'; const search=document.getElementById('veteranSearch');
  const draw=()=>{const q=(search?.value||'').toLowerCase().trim();const filtered=veterans.filter(v=>(filter==='all'||v.category===filter)&&`${v.name} ${v.business} ${v.city}`.toLowerCase().includes(q));grid.innerHTML=filtered.length?filtered.map(v=>`<article class="card veteran-card"><div class="veteran-image"><img src="${v.image}" alt="${v.business}"></div><div class="tag">${v.category}</div><h3>${v.business}</h3><p>${v.text}</p><small>${v.name} · ${v.city}</small><a class="btn btn-outline" href="business-details.html?id=${v.id}">View Profile</a></article>`).join(''):'<div class="empty">No veteran businesses found.</div>';};
  document.querySelectorAll('#veteranFilters .filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#veteranFilters .filter-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;draw();}));
  search?.addEventListener('input',draw);draw();
}

render();
