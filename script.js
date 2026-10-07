// Sekisho Digital Showroom
// Data is loaded from data/products.csv so that products can be edited in Excel.

let products = [];
let currentLang = "ja";
let activeShowroom = "all";

const showrooms = [
  {
  key: "Food & Beverage",
  className: "food",
  icon: "食",
  image: "assets/images/showroom-food.jpg",
  title: { ja: "食品・飲料", en: "Food & Beverage", vi: "Thực phẩm & Đồ uống" },
    text: {
      ja: "日本の食品・飲料・調味料・冷凍食品・スイーツなどを紹介します。",
      en: "Japanese food, beverages, seasonings, frozen food and sweet products.",
      vi: "Thực phẩm, đồ uống, gia vị, thực phẩm đông lạnh và đồ ngọt Nhật Bản chọn lọc."
    }
  },
  {
  key: "Traditional Crafts",
  className: "craft",
  icon: "匠",
image: "assets/images/showroom-craft.jpg",
  title: { 
      ja: "伝統工芸品",
      en: "Traditional Crafts",
      vi: "Đồ thủ công truyền thống"
  },
    text: {
      ja: "日本の職人による器、カップ、照明、装飾品などを紹介します。",
      en: "Craft items made by Japanese artisans, including vessels, cups, lamps and decorations.",
      vi: "Bình, cốc, chén, đèn và đồ trang trí thủ công do nghệ nhân Nhật Bản làm."
    }
  },
  {
    key: "Japanese Lifestyle Goods",
    className: "lifestyle",
    icon: "暮",
       image: "assets/images/showroom-lifestyle.jpg",
    title: { ja: "ライフスタイル商品", en: "Japanese Lifestyle Goods", vi: "Hàng lifestyle Nhật Bản" },
    text: {
      ja: "手ぬぐい、風呂敷、ハンカチ、ガラス製品など、ギフト向け商品を紹介します。",
      en: "Textiles, furoshiki, tenugui, handkerchiefs and glassware suitable for gifts.",
      vi: "Khăn tay, furoshiki, tenugui, khăn vải truyền thống và cốc thủy tinh làm quà tặng."
    }
  },
  {
  key: "Equipment & Solutions",
  className: "device",
  icon: "空",
  image: "assets/images/showroom-equipment.jpg",
  title: {
  ja: "設備・ソリューション",
  en: "Equipment & Solutions",
  vi: "Thiết bị & Giải pháp"
},
    text: {
      ja: "低濃度オゾン脱臭器をはじめ、海外向けの設備・ソリューションをご紹介します。",
      en: "Equipment and business solutions for overseas markets, including low-concentration ozone deodorizing devices.",
      vi: "Thiết bị và giải pháp kinh doanh cho thị trường quốc tế, bao gồm máy khử mùi ozone nồng độ thấp."
    }
  }
];

