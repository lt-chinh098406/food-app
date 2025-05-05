import { useIsMobile } from '@/hooks/useIsMobile';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/faq', label: 'Faq' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const activeNavLinks = useMemo(() => {
    return navLinks.map((link) => ({
      ...link,
      isActive: link.href === pathname,
    }));
  }, [pathname]);

  return (
    <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
      <Link href="/" className="items-center flex">
        <Image src="/logo.svg" alt="Bella Onojie" width={isMobile ? 120 : 200} height={isMobile ? 40 : 60} />
      </Link>
      <nav className="hidden md:flex items-center gap-40">
        {activeNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium ${
              link.isActive ? 'text-primary' : 'text-gray-600 hover:text-primary transition-colors'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-10 w-10" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4 mt-10 px-6">
            {activeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold ${
                  link.isActive ? 'text-primary' : 'text-gray-700'
                } hover:text-primary transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default memo(Header);
