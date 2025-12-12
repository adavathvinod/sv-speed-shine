import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [complaintForm, setComplaintForm] = useState({
    name: "",
    phone: "",
    complaint: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const message = `Hi SV CARZ!\n\nName: ${contactForm.name}\nPhone: ${contactForm.phone}\nEmail: ${contactForm.email}\n\nMessage: ${contactForm.message}`;
    window.open(`https://wa.me/918019130798?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
  };

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaintForm.name || !complaintForm.phone || !complaintForm.complaint) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback Received",
      description: "Thank you for your feedback. We'll address your concerns promptly.",
    });
    setComplaintForm({ name: "", phone: "", complaint: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">GET IN TOUCH</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">CONTACT US</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl tracking-wider mb-8">VISIT US</h2>
              <div className="space-y-6">
                <a
                  href="https://maps.google.com/?q=SV+CARZ+SPA+Hasthinapuram+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg gradient-card border border-border hover:border-primary transition-all group"
                >
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Address</h3>
                    <p className="text-muted-foreground">
                      Beside Ragavendra Hotel, Hasthinapuram,<br />
                      Hyderabad, Telangana 500079
                    </p>
                    <span className="text-primary text-sm">Click to open in Google Maps →</span>
                  </div>
                </a>

                <a
                  href="tel:+918019130798"
                  className="flex items-start gap-4 p-4 rounded-lg gradient-card border border-border hover:border-primary transition-all group"
                >
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Phone</h3>
                    <p className="text-muted-foreground">+91 80191 30798</p>
                  </div>
                </a>

                <a
                  href="mailto:info@svcarz.com"
                  className="flex items-start gap-4 p-4 rounded-lg gradient-card border border-border hover:border-primary transition-all group"
                >
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-muted-foreground">info@svcarz.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg gradient-card border border-border">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 9:00 AM - 8:00 PM<br />
                      All Holidays: Open
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-3xl tracking-wider mb-8">FIND US</h2>
              <a
                href="https://maps.google.com/?q=SV+CARZ+SPA+Hasthinapuram+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-lg overflow-hidden border border-border hover:border-primary transition-all group aspect-[4/3]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7626533736444!2d78.54879661487755!3d17.361752688073677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c1f0bfffff%3A0x2e58f4e6b9bf4fb!2sHasthinapuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Contact */}
            <div className="p-8 rounded-lg gradient-card border border-border">
              <h2 className="font-display text-3xl tracking-wider mb-6 flex items-center gap-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                SEND MESSAGE
              </h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <Input
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="bg-secondary border-border min-h-[120px]"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Complaint Box */}
            <div className="p-8 rounded-lg bg-secondary border border-border">
              <h2 className="font-display text-3xl tracking-wider mb-6 flex items-center gap-2">
                <AlertCircle className="h-8 w-8 text-primary" />
                FEEDBACK / COMPLAINTS
              </h2>
              <p className="text-muted-foreground mb-6">
                Your feedback helps us improve. Share your experience or concerns with us.
              </p>
              <form onSubmit={handleComplaintSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <Input
                    placeholder="Your name"
                    value={complaintForm.name}
                    onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={complaintForm.phone}
                    onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Feedback *</label>
                  <Textarea
                    placeholder="Please share your feedback or concerns..."
                    value={complaintForm.complaint}
                    onChange={(e) => setComplaintForm({ ...complaintForm, complaint: e.target.value })}
                    className="bg-background border-border min-h-[150px]"
                  />
                </div>
                <Button type="submit" variant="outline" className="w-full">
                  Submit Feedback
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
