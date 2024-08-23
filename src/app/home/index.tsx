import { Link } from 'components/Link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Hero } from './Hero';
import { HeroSections } from './HeroSections';
import { Projects } from './Projects';
import { Thoughts } from './Thoughts';

export function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="max-w-4xl max-lg:px-4 mx-auto py-24">
        <Hero />
        <HeroSections />
        <Projects />
      </div>
      <div className="bg-amber-50">
        <div className="max-w-4xl max-lg:px-4 mx-auto py-24">
          <Thoughts />
        </div>
        <footer className="text-center font-light text-sm text-neutral-400 py-8 space-y-2">
          <Link href="https://elliothu.me" className="text-neutral-500 hover:text-black" underlineClassName="bg-black">
            Designed and built by Elliot Hu
            <ArrowUpRight size={18} className="inline-block ml-1 -mt-1" />
          </Link>
          <p>
            <Link
              className="text-neutral-500 hover:text-black"
              underlineClassName="bg-black"
              href="https://github.com/elliothux/personal-site"
            >
              <span>Open source on Github</span>
              <Github size={18} className="inline-block ml-2 -mt-1" />
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
