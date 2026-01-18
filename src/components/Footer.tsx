import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-widest uppercase block mb-6">
              Badriville
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              A sanctuary in the Himalayas where luxury meets serenity. Experience the divine beauty of Badrinath with us.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li><Link href="/about-us" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/rooms" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li>Nagini Hills Badrinath,<br/> Joshimath, Uttarakhand 246443</li>
              <li><a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a></li>
              <li><a href="mailto:info@badriville.com" className="hover:text-white transition-colors">info@badriville.com</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 font-light">Subscribe for exclusive offers and updates.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-500"
              />
              <button className="text-xs uppercase tracking-widest text-white hover:text-accent transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Badriville Resort. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
