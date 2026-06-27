import { Linkedin, Mail, Send } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  return (
    <MotionSection id="contact" className="section-shell">
      <p className="section-kicker">Get In Touch</p>
      <h2 className="section-title">Contact</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 rounded-lg border border-line bg-white/[0.035] p-5 text-slate-200 transition hover:border-teal-300/60">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-300/10 text-teal-200">
              <Mail size={20} />
            </span>
            <span>
              <span className="block text-sm text-slate-400">Email</span>
              <span className="break-all font-medium">{personalInfo.email}</span>
            </span>
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-lg border border-line bg-white/[0.035] p-5 text-slate-200 transition hover:border-teal-300/60">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sky-300/10 text-sky-200">
              <Linkedin size={20} />
            </span>
            <span>
              <span className="block text-sm text-slate-400">LinkedIn</span>
              <span className="font-medium">{personalInfo.linkedinLabel}</span>
            </span>
          </a>
        </div>
        <form className="rounded-lg border border-line bg-white/[0.035] p-5 sm:p-6">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-200">Name<input type="text" name="name" className="h-12 rounded-lg border border-line bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">Email<input type="email" name="email" className="h-12 rounded-lg border border-line bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300" placeholder="you@example.com" /></label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">Message<textarea name="message" rows={5} className="resize-none rounded-lg border border-line bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300" placeholder="Tell me about your project or idea" /></label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 sm:w-fit">Send Message<Send size={17} /></button>
          </div>
        </form>
      </div>
    </MotionSection>
  );
}
