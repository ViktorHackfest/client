import { Navbar } from '@ui';
import { NextPage } from 'next';
import Image from 'next/image';

const Custom404: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden cursor-pointer">
        <Image
          src="/assets/images/404-page.svg"
          alt="City Image"
          width={100}
          height={100}
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default Custom404;
