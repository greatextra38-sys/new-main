import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-white tracking-widest uppercase z-50">
          Badriville
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-white/90 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">Home</Link>
          <Link href="/about-us" className="text-white/90 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">About</Link>
          <Link href="/rooms" className="text-white/90 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">Stay</Link>
          <Link href="/services" className="text-white/90 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">Experience</Link>
          <Link href="/contact-us" className="text-white/90 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">Contact</Link>
        </nav>

        {/* Language / Action */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-white/80 text-xs uppercase tracking-widest cursor-pointer hover:text-white">EN</span>
          <Link href="/booking" className="border border-white/30 px-6 py-2 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button className="text-white p-2">
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-4 h-0.5 bg-white ml-auto"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
