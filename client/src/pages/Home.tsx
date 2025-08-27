import Layout from "@/components/Layout";
import PricingCalculator from "@/components/PricingCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Star, Shield, Leaf, Medal, Home, Fan, Truck, Calendar } from "lucide-react";
import cleaningServiceImage from "@assets/generated_images/Professional_house_cleaning_service_f2f1a521.png";

export default function HomePage() {
  const services = [
    {
      id: "standard",
      title: "Sparkling Home Care",
      description: "Routine cleaning for a tidy home, covering dusting, vacuuming, mopping, and sanitization.",
      price: 80,
      icon: Home,
      color: "bg-primary/10 text-primary"
    },
    {
      id: "deep",
      title: "Deep Refresh",
      description: "Detailed cleaning covering hard-to-reach areas, tiles, baseboards, and inside appliances.",
      price: 150,
      icon: Fan,
      color: "bg-secondary/10 text-secondary"
    },
    {
      id: "moveout",
      title: "Move Fresh",
      description: "Perfect for tenants or landlords preparing properties. Every space spotless for new occupants.",
      price: 200,
      icon: Truck,
      color: "bg-accent/10 text-accent"
    },
    {
      id: "recurring",
      title: "Always Clean Plan",
      description: "Scheduled cleanings at discounted rates. Keeps your home consistently clean and fresh.",
      price: 72,
      icon: Calendar,
      color: "bg-primary/10 text-primary",
      popular: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "CleanHomes transformed my apartment completely. The deep cleaning service was thorough and professional. I couldn't be happier with the results!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Oakland, CA",
      rating: 5,
      text: "The recurring service has been a game-changer for our busy family. Reliable, efficient, and always leaves our home spotless. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Berkeley, CA",
      rating: 5,
      text: "Used their move-out cleaning service and got my full security deposit back! The team was thorough and professional. Will definitely use again.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6" data-testid="hero-title">
                Because Every Home Deserves to Shine
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="hero-description">
                Professional cleaning services that transform your space into a spotless sanctuary. Trusted, insured, and eco-friendly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/booking">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 button-hover shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-testid="button-book-now-hero">
                    Book Now
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="bg-white/90 text-primary border-2 border-primary/20 hover:bg-white hover:border-primary/40 button-hover shadow-md hover:shadow-lg backdrop-blur-sm" data-testid="button-view-pricing">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="bg-white/90 text-primary border-2 border-primary/20 hover:bg-white hover:border-primary/40 button-hover shadow-md hover:shadow-lg backdrop-blur-sm" data-testid="button-explore-services">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={cleaningServiceImage}
                alt="Professional house cleaning service in action"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-4 -right-4 glass-card p-6 rounded-xl shadow-2xl floating-animation">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 pricing-gradient rounded-full flex items-center justify-center shadow-lg">
                    <Star className="text-white" size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground" data-testid="rating-text">4.9/5 Rating</div>
                    <div className="text-xs text-muted-foreground" data-testid="customers-text">500+ Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="services-title">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
              Professional cleaning solutions tailored to your needs, from routine maintenance to deep cleaning transformations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className={`service-card relative ${service.popular ? "border-secondary shadow-xl" : ""} fade-in`} style={{animationDelay: `${index * 0.1}s`}} data-testid={`service-card-${service.id}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="pricing-gradient text-white shadow-lg animate-pulse">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 hover:scale-110`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`service-title-${service.id}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`service-description-${service.id}`}>
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4" data-testid={`service-price-${service.id}`}>
                      Starting at ${service.price}
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full button-hover shadow-md hover:shadow-lg" data-testid={`button-learn-more-${service.id}`}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/50" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group fade-in" data-testid="trust-insured">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Shield className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">Fully Insured</h3>
              <p className="text-muted-foreground">All our cleaners are insured and bonded for your peace of mind.</p>
            </div>
            
            <div className="flex flex-col items-center group fade-in" style={{animationDelay: '0.1s'}} data-testid="trust-eco">
              <div className="w-20 h-20 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Leaf className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Eco-Friendly</h3>
              <p className="text-muted-foreground">We use safe, environmentally friendly cleaning products.</p>
            </div>
            
            <div className="flex flex-col items-center group fade-in" style={{animationDelay: '0.2s'}} data-testid="trust-guarantee">
              <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Medal className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">100% Guarantee</h3>
              <p className="text-muted-foreground">Not satisfied? We'll return within 24 hours to make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-background" data-testid="pricing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="pricing-title">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-description">
              No hidden fees. Clear, upfront pricing so you know exactly what to expect.
            </p>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="testimonials-description">
              Join hundreds of satisfied customers who trust CleanHomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full testimonial-card fade-in" style={{animationDelay: `${index * 0.1}s`}} data-testid={`testimonial-${index}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow italic" data-testid={`testimonial-text-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={`Customer ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover mr-4 shadow-md ring-2 ring-primary/20"
                      data-testid={`testimonial-image-${index}`}
                    />
                    <div>
                      <div className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`testimonial-location-${index}`}>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