const valueTranslations = {
  category: {
    "Tea": {
      ja: "茶",
      en: "Tea",
      vi: "Trà"
    },
    "Dried Sweet Potato": {
      ja: "干し芋",
      en: "Dried Sweet Potato",
      vi: "Khoai lang sấy"
    },
    "Confectionery": {
      ja: "菓子",
      en: "Confectionery",
      vi: "Bánh kẹo"
    },
    "Beverage": {
      ja: "飲料",
      en: "Beverage",
      vi: "Đồ uống"
    },
    "Alcohol": {
      ja: "アルコール",
      en: "Alcohol",
      vi: "Đồ uống có cồn"
    },
    "Konjac": {
      ja: "蒟蒻",
      en: "Konjac",
      vi: "Konjac"
    },
    "Rice": {
      ja: "米",
      en: "Rice",
      vi: "Gạo"
    },
    "Seasoning": {
      ja: "調味料",
      en: "Seasoning",
      vi: "Gia vị"
    },
    "Syrup": {
      ja: "シロップ",
      en: "Syrup",
      vi: "Siro"
    },
    "Pickles": {
      ja: "漬物",
      en: "Pickles",
      vi: "Đồ muối chua"
    },
    "Seafood": {
      ja: "海産物",
      en: "Seafood",
      vi: "Hải sản"
    },
    "Fresh Meat": {
      ja: "精肉",
      en: "Fresh Meat",
      vi: "Thịt tươi"
    },
    "Processed Food": {
      ja: "加工食品",
      en: "Processed Food",
      vi: "Thực phẩm chế biến"
    },
    "Noodles": {
      ja: "麺類",
      en: "Noodles",
      vi: "Mì"
    },
    "Fermented Soybeans": {
      ja: "納豆",
      en: "Fermented Soybeans",
      vi: "Natto"
    },

    "Ceramics": {
      ja: "陶磁器",
      en: "Ceramics",
      vi: "Đồ gốm sứ"
    },
    "Decoration": {
      ja: "装飾品",
      en: "Decoration",
      vi: "Đồ trang trí"
    },
    "Glassware": {
      ja: "ガラス製品",
      en: "Glassware",
      vi: "Sản phẩm thủy tinh"
    },
    "Lighting": {
      ja: "照明",
      en: "Lighting",
      vi: "Đèn chiếu sáng"
    },
    "Textile": {
      ja: "繊維製品",
      en: "Textile",
      vi: "Sản phẩm dệt may"
    },
    "Ozone Device": {
      ja: "オゾン機器",
      en: "Ozone Device",
      vi: "Thiết bị ozone"
    },
    "Tableware": {
      ja: "食器",
      en: "Tableware",
      vi: "Đồ dùng bàn ăn"
    },
    "Equipment": {
      ja: "設備",
      en: "Equipment",
      vi: "Thiết bị"
    }
  },

  storage: {
    "Room temperature": {
      ja: "常温",
      en: "Room temperature",
      vi: "Nhiệt độ thường"
    },
    "Ambient": {
      ja: "常温",
      en: "Ambient",
      vi: "Nhiệt độ thường"
    },
    "Refrigerated": {
      ja: "冷蔵",
      en: "Refrigerated",
      vi: "Bảo quản lạnh"
    },
    "Frozen": {
      ja: "冷凍",
      en: "Frozen",
      vi: "Bảo quản đông lạnh"
    }
  },

  origin: {
    "Japan": {
      ja: "日本",
      en: "Japan",
      vi: "Nhật Bản"
    }
  }
};

