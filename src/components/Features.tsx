import { Link } from 'react-router-dom';
import indoorWorkImg from '../assets/images/indoor-work-01.png';
import outdoorWorkImg from '../assets/images/outdoor-work-01.png';

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Yhteisövoima',
      description: 'Yhdistämme opiskelijat ja kotitöihin tarvitsevat ihmiset luomaan vahvan yhteisön.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Luotettava',
      description: 'Kaikki osapuolet voivat luottaa turvalliseen ja luotettavaan palveluun.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Joustava',
      description: 'Sovitaan ajoitukset ja tehtävät molempien osapuolten tarpeiden mukaan.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Yksinkertainen',
      description: 'Helppo käyttää ja selkeä prosessi molemmille osapuolille.',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Rekisteröidy',
      description: 'Opiskelijat ja apua tarvitsevat rekisteröityvät palveluun.',
    },
    {
      step: '2',
      title: 'Yhdistä',
      description: 'Löydä sopiva yhteistyökumppani alueellasi.',
    },
    {
      step: '3',
      title: 'Sovita',
      description: 'Sovitaan tehtävät, ajat ja ehdot yhdessä.',
    },
    {
      step: '4',
      title: 'Autetaan',
      description: 'Aloitetaan yhteistyö ja tehdään yhdessä yhteisö vahvemmaksi.',
    },
  ]

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Miksi Chore Aid?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Luomassa yhteisöä, jossa kaikki voivat saada apua ja antaa apua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Miten se toimii?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Neljä yksinkertaista vaihetta aloittamiseen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Esimerkkejä Töistä */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Esimerkkejä Töistä
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Autamme monenlaisissa kotitöissä – sisällä ja ulkona
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Indoor Work */}
            <Link 
              to="/sisatyot" 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              aria-label="Siirry sisätyöt-sivulle"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={indoorWorkImg}
                  alt="Opiskelijat tekemässä sisätöitä: siivousta, imurointia ja kotitöitä"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-6 border-t-4 border-primary-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Sisätyöt
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Siivousta, imurointia ja kotitöitä
                </p>
              </div>
            </Link>

            {/* Outdoor Work */}
            <Link 
              to="/ulkotyot" 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              aria-label="Siirry ulkotyöt-sivulle"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={outdoorWorkImg}
                  alt="Opiskelijat tekemässä ulkotöitä: puutarhatöitä, rengasvaihtoa ja lumenluontia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-6 border-t-4 border-primary-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Ulkotyöt
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Puutarhatöitä, rengasvaihtoa ja lumenluontia
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
