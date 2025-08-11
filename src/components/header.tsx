
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { config } from '@/lib/config';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function NavMenu() {
    return (
        <>
            {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                    <Link
                        href={link.href}
                        className="font-medium text-foreground/80 hover:text-foreground hover:text-glow-accent transition-colors text-lg py-2"
                    >
                        {link.label}
                    </Link>
                </SheetClose>
            ))}
        </>
    )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-headline font-bold text-glow-primary">
          {config.name}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/80 hover:text-foreground hover:text-glow-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-background/90 backdrop-blur-sm">
                <div className="flex flex-col items-start space-y-4 p-4">
                    <div className="flex justify-between w-full items-center">
                         <Link href="/" className="text-2xl font-headline font-bold text-glow-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            {config.name}
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col space-y-4 pt-8">
                        <NavMenu />
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
