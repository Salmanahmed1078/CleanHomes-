import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "wouter";
import { Home, Fan, Truck, Calendar, CheckCircle, Clock, DollarSign } from "lucide-react";
import NotFound from "./not-found";

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  const services = {
    standard: {
      id: "standard",
      title: "Sparkling Home Care",
      subtitle: "Standard Cleaning",
      description: "Our standard cleaning service provides routine maintenance to keep your home tidy and fresh. Perfect for regular upkeep and maintaining a clean living environment.",
      basePrice: 80,
      additionalRooms: 20,
      additionalBathrooms: 15,
      icon: Home,
      color: "bg-primary/10 text-primary",
      duration: "2-3 hours",
      frequency: "Weekly, bi-weekly, or monthly",
      features: [
        "Dusting all accessible surfaces",
        "Vacuuming carpets and rugs",
        "Mopping hard floors",
        "Cleaning and sanitizing bathrooms",
        "Kitchen surface cleaning and appliance exterior",
        "Trash removal and replacement of liners",
        "Making beds and light organizing"
      ],
      process: [
        "Initial walkthrough and assessment",
        "Dusting furniture and surfaces",
        "Bathroom deep clean and sanitization",
        "Kitchen cleaning and organization",
        "Vacuuming and floor care",
        "Final quality check"
      ]
    },
    deep: {
      id: "deep",
      title: "Deep Refresh",
      subtitle: "Deep Cleaning",
      description: "Our deep cleaning service provides comprehensive cleaning that reaches every corner of your home. Ideal for seasonal cleaning, special occasions, or when you need a fresh start.",
      basePrice: 150,
      additionalRooms: 25,
      additionalBathrooms: 20,
      icon: Fan,
      color: "bg-secondary/10 text-secondary",
      duration: "4-6 hours",
      frequency: "Quarterly or as needed",
      features: [
        "Everything included in standard cleaning",
        "Inside cabinet and drawer cleaning",
        "Appliance interior cleaning (oven, refrigerator, microwave)",
        "Baseboard and trim cleaning",
        "Light fixture and ceiling fan cleaning",
        "Window sill and frame cleaning",
        "Behind furniture cleaning",
        "Detailed tile and grout cleaning"
      ],
      process: [
        "Comprehensive home assessment",
        "Room-by-room deep cleaning",
        "Kitchen appliance interior cleaning",
        "Bathroom deep scrub and sanitization",
        "Detailed dusting and surface care",
        "Floor deep cleaning and treatment",
        "Final inspection and touch-ups"
      ]
    },
    moveout: {
      id: "moveout",
      title: "Move Fresh",
      subtitle: "Move-In/Move-Out Cleaning",
      description: "Perfect for tenants preparing to move out or landlords getting properties ready for new tenants. Our thorough service ensures every space is spotless and move-in ready.",
      basePrice: 200,
      additionalRooms: 35,
      additionalBathrooms: 25,
      icon: Truck,
      color: "bg-accent/10 text-accent",
      duration: "6-8 hours",
      frequency: "One-time service",
      features: [
        "Everything included in deep cleaning",
        "Complete cabinet and drawer interior cleaning",
        "Full refrigerator and freezer cleaning",
        "Oven interior deep cleaning",
        "Closet and storage area cleaning",
        "Wall spot cleaning and scuff removal",
        "Floor deep scrubbing and restoration",
        "Window interior cleaning",
        "Switch plate and outlet cleaning"
      ],
      process: [
        "Complete property assessment",
        "Room-by-room comprehensive cleaning",
        "Kitchen complete overhaul",
        "Bathroom restoration cleaning",
        "All surfaces and fixtures detailed",
        "Floor restoration and protection",
        "Final walkthrough and documentation"
      ]
    },
    recurring: {
      id: "recurring",
      title: "Always Clean Plan",
      subtitle: "Recurring Cleaning",
      description: "Maintain a consistently clean home with our recurring cleaning plans. Enjoy discounted rates and priority scheduling while keeping your home spotless year-round.",
      basePrice: 80,
      additionalRooms: 30,
      additionalBathrooms: 25,
      icon: Calendar,
      color: "bg-primary/10 text-primary",
      duration: "2-4 hours",
      frequency: "Weekly, bi-weekly, or monthly",
      popular: true,
      discounts: [
        { frequency: "Weekly", discount: "10% off", price: 72 },
        { frequency: "Bi-weekly", discount: "15% off", price: 68 },
        { frequency: "Monthly", discount: "20% off", price: 64 }
      ],
      features: [
        "Consistent quality with the same cleaning team",
        "Priority scheduling and flexible rescheduling",
        "Customizable service based on your needs",
        "Special discounted rates for regular customers",
        "Quality assurance and satisfaction guarantee",
        "Seasonal deep cleaning add-ons available",
        "Holiday and special occasion flexibility"
      ],
      process: [
        "Initial consultation and service customization",
        "Scheduled regular cleaning visits",
        "Consistent team assignment",
        "Ongoing quality monitoring",
        "Regular service reviews and adjustments",
        "Seasonal service recommendations"
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12" data-testid="service-header">
            <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <Icon size={40} />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="service-title">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="service-subtitle">
              {service.subtitle}
            </p>
            {service.popular && (
              <Badge className="bg-secondary text-secondary-foreground mb-6">
                Most Popular Service
              </Badge>
            )}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="service-description">
              {service.description}
            </p>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pricing Card */}
            <Card data-testid="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-primary" size={24} />
                  Pricing Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Base price (1 room/1 bath):</span>
                    <span className="text-2xl font-bold text-primary" data-testid="base-price">
                      ${service.basePrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Additional rooms:</span>
                    <span className="font-semibold" data-testid="room-price">
                      ${service.additionalRooms} each
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Additional bathrooms:</span>
                    <span className="font-semibold" data-testid="bathroom-price">
                      ${service.additionalBathrooms} each
                    </span>
                  </div>
                  {service.discounts && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3">Frequency Discounts:</h4>
                      <div className="space-y-2">
                        {service.discounts.map((discount, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{discount.frequency}:</span>
                            <div className="text-right">
                              <span className="font-semibold text-secondary">{discount.discount}</span>
                              <div className="text-sm text-primary font-bold">${discount.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Service Info Card */}
            <Card data-testid="service-info-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Service Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium">Duration:</span>
                    <p className="text-muted-foreground" data-testid="service-duration">{service.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium">Recommended Frequency:</span>
                    <p className="text-muted-foreground" data-testid="service-frequency">{service.frequency}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <Card className="mb-12" data-testid="features-card">
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                    <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our Process */}
          <Card className="mb-12" data-testid="process-card">
            <CardHeader>
              <CardTitle>Our Cleaning Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-muted/30 rounded-2xl p-8" data-testid="service-cta">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to book {service.title}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started today and experience the difference professional cleaning makes. 
              Book online or contact us for a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/booking?service=${service.id}`}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-book-service">
                  Book This Service
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" data-testid="button-pricing-calculator">
                  Use Pricing Calculator
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-get-quote">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
