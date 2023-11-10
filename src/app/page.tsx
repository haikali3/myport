import AboutMe from '@/components/component/aboutme';
import Project from '@/components/component/projects';
import { Hero } from '@/components/component/hero';
import Footer from '@/components/component/footer';
import Toggle from '@/components/component/toggle';

export default function Home() {
  return (
    <main>
      <Toggle />
      <Hero />
      <AboutMe />
      <Project />
      <Footer />
    </main>
  );
}
