import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import Reveal from '@/common/components/elements/Reveal';
import { getAllPosts } from '@/common/libs/blog';
import { getGithubStats } from '@/common/libs/github';

import Introduction from '@/modules/home/components/Introduction';
import TechStack from '@/modules/home/components/TechStack';
import Services from '@/modules/home/components/Services';
import Projects from '@/modules/projects/components/Projects';
import BlogSection from '@/modules/blog/components/BlogSection';
import Statistics from '@/modules/stats/components/Statistics';
import GitHubStats from '@/modules/stats/components/GitHubStats';
import Experiences from '@/modules/about/components/Experiences';
import Education from '@/modules/about/components/Education';
import Contact from '@/modules/contact/components/Contact';

const HomePage = async () => {
  const [posts, githubStats] = await Promise.all([
    getAllPosts(),
    getGithubStats(),
  ]);

  return (
    <Container data-aos="fade-up">
      <Introduction />
      <Breakline className="my-8" />
      <Reveal><TechStack /></Reveal>
      <Breakline className="my-8" />
      <Reveal><Projects /></Reveal>
      <Breakline className="my-8" />
      <Reveal><BlogSection posts={posts} /></Reveal>
      <Breakline className="my-8" />
      <Reveal><Statistics /></Reveal>
      <Breakline className="my-8" />
      <GitHubStats stats={githubStats} />
      <Breakline className="my-8" />
      <Reveal><Experiences /></Reveal>
      <Breakline className="my-8" />
      <Reveal><Education /></Reveal>
      <Breakline className="my-8" />
      <Reveal><Services /></Reveal>
      <Breakline className="my-8" />
      <Reveal><Contact /></Reveal>
    </Container>
  );
};

export default HomePage;
