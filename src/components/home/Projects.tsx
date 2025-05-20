import LinkButton from '../custom/LinkButton'
import { Tooltip } from '../ui/tooltip'
import { IProject, projects, techStackInfo } from './Projects.utils'

export default function Projects() {
	return (
		<section className="my-32">
			<h2 className="text-2xl text-muted-foreground">personal projects</h2>
			<div className="my-6 grid grid-cols-2 gap-8 lg:-mx-8">
				{projects?.map((project, idx) => (
					<ProjectItem key={idx} project={project} />
				))}
			</div>
		</section>
	)
}

function ProjectItem({ project }: { project: IProject }) {
	return (
		<div className="relative p-8 group/card">
			<div className="absolute h-full transition-all duration-200 ease-out opacity-0 scale-90 group-hover/card:scale-100 group-hover/card:opacity-100 w-full inset-0 -z-10 rounded-3xl bg-muted border"></div>

			<div className="grid grid-cols-1 gap-4">
				<figure>
					<img src={project.image} alt="" className="rounded-xl border" />
				</figure>

				<div className="py-3">
					<p className="text-2xl font-medium mb-2">{project.name}</p>
					<p className="mb-4 text-muted-foreground">{project.description}</p>

					<div className="flex-1 flex flex-col justify-end">
						<div className="flex items-center gap-4">
							{project?.techstack?.map((tech) => {
								const techInfo = techStackInfo[tech]
								return (
									<Tooltip key={techInfo.title} content={techInfo.title}>
										<a href={techInfo.link} target="_blank" rel="noreferrer">
											<techInfo.icon />
										</a>
									</Tooltip>
								)
							})}
						</div>

						<div className="flex gap-6 mt-6">
							{project.github ? (
								<LinkButton
									href={project.github}
									target="_blank"
									rel="noreferrer"
									text="GitHub"
								/>
							) : null}
							{project.site ? (
								<LinkButton
									href={project.site}
									target="_blank"
									rel="noreferrer"
									text="Visit Site"
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
