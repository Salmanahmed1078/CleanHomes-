import Layout from "@/components/Layout";
import PricingCalculator from "@/components/PricingCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Star,
  Shield,
  Leaf,
  Medal,
  Home,
  Fan,
  Truck,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import cleaningServiceImage from "@assets/generated_images/Professional_house_cleaning_service_f2f1a521.png";

export default function HomePage() {
  const services = [
    {
      id: "standard",
      title: "Sparkling Home Care",
      description:
        "Routine cleaning for a tidy home, covering dusting, vacuuming, mopping, and sanitization.",
      price: 80,
      icon: Home,
    },
    {
      id: "deep",
      title: "Deep Refresh",
      description:
        "Detailed cleaning covering hard-to-reach areas, tiles, baseboards, and inside appliances.",
      price: 150,
      icon: Fan,
    },
    {
      id: "moveout",
      title: "Move Fresh",
      description:
        "Perfect for tenants or landlords preparing properties. Every space spotless for new occupants.",
      price: 200,
      icon: Truck,
    },
    {
      id: "recurring",
      title: "Always Clean Plan",
      description:
        "Scheduled cleanings at discounted rates. Keeps your home consistently clean and fresh.",
      price: 72,
      icon: Calendar,
      popular: true,
    },
  ];

  const stats = [
    { label: "Happy customers", value: "500+" },
    { label: "Average rating", value: "4.9/5" },
    { label: "Same-week booking", value: "Available" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "CleanHomes transformed my apartment completely. The deep cleaning service was thorough and professional.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      location: "Oakland, CA",
      rating: 5,
      text: "The recurring service has been a game-changer for our busy family. Reliable, efficient, and always spotless.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      location: "Berkeley, CA",
      rating: 5,
      text: "Used their move-out cleaning service and got my full security deposit back. Will definitely use again.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <Layout>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-center lg:text-left">
              <Badge className="rounded-full bg-white/15 px-4 py-1 text-primary-foreground backdrop-blur-sm">
                Trusted Bay Area cleaning team
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                  A cleaner home, without the hassle
                </h1>
                <p className="text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
                  Professional, insured, and eco-conscious cleaning for homes
                  that deserve to feel fresh every week.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-white px-6 text-primary hover:bg-white/90"
                  >
                    Book a cleaning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-white/30 bg-white/10 px-6 text-primary-foreground hover:bg-white/20"
                  >
                    View pricing
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-sm"
                  >
                    <p className="text-lg font-bold text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-primary-foreground/75">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={cleaningServiceImage}
                alt="Professional house cleaning service"
                className="w-full rounded-[2rem] border border-white/20 shadow-2xl"
              />
              <div className="glass-card absolute -bottom-6 left-4 right-4 p-5 sm:left-auto sm:right-6 sm:w-72 floating-animation">
                <div className="flex items-center gap-3">
                  <div className="pricing-gradient flex h-12 w-12 items-center justify-center rounded-full">
                    <Star className="h-6 w-6 fill-white text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      4.9/5 customer rating
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fully insured professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-14 flex flex-col gap-4 text-center">
            <h2 className="section-title">Services built for real homes</h2>
            <p className="section-subtitle mx-auto">
              From quick refreshes to move-out deep cleans, choose the service
              that fits your space and schedule.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`service-card fade-in ${service.popular ? "ring-2 ring-primary/20" : ""}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <CardContent className="space-y-5 p-6">
                    {service.popular && (
                      <Badge className="pricing-gradient border-0 text-white">
                        Most popular
                      </Badge>
                    )}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-primary">
                      From ${service.price}
                    </p>
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full rounded-full">
                        Learn more
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Fully insured",
                text: "Every visit is covered for your peace of mind.",
              },
              {
                icon: Leaf,
                title: "Eco-friendly",
                text: "Safe products for families, pets, and the planet.",
              },
              {
                icon: Medal,
                title: "Quality guarantee",
                text: "Not satisfied? We return within 24 hours to make it right.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="surface-card fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell space-y-12">
          <div className="text-center">
            <h2 className="section-title">Transparent pricing</h2>
            <p className="section-subtitle mx-auto mt-4">
              Estimate your visit in seconds, then book online in minutes.
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <h2 className="section-title">Loved by local homeowners</h2>
            <p className="section-subtitle mx-auto mt-4">
              Real reviews from customers across the Bay Area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
                    “{testimonial.text}”
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/15"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="pricing-gradient rounded-[2rem] px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <div className="mx-auto max-w-2xl space-y-5">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for a spotless home?
              </h2>
              <p className="text-white/85">
                Book online today and get a confirmation within 2 hours.
              </p>
              <Link href="/booking">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 text-primary hover:bg-white/90"
                >
                  Schedule your clean
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
