import { ShieldCheck, GraduationCap, CalendarClock, RefreshCcw, IndianRupee, PhoneCall } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Background verified", desc: "Every caregiver is police-verified and reference-checked before placement." },
  { icon: GraduationCap, title: "Trained & certified", desc: "Caregivers are trained in elderly, post-surgery, and dementia care." },
  { icon: CalendarClock, title: "Flexible scheduling", desc: "Hourly, daily, or full-time live-in — arranged around your family." },
  { icon: RefreshCcw, title: "Replacement guarantee", desc: "Not the right fit? We arrange a replacement caregiver, no fuss." },
  { icon: IndianRupee, title: "Transparent pricing", desc: "Clear packages with no hidden charges, agreed before care begins." },
  { icon: PhoneCall, title: "24/7 support helpline", desc: "Our team is reachable any time, day or night, for both of you." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Why families choose us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight">
            Trust matters more than anything, when it's family
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-pine flex items-center justify-center">
                <Icon size={20} className="text-marigold" />
              </span>
              <div>
                <h3 className="font-semibold text-pine-dark text-[17px] mb-1">{title}</h3>
                <p className="text-charcoal/65 text-[15px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
