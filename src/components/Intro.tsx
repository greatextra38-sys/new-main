import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center relative">
          
          {/* Image Section - Left aligned but pushed right on desktop */}
          <div className="w-full md:w-7/12 relative z-10 md:order-2 md:-ml-20">
            <div className="aspect-[4/5] md:aspect-[16/10] relative overflow-hidden shadow-2xl">
               <img 
                src="/assets/img/resort-bg.jpg" 
                alt="Badriville Resort Interior" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 border border-accent/30 hidden md:block -z-10"></div>
          </div>

          {/* Text Section - Overlapping or adjacent */}
          <div className="w-full md:w-5/12 mt-12 md:mt-0 md:order-1 md:pr-12 relative z-20">
            <div className="bg-white p-8 md:p-12 md:shadow-xl md:-mr-20">
              <h4 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">The Experience</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Swiss Heritage Meets <br/> <span className="italic text-accent">Himalayan Soul</span>
              </h2>
              <p className="text-text-light mb-6 leading-relaxed font-light text-sm md:text-base">
                Nestled in the majestic Himalayas, Badriville Resort offers a unique blend of traditional hospitality and modern luxury. Whether you seek spiritual solace or adrenaline-pumping adventure, our resort provides the perfect base for your journey.
              </p>
              <p className="text-text-light mb-10 leading-relaxed font-light text-sm md:text-base">
                From our cozy homestays to our premium resort rooms, every detail is designed to provide you with comfort and warmth amidst the snow-capped peaks.
              </p>
              <Link href="/about-us" className="group inline-flex items-center gap-2 text-primary uppercase text-xs tracking-widest hover:text-accent transition-colors">
                <span>Read Our Story</span>
                <span className="w-8 h-[1px] bg-primary group-hover:bg-accent transition-colors"></span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
