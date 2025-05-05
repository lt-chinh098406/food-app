import Image from 'next/image';
import { memo } from 'react';
import { Button } from './ui/button';

const DownloadSection = () => {
  return (
    <section className="relative mt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/download.webp"
          alt="Download background"
          fill
          className="object-cover w-full h-full"
          priority={false}
          loading="lazy"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center py-20 px-8 text-white">
        <h2 className="text-[40px] font-bold mb-4">Download the app now.</h2>
        <p className="mb-8 text-2xl max-w-xl mx-auto font-medium">
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 font-semibold">
            Playstore
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/30 rounded-sm px-8 font-semibold"
          >
            App store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(DownloadSection);
