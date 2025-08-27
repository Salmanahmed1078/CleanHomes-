import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Home, Fan, Truck, Calendar, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "standard",
      title: "Sparkling Home Care",
      subtitle: "Standard Cleaning",
      description: "Routine cleaning for a tidy home, covering dusting, vacuuming, mopping, bathroom sanitization, and kitchen surfaces.",
      basePrice: 80,
      additionalRooms: 20,
      additionalBathrooms: 15,
      icon: Home,
      color: "bg-primary/10 text-primary",
      features: [
        "Dusting all surfaces",
        "Vacuuming carpets and rugs",
        "Mopping hard floors",
        "Bathroom sanitization",
        "Kitchen surface cleaning",
        "Trash removal"
      ]
    },
    {
      id: "deep",
      title: "Deep Refresh",
      subtitle: "Deep Cleaning",
      description: "Detailed cleaning covering hard-to-reach areas like tiles, baseboards, inside cabinets, and appliances.",
      basePrice: 150,
      additionalRooms: 25,
      additionalBathrooms: 20,
      icon: Fan,
      color: "bg-secondary/10 text-secondary",
      features: [
        "Everything in standard cleaning",
        "Inside cabinet cleaning",
        "Appliance interior cleaning",
        "Baseboard and trim cleaning",
        "Light fixture cleaning",
        "Window sill cleaning"
      ]
    },
    {
      id: "moveout",
      title: "Move Fresh",
      subtitle: "Move-In/Move-Out Cleaning",
      description: "Perfect for tenants or landlords preparing properties. Ensures every space is spotless for new occupants.",
      basePrice: 200,
      additionalRooms: 35,
      additionalBathrooms: 25,
      icon: Truck,
      color: "bg-accent/10 text-accent",
      features: [
        "Everything in deep cleaning",
        "Inside all cabinets and drawers",
        "Inside refrigerator and oven",
        "Closet cleaning",
        "Wall spot cleaning",
        "Floor deep scrubbing"
      ]
    },
    {
      id: "recurring",
      title: "Always Clean Plan",
      subtitle: "Recurring Cleaning",
      description: "Scheduled cleanings (weekly, bi-weekly, monthly) at discounted rates. Keeps your home consistently clean.",
      basePrice: 80,
      additionalRooms: 30,
      additionalBathrooms: 25,
      icon: Calendar,
      color: "bg-primary/10 text-primary",
      popular: true,
      discounts: [
        { frequency: "Weekly", discount: "10% off" },
        { frequency: "Bi-weekly", discount: "15% off" },
        { frequency: "Monthly", discount: "20% off" }
      ],
      features: [
        "Consistent quality service",
        "Priority scheduling",
        "Same cleaning team",
        "Flexible rescheduling",
        "Special rate discounts",
        "Customizable service"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-testid="services-header">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Cleaning Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your specific needs. From routine maintenance to comprehensive deep cleans.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className={`relative ${service.popular ? "border-secondary" : ""}`} data-testid={`service-card-${service.id}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                          <Icon size={32} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2" data-testid={`service-title-${service.id}`}>
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm" data-testid={`service-subtitle-${service.id}`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary mb-1" data-testid={`service-price-${service.id}`}>
                          ${service.basePrice}
                        </div>
                        <p className="text-sm text-muted-foreground">Starting price</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6" data-testid={`service-description-${service.id}`}>
                      {service.description}
                    </p>

                    {/* Pricing Details */}
                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold mb-2">Pricing Details:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Base price (1 room/1 bath): ${service.basePrice}</li>
                        <li>• Additional rooms: ${service.additionalRooms} each</li>
                        <li>• Additional bathrooms: ${service.additionalBathrooms} each</li>
                      </ul>
                      {service.discounts && (
                        <div className="mt-3">
                          <h5 className="font-medium text-sm mb-1">Frequency Discounts:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.discounts.map((discount, index) => (
                              <li key={index}>• {discount.frequency}: {discount.discount}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="text-secondary w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/services/${service.id}`} className="flex-1">
                        <Button variant="outline" className="w-full" data-testid={`button-learn-more-${service.id}`}>
                          Learn More
                        </Button>
                      </Link>
                      <Link href={`/booking?service=${service.id}`} className="flex-1">
                        <Button className="w-full" data-testid={`button-book-${service.id}`}>
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-muted/30 rounded-2xl p-8" data-testid="services-cta">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us for a personalized recommendation. Our team will help you choose the perfect cleaning service for your home and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" data-testid="button-view-pricing">
                  View Pricing Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
