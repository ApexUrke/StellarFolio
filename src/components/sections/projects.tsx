import { config, type Project } from '@/lib/config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="holographic-border group overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/80 hover:shadow-accent/20 hover:shadow-2xl">
      <CardHeader>
          <div className="relative h-48 w-full overflow-hidden rounded-md">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="futuristic interface"
            />
          </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle className="font-headline text-xl text-glow-accent">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-secondary/70">{tag}</Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-headline font-bold text-glow-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    </section>
  );
}
