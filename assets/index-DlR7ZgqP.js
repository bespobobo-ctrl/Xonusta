(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function p(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=p(e);fetch(e.href,i)}})();var v;const s=(v=window.Telegram)==null?void 0:v.WebApp;s&&(s.ready(),s.expand(),s.headerColor="#FFFFFF");const m=localStorage.getItem("xonusta_verified")==="true",o={view:"map",selectedCat:"Elektrik"};let a;const d=[{cat:"Elektrik",type:"Tezkor",distance:"3 min",price:"45,000",lat:40.5285,lng:70.938},{cat:"Elektrik",type:"Premium",distance:"8 min",price:"80,000",lat:40.531,lng:70.945}];function h(){return`
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#FFCC00; padding:40px; text-align:center;">
        <div style="width:100px; height:100px; background:white; border-radius:30px; display:flex; align-items:center; justify-content:center; font-size:40px; margin-bottom:30px; box-shadow:0 10px 30px rgba(0,0,0,0.1);">⚒️</div>
        <h1 style="font-size:32px; font-weight:800; margin-bottom:10px;">XonUsta</h1>
        <p style="font-weight:600; margin-bottom:60px;">Professional xizmatlar</p>
        <button onclick="doLogin()" style="background:white; color:#222; border:none; padding:20px; border-radius:20px; font-size:18px; font-weight:800; width:100%; box-shadow:0 10px 20px rgba(0,0,0,0.1);">Telegram orqali kirish</button>
    </div>`}function g(){return`
    <div style="position:relative; width:100%; height:100vh;">
        <!-- Map -->
        <div id="map" style="width:100%; height:100%; z-index:0;"></div>

        <!-- Floating Search Header -->
        <div class="search-header">
            <div class="profile-pic"></div>
            <input type="text" placeholder="Qo'qon shahar...">
            <div class="search-icon">🔍</div>
        </div>

        <!-- Bottom Sheet -->
        <div class="bottom-sheet">
            <div class="sheet-handle"></div>
            
            ${o.view==="map"?`
                <div class="sheet-header">
                    <h2>Xizmatni tanlang</h2>
                    <span onclick="alert('Sozlamalar')">Barchasi</span>
                </div>
                <div class="cards-row">
                    <!-- Cards exactly like the screenshot -->
                    <div class="service-card active" onclick="showMasters('Elektrik')">
                        <div class="sc-icon">⚡</div>
                        <div class="sc-title">Elektrik</div>
                        <div class="sc-subtitle" style="color:var(--dark)">Tezkor chaqiruv</div>
                    </div>
                    <div class="service-card" onclick="alert('Santexnika')">
                        <div class="sc-icon">🚿</div>
                        <div class="sc-title">Santexnik</div>
                        <div class="sc-subtitle">Uyga kelish</div>
                    </div>
                    <div class="service-card" onclick="alert('Duradgor')">
                        <div class="sc-icon">🔨</div>
                        <div class="sc-title">Duradgor</div>
                        <div class="sc-subtitle">Mebel xizmati</div>
                    </div>
                </div>
            `:`
                <!-- Choose Master View -->
                <div class="sheet-header">
                    <h2 style="display:flex; align-items:center; gap:10px;">
                        <span onclick="state.view='map'; render()" style="background:#f5f5f5; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">←</span>
                        Usta tanlash
                    </h2>
                </div>
                
                <!-- Options -->
                <div class="cards-row" style="margin-bottom:20px;">
                    <div class="service-card active" style="min-width:140px; height:auto; padding:20px;">
                        <div class="sc-icon">⚡</div>
                        <strong style="margin:10px 0 5px; display:block;">Tezkor usta</strong>
                        <div style="font-size:12px; margin-bottom:10px; opacity:0.5;">2 ta yaqinda</div>
                        <h3 style="font-size:22px; margin:0;">${d[0].price}</h3>
                    </div>
                    <div class="service-card" style="min-width:140px; height:auto; padding:20px;">
                        <div class="sc-icon">🌟</div>
                        <strong style="margin:10px 0 5px; display:block;">Premium</strong>
                        <div style="font-size:12px; margin-bottom:10px; opacity:0.5;">1 ta yaqinda</div>
                        <h3 style="font-size:22px; margin:0;">${d[1].price}</h3>
                    </div>
                </div>
                
                <div style="display:flex; gap:15px; margin-bottom:20px; font-size:12px; font-weight:600; color:#555;">
                    <div style="display:flex; align-items:center; gap:5px;"><span>⏱️</span> 3 daqiqa ichida</div>
                    <div style="display:flex; align-items:center; gap:5px;"><span>📍</span> 1.2 mil</div>
                </div>

                <button class="book-btn" onclick="alert('Buyurtma qabul qilindi!')">Buyurtma berish</button>
            `}
        </div>

        <!-- Floating Bottom Navigation -->
        ${o.view==="map"?`
        <div class="bottom-nav">
            <div class="nav-icon active">🏠</div>
            <div class="nav-icon">🕒</div>
            <div class="center-fab" onclick="alert('Asosiy aksiya')">⚒️</div>
            <div class="nav-icon">💬</div>
            <div class="nav-icon" onclick="localStorage.clear(); location.reload()">⚙️</div>
        </div>
        `:""}
    </div>`}window.doLogin=()=>{localStorage.setItem("xonusta_verified","true"),c()};window.showMasters=t=>{o.selectedCat=t,o.view="choose-master",c()};function u(){!document.getElementById("map")||!window.L||(a=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.5285,70.9425],14),window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png").addTo(a),window.L.marker([40.5285,70.9425],{icon:window.L.divIcon({className:"",html:'<div class="user-marker"><div class="user-marker-inner"></div></div>',iconSize:[50,50],iconAnchor:[25,25]})}).addTo(a),d.forEach(t=>{window.L.marker([t.lat,t.lng],{icon:window.L.divIcon({className:"",html:'<div class="master-marker">⚒️</div>',iconSize:[32,32],iconAnchor:[16,16]})}).addTo(a)}))}function c(){const t=document.getElementById("screen-container");t&&(t.innerHTML=m||localStorage.getItem("xonusta_verified")==="true"?g():h(),localStorage.getItem("xonusta_verified")==="true"&&setTimeout(u,50))}c();
