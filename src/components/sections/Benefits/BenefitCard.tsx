import { cn } from "@/lib/utils";
interface BenefitProps {
  benefit: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
  className?: string;
}

function BenefitCard({ benefit, className }: BenefitProps) {
  const getBorderColor = (color: string) => {
    switch (color) {
      case "amber":
        return "from-amber-500/70 to-amber-500/0";
      case "red":
        return "from-red-500/70 to-red-500/0";
      case "blue":
        return "from-blue-500/70 to-blue-500/0";
      case "purple":
        return "from-purple-500/70 to-purple-500/0";
      case "green":
        return "from-green-500/70 to-green-500/0";
      default:
        return "from-amber-500/70 to-amber-500/0";
    }
  };

  const getGlowColor = (color: string) => {
    switch (color) {
      case "amber":
        return "group-hover:shadow-amber-500/20";
      case "red":
        return "group-hover:shadow-red-500/20";
      case "blue":
        return "group-hover:shadow-blue-500/20";
      case "purple":
        return "group-hover:shadow-purple-500/20";
      default:
        return "group-hover:shadow-amber-500/20";
    }
  };

  return (
    <div className={`${className}`}>
      <div
        className={cn(
          "benefit-card group relative p-6 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-800",
          "transition-all duration-500 translate-y-8",
          "hover:translate-y-0 hover:shadow-lg",
          getGlowColor(benefit.color)
        )}
        style={{ animationDelay: `${benefit.id * 150}ms` }}
      >
        {/* Glowing border effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-lg group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-br",
            getBorderColor(benefit.color)
          )}
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "1px",
          }}
        ></div>

        {/* Comic burst behind icon */}
        <div className="absolute top-4 left-4 w-16 h-16 -z-10">
          <div
            className={cn(
              "absolute inset-0 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500",
              "bg-gradient-to-br",
              getBorderColor(benefit.color)
            )}
            style={{ opacity: 0.15 }}
          ></div>
        </div>

        <div className="relative z-10">
          <div className="mb-4 p-2 inline-block rounded-full">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-wide">
            {benefit.title}
          </h3>
          <p className="text-gray-300">{benefit.description}</p>
        </div>

        {/* Easter egg - tiny Marvel-related icon */}
        <div className="absolute bottom-3 right-3 opacity-20 text-xs">
          {benefit.id === 1 && "∞"}
          {benefit.id === 2 && "⍟"}
          {benefit.id === 3 && "⎊"}
          {benefit.id === 4 && "⚡"}
          {benefit.id === 5 && "★"}
        </div>
      </div>
    </div>
  );
}

export default BenefitCard;
