import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, XCircle, RotateCcw, Award, Clock, Shield, CreditCard, Users } from "lucide-react";

export default function PoliciesPage() {
  const policies = [
    {
      id: "booking",
      icon: Calendar,
      title: "Booking Policy",
      color: "text-primary",
      content: [
        "We recommend booking at least 48 hours in advance to ensure availability.",
        "Same-day bookings may be available for an additional $25 rush fee.",
        "All bookings require confirmation via email or phone call within 2 hours.",
        "A valid phone number and email address are required for all bookings.",
        "Special requests should be noted at the time of booking."
      ]
    },
    {
      id: "cancellation",
      icon: XCircle,
      title: "Cancellation Policy",
      color: "text-destructive",
      content: [
        "Cancellations must be made at least 24 hours before the scheduled service.",
        "Cancellations with less than 24 hours notice will incur a 50% service fee.",
        "No-show appointments will be charged the full service amount.",
        "We understand emergencies happen - contact us to discuss your situation.",
        "Recurring service cancellations require 48 hours notice."
      ]
    },
    {
      id: "refund",
      icon: RotateCcw,
      title: "Refund Policy",
      color: "text-accent",
      content: [
        "We stand behind our work with a 100% satisfaction guarantee.",
        "If you're not satisfied, we'll return within 24 hours at no additional cost.",
        "Refunds are considered on a case-by-case basis for unresolved issues.",
        "Refund requests must be made within 24 hours of service completion.",
        "Partial refunds may be issued for incomplete or unsatisfactory services."
      ]
    },
    {
      id: "guarantee",
      icon: Award,
      title: "Service Guarantee",
      color: "text-secondary",
      content: [
        "We guarantee 100% satisfaction with all our cleaning services.",
        "If any area doesn't meet our high standards, we'll re-clean it free of charge.",
        "Our guarantee covers all cleaning tasks specified in your service agreement.",
        "Quality issues must be reported within 24 hours of service completion.",
        "Your happiness is our priority, and we'll work to resolve any concerns."
      ]
    }
  ];

  const additionalPolicies = [
    {
      icon: Clock,
      title: "Scheduling & Access",
      items: [
        "Our team arrives within the scheduled 2-hour window",
        "Please ensure someone is home to provide access",
        "Hide valuable items and secure pets during cleaning",
        "Clear cleaning areas of personal items when possible"
      ]
    },
    {
      icon: Shield,
      title: "Insurance & Liability",
      items: [
        "All team members are fully insured and bonded",
        "We carry comprehensive liability insurance",
        "Any accidental damage is covered by our insurance",
        "Report any issues immediately for prompt resolution"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      items: [
        "Payment is due upon completion of service",
        "We accept cash, check, and all major credit cards",
        "Recurring services can be set up with automatic payment",
        "Invoices are provided for all services"
      ]
    },
    {
      icon: Users,
      title: "Customer Responsibilities",
      items: [
        "Provide clear access to all areas to be cleaned",
        "Secure or remove fragile and valuable items",
        "Ensure pets are secured or inform us of their presence",
        "Communicate any special requirements or concerns"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-testid="policies-header">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Policies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear terms and policies to ensure a great experience for everyone. 
              We believe in transparency and want you to know exactly what to expect.
            </p>
          </div>

          {/* Main Policies */}
          <div className="space-y-8 mb-16">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <Card key={policy.id} data-testid={`policy-${policy.id}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={`${policy.color}`} size={28} />
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-3" data-testid={`policy-${policy.id}-item-${index}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Policies Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="additional-policies-title">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalPolicies.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <Card key={index} data-testid={`additional-policy-${index}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Icon className="text-primary" size={24} />
                        {policy.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {policy.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2" data-testid={`additional-policy-${index}-item-${itemIndex}`}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Emergency Policy */}
          <Card className="mb-16" data-testid="emergency-policy">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Emergency & Special Situations</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                We understand that life happens and sometimes plans need to change. While we have standard policies 
                in place, we're always willing to work with our customers during genuine emergencies or special circumstances.
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Contact Us Immediately If:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground text-left">
                  <ul className="space-y-2">
                    <li>• There's an emergency preventing access to your home</li>
                    <li>• You notice any accidental damage during service</li>
                    <li>• You have urgent questions about our service</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• You need to discuss a special circumstance</li>
                    <li>• There are safety concerns we should know about</li>
                    <li>• You have any other time-sensitive concerns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Questions */}
          <div className="text-center bg-muted/30 rounded-2xl p-8" data-testid="policies-contact">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Our Policies?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're here to help clarify any questions you might have about our policies. 
              Contact us anytime for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@cleanhomes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
