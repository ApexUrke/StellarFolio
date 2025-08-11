import { config } from '@/lib/config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center">
      <div className="w-full space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-glow-primary">
          {config.name}
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-headline text-muted-foreground max-w-4xl">
          {config.title}
        </p>
        <div className="flex gap-4">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link href="#contact">
                    Get in Touch
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
