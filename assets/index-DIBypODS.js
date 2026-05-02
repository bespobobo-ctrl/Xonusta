(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();var f;const l=(f=window.Telegram)==null?void 0:f.WebApp;l&&(l.ready(),l.expand(),l.headerColor="#FFFFFF");const k=localStorage.getItem("xonusta_verified")==="true",o={view:"categories",selectedCat:""};let n,g;const p=40.5285,v=70.9425,h=[{id:1,name:"Aziz (Tezkor)",cat:"Elektrik",lat:40.531,lng:70.945,price:"45,000",status:"bo'sh"},{id:2,name:"Sardor Premium",cat:"Elektrik",lat:40.524,lng:70.938,price:"80,000",status:"bo'sh"},{id:3,name:"Bekzod",cat:"Elektrik",lat:40.535,lng:70.948,price:"50,000",status:"band"},{id:4,name:"Alisher",cat:"Santexnik",lat:40.529,lng:70.941,price:"60,000",status:"bo'sh"},{id:5,name:"Doniyor",cat:"Duradgor",lat:40.526,lng:70.946,price:"100,000",status:"bo'sh"}];let d=[];function y(t,e,s,c){if(!window.L)return{distStr:"0 km",timeStr:"0 min",rawDist:0};const i=window.L.latLng(t,e),a=window.L.latLng(s,c),r=i.distanceTo(a),w=r;let x=r<1e3?Math.round(r)+" m":(r/1e3).toFixed(1)+" km";const b=Math.max(1,Math.round(r/400));return{distStr:x,timeStr:b+" daqiqa",rawDist:w}}function L(){return`
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#FFCC00; padding:40px; text-align:center;">
        <div style="width:100px; height:100px; background:white; border-radius:30px; display:flex; align-items:center; justify-content:center; font-size:40px; margin-bottom:30px; box-shadow:0 10px 30px rgba(0,0,0,0.1);">⚒️</div>
        <h1 style="font-size:32px; font-weight:800; margin-bottom:10px;">XonUsta</h1>
        <p style="font-weight:600; margin-bottom:60px;">Professional xizmatlar</p>
        <button onclick="doLogin()" style="background:white; color:#222; border:none; padding:20px; border-radius:20px; font-size:18px; font-weight:800; width:100%; box-shadow:0 10px 20px rgba(0,0,0,0.1);">Telegram orqali kirish</button>
    </div>`}function S(){return`
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
        <div class="bottom-sheet" ${o.view==="master-list"?'style="height: 60vh; overflow-y:auto; padding-bottom:100px;"':""}>
            <div class="sheet-handle"></div>
            
            ${o.view==="categories"?`
                <div class="sheet-header">
                    <h2>Xizmatni tanlang</h2>
                    <span onclick="alert('Sozlamalar')">Barchasi</span>
                </div>
                <div class="cards-row">
                    <div class="service-card active" onclick="loadCategory('Elektrik')">
                        <div class="sc-icon">⚡</div>
                        <div class="sc-title">Elektrik</div>
                        <div class="sc-subtitle" style="color:var(--dark)">Tezkor chaqiruv</div>
                    </div>
                    <div class="service-card" onclick="loadCategory('Santexnik')">
                        <div class="sc-icon">🚿</div>
                        <div class="sc-title">Santexnik</div>
                        <div class="sc-subtitle">Uyga kelish</div>
                    </div>
                    <div class="service-card" onclick="loadCategory('Duradgor')">
                        <div class="sc-icon">🔨</div>
                        <div class="sc-title">Duradgor</div>
                        <div class="sc-subtitle">Mebel xizmati</div>
                    </div>
                </div>
            `:`
                <!-- Master List View -->
                <div class="sheet-header" style="position:sticky; top:0; background:white; z-index:10; padding-bottom:10px;">
                    <h2 style="display:flex; align-items:center; gap:10px;">
                        <span onclick="backToCategories()" style="background:#f5f5f5; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">←</span>
                        ${o.selectedCat}lar (${d.length})
                    </h2>
                </div>
                
                <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
                    ${d.map(t=>`
                        <div class="master-list-item" style="opacity: ${t.status==="band"?"0.6":"1"};">
                            <div style="width:45px; height:45px; background:var(--bg-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px;">
                                ${t.status==="bo'sh"?"🟢":"🔴"}
                            </div>
                            <div style="flex:1;">
                                <div style="display:flex; justify-content:space-between;">
                                    <strong style="font-size:15px;">${t.name}</strong>
                                    <strong style="color:var(--primary);">${t.price} so'm</strong>
                                </div>
                                <div style="display:flex; gap:10px; font-size:11px; font-weight:600; color:var(--gray); margin-top:4px;">
                                    <span>${t.status==="bo'sh"?"Hozir bo'sh":"Band"}</span>
                                    <span>•</span>
                                    <span>📍 ${t.calc.distStr}</span>
                                    <span>•</span>
                                    <span>⏱ ${t.calc.timeStr}</span>
                                </div>
                            </div>
                        </div>
                        ${t.status==="bo'sh"?`
                            <button onclick="orderMaster(${t.id})" style="background:var(--primary); color:white; border:none; border-radius:12px; padding:10px; font-weight:800; transform:translateY(-5px);">
                                Chaqirish
                            </button>
                        `:""}
                    `).join("")}
                </div>
            `}
        </div>

        <!-- Floating Bottom Navigation -->
        ${o.view==="categories"?`
        <div class="bottom-nav">
            <div class="nav-icon active">🏠</div>
            <div class="nav-icon">🕒</div>
            <div class="center-fab" onclick="alert('Asosiy aksiya')">⚒️</div>
            <div class="nav-icon">💬</div>
            <div class="nav-icon" onclick="localStorage.clear(); location.reload()">⚙️</div>
        </div>
        `:""}
    </div>`}window.doLogin=()=>{localStorage.setItem("xonusta_verified","true"),u()};window.loadCategory=t=>{o.selectedCat=t,o.view="master-list",d=h.filter(e=>e.cat===t).map(e=>{const s=y(p,v,e.lat,e.lng);return{...e,calc:s}}).sort((e,s)=>e.calc.rawDist-s.calc.rawDist),u(),m()};window.backToCategories=()=>{o.view="categories",d=[],u(),m()};window.orderMaster=t=>{const e=h.find(s=>s.id===t);alert(`✅ ${e==null?void 0:e.name} (${o.selectedCat}) ga buyurtma ketdi!

Usta ${y(p,v,e.lat,e.lng).timeStr} da yetib keladi.`),window.backToCategories()};function C(){!document.getElementById("map")||!window.L||(n=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([p,v],14),window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png").addTo(n),g=window.L.layerGroup().addTo(n),window.L.marker([p,v],{icon:window.L.divIcon({className:"",html:'<div class="user-marker"><div class="user-marker-inner"></div></div>',iconSize:[50,50],iconAnchor:[25,25]})}).addTo(n),m())}function m(){if(!g)return;g.clearLayers(),(o.view==="master-list"?d:h).forEach(e=>{const s=e.status==="band";window.L.marker([e.lat,e.lng],{icon:window.L.divIcon({className:"",html:`<div class="master-marker" style="background:${s?"#CCCCCC":"var(--primary)"}">⚒️</div>`,iconSize:[32,32],iconAnchor:[16,16]})}).addTo(n)})}function u(){const t=document.getElementById("screen-container");t&&(t.innerHTML=k||localStorage.getItem("xonusta_verified")==="true"?S():L(),localStorage.getItem("xonusta_verified")==="true"&&!n&&setTimeout(C,50))}u();
