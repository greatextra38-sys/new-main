const MapSection = () => {
  return (
    <section className="py-0">
      <div className="w-full h-[500px] bg-gray-200 relative">
        <iframe 
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Badriville%20Resort%20Nagini%20Hills%20Badrinath,%20near%20ISBT%20Badrinath,%20Joshimath,%20Uttarakhand%20246443+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-xl max-w-md text-center hidden md:block">
          <h3 className="text-2xl font-serif text-primary mb-4">Visit Us</h3>
          <p className="text-gray-600 mb-4">Nagini Hills Badrinath, near ISBT Badrinath,<br/> Joshimath, Uttarakhand 246443</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-accent uppercase text-sm tracking-widest hover:text-primary transition-colors">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
