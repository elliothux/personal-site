'use client';

import { Bento } from 'components/Bento';
import { HeroSection } from 'components/HeroSection';
import {
  Ampersand,
  BicepsFlexed,
  BriefcaseBusiness,
  Camera,
  Code,
  Earth,
  Heart,
  LucideIcon,
  Rocket,
} from 'lucide-react';
import { Balancer } from 'react-wrap-balancer';

const items: [LucideIcon, string][] = [
  [BicepsFlexed, 'A fitness aficionado, fostering fervor for fitness'],
  [Code, 'A tech autodidact, a programming enthusiast, adept in full-stack'],
  [Earth, 'Aspiring to advance global wellness with technology'],
  [Rocket, 'Avid for emerging tech, embracing open-source ardently'],
  [Ampersand, 'Attentive to code cleanliness'],
  [Heart, 'Advocating for customers at the core'],
  [BriefcaseBusiness, 'A product-driven entrepreneur'],
  [Camera, 'An artist at heart, framing life through photography'],
];

export function About({ show }: { show: boolean }) {
  return (
    <HeroSection show={show} delay={1.5} className="col-span-full md:col-span-5">
      <Bento title="About me" className="h-full" background={[520, 385, '801cb044-2747-46f9-0901-1d83a19f5500']}>
        <div className="grid gap-2 mt-8 mb-4">
          {items.map(([Icon, text]) => (
            <p key={text} className="flex items-start lg:items-center gap-2 text-sm font-light py-1">
              <Icon size={18} className="grow-0 shrink-0" strokeWidth={1.4} />
              <Balancer as="span">{text}</Balancer>
            </p>
          ))}
        </div>
      </Bento>
    </HeroSection>
  );
}
