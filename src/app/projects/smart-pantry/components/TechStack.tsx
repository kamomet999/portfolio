import { motion } from "framer-motion";

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Google Gemini 2.5",
  "Framer Motion",
  "Vercel",
  "lucide-react",
  "Zod",
];

export const TechStack = () => {
  return (
    <section className="py-16 bg-navy-900 border-t border-navy-800 overflow-hidden">
      <div className="section-container mb-8 text-center">
        <h3 className="text-navy-400 text-sm font-semibold tracking-widest uppercase">
          最新技術スタック
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="mx-8 text-2xl font-bold text-navy-700 select-none group-hover:text-fresh-500 transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
        
        {/* Duplicate for infinite loop */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {technologies.map((tech) => (
            <div
              key={`${tech}-duplicate`}
              className="mx-8 text-2xl font-bold text-navy-700 select-none group-hover:text-fresh-500 transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};
