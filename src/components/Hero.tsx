import logo from '../assets/logo/choreaid-logo.svg';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="ChoreAid logo" 
              className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Chore Aid</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl text-primary-100 max-w-3xl mx-auto text-balance">
            Yhdistämme vapaana olevat opiskelijat auttamaan kotitöissä tarvitsevia ihmisiä
          </p>
          <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
            Tehdään yhdessä yhteisö vahvemmaksi – yksi kotityö kerrallaan
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-900 bg-white rounded-lg shadow-lg hover:bg-primary-50 transition-all duration-200 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              Lue lisää
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-900/50 backdrop-blur-sm rounded-lg border-2 border-white/30 hover:bg-primary-900/70 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              Ota yhteyttä
            </a>
          </div>
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
  )
}

export default Hero
