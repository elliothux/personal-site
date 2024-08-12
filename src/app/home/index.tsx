import { Hero } from './Hero';
import { HeroSections } from './HeroSections';
import { Projects } from './Projects';

export function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="max-w-4xl max-lg:px-4 mx-auto py-24">
        <Hero />
        <HeroSections />
        <Projects />
      </div>
    </main>
  );
}
