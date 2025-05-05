import Image from 'next/image';

const Banner = () => {
  return (
    <section className="flex justify-center -mt-48 md:-mt-60 relative z-30 mx-auto px-4 md:px-0 max-w-7xl mb-20 md:mb-32">
      <div className="flex md:gap-12 items-center justify-center mt-20 pb-12 max-w-full overflow-hidden">
        <div className="relative z-10 w-full md:w-[400px] h-[400px] md:h-[520px] overflow-hidden transform hover:scale-105 transition-transform duration-300 md:translate-x-28">
          <Image
            src="/images/banner-1.webp"
            alt="App screenshot"
            width={400}
            height={520}
            priority={false}
            loading="lazy"
            quality={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full md:w-[400px] h-[400px] md:h-[520px] overflow-hidden transform hover:scale-105 transition-transform duration-300 -translate-x-4 translate-y-16 md:-translate-x-32">
          <Image
            src="/images/banner-2.webp"
            alt="App screenshot"
            width={400}
            height={520}
            priority={false}
            loading="lazy"
            quality={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
