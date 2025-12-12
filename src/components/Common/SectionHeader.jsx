export default function SectionHeader({ title, subtitle, align = 'left' }) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto"></div>
    </div>
  );
}