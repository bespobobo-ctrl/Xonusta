(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();var h;const r=(h=window.Telegram)==null?void 0:h.WebApp;r&&(r.ready(),r.expand());var g;const p=(g=r==null?void 0:r.initDataUnsafe)==null?void 0:g.user,b=p?`user_verified_${p.id}`:"user_verified_guest",u=localStorage.getItem(b)==="true",i={currentScreen:u?"dashboard":"onboarding-1",role:localStorage.getItem("user_role")||"user",splashVisible:!0,version:"1.06",dashboardTab:"home",isVerified:u};let c;const y=[{id:1,name:"Usta Alisher",lat:41.311081,lng:69.240562,cat:"Santehnik"},{id:2,name:"Usta Aziz",lat:41.3125,lng:69.242,cat:"Elektrik"}],v={splash:()=>`
        <div class="splash">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${i.version}</div>
            <div class="splash-logo">⚒️</div>
            <div class="splash-title">Universal Master</div>
            <div class="splash-loader"></div>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/onboarding1.png"></div>
            <div class="content">
                <h1>Universal <span class="text-yellow">Master</span></h1>
                <p>Ustalarni xaritada kuzatish xizmatiga xush kelibsiz.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('role-selection')">Boshlash</button>
            </div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Siz kimsiz?</h1></div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${i.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; margin-bottom: 12px; background: white;">
                <strong>Foydalanuvchi</strong>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${i.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; background: white;">
                <strong>Usta</strong>
            </div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('auth-selection')">Keyingi</button></div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="tabs">
                <div class="tab active">Kirish / Ro'yxatdan o'tish</div>
            </div>
            <div class="input-group"><label>Login</label><input type="text" placeholder="Ism yoki Tel"></div>
            <div class="input-group"><label>Parol</label><input type="password" placeholder="••••••••"></div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('phone-entry')">Davom etish</button></div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Tasdiqlash</h1><p>Botdan kod keladi.</p></div>
            <div class="input-group"><input type="tel" id="user-phone" placeholder="+998 90 123 45 67"></div>
            <div class="footer"><button class="btn-primary" onclick="sendOtp()">Kod olish</button></div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Kodni kiriting</h1></div>
            <div class="otp-inputs" style="display:flex; gap:10px; justify-content:center;">
                <input type="tel" maxlength="1" style="width:50px; height:60px; text-align:center; font-size:24px; border:2px solid #eee; border-radius:12px;" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" style="width:50px; height:60px; text-align:center; font-size:24px; border:2px solid #eee; border-radius:12px;" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" style="width:50px; height:60px; text-align:center; font-size:24px; border:2px solid #eee; border-radius:12px;" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" style="width:50px; height:60px; text-align:center; font-size:24px; border:2px solid #eee; border-radius:12px;" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer"><button class="btn-primary" onclick="verifyAndLogin()">Tasdiqlash</button></div>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0; display: flex; flex-direction: column;">
            <div style="padding: 15px; background: white; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 18px; margin: 0;">XonUsta 👋</h2>
                <div style="font-size: 10px; color: #ccc;">v${i.version}</div>
            </div>
            <div style="flex: 1; position: relative;">
                ${i.dashboardTab==="home"?`
                    <div id="map" style="width: 100%; height: 100%;"></div>
                    <div style="position: absolute; bottom: 85px; left: 10px; right: 10px; z-index: 1000; background: white; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <strong>Eng yaqin usta: 5 daqiqa</strong>
                    </div>
                `:'<div style="padding: 20px;">Tez orada...</div>'}
            </div>
            <div style="background: white; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 10px 25px;">
                <div onclick="switchTab('home')" style="color: ${i.dashboardTab==="home"?"var(--primary)":"#ccc"}">📍</div>
                <div onclick="switchTab('profile')" style="color: ${i.dashboardTab==="profile"?"var(--primary)":"#ccc"}">👤</div>
            </div>
        </div>
    `};function m(){!document.getElementById("map")||window.L===void 0||(c=window.L.map("map",{zoomControl:!1}).setView([41.311081,69.240562],15),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(c),y.forEach(e=>{window.L.marker([e.lat,e.lng],{icon:window.L.divIcon({className:"m",html:'<div style="background:var(--primary); width:30px; height:30px; border-radius:50%; border:2px solid white; display:flex; align-items:center; justify-content:center;">⚒️</div>'})}).addTo(c)}))}function a(){const e=document.getElementById("screen-container");e&&(i.splashVisible?(e.innerHTML=v.splash(),setTimeout(()=>{i.splashVisible=!1,a()},2e3)):(e.innerHTML=v[i.currentScreen](),i.currentScreen==="dashboard"&&i.dashboardTab==="home"&&setTimeout(m,100)))}window.navigateTo=e=>{i.currentScreen=e,a()};window.selectRole=e=>{i.role=e,localStorage.setItem("user_role",e),a()};window.switchTab=e=>{i.dashboardTab=e,a()};window.moveFocus=(e,o)=>{e.value.length===1&&o<3&&document.querySelectorAll(".otp-inputs input")[o+1].focus()};window.sendOtp=async()=>{var n,t;const e=Math.floor(1e3+Math.random()*9e3),o=(t=(n=r==null?void 0:r.initDataUnsafe)==null?void 0:n.user)==null?void 0:t.id,d="8661534133:AAFF7LF3Nk5-VMz-rmRUOZwo6Ud-ne1AnZw";if(o)try{await fetch(`https://api.telegram.org/bot${d}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o,text:`🔐 Universal Master kodingiz: ${e}`})})}catch{}window.temp_otp=e,window.navigateTo("otp-entry")};window.verifyAndLogin=()=>{localStorage.setItem(b,"true"),i.isVerified=!0,window.navigateTo("dashboard")};a();
