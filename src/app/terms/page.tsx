'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, CheckCircle, AlertCircle, Gavel } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image 
                  src="/assets/logo-simple.png" 
                  alt="JOSIA PRANA TARIGAN Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-lg"
                />
                <span className="ml-3 text-xl font-bold text-gray-900">JOSIA PRANA TARIGAN</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-green-600 font-medium">Terms</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-green-600 font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              JOSIA PRANA TARIGAN - Budidaya Ayam Ras Pedaging
            </p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="mr-3 text-green-600" size={24} />
                Pendahuluan
              </h2>
              <p className="leading-relaxed">
                Selamat datang di JOSIA PRANA TARIGAN. Dokumen Syarat dan Ketentuan ini 
                mengatur penggunaan layanan budidaya ayam ras pedaging yang kami sediakan. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi semua syarat 
                dan ketentuan yang tercantum dalam dokumen ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-3 text-green-600" size={24} />
                Definisi
              </h2>
              <div className="space-y-2">
                <p><strong>"Perusahaan"</strong> merujuk pada JOSIA PRANA TARIGAN, penyedia layanan budidaya ayam ras pedaging.</p>
                <p><strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang menggunakan layanan kami.</p>
                <p><strong>"Layanan"</strong> merujuk pada semua produk dan jasa yang terkait dengan budidaya ayam ras pedaging.</p>
                <p><strong>"Produk"</strong> merujuk pada ayam ras pedaging, bibit, pakan, dan produk terkait lainnya.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
              <p className="mb-4">JOSIA PRANA TARIGAN menyediakan layanan berikut:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Penyediaan bibit ayam ras pedaging berkualitas</li>
                <li>Konsultasi teknis budidaya ayam</li>
                <li>Penjualan pakan ternak terstandar</li>
                <li>Manajemen kesehatan hewan ternak</li>
                <li>Distribusi produk ke pelanggan</li>
                <li>Support dan layanan purna jual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kewajiban Pelanggan</h2>
              <p className="mb-4">Sebagai pelanggan, Anda setuju untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Mematuhi panduan teknis yang kami berikan</li>
                <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                <li>Merawat dan memelihara produk sesuai standar</li>
                <li>Melaporkan masalah atau keluhan secara tertulis</li>
                <li>Tidak menyalahgunakan layanan untuk tujuan ilegal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kewajiban Perusahaan</h2>
              <p className="mb-4">Kami berkomitmen untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menyediakan produk berkualitas sesuai standar</li>
                <li>Memberikan informasi yang akurat tentang produk</li>
                <li>Memberikan dukungan teknis yang dibutuhkan</li>
                <li>Menghormati privasi dan data pelanggan</li>
                <li>Menangani keluhan dengan profesional</li>
                <li>Mematuhi semua peraturan yang berlaku</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="mr-3 text-green-600" size={24} />
                Harga dan Pembayaran
              </h2>
              <div className="space-y-3">
                <p>• Harga produk dapat berubah sewaktu-waktu sesuai kondisi pasar</p>
                <p>• Pembayaran harus dilakukan sesuai dengan kesepakatan yang ditetapkan</p>
                <p>• Pembayaran dapat dilakukan melalui transfer bank atau tunai</p>
                <p>• Keterlambatan pembayaran dapat dikenakan denda sesuai kebijakan</p>
                <p>• Semua transaksi akan didokumentasikan dengan bukti pembayaran</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Pengambilan</h2>
              <div className="space-y-3">
                <p>• Pengiriman produk akan dilakukan sesuai jadwal yang disepakati</p>
                <p>• Biaya pengiriman dapat ditanggung oleh pelanggan atau perusahaan</p>
                <p>• Pelanggan harus memeriksa kondisi produk saat diterima</p>
                <p>• Klaim kerusakan harus disampaikan maksimal 24 jam setelah penerimaan</p>
                <p>• Pengambilan langsung dapat dilakukan di lokasi kami</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi dan Retur</h2>
              <div className="space-y-3">
                <p>• Kami memberikan garansi kualitas untuk semua produk yang dijual</p>
                <p>• Produk yang tidak memenuhi standar dapat dikembalikan sesuai syarat</p>
                <p>• Garansi tidak berlaku untuk kesalahan penggunaan atau perawatan</p>
                <p>• Pengembalian produk harus disertai dengan bukti pembayaran</p>
                <p>• Keputusan garansi bersifat final dan mengikat</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="leading-relaxed">
                Semua konten, materi, dan informasi yang terdapat dalam layanan kami, 
                termasuk namun tidak terbatas pada teks, grafik, logo, dan software, 
                dilindungi oleh hak kekayaan intelektual dan tidak boleh digunakan 
                tanpa izin tertulis dari JOSIA PRANA TARIGAN.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <p className="leading-relaxed">
                JOSIA PRANA TARIGAN tidak bertanggung jawab atas kerugian langsung 
                atau tidak langsung yang timbul dari penggunaan layanan kami, kecuali 
                yang disebabkan oleh kelalaian berat atau kesengajaan dari pihak kami. 
                Tanggung jawab kami maksimal sebesar nilai transaksi yang terkait.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p className="leading-relaxed">
                Kami tidak bertanggung jawab atas keterlambatan atau kegagalan 
                pemenuhan kewajiban yang disebabkan oleh kejadian di luar kontrol 
                kami, termasuk namun tidak terbatas pada bencana alam, perang, 
                pemogokan, atau perubahan peraturan pemerintah.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="space-y-3">
                <p>• Sengketa akan diselesaikan secara musyawarah terlebih dahulu</p>
                <p>• Jika tidak ada kesepakatan, sengketa akan diselesaikan melalui mediasi</p>
                <p>• Sebagai upaya terakhir, sengketa dapat dibawa ke pengadilan</p>
                <p>• Hukum yang berlaku adalah hukum Republik Indonesia</p>
                <p>• Yurisdiksi adalah pengadilan di wilayah Kabupaten Langkat</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                Penggunaan layanan setelah perubahan dianggap sebagai persetujuan 
                terhadap syarat dan ketentuan yang baru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="mb-4">Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:</p>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">JOSIA PRANA TARIGAN</p>
                <p className="mb-1">📧 Email: bismikakhatulistiwa@outlook.co.id</p>
                <p className="mb-1">📞 Telepon: 085285703497</p>
                <p>📍 Alamat: DUSUN SERAPIT, Desa/Kelurahan Serapit, Kec. Sirapit, Kab. Langkat, Provinsi Sumatera Utara</p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-center text-gray-600 font-medium">
                Syarat dan ketentuan ini berlaku efektif sejak tanggal 1 Januari 2024 
                dan merupakan perjanjian yang mengikat antara Anda dan JOSIA PRANA TARIGAN.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/assets/logo-simple.png" 
                  alt="JOSIA PRANA TARIGAN Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-lg"
                />
                <span className="ml-3 text-xl font-bold">JOSIA PRANA TARIGAN</span>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya dalam budidaya ayam ras pedaging berkualitas tinggi.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bibit Ayam Berkualitas</li>
                <li>Konsultasi Teknis</li>
                <li>Distribusi Produk</li>
                <li>Support Pelanggan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085285703497</li>
                <li>bismikakhatulistiwa@outlook.co.id</li>
                <li>Dusun Serapit, Sirapit, Langkat</li>
                <li>Sumatera Utara</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JOSIA PRANA TARIGAN. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}