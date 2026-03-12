import { useState } from "react";
import { Calendar, Clock, Car, User, Phone, Mail, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const services = [
  "PPF (Paint Protection Film)",
  "Ceramic Coating",
  "Teflon Coating",
  "Interior Spa",
  "Exterior Cleaning",
  "Custom Seat Covers",
  "Car Matting",
  "Window Tinting",
  "Custom Wrapping",
  "Denting & Painting",
  "Audio Upgrade",
  "Premium Car Wash",
  "Other",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    const message = `Hi SK CARZ! I'd like to book an appointment:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCar: ${formData.carModel}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\n\n${formData.message}`;
    window.open(`https://wa.me/917780762489?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-widest">SCHEDULE YOUR VISIT</span>
          <h1 className="font-display text-5xl md:text-6xl mt-2 mb-4">BOOK APPOINTMENT</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Reserve your slot and give your car the premium treatment it deserves
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="p-8 rounded-lg gradient-card border border-border">
                <h2 className="font-display text-2xl tracking-wider mb-6 flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-8 rounded-lg gradient-card border border-border">
                <h2 className="font-display text-2xl tracking-wider mb-6 flex items-center gap-2">
                  <Car className="h-6 w-6 text-primary" />
                  Vehicle Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Car Make & Model</label>
                    <Input
                      placeholder="e.g., Hyundai Creta, Mahindra Thar"
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-4">Select Service *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: formData.service === service ? "" : service })}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            formData.service === service
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary hover:bg-primary/20"
                          }`}
                        >
                          {formData.service === service && <Check className="inline h-4 w-4 mr-1" />}
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="p-8 rounded-lg gradient-card border border-border">
                <h2 className="font-display text-2xl tracking-wider mb-6 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Preferred Date & Time
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Date *</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-secondary border-border"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Time Slot *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: formData.time === time ? "" : time })}
                          className={`p-2 rounded text-sm font-medium transition-all duration-300 ${
                            formData.time === time
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary hover:bg-primary/20"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="p-8 rounded-lg gradient-card border border-border">
                <h2 className="font-display text-2xl tracking-wider mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Additional Notes
                </h2>
                <Textarea
                  placeholder="Any special requests or notes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Confirm Booking via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
