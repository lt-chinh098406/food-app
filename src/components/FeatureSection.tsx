import Image from 'next/image';
import { memo } from 'react';

interface FeatureSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
}

const FeatureSection = ({ image, imageAlt, title, subtitle, description, reverse = false }: FeatureSectionProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between md:gap-36 mb-10 md:mb-24 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`flex-1 ${reverse ? 'ml-10' : ''} text-center md:text-left mx-8 md:mx-0`}>
        <p className="text-primary font-semibold mb-2 text-2xl">{subtitle}</p>
        <h2 className="text-[40px] md:text-[40px] font-bold mb-4 text-gray-900 py-4">{title}</h2>
        <p className="text-gray-500 text-2xl leading-relaxed">{description}</p>
      </div>
      <div className="relative w-[320px] h-[520px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 320px"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(FeatureSection);
