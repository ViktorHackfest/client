import { Footer, Navbar } from '@ui';
import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoLogOut } from 'react-icons/io5';

type User = {
  photoURL: string;
  displayName: string;
  email: string;
};

const Logout: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const accessToken = userAccessToken();
      if (!accessToken) return router.push('/auth/login');
      const [userInfo] = fetchUser();
      console.log(userInfo);
      setUser(userInfo);
    })();
  }, []);

  const logout = () => {
    localStorage.clear();
    router.push('/auth/login');
  };

  return (
    <div className="h-minscreen">
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
        <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md flex justify-start items-center relative">
          <IoLogOut
            fontSize={25}
            className="absolute top-3 right-3 cursor-pointer text-gray-600"
            onClick={logout}
          />
          <Image
            src={user?.photoURL!}
            className="rounded-md shadow-md"
            alt=""
            width={100}
            height={100}
          />
          <p className="text-2xl font-sans font-semibold ml-2">
            {user?.displayName}
            <span className="block text-xs font-serif font-normal">
              {user?.email}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logout;