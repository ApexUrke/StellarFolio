import { config } from '@/lib/config';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
        <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-glow-primary text-center">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
                {config.bio}
            </p>
        </div>
    </section>
  );
}
