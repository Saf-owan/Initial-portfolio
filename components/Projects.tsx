import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { externalLinks, projects } from "@/data/portfolio";

export function Projects() {
  const GithubIcon = externalLinks.githubIcon;

  return (
    <MotionSection id="projects" className="section-shell">
      <p className="section-kicker">Selected Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-lg border border-line bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:bg-white/[0.055]">
            <div className="relative aspect-[16/10] border-b border-line bg-slate-950">
              <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-line bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-slate-300 transition hover:border-teal-300 hover:text-white" aria-label={`${project.title} GitHub`}>
                  <GithubIcon size={18} />
                </a>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-teal-300 hover:text-white">
                    Live Demo
                    <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
