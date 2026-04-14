"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IProject, projects } from "./Projects.utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  return (
    <section className="py-20 lg:py-24 max-w-6xl mx-auto" id="projects">
      <h2 className="text-4xl font-serif text-center mb-12">
        Carefully crafted projects
      </h2>

      <div className="w-full overflow-auto grid grid-cols-2 gap-8">
        {projects?.map((project, idx) => (
          <ProjectItem
            key={idx}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Dialog */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectItem({
  project,
  onClick,
}: {
  project: IProject;
  onClick: () => void;
}) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <figure className="relative rounded-2xl overflow-hidden h-[320px] group/card">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50">
          <div className="flex justify-between items-center px-8 py-5">
            <p className="font-serif text-2xl text-white">
              {project.title} {project.subtitle ? ` - ${project.subtitle}` : ""}
            </p>

            <div className="h-10 w-10 grid place-content-center bg-foreground rounded-full opacity-0 group-hover/card:opacity-100 translate-y-5 group-hover/card:translate-y-0 transition-all duration-200">
              <ArrowRight className="h-4 w-4 text-background -rotate-45" />
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: IProject;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={!!project}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {project && (
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {/* IMAGE */}
          <img src={project.image} className="w-full h-96 object-cover" />

          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif font-normal">
                {project.title}{" "}
                {project.subtitle ? ` - ${project.subtitle}` : ""}
              </DialogTitle>
            </DialogHeader>

            <p className="text-sm leading-relaxed mt-4 mb-6">
              {project.description}
            </p>

            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 group"
              >
                GitHub
                <ArrowRight className="h-4 w-4 -rotate-45 group-hover:translate-x-1 transition" />
              </a>

              <a
                href={project.site}
                target="_blank"
                className="flex items-center gap-2 group"
              >
                Live Site
                <ArrowRight className="h-4 w-4 -rotate-45 group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
