import PageHeader from "@/components/PageHeader";

const services = [
  { 
    title: "Village Tour", 
    description: "Explore the hidden gems of Badrinath's villages, meet the locals, and understand their way of life. Experience authentic mountain culture, traditional crafts, and local cuisine.", 
    image: "/assets/img/activities/village_tour.jpg",
    duration: "Half Day",
    difficulty: "Easy"
  },
  { 
    title: "Nature Camp", 
    description: "Stay close to nature in our secure and scenic camping sites. Bonfires, stargazing, and peace await. Includes camping equipment, meals, and guided nature walks.", 
    image: "/assets/img/activities/nature_camp.jpg",
    duration: "Overnight",
    difficulty: "Moderate"
  },
  { 
    title: "Wildlife Safari", 
    description: "Witness the diverse flora and fauna of the Himalayas. Keep an eye out for the elusive snow leopard, Himalayan bears, and rare bird species in their natural habitat.", 
    image: "/assets/img/activities/wildlife.jpg",
    duration: "Full Day",
    difficulty: "Moderate"
  },
  { 
    title: "Trekking", 
    description: "Guided treks for all difficulty levels. From gentle walks to challenging summits, we have it all. Expert guides, safety equipment, and stunning views guaranteed.", 
    image: "/assets/img/activities/trekking.jpg",
    duration: "Varies",
    difficulty: "All Levels"
  },
  { 
    title: "Yoga Camp", 
    description: "Rejuvenate your mind, body, and soul with yoga sessions amidst the serene mountains. Morning and evening sessions with certified instructors in peaceful natural settings.", 
    image: "/assets/img/activities/yoga.jpg",
    duration: "Daily Sessions",
    difficulty: "All Levels"
  },
  { 
    title: "Skiing", 
    description: "Experience the thrill of skiing on fresh powder snow during the winter months. Professional instructors available for beginners, and challenging slopes for experts.", 
    image: "/assets/img/activities/skiing.jpg",
    duration: "Half/Full Day",
    difficulty: "All Levels"
  },
  { 
    title: "Mountain Biking", 
    description: "Challenge yourself on rugged mountain trails with our top-quality mountain bikes. Explore remote valleys, ancient trails, and breathtaking landscapes on two wheels.", 
    image: "/assets/img/activities/trekking.jpg",
    duration: "Half/Full Day",
    difficulty: "Moderate-Hard"
  },
  { 
    title: "Spiritual Tour", 
    description: "Visit ancient temples and sacred sites with our knowledgeable guides. Learn about the rich spiritual heritage, participate in rituals, and experience divine tranquility.", 
    image: "/assets/img/activities/village_tour.jpg",
    duration: "Full Day",
    difficulty: "Easy"
  },
];

export default function Services() {
  const whatsappNumber = "7579183761";
  
  const handleInquiry = (serviceName: string) => {
    const message = `Hi, I'd like to inquire about ${serviceName} at Badriville Resort. Please provide more details.`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <PageHeader 
        title="Services & Activities" 
        subtitle="Curated Experiences for the Soul"
        image="/assets/img/activities/trekking.jpg"
      />
      
      {/* Introduction */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Adventures Await</h2>
            <p className="text-text-light leading-relaxed font-light text-lg">
              From spiritual journeys to adrenaline-pumping adventures, Badriville offers a diverse range of activities designed to help you explore, experience, and embrace the Himalayas. Our expert guides ensure safety and memorable experiences tailored to your interests and skill level.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-8 relative bg-gray-100">
                   <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0"
                    />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                  
                  <div className="flex justify-center gap-6 mb-8 text-[10px] uppercase tracking-widest text-text-light/80">
                    <div>
                      <span className="font-bold text-primary">Duration:</span> {service.duration}
                    </div>
                    <div>
                      <span className="font-bold text-primary">Level:</span> {service.difficulty}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleInquiry(service.title)}
                    className="text-accent text-[10px] uppercase tracking-widest hover:text-primary transition-colors border-b border-accent/30 pb-1 cursor-pointer"
                  >
                    Inquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Additional Services</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">More to Explore</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", title: "Local Shopping", desc: "Handicrafts & souvenirs" },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Guided Tours", desc: "Temple & cultural tours" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Photography", desc: "Professional photo tours" },
              { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "Cultural Programs", desc: "Local music & dance" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
                  <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.0} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-primary mb-2 text-xl">{item.title}</h3>
                <p className="text-sm text-text-light font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
