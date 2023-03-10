import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { NavbarOpen } from './NavbarOpen';

type User = {
  photoURL: string;
  displayName: string;
  email: string;
};

export const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();
  const [showNavbarOpen, setShowNavbarOpen] = useState(false);

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

  const navbarOpenHandler = () => {
    setShowNavbarOpen(!showNavbarOpen);
    console.log('TEST');
  };


  if (!isLoggedIn)
    return (
      <>
        {showNavbarOpen && <NavbarOpen handler={navbarOpenHandler} />}
        <div className="flex justify-between border-b-2 border-b-black py-4 px-4">
          <Image
            src="/assets/images/logo-navbar-tripfolk.svg"
            alt=""
            width={100}
            height={100}
          />
          <div className="flex items-center gap-4">
            <div className="text-lg">Hi, Guest!</div>
            <button onClick={navbarOpenHandler}>
              <BsList size={26} />
            </button>
          </div>
        </div>
      </>
    );
  else {
    // Logged In User
    return (
      <>
        {showNavbarOpen && <NavbarOpen handler={navbarOpenHandler} />}
        <div className="flex justify-between shadow-xl shadow-red-500/5 py-4 px-4">
          <Image
            src="/assets/images/logo-navbar-tripfolk.svg"
            alt=""
            width={100}
            height={100}
          />
          <div className="flex items-center gap-4">
            <Image
              src={user?.photoURL!}
              className="rounded-full"
              alt=""
              width={30}
              height={30}
            />
            <div className="text-lg">Hi, {user?.displayName}</div>
            <button onClick={navbarOpenHandler}>
              <BsList size={26} />
            </button>
          </div>
        </div>
      </>
    );
  }
};
