(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();var v;const a=(v=window.Telegram)==null?void 0:v.WebApp;a&&(a.ready(),a.expand());const i={currentScreen:"onboarding-1",role:"user",authMode:"login",splashVisible:!0,version:"1.05",dashboardTab:"home"};let c;const p=[{id:1,name:"Usta Alisher",lat:41.311081,lng:69.240562,cat:"Santehnik"},{id:2,name:"Usta Aziz",lat:41.3125,lng:69.242,cat:"Elektrik"},{id:3,name:"Usta Bahrom",lat:41.31,lng:69.245,cat:"Ta'mirchi"}],u={splash:()=>`
        <div class="splash">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${i.version}</div>
            <div class="splash-logo">⚒️</div>
            <div class="splash-title">Universal Master</div>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/onboarding1.png"></div>
            <div class="content">
                <h1>Universal <span class="text-yellow">Master</span></h1>
                <p>Ustalarni xaritada kuzatish va xizmatlarni boshqarish tizimiga xush kelibsiz.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('role-selection')">Keyingisi</button>
            </div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px;">
                <h1>Kim bo'lib kirasiz?</h1>
            </div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${i.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; margin-bottom: 12px; background: white;">
                <strong>Foydalanuvchi</strong><br><small>Usta chaqirish uchun</small>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${i.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; background: white;">
                <strong>Usta</strong><br><small>Hujjatlar va portfolio uchun</small>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('auth-selection')">Davom etish</button>
            </div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="tabs">
                <div class="tab ${i.authMode==="login"?"active":""}" onclick="toggleAuthMode('login')">Kirish</div>
                <div class="tab ${i.authMode==="signup"?"active":""}" onclick="toggleAuthMode('signup')">Ro'yxatdan o'tish</div>
            </div>
            <div class="input-group"><label>Login</label><input type="text" placeholder="Kiriting"></div>
            <div class="input-group"><label>Parol</label><input type="password" placeholder="••••••••"></div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('phone-entry')">Hamma narsa tayyor</button></div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Telefon</h1><p>Bot orqali kod yuboramiz.</p></div>
            <div class="input-group"><input type="tel" placeholder="+998 90 123 45 67"></div>
            <div class="footer"><button class="btn-primary" onclick="sendOtp()">Kod olish</button></div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Kodni kiriting</h1></div>
            <div class="otp-inputs">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('dashboard')">Kirish</button></div>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0; display: flex; flex-direction: column;">
            <div style="padding: 15px; background: white; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 18px; margin: 0;">XonUsta 👋</h2>
                <div style="font-size: 12px; background: #FFF9E6; padding: 4px 10px; border-radius: 20px; color: #FFB800; font-weight: bold;">v${i.version}</div>
            </div>

            <div id="main-content" style="flex: 1; position: relative;">
                ${i.dashboardTab==="home"?`
                    <div id="map" style="width: 100%; height: 100%; background: #eee;"></div>
                    <div style="position: absolute; bottom: 85px; left: 10px; right: 10px; z-index: 1000; background: white; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong style="display: block;">Eng yaqin usta: 5 daqiqa</strong>
                                <small style="opacity: 0.6;">Alisher - Santexnik</small>
                            </div>
                            <button style="background: var(--primary); border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold;" onclick="alert('Usta chaqirildi!')">Chaqirish</button>
                        </div>
                    </div>
                `:i.dashboardTab==="portfolio"?`
                    <div style="padding: 20px;">
                        <h3>Mening Portfoliom</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                            <div style="background: white; border-radius: 12px; padding: 10px; border: 1px solid #eee;">🖼️ Ish 1</div>
                            <div style="background: white; border-radius: 12px; padding: 10px; border: 1px solid #eee;">🖼️ Ish 2</div>
                        </div>
                    </div>
                `:`
                    <div style="padding: 40px; text-align: center;">
                        <div style="width: 80px; height: 80px; background: #eee; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 32px;">👤</div>
                        <h3>Aziz Rahimov</h3>
                        <p>+998 90 123 45 67</p>
                    </div>
                `}
            </div>

            <!-- Tab Navigation -->
            <div style="background: white; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 0 25px 0;">
                <div onclick="switchTab('home')" style="text-align: center; color: ${i.dashboardTab==="home"?"var(--primary)":"#ccc"}; cursor: pointer;">
                    <div style="font-size: 24px;">📍</div>
                    <small style="font-weight: 600;">Xarita</small>
                </div>
                ${i.role==="master"?`
                    <div onclick="switchTab('portfolio')" style="text-align: center; color: ${i.dashboardTab==="portfolio"?"var(--primary)":"#ccc"}; cursor: pointer;">
                        <div style="font-size: 24px;">🖼️</div>
                        <small style="font-weight: 600;">Portfolio</small>
                    </div>
                `:""}
                <div onclick="switchTab('profile')" style="text-align: center; color: ${i.dashboardTab==="profile"?"var(--primary)":"#ccc"}; cursor: pointer;">
                    <div style="font-size: 24px;">👤</div>
                    <small style="font-weight: 600;">Profil</small>
                </div>
            </div>
        </div>
    `};function h(){document.getElementById("map")&&(c=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([41.311081,69.240562],15),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(c),p.forEach(e=>{window.L.marker([e.lat,e.lng],{icon:window.L.divIcon({className:"master-marker",html:'<div style="background: var(--primary); width: 40px; height: 40px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">⚒️</div>',iconSize:[40,40],iconAnchor:[20,40]})}).addTo(c).bindPopup(`<b>${e.name}</b><br>${e.cat}`)}),setInterval(()=>{p[0].lat+=(Math.random()-.5)*5e-4,p[0].lng+=(Math.random()-.5)*5e-4,n()},3e3))}function n(){const e=document.getElementById("screen-container");e&&(i.splashVisible?(e.innerHTML=u.splash(),setTimeout(()=>{i.splashVisible=!1,n()},2200)):(e.innerHTML=u[i.currentScreen](),i.currentScreen==="dashboard"&&i.dashboardTab==="home"&&setTimeout(h,50)))}window.navigateTo=e=>{i.currentScreen=e,n()};window.selectRole=e=>{i.role=e,n()};window.toggleAuthMode=e=>{i.authMode=e,n()};window.switchTab=e=>{i.dashboardTab=e,n()};window.moveFocus=(e,s)=>{e.value.length===1&&s<3&&document.querySelectorAll(".otp-inputs input")[s+1].focus()};window.sendOtp=async()=>{var r,t;const e=Math.floor(1e3+Math.random()*9e3),s=(t=(r=a==null?void 0:a.initDataUnsafe)==null?void 0:r.user)==null?void 0:t.id,d="8661534133:AAFF7LF3Nk5-VMz-rmRUOZwo6Ud-ne1AnZw";if(s)try{await fetch(`https://api.telegram.org/bot${d}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:s,text:`🔐 Kodingiz: ${e}`})})}catch{}a||alert(`Kod: ${e}`),window.navigateTo("otp-entry")};n();
