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
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Have questions? We're here to help. Fill out the form below and we'll get back to you via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" 
                    placeholder="Subject" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                  Send via WhatsApp
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
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
                  <a href={`tel:+91${whatsappNumber}`} className="text-gray-600 hover:text-primary transition-colors block">+91 {whatsappNumber}</a>
                  <p className="text-gray-600">+91 098 765 4321</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">WhatsApp</h4>
                  <a 
                    href={`https://wa.me/91${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors block"
                  >
                    +91 {whatsappNumber}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Available 24/7 for instant support</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Email</h4>
                  <a href="mailto:info@badriville.com" className="text-gray-600 hover:text-primary transition-colors block">info@badriville.com</a>
                  <a href="mailto:bookings@badriville.com" className="text-gray-600 hover:text-primary transition-colors block">bookings@badriville.com</a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-secondary p-8 rounded-sm">
                <h3 className="text-xl font-serif text-primary mb-4">Quick Contact</h3>
                <p className="text-gray-600 text-sm mb-6">
                  For immediate assistance, reach us on WhatsApp. We respond within minutes during business hours.
                </p>
                <a 
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent('Hi! I need assistance with my booking at Badriville Resort.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opening Hours */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif text-primary mb-8 text-center">Opening Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Reception</h4>
                <p className="text-gray-600">Open 24 Hours</p>
                <p className="text-xs text-gray-500 mt-1">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Restaurant</h4>
                <p className="text-gray-600">7:00 AM - 10:00 PM</p>
                <p className="text-xs text-gray-500 mt-1">Breakfast, Lunch & Dinner Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
