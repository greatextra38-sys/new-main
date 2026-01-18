import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Badriville Resort</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the serenity of the Himalayas with luxury and comfort. Your perfect getaway in Badrinath.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about-us" className="hover:text-secondary">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-secondary">Accommodation</Link></li>
              <li><Link href="/services" className="hover:text-secondary">Services</Link></li>
              <li><Link href="/contact-us" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Nagini Hills Badrinath, near ISBT Badrinath, Joshimath, Uttarakhand 246443</p>
            <p className="text-gray-300 text-sm">Phone: +91 123 456 7890</p>
            <p className="text-gray-300 text-sm">Email: info@badriville.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Badriville Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
