import React from "react";

export default function About() {
  return (
    <section className="py-20 lg:py-40 lg:min-h-screen" id="about">
      <h2 className="text-4xl font-serif text-center mb-12">My Story</h2>
      <div className="max-w-md mx-auto leading-relaxed space-y-5">
        <p>
          I started my journey in college working with HTML, CSS, jQuery, and
          PHP, before diving deep into JavaScript and the React ecosystem.
          Through freelance work, I expanded into Node.js and gained valuable
          experience collaborating directly with clients and delivering
          real-world solutions.
        </p>

        <p>
          In my professional experience, I’ve worked on diverse projects,
          developing a strong understanding of UI/UX and learning how to balance
          visual design with seamless functionality.
        </p>

        <p>
          Lately, I’ve been exploring new challenges—experimenting with WebGL,
          3D experiences on the web, and learning 3D software Blender. I’m also
          using AI tools to improve my workflow and build more efficiently.
        </p>
      </div>
    </section>
  );
}
