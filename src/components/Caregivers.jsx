import { BadgeCheck } from "lucide-react";

const caregivers = [
  {
    name: "Lakshmi R.",
    years: "8 yrs experience",
    specialty: "Elderly & Post-surgery Care",
    langs: "Tamil, English",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Murugan S.",
    years: "6 yrs experience",
    specialty: "Mobility & Physio Support",
    langs: "Tamil, Telugu",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kavitha P.",
    years: "10 yrs experience",
    specialty: "Dementia & Alzheimer's Care",
    langs: "Tamil, English, Hindi",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anitha D.",
    years: "5 yrs experience",
    specialty: "Companionship & Daily Care",
    langs: "Tamil, English",
    img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a4c?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Caregivers() {
  return (
    <section id="caregivers" className="py-24 sm:py-28 bg-sage/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Meet the team</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight">
            Our caregivers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caregivers.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl overflow-hidden border border-charcoal/[0.06] hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name} — ${c.specialty} caregiver at Vinayaka Healthcare`}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="font-display font-semibold text-pine-dark text-lg">{c.name}</h3>
                  <BadgeCheck size={16} className="text-pine" />
                </div>
                <p className="text-sm text-charcoal/55 mb-2">{c.years}</p>
                <p className="text-[15px] font-medium text-charcoal/80 mb-1">{c.specialty}</p>
                <p className="text-sm text-charcoal/55">{c.langs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
