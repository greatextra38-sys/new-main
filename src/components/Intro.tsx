import Image from 'next/image';

const Intro = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                 {/* Placeholder if image is missing, but we copied assets so it should be there. Using a generic one if specific not found */}
                 <img 
                  src="/assets/img/resort-bg.jpg" 
                  alt="Badriville Resort Interior" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-secondary/20 -z-10 hidden md:block"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-accent uppercase tracking-widest text-sm mb-4">Welcome to Badriville</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              A Sanctuary in the <br/> Mountains
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              Nestled in the majestic Himalayas, Badriville Resort offers a unique blend of traditional hospitality and modern luxury. Whether you seek spiritual solace or adrenaline-pumping adventure, our resort provides the perfect base for your journey.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              From our cozy homestays to our premium resort rooms, every detail is designed to provide you with comfort and warmth amidst the snow-capped peaks.
            </p>
            <a href="/about-us" className="text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider">
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
