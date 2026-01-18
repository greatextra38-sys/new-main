import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: "url('/assets/img/slide_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <h4 className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-gray-200 animate-fade-in-up">
          Welcome to Badriville
        </h4>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight tracking-tight">
          Luxury in the <br/> <span className="italic font-light">Himalayas</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-xs md:text-sm tracking-widest uppercase text-gray-300 font-light">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/50"></span>
            <span>Altitude 3,300 M</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span>Avg Temp 12°C</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span>Distance to Temple 1 KM</span>
            <span className="w-8 h-[1px] bg-white/50"></span>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <span className="text-white/70 text-xs tracking-widest uppercase">Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
