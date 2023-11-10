'use client';
import AboutMe from '@/components/component/aboutme';
import Project from '@/components/component/projects';
import { Hero } from '@/components/component/hero';
import Footer from '@/components/component/footer';
import Toggle from '@/components/component/toggle';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState('light');

  return (
    <main>
      <Toggle selected={selected} setSelected={setSelected} />
      <Hero selected={selected} setSelected={setSelected} />
      <AboutMe />
      <Project />
      <Footer />
    </main>
  );
}
