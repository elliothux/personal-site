import { About } from './About';
import { Contact } from './Contact';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Stacks } from './Stacks';
import { Works } from './Works';

export function Home() {
  return (
    <main className="max-w-4xl max-lg:px-4 mx-auto py-24">
      <Hero />

      <div className="mt-32 grid grid-cols-8 gap-6">
        <About />
        <Contact />
        <Stacks />
        <Works />
      </div>

      <Projects />
    </main>
  );
}
