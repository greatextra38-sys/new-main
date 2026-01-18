import PageHeader from "@/components/PageHeader";

const services = [
  { title: "Village Tour", description: "Explore the hidden gems of Badrinath's villages, meet the locals, and understand their way of life.", image: "/assets/img/activities/village_tour.jpg" },
  { title: "Nature Camp", description: "Stay close to nature in our secure and scenic camping sites. Bonfires, stargazing, and peace await.", image: "/assets/img/activities/nature_camp.jpg" },
  { title: "Wildlife Safari", description: "Witness the diverse flora and fauna of the Himalayas. Keep an eye out for the elusive snow leopard.", image: "/assets/img/activities/wildlife.jpg" },
  { title: "Trekking", description: "Guided treks for all difficulty levels. From gentle walks to challenging summits, we have it all.", image: "/assets/img/activities/trekking.jpg" },
  { title: "Yoga Camp", description: "Rejuvenate your mind, body, and soul with yoga sessions amidst the serene mountains.", image: "/assets/img/activities/yoga.jpg" },
  { title: "Skiing", description: "Experience the thrill of skiing on fresh powder snow during the winter months.", image: "/assets/img/activities/skiing.jpg" },
  { title: "Mountain Biking", description: "Challenge yourself on rugged mountain trails with our top-quality mountain bikes.", image: "/assets/img/activities/trekking.jpg" }, // Reusing image if specific one missing
  { title: "Spiritual Tour", description: "Visit ancient temples and sacred sites with our knowledgeable guides.", image: "/assets/img/activities/village_tour.jpg" }, // Reusing image
];

export default function Services() {
  return (
    <div>
      <PageHeader 
        title="Services & Activities" 
        subtitle="Curated Experiences for the Soul"
        image="/assets/img/activities/trekking.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                   <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <a href="/contact-us" className="text-accent text-xs uppercase tracking-widest hover:text-primary transition-colors border-b border-accent pb-1">
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
