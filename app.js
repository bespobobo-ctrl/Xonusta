/* ============================================
   XONUSTA — App Logic
   Telegram Mini App for Handyman Services
   ============================================ */

// ===== DATA =====
const CATEGORIES = [
    { id: 'electric', icon: '⚡', label: 'Elektrik' },
    { id: 'plumber', icon: '🔧', label: 'Santexnik' },
    { id: 'repair', icon: '🏠', label: "Ta'mirchi" },
    { id: 'door', icon: '🚪', label: 'Eshik/Deraza' },
    { id: 'appliance', icon: '📺', label: 'Maishiy tex.' },
    { id: 'lock', icon: '🔑', label: 'Kalitchi' },
    { id: 'ac', icon: '❄️', label: 'Konditsioner' },
    { id: 'paint', icon: '🎨', label: "Bo'yoqchi" },
    { id: 'clean', icon: '🧹', label: 'Tozalash' },
    { id: 'welding', icon: '⚙️', label: 'Payvandchi' },
    { id: 'carpenter', icon: '🪚', label: 'Duradgor' },
    { id: 'other', icon: '➕', label: 'Boshqa' },
];

const MASTERS_DB = [
    {
        id: 1, name: 'Aziz Karimov', category: 'electric', avatar: '⚡',
        rating: 4.9, reviews: 156, price: '50 000', experience: '8 yil',
        lat: 41.311, lng: 69.280, online: true, verified: true,
        bio: 'Professional elektrik ustasi. Barcha turdagi elektr ishlari.',
        skills: ['Simlar', 'Rozetka', 'Lyustra', 'Elektr panel'],
        reviewsList: [
            { name: 'Sardor', date: '2 kun oldin', stars: 5, text: 'Juda yaxshi usta, tez va sifatli ishladi.' },
            { name: 'Nilufar', date: '1 hafta oldin', stars: 5, text: "Professional yondashuv, narxi ham maqul." }
        ]
    },
    {
        id: 2, name: 'Bobur Toshmatov', category: 'plumber', avatar: '🔧',
        rating: 4.7, reviews: 98, price: '40 000', experience: '5 yil',
        lat: 41.315, lng: 69.275, online: true, verified: true,
        bio: "Tajribali santexnik. Quvur, kran, unitaz ta'miri.",
        skills: ["Quvur ta'miri", "Kran o'rnatish", 'Unitaz', "Issiq suv"],
        reviewsList: [
            { name: 'Alisher', date: '3 kun oldin', stars: 4, text: "Yaxshi ishladi, vaqtida keldi." },
            { name: 'Munira', date: '5 kun oldin', stars: 5, text: 'Hammasi ajoyib, rahmat!' }
        ]
    },
    {
        id: 3, name: 'Jasur Rahimov', category: 'repair', avatar: '🏠',
        rating: 4.8, reviews: 203, price: '60 000', experience: '10 yil',
        lat: 41.308, lng: 69.290, online: true, verified: true,
        bio: "Uy ta'miri bo'yicha professional. Hammasi bir joyda.",
        skills: ["Shpaklyovka", "Bo'yash", 'Plitka', 'Laminat'],
        reviewsList: [
            { name: 'Kamola', date: '1 kun oldin', stars: 5, text: 'Juda professional, tavsiya qilaman!' },
            { name: 'Davron', date: '4 kun oldin', stars: 5, text: 'Sifatli ish, arzon narx.' }
        ]
    },
    {
        id: 4, name: 'Otabek Yusupov', category: 'ac', avatar: '❄️',
        rating: 4.6, reviews: 67, price: '70 000', experience: '6 yil',
        lat: 41.318, lng: 69.268, online: true, verified: false,
        bio: "Konditsioner o'rnatish va ta'mirlash.",
        skills: ["O'rnatish", "Tozalash", "Freon to'ldirish", "Ta'mirlash"],
        reviewsList: [
            { name: 'Rustam', date: '2 kun oldin', stars: 4, text: "Tezda kelib tozalab berdi." },
            { name: 'Shaxlo', date: '1 hafta oldin', stars: 5, text: "Zo'r usta!" }
        ]
    },
    {
        id: 5, name: 'Farhod Xasanov', category: 'lock', avatar: '🔑',
        rating: 4.9, reviews: 312, price: '30 000', experience: '12 yil',
        lat: 41.305, lng: 69.285, online: true, verified: true,
        bio: "Kalitchi — har qanday qulf va kalitlar.",
        skills: ["Qulf ochish", "Kalit yasash", "Qulf o'rnatish", "Eshik ta'miri"],
        reviewsList: [
            { name: 'Abdulla', date: '1 kun oldin', stars: 5, text: '10 daqiqada kelib ochib berdi!' },
            { name: 'Hilola', date: '3 kun oldin', stars: 5, text: "Tez va arzon. Zo'r usta." }
        ]
    },
    {
        id: 6, name: 'Sanjar Normatov', category: 'electric', avatar: '⚡',
        rating: 4.5, reviews: 45, price: '45 000', experience: '4 yil',
        lat: 41.320, lng: 69.295, online: false, verified: false,
        bio: "Uy va ofis elektr ishlari.",
        skills: ['Simlar', 'Rozetka', "Avtomatlar"],
        reviewsList: [
            { name: 'Jamshid', date: '1 hafta oldin', stars: 4, text: "O'rtacha bajarib berdi." }
        ]
    },
    {
        id: 7, name: 'Mirzo Salimov', category: 'plumber', avatar: '🔧',
        rating: 4.8, reviews: 134, price: '45 000', experience: '7 yil',
        lat: 41.312, lng: 69.272, online: true, verified: true,
        bio: "Professional santexnik xizmati 24/7.",
        skills: ["Quvur almashtirish", "Kran ta'miri", "Kanalizatsiya"],
        reviewsList: [
            { name: 'Nodira', date: '2 kun oldin', stars: 5, text: "Kechasi ham kelib yordam berdi!" }
        ]
    },
    {
        id: 8, name: "Ulug'bek Kamolov", category: 'carpenter', avatar: '🪚',
        rating: 4.7, reviews: 89, price: '55 000', experience: '9 yil',
        lat: 41.309, lng: 69.278, online: true, verified: true,
        bio: "Yog'och ishlari — mebel, eshik, deraza.",
        skills: ["Mebel ta'miri", "Eshik o'rnatish", "Polka", "Shkaf"],
        reviewsList: [
            { name: 'Bekzod', date: '5 kun oldin', stars: 5, text: "Juda chiroyli shkaf yasab berdi!" }
        ]
    },
    {
        id: 9, name: 'Dilshod Umarov', category: 'paint', avatar: '🎨',
        rating: 4.6, reviews: 76, price: '35 000', experience: '6 yil',
        lat: 41.316, lng: 69.282, online: true, verified: false,
        bio: "Bo'yoqchilik ishlari — sifat kafolati.",
        skills: ["Devor bo'yash", "Shipni bo'yash", "Dekorativ", "Shtukaturka"],
        reviewsList: [
            { name: 'Shoira', date: '1 hafta oldin', stars: 4, text: "Yaxshi ish qildi." }
        ]
    },
    {
        id: 10, name: 'Ibrohim Tursunov', category: 'welding', avatar: '⚙️',
        rating: 4.8, reviews: 102, price: '80 000', experience: '11 yil',
        lat: 41.303, lng: 69.292, online: true, verified: true,
        bio: "Payvandlash ishlari — temir konstruktsiyalar.",
        skills: ["Darvoza", "Panjara", "Quvur payvand", "Metallkonstruktsiya"],
        reviewsList: [
            { name: 'Kamoliddin', date: '3 kun oldin', stars: 5, text: "Darvozani zo'r qilib yasab berdi!" }
        ]
    }
];

