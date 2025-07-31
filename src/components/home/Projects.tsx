import { ArrowRight } from 'lucide-react'
import { IProject, projects } from './Projects.utils'

export default function Projects() {
	return (
		<section className="my-20 lg:my-32 max-w-4xl mx-auto" id="projects">
			<h2 className="text-4xl font-serif text-center">Carefully crafted projects</h2>
			<div className="w-full overflow-auto">
				{projects?.map((project, idx) => (
					<ProjectItem key={idx} project={project} />
				))}
			</div>
		</section>
	)
}

function ProjectItem({ project }: { project: IProject }) {
	return (
		<div className="relative py-24">
			<div className="grid grid-cols-2 mb-12">
				<div>
					<h3 className="font-serif text-2xl max-w-xs mx-auto">
						{project.title} - {project.subtitle}
					</h3>
				</div>

				<div className="text-sm max-w-sm">
					<p className="mb-8 leading-relaxed">{project.description}</p>

					<div className="flex items-center gap-6">
						<a
							href={project.github}
							target="_blank"
							className="flex items-center gap-1 group/link"
						>
							GitHub
							<ArrowRight className="h-4 w-4 -rotate-45 group-hover/link:translate-x-1 transition-transform duration-100" />
						</a>
						<a
							href={project.site}
							target="_blank"
							className="flex items-center gap-1 group/link"
						>
							Website
							<ArrowRight className="h-4 w-4 -rotate-45 group-hover/link:translate-x-1 transition-transform duration-100" />
						</a>
					</div>
				</div>
			</div>

			<figure className="relative rounded-2xl overflow-hidden group/card">
				<img
					src={project.image}
					alt=""
					className="w-full h-full object-cover"
					style={{ overflowClipMargin: 'unset' }}
				/>

				<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
					<div className="flex justify-between items-center px-8 py-5">
						<p className="font-serif text-2xl translate-y-6 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
							{project.title}
						</p>

						<a
							href={project.site}
							target="_blank"
							className="h-10 w-10 grid place-content-center bg-foreground rounded-full opacity-0 group-hover/card:opacity-100 translate-y-5 group-hover/card:translate-y-0 transition-all duration-200 ease-in"
						>
							<ArrowRight className="h-4 w-4 text-background -rotate-45" />
						</a>
					</div>
				</div>
			</figure>
		</div>
	)
}
