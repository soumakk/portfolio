"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import X from "../icons/X";
import { SocialLinks } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="relative w-full flex justify-center py-32">
      <div className="max-w-lg z-10 text-center flex flex-col items-center">
        <figure className="">
          <img
            src="/images/me.jpg"
            alt="It's me, Soumak"
            className="h-28 w-28 rounded-full"
          />
        </figure>

        <h1 className="text-5xl mb-6 mt-8 font-serif">
          Hey, I’m Soumak & welcome to my creative space
        </h1>

        <p className="leading-relaxed mb-12 font-light">
          I’m a passionate frontend developer loves building beautiful and
          engaging digital experiences. I&apos;m also fascinated by 3D
          technologies, exploring innovative ways to make the web more
          interactive.
        </p>

        <div className="flex gap-5 mb-6">
          <Link href={SocialLinks.Github} target="_blank">
            <GitHub
              className="fill-white hover:scale-110 transition-transform duration-200"
              size={32}
            />
          </Link>
          <Link href={SocialLinks.LinkedIn} target="_blank">
            <LinkedIn
              size={32}
              className="fill-white hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link href={SocialLinks.X} target="_blank">
            <X
              size={32}
              className="fill-white hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>

        <Link href="/resume.pdf" target="_blank">
          <Button
            variant="glass"
            className="rounded-full shadow-none"
            size="lg"
          >
            View Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
