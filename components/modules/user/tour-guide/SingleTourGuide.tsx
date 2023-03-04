import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

type User = {
  photoURL: string;
  displayName: string;
  email: string;
  uid: string;
};

export const SingleTourGuide = ({ tour_guide }: any) => {
  console.log(tour_guide);

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const accessToken = userAccessToken();
      if (!accessToken) return router.push('/auth/login');
      const [userInfo] = fetchUser();
      console.log(userInfo);
      setUser(userInfo);
      setIsLoggedIn(true);
    })();
  }, []);

  if (!isLoggedIn) return <div>Not Logged In</div>;
  return (
    <div>
      <Image
        src={tour_guide.city.image}
        alt="Tour Guide Image"
        width={100}
        height={100}
        className="object-cover w-full h-[340px]"
      />
      <div className="px-8 py-10">
        <div className="text-2xl font-bold">Eugenius Mario</div>
        <div className="h-2"></div>
        <div className="flex gap-4 items-center text-lg">
          <div className="flex items-center gap-[6px]">
            <AiFillStar className="w-7 h-7 text-yellow-500" />
            {Math.floor(Math.random() * 1 + 4)}.{Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
          </div>
          <div>{Math.floor(Math.random() * 10000 + 1)} reviews</div>
        </div>
        <div className="flex gap-[1px] items-center text-lg">
          <IoLocationSharp className="w-7 h-7" />
          <span className="text-lg">{tour_guide.city.name}</span>
        </div>
        <div className="text-lg">{tour_guide.city.province}</div>
        <div className="flex gap-2 py-2">
          <div className="bg-red-400 text-white text-lg rounded-xl px-2">
            Online Tour
          </div>
          <div className="bg-red-400 text-white text-lg rounded-xl px-2">
            Offline Tour
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div className="font-bold text-2xl text-center py-8">
          Where You&apos;ll be Going
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/images/booking-map.svg"
            alt="City Image"
            width={100}
            height={100}
            className="object-cover w-3/4"
          />
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <Link href={`/travel/bookings/${user?.uid}/new`}>
          <div className="cursor-pointer bg-red-400 text-xl text-white py-2 px-6 rounded-xl w-fit">
            Book Now
          </div>
        </Link>
      </div>
    </div>
  );
};
