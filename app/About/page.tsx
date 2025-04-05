import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container py-10 md:py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      {/* Bio Section */}
      <section className="grid md:grid-cols-2 gap-8 py-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">My Journey</h2>
          <p className="text-lg">
            I'm a full-stack developer with over 5 years of experience building web applications. I specialize in
            JavaScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-lg">
            My journey in software development began when I was in college, and I've been passionate about creating
            intuitive, efficient, and beautiful digital experiences ever since.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600&text=About Me"
            alt="John Doe working"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">B.S. Computer Science</h4>
                  <span className="text-sm text-muted-foreground">2015-2019</span>
                </div>
                <p className="text-muted-foreground">Stanford University</p>
                <p className="mt-2">
                  Graduated with honors. Specialized in web technologies and artificial intelligence.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Web Development Bootcamp</h4>
                  <span className="text-sm text-muted-foreground">2014</span>
                </div>
                <p className="text-muted-foreground">Coding Academy</p>
                <p className="mt-2">Intensive 12-week program focused on full-stack JavaScript development.</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-medium mb-4">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <span className="text-sm text-muted-foreground">2021-Present</span>
                </div>
                <p className="text-muted-foreground">Tech Innovations Inc.</p>
                <p className="mt-2">
                  Lead the frontend development team, implementing modern React applications with Next.js.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Full-Stack Developer</h4>
                  <span className="text-sm text-muted-foreground">2019-2021</span>
                </div>
                <p className="text-muted-foreground">Digital Solutions LLC</p>
                <p className="mt-2">Developed and maintained web applications using React, Node.js, and MongoDB.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8">
        <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkillCard title="Frontend" skills={["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"]} />
          <SkillCard title="Backend" skills={["Node.js", "Express", "Python", "Django", "GraphQL"]} />
          <SkillCard title="Database" skills={["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"]} />
          <SkillCard title="DevOps" skills={["Docker", "AWS", "CI/CD", "Git", "Linux"]} />
          <SkillCard title="Design" skills={["Figma", "Adobe XD", "UI/UX", "Responsive Design"]} />
          <SkillCard title="Other" skills={["RESTful APIs", "Testing", "Agile", "Performance Optimization"]} />
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6">Personal Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Hiking", "Reading", "Photography", "Travel"].map((interest) => (
            <div key={interest} className="bg-muted rounded-lg p-4 text-center">
              <div className="relative h-40 mb-4 rounded overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=160&width=160&text=${interest}`}
                  alt={interest}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">{interest}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <Badge variant="outline" className="w-full justify-center py-1.5">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

