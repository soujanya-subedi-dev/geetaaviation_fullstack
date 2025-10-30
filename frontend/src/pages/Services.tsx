import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Users, Building2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Pilot Training",
      description: "Comprehensive commercial pilot training programs with partnerships in South Africa and USA. From ground school to flight training, we prepare you for a successful career in aviation.",
      features: [
        "International license recognition",
        "Advanced flight simulator training",
        "Experienced instructors",
        "Partnership with international flight schools",
      ],
      link: "/services/pilot-training",
    },
    {
      icon: Users,
      title: "Cabin Crew Training",
      description: "Professional cabin crew and air hostess training with hands-on experience using aircraft mockups. Learn safety procedures, customer service, and professional grooming.",
      features: [
        "Aircraft mockup training",
        "Safety and emergency procedures",
        "Professional grooming and makeup",
        "Customer service excellence",
      ],
      link: "/services/cabin-crew",
    },
    {
      icon: Building2,
      title: "Ground Operations Training",
      description: "Comprehensive airport ground operations training covering all aspects of ground handling, passenger services, and airport management.",
      features: [
        "Ground handling procedures",
        "Passenger check-in systems",
        "Baggage handling",
        "Airport safety protocols",
      ],
      link: "/services/ground-operations",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in">
            Comprehensive aviation training programs designed to launch your career in the skies
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <service.icon className="h-16 w-16 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ArrowRight className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button asChild>
                        <Link to={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="bg-secondary/30 rounded-lg flex items-center justify-center p-8">
                      <service.icon className="h-32 w-32 text-primary/20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Assessment Tests</h3>
                <p className="text-muted-foreground">
                  We conduct comprehensive assessments and aptitude tests for major Nepali airlines 
                  including compass tests and other evaluation procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Career Counseling</h3>
                <p className="text-muted-foreground">
                  Expert guidance on choosing the right aviation career path and navigating the 
                  industry requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Placement Assistance</h3>
                <p className="text-muted-foreground">
                  Strong connections with airlines and aviation companies to help our graduates 
                  find employment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
