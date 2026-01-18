import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-widest uppercase">
          Badriville
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-secondary transition-colors uppercase text-sm tracking-wider">Home</Link>
          <Link href="/about-us" className="text-white hover:text-secondary transition-colors uppercase text-sm tracking-wider">About Us</Link>
          <Link href="/rooms" className="text-white hover:text-secondary transition-colors uppercase text-sm tracking-wider">Rooms</Link>
          <Link href="/services" className="text-white hover:text-secondary transition-colors uppercase text-sm tracking-wider">Services</Link>
          <Link href="/contact-us" className="text-white hover:text-secondary transition-colors uppercase text-sm tracking-wider">Contact</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile Menu Icon Placeholder */}
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
