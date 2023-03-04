import { NAV_ROUTES, SOCIAL_MEDIA } from '@constants';
import { Body } from '@ui';
import Image from 'next/image';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
/** custom styled NextLink*/
const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink className=" " href={href}>
      <div className="cursor-pointer hover:text-cerulean">
        <Body preset="b2">{children}</Body>
      </div>
    </NextLink>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-red-400 p-10">
      <div className="flex flex-col content-center justify-center text-powder text-center">
        <div className="relative w-auto h-[8vw] pb-6 py-16 mt-8 mb-8">
          <Image
            src="/assets/images/logo-tripfolk.svg"
            alt="logo depkit"
            className="object-contain"
            layout="fill"
          />
        </div>
        <Body preset="b2" className="text-white mb-6">
          <span>Ensuring your tour safety</span>
        </Body>
        <div className="px-[3%]">
          <div className="w-full h-[1px] bg-cerulean mb-6"></div>
        </div>

        <div className="flex flex-col desktop:flex-row justify-between gap-4 px-4">
          <div className="hidden tablet:flex tablet:flex-col desktop:flex-row gap-4 desktop:gap-[4vw] content-center">
            {NAV_ROUTES.map((route) => (
              <Link key={route.name} href={route.url}>
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center scale-125 gap-6 text-white">
            {SOCIAL_MEDIA.map((social) => (
              <Link key={social.name} href={social.url}>
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="text-white pt-10 pb-5">Copyright @2023 TripFolk</div>
        </div>
      </div>
    </footer>
  );
};
