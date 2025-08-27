import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

interface PricingCalculatorProps {
  showBookButton?: boolean;
}

export default function PricingCalculator({ showBookButton = true }: PricingCalculatorProps) {
  const [serviceType, setServiceType] = useState("standard");
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [frequency, setFrequency] = useState("onetime");
  const [totalPrice, setTotalPrice] = useState(80);

  const basePrices = {
    standard: 80,
    deep: 150,
    moveout: 200,
    recurring: 80
  };

  const additionalPrices = {
    standard: { room: 20, bathroom: 15 },
    deep: { room: 25, bathroom: 20 },
    moveout: { room: 35, bathroom: 25 },
    recurring: { room: 30, bathroom: 25 }
  };

  const discounts = {
    onetime: 0,
    weekly: 0.10,
    biweekly: 0.15,
    monthly: 0.20
  };

  useEffect(() => {
    const basePrice = basePrices[serviceType as keyof typeof basePrices] || 80;
    const additionalRoomPrice = additionalPrices[serviceType as keyof typeof additionalPrices]?.room || 20;
    const additionalBathroomPrice = additionalPrices[serviceType as keyof typeof additionalPrices]?.bathroom || 15;
    
    let total = basePrice;
    total += (rooms - 1) * additionalRoomPrice;
    total += (bathrooms - 1) * additionalBathroomPrice;
    
    const discount = discounts[frequency as keyof typeof discounts] || 0;
    total = total * (1 - discount);
    
    setTotalPrice(Math.round(total));
  }, [serviceType, rooms, bathrooms, frequency]);

  return (
    <Card className="shadow-xl glass-card border-2 border-primary/10" data-testid="pricing-calculator">
      <CardContent className="p-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 text-center" data-testid="calculator-title">
          Calculate Your Cost
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Label className="text-sm font-medium text-foreground mb-2">Service Type</Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger data-testid="select-service-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="moveout">Move-In/Out</SelectItem>
                <SelectItem value="recurring">Recurring</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground mb-2">Number of Rooms</Label>
            <Input
              type="number"
              min="1"
              max="10"
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
              data-testid="input-rooms"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground mb-2">Number of Bathrooms</Label>
            <Input
              type="number"
              min="1"
              max="5"
              value={bathrooms}
              onChange={(e) => setBathrooms(parseInt(e.target.value) || 1)}
              data-testid="input-bathrooms"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground mb-2">Frequency</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger data-testid="select-frequency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onetime">One-time</SelectItem>
                <SelectItem value="weekly">Weekly (10% off)</SelectItem>
                <SelectItem value="biweekly">Bi-weekly (15% off)</SelectItem>
                <SelectItem value="monthly">Monthly (20% off)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="pricing-gradient text-white text-5xl font-bold p-6 rounded-2xl shadow-xl mb-4 transform hover:scale-105 transition-all duration-300" data-testid="calculated-price">
              ${totalPrice}
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
          </div>
          <p className="text-muted-foreground mb-6 text-lg">Estimated total cost</p>
          {showBookButton && (
            <Link href={`/booking?service=${serviceType}&rooms=${rooms}&bathrooms=${bathrooms}&frequency=${frequency}`}>
              <Button size="lg" className="pricing-gradient text-white hover:shadow-xl button-hover transform hover:scale-105 transition-all duration-300 px-8" data-testid="button-book-service">
                Book This Service
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
