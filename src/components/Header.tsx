import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-white tracking-widest uppercase z-50 relative">
          Badriville
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-medium">Home</Link>
          <Link href="/about-us" className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-medium">About</Link>
          <Link href="/rooms" className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-medium">Stay</Link>
          <Link href="/services" className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-medium">Experience</Link>
          <Link href="/contact-us" className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-medium">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button className="text-white p-2 group">
            <div className="w-8 h-[1px] bg-white mb-2 group-hover:w-6 transition-all duration-300 ml-auto"></div>
            <div className="w-8 h-[1px] bg-white group-hover:w-4 transition-all duration-300 ml-auto"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
