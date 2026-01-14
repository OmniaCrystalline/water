import { FaPhone } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background with water effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url(/background.png)]"
      ></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-transparent to-transparent'></div>
      <div className='absolute bg-[url(/plumber.png)] right-0 bottom-0 w-full md:w-1/2 h-full bg-contain bg-no-repeat bg-bottom' style={{ backgroundPosition: 'right bottom' }}></div>


      <div className="backdrop-blur-sm md:backdrop-blur-none relative max-w-7xl w-full mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 gap-3 grid animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl text-center lg:text-7xl font-barlow leading-tight bold text-bold animate-slide-in-left">
            Reliable Plumbing Services
          </h1>
          <div className='bg-gradient-to-r from-blue-800 via-blue-300 to-blue-800 opacity-50 w-full h-1 rounded-full animate-fade-in'></div>
          <p className="text-xl md:text-2xl text-blue-200 leading-relaxed text-center font-barlow pb-4 animate-fade-in-up delay-200">
            Your Trusted Local Plumber
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row mt-8 rounded-lg overflow-hidden mx-auto  animate-fade-in-up delay-300">
            <button
              className="bg-[url(/request.png)] w-60 h-16 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 cursor-pointer">
            </button>
            <button className="bg-[url(/call.png)] w-60 h-16 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 cursor-pointer">
            </button>
          </div>
        </div>

        {/* Right side - Plumber image */}
        <div className="flex-1 relative">

          {/* Decorative blurred background images */}
          <div className="absolute -right-20 -top-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-20 -bottom-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section >
  );
}

export default Hero;
