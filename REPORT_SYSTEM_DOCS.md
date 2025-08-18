# Fitur Melaporkan Masalah - Sleman Mart

## 📋 Overview

Fitur "Melaporkan Masalah" memungkinkan pelanggan untuk melaporkan berbagai masalah yang mereka alami saat berbelanja di Sleman Mart, mulai dari masalah pesanan, pembayaran, produk, hingga masalah teknis website.

## 🎯 Tujuan

- Memberikan channel komunikasi yang jelas antara pelanggan dan customer service
- Memastikan setiap masalah pelanggan tertangani dengan baik dan terdokumentasi
- Meningkatkan kepuasan pelanggan melalui penanganan masalah yang transparan
- Mengumpulkan feedback untuk perbaikan layanan secara berkelanjutan

## 🏗️ Arsitektur Sistem

### Halaman yang Dibuat:

1. **report-issue.html** - Form untuk melaporkan masalah baru
2. **report-status.html** - Dashboard untuk melihat status laporan

### Integrasi Navigation:

- Menu "Laporan Masalah" ditambahkan ke dropdown profil di:
  - products.html
  - profile.html
  - orders.html
  - Dan halaman lainnya

## 🔄 User Flow

### 1. Flow Melaporkan Masalah Baru

```
1. User login → Profile Dropdown → "Laporan Masalah"
2. User diarahkan ke report-status.html
3. User klik "Laporkan Masalah Baru" → report-issue.html
4. User mengisi form:
   - Kategori masalah (required)
   - Nomor pesanan (jika applicable)
   - Tingkat prioritas (required)
   - Judul masalah (required)
   - Deskripsi detail (required)
   - Langkah reproduksi (optional)
   - Upload lampiran (optional)
   - Pilih metode kontak preferensi
5. User submit form
6. Sistem generate nomor tiket
7. User mendapat konfirmasi + nomor tiket
8. Redirect ke halaman products.html
```

### 2. Flow Melihat Status Laporan

```
1. User login → Profile Dropdown → "Laporan Masalah"
2. User melihat daftar semua laporan dengan filter:
   - Status (Terbuka, Diproses, Menunggu, Selesai, Ditutup)
   - Kategori (Pesanan, Pembayaran, Produk, Pengiriman, dll)
   - Prioritas (Tinggi, Sedang, Rendah)
   - Pencarian (nomor tiket/judul)
3. User klik "Lihat Detail" untuk melihat detail laporan
4. User bisa menambah komentar atau feedback
```

### 3. Flow Detail Laporan

```
1. User klik "Lihat Detail" dari daftar laporan
2. Modal terbuka menampilkan:
   - Informasi dasar laporan
   - Deskripsi masalah lengkap
   - Timeline penanganan
   - Kontak person yang menangani
   - Lampiran file
   - Actions (komentar, notifikasi)
3. User bisa berinteraksi dengan customer service
```

## 🎨 Design System

### Color Scheme:

- **Primary**: #E57F39 (Orange Sleman Mart)
- **Success**: Green (laporan selesai)
- **Warning**: Yellow (sedang diproses)
- **Danger**: Red (prioritas tinggi)
- **Info**: Blue (menunggu respon)

### Icons:

- **Report**: `fas fa-exclamation-triangle`
- **Status**: `fas fa-clipboard-list`
- **Success**: `fas fa-check`
- **Processing**: `fas fa-clock`
- **Priority High**: `fas fa-exclamation-triangle text-red-600`
- **Attachment**: `fas fa-paperclip`

### Status Badges:

- **Terbuka**: Blue badge
- **Sedang Diproses**: Yellow badge
- **Menunggu Respon**: Blue badge
- **Selesai**: Green badge
- **Ditutup**: Gray badge

## 📊 Kategorisasi Masalah

### 1. Masalah Pesanan

- Pesanan tidak diterima
- Pesanan terlambat
- Pesanan salah
- Pembatalan pesanan

### 2. Masalah Pembayaran

- Pembayaran tidak terdeteksi
- Double charge
- Refund belum diterima
- Masalah metode pembayaran

### 3. Masalah Produk

- Produk tidak sesuai deskripsi
- Produk rusak/cacat
- Produk kadaluarsa
- Kemasan rusak

### 4. Masalah Pengiriman

- Barang tidak sampai
- Alamat pengiriman salah
- Biaya ongkir tidak sesuai
- Kurir bermasalah

### 5. Masalah Akun

- Tidak bisa login
- Lupa password
- Data profil bermasalah
- Masalah keamanan

### 6. Masalah Website/Aplikasi

- Bug/error di website
- Fitur tidak berfungsi
- Loading lambat
- Tampilan bermasalah

### 7. Lainnya

- Keluhan umum
- Saran perbaikan
- Masalah tidak terkategori

## 🚦 Level Prioritas

### Prioritas Tinggi (High)

- Masalah yang berdampak besar pada pelanggan
- Kehilangan uang/produk
- Masalah keamanan
- **Target Response**: 2 jam
- **Target Resolution**: 24 jam

### Prioritas Sedang (Medium)

