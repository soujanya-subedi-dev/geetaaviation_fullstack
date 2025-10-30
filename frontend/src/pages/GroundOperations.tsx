import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Package, Users, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroundOperations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ground Operations Training
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Master the essential skills for airport ground operations with our comprehensive 
              training program covering all aspects of ground handling and passenger services.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-4">
                Our ground operations training program prepares you for a career in airport ground 
                handling, passenger services, and airport operations management. This comprehensive 
                program covers all aspects of ground operations in the aviation industry.
              </p>
              <p className="text-muted-foreground mb-4">
                Students receive hands-on training in passenger check-in, baggage handling, ramp 
                operations, and airport safety procedures. Our in-house training ensures you're 
                ready for immediate employment in the aviation sector.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Join Program</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Airport Ops</h3>
                  <p className="text-sm text-muted-foreground">Complete operations training</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Package className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Cargo Handling</h3>
                  <p className="text-sm text-muted-foreground">Baggage and cargo procedures</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Passenger Service</h3>
                  <p className="text-sm text-muted-foreground">Check-in and boarding</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ClipboardCheck className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Safety Standards</h3>
                  <p className="text-sm text-muted-foreground">Airport safety protocols</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Curriculum</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Passenger Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check-in procedures and systems</li>
                  <li>• Boarding gate operations</li>
                  <li>• Ticket and reservation systems</li>
                  <li>• Customer service and communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Baggage Handling</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Baggage sorting and loading</li>
                  <li>• Lost baggage procedures</li>
                  <li>• Special baggage handling</li>
                  <li>• Cargo and freight operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Ramp Operations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aircraft marshalling and guidance</li>
                  <li>• Ground support equipment operation</li>
                  <li>• Aircraft servicing procedures</li>
                  <li>• Turnaround management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Airport Safety & Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aviation security procedures</li>
                  <li>• Safety protocols and regulations</li>
                  <li>• Emergency response procedures</li>
                  <li>• Dangerous goods handling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Airport Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Airport operations management</li>
                  <li>• Coordination and communication</li>
                  <li>• Flight information systems</li>
                  <li>• Airport regulations and compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Graduates of our ground operations program can pursue various career paths:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Passenger Service Agent</li>
                  <li>• Check-in Agent</li>
                  <li>• Ramp Agent / Ground Handler</li>
                  <li>• Baggage Handler / Supervisor</li>
                  <li>• Cargo Operations Staff</li>
                  <li>• Airport Customer Service Representative</li>
                  <li>• Ground Operations Coordinator</li>
                  <li>• Airport Operations Officer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Entry Requirements</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Minimum age: 18 years</li>
                  <li>• Education: +2 or equivalent</li>
                  <li>• Good physical fitness</li>
                  <li>• Basic computer literacy</li>
                  <li>• Good communication skills in English and Nepali</li>
                  <li>• Ability to work in shifts and outdoor conditions</li>
                  <li>• Team player with good interpersonal skills</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroundOperations;
