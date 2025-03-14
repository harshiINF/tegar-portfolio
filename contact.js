import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">Hubungi Saya</h2>
        <p className="text-center text-gray-300 mb-12">
          Jika Anda tertarik bekerja sama atau memiliki pertanyaan, silakan kirim pesan melalui form di bawah ini.
        </p>

        <form
          action="https://formsubmit.co/tegarsaputera098@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-purple-300">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-purple-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-purple-300">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Kirim Pesan
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Email: <a href="mailto:tegarsaputera098@gmail.com" className="text-purple-300 hover:underline">tegarsaputera098@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/harshiINF" target="_blank" className="text-purple-300 hover:underline">github.com/harshiINF</a></p>
        </div>
      </main>

      <Footer />
    </>
  );
}
