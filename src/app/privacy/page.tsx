'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
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
              <Link href="/privacy" className="text-green-600 font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-green-600 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Privacy Content */}
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
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              JOSIA PRANA TARIGAN - Budidaya Ayam Ras Pedaging
            </p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="mr-3 text-green-600" size={24} />
                Pendahuluan
              </h2>
              <p className="leading-relaxed">
                Selamat datang di kebijakan privasi JOSIA PRANA TARIGAN. Kami sangat memahami 
                pentingnya privasi dan keamanan data pribadi Anda. Dokumen ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                pribadi Anda saat menggunakan layanan budidaya ayam ras pedaging kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="mr-3 text-green-600" size={24} />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi bisnis/perusahaan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Transaksional</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Riwayat pembelian</li>
                    <li>Informasi pesanan</li>
                    <li>Preferensi produk</li>
                    <li>Data pengiriman</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Waktu akses</li>
                    <li>Data penggunaan website</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penggunaan Informasi</h2>
              <p className="mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menyediakan layanan budidaya ayam ras pedaging yang berkualitas</li>
                <li>Memproses pesanan dan transaksi bisnis</li>
                <li>Memberikan dukungan pelanggan yang responsif</li>
                <li>Mengirimkan informasi produk dan penawaran terkini</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-3 text-green-600" size={24} />
                Keamanan Data
              </h2>
              <p className="leading-relaxed">
                Kami berkomitmen untuk melindungi keamanan data pribadi Anda. Kami telah 
                mengimplementasikan berbagai langkah keamanan teknis dan organisasional untuk 
                mencegah akses tidak sah, penggunaan yang salah, atau kebocoran data. Semua 
                informasi pribadi disimpan dengan enkripsi dan akses terbatas kepada personel 
                yang berwenang.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam kondisi berikut:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi layanan yang Anda minta</li>
                <li>Sebagai bagian dari transaksi bisnis (dengan due diligence)</li>
                <li>Untuk mematuhi hukum atau peraturan yang berlaku</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              <p className="mb-4">Sebagai pengguna layanan kami, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookie</h2>
              <p className="leading-relaxed">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. 
                Cookie membantu kami mengingat preferensi Anda dan menganalisis traffic website. 
                Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi 
                fungsionalitas beberapa fitur website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan 
                akan diberitahukan melalui website atau email Anda. Kami menyarankan Anda 
                untuk secara berkala meninjau kebijakan ini untuk tetap mendapatkan informasi 
                terkini tentang praktik privasi kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="mb-4">Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi:</p>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">JOSIA PRANA TARIGAN</p>
                <p className="mb-1">📧 Email: bismikakhatulistiwa@outlook.co.id</p>
                <p className="mb-1">📞 Telepon: 085285703497</p>
                <p>📍 Alamat: DUSUN SERAPIT, Desa/Kelurahan Serapit, Kec. Sirapit, Kab. Langkat, Provinsi Sumatera Utara</p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-center text-gray-600">
                Kebijakan privasi ini berlaku efektif sejak tanggal 1 Januari 2024 dan 
                telah ditinjau terakhir pada tanggal tersebut.
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