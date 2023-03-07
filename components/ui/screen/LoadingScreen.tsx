import { IoMapSharp } from 'react-icons/io5';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
type LoadingScreenProps = {
  className?: string;
};
export const LoadingScreen = ({ className }: LoadingScreenProps) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="m-auto">
          <IoMapSharp className="animate-spin w-32 h-32 text-red-400" />
          <div className="h-4"></div>
          <div className="text-center animate-pulse text-xl">Loading...</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
