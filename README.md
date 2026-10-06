# Sekisho International Trade Digital Showroom

This is a free static website for 関彰商事株式会社 貿易課.
It works with HTML, CSS, JavaScript and CSV. No backend is required.

## Folder Structure

```
sekisho_digital_showroom/
├── index.html
├── style.css
├── script.js
├── data/
│   └── products.csv
├── assets/
│   ├── images/
│   └── pdf/
└── README.md
```

## How to Edit Products

Open:

```
data/products.csv
```

in Excel.

When saving, choose:

```
CSV UTF-8 (Comma delimited) (*.csv)
```

## Important Columns

- `id`: Product ID
- `showroom`: Main product area  
  Example:
  - Food & Beverage
  - Traditional Crafts
  - Japanese Lifestyle Goods
  - Air Buster
- `category`: Smaller product category
- `product_type`: Product type
- `badge`: Label shown on card, e.g. 新商品 / 人気 / おすすめ
- `recommended`: Write `yes` to show in Recommended Products
- `name_ja`, `name_en`, `name_vi`: Product names
- `image`: Product image path
- `net_weight_or_size`: Food weight or product size
- `material`: Material for craft, textile, glassware
- `shelf_life`: Food shelf life
- `storage`: Food storage condition
- `origin`: Country of origin
- `maker_or_artisan`: Maker or artisan name
- `moq`: Minimum order quantity
- `price`: Price placeholder or quote status
- `description_ja`, `description_en`, `description_vi`: Product descriptions
- `usage_scene`: Usage scene
- `allergy_or_notes`: Allergy, care instructions, device notes, etc.
- `pdf_link`: PDF catalog path

## How to Add Images

1. Put images into:

```
assets/images/
```

2. Rename images using English names without spaces.

Good examples:

```
green-tea.jpg
cream-daifuku-strawberry.jpg
washi-lamp.jpg
air-buster.jpg
```

3. In `products.csv`, write:

```
assets/images/green-tea.jpg
```

## How to Add PDF Catalogs

Put PDF files into:

```
assets/pdf/
```

Then write the link in `products.csv`, for example:

```
assets/pdf/food-catalog.pdf
```

## How to Preview Locally

Because the website loads CSV data, do not just double-click `index.html`.

Recommended method:

1. Install VS Code.
2. Install the VS Code extension: Live Server.
3. Open the folder `sekisho_digital_showroom`.
4. Right click `index.html`.
5. Click `Open with Live Server`.

## How to Deploy Free with GitHub Pages

1. Create a GitHub account.
2. Create a new repository, for example:

```
sekisho-digital-showroom
```

3. Upload all files and folders.
4. Go to `Settings` → `Pages`.
5. Select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. GitHub will create a free website URL.

## How to Create QR Code

1. Copy the GitHub Pages URL.
2. Paste it into a QR code generator.
3. Download the QR code image.
4. Use it on business cards, flyers, catalog PDFs, email signatures, and exhibition materials.

## Replace Company Contact

In `index.html`, replace:

```
trade@example.com
+81-XX-XXXX-XXXX
Ibaraki, Japan
```

with real company contact information.

Also replace `assets/images/logo-placeholder.svg` with the actual company logo when available.

## UI redesign (2026-10)
- Responsive Japan Street-inspired layout using the Sekisho sage palette.
- Search area combines showroom, keyword and category filters.
- `products.csv` now supports three product images: `image`, `image_2`, `image_3`.
- `image` is the card/main image. `image_2` and `image_3` are optional; when present they appear as clickable thumbnails in the product detail view.
- Example paths: `assets/images/product-main.jpg`, `assets/images/product-side.jpg`, `assets/images/product-detail.jpg`.
- Existing product rows/data were retained; the two new image columns are blank until filled.
