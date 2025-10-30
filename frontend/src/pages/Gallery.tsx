import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const testimonials = [
    {
      name: "Raj Kumar Shrestha",
      role: "Commercial Pilot",
      company: "Buddha Air",
      content: "Geeta Aviation provided me with excellent training and guidance throughout my pilot training journey. The instructors were highly experienced and the facilities were top-notch.",
      image: "👨‍✈️",
    },
    {
      name: "Sabina Gurung",
      role: "Senior Cabin Crew",
      company: "Yeti Airlines",
      content: "The cabin crew training at Geeta Aviation was comprehensive and practical. The aircraft mockup training really prepared me for real-world scenarios.",
      image: "👩‍✈️",
    },
    {
      name: "Bikash Tamang",
      role: "Ground Operations Supervisor",
      company: "TIA Kathmandu",
      content: "I'm grateful for the ground operations training I received. It gave me the skills and confidence to excel in my career at the airport.",
      image: "👨‍💼",
    },
    {
      name: "Anjali Maharjan",
      role: "First Officer",
      company: "Private Charter",
      content: "The international partnerships and simulator training made all the difference. I'm now flying professionally thanks to Geeta Aviation.",
      image: "👩‍✈️",
    },
  ];

  const facilityImages = [
    { title: "Flight Simulator", description: "Advanced flight simulation technology" },
    { title: "Aircraft Mockup", description: "Full-scale cabin training facility" },
    { title: "Interactive Classroom", description: "Modern learning environment" },
    { title: "Test Center", description: "Authorized assessment facility" },
    { title: "Grooming Center", description: "Professional makeup and styling" },
    { title: "Training Hall", description: "Spacious training area" },
  ];

  const trainingImages = [
    { title: "Pilot Training", description: "Students in flight simulator" },
    { title: "Cabin Crew Practice", description: "Safety procedures training" },
    { title: "Ground Operations", description: "Practical training session" },
    { title: "Graduation Day", description: "Successful graduates" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Gallery & Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in">
            Explore our facilities and hear from our successful graduates
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="facilities" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>

            <TabsContent value="facilities">
              <div className="grid md:grid-cols-3 gap-6">
                {facilityImages.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl">🏢</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid md:grid-cols-2 gap-6">
                {trainingImages.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl">📸</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
