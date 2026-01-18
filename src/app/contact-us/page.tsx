import PageHeader from "@/components/PageHeader";
import MapSection from "@/components/MapSection";

export default function ContactUs() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd Love to Hear From You"
        image="/assets/img/contact-us.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name</label>
                    <input type="text" id="name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                    <input type="email" id="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Badriville Resort<br/>
                    Nagini Hills Badrinath, near ISBT Badrinath,<br/>
                    Joshimath, Uttarakhand 246443
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Phone</h4>
                  <p className="text-gray-600">+91 123 456 7890</p>
                  <p className="text-gray-600">+91 098 765 4321</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Email</h4>
                  <p className="text-gray-600">info@badriville.com</p>
                  <p className="text-gray-600">bookings@badriville.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MapSection />
    </div>
  );
}