- Masalah yang mengganggu pengalaman berbelanja
- Fitur tidak berfungsi dengan baik
- **Target Response**: 6 jam
- **Target Resolution**: 3 hari

### Prioritas Rendah (Low)

- Saran perbaikan
- Masalah minor
- Pertanyaan umum
- **Target Response**: 24 jam
- **Target Resolution**: 7 hari

## 📋 Validasi Form

### Field Required:

- Kategori masalah
- Tingkat prioritas
- Judul masalah (max 100 karakter)
- Deskripsi masalah (max 1000 karakter)

### Field Optional:

- Nomor pesanan (muncul untuk kategori tertentu)
- Langkah reproduksi (max 500 karakter)
- Lampiran file (max 5MB per file)
- Metode kontak preferensi

### File Upload:

- **Format**: JPG, PNG, PDF, DOC, DOCX
- **Size Limit**: 5MB per file
- **Multiple Files**: Yes
- **Drag & Drop**: Supported

## 🔧 Technical Features

### Form Features:

- **Real-time character counting**
- **Dynamic field visibility** (nomor pesanan muncul berdasarkan kategori)
- **File upload dengan preview**
- **Drag & drop file upload**
- **Form validation**
- **Loading state saat submit**

### Status Page Features:

- **Advanced filtering** (status, kategori, prioritas)
- **Search functionality**
- **Pagination**
- **Status badges dengan color coding**
- **Timeline tracking**
- **Comment system**
- **Rating/feedback system**

### Modal Features:

- **Responsive modal design**
- **Rich content display**
- **File attachment download**
- **Interactive timeline**
- **Contact information**
- **Action buttons**

## 🎯 Success Metrics

### Response Time:

- High Priority: < 2 hours
- Medium Priority: < 6 hours
- Low Priority: < 24 hours

### Resolution Time:

- High Priority: < 24 hours
- Medium Priority: < 3 days
- Low Priority: < 7 days

### Customer Satisfaction:

- Target: > 90% satisfied
- Metric: Rating after resolution
- Follow-up: Email survey

## 🔮 Future Enhancements

### Phase 2:

- **Live Chat Integration**
- **Email Notifications**
- **SMS Alerts untuk prioritas tinggi**
- **Auto-escalation berdasarkan SLA**

### Phase 3:

- **AI Chatbot untuk screening awal**
- **Knowledge Base integration**
- **Community Q&A**
- **Video call support**

### Phase 4:

- **Mobile App integration**
- **Push notifications**
- **Sentiment analysis**
- **Predictive issue detection**

## 📱 Responsive Design

### Desktop (>= 1024px):

- Full sidebar layout
- Grid-based form layout
- Modal dengan max-width optimal
- Hover effects dan transitions

### Tablet (768px - 1023px):

- Condensed sidebar
- Stacked form elements
- Responsive modal
- Touch-friendly buttons

### Mobile (< 768px):

- Single column layout
- Collapsible sections
- Full-screen modal
- Large touch targets
- Swipe gestures

## 🛡️ Security Considerations

### Data Privacy:

- Sensitive data encryption
- File upload virus scanning
- Personal information protection
- GDPR compliance

### Access Control:

- User authentication required
- Session management
- Rate limiting untuk form submission
- CSRF protection

### File Security:

- File type validation
- Size limit enforcement
- Malware scanning
- Secure file storage

## 📈 Analytics & Tracking

### Metrics to Track:

- Report submission rate
- Category distribution
- Resolution time by priority
- Customer satisfaction scores
- Agent performance
- Common issues trends

### Reports Generated:

- Daily issue summary
- Weekly trend analysis
- Monthly customer satisfaction
- Quarterly process improvement

## 🔄 Integration Points

### Existing Systems:

- **User Management**: Profile integration
- **Order System**: Link dengan nomor pesanan
- **Notification System**: Email/SMS alerts
- **File Storage**: Secure attachment handling

### External Services:

- **Email Service**: Automated notifications
- **SMS Gateway**: High priority alerts
- **Cloud Storage**: File attachments
- **Analytics**: Usage tracking

## 📞 Support Channels

### Primary:

- **Report Issue Form**: Main channel
- **Status Dashboard**: Self-service tracking

### Secondary:

- **Live Chat**: Real-time support
- **Phone**: Emergency hotline
- **Email**: Alternative contact
- **WhatsApp**: Popular messaging

### Emergency:

- **Hotline**: +62 274 123-4567
- **WhatsApp**: +62 812-3456-7890
- **Email**: support@slemanmart.com

---

## 🎉 Implementation Complete!

Fitur "Melaporkan Masalah" telah berhasil diimplementasikan dengan:
✅ **Form pelaporan yang komprehensif** dengan validasi lengkap
✅ **Dashboard status** dengan filtering dan search  
✅ **Modal detail** dengan timeline tracking
✅ **Responsive design** untuk semua device
✅ **Integrasi navigasi** di seluruh aplikasi
✅ **UX yang intuitif** dengan feedback yang jelas

Sistem ini siap digunakan dan dapat di-extend sesuai kebutuhan bisnis yang berkembang.
