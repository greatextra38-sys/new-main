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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-xl">
            <h4 className="text-accent uppercase tracking-widest text-[10px] font-bold mb-6">Curated Experiences</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Adventures for the <br/> <span className="italic text-gray-400">Restless Soul</span>
            </h2>
          </div>
          <div className="hidden md:block mb-2">
            <Link href="/services" className="text-[10px] uppercase tracking-widest border-b border-primary/30 pb-2 hover:text-accent hover:border-accent transition-colors">
              View All Activities
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {activities.map((activity, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative bg-gray-100">
                <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300">{activity.title}</h3>
                <p className="text-[11px] text-text-light uppercase tracking-widest">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center md:hidden">
          <Link href="/services" className="text-[10px] uppercase tracking-widest border-b border-primary/30 pb-2 hover:text-accent hover:border-accent transition-colors">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
