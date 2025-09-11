import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useLenis } from '@/hooks/useLenis';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useLenis();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;