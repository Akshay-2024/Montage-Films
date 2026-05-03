import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7306453038"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-obsidian shadow-gold transition-transform duration-500 hover:scale-110"
    >
      <MessageCircle size={22} />
    </a>
  );
}
