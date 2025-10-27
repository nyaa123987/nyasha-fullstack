import H1 from '../components/Heading1';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-[#11072e] to-[#1f0a5e] text-white px-3 md:px-8 py-10 md:py-20">
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <H1 data-aos="fade-up">About Me</H1>
          <p data-aos="zoom-in" className="text-lg leading-relaxed pt-[2vh]">
            I am a passionate full-stack web developer currently studying at{" "}
            <Link
              href="https://uncommon.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Uncommon.org
            </Link>
            , where I continuously sharpen my skills and push my creative and technical limits. I thrive on learning by doing, building{" "}
            <Link href="/projects" className="underline underline-offset-4">
              projects
            </Link>{" "}
            that challenge me to think critically, design intuitively, and engineer efficient, scalable solutions. My experience spans both front-end and back-end development, working with tools like React, Next.js, Tailwind CSS, Node.js, and Supabase to create seamless, data-driven web applications.
            <br />
            <br />
            Alongside my core studies, I actively pursue online courses and earn{" "}
            <Link href="/certifications" className="underline underline-offset-4">
              certifications
            </Link>{" "}
            that reflect my commitment to growth and mastery of modern web technologies. I’m passionate about building user-focused interfaces, designing robust APIs, and deploying real-world applications that solve meaningful problems.
            <br />
            <br />
            I believe learning never stops, every line of code is an opportunity to improve. I’m always eager to explore new technologies, collaborate with like-minded innovators, and make a lasting impact through technology. If you’d like to work together or discuss how I can contribute to your team, feel free to{" "}
            <Link href="/contact" className="underline underline-offset-4">
              contact me
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