// ===== GLOBALS =====
let map;
let userLatLng = null;
let userMarker = null;
let masterMarkers = [];
let routeLine = null;
let movingMarker = null;
let selectedMaster = null;
let selectedCategory = null;
let currentOrder = null;
let trackingInterval = null;
let animationPoints = [];
let animationIndex = 0;

const DEFAULT_LAT = 41.311;
const DEFAULT_LNG = 69.279;

// Color mappings for categories
const CAT_COLORS = {
    electric: '#F59E0B',
    plumber: '#3B82F6',
    repair: '#EF4444',
    door: '#10B981',
    appliance: '#8B5CF6',
    lock: '#F59E0B',
    ac: '#06B6D4',
    paint: '#EC4899',
    clean: '#14B8A6',
    welding: '#6B7280',
    carpenter: '#D97706',
    other: '#6366F1'
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Telegram Mini App
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#F5A623');
        tg.setBackgroundColor('#FFFFFF');

        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            const user = tg.initDataUnsafe.user;
            document.getElementById('userName').textContent =
                user.first_name + (user.last_name ? ' ' + user.last_name : '');
        }
    }

    renderCategories();

    setTimeout(() => {
        initMap();
        setTimeout(() => {
            const splash = document.getElementById('splashScreen');
            splash.classList.add('fade-out');
            document.getElementById('app').classList.remove('hidden');
            setTimeout(() => {
                splash.style.display = 'none';
                if (map) map.invalidateSize();
            }, 600);
        }, 2200);
    }, 300);
});

