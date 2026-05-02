(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}})();var p;const a=(p=window.Telegram)==null?void 0:p.WebApp;a&&(a.ready(),a.expand());const e={currentScreen:"onboarding-1",role:"user",authMode:"login",splashVisible:!0,version:"1.04",dashboardTab:"home"},c={splash:()=>`
        <div class="splash">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${e.version}</div>
            <div class="splash-logo">🛠️</div>
            <div class="splash-title">Universal Master</div>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/onboarding1.png"></div>
            <div class="content">
                <h1>Universal <span class="text-yellow">Master</span></h1>
                <p>Ushbu platforma yordamida o'z ishingizni butun shaharga taniting.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('role-selection')">Kirish</button>
            </div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px;">
                <h1>Foydalanish turi</h1>
                <p>O'zingizga mos rolni tanlang.</p>
            </div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${e.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; margin-bottom: 12px; display: flex; align-items: center; gap: 15px; background: white;">
                <div style="font-size: 32px;">👤</div>
                <div style="text-align: left;">
                    <strong>Foydalanuvchi</strong>
                    <small style="display:block; opacity: 0.5;">Usta chaqirish uchun</small>
                </div>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${e.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; display: flex; align-items: center; gap: 15px; background: white;">
                <div style="font-size: 32px;">👨‍🔧</div>
                <div style="text-align: left;">
                    <strong>Usta (Xizmat ko'rsatuvchi)</strong>
                    <small style="display:block; opacity: 0.5;">Portfolio va buyurtmalar yaratish</small>
                </div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('auth-selection')">Davom etish</button>
            </div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>${e.role==="master"?"Usta":"Mijoz"} profili</h1>
                <p>Tizimga kirish yoki yangi akkaunt ochish</p>
            </div>
            <div class="tabs">
                <div class="tab ${e.authMode==="login"?"active":""}" onclick="toggleAuthMode('login')">Kirish</div>
                <div class="tab ${e.authMode==="signup"?"active":""}" onclick="toggleAuthMode('signup')">Ro'yxatdan o'tish</div>
            </div>
            <div id="auth-form-container">
                <div class="input-group"><label>Login / Tel</label><input type="text" placeholder="Kiriting"></div>
                ${e.authMode==="signup"&&e.role==="master"?`
                    <div class="input-group"><label>Mutaxassislik</label><input type="text" placeholder="Elektrik, Santexnik..."></div>
                `:""}
                <div class="input-group"><label>Parol</label><input type="password" placeholder="••••••••"></div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('phone-entry')">Galdagi qadam</button>
            </div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Telefon</h1><p>Bot orqali kod yuboramiz.</p></div>
            <div class="input-group"><input type="tel" placeholder="+998 90 123 45 67"></div>
            <div class="footer"><button class="btn-primary" onclick="sendOtp()">Kod olish</button></div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Kodni kiriting</h1><p>Botimiz yuborgan kodni yozing.</p></div>
            <div class="otp-inputs">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('dashboard')">Tasdiqlash</button></div>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0; background: #F8F9FA;">
            <!-- Header -->
            <div style="padding: 20px; background: white; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; position: sticky; top:0; z-index: 10;">
                <div>
                    <small style="opacity: 0.5;">Xush kelibsiz 👋</small>
                    <h2 style="font-size: 18px; margin: 0;">Aziz Rahimov</h2>
                </div>
                <div style="width: 45px; height: 45px; background: var(--primary); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(255,184,0,0.3);">⚒️</div>
            </div>

            <!-- Tab Content -->
            <div style="flex: 1; overflow-y: auto; padding: 20px;">
                ${u()}
            </div>

            <!-- Bottom Navigation -->
            <div style="background: white; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 0 30px 0;">
                <div onclick="switchTab('home')" style="text-align: center; color: ${e.dashboardTab==="home"?"var(--primary)":"#ccc"}; cursor: pointer;">
                    <div style="font-size: 24px;">🏠</div>
                    <small style="font-weight: 600;">Asosiy</small>
                </div>
                ${e.role==="master"?`
                    <div onclick="switchTab('portfolio')" style="text-align: center; color: ${e.dashboardTab==="portfolio"?"var(--primary)":"#ccc"}; cursor: pointer;">
                        <div style="font-size: 24px;">🖼️</div>
                        <small style="font-weight: 600;">Portfolio</small>
                    </div>
                `:""}
                <div onclick="switchTab('profile')" style="text-align: center; color: ${e.dashboardTab==="profile"?"var(--primary)":"#ccc"}; cursor: pointer;">
                    <div style="font-size: 24px;">👤</div>
                    <small style="font-weight: 600;">Profil</small>
                </div>
            </div>
        </div>
    `};function u(){return e.dashboardTab==="home"?`
            <div style="background: var(--primary); padding: 20px; border-radius: 20px; color: white; margin-bottom: 20px;">
                <h3 style="margin: 0; font-size: 20px;">${e.role==="master"?"Sizning Balansingiz":"Xizmatlar qidirish"}</h3>
                <p style="font-size: 32px; font-weight: 800; margin: 10px 0;">${e.role==="master"?"1,250,000 UZS":"Eng yaqin ustalar"}</p>
                <button style="background: rgba(255,255,255,0.2); border: none; padding: 8px 15px; border-radius: 10px; color: white; font-weight: 600;">Batafsil</button>
            </div>
            <h4>Yaqindagi ${e.role==="master"?"buyurtmalar":"ustalar"}</h4>
            <div style="background: white; padding: 15px; border-radius: 15px; border: 1px solid #eee; margin-bottom: 10px;">
                <div style="display: flex; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: #eee; border-radius: 10px; display: flex; align-items: center; justify-content: center;">👤</div>
                    <div>
                        <strong style="display: block;">${e.role==="master"?"Santexnika ishi":"Usta Alisher"}</strong>
                        <small style="opacity: 0.6;">Chilonzor 3-mavze</small>
                    </div>
                </div>
            </div>
        `:e.dashboardTab==="portfolio"?`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0;">Mening ishlarim</h3>
                <button style="background: var(--primary); border: none; padding: 8px 16px; border-radius: 10px; font-weight: bold; font-size: 12px;">+ Qo'shish</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background: white; border-radius: 15px; overflow: hidden; border: 1px solid #eee;">
                    <div style="height: 120px; background: #ddd; display: flex; align-items: center; justify-content: center;">🖼️</div>
                    <div style="padding: 10px;">
                        <strong style="display: block; font-size: 14px;">Elektromontaj</strong>
                        <small style="opacity: 0.5;">Yashnobod tumani</small>
                    </div>
                </div>
                <div style="background: white; border-radius: 15px; overflow: hidden; border: 1px solid #eee;">
                    <div style="height: 120px; background: #ddd; display: flex; align-items: center; justify-content: center;">🖼️</div>
                    <div style="padding: 10px;">
                        <strong style="display: block; font-size: 14px;">Kabel o'tkazish</strong>
                        <small style="opacity: 0.5;">Yunusobod</small>
                    </div>
                </div>
            </div>
        `:`
            <div style="text-align: center; padding: 40px 0;">
                <div style="width: 100px; height: 100px; background: #eee; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px;">👤</div>
                <h3>Aziz Rahimov</h3>
                <p style="opacity: 0.5;">+998 90 123 45 67</p>
                <button class="btn-primary" style="margin-top: 20px;" onclick="location.reload()">Chiqish</button>
            </div>
        `}function n(){const t=document.getElementById("screen-container");t&&(e.splashVisible?(t.innerHTML=c.splash(),setTimeout(()=>{e.splashVisible=!1,n()},2200)):t.innerHTML=c[e.currentScreen]())}window.navigateTo=t=>{e.currentScreen=t,n()};window.selectRole=t=>{e.role=t,n()};window.toggleAuthMode=t=>{e.authMode=t,n()};window.switchTab=t=>{e.dashboardTab=t,n()};window.moveFocus=(t,s)=>{t.value.length===1&&s<3&&document.querySelectorAll(".otp-inputs input")[s+1].focus()};window.sendOtp=async()=>{var r,i;const t=Math.floor(1e3+Math.random()*9e3),s=(i=(r=a==null?void 0:a.initDataUnsafe)==null?void 0:r.user)==null?void 0:i.id,l="8661534133:AAFF7LF3Nk5-VMz-rmRUOZwo6Ud-ne1AnZw";if(s)try{await fetch(`https://api.telegram.org/bot${l}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:s,text:`🔐 Kodingiz: ${t}`})})}catch{}a||alert(`Kod: ${t}`),window.navigateTo("otp-entry")};n();
