import {
  NearestTourGuide,
  SearchDestination,
  ShortcutButton,
} from '@components/modules/home';
import { Footer, Navbar } from '@ui';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const routeToLogin = () => {
    router.push('/auth/login');
  };
  return (
    <div className="h-minscreen bg-slate-800">
      <Navbar />
      <SearchDestination />
      <ShortcutButton />
      <NearestTourGuide />
      <Footer />
    </div>
  );
}
