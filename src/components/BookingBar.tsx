'use client';

import Link from 'next/link';

const BookingBar = () => {
  const whatsappNumber = "7579183761";

  const handleCheckAvailability = () => {
    const message = `Hi, I'd like to check availability at Badriville Resort. Please provide details about room availability and pricing.`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm z-40 border-t border-gray-100 py-4 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:flex items-center divide-x divide-gray-100 h-20">
          <div className="flex flex-col justify-center px-8 h-full">
            <span className="text-[10px] text-text-light uppercase tracking-widest mb-1">Check In</span>
            <span className="font-serif text-lg text-primary">Select Date</span>
          </div>
          <div className="flex flex-col justify-center px-8 h-full">
            <span className="text-[10px] text-text-light uppercase tracking-widest mb-1">Check Out</span>
            <span className="font-serif text-lg text-primary">Select Date</span>
          </div>
          <div className="flex flex-col justify-center px-8 h-full">
            <span className="text-[10px] text-text-light uppercase tracking-widest mb-1">Guests</span>
            <span className="font-serif text-lg text-primary">2 Adults</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-6 px-4 md:px-0">
          <div className="md:hidden flex flex-col">
             <span className="text-[10px] text-text-light uppercase tracking-widest">Book Your Stay</span>
             <span className="font-serif text-lg text-primary">Best Rate Guarantee</span>
          </div>
          <button 
            onClick={handleCheckAvailability}
            className="bg-primary text-white px-10 py-4 md:h-20 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors duration-300 w-auto"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
