'use client';

import PageHeader from "@/components/PageHeader";
import MapSection from "@/components/MapSection";
import { FormEvent } from "react";

export default function ContactUs() {
  const whatsappNumber = "7579183761";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const whatsappMessage = `*Contact Form Submission*\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd Love to Hear From You"
        image="/assets/img/contact-us.jpg"
      />
      
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Get in Touch</h4>
              <h2 className="text-4xl font-serif text-primary mb-8">Send us a Message</h2>
              <p className="text-text-light mb-12 font-light leading-relaxed">Have questions? We're here to help. Fill out the form below and we'll get back to you via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-text-light mb-3">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-light" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-text-light mb-3">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-light" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[10px] uppercase tracking-widest text-text-light mb-3">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-light" 
                    placeholder="Subject" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-text-light mb-3">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none font-light" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors duration-300">
                  Send via WhatsApp
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Information</h4>
              <h2 className="text-4xl font-serif text-primary mb-12">Contact Details</h2>
              
              <div className="space-y-12 mb-16">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">Address</h4>
                  <p className="text-text-light leading-relaxed font-light">
                    Badriville Resort<br/>
                    Nagini Hills Badrinath, near ISBT Badrinath,<br/>
                    Joshimath, Uttarakhand 246443
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">Phone</h4>
                    <a href={`tel:+91${whatsappNumber}`} className="text-text-light hover:text-primary transition-colors block font-light">+91 {whatsappNumber}</a>
                    <p className="text-text-light font-light">+91 098 765 4321</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">Email</h4>
                    <a href="mailto:info@badriville.com" className="text-text-light hover:text-primary transition-colors block font-light">info@badriville.com</a>
                    <a href="mailto:bookings@badriville.com" className="text-text-light hover:text-primary transition-colors block font-light">bookings@badriville.com</a>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-secondary p-10">
                <h3 className="text-2xl font-serif text-primary mb-4">Quick Contact</h3>
                <p className="text-text-light text-sm mb-8 font-light leading-relaxed">
                  For immediate assistance, reach us on WhatsApp. We respond within minutes during business hours.
                </p>
                <a 
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent('Hi! I need assistance with my booking at Badriville Resort.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-primary text-primary px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opening Hours */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-primary mb-12 text-center">Opening Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">Reception</h4>
                <p className="text-text-light font-light text-lg mb-2">Open 24 Hours</p>
                <p className="text-xs text-text-light/60 uppercase tracking-wider">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
              </div>
              <div className="text-center">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">Restaurant</h4>
                <p className="text-text-light font-light text-lg mb-2">7:00 AM - 10:00 PM</p>
                <p className="text-xs text-text-light/60 uppercase tracking-wider">Breakfast, Lunch & Dinner Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
