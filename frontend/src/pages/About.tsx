import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Geeta Aviation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in">
            Nepal's leading aviation training institute, committed to excellence in aviation education
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Geeta Aviation Pvt. Ltd. is a premier aviation training institute based in Kathmandu, Nepal. 
                We specialize in providing world-class training programs for aspiring pilots, cabin crew members, 
                and airport ground operations personnel.
              </p>
              <p>
                With state-of-the-art facilities including advanced flight simulators, aircraft mockups, 
                interactive classrooms, and dedicated grooming centers, we offer comprehensive training that 
                prepares students for successful careers in the aviation industry.
              </p>
              <p>
                Our partnerships with leading flight schools in South Africa and the USA, combined with our 
                collaborations with major Nepali airlines including Yeti Airlines, Buddha Air, and Danfe Airlines, 
                ensure that our students receive training that meets international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class aviation training that empowers individuals to achieve their dreams 
                  of working in the aviation industry while maintaining the highest standards of safety and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and respected aviation training institute in Nepal, recognized globally 
                  for excellence in aviation education and producing industry-ready professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, Safety, Integrity, Innovation, and Student Success. We are committed to maintaining 
                  the highest standards in everything we do and ensuring every student achieves their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Advanced Flight Simulator</h3>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art flight simulators providing realistic training experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Aircraft Mockup</h3>
                <p className="text-sm text-muted-foreground">
                  Full-scale aircraft mockup for hands-on cabin crew training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Test Center</h3>
                <p className="text-sm text-muted-foreground">
                  Authorized test center for aptitude tests and assessments
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Interactive Classrooms</h3>
                <p className="text-sm text-muted-foreground">
                  Modern classrooms equipped with latest teaching technology
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Grooming Center</h3>
                <p className="text-sm text-muted-foreground">
                  Professional makeup and grooming facilities for cabin crew training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Assessment Facilities</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive assessment and examination facilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">International Flight Schools</h3>
              <p className="text-muted-foreground">
                We partner with leading flight schools in South Africa and the United States, 
                providing our students with opportunities to complete their pilot training and obtain 
                licenses at world-class facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Nepali Airlines</h3>
              <p className="text-muted-foreground mb-4">
                We work closely with major Nepali airlines to conduct assessments, aptitude tests, 
                and recruitment processes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Yeti Airlines</li>
                <li>Buddha Air</li>
                <li>Danfe Airlines</li>
                <li>And other leading aviation companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
