import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Calendar, Clock, DollarSign, Home, CheckCircle } from "lucide-react";

const bookingFormSchema = insertBookingSchema.extend({
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time")
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, navigate] = useLocation();
  const [estimatedPrice, setEstimatedPrice] = useState(80);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceType: "standard",
      frequency: "onetime",
      rooms: 1,
      bathrooms: 1,
      preferredDate: "",
      preferredTime: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      instructions: "",
      estimatedPrice: 80
    }
  });

  const watchedValues = form.watch(["serviceType", "rooms", "bathrooms", "frequency"]);

  // Base prices and additional costs
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

  // Calculate price when form values change
  useEffect(() => {
    const [serviceType, rooms, bathrooms, frequency] = watchedValues;
    
    const basePrice = basePrices[serviceType as keyof typeof basePrices] || 80;
    const additionalRoomPrice = additionalPrices[serviceType as keyof typeof additionalPrices]?.room || 20;
    const additionalBathroomPrice = additionalPrices[serviceType as keyof typeof additionalPrices]?.bathroom || 15;
    
    let total = basePrice;
    total += (rooms - 1) * additionalRoomPrice;
    total += (bathrooms - 1) * additionalBathroomPrice;
    
    const discount = discounts[frequency as keyof typeof discounts] || 0;
    total = total * (1 - discount);
    
    const finalPrice = Math.round(total);
    setEstimatedPrice(finalPrice);
    form.setValue("estimatedPrice", finalPrice);
  }, [watchedValues, form]);

  // Parse URL parameters on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get("service");
    const rooms = urlParams.get("rooms");
    const bathrooms = urlParams.get("bathrooms");
    const frequency = urlParams.get("frequency");

    if (service) form.setValue("serviceType", service);
    if (rooms) form.setValue("rooms", parseInt(rooms) || 1);
    if (bathrooms) form.setValue("bathrooms", parseInt(bathrooms) || 1);
    if (frequency) form.setValue("frequency", frequency);
  }, [form]);

  const bookingMutation = useMutation({
    mutationFn: (data: BookingFormData) => apiRequest("POST", "/api/bookings", data),
    onSuccess: () => {
      toast({
        title: "Booking submitted successfully!",
        description: "We'll contact you within 2 hours to confirm your appointment."
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "Error submitting booking",
        description: "Please check your information and try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const serviceOptions = [
    { value: "standard", label: "Standard Cleaning", description: "Routine cleaning for a tidy home" },
    { value: "deep", label: "Deep Cleaning", description: "Detailed cleaning for every corner" },
    { value: "moveout", label: "Move-In/Out Cleaning", description: "Complete property preparation" },
    { value: "recurring", label: "Recurring Cleaning", description: "Regular service with discounts" }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const frequencyOptions = [
    { value: "onetime", label: "One-time", discount: "" },
    { value: "weekly", label: "Weekly", discount: "10% off" },
    { value: "biweekly", label: "Bi-weekly", discount: "15% off" },
    { value: "monthly", label: "Monthly", discount: "20% off" }
  ];

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12" data-testid="booking-header">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Cleaning Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule your professional cleaning service in just a few simple steps. We'll confirm your booking within 2 hours.
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Service Selection */}
            <Card data-testid="service-selection-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="text-primary" size={24} />
                  Service Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={form.watch("serviceType")} onValueChange={(value) => form.setValue("serviceType", value)}>
                      <SelectTrigger data-testid="select-service-type">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.serviceType && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.serviceType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="frequency">Frequency *</Label>
                    <Select value={form.watch("frequency")} onValueChange={(value) => form.setValue("frequency", value)}>
                      <SelectTrigger data-testid="select-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        {frequencyOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{option.label}</span>
                              {option.discount && (
                                <span className="text-sm text-secondary font-medium ml-2">
                                  {option.discount}
                                </span>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.frequency && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.frequency.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="rooms">Number of Rooms *</Label>
                    <Input
                      id="rooms"
                      type="number"
                      min="1"
                      max="10"
                      {...form.register("rooms", { valueAsNumber: true })}
                      className={form.formState.errors.rooms ? "border-destructive" : ""}
                      data-testid="input-rooms"
                    />
                    {form.formState.errors.rooms && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.rooms.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="bathrooms">Number of Bathrooms *</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      min="1"
                      max="5"
                      {...form.register("bathrooms", { valueAsNumber: true })}
                      className={form.formState.errors.bathrooms ? "border-destructive" : ""}
                      data-testid="input-bathrooms"
                    />
                    {form.formState.errors.bathrooms && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.bathrooms.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card data-testid="schedule-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-primary" size={24} />
                  Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      min={today}
                      {...form.register("preferredDate")}
                      className={form.formState.errors.preferredDate ? "border-destructive" : ""}
                      data-testid="input-date"
                    />
                    {form.formState.errors.preferredDate && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select value={form.watch("preferredTime")} onValueChange={(value) => form.setValue("preferredTime", value)}>
                      <SelectTrigger data-testid="select-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.preferredTime && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.preferredTime.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card data-testid="customer-info-card">
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      className={form.formState.errors.firstName ? "border-destructive" : ""}
                      data-testid="input-first-name"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      className={form.formState.errors.lastName ? "border-destructive" : ""}
                      data-testid="input-last-name"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className={form.formState.errors.email ? "border-destructive" : ""}
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      {...form.register("phone")}
                      className={form.formState.errors.phone ? "border-destructive" : ""}
                      data-testid="input-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    rows={3}
                    placeholder="Enter your full address including city, state, and zip code"
                    {...form.register("address")}
                    className={form.formState.errors.address ? "border-destructive" : ""}
                    data-testid="textarea-address"
                  />
                  {form.formState.errors.address && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.address.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                  <Textarea
                    id="instructions"
                    rows={3}
                    placeholder="Any special requirements, areas to focus on, or access instructions..."
                    {...form.register("instructions")}
                    data-testid="textarea-instructions"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card data-testid="price-summary-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-primary" size={24} />
                  Price Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Estimated Total:</span>
                    <span className="text-3xl font-bold text-primary" data-testid="estimated-total">
                      ${estimatedPrice}
                    </span>
                  </div>
                  {form.watch("frequency") !== "onetime" && (
                    <div className="text-sm text-secondary font-medium mb-4">
                      {frequencyOptions.find(f => f.value === form.watch("frequency"))?.discount} applied
                    </div>
                  )}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span>{serviceOptions.find(s => s.value === form.watch("serviceType"))?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms:</span>
                      <span>{form.watch("rooms")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>{form.watch("bathrooms")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span>{frequencyOptions.find(f => f.value === form.watch("frequency"))?.label}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-background rounded border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary w-4 h-4" />
                      <span>Final price confirmed after service assessment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12"
                disabled={bookingMutation.isPending}
                data-testid="button-confirm-booking"
              >
                {bookingMutation.isPending ? "Submitting..." : "Confirm Booking"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting this form, you agree to our terms of service and privacy policy. 
                We'll contact you within 2 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
