import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const rooms = [
  {
    title: "Badri Resort",
    description: "Experience the pinnacle of luxury with our premium resort rooms. Featuring modern amenities, breathtaking views, and elegant interiors designed for your comfort.",
    image: "/assets/img/resort-bg.jpg",
    features: ["King Size Bed", "Mountain View", "Heated Rooms", "Room Service", "Attached Bathroom"],
    price: "Starting from ₹5,000/night"
  },
  {
    title: "Badri Homestay",
    description: "Immerse yourself in the local culture with our cozy homestay options. Perfect for travelers seeking an authentic Himalayan experience with home-cooked meals.",
    image: "/assets/img/homestay-bg.jpg",
    features: ["Queen Size Bed", "Garden View", "Home Cooked Meals", "Shared Lounge", "Cultural Experience"],
    price: "Starting from ₹2,500/night"
  }
];

export default function Rooms() {
  return (
    <div>
      <PageHeader 
        title="Accommodation" 
        subtitle="Your Home Away From Home"
        image="/assets/img/slide_hero.jpg"
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-20">
            {rooms.map((room, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="md:w-1/2 w-full">
                  <div className="aspect-[3/2] relative overflow-hidden shadow-xl">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <h3 className="text-3xl font-serif text-primary mb-4">{room.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{room.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <span className="text-primary font-serif text-xl">{room.price}</span>
                    <Link href="/contact-us" className="bg-primary text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
