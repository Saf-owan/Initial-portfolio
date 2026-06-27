import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import { MotionSection } from "@/components/MotionSection";
import { personalInfo } from "@/data/portfolio";

export function Intro() {
  return (
    <MotionSection id="introduction" className="section-shell flex min-h-[calc(100vh-72px)] items-center">
      <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="section-kicker">Personal Portfolio</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-teal-200 sm:text-2xl">{personalInfo.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{personalInfo.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200">
              View Projects
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:bg-white/[0.06]">
              Contact Me
              <Send size={17} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          <div className="rounded-[2rem] border border-line bg-white/[0.035] p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1117]">
              <Image src={personalInfo.photo} alt={`Portrait of ${personalInfo.name}`} fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover object-[50%_35%]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/88 via-slate-950/35 to-transparent p-6">
                <p className="text-sm font-medium text-teal-200">Software Engineer</p>
                <p className="mt-1 text-xl font-semibold text-white">{personalInfo.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
