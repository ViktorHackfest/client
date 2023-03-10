import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCalendar, AiOutlineHome } from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdInfoOutline, MdOutlineFestival } from 'react-icons/md';

const FEATURES = [
  {
    name: 'Home',
    icon: <AiOutlineHome className="text-red-500 w-10 h-10" />,
    route: '/home/',
  },
  {
    name: 'Destination',
    icon: <MdOutlineFestival className="w-10 h-10" />,
    route: '/travel/cities/',
  },
  {
    name: 'Tour Guide',
    icon: <GiPerson className="w-10 h-10" />,
    route: '/user/tour-guide/',
  },
  {
    name: 'Local Rules',
    icon: <MdInfoOutline className="w-10 h-10" />,
    route: '/travel/local-rules/',
  },
  {
    name: 'Local Event',
    icon: <AiOutlineCalendar className="w-10 h-10" />,
    route: '/travel/local-events/',
  },
  {
    name: 'Local Shop',
    icon: <HiOutlineShoppingCart className="w-10 h-10" />,
    route: '/travel/local-shop/',
  },
];

export const NavbarOpen = ({ handler }: any) => {
  return (
    <div className="absolute bg-white px-10 h-screen py-10 w-[80%] z-10">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/images/logo-navbar-tripfolk.svg"
          alt=""
          width={180}
          height={180}
        />
        <button onClick={() => handler()}>
          <GrClose className="float-right text-3xl" />
        </button>
      </div>
      <div className="h-6"></div>
      {FEATURES.map((feature: any, id_feature: number) => (
        <Link href={feature.route} key={id_feature}>
          <div className="flex items-center gap-3 text-lg py-2 px-6">
            <div>{feature.icon}</div>
            <div>{feature.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