// ===== MAP =====
function initMap() {
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
        minZoom: 10,
        maxZoom: 18,
    }).setView([DEFAULT_LAT, DEFAULT_LNG], 14);

    // Light map tiles (matching yellow theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
    }).addTo(map);

    getUserLocation();
    showMastersOnMap(MASTERS_DB.filter(m => m.online));
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLatLng = [pos.coords.latitude, pos.coords.longitude];
                map.setView(userLatLng, 15);
                addUserMarker(userLatLng);
            },
            () => {
                userLatLng = [DEFAULT_LAT, DEFAULT_LNG];
                addUserMarker(userLatLng);
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    } else {
        userLatLng = [DEFAULT_LAT, DEFAULT_LNG];
        addUserMarker(userLatLng);
    }
}

function addUserMarker(latlng) {
    if (userMarker) map.removeLayer(userMarker);
    const icon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-user"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
    });
    userMarker = L.marker(latlng, { icon, zIndexOffset: 1000 }).addTo(map);
}

function showMastersOnMap(masters) {
    masterMarkers.forEach(m => map.removeLayer(m.marker));
    masterMarkers = [];

    masters.forEach(master => {
        if (!master.online) return;
        const color = CAT_COLORS[master.category] || '#F5A623';
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-master" style="background:${color}"><span>${master.avatar}</span></div>`,
            iconSize: [44, 44],
            iconAnchor: [22, 44],
        });
        const marker = L.marker([master.lat, master.lng], { icon }).addTo(map);
        marker.on('click', () => showMasterProfile(master));
        masterMarkers.push({ marker, master });
    });
}

function goToMyLocation() {
    if (userLatLng) {
        map.flyTo(userLatLng, 15, { duration: 1 });
    } else {
        getUserLocation();
    }
}

