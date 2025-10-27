import H2 from './Heading2';

export default function Skills() {
  const skills = ["React.js", "Next.js", "TypeScript", "HTML/CSS", "JavaScript", "Node.js", "Express.js", "Python", "PostgreSQL", "Supabase", "Vercel", "Git", "ChatGPT"];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-40">
      <H2 data-aos="fade-up">Skills & Tools</H2>
      <div data-aos="zoom-in" className="mt-4 md:mt-2 flex flex-wrap justify-center gap-4 md:gap-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-full bg-[#1d0b55] flex items-center justify-center md:font-semibold text-sm md:text-xl md:font-xl shadow-lg text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
