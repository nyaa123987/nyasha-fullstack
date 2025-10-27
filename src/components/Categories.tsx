import H3 from './Heading3';
import P2 from './Paragraph2';

export default function Categories() {
  return (
    <main data-aos="fade-up" className="flex justify-between px-[3%] md:px-[10%] py-[20vh] md:pt-20 md:pb-40">
      <div>
        <H3>Next.js & React Expertise</H3>
        <P2>Building fullstack web apps with modern frameworks and best practices.</P2>
      </div>
      <div className='w-px bg-[white] mr-[3%]'></div>
      <div>
        <H3>Tailwind & UI Design</H3>
        <P2>Crafting responsive, visually appealing interfaces with clean code and consistency.</P2>
      </div>
      <div className='w-px bg-[white] mr-[3%]'></div>
      <div>
        <H3>APIs & Databases</H3>
        <P2>Integrating RESTful APIs and Supabase to build scalable, data-driven solutions.</P2>
      </div>
    </main>
  );
}