// ===== CATEGORIES =====
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = CATEGORIES.map(cat => `
        <div class="category-item" onclick="selectCategory('${cat.id}')">
            <div class="cat-icon">${cat.icon}</div>
            <span class="cat-label">${cat.label}</span>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    selectedCategory = categoryId;
    const category = CATEGORIES.find(c => c.id === categoryId);
    const masters = MASTERS_DB.filter(m => m.category === categoryId && m.online);

    showMastersOnMap(masters);

    if (masters.length > 0) {
        const bounds = masters.map(m => [m.lat, m.lng]);
        if (userLatLng) bounds.push(userLatLng);
        map.fitBounds(bounds, { padding: [60, 60] });
    }

    document.getElementById('mastersTitle').textContent = category.label + ' ustalari';
    document.getElementById('filterBadge').textContent = masters.length + ' ta';

    renderMastersList(masters);
    showView('viewMasters');
}

// ===== MASTERS LIST =====
function renderMastersList(masters) {
    const list = document.getElementById('mastersList');

    if (masters.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-illustration">😔</div>
                <p>Hozircha usta topilmadi</p>
                <span class="empty-sub">Boshqa kategoriyani sinab ko'ring</span>
            </div>
        `;
        return;
    }

    if (userLatLng) {
        masters.sort((a, b) => {
            return getDistance(userLatLng[0], userLatLng[1], a.lat, a.lng) -
                getDistance(userLatLng[0], userLatLng[1], b.lat, b.lng);
        });
    }

    list.innerHTML = masters.map(master => {
        const dist = userLatLng ? getDistance(userLatLng[0], userLatLng[1], master.lat, master.lng) : null;
        const distText = dist ? formatDistance(dist) : '';
        const eta = dist ? Math.max(3, Math.round(dist / 0.5)) : '?';
        const color = CAT_COLORS[master.category] || '#F5A623';

        return `
            <div class="master-card" onclick="showMasterProfile(MASTERS_DB.find(m => m.id === ${master.id}))">
                <div class="master-avatar" style="background:${color}15;color:${color}">
                    ${master.avatar}
                    ${master.online ? '<div class="master-online"></div>' : ''}
                </div>
                <div class="master-info">
                    <div class="master-name">${master.name}</div>
                    <div class="master-specialty">${master.experience} tajriba · ${master.price} so'm</div>
                    <div class="master-meta">
                        <span class="master-rating">⭐ ${master.rating}</span>
                        <span class="master-distance">${distText}</span>
                    </div>
                </div>
                <div class="master-eta">
                    <span class="eta-time">${eta}</span>
                    <span class="eta-label">daqiqa</span>
                </div>
            </div>
        `;
    }).join('');
}

