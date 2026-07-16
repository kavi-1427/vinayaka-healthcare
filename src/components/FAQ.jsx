import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How are your caregivers verified?",
    a: "Every caregiver goes through police verification, reference checks with previous families or employers, and an in-person interview before being trained and placed with a family.",
  },
  {
    q: "What if the caregiver isn't the right fit?",
    a: "Let us know and we'll arrange a replacement caregiver as quickly as possible, at no extra cost. Getting the right match matters more to us than filling a placement.",
  },
  {
    q: "Which areas in Tamil Nadu do you serve?",
    a: "We place caregivers all over Tamil Nadu, across districts including Chennai, Coimbatore, Madurai, Trichy, Salem, and beyond. Tell us your city when you request a caregiver.",
  },
  {
    q: "Is care available on short notice?",
    a: "In many cases, yes. Call us directly at 80508 60837 for urgent requirements, and we'll do our best to place a caregiver as soon as possible.",
  },
  {
    q: "Can we choose hourly care instead of full-time?",
    a: "Yes — we offer hourly, daily, and full-time live-in plans. You can also change plans later if your family's needs change.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-28 bg-sage/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="bg-white rounded-xl border border-charcoal/[0.06] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4.5 py-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-pine-dark text-[15px] sm:text-base">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-pine transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div id={`faq-answer-${i}`} className="px-5 sm:px-6 pb-5 text-charcoal/65 text-[15px] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
