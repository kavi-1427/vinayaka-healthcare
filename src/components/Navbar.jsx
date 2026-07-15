import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(43,43,40,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="font-display text-pine-dark text-xl font-semibold tracking-tight">
            Vinayaka Healthcare
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-charcoal/80 hover:text-pine-dark transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:8050860837"
            className="flex items-center gap-2 text-[15px] text-charcoal/80 hover:text-pine transition-colors font-semibold"
          >
            <Phone size={17} className="text-pine" />
            <span>80508 60837</span>
          </a>
          <a
            href="#request"
            className="inline-flex items-center rounded-full bg-marigold hover:bg-marigold-dark text-white font-semibold px-5 py-2.5 text-sm transition-colors shadow-sm"
          >
            Request a Caregiver
          </a>
        </div>

        <button
          className="lg:hidden text-pine-dark"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-charcoal/10 px-5 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[16px] text-charcoal/85 font-medium border-b border-charcoal/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#request"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center items-center rounded-full bg-marigold hover:bg-marigold-dark text-white font-semibold px-5 py-3 text-sm transition-colors"
          >
            Request a Caregiver
          </a>
        </div>
      )}
    </header>
  );
}
