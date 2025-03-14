import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Proyek Saya</h2>
        <p className="text-gray-300 text-center mb-12">
          Berikut adalah beberapa proyek terbaik yang pernah saya kerjakan. Setiap proyek mencerminkan
          keahlian saya dalam membangun aplikasi web modern, responsif, dan efisien.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Website Portofolio Pribadi
            </h3>
            <p className="text-gray-400 mb-3">
              Website ini dibangun menggunakan <strong className="text-white">React dan Tailwind CSS</strong>. Dirancang
              untuk menampilkan proyek-proyek saya secara menarik dan interaktif. Menggunakan <span className="text-white">Framer Motion</span>
              untuk animasi dan teknik <span className="text-white">code splitting</span> untuk performa optimal.
            </p>
            <a
              href="https://github.com/harshiINF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline"
            >
              Lihat Repository →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Aplikasi E-Commerce
            </h3>
            <p className="text-gray-400 mb-3">
              Aplikasi belanja online full-featured dengan React & Redux Toolkit untuk manajemen state kompleks.
              Terintegrasi dengan <span className="text-white">Firebase</span> untuk otentikasi dan database produk.
              Fokus pada user experience dan performa mobile-first.
            </p>
            <a
              href="https://github.com/harshiINF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline"
            >
              Lihat Repository →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
