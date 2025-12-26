'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Shield, Users, Award, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth">Kontak</a>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</Link>
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
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Budidaya Ayam Ras
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Pedaging</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                JOSIA PRANA TARIGAN
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mitra terpercaya dalam penyediaan ayam ras pedaging berkualitas tinggi. 
                Menggunakan teknologi modern dan standar kesehatan terbaik untuk menghasilkan 
                produk unggul yang memenuhi kebutuhan pasar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Hubungi Kami
                </button>
                <button className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image 
                      src="/assets/logo.png" 
                      alt="JOSIA PRANA TARIGAN Logo" 
                      width={120} 
                      height={120} 
                      className="object-contain"
                    />
                  </div>
                  <p className="text-2xl font-bold">Kualitas Terbaik</p>
                  <p className="text-lg">Ayam Ras Pedaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JOSIA PRANA TARIGAN adalah pemimpin dalam industri budidaya ayam ras pedaging 
              dengan komitmen terhadap kualitas dan keberlanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Standar kualitas tertinggi dalam setiap tahapan produksi, 
                dari pemilihan bibit hingga distribusi produk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tim Profesional</h3>
              <p className="text-gray-600">
                Didukung oleh tim ahli berpengalaman dalam bidang 
                peternakan dan manajemen kesehatan hewan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Terpercaya</h3>
              <p className="text-gray-600">
                Reputasi terbaik dalam industri dengan ribuan 
                pelanggan puas yang telah dilayani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan ayam ras pedaging berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Bibit Ayam Berkualitas",
              "Pakan Terstandar", 
              "Manajemen Kesehatan",
              "Teknik Budidaya Modern",
              "Konsultasi Ahli",
              "Distribusi Terpercaya"
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center mb-4">
                  <ChevronRight className="text-green-600 mr-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{service}</h3>
                </div>
                <p className="text-gray-600">
                  Layanan terbaik untuk mendukung kesuksesan bisnis peternakan Anda.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan ayam ras pedaging Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      DUSUN SERAPIT, Desa/Kelurahan Serapit<br />
                      Kec. Sirapit, Kab. Langkat<br />
                      Provinsi Sumatera Utara
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">085285703497</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">bismikakhatulistiwa@outlook.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none transition-all resize-none"
                    placeholder="Pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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