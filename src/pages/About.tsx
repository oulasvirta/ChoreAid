import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    document.title = 'Tietoa meistä - Chore Aid';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
            aria-label="Palaa etusivulle"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Takaisin etusivulle
          </Link>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic mb-6">
              "For every Chore there is Aid"
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Jokaiseen askareeseen apua
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 sm:h-24 text-white"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.48,111.25,21.19,168.58,37.29,30.2,8.12,59,26.06,87.65,45.22,34.44,22.51,70.81,46.19,108.45,54,47.79,9.74,95.31-2.21,142.83-10.42,28.34-4.68,56.84-12.12,85.3-19.37V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Story & Mission Section */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tarinamme
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed mb-6">
                  ChoreAid syntyi Etu-Töölön lukion yrityskurssin innoittamana keväällä 2026. Neljä opiskelijaa - kolme tyttöä ja yksi poika - huomasi, että monilla ikäihmisillä olisi tarvetta apuun arkiaskareissa, samaan aikaan kun opiskelijat etsivät järkeviä tapoja ansaita lisätuloja.
                </p>
                <p className="leading-relaxed">
                  Näin syntyi idea palvelusta, joka yhdistää nämä kaksi ryhmää.
                </p>
              </div>

              {/* Placeholder for team image */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-500 text-sm">
                      ChoreAid-tiimi - neljä opiskelijaa yhteistyössä
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tavoitteemme
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    text: 'Yhdistämme opiskelijat ja kotitöihin tarvitsevat ihmiset'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Mahdollistamme opiskelijoille lisäansioita opiskelun ohella'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    ),
                    text: 'Helpotamme arkea niille, jotka tarvitsevat käytännön apua'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    text: 'Rakennamme vahvempaa ja auttavaisempaa yhteisöä'
                  }
                ].map((goal, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                      {goal.icon}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                      {goal.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Ota yhteyttä
              </h2>

              {/* Contact Form (Placeholder) */}
              <form className="space-y-6 mb-12">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 cursor-not-allowed"
                    placeholder="Nimesi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 cursor-not-allowed"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Viesti *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 cursor-not-allowed resize-none"
                    placeholder="Kirjoita viestisi tähän..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <p className="text-blue-800 text-sm">
                    Lomake otetaan käyttöön pian. Toistaiseksi voit tutustua palveluihimme ja palataan asiaan!
                  </p>
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed opacity-60"
                >
                  Lähetä viesti
                </button>
              </form>

              {/* Social Media Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Seuraa meitä
                </h3>
                <div className="flex justify-center gap-6">
                  <a
                    href="#instagram"
                    className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-all duration-300 group"
                    aria-label="Seuraa meitä Instagramissa"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-medium text-gray-700 group-hover:text-primary-600">Instagram</span>
                  </a>

                  <a
                    href="#facebook"
                    className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-all duration-300 group"
                    aria-label="Seuraa meitä Facebookissa"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-medium text-gray-700 group-hover:text-primary-600">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
