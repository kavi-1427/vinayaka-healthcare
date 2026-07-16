import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

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
            <a
              href="tel:8050860837"
              className="flex items-center gap-4 group"
              aria-label="Call Vinayaka Healthcare at 80508 60837"
            >
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage-dark transition-colors shrink-0">
                <Phone size={22} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">Call us</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">80508 60837</p>
              </div>
            </a>

            <a
              href="https://wa.me/918050860837"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
              aria-label="Chat with Vinayaka Healthcare on WhatsApp"
            >
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage-dark transition-colors shrink-0">
                <MessageCircle size={22} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">WhatsApp</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">80508 60837</p>
              </div>
            </a>

            <a
              href="mailto:healthcare@gmail.com"
              className="flex items-center gap-4 group"
              aria-label="Email Vinayaka Healthcare at healthcare@gmail.com"
            >
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage-dark transition-colors shrink-0">
                <Mail size={20} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">Email</p>
                <p className="font-semibold text-pine-dark text-lg group-hover:underline">healthcare@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0">
                <Clock size={20} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">Business Hours</p>
                <p className="font-semibold text-pine-dark text-lg">24/7 Hours Available</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-pine-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide">Office Address</p>
                <p className="font-semibold text-pine-dark text-lg">12, Main Road, T. Nagar, Chennai, Tamil Nadu - 600017</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-charcoal/55 bg-sage/40 rounded-xl px-5 py-4">
            For an urgent care requirement, please call us directly rather than using the form.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl p-6 border border-charcoal/[0.06] bg-white flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-pine-dark" />
            </span>
            <div>
              <p className="font-semibold text-pine-dark">Serving families across Tamil Nadu</p>
              <p className="text-sm text-charcoal/55 mt-0.5">Chennai · Coimbatore · Madurai · Trichy · Salem &amp; beyond</p>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden border border-charcoal/[0.06] h-[280px] bg-sage/40 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8523725595603!2d80.23157121175657!3d13.044234013280053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526654279b9cf7%3A0xe54e66d92ec28df7!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1721121021481!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinayaka Healthcare Office Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
