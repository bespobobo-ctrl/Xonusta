(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var g;const l=(g=window.Telegram)==null?void 0:g.WebApp;l&&(l.ready(),l.expand());const f=localStorage.getItem("xonusta_verified")==="true";let a="Barchasi",c,s;const p=[{id:1,name:"Alisher Karimov",lat:40.5285,lng:70.9425,cat:"Elektrik",rating:4.9,jobs:124,price:"50 000",status:"bush"},{id:2,name:"Bahrom Soliev",lat:40.5305,lng:70.946,cat:"Santexnik",rating:4.8,jobs:89,price:"45 000",status:"bush"},{id:3,name:"Davron Ahmedov",lat:40.526,lng:70.939,cat:"Duradgor",rating:5,jobs:215,price:"80 000",status:"band"},{id:4,name:"Eldor Rahimov",lat:40.531,lng:70.941,cat:"Elektrik",rating:4.6,jobs:56,price:"40 000",status:"bush"},{id:5,name:"Farhod Toshmatov",lat:40.5275,lng:70.948,cat:"Santexnik",rating:4.7,jobs:78,price:"55 000",status:"band"},{id:6,name:"Gani Umarov",lat:40.532,lng:70.944,cat:"Konditsioner",rating:4.9,jobs:145,price:"70 000",status:"bush"}],x=["Barchasi","Elektrik","Santexnik","Duradgor","Konditsioner"];function m(){return`
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:white; padding:40px; text-align:center;">
        <div style="font-size:70px; margin-bottom:20px;">⚒️</div>
        <h1 style="font-size:28px; font-weight:800; margin-bottom:8px;">XonUsta</h1>
        <p style="color:#999; margin-bottom:50px; font-size:14px;">Qo'qon shahri usta xizmati</p>
        <button onclick="doLogin()" style="background:#FFB800; border:none; padding:18px 40px; border-radius:16px; font-size:16px; font-weight:700; width:100%; cursor:pointer;">Telegram orqali kirish</button>
        <p style="margin-top:20px; font-size:10px; color:#ccc;">v1.10</p>
    </div>`}function h(){return`
    <div style="display:flex; flex-direction:column; height:100vh; position:relative;">
        
        <!-- Kategoriyalar -->
        <div style="position:absolute; top:12px; left:0; right:0; z-index:1000; padding:0 15px;">
            <div style="display:flex; gap:8px; overflow-x:auto; -webkit-overflow-scrolling:touch;" class="no-scrollbar">
                ${x.map(e=>`
                    <div onclick="filterCat('${e}')" style="
                        white-space:nowrap; padding:10px 18px; border-radius:30px; font-size:13px; font-weight:700; cursor:pointer;
                        background:${a===e?"#FFB800":"white"}; 
                        color:${a===e?"white":"#333"};
                        box-shadow:0 2px 10px rgba(0,0,0,0.08);
                    ">${e}</div>
                `).join("")}
            </div>
        </div>

        <!-- Xarita -->
        <div id="map" style="flex:1; width:100%;"></div>

        <!-- Tanlangan usta ma'lumotlari -->
        <div id="usta-panel" style="display:none; position:absolute; bottom:0; left:0; right:0; z-index:1000; background:white; border-radius:24px 24px 0 0; padding:25px 20px 35px; box-shadow:0 -10px 30px rgba(0,0,0,0.08);">
            <div id="usta-content"></div>
        </div>
    </div>`}function b(e){const t=document.getElementById("usta-panel"),n=document.getElementById("usta-content");!t||!n||(n.innerHTML=`
        <div style="display:flex; gap:15px; align-items:center; margin-bottom:18px;">
            <div style="width:55px; height:55px; background:#F2F2F7; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:26px;">👤</div>
            <div style="flex:1;">
                <h3 style="margin:0; font-size:18px; font-weight:700;">${e.name}</h3>
                <p style="margin:2px 0 0; font-size:13px; color:#999;">${e.cat} · ${e.jobs} ta ish bajarilgan</p>
            </div>
            <div style="text-align:right;">
                <div style="color:#FFB800; font-weight:800;">⭐ ${e.rating}</div>
                <div style="font-size:11px; color:#999;">${e.status==="bush"?"🟢 Bo'sh":"🔴 Band"}</div>
            </div>
        </div>
        <div style="display:flex; gap:10px; margin-bottom:18px;">
            <div style="flex:1; background:#F2F2F7; padding:12px; border-radius:14px; text-align:center;">
                <div style="font-weight:800; font-size:16px;">${e.price}</div>
                <div style="font-size:11px; color:#999;">so'mdan</div>
            </div>
            <div style="flex:1; background:#F2F2F7; padding:12px; border-radius:14px; text-align:center;">
                <div style="font-weight:800; font-size:16px;">${e.jobs}</div>
                <div style="font-size:11px; color:#999;">Bajarilgan</div>
            </div>
            <div style="flex:1; background:#F2F2F7; padding:12px; border-radius:14px; text-align:center;">
                <div style="font-weight:800; font-size:16px;">⭐ ${e.rating}</div>
                <div style="font-size:11px; color:#999;">Reyting</div>
            </div>
        </div>
        ${e.status==="bush"?`
            <button onclick="orderUsta(${e.id})" style="background:#FFB800; border:none; padding:18px; border-radius:16px; font-size:16px; font-weight:700; width:100%; cursor:pointer;">
                🚀 Buyurtma berish
            </button>
        `:`
            <button disabled style="background:#eee; border:none; padding:18px; border-radius:16px; font-size:16px; font-weight:700; width:100%; color:#999;">
                Band (hozir chaqirib bo'lmaydi)
            </button>
        `}
        <div onclick="closePanel()" style="text-align:center; margin-top:15px; color:#999; font-size:13px; cursor:pointer;">Yopish</div>
    `,t.style.display="block")}function y(){!document.getElementById("map")||!window.L||(c=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.5285,70.9425],15),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(c),s=window.L.layerGroup().addTo(c),v())}function v(){if(!s)return;s.clearLayers(),(a==="Barchasi"?p:p.filter(t=>t.cat===a)).forEach(t=>{const n=t.status==="bush"?"#4CAF50":"#FF5252",r=window.L.marker([t.lat,t.lng],{icon:window.L.divIcon({className:"",html:`<div style="
                    background:${n}; width:14px; height:14px; border-radius:50%; border:3px solid white;
                    box-shadow:0 2px 8px rgba(0,0,0,0.3);
                "></div>`,iconSize:[20,20],iconAnchor:[10,10]})});r.on("click",()=>b(t)),s.addLayer(r)})}function u(){const e=document.getElementById("screen-container");e&&(e.innerHTML=f||localStorage.getItem("xonusta_verified")==="true"?h():m(),localStorage.getItem("xonusta_verified")==="true"&&setTimeout(y,50))}window.doLogin=()=>{localStorage.setItem("xonusta_verified","true"),u()};window.filterCat=e=>{a=e,u()};window.closePanel=()=>{const e=document.getElementById("usta-panel");e&&(e.style.display="none")};window.orderUsta=e=>{const t=p.find(n=>n.id===e);t&&(alert(`✅ ${t.name} ga buyurtma yuborildi!

Usta tez orada yo'lga chiqadi.`),window.closePanel())};u();
