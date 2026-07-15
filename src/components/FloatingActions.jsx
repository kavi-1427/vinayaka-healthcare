import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 lg:hidden">
      <a
        href="https://wa.me/918050860837"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
      <a
        href="tel:8050860837"
        aria-label="Call Vinayaka Healthcare"
        className="w-14 h-14 rounded-full bg-pine flex items-center justify-center shadow-lg active:scale-95 transition-transform"
      >
        <Phone size={24} className="text-ivory" />
      </a>
    </div>
  );
}
