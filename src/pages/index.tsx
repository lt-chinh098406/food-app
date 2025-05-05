import { FEATURE_SECTIONS, type FeatureSection } from '@/lib/constants';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: true });
const Banner = dynamic(() => import('@/components/Banner'), { ssr: true });
const FeatureSection = dynamic(() => import('@/components/FeatureSection'), { ssr: true });
const DownloadSection = dynamic(() => import('@/components/DownloadSection'), { ssr: true });

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-20 border-b-2 border-gray-300 pb-10 md:border-t-2 md:border-b-0 md:pt-10 md:pb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How the app works</h2>
        </div>
        {FEATURE_SECTIONS.map((feature: FeatureSection) => (
          <FeatureSection key={feature.title} {...feature} />
        ))}
      </div>
      <DownloadSection />
    </>
  );
};

export default HomePage;
