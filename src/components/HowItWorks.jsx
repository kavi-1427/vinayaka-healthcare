import DayOfCare from "./DayOfCare";

const steps = [
  { n: "1", title: "Tell us what's needed", desc: "Share your parent's age, condition, and the kind of help they need." },
  { n: "2", title: "We match a caregiver", desc: "We shortlist a verified, trained caregiver suited to that need." },
  { n: "3", title: "You meet & approve", desc: "You speak with the caregiver first — care only starts once you're comfortable." },
  { n: "4", title: "Care begins at home", desc: "The caregiver moves in or visits as agreed, with our team checking in regularly." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-28 bg-sage/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight mb-10">
            From first call to a caregiver at your door
          </h2>

          <ol className="space-y-7">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-pine text-ivory font-display font-semibold flex items-center justify-center text-sm">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold text-pine-dark text-lg mb-1">{s.title}</h3>
                  <p className="text-charcoal/65 text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="text-center text-sm font-semibold text-pine-dark/70 mb-4">A live-in day, hour by hour</p>
          <DayOfCare />
        </div>
      </div>
    </section>
  );
}
