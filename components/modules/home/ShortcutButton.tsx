import { Card } from '@ui';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdInfoOutline, MdOutlineFestival } from 'react-icons/md';

const FEATURES = [
  {
    name: 'Destination',
    icon: <MdOutlineFestival className="w-16 h-16" />,
    route: '/travel/cities/',
  },
  {
    name: 'Tour Guide',
    icon: <GiPerson className="w-16 h-16" />,
    route: '/user/tour-guide/',
  },
  {
    name: 'Local Rules',
    icon: <MdInfoOutline className="w-16 h-16" />,
    route: '/travel/local-rules/',
  },
  {
    name: 'Local Event',
    icon: <AiOutlineCalendar className="w-16 h-16" />,
    route: '/travel/local-events/',
  },
  {
    name: 'Local Shop',
    icon: <HiOutlineShoppingCart className="w-16 h-16" />,
    route: '/travel/local-shop/',
  },
];

export const ShortcutButton = () => {
  return (
    <Card preset="light" className="rounded-none">
      <div className="flex flex-wrap gap-6">
        {FEATURES.map((feature: any, id_feature: number) => (
          <Link href={feature.route} key={id_feature}>
            <div className="bg-gradient-to-b from-red-400 to-red-300 text-white text-lg font-bold rounded-2xl p-3">
              <div className="flex justify-center">{feature.icon}</div>
              <div className="flex justify-center">{feature.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};
