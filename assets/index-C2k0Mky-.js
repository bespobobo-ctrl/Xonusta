(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();var p;const a=(p=window.Telegram)==null?void 0:p.WebApp;a&&(a.ready(),a.expand());const e={currentScreen:"onboarding-1",role:"user",authMode:"login",splashVisible:!0,version:"1.02"},c={splash:()=>`
        <div class="splash" id="splash-screen">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${e.version}</div>
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
                <button class="btn-primary" onclick="navigateTo('role-selection')">Keyingisi</button>
            </div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px;">
                <h1>Kim bo'lib kirasiz?</h1>
                <p>Sizga mos keladigan rolni tanlang.</p>
            </div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${e.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 32px;">👤</div>
                <div style="text-align: left;">
                    <strong style="display: block;">Men Foydalanuvchiman</strong>
                    <small style="opacity: 0.6;">Ustalarni qidirish va chaqirish uchun</small>
                </div>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${e.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 16px; display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 32px;">👨‍🔧</div>
                <div style="text-align: left;">
                    <strong style="display: block;">Men Ustaman</strong>
                    <small style="opacity: 0.6;">Mijozlar bilan ishlash va daromad topish uchun</small>
                </div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('auth-selection')">Davom etish</button>
            </div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px; text-align: left;">
                <h1>${e.role==="master"?"Usta":"Foydalanuvchi"} bo'limi</h1>
                <p>${e.authMode==="login"?"Tizimga kiring":"Ma'lumotlaringizni kiriting"}</p>
            </div>
            
            <div class="tabs">
                <div class="tab ${e.authMode==="login"?"active":""}" onclick="toggleAuthMode('login')">Kirish</div>
                <div class="tab ${e.authMode==="signup"?"active":""}" onclick="toggleAuthMode('signup')">Ro'yxatdan o'tish</div>
            </div>

            <div id="auth-form-container">
                ${e.authMode==="login"?`
                    <div class="input-group">
                        <label>Telefon raqam yoki Pochta</label>
                        <input type="text" placeholder="example@mail.com">
                    </div>
                `:`
                    ${e.role==="master"?`
                        <div class="input-group"><label>Ismingiz</label><input type="text" placeholder="Aziz"></div>
                        <div class="input-group"><label>Familiyangiz</label><input type="text" placeholder="Rahimov"></div>
                        <div class="input-group"><label>Yashash manzili</label><input type="text" placeholder="Toshkent sh. Chilonzor"></div>
                        <div class="input-group"><label>Ish joyi manzili</label><input type="text" placeholder="Beruniy 24 / Do'kon 5"></div>
                    `:`
                        <div class="input-group"><label>Ismingiz</label><input type="text" placeholder="Ism"></div>
                        <div class="input-group"><label>Elektron pochta</label><input type="email" placeholder="example@mail.com"></div>
                    `}
                `}
                <div class="input-group"><label>Parol</label><input type="password" placeholder="••••••••"></div>
            </div>

            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('phone-entry')">Davom etish</button>
            </div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>Tasdiqlash</h1>
                <p>Sizga bot orqali tasdiqlash kodi yuboriladi.</p>
            </div>
            <div class="input-group">
                <label>Telefon raqami</label>
                <div style="display: flex; gap: 10px;">
                    <button style="background: var(--accent); border: none; padding: 15px; border-radius: 12px; font-weight: 600;">🇺🇿</button>
                    <input type="tel" placeholder="+998 90 123 45 67" style="flex: 1;">
                </div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="sendOtp()">Kodni olish</button>
            </div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>Kodni kiritish</h1>
                <p>Botimiz sizga yuborgan 4 xonali kodni kiriting.</p>
                <div style="background: #FFF9E6; padding: 10px; border-radius: 10px; border-left: 4px solid var(--primary); margin-top: 10px; font-size: 14px;">
                    💡 Maslahat: Botga kiring (Yozishmalarga qayting), u yerda kodni ko'rasiz.
                </div>
            </div>
            <div class="otp-inputs">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer">
                <p style="text-align: center; margin-bottom: 15px; font-size: 14px; opacity: 0.6;">Kod kelmadimi? <span style="color: var(--primary); font-weight: 600; cursor: pointer;">Qaytadan yuborish</span></p>
                <button class="btn-primary" onclick="navigateTo('success-finish')">Tasdiqlash</button>
            </div>
        </div>
    `,"success-finish":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/success.png"></div>
            <div class="content">
                <h1>Tabriklaymiz! ✨</h1>
                <p>Siz muvaffaqiyatli ${e.role==="master"?"Usta":"Foydalanuvchi"} bo'lib ro'yxatdan o'tdingiz.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="completeAuth()">Dasturga kirish</button>
            </div>
        </div>
    `};function r(){const t=document.getElementById("screen-container");t&&(e.splashVisible?(t.innerHTML=c.splash(),setTimeout(()=>{e.splashVisible=!1,r()},2200)):t.innerHTML=c[e.currentScreen]())}window.navigateTo=t=>{e.currentScreen=t,r()};window.selectRole=t=>{e.role=t,r()};window.toggleAuthMode=t=>{e.authMode=t,r()};window.moveFocus=(t,o)=>{var l;t.value.length===1&&o<3&&((l=document.querySelectorAll(".otp-inputs input")[o+1])==null||l.focus())};window.sendOtp=async()=>{var n,i;const t=Math.floor(1e3+Math.random()*9e3),o=(i=(n=a==null?void 0:a.initDataUnsafe)==null?void 0:n.user)==null?void 0:i.id,l="8661534133:AAFF7LF3Nk5-VMz-rmRUOZwo6Ud-ne1AnZw";if(o)try{await fetch(`https://api.telegram.org/bot${l}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o,text:`🔐 Universal Master tasdiqlash kodingiz: ${t}

Ushbu kodni ilovaga kiriting.`})})}catch(s){console.error("OTP send error:",s)}a||alert(`Maslahat (Dev): Bot orqali yuborilgan kod: ${t}`),window.navigateTo("otp-entry")};window.completeAuth=()=>{a?(a.HapticFeedback.notificationOccurred("success"),a.close()):(alert("Tizimga muvaffaqiyatli kirdingiz!"),location.reload())};r();
