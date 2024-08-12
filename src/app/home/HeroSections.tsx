'use client';

import { useEffect, useState } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Stacks } from './Stacks';
import { Works } from './Works';

export function HeroSections() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
    setTimeout(() => setShow(true), 1600);
  }, []);

  return (
    <div className="mt-32 grid grid-cols-8 gap-6">
      <About show={show} />
      <Contact show={show} />
      <Stacks show={show} />
      <Works show={show} />
    </div>
  );
}
