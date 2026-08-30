import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';

import Introduction from '@/modules/home/components/Introduction';
import TechStack from '@/modules/home/components/TechStack';
import Services from '@/modules/home/components/Services';
import Projects from '@/modules/projects/components/Projects';
import Experiences from '@/modules/about/components/Experiences';
import Education from '@/modules/about/components/Education';
import Contact from '@/modules/contact/components/Contact';

const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Introduction />
      <Breakline className="my-8" />
      <TechStack />
      <Breakline className="my-8" />
      <Projects />
      <Breakline className="my-8" />
      <Experiences />
      <Breakline className="my-8" />
      <Education />
      <Breakline className="my-8" />
      <Services />
      <Breakline className="my-8" />
      <Contact />
    </Container>
  );
};

export default HomePage;
