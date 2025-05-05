import Image from 'next/image';
import { memo } from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40 z-10 hidden md:block" />
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/hero-section.webp"
          alt="Delicious food"
          width={1920}
          height={600}
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center hidden md:block"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 absolute inset-0 z-20 flex flex-col items-center justify-center text-center md:text-white">
        <p className="text-lg md:text-xl mb-2 font-medium">Food app</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="text-lg mb-8 font-medium">Download the bella onoje&apos;s food app now on</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 font-semibold">
            Playstore
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/30 rounded-full px-12 font-semibold"
          >
            App store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
