import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold text-marigold-dark tracking-wide uppercase mb-3">Contact us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pine-dark tracking-tight mb-8">
            We're here, any time you need us
          </h2>

          <div className="space-y-5">
            <a href="tel:8050860837" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage-dark transition-colors shrink-0">
                <Phone size={22} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">Call us</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">80508 60837</p>
              </div>
            </a>

            <a href="https://wa.me/918050860837" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage-dark transition-colors shrink-0">
                <MessageCircle size={22} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">WhatsApp</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">80508 60837</p>
              </div>
            </a>

            <a href="mailto:healthcare@gmail.com" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm text-charcoal/55">Email</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">healthcare@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm text-charcoal/55">Coverage area</p>
                <p className="font-semibold text-pine-dark text-lg">Serving all over Tamil Nadu</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-charcoal/55 bg-sage/40 rounded-xl px-5 py-4">
            For an urgent care requirement, please call us directly rather than using the form below.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-charcoal/[0.06] min-h-[320px] bg-sage/40 flex items-center justify-center">
          <div className="text-center px-8">
            <MapPin size={32} className="text-pine mx-auto mb-3" />
            <p className="font-semibold text-pine-dark">Serving families across Tamil Nadu</p>
            <p className="text-sm text-charcoal/55 mt-1">Chennai · Coimbatore · Madurai · Trichy · Salem &amp; beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
}
