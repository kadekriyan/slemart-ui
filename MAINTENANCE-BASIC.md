# Maintenance Mode Basic - Sleman Mart

## 📄 File

- `maintenance-basic.html` - Halaman maintenance tanpa animasi
- `js/maintenance-basic.js` - Script controller basic

## ✨ Fitur

### Halaman Maintenance Basic

- **No Animation** - Tampilan statis tanpa efek bergerak
- **Pure CSS** - Styling manual tanpa framework
- **Simple Layout** - Card sederhana dengan informasi penting
- **Emoji Icons** - Menggunakan emoji sebagai ikon (🏪 🔧 💬)
- **Responsive** - Mobile friendly dengan media queries
- **Fast Loading** - Minimal resources, load cepat

### Script Controller Basic

- **Vanilla JavaScript** - Tanpa dependency external
- **localStorage** - Simpan status di browser
- **Keyboard Shortcut** - Ctrl + Shift + M untuk toggle
- **Auto Redirect** - Otomatis ke halaman maintenance

## 🚀 Cara Pakai

### Aktivasi Maintenance

```javascript
// Metode 1: Keyboard
// Tekan: Ctrl + Shift + M

// Metode 2: Console
MaintenanceMode.enable();

// Metode 3: Manual
localStorage.setItem("slemanmart_maintenance", "true");
location.reload();
```

### Nonaktifkan Maintenance

```javascript
// Console
MaintenanceMode.disable();

// Manual
localStorage.setItem("slemanmart_maintenance", "false");
location.reload();
```

### Cek Status

```javascript
MaintenanceMode.isActive(); // true/false
```

## 🎨 Design Simple

### Warna

- **Background**: #f5f5f5 (abu-abu terang)
- **Card**: white dengan shadow halus
- **Primary**: #E57F39 (orange Sleman Mart)
- **Text**: #333 (gelap), #666 (medium), #999 (terang)

### Typography

- **Font**: Arial (system font)
- **Sizes**: 24px (judul), 16px (teks), 14px (detail)
- **No Web Fonts** - Menggunakan font sistem

### Layout

- **Centered Card** - Box putih di tengah layar
- **Fixed Width** - Max 400px untuk readability
- **Padding** - 40px desktop, 30px mobile

## 📱 Responsive

### Desktop (>480px)

- Card 400px width dengan padding besar
- Font size normal
- Hover effect pada tombol

### Mobile (≤480px)

- Card full width dengan margin 10px
- Font size lebih kecil
- Padding dikurangi untuk space

## ⚙️ Kustomisasi

### Ubah Pesan

Edit `maintenance-basic.html`:

```html
<div class="message">Pesan Anda di sini</div>
```

### Ubah Estimasi

```html
<div class="time">
  <strong>Estimasi selesai: X jam lagi</strong>
</div>
```

### Ubah WhatsApp

```html
<a href="https://wa.me/NOMOR_ANDA" class="whatsapp-btn"></a>
```

### Ubah Auto Refresh

```javascript
setTimeout(function () {
  window.location.reload();
}, 300000); // 300000 = 5 menit
```

## 🔧 Technical Details

### No Dependencies

- Tidak ada framework CSS
- Tidak ada library JavaScript
- Tidak ada external fonts
- Pure HTML/CSS/JS

### Browser Support

- Chrome/Edge/Firefox modern
- Safari modern
- IE11+ (jika diperlukan)

### Performance

- **Load Time**: <1 detik
- **File Size**: <5KB total
- **Memory**: Minimal usage

## 📋 Testing

1. Buka website normal
2. Tekan `Ctrl + Shift + M`
3. Konfirmasi "OK"
4. Halaman akan redirect ke maintenance
5. Untuk disable: Console → `MaintenanceMode.disable()`

## 🔍 Troubleshooting

**Maintenance tidak aktif?**

- Cek console untuk error
- Pastikan script loaded: `typeof MaintenanceMode`

**Shortcut tidak jalan?**

- Focus harus di halaman web
- Pastikan tidak ada modifier key lain

**Stuck di maintenance?**

- Console: `localStorage.removeItem('slemanmart_maintenance')`
- Atau: `MaintenanceMode.disable()`

---

## 💡 Keunggulan Basic Version

✅ **Ultra Simple** - Tidak ada kompleksitas berlebihan  
✅ **Fast Loading** - Minimal resources  
✅ **No Animation** - Tidak mengganggu, fokus informasi  
✅ **Pure Code** - Mudah dimodifikasi tanpa framework  
✅ **Reliable** - Sedikit yang bisa rusak  
✅ **Accessible** - Compatible dengan screen reader

**Perfect untuk yang butuh maintenance mode super simple dan reliable!** 🎯
