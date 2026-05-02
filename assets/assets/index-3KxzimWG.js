(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(i){if(i.ep)return;i.ep=!0;const e=n(i);fetch(i.href,e)}})();var v;const t=(v=window.Telegram)==null?void 0:v.WebApp;t&&(t.ready(),t.expand(),t.headerColor="#FFB800",t.backgroundColor="#FFB800");const a={currentScreen:"onboarding-1",authMode:"login",splashVisible:!0,version:"1.01"},d={splash:()=>`
        <div class="splash" id="splash-screen">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 12px; opacity: 0.5;">v${a.version}</div>
            <div class="splash-logo">🛠️</div>
            <div class="splash-title">Universal Master</div>
            <div class="splash-loader"></div>
            <p style="color: white; margin-top: 20px; font-weight: 500; opacity: 0.8;">Premium Service</p>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration">
                <img src="/assets/onboarding1.png" alt="Handyman">
            </div>
            <div class="content">
                <h1>Universal <span class="text-yellow">Master</span></h1>
                <p>Eng mohir ustalarni bir joydan toping. Sifatli va tezkor xizmat kafolatlangan.</p>
            </div>
            <div class="footer">
                <div class="paging-dots">
                    <div class="dot active"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <button class="btn-primary" onclick="navigateTo('onboarding-2')">Keyingisi</button>
            </div>
        </div>
    `,"onboarding-2":()=>`
        <div class="screen active">
            <div class="illustration">
                <img src="/assets/onboarding2.png" alt="Service Map">
            </div>
            <div class="content">
                <h1>Xaritada Kuzatish</h1>
                <p>Ustalaringiz qayerdaligini real vaqtda kuzatib boring va qulay vaqtni belgilang.</p>
            </div>
            <div class="footer">
                <div class="paging-dots">
                    <div class="dot"></div>
                    <div class="dot active"></div>
                    <div class="dot"></div>
                </div>
                <button class="btn-primary" onclick="navigateTo('onboarding-3')">Keyingisi</button>
            </div>
        </div>
    `,"onboarding-3":()=>`
        <div class="screen active">
            <div class="illustration">
                <img src="/assets/success.png" alt="Service Success" style="transform: scale(0.8)">
            </div>
            <div class="content">
                <h1>Vaqtingizni Tejang</h1>
                <p>Biz bilan usta qidirishga ortiqcha vaqt sarflamaysiz. Bir tugma orqali hamma narsa tayyor!</p>
            </div>
            <div class="footer">
                <div class="paging-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot active"></div>
                </div>
                <button class="btn-primary" onclick="navigateTo('auth-selection')">Boshlash</button>
            </div>
        </div>
    `,"auth-selection":()=>`
        <div class="screen active">
            <div class="content mb-20" style="margin-top: 40px; text-align: left;">
                <h1 style="font-size: 28px;">Xush kelibsiz!</h1>
                <p>Universal Master olamiga xush kelibsiz. Tizimga kiring yoki ro'yxatdan o'ting.</p>
            </div>
            
            <div class="tabs">
                <div class="tab ${a.authMode==="login"?"active":""}" onclick="toggleAuthMode('login')">Kirish</div>
                <div class="tab ${a.authMode==="signup"?"active":""}" onclick="toggleAuthMode('signup')">Ro'yxatdan o'tish</div>
            </div>

            <div id="auth-form-container">
                <div class="input-group">
                    <label>Elektron pochta</label>
                    <input type="email" placeholder="example@mail.com">
                </div>
                <div class="input-group">
                    <label>Parol</label>
                    <input type="password" placeholder="••••••••">
                </div>
            </div>

            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('phone-entry')">
                    ${a.authMode==="login"?"Kirish":"Ro'yxatdan o'tish"}
                </button>
            </div>
        </div>
    `,"phone-entry":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>Telefon raqam</h1>
                <p>Kodni yuborishimiz uchun raqamingizni tasdiqlang.</p>
            </div>
            <div class="input-group">
                <label>Telefon raqami</label>
                <div style="display: flex; gap: 10px;">
                    <button style="background: var(--accent); border: none; padding: 15px; border-radius: 12px; font-weight: 600;">🇺🇿 +998</button>
                    <input type="tel" placeholder="90 123 45 67" style="flex: 1;">
                </div>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('otp-entry')">Kod yuborish</button>
            </div>
        </div>
    `,"otp-entry":()=>`
        <div class="screen active">
            <div class="content mb-20" style="text-align: left;">
                <h1>Kod kiritish</h1>
                <p>Sizga yuborilgan 4 xonali kodni kiriting.</p>
            </div>
            <div class="otp-inputs">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 0)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 1)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 2)">
                <input type="tel" maxlength="1" onkeyup="moveFocus(this, 3)">
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="navigateTo('success-finish')">Davom etish</button>
            </div>
        </div>
    `,"success-finish":()=>`
        <div class="screen active">
            <div class="illustration">
                <img src="/assets/success.png" alt="Success">
            </div>
            <div class="content">
                <h1>Tayyor! ✨</h1>
                <p>Siz muvaffaqiyatli ro'yxatdan o'tdingiz. Endi ustalarni chaqirishingiz mumkin.</p>
            </div>
            <div class="footer">
                <button class="btn-primary" onclick="completeAuth()">Dasturga o'tish</button>
            </div>
        </div>
    `};function l(){const s=document.getElementById("screen-container");s&&(a.splashVisible?(s.innerHTML=d.splash(),setTimeout(()=>{a.splashVisible=!1,t&&(t.headerColor="#FFFFFF",t.backgroundColor="#FFFFFF"),l()},2500)):s.innerHTML=d[a.currentScreen]())}window.navigateTo=s=>{a.currentScreen=s,l()};window.toggleAuthMode=s=>{a.authMode=s,l()};window.moveFocus=(s,o)=>{var n;s.value.length===1&&o<3&&((n=document.querySelectorAll(".otp-inputs input")[o+1])==null||n.focus())};window.completeAuth=async()=>{t?(t.HapticFeedback.notificationOccurred("success"),t.showAlert("Universal Master-ga xush kelibsiz!"),t.close()):(alert("Tizimga muvaffaqiyatli kirdingiz!"),location.reload())};l();