const translations = {
  ja: {
    nav_home: "ホーム", nav_showrooms: "ショールーム", nav_company: "会社情報", nav_contact: "お問い合わせ",
    mini_food: "食品・飲料",
    mini_craft: "伝統工芸品",
    mini_lifestyle: "ライフスタイル商品",
    mini_equipment: "設備・ソリューション",

    hero_title: "日本の商品を、世界へ。",
　　company_title: "関彰商事株式会社<br>海外事業統括 貿易課",
    hero_text: "食品、伝統工芸品、ライフスタイル商品、設備・ソリューションなど、幅広い日本の商品をご紹介しています。",
    explore_showrooms: "ショールームを見る", request_quotation: "見積依頼",
    showroom_eyebrow: "Select Product Area", showroom_title: "Showrooms",
    all_products: "All Products", download_pdf: "PDFカタログ", recommended_products: "Recommended Products",
    company_eyebrow: "Company Profile",
    company_text: "関彰商事株式会社 法人営業本部 広域営業部 海外事業統括 貿易課は、セキショウグループの貿易事業を担う部門です。\n\n食品、工芸品、ライフスタイル商品、設備ソリューションなど、日本の優れた商品を海外市場へご紹介しています。",
    group_site: "セキショウグループ公式サイトを見る",
    news_eyebrow: "News", news_title: "Updates", news_1: "Digital showroom is under preparation.", news_2: "New product data has been added.", news_3: "Overseas product proposal started.",
    contact_eyebrow: "お問い合わせ",
contact_title: "お問い合わせ",
contact_text: "商品詳細、見積、商談、PDFカタログについては下記までお問い合わせください。",
contact_email_label: "メール：",
contact_tel_label: "電話：",
contact_address_label: "住所：",
footer_text: "© 関彰商事株式会社｜ビジネストランスフォーメーション部 海外事業統括 貿易課",
    search: "商品名で検索...", search_button: "検索", category_filter_label: "カテゴリー", browse_all: "すべての商品を見る →", showroom_intro: "4つのショールームから商品をお探しいただけます。", clear_filters: "条件をクリア", all_showrooms: "全ショールーム", all_categories: "全カテゴリー",
    result: "件の商品", empty: "該当する商品がありません。", inquiry: "見積依頼",
	  detail_product_id: "商品ID",
detail_showroom: "ショールーム",
detail_category: "カテゴリー",
detail_product_type: "商品タイプ",
detail_net_weight_size: "内容量・サイズ",
detail_material: "素材",
detail_shelf_life: "賞味期限",
detail_storage: "保存方法",
detail_origin: "原産国",
detail_maker_artisan: "メーカー・職人",
detail_moq: "最小発注数量（MOQ）",
detail_price: "価格",
detail_usage_scene: "使用シーン",
detail_allergy_notes: "アレルギー・注意事項",
detail_pdf: "PDFカタログ",
  },
  en: {
    nav_home: "Home", nav_showrooms: "Showrooms", nav_company: "Company", nav_contact: "Contact",
    mini_food: "Food & Beverage",
    mini_craft: "Traditional Crafts",
    mini_lifestyle: "Japanese Lifestyle Goods",
    mini_equipment: "Equipment & Solutions",

    hero_title: "Bringing Japanese Products to the World",
　　company_title: "Sekisho Corporation<br>Foreign Trade Section",
    hero_text: "Explore our digital catalogue of Japanese food, traditional crafts, lifestyle goods, equipment and business solutions.",
    explore_showrooms: "Explore Showrooms", request_quotation: "Request Quotation",
    showroom_eyebrow: "Select Product Area", showroom_title: "Showrooms",
    all_products: "All Products", download_pdf: "Download PDF Catalog", recommended_products: "Recommended Products",
    company_eyebrow: "Company Profile",
    company_text: "The Foreign Trade Section, International Operations, Cross-Regional Sales Department, Corporate Sales Division of Sekisho Corporation is responsible for the Sekisho Group's international trading business.\n\nWe introduce high-quality Japanese products to overseas markets, including food, traditional crafts, lifestyle goods, equipment and business solutions.",
    group_site: "Visit Sekisho Group Website",
    news_eyebrow: "News", news_title: "Updates", news_1: "Digital showroom is under preparation.", news_2: "New product data has been added.", news_3: "Overseas product proposal started.",
    contact_eyebrow: "Business Inquiry",
contact_title: "Contact",
contact_text: "Please contact us for product details, quotations, business meetings or PDF catalog requests.",
contact_email_label: "Email:",
contact_tel_label: "Tel:",
contact_address_label: "Address:",
footer_text: "© Sekisho Corporation | Business Transformation Department | International Operations | Foreign Trade Section",
    search: "Search products...", search_button: "SEARCH", category_filter_label: "Category", browse_all: "Browse all products →", showroom_intro: "Explore products through our four showrooms.", clear_filters: "Clear filters", all_showrooms: "All Showrooms", all_categories: "All Categories",
    result: "products", empty: "No products found.", inquiry: "Request Quotation",
	detail_product_id: "Product ID",
detail_showroom: "Showroom",
detail_category: "Category",
detail_product_type: "Product Type",
detail_net_weight_size: "Net Weight / Size",
detail_material: "Material",
detail_shelf_life: "Shelf Life",
detail_storage: "Storage",
detail_origin: "Country of Origin",
detail_maker_artisan: "Maker / Artisan",
detail_moq: "Minimum Order Quantity (MOQ)",
detail_price: "Price",
detail_usage_scene: "Usage Scene",
detail_allergy_notes: "Allergy / Notes",
detail_pdf: "PDF Catalog",
  },
  vi: {
    nav_home: "Trang chủ", nav_showrooms: "Showrooms", nav_company: "Công ty",nav_contact: "Liên hệ",
    mini_food: "Thực phẩm & Đồ uống",
    mini_craft: "Đồ thủ công truyền thống",
    mini_lifestyle: "Hàng lifestyle Nhật Bản",
    mini_equipment: "Thiết bị & Giải pháp",

hero_title: "Mang sản phẩm Nhật Bản đến với thế giới",
company_title: "Sekisho Corporation<br>Phòng Thương mại Quốc tế",
    hero_text: "Khám phá catalogue điện tử gồm thực phẩm, hàng thủ công truyền thống, sản phẩm lifestyle, thiết bị và giải pháp kinh doanh từ Nhật Bản.",
    explore_showrooms: "Xem showroom", request_quotation: "Yêu cầu báo giá",
    showroom_eyebrow: "Chọn nhóm sản phẩm", showroom_title: "Showrooms",
    all_products: "Tất cả sản phẩm", download_pdf: "Tải PDF catalog", recommended_products: "Sản phẩm nổi bật",
    company_eyebrow: "Thông tin công ty",
    company_text: "Phòng Thương mại Quốc tế của Công ty Sekisho Corporation chịu trách nhiệm triển khai hoạt động thương mại quốc tế của Tập đoàn Sekisho.\n\nChúng tôi giới thiệu tới thị trường quốc tế các sản phẩm chất lượng cao của Nhật Bản, bao gồm thực phẩm, hàng thủ công truyền thống, sản phẩm lifestyle, thiết bị và các giải pháp kinh doanh.",
    group_site: "Xem website Sekisho Group",
    news_eyebrow: "Tin tức", news_title: "Cập nhật", news_1: "Đang chuẩn bị digital showroom.", news_2: "Đã thêm dữ liệu sản phẩm mới.", news_3: "Bắt đầu đề xuất sản phẩm cho thị trường nước ngoài.",
    contact_eyebrow: "Liên hệ kinh doanh",
contact_title: "Liên hệ",
contact_text: "Vui lòng liên hệ với chúng tôi để nhận thông tin sản phẩm, báo giá, trao đổi kinh doanh hoặc PDF catalog.",
contact_email_label: "Email:",
contact_tel_label: "Điện thoại:",
contact_address_label: "Địa chỉ:",
footer_text: "© Công ty Sekisho | Khối Chuyển đổi Kinh doanh | Quản lý Kinh doanh Hải ngoại | Phòng Thương mại Quốc tế",
    search: "Tìm kiếm sản phẩm...", search_button: "TÌM KIẾM", category_filter_label: "Danh mục", browse_all: "Xem tất cả sản phẩm →", showroom_intro: "Khám phá sản phẩm qua 4 showroom của chúng tôi.", clear_filters: "Xóa bộ lọc", all_showrooms: "Tất cả showroom", all_categories: "Tất cả danh mục",
    result: "sản phẩm", empty: "Không tìm thấy sản phẩm phù hợp.", inquiry: "Yêu cầu báo giá",
	  detail_product_id: "Mã sản phẩm",
detail_showroom: "Showroom",
detail_category: "Danh mục",
detail_product_type: "Loại sản phẩm",
detail_net_weight_size: "Khối lượng / Kích thước",
detail_material: "Chất liệu",
detail_shelf_life: "Hạn sử dụng",
detail_storage: "Điều kiện bảo quản",
detail_origin: "Xuất xứ",
detail_maker_artisan: "Nhà sản xuất / Nghệ nhân",
detail_moq: "Số lượng đặt hàng tối thiểu (MOQ)",
detail_price: "Giá",
detail_usage_scene: "Mục đích sử dụng",
detail_allergy_notes: "Dị ứng / Lưu ý",
detail_pdf: "Catalog PDF",
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  setupEvents();
  buildShowroomCards();
  buildShowroomFilter();
  await loadProducts();
  applyLanguage();
  renderAll();
});

