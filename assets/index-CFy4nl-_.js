(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();var l;const o=(l=window.Telegram)==null?void 0:l.WebApp;o&&(o.ready(),o.expand(),o.headerColor="#FFFFFF");const g=localStorage.getItem("user_verified")==="true",n={currentScreen:g?"dashboard":"login-entry",version:"1.08"};let a;const x={"login-entry":()=>`
        <div class="screen active" style="background: white; justify-content: center; display: flex; flex-direction: column; align-items: center; padding: 40px; text-align: center;">
            <div style="font-size: 80px; margin-bottom: 30px; animation: bounce 2s infinite;">⚒️</div>
            <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 10px;">Universal Master</h1>
            <p style="opacity: 0.6; margin-bottom: 50px;">Qo'qon shahrining premum xizmat ko'rsatish tizimi</p>
            
            <button class="btn-primary" onclick="simpleLogin()" style="width: 100%; padding: 20px; font-size: 18px;">
                🚀 Telegram orqali kirish
            </button>
            <p style="margin-top: 20px; font-size: 12px; opacity: 0.4;">v${n.version}</p>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0; background: #F0F2F5; display: flex; flex-direction: column;">
            
            <!-- Map Container -->
            <div id="map" style="flex: 1; width: 100%; height: 100%; background: #e5e3df;"></div>

            <!-- Header Floating UI -->
            <div style="position: absolute; top: 10px; left: 10px; right: 10px; display: flex; justify-content: space-between; align-items: center; z-index: 1000;">
                <div style="width: 50px; height: 50px; border-radius: 50%; border: 4px solid white; background: url('https://i.pravatar.cc/100') no-box; background-size: cover; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></div>
                <div style="background: white; padding: 10px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 700; font-size: 14px;">Qo'qon</span>
                    <div style="width: 20px; height: 20px; background: #FFB800; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; color: white;">📍</div>
                </div>
                <div style="width: 50px; height: 50px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-size: 20px;">🔍</div>
            </div>

            <!-- Bottom Sheet (Exactly like the image) -->
            <div style="background: white; border-radius: 40px 40px 0 0; padding: 25px 20px 40px; box-shadow: 0 -10px 50px rgba(0,0,0,0.1); z-index: 1001;">
                <div style="width: 40px; height: 5px; background: #eee; border-radius: 10px; margin: 0 auto 20px;"></div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h2 style="font-size: 22px; font-weight: 800; margin: 0;">Qayerga? (Order)</h2>
                    <span style="color: #ccc; font-size: 14px; font-weight: 600;">Sozlash</span>
                </div>

                <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 10px;" class="no-scrollbar">
                    <div class="card-item" onclick="alert('Yangi buyurtma')">
                        <div class="card-icon">🏗️</div>
                        <div class="card-text">
                            <strong>Yangi usta</strong>
                            <small>Tezkor chaqiruv</small>
                        </div>
                    </div>
                    <div class="card-item gray" onclick="alert('Uyga chaqirish')">
                        <div class="card-icon">🏠</div>
                        <div class="card-text">
                            <strong>Uyga</strong>
                            <small>Saqlangan manzil</small>
                        </div>
                    </div>
                    <div class="card-item gray" onclick="alert('Ishga chaqirish')">
                        <div class="card-icon">💼</div>
                        <div class="card-text">
                            <strong>Ishga</strong>
                            <small>Fabrika, do'kon...</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `};window.simpleLogin=()=>{localStorage.setItem("user_verified","true"),n.currentScreen="dashboard",c()};function u(){if(!document.getElementById("map")||window.L===void 0)return;a=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.5285,70.9425],15),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(a),[[40.5285,70.9425],[40.53,70.945],[40.526,70.94]].forEach(i=>{window.L.marker(i,{icon:window.L.divIcon({className:"m",html:'<div style="background:white; width:45px; height:20px; border-radius:10px; border:2px solid #333; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; box-shadow:0 4px 10px rgba(0,0,0,0.1);">🚜 USTA</div>'})}).addTo(a)})}function c(){const r=document.getElementById("screen-container");r&&(r.innerHTML=x[n.currentScreen](),n.currentScreen==="dashboard"&&setTimeout(u,100))}c();
