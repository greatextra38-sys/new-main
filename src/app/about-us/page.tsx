import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="A Legacy of Hospitality in the Himalayas"
        image="/assets/img/resort-bg.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Badriville Resort began with a simple vision: to provide a sanctuary for pilgrims and travelers seeking the divine beauty of Badrinath. What started as a humble homestay has grown into a premier resort, yet we have never lost touch with our roots.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our architecture pays homage to the traditional Himalayan style, using local wood and stone to blend seamlessly with the environment. Every corner of Badriville tells a story of the mountains, the people, and the spiritual energy that permeates this sacred land.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
               <img 
                  src="/assets/img/homestay-bg.jpg" 
                  alt="Traditional Architecture" 
                  className="object-cover w-full h-full rounded-sm shadow-lg"
                />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">The Experience</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Badriville, we believe that luxury is not just about amenities, but about the quality of experience. It is the warmth of a cup of herbal tea after a long trek, the comfort of a heated room while snow falls outside, and the genuine smile of our staff who treat you like family.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We invite you to slow down, breathe in the crisp mountain air, and reconnect with yourself in the lap of nature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