function setupEvents() {
  document.getElementById("menuButton").addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("show");
    document.getElementById("menuButton").setAttribute("aria-expanded", nav.classList.contains("show"));
  });

  document.getElementById("languageSelect").addEventListener("change", (event) => {
    currentLang = event.target.value;
    applyLanguage();
    buildShowroomCards();
    buildShowroomFilter();
    rebuildCategoryFilter();
    renderAll();
  });

  document.getElementById("productSearch").addEventListener("input", renderAll);
  document.getElementById("productSearch").addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("searchButton").addEventListener("click", () => {
    renderAll();
    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("showroomFilter").addEventListener("change", (event) => {
    activeShowroom = event.target.value;
    rebuildCategoryFilter();
    renderAll();
  });
  document.getElementById("categoryFilter").addEventListener("change", () => {
  renderAll();
  updateFloatingCategoryActive();
});
  document.getElementById("clearFilters").addEventListener("click", () => {
    document.getElementById("productSearch").value = "";
    document.getElementById("showroomFilter").value = "all";
    activeShowroom = "all";
    rebuildCategoryFilter();
    document.getElementById("categoryFilter").value = "all";
    renderAll();
  });

  document.getElementById("downloadPdfBtn").addEventListener("click", (event) => {
    const showroom = document.getElementById("showroomFilter").value;
    const productWithPdf = products.find(p => (showroom === "all" || p.showroom === showroom) && p.pdf_link);
    if (!productWithPdf) { event.preventDefault(); alert("PDF catalog link can be added in products.csv."); }
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("productModal").addEventListener("click", (event) => { if (event.target.id === "productModal") closeModal(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

	  const floatingCategoryButton = document.getElementById("floatingCategoryButton");
  const floatingCategoryNav = document.getElementById("floatingCategoryNav");

  if (floatingCategoryButton && floatingCategoryNav) {
    floatingCategoryButton.addEventListener("click", () => {
      const isOpen = floatingCategoryNav.classList.toggle("open");
      floatingCategoryButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
}
async function loadProducts() {
  const response = await fetch("data/products.csv");
  const text = await response.text();
  products = parseCSV(text);
  rebuildCategoryFilter();
}

function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift().map(h => h.trim().replace(/^\uFEFF/, ""));
  return rows
    .filter(r => r.length > 1)
    .map(r => Object.fromEntries(headers.map((h, i) => [h, (r[i] || "").trim()])));
}

function applyLanguage() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key]) {
        el.innerHTML = t[key];
    }
});

  document.getElementById("productSearch").placeholder = t.search;
  document.querySelector("#showroomFilter option[value='all']").textContent = t.all_showrooms;
  document.querySelector("#categoryFilter option[value='all']").textContent = t.all_categories;
}

function buildShowroomCards() {
  const grid = document.getElementById("showroomCards");
  grid.innerHTML = showrooms.map(s => `
    <article class="showroom-card ${s.className}" onclick="selectShowroom('${s.key}')">
      <div class="showroom-image">
  ${s.image ? `<img src="${s.image}" alt="${s.title[currentLang]}">` : s.icon}
	</div>
      <div class="showroom-body">
        <h3>${s.title[currentLang]}</h3>
        <p>${s.text[currentLang]}</p>
      </div>
    </article>
  `).join("");
}

function buildShowroomFilter() {
  const filter = document.getElementById("showroomFilter");
  filter.innerHTML = `<option value="all">${translations[currentLang].all_showrooms}</option>`;

  showrooms.forEach(s => {
    const option = document.createElement("option");
    option.value = s.key;
    option.textContent = s.title[currentLang];
    filter.appendChild(option);
  });
}

function selectShowroom(key) {
  activeShowroom = key;
  document.getElementById("showroomFilter").value = key;
  rebuildCategoryFilter();
  renderAll();

  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function rebuildCategoryFilter() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedShowroom = document.getElementById("showroomFilter").value;
  categoryFilter.innerHTML = `<option value="all">${translations[currentLang].all_categories}</option>`;

  const categories = [...new Set(products
    .filter(p => selectedShowroom === "all" || p.showroom === selectedShowroom)
    .map(p => p.category)
    .filter(Boolean)
  )].sort();

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = categoryName(category);
    categoryFilter.appendChild(option);
  });
	  buildFloatingCategoryMenu();
}

function buildFloatingCategoryMenu() {
  const menu = document.getElementById("floatingCategoryMenu");
  if (!menu) return;

  const selectedShowroom = document.getElementById("showroomFilter").value;

  const categories = [...new Set(
    products
      .filter(p => selectedShowroom === "all" || p.showroom === selectedShowroom)
      .map(p => p.category)
      .filter(Boolean)
  )].sort();

  const allLabel = translations[currentLang].all_categories;

  menu.innerHTML = `
    <button type="button" class="floating-category-item" data-category="all">
      ${allLabel}
    </button>

    ${categories.map(category => `
      <button
        type="button"
        class="floating-category-item"
        data-category="${category}"
      >
        ${categoryName(category)}
      </button>
    `).join("")}
  `;

  menu.querySelectorAll(".floating-category-item").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      document.getElementById("categoryFilter").value = category;

      renderAll();

      const target = category === "all"
        ? document.getElementById("products")
        : document.getElementById(`category-${categorySlug(category)}`);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      document.getElementById("floatingCategoryNav")?.classList.remove("open");
      document.getElementById("floatingCategoryButton")?.setAttribute("aria-expanded", "false");
    });
  });

  updateFloatingCategoryActive();
}

