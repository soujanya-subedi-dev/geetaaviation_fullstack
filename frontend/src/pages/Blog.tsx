import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "5 Essential Tips for Aspiring Pilots in Nepal",
      excerpt: "Starting your pilot training journey? Here are the key things you need to know before beginning your aviation career.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Pilot Training",
    },
    {
      title: "A Day in the Life of a Cabin Crew Member",
      excerpt: "Ever wondered what it's like to work as cabin crew? Get an inside look at the exciting and challenging world of flight attendants.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Cabin Crew",
    },
    {
      title: "Understanding Aviation Career Opportunities in Nepal",
      excerpt: "Explore the various career paths available in Nepal's growing aviation industry and how to get started.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Career Guidance",
    },
  ];

  const events = [
    {
      title: "Open House & Career Counseling Session",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      description: "Visit our facilities, meet instructors, and learn about our programs. Free career counseling available.",
    },
    {
      title: "Pilot Assessment Test - Yeti Airlines",
      date: "April 25, 2024",
      time: "9:00 AM",
      description: "Assessment and aptitude tests for aspiring pilots. Registration required.",
    },
    {
      title: "Cabin Crew Walk-in Interview",
      date: "May 5, 2024",
      time: "11:00 AM - 3:00 PM",
      description: "Direct interviews with major Nepali airlines. Bring your resume and certificates.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Blog & Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in">
            Stay updated with the latest news, insights, and upcoming events in aviation training
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start md:self-center">
                      Upcoming
                    </Badge>
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

export default Blog;
