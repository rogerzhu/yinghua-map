// 主应用逻辑

// ===== 地图初始化 =====
const map = L.map("map", {
  center: [35.0, 105.0],
  zoom: 4,
  zoomControl: true,
  attributionControl: false
});

// 使用 CartoDB 浅色底图
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "© OpenStreetMap contributors © CARTO",
  subdomains: "abcd",
  maxZoom: 19
}).addTo(map);

// 添加归属
L.control.attribution({ position: "bottomright" }).addTo(map);

// ===== 地图标记 =====
let markers = [];
let currentFilter = "all";

function getMarkerColor(status) {
  const colors = {
    peak: "#ec4899",
    blooming: "#fb7185",
    imminent: "#f9a8d4",
    upcoming: "#fde68a",
    waiting: "#d1d5db",
    ended: "#9ca3af"
  };
  return colors[status] || "#d1d5db";
}

function getMarkerSize(status) {
  if (status === "peak") return 16;
  if (status === "blooming") return 14;
  if (status === "imminent") return 12;
  return 10;
}

function createSakuraIcon(color, size, status) {
  const isPulsing = status === "peak" || status === "blooming";
  const pulseHtml = isPulsing
    ? `<div class="pulse-ring" style="border-color:${color};width:${size + 12}px;height:${size + 12}px;top:-6px;left:-6px;"></div>`
    : "";
  return L.divIcon({
    html: `<div class="sakura-marker" style="background:${color};width:${size}px;height:${size}px;">${pulseHtml}<span class="marker-petal">🌸</span></div>`,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

function buildPopupContent(city, statusInfo) {
  const statusBadge = `<span class="popup-status" style="background:${statusInfo.color}">${statusInfo.label}</span>`;
  const daysText = statusInfo.daysUntil
    ? `<p class="popup-days">距初绽还有 <strong>${statusInfo.daysUntil}</strong> 天</p>`
    : "";
  return `
    <div class="map-popup">
      <div class="popup-header">
        <h3>${city.city}</h3>
        ${statusBadge}
      </div>
      <p class="popup-location">📍 ${city.location}</p>
      <p class="popup-variety">🌸 ${city.variety}</p>
      <div class="popup-dates">
        <div class="popup-date-item">
          <span class="date-label">初绽</span>
          <span class="date-value">${formatDate(city.firstBloom)}</span>
        </div>
        <div class="popup-date-item">
          <span class="date-label">盛开</span>
          <span class="date-value">${formatDate(city.peakBloom)}</span>
        </div>
        <div class="popup-date-item">
          <span class="date-label">落花</span>
          <span class="date-value">${formatDate(city.endBloom)}</span>
        </div>
      </div>
      ${daysText}
      <p class="popup-note">${city.note}</p>
    </div>
  `;
}

function renderMarkers(filter = "all") {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  CHERRY_CITIES.forEach(city => {
    const statusInfo = getStatus(city);
    if (filter !== "all" && statusInfo.status !== filter) return;

    const color = getMarkerColor(statusInfo.status);
    const size = getMarkerSize(statusInfo.status);
    const icon = createSakuraIcon(color, size, statusInfo.status);

    const marker = L.marker(city.coords, { icon })
      .addTo(map)
      .bindPopup(buildPopupContent(city, statusInfo), {
        maxWidth: 280,
        className: "sakura-popup"
      });

    markers.push(marker);
  });
}

// ===== 统计数字 =====
function updateSummary() {
  let blooming = 0, peak = 0, upcoming = 0;
  CHERRY_CITIES.forEach(city => {
    const s = getStatus(city);
    if (s.status === "blooming" || s.status === "imminent") blooming++;
    if (s.status === "peak") peak++;
    if (s.status === "upcoming" || s.status === "waiting") upcoming++;
  });
  animateCount("blooming-count", blooming);
  animateCount("peak-count", peak);
  animateCount("upcoming-count", upcoming);
}

function animateCount(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 20);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 50);
}

// ===== 花期表格 =====
function renderTable(region = "all") {
  const tbody = document.getElementById("table-body");
  if (!tbody) return;

  const cities = region === "all"
    ? CHERRY_CITIES
    : CHERRY_CITIES.filter(c => c.region === region);

  // 按初绽日期排序
  const sorted = [...cities].sort((a, b) => {
    const da = toDate(a.firstBloom);
    const db = toDate(b.firstBloom);
    return da - db;
  });

  tbody.innerHTML = sorted.map(city => {
    const statusInfo = getStatus(city);
    const regionName = REGION_NAMES[city.region] || city.region;
    const rowClass = statusInfo.status === "peak" ? "row-peak"
      : statusInfo.status === "blooming" ? "row-blooming"
      : statusInfo.status === "ended" ? "row-ended"
      : "";

    return `
      <tr class="${rowClass}" data-city-id="${city.id}">
        <td class="city-name">
          <strong>${city.city}</strong>
          <span class="province-tag">${city.province}</span>
        </td>
        <td class="location-cell">${city.location}</td>
        <td><span class="region-badge region-${city.region}">${regionName}</span></td>
        <td class="date-cell">${formatDate(city.firstBloom)}</td>
        <td class="date-cell peak-date">${formatDate(city.peakBloom)}</td>
        <td class="date-cell">${formatDate(city.endBloom)}</td>
        <td class="duration-cell">${city.durationDays}天</td>
        <td>
          <span class="status-badge" style="background:${statusInfo.color}20;color:${statusInfo.color};border:1px solid ${statusInfo.color}">
            ${statusInfo.label}
          </span>
        </td>
      </tr>
    `;
  }).join("");

  // 点击行定位到地图
  tbody.querySelectorAll("tr[data-city-id]").forEach(row => {
    row.addEventListener("click", () => {
      const cityId = parseInt(row.dataset.cityId);
      const city = CHERRY_CITIES.find(c => c.id === cityId);
      if (city) {
        map.setView(city.coords, 8, { animate: true });
        document.getElementById("map-section").scrollIntoView({ behavior: "smooth" });
        // 打开对应popup
        const marker = markers.find(m => {
          const ll = m.getLatLng();
          return Math.abs(ll.lat - city.coords[0]) < 0.001 && Math.abs(ll.lng - city.coords[1]) < 0.001;
        });
        if (marker) {
          setTimeout(() => marker.openPopup(), 600);
        }
      }
    });
  });
}

// ===== 过滤器按钮 =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderMarkers(currentFilter);
  });
});

// ===== 区域标签 =====
document.querySelectorAll(".region-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".region-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderTable(tab.dataset.region);
  });
});

// ===== 导航平滑滚动 =====
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== 滚动时更新导航高亮 =====
const sections = ["map-section", "table-section", "about-section"];
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
});

// ===== 初始化 =====
renderMarkers();
renderTable();
updateSummary();

// 更新时间显示（随访问当日更新）
const now = new Date();
document.getElementById("update-time").textContent =
  `更新时间：${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
