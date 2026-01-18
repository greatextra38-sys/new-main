import Link from 'next/link';

const activities = [
  { title: "Village Tour", image: "/assets/img/activities/village_tour.jpg", icon: "icon-village" },
  { title: "Nature Camp", image: "/assets/img/activities/nature_camp.jpg", icon: "icon-camp" },
  { title: "Wildlife Safari", image: "/assets/img/activities/wildlife.jpg", icon: "icon-safari" },
  { title: "Trekking", image: "/assets/img/activities/trekking.jpg", icon: "icon-trekking" },
  { title: "Yoga Camp", image: "/assets/img/activities/yoga.jpg", icon: "icon-yoga" },
  { title: "Skiing", image: "/assets/img/activities/skiing.jpg", icon: "icon-skiing" },
];

const ActivityList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-accent uppercase tracking-widest text-sm mb-4">Discover</h4>
          <h2 className="text-4xl font-serif text-primary">Curated Experiences</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                {/* Fallback image if specific one doesn't exist, using a placeholder logic or just the path assuming it exists */}
                <div className="w-full h-full bg-gray-200 relative">
                    <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-2">{activity.title}</h3>
                <Link href="/services" className="text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block border-b border-white pb-1">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
