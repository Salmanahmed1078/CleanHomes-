import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Wrench,
  DollarSign,
  Users,
  Phone,
  FileText,
  Calendar,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Policies", href: "/policies", icon: FileText },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="section-shell">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground">
                  CleanHomes
                </p>
                <p className="text-xs text-muted-foreground">
                  Bay Area cleaning
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    isActive(item.href) ? "nav-link nav-link-active" : "nav-link"
                  }
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/booking">
                <Button className="rounded-full px-5 shadow-lg shadow-primary/20">
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[360px]">
                  <div className="grid gap-2 py-6">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                            isActive(item.href)
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      );
                    })}
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      <Button className="mt-4 w-full rounded-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="mt-20 border-t border-border bg-foreground text-background">
        <div className="section-shell py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">CleanHomes</span>
              </div>
              <p className="text-sm leading-relaxed text-background/75">
                Modern, reliable home cleaning for busy households across the
                Bay Area.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:bg-background/10 hover:text-background"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-background/75">
                <li>
                  <Link href="/services/standard" className="hover:text-background">
                    Standard Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/deep" className="hover:text-background">
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/moveout" className="hover:text-background">
                    Move-In/Out
                  </Link>
                </li>
                <li>
                  <Link href="/services/recurring" className="hover:text-background">
                    Recurring Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-background/75">
                <li>
                  <Link href="/about" className="hover:text-background">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className="hover:text-background">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-background/75">
                <p>(555) 123-4567</p>
                <p>info@cleanhomes.com</p>
                <p>San Francisco Bay Area</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-background/15 pt-6 text-center text-sm text-background/50">
            © 2026 CleanHomes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
