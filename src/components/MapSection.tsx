const MapSection = () => {
  return (
    <section className="py-0">
      <div className="w-full h-[600px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Badriville%20Resort%20Nagini%20Hills%20Badrinath,%20near%20ISBT%20Badrinath,%20Joshimath,%20Uttarakhand%20246443+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 shadow-2xl max-w-md text-center hidden md:block">
          <h4 className="text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">Location</h4>
          <h3 className="text-3xl font-serif text-primary mb-6">Visit Us</h3>
          <p className="text-text-light mb-8 font-light leading-relaxed">Nagini Hills Badrinath, near ISBT Badrinath,<br/> Joshimath, Uttarakhand 246443</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary uppercase text-[10px] tracking-widest hover:text-accent transition-colors border-b border-primary/20 pb-1">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