// ===== MASTER PROFILE =====
function showMasterProfile(master) {
    selectedMaster = master;
    const content = document.getElementById('profileContent');
    const dist = userLatLng ? getDistance(userLatLng[0], userLatLng[1], master.lat, master.lng) : null;
    const eta = dist ? Math.max(3, Math.round(dist / 0.5)) : '?';
    const color = CAT_COLORS[master.category] || '#F5A623';

    content.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar" style="background:${color}20;color:${color};font-size:32px">
                ${master.avatar}
            </div>
            <div class="profile-info">
                <div class="profile-name">${master.name}</div>
                <div class="profile-specialty">${getCategoryName(master.category)} · ${master.experience}</div>
                <div class="profile-stats">
                    <div class="stat">
                        <span class="stat-value">⭐ ${master.rating}</span>
                        <span class="stat-label">${master.reviews} sharh</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">~${eta} daq</span>
                        <span class="stat-label">${dist ? formatDistance(dist) : ''}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${master.price}</span>
                        <span class="stat-label">so'mdan</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="profile-badges">
            ${master.verified ? '<span class="badge verified">✓ Tasdiqlangan</span>' : ''}
            <span class="badge">🟢 Online</span>
            <span class="badge">${master.experience}</span>
        </div>
        
        <div class="profile-section">
            <div class="profile-section-title">Haqida</div>
            <p style="font-size:14px;color:var(--text-secondary);line-height:1.5">${master.bio}</p>
        </div>
        
        <div class="profile-section">
            <div class="profile-section-title">Ko'nikmalar</div>
            <div class="suggestion-chips" style="margin-top:4px">
                ${master.skills.map(s => `<span class="chip">${s}</span>`).join('')}
            </div>
        </div>
        
        <div class="profile-section">
            <div class="profile-section-title">Sharhlar</div>
            <div class="profile-reviews">
                ${master.reviewsList.map(r => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-name">${r.name}</span>
                            <span class="review-date">${r.date}</span>
                        </div>
                        <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
                        <div class="review-text">${r.text}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <button class="profile-order-btn" onclick="showOrderForm()">
            🔧 Usta chaqirish
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
    `;

    map.flyTo([master.lat, master.lng], 16, { duration: 0.8 });
    showView('viewProfile');
}

function goBackFromProfile() {
    if (selectedCategory) {
        showView('viewMasters');
    } else {
        showMastersOnMap(MASTERS_DB.filter(m => m.online));
        showView('viewCategories');
    }
}

// ===== ORDER =====
function showOrderForm() {
    if (!selectedMaster) return;
    const color = CAT_COLORS[selectedMaster.category] || '#F5A623';

    document.getElementById('orderMasterInfo').innerHTML = `
        <div style="width:44px;height:44px;border-radius:12px;background:${color}20;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
            ${selectedMaster.avatar}
        </div>
        <div style="flex:1">
            <div style="font-weight:700;font-size:14px">${selectedMaster.name}</div>
            <div style="font-size:12px;color:var(--text-secondary)">${getCategoryName(selectedMaster.category)} · ${selectedMaster.price} so'mdan</div>
        </div>
    `;
    showView('viewOrder');
}

function selectTime(btn) {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function submitOrder() {
    if (!selectedMaster) return;

    currentOrder = {
        master: selectedMaster,
        description: document.getElementById('orderDescription').value,
        address: document.getElementById('orderAddress').value,
        time: document.querySelector('.time-btn.active')?.dataset.time || 'now',
        status: 'searching',
        createdAt: new Date()
    };

    showView('viewTracking');
    startTracking();
}

// ===== TRACKING =====
function startTracking() {
    updateTrackingStep(1);
    document.getElementById('trackStatusLabel').textContent = 'Usta izlanmoqda...';
    document.getElementById('trackStatusEta').textContent = 'Iltimos kuting';

    setTimeout(() => {
        updateTrackingStep(2);
        document.getElementById('trackStatusLabel').textContent = `${selectedMaster.name} qabul qildi! ✅`;
        document.getElementById('trackStatusEta').textContent = "Yo'lga chiqish tayyorligi...";
        showTrackingMasterCard();

        setTimeout(() => {
            updateTrackingStep(3);
            document.getElementById('trackStatusLabel').textContent = "Usta yo'lda! 🚗";

            const dist = userLatLng ? getDistance(userLatLng[0], userLatLng[1], selectedMaster.lat, selectedMaster.lng) : 1;
            const eta = Math.max(3, Math.round(dist / 0.5));
            document.getElementById('trackStatusEta').textContent = `Taxminan ${eta} daqiqada yetib keladi`;

            startMasterMovement();
        }, 2000);
    }, 2500);
}

function updateTrackingStep(step) {
    document.querySelectorAll('.progress-steps .step').forEach(s => {
        const n = parseInt(s.dataset.step);
        s.classList.remove('active', 'completed');
        if (n < step) s.classList.add('completed');
        if (n === step) s.classList.add('active');
    });
}

function showTrackingMasterCard() {
    const card = document.getElementById('trackingMasterCard');
    const color = CAT_COLORS[selectedMaster.category] || '#F5A623';
    card.style.display = 'flex';
    card.innerHTML = `
        <div style="width:48px;height:48px;border-radius:14px;background:${color}20;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            ${selectedMaster.avatar}
        </div>
        <div style="flex:1">
            <div style="font-weight:700;font-size:15px">${selectedMaster.name}</div>
            <div style="font-size:12px;color:var(--text-secondary)">⭐ ${selectedMaster.rating} · ${selectedMaster.experience}</div>
        </div>
        <div class="master-eta" style="background:rgba(52,199,89,0.1)">
            <span class="eta-time" style="color:#34C759" id="liveEta">...</span>
            <span class="eta-label">daqiqa</span>
        </div>
    `;
    document.getElementById('trackingActions').style.display = 'grid';
}

function startMasterMovement() {
    if (!selectedMaster || !userLatLng) return;

    animationPoints = generateRoutePoints(
        selectedMaster.lat, selectedMaster.lng,
        userLatLng[0], userLatLng[1], 60
    );
    animationIndex = 0;

    if (routeLine) map.removeLayer(routeLine);
    routeLine = L.polyline(animationPoints, {
        color: '#F5A623',
        weight: 4,
        opacity: 0.8,
        dashArray: '10 6',
    }).addTo(map);

    map.fitBounds(routeLine.getBounds(), { padding: [80, 80] });

    if (movingMarker) map.removeLayer(movingMarker);
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-moving">${selectedMaster.avatar}</div>`,
        iconSize: [52, 52],
        iconAnchor: [26, 26],
    });
    movingMarker = L.marker(animationPoints[0], { icon, zIndexOffset: 2000 }).addTo(map);

    if (trackingInterval) clearInterval(trackingInterval);
    trackingInterval = setInterval(() => {
        if (animationIndex >= animationPoints.length - 1) {
            clearInterval(trackingInterval);
            masterArrived();
            return;
        }

        animationIndex++;
        movingMarker.setLatLng(animationPoints[animationIndex]);
        routeLine.setLatLngs(animationPoints.slice(animationIndex));

        const progress = animationIndex / animationPoints.length;
        const remainingMin = Math.max(1, Math.round((1 - progress) * 10));
        const etaEl = document.getElementById('liveEta');
        if (etaEl) etaEl.textContent = remainingMin;

        if (animationIndex % 5 === 0) {
            map.panTo(animationPoints[animationIndex], { animate: true, duration: 0.3 });
        }
    }, 500);
}

