import YouTubeThumbsPage from '@/app/thumbnails/components/page';
import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';

export default function page() {
  return (
    <>
      <NavBarSection />
      <YouTubeThumbsPage />
      <FooterSection />
    </>
  );
}