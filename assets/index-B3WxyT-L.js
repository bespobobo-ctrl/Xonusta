(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();var p;const a=(p=window.Telegram)==null?void 0:p.WebApp;a&&(a.ready(),a.expand());const i={currentScreen:"onboarding-1",role:"user",authMode:"login",splashVisible:!0,version:"1.03"},c={splash:()=>`
        <div class="splash">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${i.version}</div>
            <div class="splash-logo">🛠️</div>
            <div class="splash-title">Universal Master</div>
            <div class="splash-loader"></div>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/onboarding1.png"></div>
            <div class="content">
                <h1>Universal <span class="text-yellow">Master</span></h1>
                <p>O'z sohasining ustalarini toping yoki o'z xizmatlaringizni taklif qiling.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('role-selection')">Boshlash</button>
            </div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px;">
                <h1>Kim bo'lib kirasiz?</h1>
                <p>Sizga mos keladigan rolni tanlang.</p>
            </div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${i.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 32px;">👤</div>
                <div style="text-align: left;">
                    <strong style="display: block;">Men Foydalanuvchiman</strong>
                    <small style="opacity: 0.6;">Ustalarni qidirish va chaqirish uchun</small>
                </div>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${i.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 16px; display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 32px;">👨‍🔧</div>
                <div style="text-align: left;">
                    <strong style="display: block;">Men Ustaman</strong>
                    <small style="opacity: 0.6;">Mijozlar bilan ishlash uchun</small>
                </div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('auth-selection')">Davom etish</button>
            </div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>${i.role==="master"?"Usta":"Foydalanuvchi"} bo'limi</h1>
                <p>Tizimga kirish yoki ro'yxatdan o'tish</p>
            </div>
            <div class="tabs">
                <div class="tab ${i.authMode==="login"?"active":""}" onclick="toggleAuthMode('login')">Kirish</div>
                <div class="tab ${i.authMode==="signup"?"active":""}" onclick="toggleAuthMode('signup')">Ro'yxatdan o'tish</div>
            </div>
            <div id="auth-form-container">
                ${i.authMode==="signup"&&i.role==="master"?`
                    <div class="input-group"><label>Ism</label><input type="text" placeholder="Ismingiz"></div>
                    <div class="input-group"><label>Familiya</label><input type="text" placeholder="Familiyangiz"></div>
                    <div class="input-group"><label>Yashash manzili</label><input type="text" placeholder="Manzil"></div>
                `:""}
                <div class="input-group"><label>Telefon / Pochta</label><input type="text" placeholder="Kiriting"></div>
                <div class="input-group"><label>Parol</label><input type="password" placeholder="••••••••"></div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('phone-entry')">Davom etish</button>
            </div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20">
                <h1>Tasdiqlash</h1>
                <p>Botimiz orqali kod yuboramiz.</p>
            </div>
            <div class="input-group">
                <label>Telefon</label>
                <input type="tel" placeholder="+998 90 123 45 67">
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="sendOtp()">Kodni olish</button>
            </div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20">
                <h1>Kod</h1>
                <p>Botga yuborilgan 4 xonali kodni kiriting.</p>
            </div>
            <div class="otp-inputs">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('dashboard')">Tasdiqlash</button>
            </div>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0;">
            <div style="padding: 20px; background: white; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 20px;">XonUsta 👋</h2>
                <div style="width: 40px; height: 40px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${i.role==="master"?"U":"F"}</div>
            </div>
            <div style="flex: 1; position: relative;">
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: #f5f5f5; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <div style="font-size: 48px; margin-bottom: 20px;">📍</div>
                    <h3>Xarita yuklanmoqda...</h3>
                    <p style="opacity: 0.6; text-align: center; padding: 0 40px;">${i.role==="master"?"Yaqin orada sizga buyurtmalar kelishni boshlaydi.":"Yaqin atrofdagi ustalarni qidirmoqdamiz."}</p>
                </div>
            </div>
            <div class="footer" style="background: white; border-top: 1px solid #eee; padding: 15px; position: static;">
                <button class="btn-primary" onclick="location.reload()">Chiqish</button>
            </div>
        </div>
    `};function r(){const t=document.getElementById("screen-container");t&&(i.splashVisible?(t.innerHTML=c.splash(),setTimeout(()=>{i.splashVisible=!1,r()},2200)):t.innerHTML=c[i.currentScreen]())}window.navigateTo=t=>{i.currentScreen=t,r()};window.selectRole=t=>{i.role=t,r()};window.toggleAuthMode=t=>{i.authMode=t,r()};window.moveFocus=(t,o)=>{var n;t.value.length===1&&o<3&&((n=document.querySelectorAll(".otp-inputs input")[o+1])==null||n.focus())};window.sendOtp=async()=>{var l,e;const t=Math.floor(1e3+Math.random()*9e3),o=(e=(l=a==null?void 0:a.initDataUnsafe)==null?void 0:l.user)==null?void 0:e.id,n="8661534133:AAFF7LF3Nk5-VMz-rmRUOZwo6Ud-ne1AnZw";if(o)try{await fetch(`https://api.telegram.org/bot${n}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o,text:`🔐 Universal Master tasdiqlash kodingiz: ${t}`})})}catch(s){console.error(s)}a||alert(`(Test) Kod: ${t}`),window.navigateTo("otp-entry")};r();
