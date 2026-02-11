import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import outdoorWorkImg from '../assets/images/outdoor-work-01.png';

function OutdoorWork() {
  useEffect(() => {
    document.title = 'Ulkotyöt - Chore Aid';
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
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Takaisin etusivulle
          </Link>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ulkotyöt
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto">
              Autamme pihatöissä, huollossa ja muissa ulkona tehtävissä töissä
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

      {/* Content Section */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Image showcase */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={outdoorWorkImg}
                alt="Opiskelijat tekemässä ulkotöitä"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Work types */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mitä ulkotyöt sisältävät?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Autamme monenlaisissa pihassa ja ulkona tehtävissä töissä. Opiskelijamme ovat valmiita auttamaan sinua ulkotöissä.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: '🌱', title: 'Puutarhatyöt', desc: 'Nurmikonleikkuu, kitkeminen, kasvien hoito' },
                  { icon: '🚗', title: 'Rengasvaihto', desc: 'Kesä- ja talvirenkaiden vaihto' },
                  { icon: '❄️', title: 'Lumenluonti', desc: 'Pihojen ja käytävien lumenluonti' },
                  { icon: '🧰', title: 'Yleiset pihatyöt', desc: 'Erilaiset piha-alueen ylläpitotyöt' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Job listings placeholder */}
            <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Työtehtävät
              </h2>
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full text-primary-600 mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tulossa pian!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Työskentelemme parhaillaan työtehtävien listausjärjestelmän parissa. 
                  Palaa pian takaisin nähdäksesi saatavilla olevat ulkotyötehtävät.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-primary-600 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Kiinnostuiko ulkotyöt?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Olitpa avun tarvitsija tai työnhakija, olemme täällä sinua varten!
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-900 bg-white rounded-lg shadow-lg hover:bg-primary-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Tutustu muihin palveluihin
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OutdoorWork;
