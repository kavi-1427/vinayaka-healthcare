import {
  Home, Clock, HeartHandshake, Pill, Activity, MessageCircle, UtensilsCrossed, Stethoscope, Brain,
} from "lucide-react";

const services = [
  { icon: Home, title: "24/7 Live-in Care", desc: "A caregiver stays at home round the clock, so someone is always there." },
  { icon: Clock, title: "Hourly / Part-time Care", desc: "Flexible visits for a few hours a day, built around your family's routine." },
  { icon: HeartHandshake, title: "Personal Care", desc: "Help with bathing, dressing, and daily hygiene, delivered with dignity." },
  { icon: Pill, title: "Medication Reminders", desc: "Timely reminders so doses are never missed or doubled up." },
  { icon: Activity, title: "Mobility & Physio Support", desc: "Safe movement, walking support, and guided physiotherapy exercises." },
  { icon: MessageCircle, title: "Companionship", desc: "Conversation, presence, and emotional support to ease loneliness." },
  { icon: UtensilsCrossed, title: "Meals & Housekeeping", desc: "Fresh meal prep and light housekeeping around the care routine." },
  { icon: Stethoscope, title: "Post-Surgery Recovery", desc: "Attentive support through recovery after a hospital stay or surgery." },
  { icon: Brain, title: "Dementia & Alzheimer's Care", desc: "Caregivers trained in patient, structured routines for memory care." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">What we offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight">
            Care built around how your family actually lives
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white border border-charcoal/[0.06] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sage mb-4">
                <Icon size={21} className="text-pine-dark" />
              </span>
              <h3 className="font-display font-semibold text-lg text-pine-dark mb-1.5">{title}</h3>
              <p className="text-[15px] text-charcoal/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
