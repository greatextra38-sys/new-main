import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: "url('/assets/img/slide_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-20">
        <h4 className="text-xs md:text-sm uppercase tracking-widest mb-8 text-white/90 font-medium">
          Welcome to Badriville
        </h4>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium mb-8 leading-none tracking-tight">
          Luxury in the <br/> <span className="italic font-light opacity-90">Himalayas</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 text-[10px] md:text-xs tracking-widest uppercase text-white/80 font-medium">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-white/40"></span>
            <span>Altitude 3,300 M</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-3">
            <span>Avg Temp 12°C</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-3">
            <span>Distance to Temple 1 KM</span>
            <span className="w-12 h-[1px] bg-white/40"></span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce duration-[2000ms]">
        <span className="text-white/60 text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
