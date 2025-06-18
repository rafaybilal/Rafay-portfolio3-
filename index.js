
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Podcast Thumbnail",
    image: "/public/IMG_20250616_154936.jpg",
  },
  {
    title: "Trip to Oman Thumbnail",
    image: "/public/IMG_20250616_154952.jpg",
  },
  {
    title: "India Vlog Thumbnail",
    image: "/public/IMG_20250616_155012.jpg",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-12 font-sans">
      <section className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4">Rafay Bilal</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Hi, I'm Rafay Bilal — a creative thumbnail designer who brings ideas to life through bold visuals. I help YouTubers and content creators stand out with eye-catching designs that boost views and engagement.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">
          My Work
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-auto"
                />
                <p className="mt-4 text-center text-gray-700 font-medium">
                  {project.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-600">Email: hanzalahkhattak302@gmail.com</p>
      </section>
    </main>
  );
}
