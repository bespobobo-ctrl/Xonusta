(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))g(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&g(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();var v;const n=(v=window.Telegram)==null?void 0:v.WebApp;n&&(n.ready(),n.expand());var b;const m=(b=n==null?void 0:n.initDataUnsafe)==null?void 0:b.user,f=m?`user_verified_${m.id}`:"user_verified_guest",y=localStorage.getItem(f)==="true",e={currentScreen:y?"dashboard":"onboarding-1",role:localStorage.getItem("user_role")||"user",splashVisible:!0,version:"1.07",dashboardTab:"home",order:{status:"idle",masterId:null},selectedCategory:"Barchasi"};let d,p=[];const x=["Barchasi","Elektrik","Santexnik","Ta'mirchi","Konditsioner","Mebelchi"],l=[{id:1,name:"Alisher Rahimov",lat:40.5285,lng:70.9425,cat:"Santexnik",rating:4.9,tasks:124,price:"50,000",status:"online"},{id:2,name:"Azizbek Karimov",lat:40.53,lng:70.945,cat:"Elektrik",rating:4.8,tasks:89,price:"45,000",status:"online"},{id:3,name:"Bahodir Soliev",lat:40.526,lng:70.94,cat:"Ta'mirchi",rating:5,tasks:215,price:"100,000",status:"busy"},{id:4,name:"Doston Ahmedov",lat:40.532,lng:70.948,cat:"Konditsioner",rating:4.7,tasks:56,price:"70,000",status:"online"}],h={splash:()=>`
        <div class="splash">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 10px; opacity: 0.5;">v${e.version}</div>
            <div class="splash-logo">⚒️</div>
            <div class="splash-title">Universal Master</div>
            <div style="margin-top: 10px; font-size: 12px; opacity: 0.7;">Qo'qon shahri xizmati</div>
        </div>
    `,"onboarding-1":()=>`
        <div class="screen active">
            <div class="illustration"><img src="/assets/onboarding1.png"></div>
            <div class="content">
                <h1>Qo'qon <span class="text-yellow">Master</span></h1>
                <p>Shahrimizning eng sara ustalarini xaritada kuzating va chaqiring.</p>
            </div>
            <div class="footer"><button class="btn-primary" onclick="navigateTo('role-selection')">Boshlash</button></div>
        </div>
    `,"role-selection":()=>`
        <div class="screen active">
            <div class="content mb-20"><h1>Siz kimsiz?</h1></div>
            <div class="input-group" onclick="selectRole('user')" style="cursor:pointer; border: 2px solid ${e.role==="user"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; margin-bottom: 12px; background: white;">
                <strong>Foydalanuvchi</strong><br><small>Usta chaqirish uchun</small>
            </div>
            <div class="input-group" onclick="selectRole('master')" style="cursor:pointer; border: 2px solid ${e.role==="master"?"#FFB800":"#eee"}; padding: 20px; border-radius: 20px; background: white;">
                <strong>Usta</strong><br><small>Buyurtmalar qabul qilish uchun</small>
            </div>
            <div class="footer"><button class="btn-primary" onclick="finalizeAuth()">Davom etish</button></div>
        </div>
    `,dashboard:()=>`
        <div class="screen active" style="padding: 0; display: flex; flex-direction: column;">
            <!-- Header with Categories -->
            <div style="padding: 10px; background: white; border-bottom: 1px solid #eee; z-index: 1001;">
                <div style="overflow-x: auto; display: flex; gap: 10px; padding-bottom: 5px;" class="no-scrollbar">
                    ${x.map(t=>`
                        <div onclick="selectCategory('${t}')" style="white-space: nowrap; padding: 6px 15px; border-radius: 20px; background: ${e.selectedCategory===t?"#FFB800":"#f5f5f5"}; font-size: 13px; font-weight: 600; cursor: pointer;">
                            ${t}
                        </div>
                    `).join("")}
                </div>
            </div>

            <div style="flex: 1; position: relative;">
                ${w()}
            </div>

            <!-- Tab Navigation -->
            <div style="background: white; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 0 25px 0;">
                <div onclick="switchTab('home')" style="text-align:center; color: ${e.dashboardTab==="home"?"#FFB800":"#ccc"}">📍<br><small>Asosiy</small></div>
                ${e.role==="master"?`<div onclick="switchTab('portfolio')" style="text-align:center; color: ${e.dashboardTab==="portfolio"?"#FFB800":"#ccc"}">💰<br><small>Daromad</small></div>`:""}
                <div onclick="switchTab('profile')" style="text-align:center; color: ${e.dashboardTab==="profile"?"#FFB800":"#ccc"}">👤<br><small>Profil</small></div>
            </div>
        </div>
    `};function w(){var t;return e.dashboardTab==="home"?`
            <div id="map" style="width: 100%; height: 100%;"></div>
            
            <!-- Order Status Overlay -->
            ${e.order.status!=="idle"?`
                <div style="position: absolute; bottom: 10px; left: 10px; right: 10px; z-index: 1000; background: white; padding: 20px; border-radius: 20px; box-shadow: 0 5px 25px rgba(0,0,0,0.15);">
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <div style="width: 60px; height: 60px; background: #FFF9E6; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 30px;">
                            ${e.order.status==="finding"?"⏳":"🚜"}
                        </div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0; font-size: 16px;">
                                ${e.order.status==="finding"?"Usta qidirilmoqda...":e.order.status==="arriving"?"Usta yo'lda (3 daqiqa)":e.order.status==="working"?"Ish bajarilmoqda...":"Vazifa yakunlandi!"}
                            </h3>
                            <p style="margin: 5px 0 0; font-size: 13px; opacity: 0.6;">
                                ${((t=l.find(i=>i.id===e.order.masterId))==null?void 0:t.name)||"Kuting..."}
                            </p>
                        </div>
                        <div style="font-weight: 800; color: #FFB800;">50,000 UZS</div>
                    </div>
                    ${e.order.status==="arriving"?`<button class="btn-primary" style="margin-top: 15px;" onclick="updateOrderStatus('working')">Usta yetib keldi</button>`:""}
                    ${e.order.status==="working"?'<button class="btn-primary" style="margin-top: 15px;" onclick="finishOrder()">Ishni qabul qilish</button>':""}
                    ${e.order.status==="completed"?'<button class="btn-primary" style="margin-top: 15px;" onclick="resetOrder()">Yangi buyurtma</button>':""}
                </div>
            `:""}

            <!-- Master Selection (Initial State) -->
            ${e.order.status==="idle"?`
                <div id="master-info-sheet" style="display: none; position: absolute; bottom: 10px; left: 10px; right: 10px; z-index: 1000; background: white; padding: 20px; border-radius: 20px; box-shadow: 0 5px 25px rgba(0,0,0,0.15);">
                    <div id="selected-master-content"></div>
                    <button class="btn-primary" style="margin-top: 15px;" onclick="placeOrder()">Buyurtma berish</button>
                </div>
            `:""}
        `:e.dashboardTab==="portfolio"?`
            <div style="padding: 20px;">
                <div style="background: #FFB800; padding: 25px; border-radius: 24px; color: white; margin-bottom: 25px;">
                    <p style="margin: 0; font-weight: 500;">Umumiy Daromad</p>
                    <h1 style="margin: 10px 0; font-size: 36px;">4,850,000 <small style="font-size: 16px;">UZS</small></h1>
                    <div style="display:flex; justify-content: space-between; font-size: 14px; opacity: 0.9;">
                        <span>Bajargan ishlar: 124 ta</span>
                        <span>Reyting: 5.0 ⭐</span>
                    </div>
                </div>
                <h3>Oxirgi buyurtmalar</h3>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div style="background: white; padding: 15px; border-radius: 15px; display: flex; justify-content: space-between; border: 1px solid #eee;">
                        <div><strong>Santexnika (Kran tuzatish)</strong><br><small>2 soat oldin</small></div>
                        <div style="color: #4CAF50; font-weight: 800;">+120,000</div>
                    </div>
                </div>
            </div>
        `:'<div style="padding: 20px;"><h3>Profil</h3><button class="btn-primary" onclick="localStorage.clear(); location.reload();">Chiqish</button></div>'}function k(){!document.getElementById("map")||window.L===void 0||(d=window.L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.5285,70.9425],14),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(d),u())}function u(){p.forEach(i=>d.removeLayer(i)),p=[],(e.selectedCategory==="Barchasi"?l:l.filter(i=>i.cat===e.selectedCategory)).forEach(i=>{const o=window.L.marker([i.lat,i.lng],{icon:window.L.divIcon({className:"m",html:`<div style="background: ${i.status==="busy"?"#999":"#FFB800"}; width:36px; height:36px; border-radius:50%; border:3px solid white; display:flex; align-items:center; justify-content:center; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">⚒️</div>`})}).addTo(d);o.on("click",()=>z(i)),p.push(o)})}window.selectCategory=t=>{e.selectedCategory=t,a(),u()};function z(t){e.order.masterId=t.id;const i=document.getElementById("master-info-sheet"),o=document.getElementById("selected-master-content");i&&o&&(o.innerHTML=`
            <div style="display: flex; gap: 15px; align-items: center;">
                <div style="width: 50px; height: 50px; background: #eee; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">👤</div>
                <div style="flex: 1;">
                    <h3 style="margin: 0; font-size: 18px;">${t.name}</h3>
                    <p style="margin: 3px 0; font-size: 13px; opacity: 0.6;">${t.cat} • ${t.tasks} ta ish bajarilgan</p>
                </div>
                <div style="text-align: right;">
                    <div style="color: #FFB800; font-weight: bold;">⭐ ${t.rating}</div>
                    <div style="font-size: 12px; opacity: 0.5;">${t.price} so'mdan</div>
                </div>
            </div>
            <div style="margin-top: 15px; font-size: 14px; color: #666; background: #f9f9f9; padding: 10px; border-radius: 10px;">
                "O'z ishimning ustasiman, 10 yillik tajriba. Qo'qon shahar ichida xizmat ko'rsataman."
            </div>
        `,i.style.display="block")}window.placeOrder=()=>{e.order.status="finding",a(),setTimeout(()=>{e.order.status="arriving",a(),$()},2e3)};function $(){let t=l.find(o=>o.id===e.order.masterId);if(!t)return;let i=setInterval(()=>{if(e.order.status!=="arriving"){clearInterval(i);return}t.lat+=(40.5285-t.lat)*.1,t.lng+=(70.9425-t.lng)*.1,u()},1e3)}window.updateOrderStatus=t=>{e.order.status=t,a()};window.finishOrder=()=>{e.order.status="completed",a()};window.resetOrder=()=>{e.order.status="idle",e.order.masterId=null,a()};window.finalizeAuth=()=>{localStorage.setItem(f,"true"),a()};window.navigateTo=t=>{e.currentScreen=t,a()};window.selectRole=t=>{e.role=t,localStorage.setItem("user_role",t),a()};window.switchTab=t=>{e.dashboardTab=t,a()};function a(){const t=document.getElementById("screen-container");t&&(e.splashVisible?(t.innerHTML=h.splash(),setTimeout(()=>{e.splashVisible=!1,a()},2e3)):(t.innerHTML=h[e.currentScreen](),e.currentScreen==="dashboard"&&e.dashboardTab==="home"&&setTimeout(k,50)))}a();
