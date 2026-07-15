import { Check } from "lucide-react";

const plans = [
  {
    name: "Hourly",
    tagline: "For a few hours of help a day",
    features: ["4–6 hours per visit", "Personal care & companionship", "Flexible daily scheduling", "Choose your own timing"],
    highlight: false,
  },
  {
    name: "Daily",
    tagline: "A caregiver present through the day",
    features: ["Up to 12 hours a day", "Meals, mobility & medication support", "Consistent, familiar caregiver", "Weekly check-in call included"],
    highlight: true,
  },
  {
    name: "Full-time Live-in",
    tagline: "24/7 care, someone always home",
    features: ["Round-the-clock live-in caregiver", "Night support included", "Rotating relief caregiver option", "Priority replacement guarantee"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Plans</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight mb-3">
            Simple, transparent care plans
          </h2>
          <p className="text-charcoal/65">
            Exact pricing depends on care needs and location — we'll confirm it on your free consultation call.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.highlight
                  ? "bg-pine text-ivory border-pine shadow-lg lg:-translate-y-3"
                  : "bg-white border-charcoal/[0.06]"
              }`}
            >
              {p.highlight && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-marigold text-pine-dark px-3 py-1 rounded-full mb-4">
                  Most chosen
                </span>
              )}
              <h3 className={`font-display text-2xl font-semibold mb-1 ${p.highlight ? "text-ivory" : "text-pine-dark"}`}>
                {p.name}
              </h3>
              <p className={`text-sm mb-6 ${p.highlight ? "text-ivory/75" : "text-charcoal/60"}`}>{p.tagline}</p>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px]">
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${p.highlight ? "text-marigold" : "text-pine"}`} />
                    <span className={p.highlight ? "text-ivory/90" : "text-charcoal/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#request"
                className={`block text-center rounded-full font-semibold px-6 py-3 text-sm transition-colors ${
                  p.highlight
                    ? "bg-marigold hover:bg-marigold-dark text-pine-dark"
                    : "bg-sage hover:bg-sage-dark text-pine-dark"
                }`}
              >
                Ask about {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