function categorySlug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function updateFloatingCategoryActive() {
  const selected = document.getElementById("categoryFilter")?.value || "all";

  document.querySelectorAll(".floating-category-item").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === selected
    );
  });
}

function renderAll() {
  renderTitle();
  renderRecommended();
  renderProducts();
  updatePdfButton();
}

function renderTitle() {
  const selected = document.getElementById("showroomFilter").value;
  const title = document.getElementById("currentShowroomTitle");
  const label = document.getElementById("currentShowroomLabel");

  if (selected === "all") {
  title.textContent = translations[currentLang].all_products;
  label.textContent = translations[currentLang].all_showrooms;
} else {
  const showroom = showrooms.find(s => s.key === selected);
  title.textContent = showroom ? showroom.title[currentLang] : selected;
  label.textContent = showroomName(selected);
}
}

function filteredProducts() {
  const keyword = document.getElementById("productSearch").value.toLowerCase();
  const showroom = document.getElementById("showroomFilter").value;
  const category = document.getElementById("categoryFilter").value;

  return products.filter(p => {
    const searchText = `${p.name_ja} ${p.name_en} ${p.name_vi} ${p.category} ${p.showroom}`.toLowerCase();
    const matchKeyword = searchText.includes(keyword);
    const matchShowroom = showroom === "all" || p.showroom === showroom;
    const matchCategory = category === "all" || p.category === category;
    return matchKeyword && matchShowroom && matchCategory;
  });
}

