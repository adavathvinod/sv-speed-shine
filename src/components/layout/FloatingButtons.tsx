import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => {
  const buttons = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      href: "https://wa.me/917780762489",
      label: "WhatsApp",
      color: "bg-[hsl(142,70%,45%)]",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      href: "tel:+917780762489",
      label: "Call",
      color: "bg-primary",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      href: "https://maps.google.com/?q=SK+Carz+Detaling+Studio+Hastinapuram+Hyderabad",
      label: "Location",
      color: "bg-[hsl(210,80%,50%)]",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/sk_carz._",
      label: "Instagram",
      color: "bg-gradient-to-br from-[hsl(330,70%,50%)] to-[hsl(30,90%,55%)]",
    },
  ];

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3">
      {buttons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={button.label}
          className={`${button.color} h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
        >
          {button.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingButtons;
