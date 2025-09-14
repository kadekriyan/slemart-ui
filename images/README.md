# Maintenance Images - Sleman Mart

## 📁 Folder Images

Semua file gambar maintenance disimpan di folder `images/`:

### 🛠️ maintenance-tools.svg

- **Deskripsi**: Koleksi tools (wrench, screwdriver, gear)
- **Style**: Minimalis dengan background circle
- **Warna**: Primary #E57F39, Secondary #D16A26
- **Ukuran**: 200x200px

### ⚙️ maintenance-gears.svg

- **Deskripsi**: Gear mechanism dengan multiple gears
- **Style**: Industrial/mechanical look
- **Fokus**: Main gear dengan smaller supporting gears
- **Ukuran**: 200x200px

### 🚧 maintenance-construction.svg

- **Deskripsi**: Construction cone dengan warning elements
- **Style**: Construction/building theme
- **Elements**: Traffic cone, tools, warning signs
- **Ukuran**: 200x200px

## 🎨 Usage di HTML

### Current Implementation

```html
<img
  src="./images/maintenance-tools.svg"
  alt="Maintenance Tools"
  class="mx-auto w-48 h-48"
/>
```

### Alternative Options

```html
<!-- Option 1: Tools theme -->
<img
  src="./images/maintenance-tools.svg"
  alt="Maintenance Tools"
  class="mx-auto w-48 h-48"
/>

<!-- Option 2: Gears theme -->
<img
  src="./images/maintenance-gears.svg"
  alt="Maintenance Gears"
  class="mx-auto w-48 h-48"
/>

<!-- Option 3: Construction theme -->
<img
  src="./images/maintenance-construction.svg"
  alt="Under Construction"
  class="mx-auto w-48 h-48"
/>
```

## 🔧 Customization

### Ganti Gambar

Untuk mengganti gambar maintenance, edit file `maintenance.html`:

```html
<!-- Ganti nama file sesuai pilihan -->
<img
  src="./images/maintenance-[THEME].svg"
  alt="Maintenance"
  class="mx-auto w-48 h-48"
/>
```

### Resize Gambar

```html
<!-- Small -->
<img src="./images/maintenance-tools.svg" class="mx-auto w-32 h-32" />

<!-- Medium (default) -->
<img src="./images/maintenance-tools.svg" class="mx-auto w-48 h-48" />

<!-- Large -->
<img src="./images/maintenance-tools.svg" class="mx-auto w-64 h-64" />
```

### Add CSS Effects

```html
<!-- Dengan hover effect -->
<img
  src="./images/maintenance-tools.svg"
  class="mx-auto w-48 h-48 hover:scale-105 transition-transform"
/>

<!-- Dengan opacity -->
<img
  src="./images/maintenance-tools.svg"
  class="mx-auto w-48 h-48 opacity-80"
/>

<!-- Dengan shadow -->
<img
  src="./images/maintenance-tools.svg"
  class="mx-auto w-48 h-48 drop-shadow-lg"
/>
```

## 🎯 Design Guidelines

### Color Scheme

- **Primary**: #E57F39 (Orange Sleman Mart)
- **Secondary**: #D16A26 (Darker orange)
- **Background**: #FEF7F0 (Light orange tint)
- **Accent**: #8B4513 (Brown for handles)

### Style Consistency

- Minimalis dan clean
- Consistent stroke width (2-4px)
- Rounded corners (rx="1-3")
- Subtle opacity untuk decorative elements

### File Format

- **SVG**: Vector format, scalable tanpa quality loss
- **Inline optimization**: Minimal code untuk fast loading
- **Responsive**: Otomatis adapt ke container size

## 📋 Maintenance Variations

### Tools Theme (Current)

- **Best for**: General maintenance message
- **Elements**: Wrench, screwdriver, gear
- **Mood**: Professional, technical

### Gears Theme

- **Best for**: System updates, technical work
- **Elements**: Multiple interlocking gears
- **Mood**: Mechanical, systematic

### Construction Theme

- **Best for**: Major rebuilds, new features
- **Elements**: Traffic cone, warning signs
- **Mood**: Active construction, temporary

## 🚀 Implementation

File maintenance.html sudah configured untuk menggunakan:

```html
src="./images/maintenance-tools.svg"
```

Untuk mengganti theme, cukup ubah nama file:

- `maintenance-tools.svg` → Tools theme
- `maintenance-gears.svg` → Gears theme
- `maintenance-construction.svg` → Construction theme

**Ready to use! Pilih theme yang paling sesuai dengan jenis maintenance yang dilakukan.** 🎨✨
