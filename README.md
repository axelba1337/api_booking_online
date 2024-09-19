*Fitur: Booking Online*
Description
Fitur yang diperuntukkan bagi Pasien, dalam melakukan pendaftaran / booking online sesuai dengan data akun yang terdaftar pada mobile aplikasi. Selain itu pengguna juga dapat melakukan perubahan jadwal berobat atau reschedule jadwal dan pembatalan booking atau cancel

User Story
Sebagai Pasien, saya dapat melakukan booking pendaftaran melalui mobile aplikasi 
Sebagai Pasien, saya dapat melakukan perubahan atau reschedule  jadwal berobat
Sebagai Pasien, saya dapat melakukan pembatalan booking pendaftaran yang sebelumnya sudah dibuat

Acceptance Criteria
Booking online hanya berlaku untuk metode pembayaran Umum / Tunai
Data pasien secara default get sesuai dengan user yang terdaftar 
Jika >1 user terdaftar, akan muncul dropdown list pasien (1 user multi pasien)
Reschedule berlaku max di H-1 dari jadwal yang dipilih
Pembatalan booking pendaftaran akan merubah slot ketersediaan jadwal praktek dokter menjadi kembali available
Jadwal booking yang >jadwal kunjungan tidak di check in, otomatis akan berstatus cancel
Data poli diambil dari poli_id di jadwal_dokter (karena jika diambil dari location, tidak terfilter data lokasi yang berupa poli)

*Flow Booking Online*
1. Alur dimulai dari "start".

2. Keputusan pertama: "create booking?"
   - Jika tidak, alur berlanjut ke "reschedule?"
   - Jika ya, proses pembuatan booking dimulai:

3. Proses pembuatan booking:
   a. "pilih Faskes" (Pilih Fasilitas Kesehatan)
      - Catatan: "pilihan faskes yang muncul adalah faskes yang tersambung dengan ADAMLABS"
      - "pasien default yang terpilih sesuai user yang terdaftar di mobile apps"
   b. Jika terdapat lebih dari 1 pasien terdaftar, muncul dropdown list pasien
   c. "pilih Poli"
   d. "pilih Tanggal daftar"
   e. "pilih jadwal praktek Dokter"
   f. "konfirmasi pendaftaran"
   g. "simpan"
   h. "kode Booking" diberikan

4. Jika tidak membuat booking baru, keputusan kedua: "reschedule?"
   - Jika tidak, alur berlanjut ke "cancel?"
   - Jika ya, proses reschedule dimulai:

5. Proses reschedule:
   a. "pilih data booking"
   b. Cek: "tgl hari ini < tgl daftar / booking?"
      - Jika tidak, "data disable / tidak bisa di reschedule"
      - Jika ya, "klik data merubah jadwal atau tanggal"
   c. "simpan perubahan"

6. Jika tidak reschedule, keputusan ketiga: "cancel?"
   - Jika tidak, alur kembali ke awal (create booking?)
   - Jika ya, proses pembatalan dimulai:

7. Proses pembatalan:
   a. "pilih data booking"
   b. "klik batal untuk cancel booking"

8. Setelah selesai proses (booking baru, reschedule, atau cancel), alur kembali ke "kode Booking"

9. Alur berakhir di "end"

Rangkuman:
- Alur ini menggambarkan sistem manajemen booking untuk fasilitas kesehatan.
- Terdapat tiga fungsi utama: pembuatan booking baru, penjadwalan ulang (reschedule), dan pembatalan (cancel).
- Sistem terintegrasi dengan ADAMLABS untuk pemilihan fasilitas kesehatan.
- Ada pembatasan waktu untuk reschedule (harus sebelum tanggal booking).
- Sistem menyimpan data pasien dan memungkinkan pemilihan pasien jika ada lebih dari satu terdaftar.
- Proses booking melibatkan pemilihan fasilitas kesehatan, poli, tanggal, dan jadwal dokter.
- Setiap booking menghasilkan kode booking unik.
- Alur dirancang sebagai siklus, memungkinkan pengguna untuk melakukan beberapa aksi dalam satu sesi.

*Struktur Direktori*
/node_modules
/src
	/configurations
		sequalize-instance.js
	/controllers
		appointment-controller.js
	/errors
		notfound-404.js
        authorization-403.js
	/helpers
	/middlewares
		validateSchema.js
	/models
		appointment-model.js
	/repositories
		appointment-repository.js
	/responses
	/routes
		appointment-route.js
	/seeders
	/services
		appointment-service.js
	/utils
		epoch.js
	/validations
		appointment-validation.js
server.js
.env
package-lock.json
package.json

*Background*
Dengan meningkatkan perkembangan teknologi digital, ADAMEDS hadir untuk memenuhi kebutuhan fasilitas kesehatan agar akses masyarakat di bidang kesehatan semakin mudah. Selain dalam bentuk website, ADAMEDS hadir dalam bentuk aplikasi mobile.
Aplikasi mobile ini bertujuan untuk mempermudah pasien dalam melakukan pendaftaran pemeriksaan tanpa harus mengunjungi faskes secara langsung. Sehingga diharapkan dengan melakukan pendaftaran melalui aplikasi mobile, proses pelayanan pasien akan menjadi lebih cepat dan efektif. Dengan adanya mobile aplikasi, penumpukan antrian pendaftaran di faskes dapat berkurang dan  menyusut.

*Visi*
	Visi dari modul ini adalah dapat membantu dalam memberikan layanan yang cepat, tepat, dan efektif pada proses pendaftaran pasien, dalam menunjang proses booking pendaftaran pada faskes terkait. 

*Goals*
		Tujuan dari modul ini adalah : 
Meningkatkan efisiensi proses pendaftaran
Memudahkan booking jadwal dokter 
Monitoring ketersediaan jadwal praktek dokter

*Release*
Name  
	Mobile ADAMEDS V1

Date
		2024

*Milestone*
Identifikasi dan Analisa Kebutuhan : melakukan survey kepada user untuk mendapatkan kebutuhan dan gambaran kondisi umum yang biasa dilakukan. Yang kemudian dilakukan analisa pada kebutuhan tersebut.
Menyelesaikan Desain Produk : menentukan desain sistem dan mockup sesuai dengan tujuan yang ditentukan.
Memulai pengembangan : mulai melakukan pengembangan sesuai dengan kebutuhan yang dibuat
Proses Pengujian : dilakukan uji coba oleh tim QA untuk memastikan bahwa produk telah sesuai dengan perencanaan dan kebutuhan, serta tidak ada kendala penggunaan
Rilis produk : merilis produk ke user dan memastikan dapat berjalan dengan baik
Evaluasi produk : melakukan evaluasi pasca rilis apakah produk sudah sesuai harapan atau belum dan apa yang perlu diperbarui
Pembaruan produk : setelah mendapatkan feedback user maka dilakukan pembaruan produk dengan harapan dapat mencapai tujuan dan memenuhi kebutuhan user
Pemantauan produk : memantau dan mengukur tingkat keberhasilan dari tujuan yang telah ditentukan

*Release criteria*
Functionality
Secara fungsional, modul Mobile Appointment dapat berfungsi sebagai berikut :
Booking Pendaftaran
Monitoring ketersediaan jadwal praktek Dokter 

Usability 
Secara penggunaan, modul ini diharapkan dapat memudahkan dalam melakukan booking pendaftaran dan monitoring ketersediaan jam praktek dokter

Reliability (optional)
-

Performance and supportability (optional)
-

*Additional Notes*