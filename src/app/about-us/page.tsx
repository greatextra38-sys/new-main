import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="A Legacy of Hospitality"
        image="/assets/img/resort-bg.jpg"
      />
      
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Our Story</h2>
            <p className="text-text-light leading-relaxed mb-8 font-light text-lg">
              Badriville Resort began with a simple vision: to provide a sanctuary for pilgrims and travelers seeking the divine beauty of Badrinath. What started as a humble homestay has grown into a premier resort, yet we have never lost touch with our roots.
            </p>
            <p className="text-text-light leading-relaxed font-light text-lg">
              Our architecture pays homage to the traditional Himalayan style, using local wood and stone to blend seamlessly with the environment. Every corner of Badriville tells a story of the mountains, the people, and the spiritual energy that permeates this sacred land.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-[4/5]">
               <img 
                  src="/assets/img/homestay-bg.jpg" 
                  alt="Traditional Architecture" 
                  className="object-cover w-full h-full shadow-2xl"
                />
            </div>
            <div>
              <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Philosophy</h4>
              <h3 className="text-4xl font-serif text-primary mb-6">The Experience</h3>
              <p className="text-text-light leading-relaxed mb-6 font-light">
                At Badriville, we believe that luxury is not just about amenities, but about the quality of experience. It is the warmth of a cup of herbal tea after a long trek, the comfort of a heated room while snow falls outside, and the genuine smile of our staff who treat you like family.
              </p>
              <p className="text-text-light leading-relaxed font-light">
                We invite you to slow down, breathe in the crisp mountain air, and reconnect with yourself in the lap of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Our Values</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
                <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.0} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Authentic Hospitality</h3>
              <p className="text-text-light text-sm leading-relaxed font-light">We treat every guest as family, ensuring personalized care and warm Himalayan hospitality.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
                <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.0} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Sustainability</h3>
              <p className="text-text-light text-sm leading-relaxed font-light">Committed to eco-friendly practices and preserving the pristine beauty of our mountains.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
                <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.0} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Excellence</h3>
              <p className="text-text-light text-sm leading-relaxed font-light">Dedicated to maintaining the highest standards in accommodation, service, and guest experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Our Team</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Meet the People Behind Badriville</h2>
            <p className="text-text-light leading-relaxed mb-16 font-light text-lg">
              Our dedicated team of local experts and hospitality professionals work tirelessly to ensure your stay is nothing short of extraordinary. From our experienced guides to our culinary experts, each member brings passion and expertise to create unforgettable moments.
            </p>
            <div className="flex flex-wrap justify-center gap-16">
              <div className="text-center">
                <div className="text-5xl font-serif text-accent mb-4">25+</div>
                <p className="text-[10px] text-text-light uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-accent mb-4">50+</div>
                <p className="text-[10px] text-text-light uppercase tracking-widest">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-accent mb-4">10K+</div>
                <p className="text-[10px] text-text-light uppercase tracking-widest">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
