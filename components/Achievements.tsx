import { MotionSection } from "@/components/MotionSection";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <MotionSection id="achievements" className="section-shell">
      <p className="section-kicker">Milestones</p>
      <h2 className="section-title">Achievements</h2>
      <div className="mt-10 grid gap-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <article key={achievement.title} className="grid gap-4 rounded-lg border border-line bg-white/[0.035] p-5 transition hover:border-teal-300/60 sm:grid-cols-[auto_1fr] sm:items-start">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-300/10 text-sky-200">
                <Icon size={22} />
              </span>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  <span className="w-fit rounded-full border border-line px-3 py-1 text-xs font-medium text-teal-200">{achievement.type}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{achievement.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
