import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Code as CodeIcon, Server, Database, ClipboardList, Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="container py-10 md:py-16 mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-1">
        <div className="flex-1 space-y-4">
          <Badge className="px-3 py-1 text-sm">Available for work</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex items-center">
  Hi, I'm{' '}
  <Image
    src="https://signature.freefire-name.com/img.php?f=2&t=Soukayna"
    alt="Soukayna Mouradi"
    width={250} // Adjust width as needed
    height={50} // Adjust height as needed
    className="ml-2" // Optional: Adds a margin to the left of the image
  />
</h1>
          <p className="text-xl text-muted-foreground">
            Bridging tech and product, I bring full-stack know-how, a sharp eye for aesthetics, and hands-on project leadership to every digital experience.
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline">Download CV</Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/Soukidev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/soukaina-mouradi-digital/?locale=en_US" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="https://contents.bebee.com/users/id/gI8bI635658c500527/_avatar-DDCxt-400.png"
              alt="Soukayna Mouradi"
              width={317}
              height={317}
              className="object-contain rounded-full border-1 border-primary/10"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects">
            <Button variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Preview Cards - Limited to 3 for homepage */}
          {[1, 2, 3].map((project) => (
            <div key={project} className="group">
              <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src={project === 1
                      ? 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4a8fc185672061.6567a10429f69.jpg'
                      : project === 2
                      ? 'https://brandvillage.com.au/wp-content/uploads/2022/07/3525363.jpeg'
                      : 'https://tint.creativemarket.com/pBu1-gM7ghMYuaI3sE-wXyNmYo6263GPHbkXErASFnc/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUwODYvNTA4NjEvNTA4NjE0MzgvOS1vLnBuZyMxNzE2OTA5NjIz?1716909623'}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project === 1
                      ? 'End-to-End Web & E-Commerce Development'
                      : project === 2
                      ? 'Brand Identity & Creative Projects'
                      : 'Education & Training: Empowering Entrepreneurs '}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {project === 1
                      ? 'Leading the development of cutting-edge websites and e-commerce solutions, leveraging CMS platforms like Shopify and WooCommerce, alongside the power of the MERN stack (MongoDB, Express.js, React, Node.js) to create dynamic, scalable, and highly interactive web experiences. '
                      : project === 2
                      ? 'Spearheading the development of powerful brand identities and creative projects that resonate with target audiences and establish lasting, authentic connections. '
                      : 'Empowering entrepreneurs through transformative education and training, equipping them with the tools and knowledge to build and scale successful businesses.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              My <span className="text-black dark:text-white">Expertise</span>
            </h2>
            <Link href="/about#skills">
              <Button 
                variant="outline" 
                className="px-5 py-2.5 bg-transparent text-sm font-medium text-black dark:text-white border border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                category: "Frontend", 
                icon: <CodeIcon className="h-6 w-6 text-white" />,
                skills: [
                  { name: "React", detail: "A JavaScript library for building user interfaces." },
                  { name: "HTML", detail: "The standard markup language for documents designed to be displayed in a web browser." },
                  { name: "CSS", detail: "A style sheet language used for describing the presentation of a document written in HTML." },
                  { name: "Bootstrap", detail: "A style sheet language used for describing the presentation of a document written in HTML." },
                ]
              },
              { 
                category: "Backend", 
                icon: <Server className="h-6 w-6 text-white" />,
                skills: [
                  { name: "Node.js", detail: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
                  { name: "Express", detail: "A minimal and flexible Node.js web application framework." },
                  { name: "MongoDB", detail: "A NoSQL database that uses a document-oriented data model." },
                ]
              },
              { 
                category: "Database", 
                icon: <Database className="h-6 w-6 text-white" />,
                skills: [
                  { name: "MySQL", detail: "An open-source relational database management system." },
                  
                  { name: "MongoDB", detail: "A NoSQL database that uses a document-oriented data model." },
                ]
              },
              { 
                category: "Project Management", 
                icon: <ClipboardList className="h-6 w-6 text-white" />,
                skills: [
                { name: "ScrumBan", detail: "A highly efficient hybrid project management framework combining Scrum and Kanban principles, designed to optimize workflow, enhance team collaboration for maximum productivity."  },
                  { name: "Jira", detail: "A popular project management and issue tracking tool." },
                  { name: "Trello", detail: "A collaboration tool that organizes your projects into boards." },
                  { name: "Asana", detail: "A web and mobile application designed to help teams organize, track, and manage work." },
                ]
              }
            ].map(({ category, icon, skills }) => (
              <div 
                key={category} 
                className="relative overflow-hidden rounded-2xl border border-gray-700 bg-black shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Subtle accent in corner */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-gray-700/20 to-gray-900/20 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative p-6 z-10">
                  <div className="flex items-center space-x-3 mb-5">
                    {icon}
                    <h3 className="font-bold text-xl text-white">{category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="group/skill relative cursor-pointer"
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200">
                          <span className="font-medium text-white">{skill.name}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover/skill:text-white transition-colors duration-200" />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute z-20 left-0 mt-1 p-3 w-full bg-black text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-200">
                          {skill.detail}
                          <div className="absolute -top-2 left-4 w-4 h-4 bg-black transform rotate-45"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and open to new opportunities. Let's connect!
        </p>
        <Link href="/contact">
          <Button size="lg">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
