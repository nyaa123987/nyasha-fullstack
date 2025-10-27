"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import H1 from "../components/Heading1";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/mzzalaad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-[#11072e] to-[#1f0a5e] text-white px-3 md:px-8 py-20 relative">
        <section className="max-w-xl mx-auto text-center space-y-6">
          <H1 data-aos="fade-up">Contact Me</H1>
          <p data-aos="fade-up" className="text-lg opacity-90 py-[1.5vh]">
            Got a project or opportunity? Let&apos;s talk!
          </p>

          <form  data-aos="zoom-in"
            onSubmit={sendEmail}
            className="bg-transparent border rounded-xl p-6 space-y-4 text-left"
          >
            <h2 className="text-xl font-semibold border-b border-white/20 pb-2">
              Send Me a Message
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg resize-y min-h-[120px] bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className="cursor-pointer px-6 py-2 bg-white rounded shadow-lg text-[#7B1FEA] hover:bg-[#7B1FEA] hover:text-white transition active:opacity-[0.5]"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>

          <div data-aos="fade-up" className="bg-transparent border rounded-xl p-3 md:p-6 space-y-3 text-left">
            <h2 className="text-xl font-semibold border-b border-white/20 pb-2">
              Contact Details
            </h2>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazim07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                nyashazim07@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/nyasha-zimbudzana-10861834b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nyasha Zimbudzana
              </a>
            </p>
            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/nyaa123987"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/nyaa123987
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +263 78 310 6031 / +263 78 246 7216
              </a>
            </p>
          </div>
        </section>

        {success && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white text-center p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-green-600">
                Message sent!
              </h2>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
