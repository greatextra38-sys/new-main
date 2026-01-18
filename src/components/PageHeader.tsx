interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader = ({ title, subtitle, image = "/assets/img/slide_hero.jpg" }: PageHeaderProps) => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl font-light tracking-wide text-gray-200">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
