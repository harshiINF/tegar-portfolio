import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Tentang Saya</h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Saya adalah seorang <span className="text-white font-semibold">Frontend Developer</span> dengan pengalaman lebih dari <span className="text-white font-semibold">2 tahun</span> dalam mengembangkan aplikasi web yang skalabel dan user-friendly.
          Saya menguasai teknologi seperti <span className="text-purple-300 font-medium">React, JavaScript, Tailwind CSS, dan Node.js</span>, serta memiliki pemahaman kuat tentang prinsip desain responsif dan mobile-first.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Saya bersemangat mengeksplorasi teknologi baru dan selalu tertantang untuk menciptakan pengalaman pengguna yang optimal. Setiap proyek bagi saya adalah peluang untuk tumbuh, belajar, dan memberikan dampak nyata melalui web development.
        </p>

        <div className="mt-10 text-sm text-gray-400">
          <h3 className="text-purple-300 font-semibold mb-2">Keahlian Utama:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React & Next.js</li>
            <li>Tailwind CSS & Responsive Design</li>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>Integrasi API & Firebase</li>
            <li>Clean Code & Reusable Components</li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
