import { useState, useMemo } from "react";
import { Calculator, Car, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CarType {
  id: string;
  name: string;
  multiplier: number;
}

interface Service {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

const carTypes: CarType[] = [
  { id: "hatchback", name: "Hatchback", multiplier: 1.0 },
  { id: "sedan", name: "Sedan", multiplier: 1.2 },
  { id: "suv", name: "SUV / MUV", multiplier: 1.5 },
  { id: "luxury", name: "Luxury Sedan", multiplier: 1.8 },
  { id: "supercar", name: "Sports / Supercar", multiplier: 2.2 },
];

const services: Service[] = [
  { id: "wash", name: "Premium Wash", basePrice: 500, description: "Foam wash + interior vacuum" },
  { id: "exterior", name: "Exterior Detailing", basePrice: 3000, description: "Paint correction + polish" },
  { id: "interior", name: "Interior Detailing", basePrice: 2500, description: "Deep clean + conditioning" },
  { id: "ceramic", name: "Ceramic Coating", basePrice: 15000, description: "5-year protection" },
  { id: "graphene", name: "Graphene Coating", basePrice: 20000, description: "7-year protection" },
  { id: "ppf-partial", name: "PPF (Front Only)", basePrice: 25000, description: "Hood, bumper, fenders" },
  { id: "ppf-full", name: "PPF (Full Body)", basePrice: 80000, description: "Complete protection" },
];

const PricingCalculator = () => {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const estimate = useMemo(() => {
    if (!selectedCar || selectedServices.length === 0) return null;

    const carMultiplier = carTypes.find((c) => c.id === selectedCar)?.multiplier || 1;
    const total = selectedServices.reduce((sum, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return sum + (service?.basePrice || 0) * carMultiplier;
    }, 0);

    return Math.round(total);
  }, [selectedCar, selectedServices]);

  return (
    <div className="p-8 rounded-lg gradient-card border border-border">
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="h-8 w-8 text-primary" />
        <h2 className="font-display text-3xl tracking-wider">PRICE CALCULATOR</h2>
      </div>

      {/* Step 1: Select Car Type */}
      <div className="mb-8">
        <h3 className="font-display text-xl tracking-wider mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
          Select Your Vehicle Type
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {carTypes.map((car) => (
            <button
              key={car.id}
              onClick={() => setSelectedCar(car.id)}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                selectedCar === car.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary hover:bg-primary/20"
              }`}
            >
              <Car className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-semibold">{car.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Services */}
      <div className="mb-8">
        <h3 className="font-display text-xl tracking-wider mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
          Select Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-4 rounded-lg text-left transition-all duration-300 border ${
                selectedServices.includes(service.id)
                  ? "border-primary bg-primary/10 shadow-glow"
                  : "border-border bg-secondary hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold mb-1">{service.name}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <p className="text-primary font-display text-lg mt-2">
                    From ₹{service.basePrice.toLocaleString()}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedServices.includes(service.id)
                      ? "bg-primary border-primary"
                      : "border-muted-foreground"
                  }`}
                >
                  {selectedServices.includes(service.id) && (
                    <Check className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Estimate Display */}
      <div className="p-6 rounded-lg bg-secondary border border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl tracking-wider mb-2">ESTIMATED PRICE</h3>
            {estimate ? (
              <div>
                <span className="font-display text-5xl text-primary">
                  ₹{estimate.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-2">onwards</span>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Select your vehicle type and services to see the estimate
              </p>
            )}
            {estimate && (
              <p className="text-sm text-muted-foreground mt-2">
                * Final price may vary based on vehicle condition
              </p>
            )}
          </div>
          {estimate && (
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book Now <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
