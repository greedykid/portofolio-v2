import { ReactNode } from 'react';

import Navigation from '../sidebar/Navigation';
import Profile from '../sidebar/Profile';
import Breakline from '../elements/Breakline';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row lg:gap-2 lg:py-4 xl:pb-8">
        <aside className="lg:w-1/5">
          <div className="sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 lg:py-6">
            <Profile />
            <Breakline className="mx-1" />
            <Navigation />
          </div>
        </aside>
        <main className="max-w-[915px] transition-all duration-300 lg:w-4/5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
