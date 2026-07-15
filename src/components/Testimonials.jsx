import { Star } from "lucide-react";

const reviews = [
  {
    name: "Revathi Krishnan",
    relation: "Daughter of client, Chennai",
    text: "Finding someone we trusted to stay with Amma at night was our biggest worry. The caregiver Vinayaka sent has been patient and genuinely caring — it changed things for our whole family.",
  },
  {
    name: "Senthil Kumar",
    relation: "Son of client, Coimbatore",
    text: "My father needed help after his surgery and we live abroad. The team kept us updated regularly and the caregiver handled his recovery with real skill and patience.",
  },
  {
    name: "Meena Rajagopal",
    relation: "Daughter-in-law, Madurai",
    text: "We switched caregivers once because of a scheduling clash, and it was handled quickly with no drama. That reliability is exactly what you want when it's an elderly parent involved.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Families like yours</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight">
            What families are saying
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white border border-charcoal/[0.06] p-7">
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-marigold text-marigold" />
                ))}
              </div>
              <p className="text-[15px] text-charcoal/75 leading-relaxed mb-5">"{r.text}"</p>
              <div>
                <p className="font-semibold text-pine-dark text-sm">{r.name}</p>
                <p className="text-sm text-charcoal/55">{r.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
