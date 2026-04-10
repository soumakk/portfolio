import { SocialLinks } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

const email = "soumakkdutta@gmail.com";

export default function Contact() {
  return (
    <section className="my-40 max-w-4xl mx-auto" id="contact">
      <h2 className="font-serif text-3xl mb-4">
        Want to get in touch? Or just say Hi?
      </h2>
      <p>
        Drop me a line at <a href={`mailto:${email}`}>{email}</a>
      </p>

      <div className="flex items-center gap-5 mt-10 text-sm">
        {Object.keys(SocialLinks)?.map((social) => (
          <a
            href={SocialLinks[social]}
            className="flex items-center gap-1 group"
            key={social}
            target="_blank"
          >
            {social}
            <ArrowRight className="h-4 w-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-100" />
          </a>
        ))}
      </div>
    </section>
  );
}
