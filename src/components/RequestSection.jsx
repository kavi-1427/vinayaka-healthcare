import RequestForm from "./RequestForm";

export default function RequestSection() {
  return (
    <section id="request" className="py-24 sm:py-28 bg-sage/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Get started</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight mb-3">
            Request a caregiver
          </h2>
          <p className="text-charcoal/65">
            Tell us a little about your family's needs. We'll call you back to talk it through — no obligation.
          </p>
        </div>
        <RequestForm />
      </div>
    </section>
  );
}
