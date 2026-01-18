import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/slide_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Experience the <br/> <span className="italic font-light">Himalayan</span> Serenity
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide text-gray-200">
          Luxury accommodation and unforgettable adventures in the heart of Badrinath.
        </p>
        <Link 
          href="/rooms" 
          className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
        >
          View Rooms
        </Link>
      </div>
    </section>
  );
};

export default Hero;
