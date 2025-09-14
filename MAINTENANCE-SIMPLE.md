# Maintenance Mode Sederhana - Sleman Mart

## 📄 File yang Dibuat

- `maintenance-simple.html` - Halaman maintenance sederhana
- `js/maintenance-simple.js` - Script controller maintenance

## 🚀 Cara Menggunakan

### 1. Aktivasi Maintenance Mode

```javascript
// Metode 1: Keyboard shortcut
// Tekan: Ctrl + Shift + M (akan muncul konfirmasi)

// Metode 2: Console browser
maintenanceMode.enable();

// Metode 3: Manual localStorage
localStorage.setItem("slemanmart_maintenance", "true");
location.reload();
```

### 2. Nonaktifkan Maintenance Mode

```javascript
// Metode 1: Console browser
maintenanceMode.disable();

// Metode 2: Manual localStorage
localStorage.setItem("slemanmart_maintenance", "false");
location.reload();
```

### 3. Cek Status

```javascript
// Cek apakah maintenance aktif
maintenanceMode.isActive(); // returns true/false
```

## ✨ Fitur Halaman Maintenance

### Design Sederhana

- Layout clean dan minimal
- Fokus pada informasi penting
- Responsive untuk semua device

### Informasi yang Ditampilkan

- Logo Sleman Mart
- Pesan "Sedang Perbaikan"
- Estimasi waktu selesai
- Tombol WhatsApp untuk bantuan
- Auto refresh setiap 2 menit

### Animasi Minimal

- Hover effect pada tombol
- Smooth transitions
- Tidak ada animasi berlebihan

## 🔧 Cara Kerja

1. **Script Check**: Setiap halaman dicek status maintenance
2. **Auto Redirect**: Jika maintenance aktif, redirect ke `maintenance-simple.html`
3. **Admin Control**: Admin bisa toggle dengan `Ctrl + Shift + M`
4. **Local Storage**: Status disimpan di browser localStorage

## 🎯 Testing

1. Buka website normal
2. Tekan `Ctrl + Shift + M`
3. Konfirmasi "OK" untuk aktivasi
4. Website akan redirect ke halaman maintenance
5. Untuk disable, buka console dan ketik: `maintenanceMode.disable()`

## 📱 Tampilan

### Desktop

- Card centered dengan shadow
- Ukuran optimal untuk readability
- Hover effects pada interactive elements

### Mobile

- Responsive layout
- Touch-friendly buttons
- Proper spacing dan typography

## ⚙️ Kustomisasi

### Ubah Pesan

Edit file `maintenance-simple.html` bagian:

```html
<p class="text-gray-600 mb-4">
  Website sedang dalam perbaikan untuk memberikan pelayanan yang lebih baik.
</p>
```

### Ubah Estimasi Waktu

```html
<p class="text-sm text-gray-500">
  Estimasi selesai: <strong>2 jam lagi</strong>
</p>
```

### Ubah Nomor WhatsApp

```html
<a href="https://wa.me/6281234567890" ...></a>
```

### Ubah Auto Refresh

```javascript
setTimeout(function () {
  location.reload();
}, 120000); // 120000 = 2 menit
```

## 🔍 Troubleshooting

**Q: Maintenance mode tidak aktif?**
A: Cek console browser, pastikan script loaded dengan benar

**Q: Tidak bisa disable maintenance?**
A: Gunakan console: `localStorage.removeItem('slemanmart_maintenance')`

**Q: Shortcut keyboard tidak berfungsi?**
A: Pastikan focus di halaman web, bukan di address bar

---

## 💡 Tips Penggunaan

1. **Testing**: Gunakan shortcut `Ctrl + Shift + M` untuk testing cepat
2. **Production**: Set maintenance via console atau localStorage
3. **Monitoring**: Cek status dengan `maintenanceMode.isActive()`
4. **Recovery**: Jika stuck, hapus localStorage dan refresh

**Maintenance mode sederhana ini cocok untuk website yang butuh kontrol maintenance cepat tanpa kompleksitas berlebihan!** 🚀
