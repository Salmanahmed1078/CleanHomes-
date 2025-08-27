import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award, Shield } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "5", label: "Years Experience" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trained & Certified Staff",
      description: "All our team members are thoroughly trained, background-checked, and certified in professional cleaning techniques."
    },
    {
      icon: CheckCircle,
      title: "Eco-Friendly Products",
      description: "We use only safe, environmentally friendly cleaning products that are effective yet gentle on your home and family."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with flexible booking options and reliable, punctual service every time."
    },
    {
      icon: Award,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied, we'll return within 24 hours to make it right at no extra cost."
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-testid="about-header">
            <h1 className="text-4xl font-bold text-foreground mb-4">About CleanHomes</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a passion for creating clean, healthy living spaces for families throughout the Bay Area.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <div data-testid="about-story">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for creating clean, healthy living spaces, CleanHomes has been 
                  serving the San Francisco Bay Area with professional cleaning services for over 5 years. 
                  We believe that a clean home is the foundation for a happy, healthy life.
                </p>
                <p>
                  What started as a small family business has grown into the region's most trusted cleaning 
                  service, serving hundreds of satisfied customers who rely on us to maintain their homes 
                  with care and attention to detail.
                </p>
                <p>
                  Our mission is to provide exceptional cleaning services that exceed expectations while 
                  using eco-friendly products and sustainable practices. Every member of our team is 
                  thoroughly trained, insured, and committed to delivering outstanding results.
                </p>
              </div>
            </div>

            {/* Image */}
            <div data-testid="about-image">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
                alt="Professional cleaning team"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-testid="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="values-title">
              Why Choose CleanHomes?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} data-testid={`value-card-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="text-secondary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`value-title-${index}`}>
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground" data-testid={`value-description-${index}`}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-16" data-testid="mission-section">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To provide exceptional cleaning services that create healthier, happier homes while building 
                lasting relationships with our clients through trust, reliability, and outstanding results.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
                  <p className="text-sm text-muted-foreground">
                    We never compromise on quality and always strive to exceed your expectations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customer Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority, and we tailor our services to your needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Environmental Care</h4>
                  <p className="text-sm text-muted-foreground">
                    We protect your family and the environment with eco-friendly products and methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="service-areas-title">
              Service Areas
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We proudly serve the entire San Francisco Bay Area, including:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
              {[
                "San Francisco", "Oakland", "Berkeley", "San Jose",
                "Palo Alto", "Mountain View", "Fremont", "Hayward",
                "Sunnyvale", "Santa Clara", "Redwood City", "Daly City"
              ].map((city, index) => (
                <div key={index} className="bg-card border rounded-lg p-3" data-testid={`service-city-${index}`}>
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