function generateRoutePoints(lat1, lng1, lat2, lng2, numPoints) {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const noise = Math.sin(t * Math.PI * 3) * 0.002 * (1 - t);
        points.push([
            lat1 + (lat2 - lat1) * t + noise,
            lng1 + (lng2 - lng1) * t + noise * 0.7
        ]);
    }
    return points;
}

function masterArrived() {
    updateTrackingStep(4);

    const pulse = document.querySelector('.status-pulse');
    if (pulse) pulse.style.background = '#34C759';

    document.getElementById('trackStatusLabel').textContent = '🎉 Usta yetib keldi!';
    document.getElementById('trackStatusEta').textContent = 'Eshikni oching';

    const etaEl = document.getElementById('liveEta');
    if (etaEl) etaEl.textContent = '✓';

    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    if (routeLine) { map.removeLayer(routeLine); routeLine = null; }
}

function cancelOrder() {
    if (trackingInterval) clearInterval(trackingInterval);
    if (routeLine) { map.removeLayer(routeLine); routeLine = null; }
    if (movingMarker) { map.removeLayer(movingMarker); movingMarker = null; }

    currentOrder = null;
    animationPoints = [];
    animationIndex = 0;

    document.getElementById('trackingMasterCard').style.display = 'none';
    document.getElementById('trackingActions').style.display = 'none';
    document.querySelectorAll('.progress-steps .step').forEach(s => {
        s.classList.remove('active', 'completed');
    });

    showMastersOnMap(MASTERS_DB.filter(m => m.online));
    if (userLatLng) map.flyTo(userLatLng, 14, { duration: 0.8 });
    showView('viewCategories');
}

function callMaster() {
    const msg = '📞 Qo\'ng\'iroq qilish...\n' + selectedMaster.name;
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.showAlert(msg);
    } else {
        alert(msg);
    }
}

function messageMaster() {
    const msg = '💬 Xabar yuborish...\n' + selectedMaster.name;
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.showAlert(msg);
    } else {
        alert(msg);
    }
}

