import { Hero } from './Hero';
import { Projects } from './Projects';

export function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="max-w-4xl max-lg:px-4 mx-auto py-24">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
