# Maintenance Mode - Sleman Mart

## 📋 Overview

Sistem maintenance mode untuk Sleman Mart yang memungkinkan admin untuk mengaktifkan/menonaktifkan mode maintenance dengan mudah dan memberikan informasi yang jelas kepada pengguna.

## ✨ Fitur

### Halaman Maintenance (`maintenance.html`)

- **Design Menarik**: Interface yang profesional dengan animasi smooth
- **Progress Bar**: Menampilkan progress perbaikan yang dinamis
- **Informasi Lengkap**:
  - Estimasi waktu selesai
  - Fitur yang sedang diperbaiki
  - Kontak customer service
  - Social media links
- **Auto Refresh**: Halaman otomatis refresh setiap 30 detik
- **Responsive**: Tampil sempurna di semua device

### Controller Script (`js/maintenance.js`)

- **Flexible Control**: Kontrol via localStorage atau server config
- **Admin Panel**: Hidden admin controls untuk testing
- **Auto Redirect**: Otomatis redirect ke maintenance page
- **Return URL**: Menyimpan halaman asal untuk redirect kembali

## 🚀 Cara Penggunaan

### 1. Aktivasi Manual (Admin Testing)

```javascript
// Metode 1: Keyboard shortcut
// Tekan: Ctrl + Shift + M

// Metode 2: URL parameter
// Buka: http://yoursite.com/?admin=maintenance

// Metode 3: Console
window.maintenanceMode.enableMaintenance();
```

### 2. Aktivasi via Server Config

Edit file `maintenance.json`:

```json
{
  "maintenance": true,
  "message": "Sleman Mart sedang dalam perbaikan sistem",
  "estimated_duration": "2 jam"
}
```

### 3. Aktivasi Programmatik

```javascript
// Enable maintenance
localStorage.setItem("slemanmart_maintenance", "true");
location.reload();

// Disable maintenance
localStorage.setItem("slemanmart_maintenance", "false");
location.reload();
```

## 📁 File Structure

```
slemart-ui/
├── maintenance.html          # Halaman maintenance mode
├── maintenance.json          # Konfigurasi server
├── js/
│   └── maintenance.js       # Controller script
└── index.html              # Updated dengan maintenance script
```

## ⚙️ Konfigurasi

### maintenance.json Options

```json
{
  "maintenance": false, // Status maintenance
  "message": "Custom message", // Pesan khusus
  "estimated_duration": "2 jam", // Estimasi waktu
  "start_time": "2025-09-14T10:00:00Z",
  "end_time": "2025-09-14T12:00:00Z",
  "allowed_ips": ["127.0.0.1"], // IP yang diizinkan akses
  "contact": {
    "whatsapp": "6281234567890",
    "email": "support@slemanmart.com",
    "phone": "+6281234567890"
  },
  "features_updating": [
    {
      "name": "Sistem Keranjang",
      "icon": "fas fa-shopping-cart",
      "status": "in_progress" // completed, pending, in_progress
    }
  ]
}
```

## 🎯 Admin Controls

### Hidden Admin Panel

1. **Keyboard Shortcut**: `Ctrl + Shift + M`
2. **URL Parameter**: `?admin=maintenance`
3. **Features**:
   - Enable/Disable maintenance
   - Real-time status monitoring
   - Quick toggle controls

### Admin Panel Controls

- **Enable Button**: Aktivasi maintenance mode
- **Disable Button**: Nonaktifkan maintenance mode
- **Close Button**: Tutup admin panel
- **Auto Close**: Panel otomatis tutup setelah 10 detik

## 🔄 Workflow

### Normal → Maintenance

1. Admin aktivasi maintenance mode
2. Script redirect semua user ke `maintenance.html`
3. Current URL disimpan untuk redirect balik
4. User melihat halaman maintenance dengan info lengkap

### Maintenance → Normal

1. Admin nonaktifkan maintenance mode
2. Script redirect user kembali ke halaman asal
3. Normal browsing experience restored

## 📱 Responsive Design

### Mobile Features

- Touch-friendly buttons
- Optimized animations
- Readable typography
- Proper spacing

### Desktop Features

- Hover effects
- Keyboard shortcuts
- Advanced animations
- Multi-column layouts

## 🎨 Customization

### Colors & Branding

```css
:root {
  --primary: #e57f39;
  --primary-dark: #d16a26;
}
```

### Animation Speed

```css
.progress-bar {
  animation: progress 3s ease-in-out infinite;
}
```

### Messages

Edit `maintenance.html` untuk custom messages atau gunakan `maintenance.json` untuk dynamic content.

## 🔧 Troubleshooting

### Issue: Maintenance mode tidak aktif

- Check localStorage: `localStorage.getItem('slemanmart_maintenance')`
- Check console untuk error messages
- Verify `maintenance.js` loaded properly

### Issue: Admin panel tidak muncul

- Pastikan keyboard shortcut benar: `Ctrl + Shift + M`
- Try URL parameter: `?admin=maintenance`
- Check browser console untuk errors

### Issue: Auto refresh tidak berfungsi

- Check JavaScript console untuk errors
- Verify `setTimeout` function di `maintenance.html`

## 📞 Support

Untuk pertanyaan atau bantuan:

- **WhatsApp**: +62 812-3456-7890
- **Email**: support@slemanmart.com
- **Documentation**: README.md

---

💡 **Pro Tip**: Gunakan admin panel untuk testing maintenance mode tanpa mengganggu user normal!