// ===== NAVIGATION =====
function showView(viewId) {
    document.querySelectorAll('.sheet-view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId)?.classList.add('active');

    const sheet = document.getElementById('bottomSheet');
    if (viewId === 'viewTracking') {
        sheet.style.maxHeight = '45vh';
    } else if (viewId === 'viewCategories') {
        sheet.style.maxHeight = '60vh';
    } else {
        sheet.style.maxHeight = '70vh';
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function navigateTo(page) {
    toggleSidebar();
    if (page === 'home') {
        showView('viewCategories');
        showMastersOnMap(MASTERS_DB.filter(m => m.online));
    } else if (page === 'history') {
        showHistory();
    }
}

function showSearch() {
    document.getElementById('searchModal').classList.add('active');
    setTimeout(() => document.getElementById('searchInput').focus(), 400);
}

function hideSearch() {
    document.getElementById('searchModal').classList.remove('active');
}

function handleSearch(query) {
    if (!query || query.length < 2) return;
    const q = query.toLowerCase();
    const results = MASTERS_DB.filter(m =>
        m.name.toLowerCase().includes(q) ||
        getCategoryName(m.category).toLowerCase().includes(q) ||
        m.bio.toLowerCase().includes(q)
    );

    const container = document.getElementById('searchResults');
    if (results.length > 0) {
        const color = '#F5A623';
        container.innerHTML = `
            <p class="search-label">${results.length} ta natija</p>
            ${results.map(m => `
                <div class="master-card" onclick="hideSearch(); showMasterProfile(MASTERS_DB.find(x => x.id === ${m.id}))" style="margin-bottom:8px">
                    <div class="master-avatar" style="width:42px;height:42px;border-radius:12px;background:${CAT_COLORS[m.category]}20;font-size:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                        ${m.avatar}
                    </div>
                    <div class="master-info">
                        <div class="master-name">${m.name}</div>
                        <div class="master-specialty">${getCategoryName(m.category)} · ⭐ ${m.rating}</div>
                    </div>
                </div>
            `).join('')}
        `;
    }
}

function searchCategory(catId) {
    hideSearch();
    selectCategory(catId);
}

function showNearestMaster() {
    if (!userLatLng) {
        alert('Joylashuvingiz aniqlanmadi. GPS yoqing.');
        return;
    }
    const onlineMasters = MASTERS_DB.filter(m => m.online);
    if (!onlineMasters.length) return;

    let nearest = onlineMasters[0];
    let minDist = getDistance(userLatLng[0], userLatLng[1], nearest.lat, nearest.lng);

    onlineMasters.forEach(m => {
        const d = getDistance(userLatLng[0], userLatLng[1], m.lat, m.lng);
        if (d < minDist) { minDist = d; nearest = m; }
    });

    showMasterProfile(nearest);
}

function showHistory() { showView('viewHistory'); }

// ===== UTILITIES =====
function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(dist) {
    return dist < 1 ? Math.round(dist * 1000) + ' m' : dist.toFixed(1) + ' km';
}

function getCategoryName(id) {
    return CATEGORIES.find(c => c.id === id)?.label || 'Boshqa';
}

// ===== BOTTOM SHEET DRAG =====
const sheetHandle = document.getElementById('sheetHandle');
let sheetStartY = 0, sheetStartH = 0;

if (sheetHandle) {
    sheetHandle.addEventListener('touchstart', e => {
        sheetStartY = e.touches[0].clientY;
        sheetStartH = document.getElementById('bottomSheet').offsetHeight;
    });
    sheetHandle.addEventListener('touchmove', e => {
        const dy = sheetStartY - e.touches[0].clientY;
        const sheet = document.getElementById('bottomSheet');
        sheet.style.maxHeight = Math.min(window.innerHeight * 0.85, Math.max(120, sheetStartH + dy)) + 'px';
    });
}
