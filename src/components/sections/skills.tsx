import { config, type Skill } from '@/lib/config';

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-4 rounded-lg p-4 holographic-border bg-card/50 backdrop-blur-sm">
      <skill.icon className="h-8 w-8 text-accent" />
      <span className="text-lg font-medium">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-headline font-bold text-glow-primary">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {config.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    </section>
  );
}
