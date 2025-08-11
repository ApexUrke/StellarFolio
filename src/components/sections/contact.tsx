import { config } from '@/lib/config';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 text-center">
        <h2 className="mb-4 text-3xl md:text-4xl font-headline font-bold text-glow-primary">Get In Touch</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4">
            {config.socials.map((social) => (
                <Button key={social.name} asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                </Button>
            ))}
        </div>
    </section>
  );
}
