import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
          Selamat datang di Portofolio Saya!
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Saya seorang Frontend Developer yang berspesialisasi dalam membangun aplikasi web modern,
          responsif, dan interaktif menggunakan teknologi terkini seperti React dan Tailwind CSS.
          Jelajahi proyek-proyek terbaik saya dan temukan bagaimana saya bisa membantu mewujudkan ide-ide Anda.
        </p>
      </main>

      <Footer />
    </>
  );
}