function renderRecommended() {
  const showroom = document.getElementById("showroomFilter").value;
  const recommended = products
    .filter(p => p.recommended === "yes" && (showroom === "all" || p.showroom === showroom))
    .slice(0, 4);

  const block = document.getElementById("recommendedBlock");
  block.style.display = recommended.length ? "block" : "none";
  document.getElementById("recommendedGrid").innerHTML = recommended.map(productCard).join("");
}

function renderProducts() {
  const result = filteredProducts();

  document.getElementById("resultCount").textContent =
    `${result.length} ${translations[currentLang].result}`;

  const grid = document.getElementById("productGrid");

  if (!result.length) {
    grid.innerHTML =
      `<div class="empty-message">${translations[currentLang].empty}</div>`;
    updateFloatingCategoryActive();
    return;
  }

  const grouped = new Map();

  result.forEach(product => {
    const category = product.category || "Other";

    if (!grouped.has(category)) {
      grouped.set(category, []);
    }

    grouped.get(category).push(product);
  });

  grid.innerHTML = [...grouped.entries()].map(([category, items]) => `
    <section
      class="product-category-section"
      id="category-${categorySlug(category)}"
    >
      <div class="product-category-heading">
        <h3>${categoryName(category)}</h3>
        <span class="product-category-line"></span>
      </div>

      <div class="product-grid category-product-grid">
        ${items.map(productCard).join("")}
      </div>
    </section>
  `).join("");

  updateFloatingCategoryActive();
}

function updatePdfButton() {
  const showroom = document.getElementById("showroomFilter").value;
  const productWithPdf = products.find(p => (showroom === "all" || p.showroom === showroom) && p.pdf_link);
  const button = document.getElementById("downloadPdfBtn");
  button.href = productWithPdf && productWithPdf.pdf_link ? productWithPdf.pdf_link : "#";
}

function showroomName(value) {
  const showroom = showrooms.find(s => s.key === value);

  if (showroom && showroom.title[currentLang]) {
    return showroom.title[currentLang];
  }

  return value || "";
}

function translatedValue(group, value) {
  if (!value) return "";

  const item = valueTranslations[group]?.[value];

  if (item && item[currentLang]) {
    return item[currentLang];
  }

  return value;
}

function categoryName(value) {
  return translatedValue("category", value);
}

function storageName(value) {
  return translatedValue("storage", value);
}

function originName(value) {
  return translatedValue("origin", value);
}

function productName(p) {
  if (currentLang === "ja") return p.name_ja || p.name_en;
  if (currentLang === "vi") return p.name_vi || p.name_en;
  return p.name_en || p.name_ja;
}

function description(p) {
  if (currentLang === "ja") return p.description_ja || p.description_en;
  if (currentLang === "vi") return p.description_vi || p.description_en;
  return p.description_en || p.description_ja;
}

