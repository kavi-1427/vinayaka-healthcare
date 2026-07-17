import { Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-sage">
      {/* ambient background shape */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-40 w-[560px] h-[560px] rounded-full bg-sage/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-32 w-[380px] h-[380px] rounded-full bg-marigold/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#CBEED5] px-4 py-1.5 mb-6">
            <span className="text-sm font-bold text-[#49885C] uppercase tracking-wider">Request a caregiver</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-pine-dark tracking-tight">
            Compassionate care,
            <br />
            right at home.
          </h1>

          <p className="mt-6 text-lg text-charcoal/75 max-w-lg leading-relaxed">
            We offer professional <strong>home healthcare</strong> and <strong>home nursing</strong> services.
            We send trained, background-verified caregivers to live with and look after your parents, providing
            compassionate <strong>patient care</strong>, comprehensive <strong>elderly care</strong>, and reliable <strong>24/7 home care</strong> through
            our trusted <strong>caregiver services</strong>.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#request"
              className="inline-flex justify-center items-center rounded-full bg-pine hover:bg-pine-dark text-ivory font-semibold px-7 py-3.5 text-[15px] transition-colors shadow-md"
            >
              Get a Free Consultation
            </a>
            <a
              href="tel:8050860837"
              className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-pine/25 hover:border-pine text-pine-dark font-semibold px-7 py-3.5 text-[15px] transition-colors"
            >
              <Phone size={17} /> 80508 60837
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <div>
              <p className="font-display text-2xl font-semibold text-pine-dark">24/7</p>
              <p className="text-sm text-charcoal/60">Live-in care available</p>
            </div>
            <div className="w-px h-9 bg-charcoal/10" />
            <div>
              <p className="font-display text-2xl font-semibold text-pine-dark">100%</p>
              <p className="text-sm text-charcoal/60">Background verified</p>
            </div>
            <div className="w-px h-9 bg-charcoal/10" />
            <div>
              <p className="font-display text-2xl font-semibold text-pine-dark">TN</p>
              <p className="text-sm text-charcoal/60">All districts covered</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl bg-sage aspect-[4/5] max-w-md mx-auto">
            <img
              src="/hero-caregiver.png"
              alt="A caregiver gently holding the hands of a smiling elderly woman at home"
              width="400"
              height="500"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-ivory rounded-2xl shadow-lg px-5 py-4 hidden sm:flex items-center gap-3 border border-charcoal/5">
            <span className="w-10 h-10 rounded-full bg-marigold/20 flex items-center justify-center">
              <ShieldCheck size={20} className="text-marigold-dark" />
            </span>
            <div>
              <p className="text-sm font-semibold text-pine-dark leading-tight">Replacement guarantee</p>
              <p className="text-xs text-charcoal/60">If it's not the right fit, we replace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
