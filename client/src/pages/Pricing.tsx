import Layout from "@/components/Layout";
import PricingCalculator from "@/components/PricingCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Home, Fan, Truck, Calendar, CheckCircle } from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      id: "standard",
      title: "Standard Cleaning",
      basePrice: 80,
      additionalRooms: 20,
      additionalBathrooms: 15,
      icon: Home,
      color: "bg-primary/10 text-primary",
      features: [
        "Dusting & vacuuming",
        "Kitchen & bathroom cleaning",
        "Floor mopping",
        "Trash removal"
      ]
    },
    {
      id: "deep",
      title: "Deep Cleaning",
      basePrice: 150,
      additionalRooms: 25,
      additionalBathrooms: 20,
      icon: Fan,
      color: "bg-secondary/10 text-secondary",
      features: [
        "Everything in standard",
        "Inside cabinets & appliances",
        "Baseboards & trim",
        "Light fixtures"
      ]
    },
    {
      id: "moveout",
      title: "Move-In/Out",
      basePrice: 200,
      additionalRooms: 35,
      additionalBathrooms: 25,
      icon: Truck,
      color: "bg-accent/10 text-accent",
      features: [
        "Everything in deep clean",
        "Inside all storage areas",
        "Wall spot cleaning",
        "Floor deep scrubbing"
      ]
    },
    {
      id: "recurring",
      title: "Recurring",
      basePrice: 72,
      originalPrice: 80,
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
        "Consistent quality",
        "Priority scheduling",
        "Same cleaning team",
        "Flexible rescheduling"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-testid="pricing-header">
            <h1 className="text-4xl font-bold text-foreground mb-4">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees. Clear, upfront pricing so you know exactly what to expect. Calculate your custom quote below.
            </p>
          </div>

          {/* Pricing Calculator */}
          <div className="mb-16">
            <PricingCalculator />
          </div>

          {/* Pricing Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="plans-title">
              Our Cleaning Plans
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card key={plan.id} className={`relative h-full ${plan.popular ? "border-secondary" : ""}`} data-testid={`pricing-card-${plan.id}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon size={32} />
                      </div>
                      <CardTitle className="text-xl" data-testid={`plan-title-${plan.id}`}>
                        {plan.title}
                      </CardTitle>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary" data-testid={`plan-price-${plan.id}`}>
                          ${plan.basePrice}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${plan.originalPrice}
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground">Base price (1 room/1 bath)</p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="text-center mb-6">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Additional Rooms: ${plan.additionalRooms} each</li>
                          <li>• Additional Bathrooms: ${plan.additionalBathrooms} each</li>
                        </ul>
                        {plan.discounts && (
                          <div className="mt-3">
                            <p className="font-medium text-sm mb-2">Frequency Discounts:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {plan.discounts.map((discount, index) => (
                                <li key={index}>• {discount.frequency}: {discount.discount}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-6 flex-1">
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <div className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2" data-testid={`plan-feature-${plan.id}-${index}`}>
                              <CheckCircle className="text-secondary w-4 h-4 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link href={`/booking?service=${plan.id}`} className="mt-auto">
                        <Button 
                          className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90" : ""}`}
                          data-testid={`button-book-${plan.id}`}
                        >
                          Book {plan.title}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="faq-title">
              Pricing Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card data-testid="faq-estimates">
                <CardHeader>
                  <CardTitle>How are estimates calculated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pricing is based on the number of rooms and bathrooms in your home, 
                    plus the type of service you need. Additional factors like frequency 
                    and special requests may affect the final price.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="faq-discounts">
                <CardHeader>
                  <CardTitle>How do recurring discounts work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer automatic discounts for recurring services: 10% off weekly, 
                    15% off bi-weekly, and 20% off monthly cleanings. The discount applies 
                    to your base price and any additional rooms or bathrooms.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="faq-payment">
                <CardHeader>
                  <CardTitle>When do I pay?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Payment is due upon completion of the service. We accept cash, check, 
                    and all major credit cards. For recurring services, we can set up 
                    automatic payment for your convenience.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="faq-changes">
                <CardHeader>
                  <CardTitle>Can I modify my service?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade, downgrade, or customize your service at any time. 
                    Just let us know at least 24 hours before your scheduled cleaning, 
                    and we'll adjust your service and pricing accordingly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-muted/30 rounded-2xl p-8" data-testid="pricing-cta">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use our pricing calculator above for an instant quote, or contact us for a personalized estimate. 
              No obligation, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-book-now">
                  Book Now
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
