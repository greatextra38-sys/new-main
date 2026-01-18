import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <section className="py-32 md:py-48 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row relative">
          
          {/* Image Section */}
          <div className="w-full md:w-7/12 relative z-10">
            <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
               <img 
                src="/assets/img/resort-bg.jpg" 
                alt="Badriville Resort Interior" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-6/12 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-20 mt-12 md:mt-0 pl-0 md:pl-12">
            <div className="bg-white p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
              <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-8">The Experience</h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-[1.1]">
                Swiss Heritage <br/> <span className="italic text-accent/80">Himalayan Soul</span>
              </h2>
              <p className="text-text-light mb-8 leading-relaxed font-light text-sm md:text-[15px] max-w-md">
                Nestled in the majestic Himalayas, Badriville Resort offers a unique blend of traditional hospitality and modern luxury. Whether you seek spiritual solace or adrenaline-pumping adventure, our resort provides the perfect base for your journey.
              </p>
              <Link href="/about-us" className="group inline-flex items-center gap-3 text-primary uppercase text-[10px] tracking-widest hover:text-accent transition-colors">
                <span>Read Our Story</span>
                <span className="w-12 h-[1px] bg-primary group-hover:bg-accent transition-colors"></span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
