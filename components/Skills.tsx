import { MotionSection } from "@/components/MotionSection";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <MotionSection id="skills" className="section-shell">
      <p className="section-kicker">Technical Range</p>
      <h2 className="section-title">Skills</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <article key={category.title} className="rounded-lg border border-line bg-white/[0.035] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-300/10 text-teal-200">
                  <Icon size={21} />
                </span>
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-950/70 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
