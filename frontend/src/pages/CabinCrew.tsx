import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CabinCrew = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Cabin Crew Training Program</h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Become a professional cabin crew member with our comprehensive training program 
              featuring hands-on experience with aircraft mockups and industry-standard procedures.
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
                Our cabin crew training program prepares you for a rewarding career in the aviation 
                industry as an air hostess or flight attendant. The program is conducted entirely 
                in-house with experienced instructors and state-of-the-art facilities.
              </p>
              <p className="text-muted-foreground mb-4">
                You'll receive hands-on training using our full-scale aircraft mockup, learn professional 
                grooming and customer service skills, and master all safety and emergency procedures 
                required by international aviation standards.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Customer Service</h3>
                  <p className="text-sm text-muted-foreground">Excellence in passenger care</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Emergency procedures training</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Grooming</h3>
                  <p className="text-sm text-muted-foreground">Professional appearance standards</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Career Ready</h3>
                  <p className="text-sm text-muted-foreground">Industry placement support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Modules</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Safety & Emergency Procedures</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aircraft safety equipment operation</li>
                  <li>• Emergency evacuation procedures</li>
                  <li>• Fire fighting and first aid</li>
                  <li>• Ditching and water survival</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Customer Service Excellence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Passenger handling and communication</li>
                  <li>• In-flight service procedures</li>
                  <li>• Conflict resolution techniques</li>
                  <li>• Special passenger assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Professional Grooming & Image</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Makeup and personal care</li>
                  <li>• Uniform standards and presentation</li>
                  <li>• Body language and etiquette</li>
                  <li>• Professional communication skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Aviation Knowledge</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aviation terminology and regulations</li>
                  <li>• Aircraft types and configurations</li>
                  <li>• Weather awareness</li>
                  <li>• Security procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Practical Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aircraft mockup simulations</li>
                  <li>• Service delivery practice</li>
                  <li>• Emergency drills</li>
                  <li>• Mock interviews and assessments</li>
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
                  <li>• Education: +2 or equivalent</li>
                  <li>• Height: Minimum 5'2" (157 cm) for females, 5'5" (165 cm) for males</li>
                  <li>• Weight: Proportionate to height</li>
                  <li>• Vision: 6/6 vision (correctable)</li>
                  <li>• Good physical and mental health</li>
                  <li>• Good communication skills in English and Nepali</li>
                  <li>• Pleasant personality and professional appearance</li>
                  <li>• No visible tattoos or body piercings</li>
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

export default CabinCrew;
