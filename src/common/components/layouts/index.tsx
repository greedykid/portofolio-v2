import { ReactNode } from 'react';

import Navigation from '../sidebar/Navigation';
import Profile from '../sidebar/Profile';
import MobileHeader from '../sidebar/MobileHeader';
import Breakline from '../elements/Breakline';
import ScrollToTop from '../elements/ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Mobile top header */}
      <MobileHeader />

      <div className="flex flex-col lg:flex-row lg:gap-2 lg:py-4 xl:pb-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-1/5">
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

      <ScrollToTop />
    </div>
  );
};

export default Layout;
