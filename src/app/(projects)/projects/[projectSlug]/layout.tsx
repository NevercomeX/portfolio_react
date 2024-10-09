import NavBarSection from '@/components/Navs';
import FooterSection from '@/components/Footer';

import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <NavBarSection />
      <div className='px-8 sm:px-24 md:px-52 lg:px-1/8 flex flex-col justify-center'>
        {children}
      </div>
      <FooterSection />
    </>
  );
}
