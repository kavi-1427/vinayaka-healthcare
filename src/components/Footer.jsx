const serviceLinks = [
  "24/7 Live-in Care", "Hourly Care", "Personal Care", "Dementia Care", "Post-Surgery Recovery",
];

export default function Footer() {
  return (
    <footer className="bg-pine-dark text-ivory/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-full bg-marigold flex items-center justify-center">
              <span className="font-display text-pine-dark text-lg font-semibold">V</span>
            </span>
            <span className="font-display font-semibold text-ivory text-lg">Vinayaka Healthcare</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Trained, verified caregivers for elderly care at home — serving families all over Tamil Nadu, 24/7.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-ivory mb-4 text-sm uppercase tracking-wide">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}><a href="#services" className="hover:text-marigold transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-ivory mb-4 text-sm uppercase tracking-wide">Quick links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#how-it-works" className="hover:text-marigold transition-colors">How It Works</a></li>
            <li><a href="#caregivers" className="hover:text-marigold transition-colors">Our Caregivers</a></li>
            <li><a href="#pricing" className="hover:text-marigold transition-colors">Pricing</a></li>
            <li><a href="#faq" className="hover:text-marigold transition-colors">FAQ</a></li>
            <li><a href="#request" className="hover:text-marigold transition-colors">Request a Caregiver</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-ivory mb-4 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="tel:8050860837" className="hover:text-marigold transition-colors">80508 60837</a></li>
            <li><a href="https://wa.me/918050860837" className="hover:text-marigold transition-colors">WhatsApp</a></li>
            <li>healthcare@gmail.com</li>
            <li>Serving all over Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-ivory/55">
        <p>© {new Date().getFullYear()} Vinayaka Healthcare. All rights reserved.</p>
        <p>Verified caregivers · Serving all districts of Tamil Nadu</p>
      </div>
    </footer>
  );
}
