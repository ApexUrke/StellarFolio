import { config } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 mt-24">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} {config.name}. Made with ❤️ by ApexLabs.</p>
      </div>
    </footer>
  );
}
