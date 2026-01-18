interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader = ({ title, subtitle, image = "/assets/img/slide_hero.jpg" }: PageHeaderProps) => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 mt-16">
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm md:text-base font-light tracking-widest uppercase text-white/90">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
