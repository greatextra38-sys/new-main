'use client';

import Link from 'next/link';
import PageHeader from "@/components/PageHeader";

const rooms = [
  {
    title: "Badri Resort",
    description: "Experience the pinnacle of luxury with our premium resort rooms. Featuring modern amenities, breathtaking views, and elegant interiors designed for your comfort.",
    image: "/assets/img/resort-bg.jpg",
    features: ["King Size Bed", "Mountain View", "Heated Rooms", "Room Service", "Attached Bathroom"],
    price: "₹5,000",
    priceText: "Starting from ₹5,000/night"
  },
  {
    title: "Badri Homestay",
    description: "Immerse yourself in the local culture with our cozy homestay options. Perfect for travelers seeking an authentic Himalayan experience with home-cooked meals.",
    image: "/assets/img/homestay-bg.jpg",
    features: ["Queen Size Bed", "Garden View", "Home Cooked Meals", "Shared Lounge", "Cultural Experience"],
    price: "₹2,500",
    priceText: "Starting from ₹2,500/night"
  }
];

export default function Rooms() {
  const whatsappNumber = "7579183761";

  const handleBooking = (roomTitle: string, roomPrice: string) => {
    const message = `Hi, I'd like to book ${roomTitle} at ${roomPrice}/night. Please confirm availability and provide booking details.`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <PageHeader 
        title="Accommodation" 
        subtitle="Your Home Away From Home"
        image="/assets/img/slide_hero.jpg"
      />
      
      {/* Introduction */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Choose Your Stay</h2>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Whether you seek luxury or an authentic local experience, our accommodations are designed to provide comfort, warmth, and unforgettable memories in the heart of the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-32">
            {rooms.map((room, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="md:w-1/2 w-full">
                  <div className="aspect-[3/2] relative overflow-hidden bg-gray-100">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Premium Accommodation</h4>
                  <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">{room.title}</h3>
                  <p className="text-text-light leading-relaxed mb-8 font-light">{room.description}</p>
                  
                  <div className="mb-10">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-6">Features</h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-text-light text-sm font-light">
                          <span className="w-1 h-1 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                    <div>
                      <span className="text-primary font-serif text-3xl">{room.price}</span>
                      <span className="text-text-light text-xs ml-2 uppercase tracking-wider">/ night</span>
                    </div>
                    <button 
                      onClick={() => handleBooking(room.title, room.price)}
                      className="bg-primary text-white px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                    >
                      Book on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Amenities</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", label: "Free Wi-Fi" },
              { icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z", label: "Room Heater" },
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", label: "Hot Water 24/7" },
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Housekeeping" },
              { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", label: "Laundry Service" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "24/7 Reception" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Secure Parking" },
              { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Library & Lounge" },
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.0} d={amenity.icon} />
                  </svg>
                </div>
                <p className="text-sm text-text-light uppercase tracking-wider">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto border border-gray-100 p-12">
            <h3 className="text-2xl font-serif text-primary mb-12 text-center">Booking Policies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="pt-8 md:pt-0">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Check-In</h4>
                <p className="text-text-light font-light">2:00 PM onwards</p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-12">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Check-Out</h4>
                <p className="text-text-light font-light">11:00 AM</p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-12">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Cancellation</h4>
                <p className="text-text-light font-light">Free up to 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