function productImages(p) {
  return [p.image, p.image_2, p.image_3].filter((value, index, array) => value && array.indexOf(value) === index);
}

function productCard(p) {
  const image = productImages(p)[0] || "assets/images/placeholder-product.svg";
  return `
    <article class="product-card" onclick="openProduct('${p.id}')" tabindex="0" onkeydown="if(event.key==='Enter') openProduct('${p.id}')">
      <div class="product-image">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${image}" alt="${productName(p)}" loading="lazy" onerror="this.src='assets/images/placeholder-product.svg'">
      </div>
      <div class="product-body">
        <h3>${productName(p)}</h3>
        ${currentLang !== "en" && p.name_en ? `<p class="en">${p.name_en}</p>` : ""}
        <div class="product-meta">
          ${p.showroom ? `<span class="tag">${showroomName(p.showroom)}</span>` : ""}
          ${p.category ? `<span class="tag">${categoryName(p.category)}</span>` : ""}
        </div>
      </div>
    </article>`;
}

function setGalleryImage(src, button) {
  const main = document.getElementById("galleryMainImage");
  if (main) main.src = src;
  document.querySelectorAll(".gallery-thumb").forEach(el => el.classList.remove("active"));
  if (button) button.classList.add("active");
}

function openProduct(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  const images = productImages(p);
  if (!images.length) images.push("assets/images/placeholder-product.svg");
  const specs = [
    [translations[currentLang].detail_product_id, p.id],
    [translations[currentLang].detail_showroom, showroomName(p.showroom)],
    [translations[currentLang].detail_category, categoryName(p.category)],
    [translations[currentLang].detail_product_type, p.product_type],
    [translations[currentLang].detail_net_weight_size, p.net_weight_or_size],
    [translations[currentLang].detail_material, p.material],
    [translations[currentLang].detail_shelf_life, p.shelf_life],
    [translations[currentLang].detail_storage, storageName(p.storage)],
    [translations[currentLang].detail_origin, originName(p.origin)],
    [translations[currentLang].detail_maker_artisan, p.maker_or_artisan],
    [translations[currentLang].detail_moq, p.moq],
    [translations[currentLang].detail_price, p.price],
    [translations[currentLang].detail_usage_scene, p.usage_scene],
    [translations[currentLang].detail_allergy_notes, p.allergy_or_notes]
  ].filter(row => row[1]);

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-grid">
      <div class="product-gallery">
        <div class="gallery-main"><img id="galleryMainImage" src="${images[0]}" alt="${productName(p)}" onerror="this.src='assets/images/placeholder-product.svg'"></div>
        ${images.length > 1 ? `<div class="gallery-thumbs">${images.map((src,i)=>`<button class="gallery-thumb ${i===0?'active':''}" type="button" onclick="setGalleryImage('${src}', this)"><img src="${src}" alt="${productName(p)} ${i+1}"></button>`).join('')}</div>` : ''}
      </div>
      <div class="modal-info">
        <p class="eyebrow">${showroomName(p.showroom)}${p.category ? ` / ${categoryName(p.category)}` : ""}</p>
        <h2>${productName(p)}</h2>
        <p class="modal-description">${description(p) || ""}</p>
        <dl class="spec-list">${specs.map(([key,value])=>`<div class="spec-row"><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl>
        <div class="modal-actions">
          <a class="primary-button" href="mailto:info-global@sekisho.co.jp?subject=Product Inquiry: ${encodeURIComponent(p.name_en || p.name_ja || p.id)}">${translations[currentLang].inquiry}</a>
          ${p.pdf_link ? `<a class="outline-button" href="${p.pdf_link}" target="_blank" rel="noopener">${translations[currentLang].detail_pdf}</a>` : ""}
        </div>
      </div>
    </div>`;
  document.getElementById("productModal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("productModal").classList.remove("show");
  document.body.style.overflow = "";
}

// Show floating category navigator only around the Products section
const productsSection = document.getElementById("products");
const floatingCategoryNav = document.getElementById("floatingCategoryNav");

if (productsSection && floatingCategoryNav) {
  const categoryNavObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        floatingCategoryNav.classList.toggle("visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.02
    }
  );

  categoryNavObserver.observe(productsSection);
}

// Back to top button
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
