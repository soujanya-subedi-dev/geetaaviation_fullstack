import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Award, Globe, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PilotTraining = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Pilot Training Program</h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Launch your career as a commercial pilot with our comprehensive training program, 
              recognized internationally and conducted in partnership with leading flight schools.
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
                Our pilot training program is designed to take you from zero experience to a licensed 
                commercial pilot. We partner with top-tier flight schools in South Africa and the USA 
                to ensure you receive world-class training that meets international standards.
              </p>
              <p className="text-muted-foreground mb-4">
                The program combines theoretical knowledge with practical flight training, using our 
                advanced flight simulators and actual aircraft to give you comprehensive experience.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Plane className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Flight Hours</h3>
                  <p className="text-sm text-muted-foreground">200+ hours of flight training</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">License</h3>
                  <p className="text-sm text-muted-foreground">CPL license recognized globally</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">International</h3>
                  <p className="text-sm text-muted-foreground">Training in USA & South Africa</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-sm text-muted-foreground">18-24 months program</p>
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
                <h3 className="text-xl font-semibold mb-3">Ground School</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aviation theory and regulations</li>
                  <li>• Navigation and meteorology</li>
                  <li>• Aircraft systems and performance</li>
                  <li>• Air law and human factors</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Flight Simulator Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Instrument flying procedures</li>
                  <li>• Emergency procedures practice</li>
                  <li>• Multi-engine operations</li>
                  <li>• Advanced navigation techniques</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Actual Flight Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Solo and dual instruction flights</li>
                  <li>• Cross-country navigation</li>
                  <li>• Night flying experience</li>
                  <li>• Commercial pilot maneuvers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Assessment & Certification</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Written examinations</li>
                  <li>• Practical flight tests</li>
                  <li>• Medical certification support</li>
                  <li>• License application assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Entry Requirements</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Minimum age: 18 years</li>
                  <li>• Education: +2 or equivalent with Physics and Mathematics</li>
                  <li>• Medical fitness: Class 1 medical certificate</li>
                  <li>• English proficiency: Good command of spoken and written English</li>
                  <li>• Vision: 20/20 vision (corrected or uncorrected)</li>
                  <li>• No criminal record</li>
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

export default PilotTraining;
