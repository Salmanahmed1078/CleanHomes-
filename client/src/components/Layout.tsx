import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Wrench, DollarSign, Users, Phone, FileText, Calendar } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-primary" data-testid="logo">CleanHomes</h2>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors ${
                      location === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/booking">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-book-now">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-4 py-6">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                            location === item.href
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                          data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      );
                    })}
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="mobile-button-book">
                        <Calendar className="h-4 w-4 mr-2" />
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

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="footer-logo">CleanHomes</h3>
              <p className="text-background/80 mb-4">
                Professional cleaning services that make your home shine.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-facebook">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/standard" className="text-background/80 hover:text-background transition-colors" data-testid="footer-standard">Standard Cleaning</Link></li>
                <li><Link href="/services/deep" className="text-background/80 hover:text-background transition-colors" data-testid="footer-deep">Deep Cleaning</Link></li>
                <li><Link href="/services/moveout" className="text-background/80 hover:text-background transition-colors" data-testid="footer-moveout">Move-In/Out</Link></li>
                <li><Link href="/services/recurring" className="text-background/80 hover:text-background transition-colors" data-testid="footer-recurring">Recurring Plans</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-background/80 hover:text-background transition-colors" data-testid="footer-about">About Us</Link></li>
                <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="footer-contact">Contact</Link></li>
                <li><Link href="/policies" className="text-background/80 hover:text-background transition-colors" data-testid="footer-policies">Policies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-background/80">
                <div data-testid="footer-phone">(555) 123-4567</div>
                <div data-testid="footer-email">info@cleanhomes.com</div>
                <div data-testid="footer-location">San Francisco Bay Area</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60" data-testid="footer-copyright">
              &copy; 2024 CleanHomes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
