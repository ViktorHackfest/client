import { useWindowSize } from '@components/hooks';
import { Navbar } from '@ui';
import Image from 'next/image';

export const MobileRouting = () => {
  const { width } = useWindowSize();

  if (width > 1280) {
    return (
      <>
        <Navbar />
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src="/assets/images/must-mobile-desktop.svg"
            alt="City Image"
            width={100}
            height={100}
            className="object-cover w-full"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden cursor-pointer">
        <Image
          src="/assets/images/must-mobile-tablet.svg"
          alt="City Image"
          width={100}
          height={100}
          className="object-cover w-full"
        />
      </div>
    </>
  );
};
