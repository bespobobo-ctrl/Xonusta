(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function v(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=v(i);fetch(i.href,s)}})();var l;const e=(l=window.Telegram)==null?void 0:l.WebApp;e&&(e.ready(),e.expand(),e.HapticFeedback&&e.HapticFeedback.impactOccurred("medium"));const p=localStorage.getItem("user_verified")==="true",o={currentScreen:p?"dashboard":"login-screen",view:"map",version:"1.09"};let c;const m={"login-screen":()=>`
        <div class="screen active" style="background: white; justify-content: center; align-items: center; padding: 40px; text-align: center;">
            <div style="font-size: 80px; margin-bottom: 20px;">⚒️</div>
            <h1 style="font-size: 32px; font-weight: 800;">XonUsta</h1>
            <p style="opacity: 0.5; margin-bottom: 60px;">Professional usta chaqirish xizmati</p>
            <button class="btn-primary" onclick="handleLogin()">🚀 Boshlash</button>
            <p style="margin-top: 20px; font-size: 10px; color: #ccc;">v${o.version} | Premium Edition</p>
        </div>
    `,dashboard:()=>`
        <div class="screen active">
            <div id="map" style="flex: 1; width: 100%; height: 100%;"></div>

            <!-- Header Floating -->
            <div class="header-floating">
                <div class="profile-circle"></div>
                <div class="location-pill">
                    <span style="color: #FFB800;">●</span> Qo'qon shahri
                </div>
                <div class="search-circle" onclick="vibrate()">🔍</div>
            </div>

            <!-- Bottom Sheet -->
            <div class="bottom-sheet">
                <div class="handle"></div>
                
                ${o.view==="map"?`
                    <div class="sheet-title-row">
                        <h2>Qayerga?</h2>
                        <span class="action-text">Sozlash</span>
                    </div>

                    <div class="cards-scroll">
                        <div class="service-card yellow" onclick="switchView('category-list')">
                            <div class="icon-box">🏗️</div>
                            <div class="card-info">
                                <strong>Yangi usta</strong>
                                <small>Tezkor chaqiruv</small>
                            </div>
                        </div>
                        <div class="service-card gray" onclick="notify('Uy manzili tanlandi')">
                            <div class="icon-box">🏠</div>
                            <div class="card-info">
                                <strong>Uyga</strong>
                                <small>Saqlangan manzil</small>
                            </div>
                        </div>
                        <div class="service-card gray" onclick="notify('Ish manzili tanlandi')">
                            <div class="icon-box">💼</div>
                            <div class="card-info">
                                <strong>Ishga</strong>
                                <small>Ofis yoki xona</small>
                            </div>
                        </div>
                    </div>
                `:`
                    <div class="sheet-title-row">
                        <div onclick="switchView('map')" style="cursor:pointer; font-size: 20px;">←</div>
                        <h2 style="font-size: 20px;">Usta turini tanlang</h2>
                        <div></div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        ${["Elektrik","Santexnik","Duradgor","Ta'mirchi"].map(t=>`
                            <div style="background: #F2F2F7; padding: 20px; border-radius: 20px; font-weight: 700; text-align: center;" onclick="bookMaster('${t}')">
                                ${t}
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>
        </div>
    `};window.handleLogin=()=>{localStorage.setItem("user_verified","true"),o.currentScreen="dashboard",e!=null&&e.HapticFeedback&&e.HapticFeedback.notificationOccurred("success"),r()};window.switchView=t=>{o.view=t,r()};window.bookMaster=t=>{alert(`${t} uchun buyurtma qabul qilindi! Ustalar xaritada ko'rinadi.`),o.view="map",r()};window.notify=t=>{e?e.showConfirm(t):alert(t)};window.vibrate=()=>{e!=null&&e.HapticFeedback&&e.HapticFeedback.impactOccurred("medium")};function u(){if(!document.getElementById("map")||window.L===void 0)return;c=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.5285,70.9425],15),window.L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(c),[[40.5285,70.9425],[40.53,70.946],[40.526,70.939],[40.531,70.941]].forEach(a=>{window.L.marker(a,{icon:window.L.divIcon({className:"m-box",html:'<div class="custom-marker"><span></span> USTA</div>'})}).addTo(c)})}function r(){const t=document.getElementById("screen-container");t&&(t.innerHTML=m[o.currentScreen](),o.currentScreen==="dashboard"&&setTimeout(u,50))}r();
