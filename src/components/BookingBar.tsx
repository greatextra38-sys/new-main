import Link from 'next/link';

const BookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-gray-100 py-4 px-4 md:py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="hidden md:flex items-center gap-8 text-sm">
          <div className="flex flex-col">
            <span className="text-xs text-text-light uppercase tracking-widest mb-1">Check In</span>
            <span className="font-serif text-lg text-primary border-b border-gray-200 pb-1">Select Date</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-text-light uppercase tracking-widest mb-1">Check Out</span>
            <span className="font-serif text-lg text-primary border-b border-gray-200 pb-1">Select Date</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-text-light uppercase tracking-widest mb-1">Guests</span>
            <span className="font-serif text-lg text-primary border-b border-gray-200 pb-1">2 Adults, 0 Children</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-6">
          <div className="md:hidden flex flex-col">
             <span className="text-xs text-text-light uppercase tracking-widest">Book Your Stay</span>
             <span className="font-serif text-lg text-primary">Best Rate Guarantee</span>
          </div>
          <Link 
            href="/booking" 
            className="bg-primary text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
