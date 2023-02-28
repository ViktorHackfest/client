import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

import { firebaseApp } from '@services/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login: NextPage = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const signIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response); // DEV TEST

    const { user } = response;
    const { refreshToken, providerData } = user;
    console.log(refreshToken, providerData); // DEV TEST

    localStorage.setItem('user', JSON.stringify(providerData));
    localStorage.setItem('accessToken', JSON.stringify(refreshToken));

    router.push('/');
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-800 relative">
        <Image
          src="/assets/images/auth-started.svg"
          width={100}
          height={100}
          alt=""
          className="absolute top-0 left-0 w-screen h-screen object-cover"
        />
        <div className="top-0 left-0 right-0 bottom-0 absolute bg-black opacity-50"></div>
        <div
          className="flex justify-center items-center border border-gray-300 p-2 bg-white bg-opacity-60 
                rounded-full cursor-pointer hover:shadow-md hover:bg-opacity-100 duration-150 ease-in-out z-10"
          onClick={signIn}
        >
          <FcGoogle fontSize={30} />
          <p className="text-lg font-semibold ml-4">Sign in with Google</p>
        </div>
      </div>
    </>
  );
};

export default Login;

// References:
// https://www.youtube.com/watch?v=gGshLDSconM
