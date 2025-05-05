import { useIsMobile } from '@/hooks/useIsMobile';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const isMobile = useIsMobile();
  const icons = { Instagram, Facebook, Twitter };

  const socialLinks = [
    { href: '#', icon: 'Twitter', label: 'Twitter' },
    { href: '#', icon: 'Facebook', label: 'Facebook' },
    { href: '#', icon: 'Instagram', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="items-center hidden md:flex">
            <Image src="/logo.svg" alt="Bella Onojie" width={isMobile ? 120 : 200} height={isMobile ? 40 : 60} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon as keyof typeof icons];
              return (
                <Link key={link.icon} href={link.href} className="text-primary hover:text-primary/80">
                  <Icon className="w-10 h-10" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <p className="text-sm text-gray-500">Copyright 2023 Bella Onojie.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
