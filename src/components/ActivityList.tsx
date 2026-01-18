import Link from 'next/link';

const activities = [
  { title: "Village Tour", image: "/assets/img/activities/village_tour.jpg", description: "Explore local culture" },
  { title: "Nature Camp", image: "/assets/img/activities/nature_camp.jpg", description: "Sleep under the stars" },
  { title: "Wildlife Safari", image: "/assets/img/activities/wildlife.jpg", description: "Meet the inhabitants" },
  { title: "Trekking", image: "/assets/img/activities/trekking.jpg", description: "Conquer the peaks" },
  { title: "Yoga Camp", image: "/assets/img/activities/yoga.jpg", description: "Find inner peace" },
  { title: "Skiing", image: "/assets/img/activities/skiing.jpg", description: "Glide on snow" },
];

const ActivityList = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h4 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-4">Curated Experiences</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Adventures for the <br/> <span className="italic">Restless Soul</span>
            </h2>
          </div>
          <div className="hidden md:block mb-2">
            <Link href="/services" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
              View All Activities
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {activities.map((activity, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                <div className="w-full h-full bg-gray-200 relative">
                    <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div className="flex justify-between items-end border-b border-gray-300 pb-4 group-hover:border-accent transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-1">{activity.title}</h3>
                  <p className="text-xs text-text-light uppercase tracking-wider">{activity.description}</p>
                </div>
                <span className="text-accent opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
