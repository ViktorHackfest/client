import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/viktor.tripfolk/',
    icon: <BsInstagram />,
  },
  {
    name: 'Twitter',
    url: 'https://www.linkedin.com/company/viktor-tripfolk/',
    icon: <BsTwitter />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/viktor-tripfolk/',
    icon: <BsYoutube />,
  },
];

export default SOCIAL_MEDIA;
